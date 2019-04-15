import React, { Component } from 'react';
import { View, Text, StyleSheet , Button, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
//
//
import colors from '../../styles/colors';
import normalize from '../../styles/normalizeText';
import {H1, H2, HR} from '../../typography'

class Notification extends Component {
    constructor(props) {
        super(props);
        this.state = {   }
    }

 

    render() { 



        return ( 

            <TouchableOpacity style={styles.container} onPress={this.props.onPress }>
             
             
 
                <View style={styles.PpriceContainer}>
                    
                    <H1>3,000,000</H1>
                    <H2>موجودی کیف پول</H2>
                     
                </View>
          
            </TouchableOpacity>
         );
    }
}
 


const styles = StyleSheet.create({

    container:{ 
        backgroundColor: '#f2f2f2',
        height: 90,
        flexDirection: 'row', 
        paddingVertical: 10,
        elevation: 3,
        marginTop: 10,
        width:'80%',
        borderRadius:5, 
        alignSelf: 'center' ,  
        position: 'absolute',
        top:230,
        zIndex:3

    },
    PpriceContainer:{    
        paddingHorizontal: 10, 
        flexGrow: 1,   
        justifyContent: 'center', 
        alignSelf: 'center' ,
        alignItems: 'center',
        
    },
    leftSid:{
        height:70, 
        justifyContent: 'center',
        paddingHorizontal:10,
    },
    btnLeft:{
        backgroundColor:colors.white,
        borderRadius: 24,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#ddd', 
        borderWidth: 0.5,
        borderColor: '#d6d7da',
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 20,
        elevation: 1,
    },
    iconNotif:{
        backgroundColor: colors.gold,
        width:70,
        height:70,

    }

})

export default Notification;