import Home from './src/screens/Home';
import Themes from './src/screens/Themes';
import { createStackNavigator } from 'react-navigation';

const App = createStackNavigator(
    {
        Home,
        Themes
    }
);

export default App;