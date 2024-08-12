let home1 = document.getElementById("home-points");

let guest1 = document.getElementById("guest-points");

function addHome() {
    home1.textContent = parseInt(home1.textContent) + 1;
}


function addHome2() {
    home1.textContent = parseInt(home1.textContent) + 2;
}

function addHome3() {
  home1.textContent = parseInt(home1.textContent) + 3;
}

function addGuest1() {
  guest1.textContent = parseInt(guest1.textContent) + 1;
}

function addGuest2() {
  guest1.textContent = parseInt(guest1.textContent) + 2;
}


function addGuest3() {
  guest1.textContent = parseInt(guest1.textContent) + 3;
}

function resetBoard() {
  home1.textContent = 0
  guest1.textContent = 0
}
