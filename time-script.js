var getTime = () => {
    var dateTime = new Date();
    var hour = dateTime.getHours();
    var session = "AM";

    if(hour > 12){
        session = "PM";
    }
    if(hour == 0){
        hour = 12;
    }

    hour = (hour > 12)? hour - 12 : hour;
    hour = (hour < 10)? '0' + hour : hour;
    
    var min = dateTime.getMinutes();
    min = (min < 10)? '0' + min : min;

    var sec = dateTime.getSeconds();
    sec = (sec < 10)? '0' + sec : sec;
    
    return `${hour}:${min}`
}

var greet = () =>{
    var user = "Denil";
    var dateTime = new Date();
    var hour = dateTime.getHours();
    if(hour>=0 && hour<12){
        return  `Good Morning, ${user} !!`
    }
    else if(hour == 12){
        return  `Good Noon, ${user} !!`
    }
    else if(hour > 12 && hour < 16){
        return  `Good AfterNoon, ${user} !!`
    }
    else if(hour >= 16){
        return  `Good Evening, ${user} !!`
    }
    else{
        return  `Hello, ${user} !!`
    }
}

var getSession = () =>{
    var hour = new Date().getHours();
    var session = "AM";
    if(hour > 12){
        session = "PM";
    }
    return session
}

setInterval(() => {
    document.querySelector("#timeSpan").innerText = getTime();
    document.querySelector("#sessionSpan").innerText = getSession();
}, 250);

setInterval(()=>{
    document.querySelector("#greet").innerText = greet();
}, 500)