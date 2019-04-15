import React, { Component } from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

import colors from '../../styles/colors';
import normalize from '../../styles/normalizeText';


class Footer extends Component {
    constructor(props) {
        super(props); 
        this.state = { value: 0 };
    }


        componentWillReceiveProps(nextProps) {
            if(nextProps.value !== this.state.value) {
            this.setState({ value: nextProps.value });
            }
        }

 


    render() { 
        return ( 

            <View style={styles.container}>

                <View style={styles.btnContainer}>
                    <TouchableOpacity  onPress={this.props.onPress }  style={styles.btn}>
                        <Icon name="dislike" size={normalize(20)} color={colors.red} />
                    </TouchableOpacity>
                    <Text>No!</Text>
                </View> 
                
                <View style={styles.btnContainer}>
                    <TouchableOpacity style={styles.btnSpech} onPress={this._onSpeech.bind(this)}>
                        <Icon name="volume-1" size={normalize(30)} color={colors.shadow} />
                    </TouchableOpacity>
                </View> 

                <View style={styles.btnContainer}>
                    <TouchableOpacity onPress={this.props.onPress }  style={styles.btn}>
                        <Icon name="like" size={normalize(20)} color={colors.green} />
                    </TouchableOpacity>
                    <Text>Yes</Text>
                </View> 

            </View>
         );
    }
}
 

const styles = StyleSheet.create({

    container:{
        flex:1,
        flexDirection:'row', 
        backgroundColor: colors.white,

    },
    btnContainer:{
        flex:1, 
        // borderWidth: 1,
        // borderColor: '#333',
        alignContent:'center',
        alignItems:'center',
        justifyContent: 'center',


    },
    btn:{ 
        height:50,
        width:50,
        backgroundColor:colors.white,
        borderRadius:30,
        alignItems:'center',
        justifyContent:'center',
        elevation:3,
        borderWidth:2,
        borderColor: '#f1f1f1'


    },
    btnSpech:{ 
        height:80,
        width:80,
        backgroundColor:colors.silver,
        borderRadius:60,
        alignItems:'center',
        justifyContent:'center',
        elevation:3,
        borderWidth:2,
        borderColor: '#e8e8e8'


    }

})
export default Footer;