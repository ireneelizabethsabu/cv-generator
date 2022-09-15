import { useEffect,useState } from "react";
import {getUsers} from '../api/index'

export const useData = (id) => {
    const [data, setData] = useState([])
    
    useEffect(() => {
        getUsers(id).then(res => {
            setData(res.data)
            console.log(res.data);
        }).catch(err => console.log(err))
    }, [id])

    return { data }
}