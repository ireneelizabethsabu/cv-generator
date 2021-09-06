import { useEffect,useState } from "react";
import {getRepos} from '../api/index'
import axios from 'axios'

export const usePercent = (id) => {
    const [total, setTotal] = useState(0)
    const [skills, setSkills] = useState([])
    const [max,setMax] = useState(0)

    useEffect(() => {
        getRepos(id).then(repos => {
            let languages = [];
            var totalMB = 0;
            repos.data.map(async (repo) => {
                const lang = await axios.get(repo.languages_url)
                if (Object.entries(lang.data).length !== 0) {
                    Object.keys(lang.data).forEach((ele) => {
                        const found = languages.some(el => el.lang === ele);
                        if (!found) languages.push({ lang: ele, percent: lang.data[ele] });
                        else {
                            languages.find(element => element.lang===ele).percent+=lang.data[ele]
                        }
                        totalMB = totalMB + lang.data[ele];
                        setTotal(totalMB)
                    });
                }
            });
            setSkills(languages)
            setMax(Math.max.apply(Math, skills.map(function(o) { return o.percent; })))

        }).catch(err => console.log(err));
    }, [id,skills])
    return {skills,total,max}
}