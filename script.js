const ratingBtns = document.querySelectorAll('.button')
const submitBtn = document.querySelector('#submit')
const cardBody = document.querySelector('.rating')
const cardBodySubmitted = document.querySelector('.finished')
const errorBox = document.querySelector('.error-box')
const selectedValue = document.querySelector('#selected-result')
let ratingValue = 0

const ratingSelect = (e) => {
    ratingValue = e.target.dataset.value
}

const sumbitCheck = () => {
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
