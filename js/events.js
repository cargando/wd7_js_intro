
const decodePhase2 = (v) => ({
  1: "погружение (код 1)",
  2: "таргет (код 2)",
  3: "всплытие (код 3)",
})[v];


// var myButton = document.getElementById('myButton'); // найти тег по его ID
var myButton = document.querySelector('.asd'); // найти тег по селектору (класс, имя тега), конкретно в этом случае мы ищем по имени класса (который ему присвоен, не важно существует он реально или нет)

myButton.addEventListener('click', handleButtonClick, true)


// можно повестить нсколько обработчиков события на разные фазы для одного и того же элемента
document.getElementById('div1').addEventListener('click', handleDivClick, true) // третий параметр тру - значит событие сработает в фазе погружения
document.getElementById('div1').addEventListener('click', handleDivClick, false) // третий параметр фолз - значит событие сработает в фазе всплытия

document.getElementById('div2').addEventListener('click', handleDivClick)

document.getElementById('link1').addEventListener('click', handleLinkClick)


function handleButtonClick(e) {
  // e.stopPropagation(); / прекратить всплытие или погружение события, т.е. этот обработчик будет послежним кто получит событие
  console.log("Yo!!! You just clicked the button!", e);

}

function handleDivClick(e) {
  console.log("I'm DIV", e.currentTarget.getAttribute("id"), ", фаза события: ", decodePhase2(e.eventPhase));

}

function handleLinkClick(e) {
  e.preventDefault(); // предотвратить работу стандартной модели браузера
  console.log("I'm Link, address to forward: ", e.target.getAttribute("href"), ", фаза события: ", decodePhase2(e.eventPhase));
}

function decodePhase(v) {
  var ob = {
    1: "погружение (код 1)",
    2: "таргет (код 2)",
    3: "всплытие (код 3)",
  }
  return ob[v];
}


