// alert("connected");

// dom manipulation - use for event listening and get the element

// example 1
document.getElementById('changeTextButton').addEventListener('click', ()=>{
    // console.log(this);
    document.getElementById('myParagraph').textContent = "Text changed"
})

// example-2
document
  .getElementById("highlightFirstCity")
  .addEventListener("click", function () {
    let citiesList = document.getElementById("citiesList");
    console.log(citiesList.firstElementChild.classList);
    citiesList.firstElementChild.classList.add("highlight");
  });