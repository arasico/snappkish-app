import React , { Component } from 'react';
import {View, Text, StyleSheet, TouchableOpacity, KeyboardAvoidingView, Platform , ImageBackground , ScrollView, Linking} from 'react-native';
import {H1, H2, HR} from '../../typography'
import SearchInput from '../../components/textgroup/search-input'; 
import normalize from '../../styles/normalizeText';



 


//
//
import colors from '../../styles/colors'
import Icon from '../../styles/icons'




class  TicketComponnet extends Component {
    constructor(props) {
        super(props);
        this.state = { errordev:'No Number'  }
    }


 

    render() { 
 
        return ( 
            <View style={styles.container}>
                
               <Text>TicketComponnet</Text>
               <Text>TicketComponnet</Text>
               <Text>TicketComponnet</Text>
               <Text>TicketComponnet</Text>
               <Text>TicketComponnet</Text>
               <Text>TicketComponnet</Text>
               <Text>TicketComponnet</Text>

            </View>
         );
    }
}



const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: '#fff',
        
    },
    
  });
 
export default  TicketComponnet;