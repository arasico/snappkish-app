import React , { Component } from 'react';
import {View, Text, StyleSheet, TouchableOpacity, KeyboardAvoidingView, Platform , ImageBackground , ScrollView} from 'react-native';
import {H1, H2, HR} from '../../typography'
import SearchInput from '../../components/textgroup/search-input'; 
import normalize from '../../styles/normalizeText';





//
//
import colors from '../../styles/colors'
import Icon from '../../styles/icons'




class  QrCompoenent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }


 

    render() { 
 
        return ( 
            <View style={styles.container}>
              <Text>qr compoenent </Text>
              <Text>qr compoenent </Text>
              <Text>qr compoenent </Text>
              <Text>qr compoenent </Text>
              <Text>qr compoenent </Text>
              <Text>qr compoenent </Text>

            </View>
         );
    }
}



const styles = StyleSheet.create({
    container:{
        flex:1,
        padding: 10,
        backgroundColor: '#F6F6F6',


    },
    cards: {
        backgroundColor: '#ffffff',
        width: '100%',
        borderRadius: 7,
        elevation:3,
        padding: 5,
        marginBottom: 7

    },


})
 
export default  QrCompoenent;