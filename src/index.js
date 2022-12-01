
document.addEventListener("DOMContentLoaded", () => {
    
    const ramenDiv = document.getElementById('ramen-menu');
    const ramenMenu = document.querySelector("#new-ramen");

const displayMenu = (menuObj) => {
    menuObj.innerHTML = `
    <div id="ramen-menu">
    <!-- Ramen Images Here -->
  </div>

  <!-- Ramen Details -->
  <div id="ramen-detail">
    <img class="detail-image" src=${menuObj.image} alt="Insert Name Here" />
    <h2 class="name">${menuObj.name}</h2>
    <h3 class="restaurant">${menuObj.restaurant}</h3>
  </div>

  <h3>Rating:</h3>
  <p>
    <span id='rating-display'>${menuObj.rating}</span> / 10
  </p>
  <h3>Comment:</h3>
  <p id='comment-display'>
    ${menuObj.comment}
  </p>
  `
  ramenDiv().appendChild(menuObj)
  

}


const fetchData = () => {
    fetch("http://localhost:3000/ramens")
    .then(response => response.json())
    .then(menu => menu.forEach(displayMenu))
    .catch(error => alert(error))
}
fetchData()
})