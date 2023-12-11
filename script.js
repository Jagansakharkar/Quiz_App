const Data = [
  {
    que: "Q.1 HTML Stands for ?",
    option: [
      "A) Hyper text Markup language",
      "B) Hyper text make up language",
      "C) High text markup language",
      "D) Hyper tag markup language"
    ],
    answer: "a"
  },
  {
    que: "Q.2 CSS Stands for ?",
    option: [
      "A) Cascading Style Sheet",
      "B) Care style Sheet",
      "C) Code styling Sheet",
      "D) None of the above"
    ],
    answer: "a"
  },
  {
    que: "Q.3 Which is not programming language ?",
    option: [
      "A) Java",
      "B) C",
      "C) C++",
      "D) HTML"
    ],
    answer: "d"
  },
  {
    que: "Q.4 In CSS media query is used for ?",
    option: [
      "A) Designing Web "
      , "B) Responsive Design"
      , "C) Managing Website"
      , "D) None"
    ],
    answer: "b"
  },
  {
    que: "Q.5 Which is not JavaScript framework ?",
    option: [
      "A) AngularJS "
      , "B) ReactJS"
      , "C) VueJS"
      , "D) Larvel"
    ],
    answer: "d"
  },
  {
    que: "Q.6 How to write an IF statement in Javascript ?",
    option: [
      "A) if(i==5) then "
      , "B) if(i==5){}"
      , "C) if i=5"
      , "D) if i=5 then{}"
    ],
    answer: "b"
  }
]
let correct = 0
let wrong = 0
let index = 0;
let question = document.querySelector('.question')
let options = document.querySelectorAll("#btn")
let container = document.querySelector("#container")
let nextbtn = document.querySelector('.nextbtn')
let body = document.querySelector('body')
const buttons = document.querySelectorAll('#btn')
// -----------------Question load -------------------
function loadquestion() {
  if (Data.length <= index) {
    lastpage()
  } else {
    clear()
    question.innerHTML = ` <h3>${Data[index].que}</h3>`;
    loadoption()
  }
}
function loadoption() {
  options[0].innerText = Data[index].option[0];
  options[1].innerText = Data[index].option[1];
  options[2].innerText = Data[index].option[2];
  options[3].innerText = Data[index].option[3];
}
loadoption()
loadquestion()
nextbtn.addEventListener('click', () => {
  ++index
  loadquestion()
})
options.forEach((item) => {
  console.log(item);
  item.addEventListener("click", () => {
    if (item.value == Data[index].answer) {
      correct++
      item.style.backgroundColor = "skyblue"
    } else {
      wrong++
      item.style.backgroundColor = "red"
    }
  })
})
function clear() {
  let buttons = document.querySelectorAll("#btn")
  buttons.forEach((item) => {
    item.style.backgroundColor = ""
  })
}
function lastpage() {
  container.innerHTML =
    `<div id="lastpage">
           <div class="l-box"> 
               Thanks For Participating
           </div>
          <div class="score-box">
               Your Score : ${correct}/${Data.length}
          </div>
     </div>`
}

