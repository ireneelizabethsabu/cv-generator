import React,{useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import { getUsers } from "../../api";
import Header from "../Header/header";
import Language from "../Languages/Language";
import Organisation from '../Organisation/Organisation'

const CV=() => {
    const [data, setData] = useState(null)
    const {id} = useParams();
    
    useEffect(() => {
        getUsers(id).then(res => {
            setData(res.data)
        }).catch(err => console.log(err))
    }, [id])

    return(
        <>
            <Header data={data}/>
            <Language/>
            <Organisation/>
        </>
    )
}


export default CV;