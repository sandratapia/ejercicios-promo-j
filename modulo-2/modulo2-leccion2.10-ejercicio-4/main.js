'use strict';

const btn = document.querySelector(".js-btn");
btn.addEventListener("click", getOrgRepos);

function getOrgRepos() {
  const organization = document.querySelector('.organization').value;
  fetch(`https://api.github.com/orgs/${organization}`) 
      .then(response => response.json())
      .then(organizationData => {
          const reposURL = organizationData.repos_url; 
          return fetch(reposURL); 
      })
      .then(repositoryResponse => repositoryResponse.json())
      .then(repoData => {
          const repoList = document.querySelector('ul');
          let listContent = '';
          for (const repo of repoData) {
              const repoName = `<li>${repo.name}</li>`;
              listContent += repoName;
          }
          repoList.innerHTML = listContent;
      })
}
