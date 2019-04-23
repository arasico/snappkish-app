import React , { Component } from 'react';
import {View, Text, StyleSheet, TouchableOpacity, KeyboardAvoidingView, Platform , ImageBackground , ScrollView, Linking} from 'react-native';
import {H1, H2, HR} from '../../typography'
import SearchInput from '../../components/textgroup/search-input'; 
import normalize from '../../styles/normalizeText';



 


//
//
import colors from '../../styles/colors'
import Icon from '../../styles/icons'
//
// Icons form react native vectors ------------------->
//

import IconClose from 'react-native-vector-icons/Ionicons'





class  TicketComponnet extends Component {
    constructor(props) {
        super(props);
         
    }


 

    render() { 
 
        return ( 
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.headerClose}>
                        <TouchableOpacity style={styles.btnClose}>
                            <IconClose style={{color: '#333333'}}  size={20} name='md-close' />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.headerTitle}>
                        <Text style={{fontFamily:'IRANSans_Bold' , fontSize:normalize(20), color:'#333333'}}>اطلاعات بلیط</Text>
                    </View>
                </View>

                <View style={{width:'100%',  alignItems: 'center', }}> 
                    <View style={styles.card}>
                        <Text>dddddddd</Text>
                    </View>
                </View>

            </View>
         );
    }
}



const styles = StyleSheet.create({
    container:{
        flex:1, 
        backgroundColor: '#F6F6F6',
        
    },

    header : {
        width:'100%',
        height: 70, 
        top:0,
        flexDirection: 'row',
        elevation : 3, 

    },
    headerClose :{ 
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    headerTitle: { 
        flex:5,
        justifyContent: 'center',
        paddingRight: 20

    },
    btnClose :{
        width:40,
        height:40,
        backgroundColor:'#fcfcfc',
        borderRadius: 300,
        alignItems: 'center',
        justifyContent: 'center',
        elevation:2,
    },
    card : {
        width:'93%',
        backgroundColor:'#fff',
        elevation: 3 ,
        borderRadius: 3 , 
        padding: 5


    }
  });
 
export default  TicketComponnet;