
import base from '../api/baseURL';
// import Token from '../api/token';


getToken =async() => {

  const Token =  await AsyncStorage.getItem('AUTHORIZATION');
  return Token
}


 function postApi (data,key,Token)    {

    console.log('Fetching')
    
  // const Token = this.getToken();
  console.log(Token)



    const url =  base.baseURL + key;

    return fetch(url, {
        method: "POST", 
        cache: "no-cache",  
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "agent" : "web",
            // "Authorization": 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo0MCwiaWQiOjEsInJvbGVOYW1lIjoic3VwcGxpZXIiLCJhZ2VudCI6IndlYiJ9.07xZaiUHb_wlkYpr_j9i1bOC9SAJsfVrUSrywCXO7lU' 
            "Authorization": Token
        },
        redirect: "follow", 
        referrer: "no-referrer", 
        body: JSON.stringify(data), 
    })
    .then(response => {
      const statusCode = response.status
      const data = response.json()
      return Promise.all([statusCode, data])
    })
    .then(([res, data]) => {
      console.log(res, data) 
      return ({'status':res, 'data':data.data , 'error':data.error, 'isLoading':false})
    })

     
    
            
    // }
}
 


export default postApi;



 