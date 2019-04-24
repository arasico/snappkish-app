
import base from '../api/baseURL';





function postApi(data,key){

    console.log("Api post called!")

    const url =  base.baseURL + key;

    return fetch(url, {
        method: "POST", 
        cache: "no-cache",  
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "agent" : "web" 
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



 