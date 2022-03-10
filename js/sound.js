var isPlaying = false;
var audio= new Audio("sound/sonic.mp3");
var a=document.getElementById("sound1");
let music = () => {
  if (document.getElementById("musicCheck").checked) {
    isPlaying = true;
    audio.play();
    document.getElementById("sound1").src = "sound/sonic.mp3";
    console.log(isPlaying);
  } else{
    
    console.log(isPlaying);
    audio.pause();
    document.getElementById("sound1").src = "audio";
    isPlaying = false;
  }
};



function myFunction(){

  Swal.fire({
    title: 'INFINITE SONIC MAZE ANIMATION',
    confirmButtonText: 'Start',
    confirmButtonColor: '#0047AB',
    allowOutsideClick: false
}).then((result) => {
  setInterval(draw, 12);
  setInterval(draw1, 15);
})
}


var count = 0;
function clickFunc() {
  count += 1;
  var btn = document.querySelector('.blackbutton');
  if(count >= 5) { 
    btn.disabled = true;
  }
}


function info(){
  Swal.fire({
      title:'About',
      text: 'Made by Jaka Karnel',
      confirmButtonColor: '#0047AB',
      footer: "SONIC ",
      customClass: {
        icon: 'no-border'
      }
    })

}









 


