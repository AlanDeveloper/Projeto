const ul = document.querySelector('#ul');
const li = document.querySelector('.item')
let a = document.createElement('a');
ref = firebase.database().ref('/');
let d, cont = 0;
ref.once('value', function (dados) {
    d = Object.keys(dados.val());
    while (cont < d.length) {
        a.href  = "quiz.html";
        a.setAttribute('id', 'item');
        a.innerText = d[cont];
        li.appendChild(a);
        ul.appendChild(li);
        a = document.createElement('a');
        cont++;
    }
});

// ref.once('value', function (dados) {console.log(Object.keys(dados.val()))}) titles 
// Object.keys(d)
// ref = firebase.database().ref('/Civilização')
// ref.on("child_added",function (de) {console.log(de.key)})
// ref.on("child_added",function (de) {console.log(de.val())})
// ref.on("child_added",function (p) {console.log(p.val().questao)})