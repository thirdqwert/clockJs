const secondArrow = document.querySelector('.s'),
    minuteArrow = document.querySelector('.m'),
    hourArrow = document.querySelector('.h'),
    hoursBox = document.querySelector('.hours'),
    minutesBox = document.querySelector('.minutes');

const timerS = document.querySelector('.stopwatch__seconds')
const timerM = document.querySelector('.stopwatch__minutes')
const timerH = document.querySelector('.stopwatch__hours')
const dott = document.querySelector('.tabsLink__span')
let btnTimer = document.querySelector('.stopwatch__btn')
timerS.innerHTML = '00'
timerM.innerHTML = '00'
timerH.innerHTML = '00'
let s = 0
let m = 0
let h = 0
function timeFunc() {
    delay = setTimeout(() => {
        s++
        timerS.innerHTML = s < 10 ? '0' + s : s
        if (s == 59) {
            s = 0
            timerS.innerHTML = s < 10 ? '0' + s : s
            m++
            timerM.innerHTML = m < 10 ? '0' + m : m
            if (m == 59) {
                m = 0
                timerM.innerHTML = m < 10 ? '0' + m : m
                h++
                timerH.innerHTML = h < 10 ? '0' + h : h
                if (h == 60) {

                }
                else if (h < 61) {
                    timeFunc()
                }
            }
            else if (m < 60) {
                timeFunc()
            }
        }
        else if (s < 60) {
            timeFunc()
        }
    }, 1000);
}
function StopFunc() {
    clearTimeout(delay); // чтобы остановить функцию 
}
btnTimer.addEventListener('click', () => {
    if (btnTimer.innerHTML == 'start') {
        btnTimer.innerHTML = 'stop'
        dott.classList.add('active')
        timeFunc()
    }
    else if (btnTimer.innerHTML == 'stop') {
        btnTimer.innerHTML = 'clear'
        StopFunc()
        dott.classList.add('active_clear')
    }
    else if (btnTimer.innerHTML == 'clear') {
        btnTimer.innerHTML = 'start'
        dott.classList.remove('active_clear')
        s = 0
        m = 0
        h = 0
        timerS.innerHTML = '00'
        timerM.innerHTML = '00'
        timerH.innerHTML = '00'
    }
})

function clock() {
    const time = new Date()
    const hours = time.getHours()
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()

    secondArrow.style = `transform: rotate(${seconds * 6}deg)`
    minuteArrow.style = `transform: rotate(${minutes * 6}deg)`
    hourArrow.style = `transform: rotate(${hours * 30}deg)`

    hoursBox.innerHTML = hours < 10 ? '0' + hours : hours
    minutesBox.innerHTML = minutes < 10 ? '0' + minutes : minutes

    setTimeout(() => clock(), 1000)

}

clock()


// рекурсия - Это когда функция запускает саму себя


// setTimeout(() => console.log('hello'), 2000);

// let i = 1;

// function num() {
//     if(i <= 10) {
//         console.log(i);
//         i++
//         setTimeout(() => num(), 1000)
//     }
// }

// num()


const links = document.querySelectorAll('.tabsItem')
const tabs = document.querySelectorAll('.tabsContentItem')

links.forEach((item, i) => {
    item.addEventListener('click', () => {
        removeActive()
        item.classList.add('active')
        tabs[i].classList.add('active')
    })

})



function removeActive() {
    links.forEach((item, i) => {
        item.classList.remove('active')
        tabs[i].classList.remove('active')
    })
}

