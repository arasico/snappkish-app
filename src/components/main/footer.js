import React, { Component } from 'react';
import  { View, Text , StyleSheet, TouchableOpacity} from 'react-native';
import colors  from '../../styles/colors';
import normalize   from '../../styles/normalizeText';



class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

   
    render() { 
   

        return ( 

            <View style={styles.container}>
 
                <View style={styles.partOne}></View>
                    <View style={styles.startContainerBg}>
                        <TouchableOpacity style={styles.startContainer} onPress={this.props.onPress }>
                            <Text style={styles.startText}>START</Text>
                        </TouchableOpacity>
                    </View>
            </View>
         );
    }
}


const styles = StyleSheet.create({

    container:{
        position: 'absolute',
        backgroundColor: 'transparent',
        height: 170,
        bottom : 0,
        width: '100%',  

    },
   
    partOne:{
        backgroundColor: colors.silver,
        position: 'absolute', 
        padding: 10,
        height: 100,
        bottom : 0,
        width: '100%',  

    },
    startContainer:{ 
        width:150,
        height:150,
        backgroundColor:colors.red,
        justifyContent: 'center', 
        alignSelf: 'center' ,
        alignItems: 'center',
        borderRadius: 300,
        borderWidth: 12,
        borderColor: colors.white,
        
    },
    startContainerBg:{ 
        width:150,
        height:150,
        backgroundColor:colors.red,
        justifyContent: 'center', 
        alignSelf: 'center' ,
        alignItems: 'center',
        borderRadius: 300,
        borderWidth: 12,
        borderColor: colors.silver,
        
    },
    startText:{
        color: colors.white,
        fontSize: normalize(22),
        fontWeight: 'bold',
        

    }

})
 
export default Footer;