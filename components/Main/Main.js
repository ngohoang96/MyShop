import { createDrawerNavigator } from 'react-navigation';
import Shop from './Shop/Shop'
import Menu from './Menu';
const Drawer = createDrawerNavigator({
    Shop : {screen : Shop}},{
        contentComponent : Menu

})
export default Drawer;