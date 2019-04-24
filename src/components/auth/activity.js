import React, { Component } from 'react';
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
  import AsyncStorage from '@react-native-community/async-storage';

 

  import Icon from 'react-native-vector-icons/FontAwesome';
  import normalize from '../../styles/normalizeText';
  import Button from '../touchable/button';
  import TextGroup from '../textgroup/text-field-group'; 
  import colors from '../../styles/colors';

import TimerClock from './timerComponent';
import PostApi from '../../contoroler/postToApi';  
class Activity extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          errors:'',
          activecode:'',
       }
    }


    onPressAcitivity = async() => {
        this.setState({
          isLoading: true
        })
        const phone = this.props.navigation.getParam('phone', 'NO-Phone number')
        
          const data = {
            "phone":phone,
            "code": this.state.activecode
          } 
          const res = await PostApi(data,'supplier/auth/verify');

          console.log(res)
          if(res.status !== 200)
          {
              this.setState({
                errors : res.error,
                
              })
          }
          this.setState({ 
            isLoading: false
          })
           if(res.status === 200)
           {
            this.setToken(res.data.token)
            this.props.navigation.navigate('Main');
           }
    }

    setToken = (token) => {
      console.log(token)
      if(token !=='')
      AsyncStorage.setItem('authorization_snapkish', token);
      console.log(`Token is setted! --> ${token}`)
    }

    render() { 

        const { errors, isLoading } = this.state 
        const phoneNumber = this.props.navigation.getParam('phone', 'NO-Phone number');


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
                                <Text style={styles.phoneNumberStyle}>
                               کد فعال سازی به شماره  {phoneNumber} ارسال گردید.
                                </Text>
                        
                                <View >
                                    <TextGroup 
                                      label=" کد فعال سازی"
                                      placeholder="-  -  -  -"
                                      style={{textAlign:'center', letterSpacing: 20, color:'#333' }}
                                      maxLength={4}
                                      keyboardType={'numeric'}
                                      onChangeText={(activecode) => this.setState({activecode})}
                                    />
                                </View>
                                <Text style={styles.textActivity}>در صورتی که کد فعال سازی خود را اشتباه وارد نموده اید، بر روی ارسال مجدد کلیک کنید</Text>
                                <View style={styles.formContainerActivity}>
                                        <View style={styles.buttonContainer}>

                                            <TimerClock />

                                            {this.state.errors.length >2 ? 
                                                <View style={styles.containerValidation}>
                                                  <Text style={styles.textValidation}>{this.state.errors}</Text>
                                              </View> : <Text></Text>}
                                        </View>  

                                </View>
                            
                                <View style={styles.formContainer}>
                    
                                        <View style={styles.buttonContainer}>
                                            <Button onPress={this.onPressAcitivity}>
                                                <View style={styles.buttonLogin}>
                                                  {isLoading ? (
                                                      <ActivityIndicator color="#333" />
                                                  ) : (
                                                      <Text style={styles.buttonTextLogin}>فعال کنید!</Text>
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
 


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: 'white',
        
      },
    maincontainer:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingHorizontal: 30,
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
        minHeight: 100,
        justifyContent: 'center',
        alignItems: 'center', 
      },
      formContainer: { 
        paddingBottom: 100,  
      },
      formContainerActivity:{ 
        
      },
      logo: {
        resizeMode: 'contain',
        height: 80,
        
      },
      buttonContainer:{ 
         
      }, 
   
      buttonLogin: {
        height:60,
        backgroundColor: colors.white,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
       

      },
      buttonAgin: {
        flexDirection:'row',
        height:50,
        backgroundColor: colors.white,
        borderRadius: 30, 
        alignItems: 'center', 
        justifyContent:'center'
        
       

      },
      buttonTextAgin:{
        fontSize: Platform.OS === 'ios' ? normalize(10) : normalize(12),
        color: colors.red,
        fontFamily: 'IRANSans_Medium',
        paddingHorizontal:10,
        
        
      },
      buttonText: {
        fontSize: Platform.OS === 'ios' ? normalize(18) : normalize(20),
        color: colors.white,
        fontFamily: 'IRANSans_Medium',
      },
      buttonTextLogin: {
        fontSize: Platform.OS === 'ios' ? normalize(18) : normalize(20),
        color: colors.red,
        fontFamily: 'IRANSans',
      },
      textActivity:{
          fontFamily:'IRANSans',
          fontSize: Platform.OS === 'ios' ? normalize(8) : normalize(10),
        },
      phoneNumberStyle:{
        fontFamily:'IRANSans',
        padding: 30,
        textAlign: 'center',
        fontSize: Platform.OS === 'ios' ? normalize(8) : normalize(10),


      },
      timer:{
          width:200,
          height:50,
          backgroundColor:colors.red,
          position: 'absolute',
          top:0,
          borderRadius:30,
          justifyContent: 'center',
          alignItems: 'center',
      },
      textTimer:{
        fontFamily:'IRANSans',
        fontSize: Platform.OS === 'ios' ? normalize(12) : normalize(14),
        color:colors.white,
      },
      containerValidation:{
          backgroundColor: colors.themeBackgroundOpacity,
          padding: 12,
          borderRadius:30,
          marginTop: 20,
  
  
      },
      textValidation:{
          fontFamily: 'IRANSans',
          color:colors.white,
          fontSize: Platform.OS === 'ios' ? normalize(8) : normalize(10),
      },


});


export default Activity;