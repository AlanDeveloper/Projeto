const divAud = document.querySelector('#audio');
const tt = document.querySelector('#teste');
const snd = [];
let p = document.createElement('p');
let dvt = document.querySelector('#p0');
let txt = ['Título : ', 'Primeira questão : ', 'Segunda questão : ', 'Terceira questão : ', 'Quarta questão : ', 'Quinta questão : ', 'Sexta questão : ', 'Sétima questão : ', 'Oitava questão : ', 'Nona questão : ', 'Décima questão : ']
let audios = [];
let c = -1;
function createAudioElement(blobUrl) {
    const audioEl = document.createElement('audio');
    audioEl.controls = true;
    const sourceEl = document.createElement('source');
    sourceEl.src = blobUrl;
    sourceEl.type = 'audio/webm';
    audioEl.appendChild(sourceEl);
    if (c >= 0) {
        if (c <= 10) {
            p.innerText = txt[c];
            tt.appendChild(p);
            tt.appendChild(audioEl);
            audios[c] = audioEl;
            snd[c] = audios[c];
        }
    }
};

navigator.mediaDevices.getUserMedia({ audio: true }).then(stream => {
    let chunks = [];
    const recorder = new MediaRecorder(stream);
    let go = document.querySelector('#go');
    let goi = document.querySelector('#going');
    let stop = document.querySelector('#stop');
    let del = document.querySelector('#delete');
    go.addEventListener('click',function () {
        if (c >= 0) {
            if (c <= 10) {
                dvt.appendChild(p);
                dvt.appendChild(audios[c]);
                p = document.createElement('p');
                dvt = document.querySelector('#p' + c);
                tt.innerHTML = '';
            } 
        }
        if (c <= 10) {
            c++;
            chunks = [];
            if (c < 10) {
                tt.innerHTML = 'Gravando';
            }
            recorder.start();
        }
    });
    going.addEventListener('click',function () {
        tt.innerHTML = 'Gravando';
        recorder.start();
    });
    stop.addEventListener('click', function () {
        if (c <= 10) {
            tt.innerHTML = '';
            recorder.stop();
        }
    });
    del.addEventListener('click', function () {
        if (c < 10) {
            chunks = [];
            c--;
            tt.innerHTML = '';
        }
    });
    recorder.ondataavailable = e => {
        chunks.push(e.data);
        if (recorder.state == 'inactive') {
            blob = new Blob(chunks, { type: 'audio/webm' });
            createAudioElement(URL.createObjectURL(blob));
        }
    };
}).catch(console.error);