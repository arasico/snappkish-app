import React, {Component } from 'react';
import { View , Text , StyleSheet , Platform } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import Auth from './components/auth/auth';




export default class Splash extends Component {

        componentDidMount() {
            // do stuff while splash screen is shown
            // After having done stuff (such as async tasks) hide the splash screen
            if (Platform.OS !== 'ios')
              SplashScreen.hide();
        }



        render(){

        return (

                <Auth />
        );
        }

}



const styles = StyleSheet.create({
        container:{
                
              flex:1,
              textAlign:'center',
              color:'#333',
              

        }

})