export const EFFECTS = {
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
        modifiers: []
    },
    gamma: {
        description: 'Gamma',
        modifiers: []
    },
    grayscale: {
        description: 'Grayscale',
        modifiers: []
    }
};
