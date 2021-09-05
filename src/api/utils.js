import axios from "axios";
import { getRepos } from "./index";

const langPercent = async (username) => {
  let no = 0;
  const repos = await getRepos(username);

  let languages = [];
  var totalMB = 0;
  repos.data.map(async (repo) => {
    const lang = await axios.get(repo.languages_url)
    if (Object.entries(lang.data).length !== 0) {
        Object.keys(lang.data).map((ele) => {
            const found = languages.some(el => el.lang === ele);
            if (!found) languages.push({ lang: ele, percent: lang.data[ele] });
            else {
                languages.find(element => element.lang===ele).percent+=lang.data[ele]
            }
            totalMB = totalMB + lang.data[ele];
            //console.log(totalMB)
        });
    }
  });
  
  console.log(languages);
  return languages;
};

export { langPercent };