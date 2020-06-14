const durationInput = document.querySelector('#duration')
const startBtn = document.querySelector('#start')
const pauseBtn = document.querySelector('#pause')

const circle = document.querySelector('circle')

const perimeter = circle.getAttribute('r') * 2 * Math.PI
console.log(perimeter)
circle.setAttribute('stroke-dasharray', perimeter)
let currOffset = 0
let duration

const callbackFunc = {
    onStart(totalDur){
        duration = totalDur
        console.log('time started')
    },
    onTick(timeRemaining){
        circle.setAttribute('stroke-dashoffset', 
        perimeter * timeRemaining / duration - perimeter
        )
    },
    onComplete(){
        console.log('complete')
    }
}

const timer = new Timer(durationInput, startBtn, pauseBtn, callbackFunc)
