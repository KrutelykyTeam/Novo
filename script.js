const inputValue = document.getElementById('load')
const saveButton = document.getElementById('save')
const prev = document.getElementById('prev')
const refresh = document.getElementById('reload')
const reset = document.getElementById('reset')



refresh.addEventListener('click', ()=>{
    location.reload()
})

reset.addEventListener('click', ()=>{
    localStorage.removeItem('img')
    location.reload()
})

document.addEventListener('DOMContentLoaded', ()=>{
    let savedImage = localStorage.getItem('img')
    if(savedImage){
        prev.src = savedImage;
    }else{
        prev.src = './img/2.jpg'
    }
})



saveButton.addEventListener('click', () => {
    const file = inputValue.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = (e) => {
            const base64String = e.target.result;
            localStorage.setItem('img', base64String);
            console.log('Изображение сохранено!');
        };

        reader.readAsDataURL(file);
    } else {
        alert('Выберите изображение');
    }
});