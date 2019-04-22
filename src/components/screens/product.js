import React , { Component } from 'react';
import {View, Text, StyleSheet, TouchableOpacity, KeyboardAvoidingView, Platform , ImageBackground } from 'react-native';


//
//
import colors from '../../styles/colors'
import Icon from '../../styles/icons'
import SearchInput from '../../components/textgroup/search-input';



class  ProductComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <View style={styles.container}>
               <View style={styles.cards}>
               <SearchInput  
                        placeholder="جستجو . . ."
                        style={styles.txtInput}
                        maxLength={30}
                        keyboardType={'numeric'}
                        />
               </View>
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
        borderRadius: 10,
        elevation:5,
        padding: 5

    }
})
 
export default  ProductComponent;