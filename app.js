const body = document.getElementById(`body`);
const result = document.getElementById(`result`);
const patchButton = document.getElementById(`patchButton`);
const deleteButton = document.getElementById(`deleteButton`);

//! GET FUNCTION 
//Get the data and display the content automatically when the page loads
axios.request({
    url: `https://jsonplaceholder.typicode.com/posts`,
   method: "GET",
}).then(getSuccess).catch(getFail);

//print this if the request went through
function getSuccess(response){
   let post = response.data;
   for (allPosts of post){
       result.insertAdjacentHTML(`beforeend`, `<h2>${allPosts.id}. ${allPosts.title}</h2>`);
       result.insertAdjacentHTML(`beforeend`, `<p><i>${allPosts.body}<i></p>`);
   }
}

//print this if the request didn't through
function getFail(error){
   result.innerHTML = `<h1><i>An error has occurred getting the post!</i></h1>`;
}


//! PATCH FUNCTION
//Update the data
function patchFunction(){
    axios.request({
        url: `https://jsonplaceholder.typicode.com/posts/1`,
        method: `PATCH`,
        params: {
            body: body.value
        }
    }).then(patchSuccess).catch(patchFail);
}

//print this if the request went through
function patchSuccess(response){
    eraseFunction ();
    result.innerHTML = `<h1>Post updated successfully!</h1>`
    
}

//print this if the request didn't through
function patchFail(error){
    result.innerHTML = `<h1><i>An error has occurred updating the post!</i></h1>`;
}

//will create update the data when the button is clicked
patchButton.addEventListener(`click`, patchFunction);


//! POST FUNCTION
//Create new data
function postFunction(){
    axios.request({
        url: `https://jsonplaceholder.typicode.com/posts`,
        method: `POST`,
        data: {
            body: body.value
        }
    }).then(postSuccess).catch(postFail);
}

//print this if the request went through
function postSuccess(response){
    eraseFunction ();
    let post = response.data;
    result.insertAdjacentHTML(`beforeend`, `<h1>Post: ${post.body}</h1>`);
}

//print this if the request didn't through
function postFail(error){
    result.innerHTML = `<h1><i>An error has occurred creating a post</i></h1>`;
}

//will create new data when the button is clicked
postButton.addEventListener(`click`, postFunction);



//! DELETE FUNCTION
//Delete the data
function deleteFunction(){
    axios.request({
        url: `https://jsonplaceholder.typicode.com/posts/1`,
        method: `DELETE`,
    }).then(deleteSuccess).catch(deleteFail);
}

//print this if the request went through
function deleteSuccess(response){
    result.innerHTML = `<h1>Post deleted successfully!</h1>`;
}

//print this if the request didn't through
function deleteFail(error){
    result.innerHTML = `Error Deleting Post`;
}

//will delete the data when the button is clicked
deleteButton.addEventListener(`click`, deleteFunction);



//! erase 
//clears the previous function before starting a new one 
function eraseFunction () {
    result.innerHTML = ``;
}




