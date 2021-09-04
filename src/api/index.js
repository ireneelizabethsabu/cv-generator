import axios from 'axios';

const getUsers = async (nam) => {
    try{
        return await axios.get("https://api.github.com/users/"+ nam);
    }
     catch(err){
      console.log("User API call not complete");  
    }
};

let repo=[];


const getRepos = async (nam) => {
    try{
        const repos= await axios.get("https://api.github.com/users/"+nam+"/repos");
        repos.data.map(async (ele)=>{

            const lang = await axios.get(ele.languages_url);
            // console.log(lang);
            repo.push({
            name:ele.full_name,
            lang:lang.data,
            stargazer_count:ele.stargazers_count
            });
        })
        // console.log(repo);
        return repo;
    }
    catch(err){
      console.log("Repos API call not complete");  
    }
  
};

export  {getUsers, getRepos};
