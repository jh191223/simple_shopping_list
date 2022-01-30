//category 버튼 클릭시 분류 
// 1. 옷 종류에 따라 
let button = document.querySelectorAll('.category> button')
let content = document.querySelectorAll('.items>.content')
// let top = document.querySelector('top');
// let pants = document.querySelector('pants');
// let skirt = document.querySelector('skirt');
// let blue = document.querySelector('blue');
// let yellow = document.querySelector('yellow');
// let pink = document.querySelector('pink');
 console.log(button)
 console.log(content);


function removeEvent(){
    
}


button[0].addEventListener('click',function(){
    for(let i = 0;i<content.length;i++){
        if(!content[i].classList.contains('top')){
            content[i].classList.add('hidden');
        } else{
            content[i].classList.remove('hidden');
        }
    }
})

button[1].addEventListener('click',function(){
    for(let i = 0;i<content.length;i++){
        if(!content[i].classList.contains('pants')){
            content[i].classList.add('hidden');
        }else{
            content[i].classList.remove('hidden');
        }
    }
})

button[2].addEventListener('click',function(){
    for(let i = 0;i<content.length;i++){
        if(!content[i].classList.contains('skirt')){
            content[i].classList.add('hidden');
        }else{
            content[i].classList.remove('hidden');
        }
    }
})

button[3].addEventListener('click',function(){
    for(let i = 0;i<content.length;i++){
        if(!content[i].classList.contains('blue')){
            content[i].classList.add('hidden');
        }else{
            content[i].classList.remove('hidden');
        }
    }
})

button[4].addEventListener('click',function(){
    for(let i = 0;i<content.length;i++){
        if(!content[i].classList.contains('yellow')){
            content[i].classList.add('hidden');
        }else{
            content[i].classList.remove('hidden');
        }
    }
})


button[5].addEventListener('click',function(){
    for(let i = 0;i<content.length;i++){
        if(!content[i].classList.contains('pink')){
            content[i].classList.add('hidden');
        }else{
            content[i].classList.remove('hidden');
        }
    }
})

