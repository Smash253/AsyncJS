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

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            let err=false;
            if(!err) {
                resolve();
            }
            else {
                reject('Ups! Something went wrong here :/');
            }
        }, 2000);  
    });
}

/*createPost({Title:'Post Three', Body:'This is post three'})
.then(getPosts)
.catch(err => console.log(err));*/

/*Async/Await
async function init() {
    await createPost({Title:'Post Three', Body:'This is post three'});

    getPosts();
}*/

//Async Await fetch
async function fetchUsers() {
    let res=await fetch ('https://jsonplaceholder.typicode.com/users');
    let data=await res.json();

    console.log(data);
}

fetchUsers();


/*Promise all
let promise1= Promise.resolve('Hello');
let promise2= 10;   
let promise3= new Promise((resolve,reject) => setTimeout(resolve, 2000, 'Goodbye'));
let promise4= fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());

Promise.all([promise1, promise2, promise3, promise4]).then((values) => console.log(values));
*/




