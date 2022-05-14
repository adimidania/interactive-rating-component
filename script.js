var ratingBtns = document.querySelectorAll('.button')
var submitBtn = document.querySelector('#submit')
var cardBody = document.querySelector('.rating')
var cardBodySubmitted = document.querySelector('.finished')
var errorBox = document.querySelector('.error-box')
var selectedValue = document.querySelector('#selected-result')
var ratingValue = 0

var ratingSelect = (e) => {
    console.log("I am here")
    ratingValue = e.target.dataset.value
    console.log(e.target.dataset.value)
}

var sumbitCheck = () => {
    if(ratingValue === 0){
        errorBox.style.display = 'block';
    } else {
        selectedValue.textContent = `You selected ${ratingValue} out of 5`
        cardBody.style.display = 'none'
        cardBodySubmitted.style.display = 'flex'
    }
}

ratingBtns.forEach(btn => btn.addEventListener('click', ratingSelect))
if(submitBtn) {
    submitBtn.addEventListener('click', sumbitCheck)
}

/**
 * I am still a beginner at JavaScript, so Ill leave this here
 * maybe Ill get back to it later.
 * I got an error that says : "Uncaught SyntaxError: Identifier 'Buttons' has already been declared"
 * and I solved it by letting all my elements (ratingBtns etc) declared as var 
 * (P.S: they were const before).
 */