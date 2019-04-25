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
  import base from '../../api/baseURL';
  import PostApi from '../../contoroler/postToApi';



class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            phone:''
         }
    }

    _onchange = () => {
       console.log(this.state.phone)
    }

    onPressSending = async () => {
        Keyboard.dismiss();

        const data = {
            "phone":this.state.phone
        } 
        // const res = await this.postData(data,'supplier/auth/sms');
        this.setState({
            isLoading:true
        })
        const res = await PostApi(data,'supplier/auth/sms');
        console.log(res)
        this.setState({
            isLoading:false
        })

        if(this.state.phone)
        this.props.navigation.navigate('Activity',{ phone: this.state.phone } ); 
    }



    postData(data,key) {
        console.log("fetching...")

        this.setState({
            isLoading:true,
            errorHandleing:'',
            successMessage:''
        })

         const url =  base.baseURL + key;

          return fetch(url, {
              method: "POST", 
              cache: "no-cache",  
              headers: {
                  "Content-Type": "application/json",
                  "Accept": "application/json",
                  "agent" : "web" 
              },
              redirect: "follow", 
              referrer: "no-referrer", 
              body: JSON.stringify(data), 
          })
          .then(response => {
            const statusCode = response.status
            const data = response.json()
            return Promise.all([statusCode, data])
          })
          .then(([res, data]) => {
            console.log(res, data)
            this.setState({isLoading: false})
            return ({'status':res, 'data':data.data})
          })
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
                                        // onChange={this._onchange}
                                        onChangeText={(phone) => this.setState({phone})}

                                         />
                    </View>
                    <View style={styles.card}>
                                <TouchableOpacity style={styles.buttonContainer} onPress={this.onPressSending}>
                                        <View >
                                            <View >
                                                {isLoading ? (
                                                    <ActivityIndicator color="#333" />
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
        color:colors.black , 
      }

});



export default Login;