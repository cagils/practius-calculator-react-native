import { calculate } from 'app/tools'
import { buttons } from 'app/config'

export const updateStateOnCarry = (prevState, props) => ({
  parenCount: 0,
  input: prevState.result,
})

export const updateStateOnDel = (prevState, props) => {
  let par = prevState.parenCount
  const lastChar = prevState.input.slice(-1)

  lastChar === '(' && par--
  lastChar === ')' && par++
  return { parenCount: par, input: prevState.input.slice(0, -1) }
}

export const updateStateOnEqu = (prevState, props) => {
  let calculated = '0'
  try {
    calculated = calculate(prevState.input)
    if (calculated === '') {
      calculated = '0'
    }
  } catch (e) {
    let type = 'error'
    if (e.message.startsWith('Parenthesis') || e.message.startsWith('Unexpected end')) {
      type = 'warning'
    }
    return { error: { type, name: e.name, message: e.message } }
  }
  return { result: calculated, error: null }
}

export const updateStateOnPar = (prevState, props) => {
  let par = prevState.parenCount
  const lastChar = prevState.input.slice(-1)
  let parToAdd = ''

  if (lastChar === '') {
    parToAdd = '('
    par++
  } else if (/^\d$/.test(lastChar)) {
    if (par !== 0) {
      parToAdd = ')'
      par--
    }
  } else if (/[*/+\-]/.test(lastChar)) {
    parToAdd = '('
    par++
  } else if (lastChar === ')') {
    if (par > 0) {
      parToAdd = ')'
      par--
    }
  } else if (lastChar === '(') {
    parToAdd = '('
    par++
  } else if (lastChar === '.') {
    // do nothing
  }

  return { parenCount: par, input: prevState.input + parToAdd }
}

export const updateStateOnPaste = clipboard => (prevState, props) => ({
  input: prevState.input + clipboard,
})

export const updateStateOnDefault = id => (prevState, props) => ({
  input: prevState.input + buttons[id].value,
})
