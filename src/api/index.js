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

const getRepos = async (nam) => {
  let repo = [];
  try {
    const repos = await axios.get(
      "https://api.github.com/users/" + nam + "/repos"
    );
    repos.data.map(async (ele) => {
      if (!ele.fork) {
        const lang = await axios.get(ele.languages_url);
        repo.push({
          name: ele.full_name,
          lang: lang.data,
          stargazer_count: ele.stargazers_count,
        });
      }
    });

    return repo;
  } catch (err) {
    console.log("Repos API call not complete");
  }
};

export { getUsers, getRepos, getOrgs };
