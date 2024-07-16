function updateTime() {
    var startDate = new Date("2006-8-19").getTime();
    var now = new Date().getTime();
    var ageDate = new Date(now - startDate);
    var yearsElapsed = Math.abs(ageDate.getUTCFullYear() - 1970);
    
    var years = Math.floor(yearsElapsed);
    
    document.getElementById('ryanAge').innerHTML = years;
}
setInterval(updateTime, 1000);

window.onload = function() {
    setTimeout(makeVisible, 5000); // 5000 milliseconds = 5 seconds
}

function makeVisible() {
    var divs = document.getElementsByClassName('content');
    for(let i = 0; i < divs.length; i++) {
        if(divs[i].id !== 'topBar') {
            divs[i].style.display = "block";
            setTimeout(function() {
                divs[i].style.opacity = "1";
            }, 100 + i * 1000);
        }
    }   
}