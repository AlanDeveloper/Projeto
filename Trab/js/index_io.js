say('Boas vindas à página miubi');
loadQuizes();
function sayOptions(quizes) {
    quizes.forEach(function(quiz, index) {
        console.log(quiz);
        say(`Digite ${index}, para ir para o quiz ${quiz.innerText}.`);
    });
    document.addEventListener('keydown', function(event) {
        console.log(event.key);
        let key = parseInt(event.key);
        if (!isNaN(key) && (key < quizes.length)) {
            console.log(key);
            console.log(quizes[key].href);
            location.assign(quizes[key].href)
        }
    })
}