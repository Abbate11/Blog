// get user inputs from localStorage and display on posts.html
// document.body.onload = displayNewPost;




const displayNewPost = function () {
    const postContent = JSON.parse(localStorage.getItem('userPost'));

    document.section.appendChild('article');
}

displayNewPost()

