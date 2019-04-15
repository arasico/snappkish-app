import React, { Component } from 'react';
import {View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { DrawerNavigator, DrawerItems}  from 'react-navigation';
import Icons from 'react-native-vector-icons/Ionicons';
import colors from '../../styles/colors';


 

class HeaderMain extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
   
  onButtonPress = () => {
    this.props.navigation.openDrawer('DrawerOpen');

  }

  render() { 
 
    return ( 

     <View style={styles.container}>
       
        <View style={styles.titleContainer}>
            <Text style={{color:'#fff', fontSize:16}}>{this.props.title}</Text>
        </View>

        <TouchableOpacity onPress = { this.onButtonPress }  style={styles.menuContainer}>
            <Icons name="ios-menu" size={24} color="#fff"  />
        </TouchableOpacity>
     </View>
         

      
     );
  }
}
 

const styles = StyleSheet.create({

  container:{
    height:50,
    backgroundColor:'transparent',
    flexDirection: 'row',

  },
  menuContainer:{
      flex: 1,
      alignItems:'center',
      justifyContent:'center',


  },
  titleContainer:{
    paddingLeft:20,
    alignItems:'flex-start',
    justifyContent:'center',
    flex:5
  }
})
 
export default HeaderMain;