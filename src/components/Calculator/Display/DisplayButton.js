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

const DisplayButton = (props) => (
    <TouchableHighlight
        style={styles.displayButtons}
        underlayColor='cyan'
        onPress={props.onPressButton}
    >
        <View>
            {props.children}
        </View>
    </TouchableHighlight>
)

DisplayButton.propTypes = {
    onPressButton: PropTypes.func.isRequired,
    style: Text.propTypes.style,
}

DisplayButton.defaultProps = {
    style: {},
}

export default DisplayButton
