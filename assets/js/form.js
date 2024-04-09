// get all references to DOM elements
let usernameInput = document.querySelector('#username');
let titleInput = document.querySelector('#title');
let contentInput = document.querySelector('#content');
const submitBtn = document.querySelector('#submit');


// create click listener for submit button to save username, title and content to local storage
submitBtn.addEventListener('click', function storeInfo() {
     const stringPost = localStorage.getItem('allPosts') 
     const allPosts = JSON.parse(stringPost) || [];
     
     const userPost =  {
          Username: usernameInput.value,
          Title: titleInput.value,
          Content: contentInput.value
     };
          allPosts.push(userPost);
          localStorage.setItem('allPosts', JSON.stringify(allPosts));
});


// alert if any form section is left blank
submitBtn.addEventListener('click', function sendAlert(event) {
     
     if (usernameInput.value === '') {
          alert('Please enter your username');
          event.preventDefault();
     } if (titleInput.value === '') {
          alert('Your post needs a title!');
          event.preventDefault();
     } if (contentInput.value === '') {
          alert('Content is missing!');
          event.preventDefault();
     }
}); 


// form reset on button click
submitBtn.addEventListener('click', function () {
     document.querySelector('form').reset();
});


