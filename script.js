const offers = document.querySelectorAll('.offer');
const offerlinks = document.querySelectorAll('.seemore')
console.log(offerlinks, offers)

for (let i = 0; i < offers.length; i++) {
    offers[i].addEventListener('mouseenter', ()=>{
        offerlinks[i].classList.add('seemore-a')
    })
    
    offers[i].addEventListener('mouseleave', ()=>{
        offerlinks[i].classList.remove('seemore-a')
    })
}

const rangeInput = document.querySelectorAll(".range-input input"),
      priceInput = document.querySelectorAll(".price-input input"),
      range = document.querySelector(".slider .progress");
let priceGap = 500;


priceInput.forEach(input => {
    input.addEventListener("input", e => {
        let minPrice = parseInt(priceInput[0].value),
            maxPrice = parseInt(priceInput[1].value);

        if ((maxPrice - minPrice >= priceGap) && maxPrice <= rangeInput[1].max) {
            if (e.target.classList.contains("input-min")) {
                rangeInput[0].value = minPrice;
                range.style.left = ((minPrice / rangeInput[0].max) * 100) + "%";
            } else {
                rangeInput[1].value = maxPrice;
                range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
            }
        }
    });
});

rangeInput.forEach(input => {
    input.addEventListener("input", e => {
        let minVal = parseInt(rangeInput[0].value),
            maxVal = parseInt(rangeInput[1].value);

        if ((maxVal - minVal) < priceGap) {
            if (e.target.classList.contains("range-min")) {
                rangeInput[0].value = maxVal - priceGap;
            } else {
                rangeInput[1].value = minVal + priceGap;
            }
        } else {
            priceInput[0].value = minVal;
            priceInput[1].value = maxVal;
            range.style.left = ((minVal / rangeInput[0].max) * 100) + "%";
            range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
        }
    });
});


const filter_buttons = document.querySelectorAll('.filters_preview');
console.log(filter_buttons)
const filter_options = document.querySelectorAll('.filters_inputarea');
console.log(filter_options)