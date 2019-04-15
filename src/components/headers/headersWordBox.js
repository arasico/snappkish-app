import React, { Component } from 'react';
import {View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../../styles/colors';
import Icons from 'react-native-vector-icons/Ionicons';
import normalize from '../../styles/normalizeText';


class HeaderWordBox extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }


  


    render() { 
        return ( 

            <View style={styles.container}>

                {/* first part  -------------------- */}
                 
                    <TouchableOpacity style={styles.back} onPress={this.props.onPress}>
                        <Icons name="ios-arrow-back" size={normalize(20)} color={colors.white} />
                    </TouchableOpacity>
                

                {/* secend part  -------------------- */}
                <View style={styles.title}>
                    <Text style={styles.txtFormat}>{this.props.title}</Text>
                </View>
               
            </View>
         );
    }
}
 

const styles = StyleSheet.create({

    container:{
        height:50,
        backgroundColor: colors.themeBackground,
        flexDirection: 'row',
        elevation:2
    
    },
    title:{ 
        flex:5, 
        alignItems:'flex-end',
        justifyContent:'center',
        paddingRight:20,

    },
    back:{ 
        flex:1,  
        alignItems:'center',
        justifyContent:'center',
    },
    txtFormat:{
        fontFamily:'IRANSans',
        color: colors.white
    }
})
export default HeaderWordBox;