import React, { Component } from 'react';
import {View , Text , StyleSheet , Platform } from 'react-native'; 
import colors from '../../styles/colors';
import { H1, } from '../../typography';
import normalize from '../../styles/normalizeText';

class Progress extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    jewelStyle = function(size) {
         
        return { 
            padding:5,
            width:size,
            height:20, 
            right:0,
            position: 'absolute',
            marginTop:7,
            borderRadius:20,
            backgroundColor: colors.gold,
        }
        
      }


    render() { 

      

        return ( 

            <View style={styles.container}>
               
               <View style={styles.barContainer} >
                    <View style={this.jewelStyle(this.props.size)} ></View>
               </View>
               <View style={styles.circle} >
                    <Text style={styles.h1}>{this.props.level}</Text>
               </View>

               <View style={styles.circlePrsent}>
                    <Text style={styles.prcentNumber}>{this.props.size}</Text>
               </View>

            </View>
         );
    }
}
 
export default Progress;




const styles = StyleSheet.create({

container:{
    backgroundColor: 'transparent', 
    height: 75,
    flexDirection: 'row', 
    paddingVertical: 10,
    elevation: 3,
    padding:20,
    marginBottom: 5,

},
barContainer:{ 
    marginTop: 10,
    backgroundColor: colors.blue,
    padding: 5,
    width: '100%',
    height:35,
    borderRadius: 30,
},
circle:{
    position: 'absolute',
    backgroundColor: colors.blue,
    padding: 10,
    width: 60,
    height:60,
    borderRadius: 100,
    right:0,
    margin: 5,
    elevation: 3,
},
h1:{

    height:'100%',
    color: colors.white,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',

},
 circlePrsent:{
  
    backgroundColor: colors.white,
    width:30,
    height:30,
    borderRadius:100,
    left:23,
    position: 'absolute',
    alignSelf:'center',
    elevation: 3, 
 },
 prcentNumber:{ 
     paddingTop:5 ,
    textAlign:'center',
    alignSelf:'center',
    justifyContent:'center',
    alignItems:'center', 
    color: colors.blue,
    fontSize: Platform.OS === 'ios' ? normalize(10) : normalize(12),


 },

});