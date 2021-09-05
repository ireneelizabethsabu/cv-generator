// import { getRepos } from "./index";

// const langPercent = (username) => {
//   let languages = [];
//   let totalMB = 0;
//   let no = 0;
//   getRepos(username).then((repos) => {
//     {
//       repos.map((repo) => {
//         if (Object.entries(repo.lang).length !== 0) {
//           Object.keys(repo.lang).map((ele) => {
//             if (!(ele in languages)) {
//               languages[ele] = repo.lang[ele] / 1024;

//               totalMB += repo.lang[ele] / 1024;
//             } else {
//               languages[ele] += repo.lang[ele] / 1024;
//               totalMB += repo.lang[ele] / 1024;
//             }
//           });
//         }
//       });

//       Object.keys(languages).map((lang) => {
//         languages[lang] *= 100 / totalMB;
//         no += languages[lang];
//       });
//       console.log(no);
//     }
//   });
//   console.log(languages);
// };

// export { langPercent };
