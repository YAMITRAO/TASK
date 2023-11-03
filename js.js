let posts = [{
    title:"POST1"
},
{
    title: "POST2"
}]


function createPost(data){
    return new Promise( (res, rej) => {
        posts.push(data);
        latestPost().then( () => {
            updateLastUserActivityTime().then( (msg) => {
                console.log(msg);
                deletedPOst().then( (msg) => console.log(msg));
            })
        })
       
        res(data.title);
    })
}

function updateLastUserActivityTime(){
    let date = new Date();
    return new Promise( (res, rej) => {
        setTimeout( () =>{
            res(date);
        },1000)
    })
}

function deletedPOst(){
    return new Promise( (res,rej) => {
        setTimeout(() => {
            posts.pop();
            res("Post Deleted")
        }, 1000);
    })
    
}

function latestPost(){
    return new Promise( (res, rej) => {
        console.log( posts[posts.length-1].title);
        res();
    })
}


createPost({title:"POST3"})



// console.log(posts);