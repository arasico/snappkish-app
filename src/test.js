import React, {Component} from 'react';
import { View , Text , TouchableOpacity , StyleSheet, Button} from 'react-native';

// import Speech from 'react-native-speech';




class TestComponent extends Component {
 
    constructor(props) {
        super(props);
        this.state = {
          recognized: '',
          started: '',
          results: [],
        };
 
      } 
 

    render() { 
        return ( 
      <View>
        <Text style={styles.transcript}>
            Transcript
        </Text>
      
      </View>
         );
    }
}
 

const styles = StyleSheet.create({
    transcript: {
      textAlign: 'center',
      color: '#B0171F',
      marginBottom: 1,
      top: '400%',
    },
  });
export default TestComponent;