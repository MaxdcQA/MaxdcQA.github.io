let quiz = {
data: [
{
q: "Что такое QA?",
o: [
"Quick answer",
"Quality assurance",
"Quaint algorithm",
"Quaint antonyms",
],
a: 1
},
{
q: "Как называется тестирование без доступа к исходному коду?",
o: [
"Blue box",
"White box",
"Green-grey box",
"Black box",
],
a: 3
},
{
q: " Какой вид тестирования применяется для исследования граничных нагрузок для программного обеспечения?",
o: [
"Точное тестирование",
"Стресс тестирование",
"Дымное тестирование",
"Тестирование на отказ",
],
a: 1
},
{
q: "Что такое баг в тестировании?",
o: [
"Жук в переводе с английского",
"«секретный термин",
"Крошечный багор",
"Дефект(ошибка) программного обеспечения",
],
a: 3
},
{
q: "Сколько весит костюм Чубакки??",
o: [
"3.6 кг",
"7.7 кг",
"2.7 кг",
"6.8 кг",
],
a: 0
}
  ],

hWrap: null, 
hQn: null, 
hAns: null,

now: 0, 
score: 0, 
init: () => {
quiz.hWrap = document.getElementById("quizWrap");
quiz.hQn = document.createElement("div");
quiz.hQn.id = "quizQn";
quiz.hWrap.appendChild(quiz.hQn);
quiz.hAns = document.createElement("div");
quiz.hAns.id = "quizAns";
quiz.hWrap.appendChild(quiz.hAns);
quiz.draw();
},
draw: () => {
quiz.hQn.innerHTML = quiz.data[quiz.now].q;
quiz.hAns.innerHTML = "";
for (let i in quiz.data[quiz.now].o) {
let radio = document.createElement("input");
radio.type = "radio";
radio.name = "quiz";
radio.id = "quizo" + i;
quiz.hAns.appendChild(radio);
let label = document.createElement("label");
label.innerHTML = quiz.data[quiz.now].o[i];
label.setAttribute("for", "quizo" + i);
label.dataset.idx = i;
label.addEventListener("click", () => {
quiz.select(label);
});
quiz.hAns.appendChild(label);
}
},
select: (option) => {
let all = quiz.hAns.getElementsByTagName("label");
for (let label of all) {
label.removeEventListener("click", quiz.select);
}
let correct = option.dataset.idx == quiz.data[quiz.now].a;
if (correct) {
quiz.score++;
option.classList.add("correct");
} else {
option.classList.add("wrong");
}
quiz.now++;
setTimeout(() => {
if (quiz.now < quiz.data.length) { quiz.draw(); }
else {
quiz.hQn.innerHTML = `Вы ответили на ${quiz.score} из ${quiz.data.length} правильно.`;
quiz.hAns.innerHTML = "";
}
}, 1000);
},
reset : () => {
quiz.now = 0;
quiz.score = 0;
quiz.draw();
}
};
window.addEventListener("load", quiz.init);