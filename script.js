let buttonSizeChange = 5; // Adjust the amount by which the buttons change size
let loveLevel = 0; // Keep track of the love level

function showResult(choice) {
    const yesButton = document.getElementById('yesButton');
    const noButton = document.getElementById('noButton');

    // Get the original font size and width of the YES button
    const originalYesFontSize = parseFloat(getComputedStyle(yesButton).fontSize);
    const originalYesWidth = parseFloat(getComputedStyle(yesButton).width);

    // Get the original font size and width of the NO button
    const originalNoFontSize = parseFloat(getComputedStyle(noButton).fontSize);
    const originalNoWidth = parseFloat(getComputedStyle(noButton).width);

    if (choice === 'yes') {
        document.getElementById('result').innerHTML = 'Great! I can\'t wait!';
    } else {
        // Increase the font size and width of the YES button
        const newYesFontSize = originalYesFontSize + buttonSizeChange;
        yesButton.style.fontSize = `${newYesFontSize}px`;
        yesButton.style.width = `${originalYesWidth + 2 * buttonSizeChange}px`;

        // Decrease the font size and width of the NO button
        const newNoFontSize = originalNoFontSize - buttonSizeChange;
        noButton.style.fontSize = `${newNoFontSize}px`;
        noButton.style.width = `${originalNoWidth - 2 * buttonSizeChange}px`;

        // Increase the love level and update the result message
        loveLevel++;
        const loveMessages = [
            'I love you?',
            'I love you more?',
            'I love you so much?',
            'I love you most!',
            'Bruh I literally just won you cant do that.'
        ];

        if (loveLevel < loveMessages.length) {
            document.getElementById('result').innerHTML = loveMessages[loveLevel];
        } else {
            document.getElementById('result').innerHTML = 'You are my everything!';
        }
    }
}
