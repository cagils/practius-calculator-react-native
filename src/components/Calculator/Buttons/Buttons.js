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

import CalcButton from './CalcButton'

const Buttons = (props) => (
    <View style={styles.buttonsContainer}>
        <View style={styles.padArea}>
            <View style={styles.gridContainer}>
                {
                    props.pad.map((rows, row) =>
                        <View style={styles.row} key={row}>
                            {
                                rows.map((id) =>
                                    <CalcButton
                                        key={id}
                                        id={id}
                                        button={props.buttons[id]}
                                        parenCount={props.parenCount}
                                        onPressButton={() => props.onPressButton(id)}
                                    />
                                )
                            }
                        </View>
                    )
                }
            </View>
        </View>
        <View style={styles.opsArea}>
            <View style={styles.gridContainer}>
                {
                    props.ops.map((id) =>
                        <CalcButton
                            key={id}
                            id={id}
                            button={props.buttons[id]}
                            onPressButton={() => props.onPressButton(id)}
                        />
                    )
                }
            </View>
        </View >
    </View>
)

Buttons.propTypes = {
    buttons: PropTypes.object,
    pad: PropTypes.array,
    ops: PropTypes.array,
    onPressButton: PropTypes.func.isRequired,
    parenCount: PropTypes.number
}
Buttons.defaultProps = {
    parenCount: 0
}

export default Buttons