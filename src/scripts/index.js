import * as moment from 'moment'

let now = moment()
const endTime = moment("2019-05-24","YYYY-MM-DD")

const counterElement = document.getElementById('counter')

let duration = moment.duration(endTime.diff(now))
const countdown = formatDuration(duration)

counterElement.textContent = countdown

const x = setInterval(()=>{
    let duration = moment.duration(endTime.diff(now))
    const countdown = formatDuration(duration)

    counterElement.textContent = countdown

    now = moment()
    if (endTime.diff(now)<0){
        clearInterval(x)
        counterElement.textContent = 'Today\'s the day.'
        window.location.replace('./home.html') 
    }
},1000)

function formatDuration(dur){
    //each if statement checks if there's any year,month,day left in countdown. If not, leave as a blank string so it won't appear
    let y = ''
    let m = ''
    let d = ''
    //Check if year/month/days exist. Create format string if so. If not stay null
    if(dur.years()){
        y = dur.years()+"y "
    }
    if(dur.months()){
        m = dur.month+"m "
    }
    if(dur.days()){
        d = dur.days()+"d "
    }
    let date = y+m+d //combine formatted strings
    let h = padNum(dur.hours())
    let min = padNum(dur.minutes())
    let s = padNum(dur.seconds())
    
    return `${date}${h}:${min}:${s}`
}
function padNum(num){
    if (num < 10){
        num = '0' + num
    }
    return num
}