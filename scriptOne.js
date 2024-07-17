window.onload = function() {
    setTimeout(makeVisible, 5000);
}

function makeVisible() {
    var divs = document.getElementsByClassName('content');
    for(let i = 0; i < divs.length; i++) {
        if(divs[i].id !== 'topBar') {
            divs[i].style.display = "flex";
            for (let j = 0; j < divs[i].children.length; j++) {
                if (divs[i].children[j].className !== 'arrowDiv')
                    divs[i].children[j].style.display = "flex";
            }            
            setTimeout(function() {
                divs[i].style.opacity = "1";
                for (let j = 0; j < divs[i].children.length; j++) {
                    if (divs[i].children[j].className !== 'arrowDiv')
                        divs[i].children[j].style.opacity = 1;
                }                
            }, 100 + i * 1000);
        }
    }   
}

// FIX, DINGUS