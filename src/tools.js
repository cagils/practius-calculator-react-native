import math from 'mathjs'

math.config({
    number: 'BigNumber',
});

const isNumericCustom = (n) => (!isNaN(parseFloat(n)) && isFinite(n))

const _calculateWithEval = (evalString) => (eval(evalString).toString())

const _calculateWithMathjs = (evalString) => (math.eval(evalString).toString())

const calculate = (evalString) => (evalString ? _calculateWithMathjs(evalString) : '')

const format = (input, buttons) => (
    input.replace(/[*/+\-]/g, (c) => {
            switch (c) {
                case '*':
                    return buttons.mul.label
                    break
                case '/':
                    return buttons.div.label
                    break
                case '+':
                    return buttons.add.label
                    break
                case '-':
                    return buttons.sub.label
                    break
            }
        }
    )
)

export {isNumericCustom, calculate, format}

