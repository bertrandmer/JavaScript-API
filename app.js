console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
let submit = document.getElementById("Submit").addEventListener("click", submitGif);
let gif = document.getElementById("gif");
let gifSearch = document.getElementById("gifSearch").value;
fetch(https://api.giphy.com/v1/gifs/translate?api_key= ${mvqHyy3EaVewycKaVJ0ltlSzqaJgbkl8}&s=${gifSearch}'),{
    mode: "cors",
})
.then(function (response) {
    console.log(response);
    return response.json();
})
.then(function(response){
    console.log(response);
    return(gif.src = response.data.images.original.url);
})
.catch(function(reject){
    console.log(reject);
});