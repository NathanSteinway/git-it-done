var getUserRepos = function(user) {
    
    //formatting the github api url for use
    var apiUrl = "https://api.github.com/users/" + user + "/repos";

    //Requesting info from URL
    fetch(apiUrl).then(function(response) {
        response.json().then(function(data) {
            console.log(data);
        });
    });
};

getUserRepos();
