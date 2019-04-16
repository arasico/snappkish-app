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
    TouchableOpacity,
    Keyboard

  } from 'react-native'; 
  import Button from '../touchable/button';
  import TextGroup from '../textgroup/text-field-group';
  import colors from '../../styles/colors';
  import LogoComponent from "./logo";


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }


    onPressSending = async () => {
        Keyboard.dismiss();
        this.props.navigation.navigate('Activity'); 
    }
    render() { 

        const { errors, isLoading } = this.state


        return ( 

            <KeyboardAvoidingView
            style={styles.container}
            behavior="padding"
            keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -300}
          >
                <ImageBackground source={require('../../assets/img/climb.png')} style={styles.backgroundImage}>

                    <View style={styles.card}>
                        <LogoComponent />
                    </View>
                    <View style={styles.card}>
                        <TextGroup 
                                        label="تلفن همراه"
                                        placeholder="+98 912 345 6789"
                                        style={styles.txtInput}
                                        maxLength={11}
                                        keyboardType={'numeric'}
                                         />
                    </View>
                    <View style={styles.card}>
                                <TouchableOpacity style={styles.buttonContainer} onPress={this.onPressSending}>
                                        <View >
                                            <View >
                                                {isLoading ? (
                                                    <ActivityIndicator color="white" />
                                                ) : (
                                                    <Text style={styles.txt}>ارسال</Text>
                                                )}
                                            </View>
                                        </View>
                                </TouchableOpacity>
                                          
                    </View>
        
                </ImageBackground>
            </KeyboardAvoidingView>
         );
    }
}
 


const styles = StyleSheet.create({
    container: {  
        flex:1,
        flexDirection:'column',  
        
      },
 
    backgroundImage: {
    flex:1, 

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
     
      txt:{
      fontFamily:'IRANSans',
      color:colors.red,

     

      },
     buttonContainer:{
        flexDirection: 'row',
        backgroundColor: colors.white,
        height:60,
        width:'80%',
        borderRadius: 50,
        justifyContent: 'center', 
        alignItems:'center'
     },
      card:{
          flex:1, 
          alignContent:'center',
          alignItems:'center',
          justifyContent: 'center',
      },
      txtInput:{
        width:250, 
        color:colors.black 
      }

});



export default Login;