import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity,
  Clipboard,
  Platform,
} from 'react-native'

import styles from 'app/styles'

const DisplayButton = ({ onPressButton, children }) => (
  <TouchableHighlight style={styles.displayButtons} underlayColor="cyan" onPress={onPressButton}>
    <View>{children}</View>
  </TouchableHighlight>
)

DisplayButton.propTypes = {
  children: PropTypes.node,
  onPressButton: PropTypes.func.isRequired,
}

DisplayButton.defaultProps = {
  children: null,
}

export default DisplayButton
