function speak() {
    if ('speechSynthesis' in window) {
        var inputValue = document.getElementById("inpVal").value.trim();
        if(inputValue === '') {
            alert('Please enter something!');
            return;
        }
        var synth = window.speechSynthesis;
        var utterance = new SpeechSynthesisUtterance(inputValue);

        var selectedLanguage = document.getElementById('languageSelect').value;
        utterance.lang = selectedLanguage;

        utterance.addEventListener('end', function() {
            document.getElementById('inpVal').value = '';
        });

        synth.speak(utterance);
    } else {
        alert('Speech synthesis is not supported in your browser!');
    }
}
