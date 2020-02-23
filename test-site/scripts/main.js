var chImage = document.querySelector('img');
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
var shift = 0;
chImage.onclick = function(){
    var mySrc = chImage.getAttribute('src');
    if(shift === 0){
        chImage.setAttribute('src','https://hk.on.cc/hk/bkn/cnt/news/20191101/photo/bkn-20191101020012700-1101_00822_001_01p.jpg?20191101085821');
        shift = 1;
    }
    else{
        chImage.setAttribute('src','https://thumbor.blink.com.tw/6StQJ9o9WIZmICOs3tq_VwhErpo=/http://blinkimage.s3.amazonaws.com/images/discount_images/1/19/191833_7qs0avqdg89pj73glufwhopm0.jpg');
        shift = 0;
    }
}

function setUserName(){
    var myName = prompt('Please enter your name');
    localStorage.setItem('name',myName);
    show();
}

function show(){
    myHeading.innerHTML = 'You suck, ' + localStorage.getItem('name');
}

if(!localStorage.getItem('name')){
    setUserName();
}
else{
    var storedName = localStorage.getItem('name');
    show();
}

myButton.onclick = function(){
    setUserName();
}










