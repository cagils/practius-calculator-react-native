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

import styles from 'app/styles'

import AppBar from './AppBar/AppBar'
import Display from './Display/Display'
import Buttons from './Buttons/Buttons'

import {buttons, ops, pad} from 'app/config'
import {format} from 'app/tools'

const Calculator = (props) => (
    <View style={styles.container}>
        <AppBar/>
        <Display
            input={format(props.input, buttons)}
            result={props.result}
            onErase={props.onErase}
            onLongErase={props.onLongErase}
            onPressDisplayButton={props.onDisplayButton}
            error={props.error}
            pasteError={props.pasteError}
        />
        <Buttons
            buttons={buttons}
            pad={pad}
            ops={ops}
            parenCount={props.parenCount}
            onPressButton={props.onPressButton}
        />
    </View>
)

Calculator.propTypes = {
}

Calculator.defaultProps = {
}

export default Calculator