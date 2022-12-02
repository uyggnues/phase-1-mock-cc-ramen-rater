// define global variable for later use (this is setting where different information will go in different places)
// first 
const ramenMenuDiv = document.getElementById("ramen-menu")
// second (this comes after the displayRamen()
const detailImg = document.querySelector("#ramen-detail > .detail-image") // had to use querySelector here because i needed to go in deeper to access the pot i wanted to access
const detailName = document.querySelector("#ramen-detail > .name")
const detailRestaurant = document.querySelector("#ramen-detail > .restaurant")
const detailsRating = document.getElementById("rating-display") // can use getElementByIdbecause its just straight up in accessing the place i want to access.
const detailsComment = document.getElementById("comment-display")
// third (this comes after setting what will go into the set place of everything)
const ramenForm = document.getElementById("new-ramen")
// everything up here ^^^ is getting the place where we want to display what we set whatever we code down.

{/* <div id="ramen-detail">
    <img class="detail-image" src="./assets/image-placeholder.jpg" alt="Insert Name Here" />
    <h2 class="name">Insert Name Here</h2>
    <h3 class="restaurant">Insert Restaurant Here</h3>
  </div> */}

// callbacks (this is putting all the information in a given place)_________________________________________
const handleSubmit = (event) => { // this comes after getting where the new ramen detail will go 
    event.preventDefault() 
    const name = event.target.name.value // .target is grabbing the information that is inputted in the form
    const restaurant = event.target.restaurant.value
    const image = event.target.image.value
    const rating = event.target.rating.value
    const comment = document.getElementById("new-comment").value
    const newRamen = {name, restaurant, image, rating, comment}
    //if i wanted to do ^^^ the long way but better to understand then it would be like the example under:
    // const name: name, restaurant: restaurant, image: image, rating: rating, comment: comment
    event.target.reset() // this is to reset and clear out the form
    displayRamen(newRamen) // taking the submitted data and displaying it on screen
}

const handleClick = (ramen, event) => { // this comes after getting the details to put everything
    detailImg.src = ramen.image
    detailName.innerText = ramen.name
    detailRestaurant.innerText = ramen.restaurant
    detailsRating.innerText = ramen.rating
    detailsComment.innerText = ramen.comment
}
const displayRamen = (ramenObj) => { // this comes after fetching 
    // create img tag
    const ramenImg = document.createElement("img")    
    // set img src
    ramenImg.src = ramenObj.image
    //set and alt attributes - OPTIONAL but recommended
    ramenImg.alt = ramenObj.name
    //set a class - OPTIONAL
    ramenImg.classList.add("image-slider")
    //when invoking a callback with a specific argument, wrap the function invocation within an anonymous function
    ramenImg.addEventListener("click", (event) => handleClick(ramenObj, event))
    // append img to Div
    ramenMenuDiv.appendChild(ramenImg)
}
// everything up here ^^^ is displaying everything in to the place where we want to display 
// _____________________________________________________________________________________________________________
// (this is where i get(fetch) the information from the given server(inthis case is "http://localhost/ramen"))
// fetch function (this comes first after  getting the main div or li or ul or whatever )
const fetchData = () => {
    
    fetch('http://localhost:3000/ramens')
    .then(response => response.json())
    .then(ramens => ramens.forEach(displayRamen)) // foreach automatically passes the current ramen we iterate over to the callback
    .catch(error => alert(error))
}


// start the logic
ramenForm.addEventListener("submit", handleSubmit) // when u put () after in this case "handle submit", then it will give u a error 
fetchData()
// everything up here ^^^ is fetching the data from the server so we can get the information t odisplay the information
// look where you have to display first part of information first 
// then if its asking to display something first then display whatever is giving first 
// then look if there is a .event then work on that





















































// const ramenMenuDiv = document.getElementById('ramenMenu')


// const handleClick = () => {
    
// }

// const displayRamen = (ramenObj) => {
//     const ramenImg =  document.createElement('img')
//     ramenImg.src = ramenObj.ramenImg
//     ramenImg.addEventListener("click", (event) => handleClick(ramenObj, event))
//     ramenMenuDiv.appendChild(ramenImg)
    
    
// }

// const fetchData = () => {
//     fetch("http://localhost:3000/ramens")
//     .then(resp => resp.json())
//     .then(ramens => ramens.forEach(displayRamen))
//     .catch(error => alert(error))
// }
// fetchData()