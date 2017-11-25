function isAudio (file) {
    let extension = getExtension(file.name);
    switch (extension) {
        case 'mp3':
        case 'wav':
        case 'ogg':
        case 'pcm':
        case 'aiff':
        case 'aac':
        case 'wma':
        case 'flac':
        case 'alac':
            return true;
    }
    return false;
}

function getExtension (fileName) {
    let split = fileName.split('.');
    let extension = split[split.length - 1].toLowerCase();
    return extension;
}