import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen790279Navigator from '../features/BlankScreen790279/navigator';
import BlankScreen690278Navigator from '../features/BlankScreen690278/navigator';
import BlankScreen590277Navigator from '../features/BlankScreen590277/navigator';
import BlankScreen490276Navigator from '../features/BlankScreen490276/navigator';
import BlankScreen390275Navigator from '../features/BlankScreen390275/navigator';
import BlankScreen290274Navigator from '../features/BlankScreen290274/navigator';
import BlankScreen190269Navigator from '../features/BlankScreen190269/navigator';
import BlankScreen090245Navigator from '../features/BlankScreen090245/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen790279: { screen: BlankScreen790279Navigator },
BlankScreen690278: { screen: BlankScreen690278Navigator },
BlankScreen590277: { screen: BlankScreen590277Navigator },
BlankScreen490276: { screen: BlankScreen490276Navigator },
BlankScreen390275: { screen: BlankScreen390275Navigator },
BlankScreen290274: { screen: BlankScreen290274Navigator },
BlankScreen190269: { screen: BlankScreen190269Navigator },
BlankScreen090245: { screen: BlankScreen090245Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
