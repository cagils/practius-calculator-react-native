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

import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'

const iconComps = {
    ion: Ionicons,
    mat: MaterialIcons,
    faw: FontAwesome,
}

const icons = Platform.select({
    ios: {
        backspace: {type: 'ion', name: 'ios-backspace'},
        carrydown: {type: 'faw', name: 'caret-down'},
        copy: {type: 'faw', name: 'clone'},
        paste: {type: 'faw', name: 'clipboard'},
    },
    android: {
        backspace: {type: 'ion', name: 'md-backspace'},
        carrydown: {type: 'faw', name: 'caret-down'},
        copy: {type: 'faw', name: 'clone'},
        paste: {type: 'faw', name: 'clipboard'},
    }
})

const Icon = (props) => {
    let icon = icons[props.name]
    let IconComp = iconComps[icon.type]
    return (<IconComp name={icon.name} style={props.style}/>)
}

Icon.propTypes = {
    name: PropTypes.string.isRequired,
    style: Text.propTypes.style,
}

Icon.defaultProps = {
    style: {}
}

export default Icon