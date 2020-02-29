var videoButton = document.getElementById("mediaDiv");

var vidButtonlist = document.getElementsByClassName ("videoButton");
var closeButtn = document.getElementById('close');
var videoCTRL = document.getElementById("vid");

for(i=0; i< vidButtonlist.length; i++){
    var id = "click" + i;
    vidButtonlist[i].setAttribute("id", id);
}

//videoButton.liaddEventListener('click', openVideo);
vidButtonlist[0].addEventListener("click", openVideo0); 
vidButtonlist[1].addEventListener("click", openVideo1); 
vidButtonlist[2].addEventListener("click", openVideo2); 
vidButtonlist[3].addEventListener("click", openVideo3); 
vidButtonlist[4].addEventListener("click", openVideo4); 
vidButtonlist[5].addEventListener("click", openVideo5); 
closeButtn.addEventListener("click", closeModal);



function openVideo0(){
    document.getElementById("modalTitle").innerHTML = "1";
    videoCTRL.src = "https://www.youtube.com/embed/09MA_auIe18?start=5";
    $('#videoPlayer').modal('show');

}
function openVideo1(){
    document.getElementById("modalTitle").innerHTML = "2";
    videoCTRL.src = "https://www.youtube.com/embed/kISlB3pjGRU?start=5";
    $('#videoPlayer').modal('show');

}
function openVideo2(){
    document.getElementById("modalTitle").innerHTML = "3";
    videoCTRL.src = "https://www.youtube.com/embed/EpijuVzCIFI";
    $('#videoPlayer').modal('show');

}
function openVideo3(){
    document.getElementById("modalTitle").innerHTML = "4";
    videoCTRL.src = "https://www.youtube.com/embed/t1Sd9CC1k3U";
    $('#videoPlayer').modal('show');

}
function openVideo4(){
    document.getElementById("modalTitle").innerHTML = "4";
    videoCTRL.src = "https://www.youtube.com/embed/hTTj1536aQk";
    $('#videoPlayer').modal('show');

}
function openVideo5(){
    document.getElementById("modalTitle").innerHTML = "5";
    videoCTRL.src = "https://www.youtube.com/embed/jN07H_jL_AM"; 
    $('#videoPlayer').modal('show');
}

function closeModal(){
    videoCTRL.currentTime = 0;
    var leg=$('#vid').attr("src");
    $('#vid').attr("src",leg);
    //videoCTRL.scr = "https://www.youtube.com/embed/jN07H_jL_AM";
    $('#videoPlayer').modal('hide');
}


