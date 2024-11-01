const startBtn = document.querySelector('.start')
const pauseBtn = document.querySelector('.pause')
const stopBtn = document.querySelector('.stop')
const resetBtn = document.querySelector('.reset')
const historyBtn = document.querySelector('.history')
const stopwatch = document.querySelector('.stopwatch')
const time = document.querySelector('.time')
const timeList = document.querySelector('.time-list')

const editorBtn = document.querySelector('.editor')
const colors = document.querySelector('.colors')

let root = document.documentElement

const green = document.querySelector('.green')
const blue = document.querySelector('.blue')
const purple = document.querySelector('.purple')

const infoBtn = document.querySelector('.info')
const modalShadow = document.querySelector('.modal-shadow')
const closeModal = document.querySelector('.close')

let countTime
let minutes = 0
let seconds = 0

let timesArr = []

const handleStart = () => {
	clearInterval(countTime)
	countTime = setInterval(() => {
		if (seconds < 9) {
			seconds++
			stopwatch.textContent = `${minutes}:0${seconds}`
		} else if (seconds >= 9 && seconds < 59) {
			seconds++
			stopwatch.textContent = `${minutes}:${seconds}`
		} else {
			minutes++
			seconds = 0
			stopwatch.textContent = `${minutes}:00`
		}
	}, 1000)
}
const handlePause = () => {
	clearInterval(countTime)
}
const handleStop = () => {
	time.innerHTML = `${stopwatch.textContent}`
	if (stopwatch.textContent !== '0:00') {
		time.style.visibility = 'visible'
		timesArr.push(stopwatch.textContent)
	}
	clearStuff()
}
const handleReset = () => {
	time.style.visibility = 'hidden'
	timesArr = []
	clearStuff()
}

const clearStuff = () => {
	clearInterval(countTime)
	timeList.textContent = ''
	stopwatch.textContent = '0:00'
	seconds = 0
	minutes = 0
}
const showHistory = () => {
	timeList.textContent = ''
	let num = 1
	timesArr.forEach(time => {
		const newTime = document.createElement('li')
		newTime.innerHTML = `${num}. <span>${time}</span>`
		timeList.appendChild(newTime)
		num++
	})
}

const showModal = () => {
	if (!(modalShadow.style.display == 'block')) {
		modalShadow.style.display = 'block'
	} else {
		modalShadow.style.display = 'none'
	}
	modalShadow.classList.add('modal-animation')
}
const modalClose = () => {
	modalShadow.style.display = 'none'
	modalShadow.classList.remove('modal-animation')
}
const selectColor = () => {
	if (!colors.classList.contains('show')) {
		colors.classList.add('show')
		colors.classList.remove('hide')
	} else {
		colors.classList.add('hide')
		colors.classList.remove('show')
	}
}
const changeGreen = () => {}
startBtn.addEventListener('click', handleStart)
pauseBtn.addEventListener('click', handlePause)
stopBtn.addEventListener('click', handleStop)
resetBtn.addEventListener('click', handleReset)
historyBtn.addEventListener('click', showHistory)
infoBtn.addEventListener('click', showModal)
closeModal.addEventListener('click', modalClose)
window.addEventListener('click', e => {
	if (e.target == modalShadow) {
		{
			if ((modalShadow.style.display = 'block')) {
				modalShadow.style.display = 'none'
			} else {
				return
			}
		}
	}
})
editorBtn.addEventListener('click', selectColor)
green.addEventListener('click', () => {
	root.style.setProperty('--first-color', '#41e279')
})
blue.addEventListener('click', () => {
	root.style.setProperty('--first-color', 'royalblue')
})
purple.addEventListener('click', () => {
	root.style.setProperty('--first-color', 'purple')
})
