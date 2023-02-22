const startBtn=document.querySelector('#start')
const screens=document.querySelectorAll('.screen')
const timeList=document.querySelector('#time-list')
let time=0
const timeEl=document.querySelector('#time')
const board=document.querySelector('#board')
const colors=['#1b60a0', '#d246c0', '#46d275', '#c71d2c', '#0b5315', '#d6fa0c', '#fa770c', '#e3167c', 'yellow', 'white', 'green', 'red']
let score=0
startBtn.addEventListener('click', (event) => {
    event.preventDefault()
    screens[0].classList.add('up')
})
timeList.addEventListener('click', (event) => {

    if(event.target.classList.contains('time-btn')){
time=parseInt(event.target.getAttribute('data-time'))
   screens[1].classList.add('up')
startGame()
    }
})

board.addEventListener('click', event =>{
    if (event.target.classList.contains('circle')){
score++
event.target.remove()
createRandomCircle()
    }
})
function startGame(){
    setInterval(decreaseTime, 1000)
 
    createRandomCircle()
    setTime(time)
}
function decreaseTime(){
    if (time===0){
        finishGame()
    }
    else{
        let current= --time
        if (current < 10)
        {
            current=`0${current}`
        }
        setTime(current)
        }
    }

function setTime(value){
    timeEl.innerHTML=`00:${value}`
}
function finishGame(){
    timeEl.parentNode.classList.add('hide')
board.innerHTML=`<h1>Счет: <span class='primary'>${score}</span></h1>`

}
function createRandomCircle(){
    const circle=document.createElement('div')
    const size=getRandomNumber(10, 60)
   const {width, height} = board.getBoundingClientRect()
   const x=getRandomNumber(0, width-size)
   const y=getRandomNumber(0, height-size)
    circle.classList.add('circle')
    circle.style.width=`${size}px`
    circle.style.height=`${size}px`
    circle.style.top=`${y}px`
    circle.style.left=`${x}px`
    setColor(circle, size)
    board.append(circle)
}
function getRandomNumber(min, max){
return Math.round(Math.random()*(max-min)+min)
}

function setColor (element, size){
    const color=getRandomColor()
element.style.background=color; 
 element.style.boxShadow=`0 0 1px ${color}, 0 0 2px ${color}`
}
function getRandomColor(){
    const index=Math.floor(Math.random()* colors.length)
    
    return colors[index]
}