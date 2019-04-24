/*

Get TOken Component from localStorg

*/


// console.log(localStorage.getItem('authorization'))
import AsyncStorage from '@react-native-community/async-storage';

function getToken (token) {
    if(token !== null)
        return token
        
    return null 
}
let TokenLocalStorg =  AsyncStorage.getItem('authorization_snapkish');

const Token = getToken(TokenLocalStorg)


export default Token;
