import React, { useEffect, useState } from 'react';
import './project.css';

const API_URL = 'https://api.github.com/users/njonusiene';

const Project = () => {
  const [userData, setUserData] = useState(null);
  const [repos, setRepos] = useState([]);

  const loadData = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching user data:', error);
      throw error; // Rethrow the error to indicate that the fetch failed
    }
  };

  const loadRepos = async () => {
    try {
      const response = await fetch(`${API_URL}/repos`);
      const data = await response.json();
      return data.slice(0, 20);
    } catch (error) {
      console.error('Error fetching repositories:', error);
      throw error; // Rethrow the error to indicate that the fetch failed
    }
  };

  const printRepos = (data) => (
    <div id="repos">
      {data.map((repo) => (
        <a key={repo.id} href={repo.html_url} target="_blank" rel="noopener noreferrer">
          {repo.name}
        </a>
      ))}
    </div>
  );
  
  const printData = (data) => (
    <div className="cardProject">
      <br /> <br />
      
      <ul>
      <a href="https://github.com/njonusiene" target="_blank" rel="noopener noreferrer">
      <i class="fa-brands fa-github"></i>
      </a>
      <li>
          {data.name} <strong>Jonušienė</strong>
        </li>
        <li>
          {data.public_repos} <strong>Repos</strong>
        </li>
      </ul>
      {/* {printRepos(repos)}  */}
    </div>
  );

  useEffect(() => {
    console.log('Fetching user data...');
    // Fetch data and repositories for 'njonusiene' on mount
    loadData()
      .then((data) => {
        console.log('User data fetched successfully:', data);
        setUserData(data);
      })
      .catch((error) => console.error('Error fetching user data:', error));

    console.log('Fetching repositories...');
    loadRepos()
      .then((repos) => {
        console.log('Repositories fetched successfully:', repos);
        setRepos(repos);
      })
      .catch((error) => console.error('Error fetching repositories:', error));
  }, []);

  return (
    <div className="cardProject">
      {/* Render user data and repos */}
      {userData && printData(userData)}
      {repos && printRepos(repos)}
    </div>
  );
};

export default Project;
