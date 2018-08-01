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

const CalcButton = (props) => (
    <TouchableHighlight style={styles.buttonContainer} underlayColor='cyan'
                        onPress={props.onPressButton}>
        <View style={styles.button}>
            {props.id === 'par' ?
                <View style={styles.viewPar}>
                    <Text style={styles.textButton}>
                        {props.button.value[0]}
                        <Text style={styles.textTicker}>{props.parenCount || ' '}</Text>
                        {props.button.value[1]}
                    </Text>
                </View>
                : <Text style={(props.button.type === 'operator') ? styles.textButtonOp : styles.textButton}>{props.button.label}</Text>
            }
        </View>
    </TouchableHighlight>
)

CalcButton.propTypes = {
    id: PropTypes.string.isRequired,
    button: PropTypes.object.isRequired,
    parenCount: PropTypes.number,
    onPressButton: PropTypes.func.isRequired,
}

CalcButton.defaultProps = {
    parenCount: 0
}

export default CalcButton