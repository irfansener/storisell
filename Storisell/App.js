import Home from './src/screens/Home';
import Themes from './src/screens/Themes';
import ThemeOne from './src/screens/ThemeOne';
import ThemeTwo from './src/screens/ThemeTwo';
import ThemeThree from './src/screens/ThemeThree';
import ThemeFour from './src/screens/ThemeFour';
import { createStackNavigator } from 'react-navigation';

const App = createStackNavigator(
    {
        Themes,
        Home,
        ThemeOne,
        ThemeTwo,
        ThemeThree,
        ThemeFour
    }
);

export default App;