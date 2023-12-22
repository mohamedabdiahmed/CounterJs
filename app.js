const count = document.getElementById('count')
const btnCounter = document.getElementById('counter');
let counter = 0


count.addEventListener('click',()=>{
    btnCounter.innerHTML = counter++
})