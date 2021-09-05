import { useParams } from "react-router";
import Header from "../Header/header";
import Language from "../Languages/Language";
import Projects from "../Projects/Projects";
import { getRepos, getUsers } from "../../api";
import { useState,  useEffect } from "react";

const CV=() => {
    const {id} =useParams()
    const [data,setData] = useState(null)
    useEffect(() => {
        getUsers(id).then(res => {
            setData(res.data)
        }).catch(err => console.log(err))
    }, [id])
    return(
        <>
        <Header/>
        <Language/>
        <Projects />
        </>
    )
}


export default CV;