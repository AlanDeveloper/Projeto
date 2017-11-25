const form = document.querySelector('form');
const button = document.querySelector('button.btn-success');
let audios = [];
form.addEventListener('submit', function (event) {
    event.preventDefault();
    let files = form.querySelector('input').files;
    console.dir(files);
    for (file of files) {
        if (isAudio(file)) {
            Armazenamento.upload(`/audio/${file.name}`, file, function () {
                console.log(`Arquivo de áudio ${file.name} upado com sucesso!!!`);
                Persistencia.updateData(`/audio`, {
                    'path': `/audio/${file.name}`,
                });
            }, function (error) {
                console.log('Aqui deu pau!!!');
                console.log(error);
            })
        }
    };
});

function loadAudio() {
    Persistencia.onValue('/audio', function (snapshot) {
        snapshot.forEach(function (childSnapshot) {
            let path = childSnapshot.val().path;
            Armazenamento.download(path, function (data) {
                audios.push(new Audio(URL.createObjectURL(data)));
                console.log('Arquivo de audio baixado...');
            });
        });
    });
};

loadAudio();

function playAudio() {
    if (audios.length > 0) audios[0].play();
}

button.addEventListener('click', playAudio);