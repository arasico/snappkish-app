import React, { Component } from 'react';
import {View, Text, StyleSheet, Button, ImageBackground, Image } from 'react-native';
import { DrawerNavigator, DrawerItems}  from 'react-navigation';

import HomeScreen from './screens/main';
 


class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  render() { 
    return ( 

          <MyApp   />
      
     );
  }
}

const customDrawerComponent = (props)  => (

  <View style={styles.container}>
      {/* <ImageBackground source={require('./src/assets/img/bg.jpg')} style={styles.imageContainer}>
          <View style={styles.AvatarContainer}>
            <Image source={require('./src/assets/img/avatar.png')}    style={styles.avatarSize} />
          </View>
      </ImageBackground> */}
      <DrawerItems {...props} />

  </View>
)


const MyApp = DrawerNavigator({
  Home:{
    screen : HomeScreen
  },
  Settings:{
    screen : HomeScreen
  },
  Notification:{
    screen : HomeScreen
  },
  About:{
    screen : HomeScreen
  }
},{
  drawerPosition:'right',    // right
  contentComponent: customDrawerComponent,
  drawerOpenRoute: "DrawerOpen",
  drawerCloseRoute: "DrawerClose",
  drawerToggleRoute: "DrawerToggle",
  contentOptions: {
    activeTintColor: 'rgb(234, 94, 32)'

}


})


const styles = StyleSheet.create({

  container:{
    flex:1,
    backgroundColor:'#fcfcfc'
  },
  imageContainer:{
    backgroundColor:'#444',
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',

  },
  avatarSize:{
    
    height:80,
    width: 80,
   
  },
  AvatarContainer:{
    height:110,
    width: 110,
    backgroundColor:'#fff',
    borderRadius:100,
    alignItems: 'center',
    justifyContent: 'center',
    padding:30,
    borderWidth:3,
    borderColor:'#333'

  }
})
 
export default Main;