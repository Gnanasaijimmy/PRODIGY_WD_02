window.onload = function(){
    let minutes = 0
    let seconds = 0
    let milliseconds = 0
    let Interval;
    let minutesElement = document.getElementById("minutes");
    let secondsElement = document.getElementById("seconds");
    let millisecondsElement = document.getElementById("milliseconds");
    let ulContainerElement = document.getElementById("ulContainer");

    let container = document.getElementById("container");
    

    let startbtn = document.getElementById("start")
    let stopbtn = document.getElementById("stop")
    let restartbtn = document.getElementById("restart");
    let savebtn = document.getElementById("save")
    console.log(savebtn)

    const startTimer = function(){
        milliseconds++
        if (milliseconds<9){
            millisecondsElement.innerHTML = "0"+milliseconds;
        }
        if (milliseconds > 9){
            millisecondsElement.innerHTML = milliseconds;
        }
        if (milliseconds > 99){
            seconds++
            secondsElement.innerHTML = "0"+seconds;
            milliseconds = 0
            milliseconds.innerHTML = "0" + 0;
        }
        if (seconds > 9){
            secondsElement.innerHTML = seconds;
        }
        if (seconds > 59){
            minutes++
            minutesElement.innerHTML = "0"+minutes
            seconds = 0
            secondsElement.innerHTML = "0"+0
        }
    }

    startbtn.onclick = () => {
        clearInterval(Interval);
        Interval = setInterval(startTimer,10);    
    }
    stopbtn.onclick = function(){
        clearInterval(Interval)
    }
    restartbtn.onclick = function(){
        clearInterval(Interval)
        milliseconds = 0
        seconds = 0
        minutes = 0
        millisecondsElement.innerHTML = '00';
        secondsElement.innerHTML = '00';
        minutesElement.innerHTML = '00';
    }
    savebtn.onclick = function(){
        container.appendChild(ulContainerElement);
        let currentTime = minutes + ":" + seconds + ":" + milliseconds;
        let listElement = document.createElement("li");
        listElement.textContent = currentTime;
        console.log(listElement.textContent)
        console.log("hi")
        ulContainerElement.appendChild(listElement);

    }
}