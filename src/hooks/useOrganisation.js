import { useEffect,useState } from "react";
import {getOrganisation} from '../api/index'

export const useOrganisation = (id) => {
    const [org, setOrg] = useState([])
    
    useEffect(() => {
        getOrganisation(id).then(res => {
            setOrg(res.data)
        }).catch(err => console.log(err))
    }, [id])

    return {org}
}