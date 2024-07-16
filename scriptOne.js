function updateTime() {
    var startDate = new Date("2006-8-19").getTime();
    var now = new Date().getTime();
    
    var timeDiff = now - startDate;
    var yearsElapsed = timeDiff / (1000 * 60 * 60 * 24 * 365.25); // Convert milliseconds to years
    
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
            divs[i].style.display = "flex";
            for (let j = 0; j < divs[i].children.length; j++) {
                divs[i].children[j].style.display = "flex";
            }            
            setTimeout(function() {
                divs[i].style.opacity = "1";
                for (let j = 0; j < divs[i].children.length; j++) {
                    divs[i].children[j].style.opacity = 1;
                }                
            }, 100 + i * 1000);
        }
    }   
}