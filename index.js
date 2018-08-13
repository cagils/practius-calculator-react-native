import { AppRegistry } from 'react-native'
import App from './src/App'

// *** Enable these 2 lines to spy on the bridge messaging on the console ***
// import MessageQueue from 'react-native/Libraries/BatchedBridge/MessageQueue';
// MessageQueue.spy(true);

AppRegistry.registerComponent('calculator', () => App)
