const generateScramble = document.querySelector('#generateScramble');
var scramDisplay = document.querySelector("#scramDisplay");

var inputSelected = document.querySelector('#oType');
var dig = 'one';

function selectAlg() {
    switch(parseInt(inputSelected.value)){
      case 1:
        dig = 'one'
        break;
      case 2:
        dig = 'two'
        break;
      case 3:
        dig = 'four'
        break;
    }
  }

generateScramble.addEventListener('click', generateOll);