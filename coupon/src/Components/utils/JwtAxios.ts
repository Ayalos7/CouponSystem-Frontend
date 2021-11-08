import axios from "axios";
import store from "../redux/store";

const JwtAxios = axios.create();

JwtAxios.interceptors.request.use(request => {
    //with redux
    
    request.headers = {
        'Authorization': store.getState().authState.token
    }
    
    //without redux - using session storage
   /* request.headers = sessionStorage.getItem("Authorization");
    return request; 
    */
   console.log("inside redux:"+store.getState().authState.token);
   return request;
});


JwtAxios.interceptors.response.use(response => {
  //with redux
    //store.dispatch(loginAction(response.headers.authorization));
    //without redux - using session storage
    //sessionStorage.setItem("Authorization", response.headers.authorization);
    console.log(response);
    store.getState().authState.token = response.data.token;
    return response;
});

export default JwtAxios;
