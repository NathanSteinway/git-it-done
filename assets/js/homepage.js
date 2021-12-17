var getUserRepos = function(user) {
    
    //formatting the github api url for use
    var apiUrl = "https://api.github.com/users/" + user + "/repos";

    //Requesting info from URL
    fetch(apiUrl).then(function(response) {
        response.json().then(function(data) {
            displayRepos(data, user);
          });
    });
};

var userFormEl = document.querySelector("#user-form");
var nameInputEl = document.querySelector("#username");

var formSubmitHandler = function(event) {
    event.preventDefault();
    console.log(event);
  };

userFormEl.addEventListener("submit", formSubmitHandler);
      
  







