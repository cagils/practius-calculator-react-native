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

const AppBar = () => (
    <View style={styles.appBarContainer}>
        <View style={styles.appBar}>
            <Text style={styles.textBar}>Practius Calculator</Text>
        </View>
    </View>
)

export default AppBar