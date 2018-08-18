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
  ScrollView,
} from 'react-native'

import styles from 'app/styles'

import Icon from 'components/common/Icon'
import DisplayButton from './DisplayButton'

const Display = ({
  input,
  result,
  onPressDisplayButton,
  onErase,
  onLongErase,
  error,
  pasteError,
}) => {
  let resultFontSize = 120
  let resultNumLines = 1
  const len = result.length
  // max: 76
  if (len > 48) {
    resultFontSize = 28
    resultNumLines = 4
  } else if (len > 32) {
    resultFontSize = 32
    resultNumLines = 3
  } else if (len > 16) {
    resultFontSize = 40
    resultNumLines = 3
  } else if (len > 6) {
    resultFontSize = 60
    resultNumLines = 2
  } else if (len > 5) {
    resultFontSize = 80
    resultNumLines = 1
  } else if (len > 4) {
    resultFontSize = 100
    resultNumLines = 1
  }

  let resultStyle = {}
  if (error === null) {
    resultStyle = styles.textDisplayResult
  } else if (error.type === 'warning') {
    resultStyle = styles.textDisplayResultWarning
  } else {
    resultStyle = styles.textDisplayResultError
  }

  return (
    <View style={styles.displayContainer}>
      <View style={styles.resultArea}>
        <View style={styles.displayOps}>
          <DisplayButton onPressButton={() => onPressDisplayButton('copy')}>
            <Icon name="copy" style={styles.textDisplayButtons} />
          </DisplayButton>
          <DisplayButton onPressButton={() => onPressDisplayButton('paste')}>
            <Icon name="paste" style={styles.textDisplayButtons} />
          </DisplayButton>
          <DisplayButton onPressButton={() => onPressDisplayButton('carry')}>
            <Icon name="carrydown" style={styles.textDisplayButtons} />
          </DisplayButton>
        </View>
        <View style={styles.displayResultContainer}>
          <View style={styles.displayResult}>
            <Text
              numberOfLines={resultNumLines}
              style={[resultStyle, { fontSize: resultFontSize }]}>
              {result}
            </Text>
          </View>
          {error &&
            error.type === 'error' && (
              <View style={styles.error}>
                <Text numberOflines={1} style={styles.textError}>
                  {`${error.name}: ${error.message}`}
                </Text>
              </View>
            )}
        </View>
      </View>
      <View style={styles.inputArea}>
        <View style={styles.inputAreaScrollWrapper}>
          <ScrollView
            contentContainerStyle={{}}
            horizontal={true}
            ref={ref => (this.scrollView = ref)}
            onContentSizeChange={({}) => {
              this.scrollView.scrollToEnd({ animated: true })
            }}>
            <View style={styles.displayLine}>
              <Text style={styles.textDisplayLine}>{input}</Text>
              {pasteError && (
                <View style={styles.pasteError}>
                  <Text style={{ flex: 1 }} numberOflines={1} style={styles.textPasteError}>
                    {pasteError}
                  </Text>
                </View>
              )}
            </View>
          </ScrollView>
        </View>
        <View style={styles.displayErase}>
          <TouchableOpacity
            style={styles.displayEraseTouchable}
            onPress={onErase}
            onLongPress={onLongErase}>
            <Icon name="backspace" style={styles.textDisplayErase} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

Display.propTypes = {
  input: PropTypes.string,
  result: PropTypes.string,
  onErase: PropTypes.func.isRequired,
  onLongErase: PropTypes.func.isRequired,
  onPressDisplayButton: PropTypes.func.isRequired,
  error: PropTypes.object,
  pasteError: PropTypes.string,
}

Display.defaultProps = {
  input: '',
  result: '0',
  error: null,
  pasteError: null,
}

export default Display
