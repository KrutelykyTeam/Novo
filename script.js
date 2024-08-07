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



