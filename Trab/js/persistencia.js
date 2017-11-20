const Persistencia = {
    'writeData': function(path, data) {
        if (data instanceof JSON) {
            firebase.database().ref(path).set(data);
        }
        else throw 'Data deve ser um JSON'
    },
    'onValue': function(path, listener) {
        firebase.database().ref(path).on('value', listener);
    },
    'onValueOnce': function(path, listener) {
        firebase.database().ref(path).once('value').then(listener);
    },
    'updateData': function(path, newData) {
        let key = firebase.database().ref(path).push().key;
        let updates = {}
        updates[path + '/' + key] = newData;
        firebase.database().ref().update(updates);
    },
    'removeData': function(path) {
        firebase.database().ref(path).remove();
    },
    'fieldExists': function(path, field) {
        return firebase.database().ref(path).child(field) ? true : false;
    },
    'anexToDataList': function(path, data) {
        firebase.database().ref(path).push().set(data);
    }
};

function Question(questao, alt1, alt2 , alt3, alt4) {
    return {
        'questao': questao,
        'alt1' : alt1,
        'alt2' : alt2,
        'alt3' : alt3,
        'alt4' : alt4
    };
}

function adicionaDinos() {
    let a = document.querySelector('#title');
    let cont = 1;
    let q = [];
    while (cont <= 10) {
        q[cont] = document.querySelector('#q'+ cont).value;
        cont++;
    }
    q = q.slice(1, q.length);
    cont = 1;
    alt = [];
    while (cont <= 40) {
        alt[cont] = document.querySelector('#alt' + cont).value;
        cont++;
    }
    alt = alt.slice(1, alt.length);
    Persistencia.updateData('/' + a.value, Question(q[0], alt[0], alt[1], alt[2], alt[3]));
    Persistencia.updateData('/' + a.value, Question(q[1], alt[4], alt[5], alt[6], alt[7]));
    Persistencia.updateData('/' + a.value, Question(q[2], alt[8], alt[9], alt[10], alt[11]));
    Persistencia.updateData('/' + a.value, Question(q[3], alt[12], alt[13], alt[14], alt[15]));
    Persistencia.updateData('/' + a.value, Question(q[4], alt[16], alt[17], alt[18], alt[19]));
    Persistencia.updateData('/' + a.value, Question(q[5], alt[20], alt[21], alt[22], alt[23]));
    Persistencia.updateData('/' + a.value, Question(q[6], alt[24], alt[25], alt[26], alt[27]));
    Persistencia.updateData('/' + a.value, Question(q[7], alt[28], alt[29], alt[30], alt[31]));
    Persistencia.updateData('/' + a.value, Question(q[8], alt[32], alt[33], alt[34], alt[35]));
    Persistencia.updateData('/' + a.value, Question(q[9], alt[36], alt[37], alt[38], alt[39]));
    // Persistencia.updateData('/' + a.value, Question('tiranossauro', 'carnivoro', 'cretaceo'));
    // Persistencia.updateData('/' + a.value, Question('dilofossauro', 'carnivoro', 'jurassico'));
}

function lerDinos() {
    Persistencia.onValue('/dinossauros', function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
            console.log(`A chave do dinossauro ${childSnapshot.val().nome} é ${childSnapshot.key}.`);
        });
        console.log();
    });
}

//adicionaDinos()
lerDinos();
