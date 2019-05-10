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
    TouchableOpacity

  } from 'react-native';

// import Token from '../../api/token';
import LoginBtn from '../touchable/button'

import Button from '../touchable/button';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-community/async-storage'; 
import PhoneInput from '../textgroup/phone-input'
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
            <View style={styles.container}>

              <View style={styles.up}>
                <Image
                    source={require('../../assets/img/logo-red.png')}
                    style={styles.logo}
                />
              </View>
              <View style={styles.center}>
            
                <PhoneInput  
                    placeholder="- - - - - - - - - - -"
                    style={styles.txtInput}
                    maxLength={30}
                    keyboardType={'numeric'}
                    onpress={this.onpress}
                />
                 
              </View>
              <View style={styles.down}>
                 <TouchableOpacity style={styles.btnLogin}>
                    <Text>ورود</Text>
                 </TouchableOpacity>
              </View>
               
            </View>
           
        );
    }
}


// const { height } = Dimensions.get('window')

const styles = StyleSheet.create({
    container: {
    
        flex:1,
        // justifyContent: 'space-between',
        // alignItems: 'center',
        backgroundColor: '#F6F6F6',
        flexDirection: 'column'
    
      }, 
      up: {
        flex:3,
        backgroundColor: '#C92652',
        borderBottomRightRadius: 700,
        alignItems: 'center',
        justifyContent: 'center',

      },
      center : {
        flex:1,
        backgroundColor:'#F6F6F6',
        padding: 30,

      },
      down: {
        flex:2,
        backgroundColor:'#C92652',
        borderTopLeftRadius: 400,
        padding:30
      },
      logo:{
        width:150,
        height:150
      },

      btnLogin: {
        backgroundColor:'blue',
        justifyContent:'center',
        alignItems:'center',
        padding:15,
        borderRadius: 50,
        

      }

});



export default Auth ;
