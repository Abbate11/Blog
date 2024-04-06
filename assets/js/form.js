// get all references to DOM elements
let usernameInput = document.querySelector('#username');
let titleInput = document.querySelector('#title');
let contentInput = document.querySelector('#content');
const submitBtn = document.querySelector('#submit');






// keep track of total users info in local storage





// preventing form send while working on it


// create click listener for submit button to save username, title and content to local storage
submitBtn.addEventListener('click', function storeInfo() {
     const userPost =  {
          Username: usernameInput.value,
          Title: titleInput.value,
          Content: contentInput.value,
     }

     localStorage.setItem('userPost', JSON.stringify(userPost));
});




// alert if any form section is left blank
submitBtn.addEventListener('click', function sendAlert() {
     if (usernameInput.value === '') {
          alert('Please enter your username');
     } if (titleInput.value === '') {
          alert('Your post needs a title!');
     } if (contentInput.value === '') {
          alert('Content is missing!');
     }
}); 

// form reset on button click
submitBtn.addEventListener('click', function () {
     document.querySelector('form').reset()
})


