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

const CalcButton = ({ id, onPressButton, button, parenCount }) => (
  <TouchableHighlight style={styles.buttonContainer} underlayColor="cyan" onPress={onPressButton}>
    <View style={styles.button}>
      {id === 'par' ? (
        <View style={styles.viewPar}>
          <Text style={styles.textButton}>
            {button.value[0]}
            <Text style={styles.textTicker}>{parenCount || ' '}</Text>
            {button.value[1]}
          </Text>
        </View>
      ) : (
        <Text style={button.type === 'operator' ? styles.textButtonOp : styles.textButton}>
          {button.label}
        </Text>
      )}
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
  parenCount: 0,
}

export default CalcButton
