import React , { Component } from 'react';
import {View, Text, StyleSheet, TouchableOpacity, KeyboardAvoidingView, Platform , ImageBackground} from 'react-native';

//
//
import colors from '../../styles/colors'
import Icon from '../../styles/icons'
import TextInput from '../../components/textgroup/text-input';



class  ProductComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <View style={styles.container}>
                <Text>Poduct componet </Text>
                <Text>Poduct componet </Text>
                <Text>Poduct componet </Text>
                <Text>Poduct componet </Text>
                <Text>Poduct componet </Text>
                <Text>Poduct componet </Text>
                <Text>Poduct componet </Text>
                <Text>Poduct componet </Text>
            </View>
         );
    }
}



const styles = StyleSheet.create({
    container:{
        flex:1,
        padding: 5,
        backgroundColor: 'red'
    }
})
 
export default  ProductComponent;