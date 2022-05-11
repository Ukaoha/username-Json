"use strict";

// 1.specify API URL
const url = "https://jsonplaceholder.typicode.com/users";
// 2. fetch user ,
const fetchUrl = function () {
  //  make use of the browser fetch API
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // parsing the users data to the renderUsers function
      renderUsers(data);
    });
};

// 3. render the users in the DOM
const renderUsers = function (usersData) {
  console.log("from rederUsers");
  console.log(usersData);
  const userListContainer = document.getElementById("user__list__data");
  console.log(userListContainer);

  // render li tag forEach of the users
  usersData.forEach((user, index) => {
    console.log(user, index + 1);
    const li = document.createElement("li");
    li.innerHTML = `<span>${index + 1}</span>
        <span>${user.name}</span>
        <span>-</span>
        <span class="username">${user.username}</span>
        `;
    // Append the current user li tag to the userlistcontainer
    userListContainer.appendChild(li);
  });
};
// usernot found 
// const userNotfound = document.createElement('h1');
// userNotfound.innerHTML = 'Error 404 ⚠ '
// 4. Add a search function to the Dom
const searchUserByUsername = function () {
  const userInput = document.getElementById("search__data");
  const userListContainer = document.getElementById("user__list__data");
  const inputValue = userInput.value.toUpperCase();
  console.log(userInput);
  console.log(userListContainer);
  console.log(inputValue);
  const userList = userListContainer.querySelectorAll("li");


  // loop through all the users and render the ones that match
  for (let index = 0; index < userList.length; index++) {
      const usernameSpanTag = userList[index].querySelector('.username');
      const usernameSpanTagValue = usernameSpanTag.innerText.toUpperCase();
      const isMatch = usernameSpanTagValue.indexOf(inputValue) > -1;
    //   console.log(usernameSpanTag.innerText.indexOf(inputValue));
    if(isMatch){
        userList[index].style.display = 'block';
    }else{
      userList[index].style.display = 'none';
        // userList[index] =  userNotfound.innerHTML = 'Error 404 ⚠ '
    }
    console.log(usernameSpanTag.innerText.indexOf(inputValue) > -1);
    
  }
};

fetchUrl();
