/**
 * @format
 */
import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import { Main } from './src/components/Main/Main';

AppRegistry.registerComponent(appName, () => Main);
