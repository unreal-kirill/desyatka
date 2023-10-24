const ebalo = document.getElementById('ebalo');
const imya = document.getElementById('imya');
const text = document.getElementById('text');
const choice1 = document.getElementById('choice1');
const choice2 = document.getElementById('choice2');
const choice3 = document.getElementById('choice3');
const choice4 = document.getElementById('choice4');

let random;

function write(face, title, content, option1, option2, option3, option4) {
    ebalo.innerText = face;
    imya.innerText = title;
    text.innerText = content;
    choice1.innerText = option1;
    choice2.innerText = option2;
    choice3.innerText = option3;
    choice4.innerText = option4;
};

function clear() {
    ebalo.innerText = '';
    imya.innerText = '';
    text.innerText = '';
    choice1.innerText = '';
    choice2.innerText = '';
    choice3.innerText = '';
    choice4.innerText = '';
};

// начало
write('timer_10',
      'desyatka',
      'Эта школа в твоих руках. Пизди хлеб из столовой, бей первоклашек, еби училок - главное выйти отсюда живым и психически стабильным.',
      'начать',
      '', '', '');
choice1.onclick = function() {
    write('bedtime',
          'моя комната',
          'Ночь перед понедельником... Очередным понедельником. Ну, хотя бы у меня сделана домашка.',
          'позалипать в тикток',
          'сразу идти спать',
          '', '');

    choice1.onclick = function() {
        random = Math.floor(Math.random() * 101);
        console.log(random);
        if (random <= 10) {
            write('face_3',
                  'мама',
                  'Ты совсем охуел? Быстро спать, телефон на базу!',
                  'дальше',
                  '', '', '');
            choice1.onclick = function() {
                write('sentiment_frustrated',
                      'бляяя',
                      'Пиздос, мамка телефон отобрала, как я буду завтра списывать?',
                      'спать',
                      '', '', '');
                choice1.onclick = function() {
                    write('light_mode',
                          'моя комната',
                          'Ну, хотя бы я встал вовремя... но на душе немного грустно(',
                          'валить в шкилу',
                          '', '', '');
                }
            };
        } else if (random <= 40) {
            write('sentiment_frustrated',
                  'бляяя',
                  'Вот я лох сука, из-за этих тикитоков в школу проспал! Меня батя ремнём отхуярит!',
                  'валить в шкилу',
                  '', '', '');
        } else {
            write('light_mode',
                  'моя комната',
                  'К счастью, я встал вовремя... Но в моих мешках под глазами можно картошку возить - не стоило мне заниматься деградацией вместо сна.',
                  'валить в шкилу',
                  '', '', '');
        };
    };

    choice2.onclick = function() {
        write('light_mode',
                  'ваша комната',
                  'К счастью, я встал вовремя. Только я немного приуныл от дефицита дофамина.',
                  'валить в шкилу',
                  '', '', '');
    };
};
