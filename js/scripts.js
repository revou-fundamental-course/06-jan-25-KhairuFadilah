function replaceName(){
    let name= prompt("Enter your name","");
    document.getElementById("user-greeting").innerHTML = name;
}
replaceName();

function formValidation(){
    let nameInput = document.getElementById('name-input').value;
    let emailInput = document.getElementById('email-input').value;
    let messageInput = document.getElementById('message-input').value;

    console.log(nameInput);
    console.log(emailInput);
    console.log(messageInput);
    if (nameInput == "" || emailInput == "" || messageInput == "") {
        alert("All fields must be filled out");
        return false;
    }else{
        document.getElementById("result-form").innerHTML = nameInput;
        document.getElementById("result-form").innerHTML = emailInput;
        document.getElementById("result-form").innerHTML = messageInput;
        alert("Your message has been sent");
        return true;
    }
}
document.getElementById("submit-btn").addEventListener('click',formValidation);

let indexBanner = 0;

changeBackground();

function nextBanner(){
    indexBanner=indexBanner+1;
    changeBackground();
}
function changeBackground(){
    let bannerList=document.getElementsByClassName('banner-image');
    console.log(bannerList.length);
    console.log(indexBanner);
    if(indexBanner >= bannerList.length - 1){
        indexBanner=0;
    }
    for(let i=0; i<bannerList.length; i++){
        bannerList[i].style.display='none';
    }
    bannerList[indexBanner].style.display='block';
}
setInterval(nextBanner, 3000);
