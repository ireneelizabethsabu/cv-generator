import { useEffect,useState } from "react";
import {getRepos,sortByStar} from '../api/index'

export const useRepo = (id) => {
    const [repo, setRepo] = useState([])
    
    useEffect(() => {
        getRepos(id).then(res => {
            let rep = res.data.sort(sortByStar)
            setRepo(rep.filter((el)=>
               {
                return el.fork === false &&
                el.language !== null
               }
            ).slice(0,5))
        }).catch(err => console.log(err))
    }, [id])

    return { repo }
}