const btn=document.querySelectorAll('.btn, .close-btn');
const modal=document.querySelector('.modal');

btn.forEach(e => {
    e.addEventListener('click', function(){
        modal.classList.toggle('hide')
    })
})