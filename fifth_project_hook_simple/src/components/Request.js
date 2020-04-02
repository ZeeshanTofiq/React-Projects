import {useState,useEffect} from 'react';
import axios from 'axios';


const Request = props => {
    const [resource,setResource] = useState([]);

    useEffect(
        () =>{
           (async (res)=>{
               const response = await axios.get(`http://jsonplaceholder.typicode.com/${res}`);
               setResource(response.data);
           })(props.resource) 
        },
        [props.resource]
    );
    return resource;
}

export default Request;