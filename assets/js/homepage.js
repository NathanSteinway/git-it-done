var userFormEl = document.querySelector("#user-form");
var nameInputEl = document.querySelector("#username");
var repoContainerEl = document.querySelector("#repos-container");
var repoSearchTerm = document.querySelector("#repo-search-term");

var formSubmitHandler = function(event) {
    event.preventDefault();
    console.log(event);

    var username = nameInputEl.value.trim();
    

    if (username) {
        getUserRepos(username);
        nameInputEl.value = "";
    } else {
        alert("Please enter a GitHub username");
    }
  };

  var getUserRepos = function(user) {
    
    //formatting the github api url for use
    var apiUrl = "https://api.github.com/users/" + user + "/repos";

    //Requesting info from URL
    fetch(apiUrl).then(function(response) {
        if (response.ok) {
        response.json().then(function(data) {
            displayRepos(data, user);
          });
        } else {
            alert("Error: GitHub User Not Found");
        }
    })
    .catch(function(error) {
        alert("Unable to connect to GitHub");
    });
  };


var displayRepos = function(repos, searchTerm) {
    console.log(repos);
    console.log(searchTerm);
    repoContainerEl.textContent = "";
    repoSearchTerm.textContent = searchTerm;

    if (repos.length === 0) {
        repoContainerEl.textContent = "No Repositories Found.";
        return;
    }

    for (var i = 0; i < repos.length; i++) {

        var repoName = repos[i].owner.login + "/" + repos[i].name;

        var repoEl = document.createElement("a");
            repoEl.classList = "list-item flex-row justify-space-between align-center";
            repoEl.setAttribute("href", "./single-repo.html?repo=" + repoName);
            
        var titleEl = document.createElement("span");
            titleEl.textContent = repoName;
            repoEl.appendChild(titleEl);

        var statusEl = document.createElement("span");
            statusEl.classList = "flex-row align-center";

            if (repos[i].open_issues_count > 0) {
                statusEl.innerHTML =
                    "<i class='fas fa-times status-icon icon-danger'></i>" + repos[i].open_issues_count + " issue(s)";
            } else {
                statusEl.innerHTML = "<i class='fas fa-check-square status-icon icon-success'></i>";
            }

        repoContainerEl.appendChild(statusEl);
        repoContainerEl.appendChild(repoEl);
    }
};

userFormEl.addEventListener("submit", formSubmitHandler);
      
  







