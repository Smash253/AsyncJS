let posts=[
    {Title:'Post One', Body:'This is post one'},
    {Title:'Post Two', Body:'This is post two'}

];

function getPosts() {
    setTimeout(() => {
        let output='';
        posts.forEach((post) => {
        output+= `<li>${post.Title}</li>`
        document.body.innerHTML=output;
        });
    }, 1000);
}

function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
}

createPost({Title:'Post Three', Body:'This is post three'}, getPosts);