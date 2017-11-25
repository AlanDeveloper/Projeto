const ul = document.querySelector('#ul');
const li = document.querySelector('.item')
let a = document.createElement('a');
ref = firebase.database().ref('/');
let d, cont = 0, path = [],path1 = [], p1 = 0, audios= [];
ref.on('value', function (dados) {
    d = Object.keys(dados.val());
    while (cont < d.length) {
        if  (d[cont] != 'audio') {
            a.href  = "quiz.html";
            a.setAttribute('id', 'item');
            a.innerText = d[cont];
            let i = d[cont];
            a.addEventListener('click', function () {
                window.localStorage.setItem('page', i);
            });
            li.appendChild(a);
            ul.appendChild(li);
            a = document.createElement('a');
        } else {
            ref = firebase.database().ref('/' + d[cont]);
            ref.on("child_added", function (e) {
                path[p1] = e.val().path;
                p1++;
            });
            path1 = path;
        }
        cont++;
    }
    // load();
});

// function load() {
//     Persistencia.onValue('/audio', function (snapshot) {
//         snapshot.forEach(function (childSnapshot) {
//             let path = childSnapshot.val().path;
//             Armazenamento.download(path, function (data) {
//                 audios.push(new Audio(URL.createObjectURL(data)));
//                 // audios.push(path);
//                 console.log('Arquivo de audio baixado...');
//             });
//         });
//     });
//     play();
// }

// function play() {
//     if(audios.length+1 === path1.length) {
//         let c = 0;
//         audios.play();
//     }
// }
// ref.once('value', function (dados) {console.log(Object.keys(dados.val()))}) titles 
// Object.keys(d)
// ref = firebase.database().ref('/Civilização')
// ref.on("child_added",function (de) {console.log(de.key)})
// ref.on("child_added",function (de) {console.log(de.val())})
// ref.on("child_added",function (p) {console.log(p.val().questao)})