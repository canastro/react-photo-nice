export const FILTERS = {
    brightness: {
        description: 'Brightness',
        modifiers: [{
            key: 'adjustment',
            type: {
                name: 'slider',
                min: 0,
                max: 100
            }
        }]
    },
    contrast: {
        description: 'Contrast',
        modifiers: [{
            key: 'contrast',
            type: {
                name: 'slider',
                min: 0,
                max: 100
            }
        }]
    },
    colorize: {
        description: 'Colorize',
        modifiers: [{
            key: 'color',
            type: {
                name: 'hex'
            }
        }, {
            key: 'level',
            type: {
                name: 'slider',
                min: 0,
                max: 100
            }
        }]
    },
    gamma: {
        description: 'Gamma',
        modifiers: [{
            key: 'adjustment',
            type: {
                name: 'slider',
                min: 0,
                max: 100
            }
        }]
    },
    grayscale: {
        description: 'Grayscale',
        modifiers: []
    },
    // invert: {
    //     description: 'Invert',
    //     modifiers: []
    // },
    sepia: {
        description: 'Sepia',
        modifiers: []
    },
    threshold: {
        description: 'Threshold',
        modifiers: [{
            key: 'threshold',
            type: {
                name: 'slider',
                min: 0,
                max: 100
            }
        }]
    }
};
