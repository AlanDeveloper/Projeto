const provider = new firebase.auth.GoogleAuthProvider();
const db = firebase.database();

const linkLogin = 
    document.querySelector('div.naologado a');
const linkLogout = document.querySelector('div.logado a');
const avatar = document.querySelector('div.logado img');
const nome = document.querySelector('div.logado span');
const divLogado = document.querySelector('div.logado');
const divNaoLogado = document.querySelector('div.naologado');
const form = document.querySelector('form');
const divAvisos = document.querySelector('div.avisos');

linkLogout.addEventListener('click', function() {
    firebase.auth().signOut().then(function() {
        usuario = null;
        divLogado.style.display = 'none';
        divNaoLogado.style.display = 'block';
        avatar.src = '';
        nome.textContent = '';
    });
});

linkLogin.addEventListener('click', function() {
    firebase.auth()
    .signInWithRedirect(provider).then(function(user) {
        if (user) {
            usuario = user;
            divLogado.style.display = 'block';
            divNaoLogado.style.display = 'none';
            avatar.src = user.photoURL;
            nome.textContent = user.displayName;
        } else {
            usuario = null;
            divLogado.style.display = 'none';
            divNaoLogado.style.display = 'block';
            avatar.src = '';
            nome.textContent = '';
        }
    }).catch(function(erro) {
        alert("Falha ao realizar o login");
    });
});

let usuario = null;

firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        usuario = user;
        divLogado.style.display = 'block';
        divNaoLogado.style.display = 'none'; 
        avatar.src = user.photoURL;
        nome.textContent = user.displayName;    
    } else {
        usuario = null;
        divLogado.style.display = 'none';
        divNaoLogado.style.display = 'block';
        avatar.src = '';
        nome.textContent = '';
    }
});