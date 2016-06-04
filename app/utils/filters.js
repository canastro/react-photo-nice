import ImageFilterBrightness from 'image-filter-brightness';
import ImageFilterColor from 'image-filter-color';
import ImageFilterContrast from 'image-filter-contrast';
import ImageFilterGamma from 'image-filter-gamma';
import ImageFilterGrayscale from 'image-filter-grayscale';
import ImageFilterInvert from 'image-filter-invert';
import ImageFilterSepia from 'image-filter-sepia';
import ImageFilterThreshold from 'image-filter-threshold';

import merge from 'lodash/merge';

const fn = {
    brightness: ImageFilterBrightness,
    color: ImageFilterColor,
    contrast: ImageFilterContrast,
    gamma: ImageFilterGamma,
    grayscale: ImageFilterGrayscale,
    invert: ImageFilterInvert,
    sepia: ImageFilterSepia,
    threshold: ImageFilterThreshold
};

// TODO: Change to something like this: http://codepen.io/canastro/pen/bpXBov?editors=0011

/**
 * @name getCanvas
 * @param {number} w - width
 * @param {number} h - height
 */
function getCanvas(w, h) {
    var canvas = document.createElement('canvas');
    canvas.width = w;
    canvas.height = h;

    return canvas;
}

class Filters {
    constructor (file) {
        this.originalData = null;
        this.data = [];
        this.filters = [];
    }

    addFile (file) {
        return this.getPixelsFromFile(file);
    }

    getPixelsFromFile (file) {
        return new Promise((resolve) => {
            const reader = new FileReader();

            reader.addEventListener('load', () => {
                const element = document.createElement('img');
                element.setAttribute('src', reader.result);

                const canvas = getCanvas(element.width, element.height);
                const context = canvas.getContext('2d');
                context.drawImage(element, 0, 0);

                this.originalData = context.getImageData(0, 0, canvas.width, canvas.height);
                this.data = [
                    this.originalData
                ];

                return resolve(this.originalData);
            }, false);

            reader.readAsDataURL(file);
        });
    }

    addFilter (key, modifiers) {
        this.filters.push({
            key,
            modifiers
        });

        const data = merge({}, {
            data: this.data[this.data.length - 1]
        }, modifiers);

        return fn[key](data).then((result) => this.data.push(data));
    }

    // applyAllFilters (filters) {
    //     const current = fn[filters[0].key]({
    //         data: this.originalData
    //     });
    //
    //     for (let i = 1; i !== filters.length; i++) {
    //         current.then((result) => {
    //             fn[filters[i]]({
    //                 data: result
    //             });
    //         });
    //     }
    //
    //     return current.then((result) => this.data = result);
    // }
}

export default new Filters();
