import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    TouchableOpacity,
    Clipboard,
    Platform
} from 'react-native'

import {
    updateStateOnCarry,
    updateStateOnDel,
    updateStateOnEqu,
    updateStateOnPar,
    updateStateOnPaste,
    updateStateOnDefault
} from 'app/stateChanges'

import {isNumericCustom} from 'app/tools'

import Calculator from './Calculator'

class CalculatorContainer extends Component {
    static defaultProps = {};
    static propTypes = {};

    constructor(props) {
        super(props) // This makes this.props available in constructor

        this.state = {
            input: '',
            result: '0',
            parenCount: 0,
            error: null,
            pasteError: null,
        }

        this.callbacks = {
            onPressButton: this.onPressButton,
            onDisplayButton: this.onDisplayButton,
            onErase: this.onErase,
            onLongErase: this.onLongErase
        }
    }

    onPressButton = (id) => {
        switch (id) {
            case 'ac':
                this.setState({parenCount: 0, input: '', result: '0'})
                break
            case 'equ':
                this.setState(updateStateOnEqu)
                break
            case 'par':
                this.setState(updateStateOnPar)
                break
            default:
                this.setState(updateStateOnDefault(id))
                break
        }
        this.setState(updateStateOnEqu)
    }

    onDisplayButton = async(id) => {
        switch (id) {
            case 'copy':
                await Clipboard.setString(this.state.result)
                break
            case 'paste':
                const clipboard = await Clipboard.getString()
                if (isNumericCustom(clipboard)) {
                    this.setState(updateStateOnPaste(clipboard))
                    this.setState(updateStateOnEqu)
                } else {
                    this.setState({pasteError: 'Value is not numeric'},
                        () => {
                            setTimeout(() => {
                                this.setState({pasteError: null})
                            }, 2000)
                        }
                    )
                }
                break
            case 'carry':
                this.setState(updateStateOnCarry)
                break
        }
    }

    onErase = () => {
        this.setState(updateStateOnDel)
        this.setState(updateStateOnEqu)
    }

    onLongErase = () => {
        this.setState({input: ''})
        this.setState(updateStateOnEqu)
    }

    render() {
        return (
            <Calculator {...this.state} {...this.callbacks}/>
        )
    }
}

export default CalculatorContainer