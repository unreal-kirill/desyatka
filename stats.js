const hours = document.getElementById('hours');
const mins = document.getElementById('mins');
const day = document.getElementById('day');
const fatigue = document.getElementById('fatigue');
const mental = document.getElementById('mental');
const respect = document.getElementById('respect');

const days = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];

const fatigueStates = ['усталость: спит стоя',
                       'усталость: глаза слипаются',
                       'усталость: норм',
                       'усталость: со светлой головой',
                       'усталость: бодр как первоклашка'];

const mentalStates = ['мент. состояние: потерял рассудок',
                      'мент. состояние: начинает сходить с ума',
                      'мент. состояние: апатия',
                      'мент. состояние: отстранённый',
                      'мент. состояние: адекват'];

const respectStates = ['репутация: козёл отпущения',
                       'репутация: клоун',
                       'репутация: норм чел',
                       'репутация: популярный чел',
                       'репутация: краш всей школы'];

let hoursNum = '0';
let minsNum = '00';
let dayNum = 1;
let fatigueNum = 1;
let mentalNum = 4;
let respectNum = 2;

function refreshStats() {
    hours.innerText = hoursNum;
    mins.innerText = minsNum;
    day.innerText = days[dayNum];
    fatigue.innerText = fatigueStates[fatigueNum];
    mental.innerText = mentalStates[mentalNum];
    respect.innerText = respectStates[respectNum];
};

refreshStats();
