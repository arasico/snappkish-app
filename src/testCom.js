import React,{Component} from 'react';
import {View, Text} from 'react-native';


class TextChild extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <View>
                <Text>Test Component</Text>
            </View>
         );
    }
}
 
export default TextChild;