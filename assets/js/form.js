// get all references to DOM elements
const usernameInput = document.querySelector('#username');
const titleInput = document.querySelector('#title');
const submitBtn = document.querySelector('#submit');


usernameInput.textContent = username
titleInput.textContent = title

allPosts = [];
userPost = [];
//keep track of the current user info in local storage



// keep track of total users info in local storage






// create click listener for submit button to save username, title and content to local storage
submitBtn.addEventListener('click', function (){
   if (username != null) {
        localStorage.setItem('Username', username);
   } if (title != null ) {
        localStorage.setItem('Title', title);
   }
}); 


// form reset on button click
submitBtn.addEventListener('click', function (){
    document.querySelector('form').reset()
})


