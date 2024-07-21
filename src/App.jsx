// import React, { useState, useEffect } from 'react';
// import './App.css';

// const APIURL = "https://api.github.com/users/";

// const App = () => {
//   const [user, setUser] = useState(null);
//   const [repos, setRepos] = useState([]);

//   const getUser = async (username) => {
//     const response = await fetch(APIURL + username);
//     const data = await response.json();
//     setUser(data);
//     getRepos(username);
//   };

//   const getRepos = async (username) => {
//     const response = await fetch(APIURL + username + "/repos");
//     const data = await response.json();
//     setRepos(data);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const searchBox = document.querySelector("#search");
//     if (searchBox.value !== "") {
//       getUser(searchBox.value);
//       searchBox.value = "";
//     }
//   };

//   useEffect(() => {
//     getUser("Azeen-Shah");
//   }, []);

//   return (
//     <div className="App">
//       {/* <button id="home">
//         <a href="../index.html">Go to Home</a>
//       </button> */}
//       <form id="form" onSubmit={handleSubmit}>
//         <input type="text" id="search" autoFocus placeholder="Search a Github User Here" />
//       </form>
//       <main id="main">
//         {user && (
//           <div className="card">
//             <div>
//               <img className="avatar" src={user.avatar_url} alt={user.name} />
//             </div>
//             <div className="user-info">
//               <h2>{user.name}</h2>
//               <p>{user.bio}</p>
//               <ul className="info">
//                 <li>{user.followers}<strong>Followers</strong></li>
//                 <li>{user.following}<strong>Following</strong></li>
//                 <li>{user.public_repos}<strong>Repos</strong></li>
//               </ul>
//               <div id="repos">
//                 {repos.map((repo) => (
//                   <a key={repo.id} href={repo.html_url} className="repo" target="_blank" rel="noopener noreferrer">
//                     {repo.name}
//                   </a>
//                 ))}
//               </div>
//             </div>
//           </div>
//         )}
//       </main>
//     </div>
//   );
// };

// export default App;

import React, { useState, useEffect } from 'react';
import './App.css';

const APIURL = "https://api.github.com/users/";

const App = () => {
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);

  const getUser = async (username) => {
    const response = await fetch(APIURL + username);
    const data = await response.json();
    setUser(data);
    getRepos(username);
  };

  const getRepos = async (username) => {
    const response = await fetch(APIURL + username + "/repos");
    const data = await response.json();
    setRepos(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchBox = document.querySelector("#search");
    if (searchBox.value !== "") {
      getUser(searchBox.value);
      searchBox.value = "";
    }
  };

  useEffect(() => {
    getUser("Azeen-Shah");
  }, []);

  return (
    <div className="App">
      <form id="form" onSubmit={handleSubmit}>
        <input type="text" id="search" autoFocus placeholder="Search a Github User Here" />
        <button type="submit">Search</button>
      </form>
      <main id="main">
        {user && (
          <div className="card">
            <div>
              <img className="avatar" src={user.avatar_url} alt={user.name} />
            </div>
            <div className="user-info">
              <h2>{user.name}</h2>
              <p>{user.bio}</p>
              <ul className="info">
                <li>{user.followers}<strong>Followers</strong></li>
                <li>{user.following}<strong>Following</strong></li>
                <li>{user.public_repos}<strong>Repos</strong></li>
              </ul>
              <div id="repos">
                {repos.map((repo) => (
                  <a key={repo.id} href={repo.html_url} className="repo" target="_blank" rel="noopener noreferrer">
                    {repo.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default App;
