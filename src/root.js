import React from 'react';
import { createStackNavigator , StackNavigator , TabNavigator, SwitchNavigator, createDrawerNavigator} from 'react-navigation';
import { Platform , ScrollView, Text} from 'react-native';
import SplashAuto from 'react-native-splash-screen';
import IconHeader from 'react-native-vector-icons/dist/MaterialCommunityIcons';

import colors from './styles/colors';



//
//  import Our Component
//
import SplashScreen from './splash';
import MainScreen from './components/screens/main';
import MyprofileScreen from './components/screens/myProfile';
import MyfavoritScreen from './components/screens/myFavorit';
import AboutFalangScreen from './components/screens/aboutFalang';
import SettingScreen from './components/screens/setting';

// auth root
import AuthScreen from './components/auth/auth';
import LoginScreen from './components/auth/login';
import ActivityScreen from './components/auth/activity';

import IndexScreen from './components/wordsBox/index';  // show words

import ProScreen from './components/proComponent/proIndex';
import PaymentScreen from './components/proComponent/payment';

//
// Dashboard Comnponer  ---------------------------->
//

import ProductScreen from './components/screens/product';
import QrCompoenentScreen from './components/screens/qrCompoen';
import TicketComponnetScreen from './components/screens/ticket';


import TestScreen from './test';

import SideBar from './components/menu/sideMenu';






//
// Main and Maser Components
//


const defaultNavigationOptions = {
    headerStyle: {
      backgroundColor: 'transparent',
      position: 'absolute',
      zIndex: 100,
      elevation: 2,
      top: 0,
      left: 0,
      right: 0,  
    },
    headerTintColor: colors.black,
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    }
    
  }


// All Auth component befor login is hear ------>
const AuthLoadingScreen = StackNavigator({

    Splash : {
        screen : SplashScreen
    },
    Auth : {
        screen : AuthScreen
    },
    Login : {
        screen : LoginScreen,  navigationOptions: { ...defaultNavigationOptions },
    },
    Activity : {
        screen : ActivityScreen
    },

    
    Test : {
        screen : TestScreen
    },

},
{
     initialRouteName : 'Auth',
    //  initialRouteName : 'Login',
    // initialRouteName : 'Paymnet',
    //  initialRouteName : 'Index',
    headerMode: 'none'

}) 


 // All orginal Component After login in hear ----->
const MainStack = createStackNavigator({
    Main : {
        screen : MainScreen,
        navigationOptions: ({ navigation }) => ({  
            title: 'Falang',  // Title to appear in status bar
            headerRight: <IconHeader name="menu" size={25} style={{paddingRight: 10}} color={colors.white} onPress={ () => navigation.openDrawer() } />,
           
          }),
      
    },
    Index : {
        screen : IndexScreen
    },    
    MyProfile : {
        screen : MyprofileScreen
    },   
    MyFavorit : {
        screen : MyfavoritScreen
    },    
    AboutFalang : {
        screen : AboutFalangScreen
    },    
    Setting : {
        screen : SettingScreen
    },
    ProIndex : {
        screen : ProScreen
    },
    Paymnet : {
        screen : PaymentScreen
    },
    ProductComponent : {
        screen : ProductScreen
    },
    QrCompoenent : {
        screen : QrCompoenentScreen
    },
    TicketComponnet : {
        screen : TicketComponnetScreen
    }

},
{
   
    navigationOptions: {...defaultNavigationOptions}
})


 // All orginal Drawer menu is hear ----->
 const Drawer = createDrawerNavigator({
    Home : {
        screen : MainStack
    },
    Setting : {
        screen : MainStack
    },
    About : {
        screen : MainStack
    },

},{
        drawerPosition:'right',    // right
        drawerOpenRoute: "DrawerOpen",
        drawerCloseRoute: "DrawerClose",
        drawerToggleRoute: "DrawerToggle",
        contentOptions: { activeTintColor: 'rgb(234, 94, 32)'  }, 
        contentComponent: props => 
  <ScrollView>
    <SideBar {...props} />
  </ScrollView>

 
})


const App = SwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: Drawer, 
    },
    {
      initialRouteName: 'AuthLoading',
    },
  )





//
// export App from root stack
//

export default class Root  extends React.Component{

    componentDidMount() {
        if (Platform.OS !== 'ios') SplashAuto.hide();
        console.disableYellowBox = true

      }


    render(){
        return( 
            // <AboutFalangScreen />
            // <SettingScreen />
            // <MyprofileScreen />
            <App />
        
        );
    }
}


