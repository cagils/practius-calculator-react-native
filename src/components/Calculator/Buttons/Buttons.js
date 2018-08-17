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

import CalcButton from './CalcButton'

const Buttons = ({ pad, buttons, parenCount, onPressButton, ops }) => (
  <View style={styles.buttonsContainer}>
    <View style={styles.padArea}>
      <View style={styles.gridContainer}>
        {pad.map((rows, row) => (
          <View style={styles.row} key={row}>
            {rows.map(id => (
              <CalcButton
                key={id}
                id={id}
                button={buttons[id]}
                parenCount={parenCount}
                onPressButton={() => onPressButton(id)}
              />
            ))}
          </View>
        ))}
      </View>
    </View>
    <View style={styles.opsArea}>
      <View style={styles.gridContainer}>
        {ops.map(id => (
          <CalcButton
            key={id}
            id={id}
            button={buttons[id]}
            onPressButton={() => onPressButton(id)}
          />
        ))}
      </View>
    </View>
  </View>
)

Buttons.propTypes = {
  buttons: PropTypes.object.isRequired,
  pad: PropTypes.array.isRequired,
  ops: PropTypes.array.isRequired,
  onPressButton: PropTypes.func.isRequired,
  parenCount: PropTypes.number,
}

Buttons.defaultProps = {
  parenCount: 0,
}

export default Buttons
