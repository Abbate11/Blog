// get user inputs from localStorage and display on posts.html
// document.body.onload = displayNewPost;


const displayNewPost = function () {
    const stringContent = localStorage.getItem('allPosts');
    const newContent = JSON.parse(stringContent);

    for (i = 0; i < newContent.length; i++) {
        let div = document.createElement('div');
        let title = document.createElement('h1');
        let content = document.createElement('p');
        let author = document.createElement('h2');

        title.textContent = newContent[i].Title;
        content.textContent = newContent[i].Content
        author.textContent = newContent[i].Username

        title.setAttribute('class', 'title');
        content.setAttribute('class', 'content');
        author.setAttribute('class', 'username');

        div.append(title);
        div.append(content);
        div.append(author);

        document.body.append(div);
    };
}

displayNewPost()

