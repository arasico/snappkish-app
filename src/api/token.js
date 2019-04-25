import React  from 'react';

/*

Get TOken Component from localStorg

*/


// console.log(localStorage.getItem('AUTHORIZATION'))
import {AsyncStorage} from 'react-native'; 



const Token = _retrieveData = async () => {
     try {
      const value = await AsyncStorage.getItem('AUTHORIZATION');
      if (value !== null) {
        // We have data!!
        console.log(value);
        console.log('Its token');
        return value
      }
    } catch (error) {
        console.log(error);
    }
  };
 

export default  Token
