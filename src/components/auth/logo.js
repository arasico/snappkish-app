import React, { Component} from 'react';
import { View, Text , StyleSheet, Image } from 'react-native';
 

class LogoComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
         
            <View>
                <View style={styles.logoContainer}>
                    
                    <Image source={require('../../assets/img/logo.png')}   style={{   resizeMode: 'contain',
        height: 80,  alignSelf:'center',padding:10}} />
                </View>

            </View>
         );
    }
}
 

const styles = StyleSheet.create({
    container:{

    },
    backgroundImage: {
        width: '100%',
        height: '100%',     
  
    },

    logoContainer:{
        alignSelf: 'center',
        justifyContent: 'center', 
    }

});

export default LogoComponent;