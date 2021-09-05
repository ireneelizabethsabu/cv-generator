import axios from "axios";

const getUsers = async (nam) => {
  try {
    return await axios.get("https://api.github.com/users/" + nam);
  } catch (err) {
    console.log("User API call not complete");
  }
};

const getOrgs = async (nam) => {
  let organization = [];
  try {
    const orgs = await axios.get(
      "https://api.github.com/users/" + nam + "/orgs"
    );

    orgs.data.map(async (ele) => {
      const org = await axios.get(ele.url);

      organization.push({
        name: org.data.name,
        image: ele.avatar_url,
        description: ele.description,
        blog: org.data.blog,
      });
    });
    return organization;
  } catch (err) {
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

export const getOrganisation = async (id) => {
  try{
    return await axios.get(`https://api.github.com/users/${id}/orgs`);
  }catch(err){
      console.log("Repos API call not complete");  
  }
};

const getRepos = async (nam) => {
  try{
    return await axios.get("https://api.github.com/users/"+nam+"/repos");
  }catch(err){
      console.log("Repos API call not complete");  
  }
};

// export const getOauth = (code) => {
//   if (code) {
//     axios.get(`https://github.com/login/oauth/access_token`,{
//       params: {
//         code: code,
//         client_secret: process.env.REACT_APP_CLIENT_SECRET,
//         client_id: process.env.REACT_APP_CLIENT_ID,
//         redirect_uri: "http://localhost:3000"
//       }
//     }
//     )
//       .then(response => response.json())
//   }
// }
export { getUsers, getRepos, getOrgs };
