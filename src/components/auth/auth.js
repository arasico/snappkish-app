import React, {Component } from "react";
import {
    Image, 
    StyleSheet,
    ImageBackground, 
    View,
    KeyboardAvoidingView,
    Platform,
    TextInput,
    Text, 
    ActivityIndicator,

  } from 'react-native';

// import Token from '../../api/token';


import Button from '../touchable/button';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-community/async-storage'; 

import colors from '../../styles/colors';   
 

 
class Auth extends Component{
    static navigationOptions = {
        header: null,
      }

    state = {
        errors: {},
        email: '',
        password: '',
        isLoading: false,
      }
  
      componentWillMount(){
        this.getToken()
      }

      loginPage = async () => {
       
        
        this.setState({ isLoading: true })
        this.props.navigation.navigate('Login');
      
      }

      getToken = async() => {
        // let Token = await AsyncStorage.getItem('AUTHORIZATION');
        const Token = await AsyncStorage.getItem('AUTHORIZATION');

          console.log(Token)

          if(Token !== null){
            console.log(Token)
            this.props.navigation.navigate('Main');
          }
      }

    render(){
        const { errors, isLoading } = this.state

    
        return (
            <KeyboardAvoidingView
            style={styles.container}
            behavior="padding"
            keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -300}
          >
                <ImageBackground source={require('../../assets/img/climb.png')} style={styles.backgroundImage}>
                    

                       <View style={styles.maincontainer}>
                       <View style={styles.logoContainer}>
                            
                            <Image
                                source={require('../../assets/img/logo.png')}
                                style={styles.logo}
                            />
                            
                        </View>

                        <View style={styles.formContainer}>
            
                                

                                <View style={styles.buttonContainer}>
                                    <Button onPress={this.loginPage}>
                                        <View style={styles.buttonLogin}>
                                        {isLoading ? (
                                            <ActivityIndicator color="#333333" />
                                        ) : (
                                            <Text style={styles.buttonTextLogin}>ورود</Text>
                                        )}
                                        </View>
                                        
                                    </Button>
                                    
                                </View> 
                        </View>

                       </View>
                   
                </ImageBackground>
            </KeyboardAvoidingView>
           
        );
    }
}


// const { height } = Dimensions.get('window')

const styles = StyleSheet.create({
    container: {
    
        flex:1,
        justifyContent: 'space-between',
        alignItems: 'center',
    
      },
    maincontainer:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
      },
    backgroundImage: {
        width: '100%',
        height: '100%',

    },
    transparentBg:{
        backgroundColor: "transparent",
        borderColor: "transparent",

    },
      logoContainer: {
        marginTop: 30,
        minHeight: 320,
        justifyContent: 'center',
        alignItems: 'center', 
      },
      formContainer: {
        paddingHorizontal: 30,
        paddingBottom: 200,
      },
      logo: {
        resizeMode: 'contain',
        height: 80,
      },
      buttonContainer:{
          padding:10,
          margin: 5,
      },
      buttonContainer: { marginTop: 20 },
      buttonRegister: {
        height:60,
        backgroundColor: colors.transparentBg,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: colors.white,
        borderWidth: 2,

      },
      buttonLogin: {
        height:60,
        backgroundColor: colors.white,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
       

      },
      buttonText: {
        fontSize:20,
        color: colors.white,
        fontFamily: 'IRANSans_Medium',
      },
      buttonTextLogin: {
        fontSize:20,
        color: colors.black,
        fontFamily: 'IRANSans',
      },

});



export default Auth ;
