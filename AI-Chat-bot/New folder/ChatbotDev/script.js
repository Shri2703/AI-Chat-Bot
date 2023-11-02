document.addEventListener("DOMContentLoaded", function () {
    const questionForm = document.getElementById("question-form");
    const translationForm = document.getElementById("translation-form");

    const questionAnswer = document.getElementById("question-answer");
    const translatedText = document.getElementById("translated-text");

    questionForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const questionInput = document.getElementById("question-input");
        const question = questionInput.value;

        // Send the question to the backend and display the answer here
        // You can use fetch or an AJAX library for this.

        questionAnswer.textContent = "Fetching answer...";
    });

    translationForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const translationInput = document.getElementById("translation-input");
        const translationCode = document.getElementById("translation-code");

        const textToTranslate = translationInput.value;
        const targetLanguageCode = translationCode.value;

        // Send the text and language code to the backend for translation
        // Display the translated text here

        translatedText.textContent = "Translating...";
    });
});
