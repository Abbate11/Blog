// get all references to DOM elements
let usernameInput = document.querySelector('#username');
let titleInput = document.querySelector('#title');
let contentInput = document.querySelector('#content');
const submitBtn = document.querySelector('#submit');






// keep track of total users info in local storage






// create click listener for submit button to save username, title and content to local storage
submitBtn.addEventListener('click', function storeInput() {
     if (usernameInput.value != '') {
          localStorage.setItem('Username', usernameInput.value);
     } else {
          alert('Please enter your username');
     } if (titleInput.value != '') {
          localStorage.setItem('Title', titleInput.value);
     } else {
          alert('Please enter a title for your post');
     } if (contentInput.value != '') {
          localStorage.setItem('Content', contentInput.value);
     } else {
          alert('Content cannot be blank');
     }
}); 

// form reset on button click
submitBtn.addEventListener('click', function () {
     document.querySelector('form').reset()
})


