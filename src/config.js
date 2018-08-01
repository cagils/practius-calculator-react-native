const buttons = {
    1: {type: 'no', label: '1', value: '1'},
    2: {type: 'no', label: '2', value: '2'},
    3: {type: 'no', label: '3', value: '3'},
    4: {type: 'no', label: '4', value: '4'},
    5: {type: 'no', label: '5', value: '5'},
    6: {type: 'no', label: '6', value: '6'},
    7: {type: 'no', label: '7', value: '7'},
    8: {type: 'no', label: '8', value: '8'},
    9: {type: 'no', label: '9', value: '9'},
    0: {type: 'no', label: '0', value: '0'},
    dot: {type: 'special', label: '.', value: '.'},
    par: {type: 'special', label: '( )', value: ['(', ')']},
    div: {type: 'operator', label: '\u{00F7}', value: '/'},  // '÷'
    mul: {type: 'operator', label: '\u{00D7}', value: '*'}, // '×'
    add: {type: 'operator', label: '\u{002B}', value: '+'}, // '+'
    sub: {type: 'operator', label: '\u{2212}', value: '-'}, // '−'
    c: {type: 'control', label: 'C', value: 'C'},
    equ: {type: 'control', label: '=', value: '='},
}

const pad = [
    ['7', '8', '9'],
    ['4', '5', '6'],
    ['1', '2', '3'],
    ['par', '0', 'dot'],
]

const ops = ['add', 'sub', 'mul', 'div']

export {buttons, pad, ops}