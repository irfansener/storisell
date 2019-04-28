import Home from './src/screens/Home';
import Themes from './src/screens/Themes';
import ThemeOne from './src/screens/ThemeOne';
import ThemeTwo from './src/screens/ThemeTwo';
import ThemeThree from './src/screens/ThemeThree';
import ThemeFour from './src/screens/ThemeFour';
import { createStackNavigator } from 'react-navigation';
console.disableYellowBox = true;
const App = createStackNavigator(
    {
        Home,
        Themes,
        ThemeOne,
        ThemeTwo,
        ThemeThree,
        ThemeFour
    }
);

export default App;