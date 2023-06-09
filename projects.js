//box 1-------
const boxOne = document.getElementById("box1");

const makeBig1 = () => {
    boxOne.style.width = '165px';
    boxOne.style.height = '120px';
    boxOne.innerText = 'Under Construction'
}

const makeSmall1 = () => {
    boxOne.style.width = '110px';
    boxOne.style.height = '80px';
    boxOne.innerText = 'Bird ID Guide'
}

boxOne.addEventListener('mouseover', makeBig1);
boxOne.addEventListener("mouseout", makeSmall1);

//box 2 ---------

const boxTwo = document.getElementById("box2");

const makeBig2 = () => {
    boxTwo.style.width = '165px';
    boxTwo.style.height = '120px';
    boxTwo.innerText = 'Under Construction'
}

const makeSmall2 = () => {
    boxTwo.style.width = '110px';
    boxTwo.style.height = '80px';
    boxTwo.innerText = 'Minesweeper'
}

boxTwo.addEventListener('mouseover', makeBig2);
boxTwo.addEventListener("mouseout", makeSmall2);
//box 3 ---------
const box3 = document.getElementById("box3");

const makeBig3 = () => {
    box3.style.width = '165px';
    box3.style.height = '120px';
    box3.innerText = 'Under Construction'
}

const makeSmall3 = () => {
    box3.style.width = '110px';
    box3.style.height = '80px';
    box3.innerText = 'Tree Dichotomous Key'
}

box3.addEventListener('mouseover', makeBig3);
box3.addEventListener("mouseout", makeSmall3);
//box 4 -----------
const box4 = document.getElementById("box4");

const makeBig4 = () => {
    box4.style.width = '165px';
    box4.style.height = '120px';
    box4.innerText = 'Under Construction'
}

const makeSmall4 = () => {
    box4.style.width = '110px';
    box4.style.height = '80px';
    box4.innerText = 'Bananagram'
}

box4.addEventListener('mouseover', makeBig4);
box4.addEventListener("mouseout", makeSmall4);