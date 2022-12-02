// define global variable for later use
const ramenMenuDiv = document.getElementById("ramen-menu")
const detailImg = document.querySelector("#ramen-detail > .detail-image")
const detailName = document.querySelector("#ramen-detail > .name")
const detailRestaurant = document.querySelector("#ramen-detail > .restaurant")
const detailsRating = document.getElementById("rating-display")
const detailsComment = document.getElementById("comment-display")
const ramenForm = document.getElementById("new-ramen")

{/* <div id="ramen-detail">
    <img class="detail-image" src="./assets/image-placeholder.jpg" alt="Insert Name Here" />
    <h2 class="name">Insert Name Here</h2>
    <h3 class="restaurant">Insert Restaurant Here</h3>
  </div> */}

// callbacks
const handleSubmit = (event) => {
    event.preventDefault()
    const name = event.target.name.value
    const restaurant = event.target.restaurant.value
    const image = event.target.image.value
    const rating = event.target.rating.value
    const comment = document.getElementById("new-comment").value
    const newRamen = {name, restaurant, image, rating, comment,}
    event.target.reset()
    displayRamen(newRamen)
}

const handleClick = (ramen, event) => {
    detailImg.src = ramen.image
    detailName.innerText = ramen.name
    detailRestaurant.innerText = ramen.restaurant
    detailsRating.innerText = ramen.rating
    detailsComment.innerText = ramen.comment
}
const displayRamen = (ramenObj) => {
    
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
// fetch function


const fetchData = () => {
    
    fetch('http://localhost:3000/ramens')
    .then(response => response.json())
    .then(ramens => ramens.forEach(displayRamen)) // foreach automatically passes the current ramen we iterate over to the callback
    .catch(error => alert(error))
}


// start the logic
ramenForm.addEventListener("submit", handleSubmit) // when u put (), then callback, then it will give u a error 

fetchData()































// document.addEventListener("DOMContentLoaded", () => {
    
//     const ramenDiv = document.getElementById('ramen-menu');
//     const ramenMenu = document.querySelector("#new-ramen");

// const displayMenu = (menuObj) => {
//     menuObj.innerHTML = `
//     <div id="ramen-menu">
//     <!-- Ramen Images Here -->
//   </div>

//   <!-- Ramen Details -->
//   <div id="ramen-detail">
//     <img class="detail-image" src=${menuObj.image} alt="Insert Name Here" />
//     <h2 class="name">${menuObj.name}</h2>
//     <h3 class="restaurant">${menuObj.restaurant}</h3>
//   </div>

//   <h3>Rating:</h3>
//   <p>
//     <span id='rating-display'>${menuObj.rating}</span> / 10
//   </p>
//   <h3>Comment:</h3>
//   <p id='comment-display'>
//     ${menuObj.comment}
//   </p>
//   `
//   ramenDiv().appendChild(menuObj)
  

// }


// const fetchData = () => {
//     fetch("http://localhost:3000/ramens")
//     .then(response => response.json())
//     .then(menu => menu.forEach(displayMenu))
//     .catch(error => alert(error))
// }
// fetchData()
// })