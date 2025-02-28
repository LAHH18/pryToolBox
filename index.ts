import { registerRootComponent } from 'expo';

import App from './App';
import Inicio from './app/Screen/Inicio';
import Login from './app/Screen/Login';
import Registro from './app/Screen/Registro';//Ya
import Producto from './app/Screen/Producto';
import IoT from './app/Screen/IoT';//Ya

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(Inicio);
