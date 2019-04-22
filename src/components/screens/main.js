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


import IconFont from 'react-native-vector-icons/FontAwesome5'



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
        header: null,
        drawerIcon : (
          <Icon name="home" size={24} color="#222"  />
        ),
        title: 'Home', 
        
      }
   


      render(){
        return (

            <View style={styles.backgroundImage} >


                        <ImageBackground source={require('../../assets/img/dashboard-blue.png')} style={styles.dashboard} >
                            <HeaderMain navigation={this.props.navigation} title="#"  />

                            <View   style={styles.Header}>
                               <View style={styles.avatarBox}>
                                    <View style={styles.avatarContainer}>
                                            <Icons.Ionicons name="md-person" size={50} style={styles.iconNav} />
                                    </View>
                               </View>
                                <View style={styles.textContainer}>
                                    <Text>Sara Daniewswl</Text>
                                    <Text>0911 217 1414</Text>
                                </View>
                                
                            </View>

                        </ImageBackground>
                        <Wallet onPress={this._callNotification.bind(this)} />
                     
                        <View style={styles.menuContainer}>
                            <View style={styles.menuContainerPadding}>
                                <TouchableOpacity style={styles.MenuButton} onPress={this.props.onPress }>
                                    <IconFont style={{color: '#fff'}}  size={22} name='volume-up' />
                               
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.MenuButton} onPress={this.props.onPress }>
                                </TouchableOpacity>

                            </View>

                            <View style={styles.menuContainerPaddingTwo}>
                                <TouchableOpacity style={styles.MenuButton} onPress={this.props.onPress }>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.MenuButton} onPress={this.props.onPress }>
                                </TouchableOpacity>

                            </View>
                           
                        </View>

                      

                        

                    

            </View>
        )
    }
}

const styles = StyleSheet.create({
    backgroundImage: {
        width: '100%',
        height: '100%',
        backgroundColor: '#F3F5F9',  
        margin:0,
        padding: 0

    },
    dashboard: {
        flex: 2,
        width: '100%',
    },
    menuContainer:{
        flex: 2,
        backgroundColor: '#F3F5F9',  
        marginTop: 40

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
        // position: 'absolute', 
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
      paddingHorizontal:10,

    },

    MenuButton:{
        backgroundColor:'#F1F1F1',
        width:150,
        height:110,
        margin:5,
        borderRadius:5,
        elevation: 3,



    }
})


export default Main ;