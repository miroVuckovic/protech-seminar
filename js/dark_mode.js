let state = 0;

function switchMode(){
    if (state==1) {
        darkMode();
        state=0;
    }
    else {
        lightMode();
        state=1;
    }
    console.log("state = " + state);
}

function darkMode() {
    let element = document.body;
    let content = document.getElementById("night-mode-button");
    content.src = 'slike/light_mode.png';

    let logo = document.getElementById("logo_pic");
    logo.src = 'slike/protech.svg';
    
    element.className = "dark-mode";
    console.log("Dark Mode is ON");
}
function lightMode() {
    let element = document.body;
    let content = document.getElementById("night-mode-button");
    content.src = 'slike/night_mode.png';

    let logo = document.getElementById("logo_pic");
    logo.src = 'slike/protech_dark.svg';

    element.className = "light-mode";
    console.log("Dark Mode is off");

}
