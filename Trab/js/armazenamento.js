const Armazenamento = {
    'referencia': firebase.storage().ref(),
    'upload': function(path, file, callback, onerror) {
        let child = this.referencia.child(path);
        child.put(file).then(callback).catch(onerror);
    },
    'download': function(path, callback, onerror) {
        this.referencia.child(path).getDownloadURL().then(function (url) {
            let xhr = new XMLHttpRequest();
            xhr.responseType = 'blob';
            xhr.onload = function (event) {
                let blob = xhr.response;
                callback(blob);
            };
            xhr.open('GET', url);
            xhr.send();
        }).catch(onerror);
    },
    'delete': function(path, callback, onerror) {
        let referenciaFile = this.referencia.child(path);
        referenciaFile.delete().then(callback).catch(onerror);
    }
};