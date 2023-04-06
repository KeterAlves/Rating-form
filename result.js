const rateContainer = document.querySelector(".container-form")

const thankContainer = document.querySelector(".result-form")

const submitButton = document.getElementById("submit")

const rating = document.getElementById("rating")
const rates = document.querySelectorAll(".btn")

console.log(submitButton);

submitButton.addEventListener("click", ()=>{

  thankContainer.classList.remove("hidden")

  rateContainer.style.display = "none"
})

rates.forEach((rate) =>{
  rate.addEventListener("click", () =>{
    rating.innerHTML = rate.innerHTML
  })
})