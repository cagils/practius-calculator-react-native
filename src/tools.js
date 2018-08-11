import math from 'mathjs'

math.config({
  number: 'BigNumber',
})

const isNumericCustom = n => !Number.isNaN(parseFloat(n)) && Number.isFinite(n)

//  const calculateWithEval = evalString => eval(evalString).toString()

const calculateWithMathjs = evalString => math.eval(evalString).toString()

const calculate = evalString => (evalString ? calculateWithMathjs(evalString) : '')

const format = (input, buttons) =>
  input.replace(/[*/+\-]/g, c => {
    switch (c) {
      case '*':
        return buttons.mul.label
      case '/':
        return buttons.div.label
      case '+':
        return buttons.add.label
      case '-':
        return buttons.sub.label
      default:
        return null
    }
  })

export { isNumericCustom, calculate, format }
