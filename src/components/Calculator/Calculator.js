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
  StatusBar,
} from 'react-native'

import styles from 'app/styles'

import { buttons, ops, pad } from 'app/config'
import { format } from 'app/tools'
import AppBar from './AppBar/AppBar'
import Display from './Display/Display'
import Buttons from './Buttons/Buttons'

const Calculator = ({
  input,
  result,
  onErase,
  onLongErase,
  onDisplayButton,
  error,
  pasteError,
  parenCount,
  onPressButton,
}) => (
  <View style={styles.container}>
    <StatusBar translucent animated networkActivityIndicatorVisible barStyle="light-content" />
    {Platform.OS === 'android' && Platform.Version >= 20 ? (
      <View style={styles.statusBarFiller} />
    ) : null}
    <AppBar />
    <Display
      input={format(input, buttons)}
      result={result}
      onErase={onErase}
      onLongErase={onLongErase}
      onPressDisplayButton={onDisplayButton}
      error={error}
      pasteError={pasteError}
    />
    <Buttons
      buttons={buttons}
      pad={pad}
      ops={ops}
      parenCount={parenCount}
      onPressButton={onPressButton}
    />
  </View>
)

Calculator.propTypes = {}

Calculator.defaultProps = {}

export default Calculator
