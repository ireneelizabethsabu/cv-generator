import axios from 'axios';

const getUsers = async (nam) => {
    try{
        return await axios.get("https://api.github.com/users/"+ nam);
    }
     catch(err){
      console.log("User API call not complete");  
    }
};

const sortByStar = (a,b) => {
    if(a.stargazer_count > b.stargazer_count)
        return -1;
    else if(a.stargazer_count === b.stargazer_count)
        return 0;
    else return 1;
}

const getRepos = async (nam) => {
    let repo=[];
    try{
        const repos= await axios.get("https://api.github.com/users/"+nam+"/repos");
        repos.data.map(async (ele)=>{

            const lang = await axios.get(ele.languages_url);
            // console.log(lang);
            repo.push({
            name:ele.full_name,
            lang:lang.data,
            stargazer_count: parseInt(ele.stargazers_count),
            deployed : ele.homepage,
            description : ele.description
            });
        })
        return repo.sort(sortByStar);
    }
    catch(err){
      console.log("Repos API call not complete");  
    }
  
};

export  {getUsers, getRepos};
