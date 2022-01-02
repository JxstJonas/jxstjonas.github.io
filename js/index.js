const title = document.querySelector('.title');
const text = title.textContent;
const textArray = text.split("");

title.innerHTML = "";

for (let index = 0; index < textArray.length; index++) {
    title.innerHTML += '<span><b>' + textArray[index] + '</span>';
}


let char = 0;
let timer = setInterval(onActivate, 50);

function onActivate() {
    const span = title.querySelectorAll('span')[char];
    span.classList.add('active');
    char++;
    if(char === textArray.length) stop();
}


function stop() {
    clearInterval(timer);
}