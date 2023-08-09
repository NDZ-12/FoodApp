import {useEffect,useState} from 'react'
import { MENU_API } from '../utils/constants';


const useResturantMenu = (resId) => {
    const[restInfo,setrestInfo]=useState(null);
    useEffect(()=>{
        const fetchMenu=async()=>{
            try {
                let data = await fetch(MENU_API+resId);
                
                console.log("Fetch Data sucessfully .......");
                const json = await data.json();
                console.log(json.data);
                setrestInfo(json.data);
                
            
                } 
                catch(error)
                {
                  console.error("Error fetching data :", error)
                }
        };
        console.log(fetchMenu);
        fetchMenu();
    },[resId]);
    
    return restInfo;



}

export default useResturantMenu