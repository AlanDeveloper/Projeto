const synth = window.speechSynthesis;
function say (text) {
    let utter = new SpeechSynthesisUtterance(text);
    synth.speak(utter);
}
