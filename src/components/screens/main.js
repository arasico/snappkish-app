import React, {Component } from "react";
import {  View , StyleSheet , ImageBackground ,Image, Text , TouchableOpacity } from "react-native";
import { Container, Left, Button, Body, Title, Right, Header , Icon} from 'native-base';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as loc,
    removeOrientationListener as rol
  } from 'react-native-responsive-screen';

import Icons from '../../styles/icons'

import colors from '../../styles/colors';
 
import Wallet from '../main/notification';
import Progress from '../main/progress';
import Footer from '../main/footer';
import HeaderMain from "../headers/headerMain";

class Main extends Component{



    CallWordBox = () =>{
        this.props.navigation.navigate('Index');

    }

    _callNotification = () =>{
        this.props.navigation.navigate('ProIndex');

    }


    onButtonPress = () => {
        this.props.navigation.openDrawer();
    
      }
    
      static navigationOptions = {
        drawerIcon : (
          <Icon name="home" size={24} color="#222"  />
        ),
        title: 'Home',
        
      }


    render(){
        return (

            <View style={styles.container} >
                      
                   


                   
                    <View style={styles.cardUp}>
                        <Image source={require('../../assets/img/dashboard-blue.png')} style={styles.backgroundImage}>
                        
                        </Image>
                    </View>
                    <View style={styles.cardDwon}></View>

            </View>
        )
    }
}

const styles = StyleSheet.create({


    container:{
        flex:1,

    },

    cardUp:{
        flex:2,
        flexDirection:'column',
        backgroundColor:'blue',
          

    },
    cardDwon:{
        flex:4,
        flexDirection:'column',
        backgroundColor:'red',

    },







    backgroundImage: { 
        height: '100%',
        width: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        right:0


    },
    dashboard: {    
        // height: wp('67%'), 
        backgroundColor:'blue',
        width: '100%', height: '100%'
    },
    menuContainer:{
        // flex: 3,
        // backgroundColor: 'red',  
        width: wp('100%'), 
        marginTop: wp('10%')

    },
    menuContainerPadding : { 
        flexDirection: 'row',  
        width:'80%',
        borderRadius:5, 
        alignSelf: 'center' ,   
        justifyContent:'center',
        alignItems:'center',
        zIndex:3,
        marginTop: 10

    },
    menuContainerPaddingTwo:{ 
        flexDirection: 'row',   
        width:'80%',
        borderRadius:5, 
        alignSelf: 'center' ,   
        justifyContent:'center',
        alignItems:'center',
        zIndex:3,
    },

    Header:{  
        flex:1,
        justifyContent: 'center',
        alignItems:'center', 
        
    },
    avatarBox:{
        backgroundColor:'rgba(255, 255, 255, 0.1)',
        borderRadius:200,
        padding: 10



    },
    textContainer:{
        justifyContent: 'center',
        alignItems:'center',  
        zIndex:4
    },
    avatarContainer:{
        backgroundColor:colors.white,
        height:110,
        width:110,
        borderRadius:100,
        borderWidth:10,
        borderColor: 'rgba(228,228,228,0.2)',
        justifyContent:'center',
        alignItems:'center'
        
    },
    iconNav:{
    //   paddingHorizontal:10,

    },

    MenuButton:{
        backgroundColor:'#F1F1F1',
        width:wp('39%'),
        height:wp('35%'),
        margin:5,
        borderRadius:5,
        elevation: 3,



    }
})


export default Main ;


 

 
