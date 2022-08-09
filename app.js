let container = document.querySelector('.container')

let circle = document.querySelector('.circle')

let close = document.querySelectorAll('span')[0].children[0]

let open = document.querySelectorAll('span')[1].children[0]

circle.addEventListener('click',e =>{
    if(e.target == open){
        container.classList.add('show-nav')
    }else if(e.target == close){
        container.classList.remove('show-nav')
    }
})