let d, cont = 0, cont1 = 0, n = 0,ref = firebase.database().ref('/');
let quest = [], q12 = [], alt1 = [], alt11 = [], alt2 = [], alt22 = [], alt3 = [], alt33 = [], resp = [], resp1 = [];
let q = 1;
let rad = [];
let random = [];
let p = document.querySelector('#quest');
let inp1 = document.querySelector('#resposta_1-0');
let inp2 = document.querySelector('#resposta_1-1');
let inp3 = document.querySelector('#resposta_1-2');
let inp4 = document.querySelector('#resposta_1-3');
let divPer = document.querySelector('.perguntas');
let btn  = document.querySelector('#cl');
let divPro = document.querySelector('.progress-bar');
divPro.style.width = "0%";

ref.on('value', function (dados) {
    d = Object.keys(dados.val());
    ref = firebase.database().ref('/' + window.localStorage.getItem('page'));
    ref.on("child_added", function (e) {
        quest[cont] = e.val().questao;
        alt1[cont] = e.val().alt1;
        alt2[cont] = e.val().alt2;
        alt3[cont] = e.val().alt3;
        resp[cont] = e.val().resposta;
        cont++;
    });
    if (quest.length === 10) {
        p.innerText = quest[n];
        random[0] = alt1[n];
        random[1] = alt2[n];
        random[2] = alt3[n];
        random[3] = resp[n];
        randOrd();
        inp1.innerText = random[rad[0]];
        inp2.innerText = random[rad[1]];
        inp3.innerText = random[rad[2]];
        inp4.innerText = random[rad[3]];
        rad = [];
        q12 = quest;
        alt11 = alt1;
        alt22 = alt2;
        alt33 = alt3;
        resp1 = resp;
    };
});

let cc = 0, cc1 = 0, ru = [], cc2 = 0;

btn.addEventListener('click', function (e) {
    while (cc <= 3) {
        if (document.querySelector('#r' + cc).checked === true) {
            ru[n] = document.querySelector('#resposta_1-' + cc).innerText;
            cc1 = document.querySelector('#r' + cc);
        } else {
            cc2++;
        }
        cc++;
    }
    cc = 0;
    if (cc2 < 4) {
        n++;
        divPro.style.width = q + "0%";
        p.innerText = q12[n];
        q++;
        random[0] = alt11[n];
        random[1] = alt22[n];
        random[2] = alt33[n];
        random[3] = resp1[n];
        randOrd();
        inp1.innerText = random[rad[0]];
        inp2.innerText = random[rad[1]];
        inp3.innerText = random[rad[2]];
        inp4.innerText = random[rad[3]];
        rad = [];
        cc1.checked = false;
        if (ru.length === 10) {
            Correction();
        }
    }
    e.preventDefault();
    cc2 = 0;
});

function randOrd() {
    let c = Math.floor(Math.random() * 4);
    let c1 = 0;
    while (c1 != 4) {
        if (rad.indexOf(c) === -1) {
            rad[c1] = c;
            c1++;
        }
        c = Math.floor(Math.random() * 4);
    }
    return rad;
}

function Correction () {
    divPer.innerHTML = '';
    divPer.setAttribute('class', 'end');
    let d = document.createElement('h2');
    let e = document.createElement('h4');
    d.innerText = 'Quiz Terminado!';
    while (cc < 10) {
        if (ru[cc] === resp1[cc]) {
            e.innerText = (cc + 1) + ' - Acertou!';
        } else {
            e.innerText = (cc + 1) + ' - Errou! A resposta era ' + resp1[cc];
        }
        divPer.appendChild(d);
        divPer.appendChild(e);
        d = document.createElement('h2');
        e = document.createElement('h4');
        cc++;
    }
    cc = 0;
}