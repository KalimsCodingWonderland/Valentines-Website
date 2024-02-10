let buttonSizeChange = 5; // Adjust the amount by which the buttons change size
let loveLevel = 0; // Keep track of the love level
let noButtonClicks = 0; // Keep track of the number of clicks on the "no" button

function showResult(choice) {
    const yesButton = document.getElementById('yesButton');
    const noButton = document.getElementById('noButton');

    const celebrationDiv = document.getElementById('celebration');
    const resultDiv = document.getElementById('result');

    // Get the original font size and width of the YES button
    const originalYesFontSize = parseFloat(getComputedStyle(yesButton).fontSize);
    const originalYesWidth = parseFloat(getComputedStyle(yesButton).width);

    // Get the original font size and width of the NO button
    const originalNoFontSize = parseFloat(getComputedStyle(noButton).fontSize);
    const originalNoWidth = parseFloat(getComputedStyle(noButton).width);

    if (choice === 'yes') {
        // Redirect to celebration.html when 'yes' is clicked
        window.location.href = 'celebration.html';
    } else {
        noButtonClicks++;

        // Check if the "no" button has been clicked 25 times or more
        if (noButtonClicks >= 25) {
            // Move the "no" button to a random position on the screen
            const randomX = Math.floor(Math.random() * (window.innerWidth - originalNoWidth));
            const randomY = Math.floor(Math.random() * (window.innerHeight - originalNoFontSize));

            noButton.style.position = 'absolute';
            noButton.style.left = `${randomX}px`;
            noButton.style.top = `${randomY}px`;
        }

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
            'Bruh I literally just won you cant do that.',
            'I',
            'Love',
            'You',
            '?',
            'Oh cmon seriously? I thought that one was pretty good.',
            'Alexmas Domingo Rodriguez Bennitto Juarez Hispanica dont make me go insane now',
            'Love I you much so?',
            'Okay so you are clearly not dyslexic',
            'Do you not beleive that I love you?',
            'Error: noButton clicks > 15',
            'Error: noButton clicks > 15',
            'Error: noButton clicks > 15',
            'Error: noButton clicks > 15',
            'Error: noButton clicks > 15',
            'Error: noButton clicks > 15',
            'ARE YOU SERIOUS RIGHT NEOW? HOW DID THAT NOT WORK.',
            'All you need to do is click yes if you want to be my valentine',
            'Insert: Say Anything boombox scene outside of your window',
            'BRUH Even Diane loved Loyd after that one',
            'This is gonna get hard now',
            'OH COME ON',
            'WHERE IS YOUR HATE DRIVE COMING FROM',
            'You probably look silly trying to hit all the No buttons right now ya know',
            'What if you miss the no button huh?',
            'At some point all your gonna have is the yes so you might as well click it now!',
            'OH COME ON',
            'HOW DO YOU EVEN KNOW THE YES BUTTON WORKS',
            'What if I knew you would never say yes and it doesnt even do anything',
            'I know you wanna know what happens',
            'You know at some point your gonna have no choice',
            'If you were a vegetable youd be a cute-cumber',
            'Okay remember these 4 words:',
            'Corn',
            'Butt',
            'Cow',
            'Hole',
            'Got them? be careful, dont click no again till you really remember them',
            'HAHA Look at you saying Corn Butt Cow Hole in your head over and over like a silly face',
            'Alright alright, say yes now',
            'Actually though',
            'Im running out of ideas like foreaslies',
            'Your gonna have to click yes eventualy or im going to make it impossible',
            'Oh what? You dont beleive me huh?',
            'Just you watch darling',
            'Are you sure you wanna do this?',
        ];
        

         if (loveLevel < loveMessages.length) {
            resultDiv.innerHTML = loveMessages[loveLevel];
        }

        if (loveLevel === loveMessages.length-1) {
            noButton.style.opacity = '1';
        }
        if (loveLevel === loveMessages.length+1) {
            noButton.style.opacity = '0.9';
        }
        if (loveLevel === loveMessages.length+2) {
            noButton.style.opacity = '0.8';
        }
        if (loveLevel === loveMessages.length+3) {
            noButton.style.opacity = '0.7';
        }
        if (loveLevel === loveMessages.length+4) {
            noButton.style.opacity = '0.6';
        }
        if (loveLevel === loveMessages.length+5) {
            noButton.style.opacity = '0.5';
        }
        if (loveLevel === loveMessages.length+6) {
            noButton.style.opacity = '0.4';
        }
        if (loveLevel === loveMessages.length+7) {
            noButton.style.opacity = '0.3';
        }
        if (loveLevel === loveMessages.length+8) {
            noButton.style.opacity = '0.2';
        }
        if (loveLevel === loveMessages.length+9) {
           noButton.style.opacity = '0.1';
        }
        if (loveLevel === loveMessages.length+10) {
           noButton.style.opacity = '0';
        }
        if (loveLevel === loveMessages.length+10) {
            resultDiv.innerHTML = 'Welp, look where we stand, only me and god know where the last one is and you arent super man so just click yes will you love :)';
        }                  
        }
    }

