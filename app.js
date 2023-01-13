// import functions and grab DOM elements
const headDropdown = document.getElementById('head-dropdown');
const middleDropdown = document.getElementById('middle-dropdown');
const bottomDropdown = document.getElementById('bottom-dropdown');
const headEl = document.getElementById('head');
const middleEl = document.getElementById('middle');
const bottomEl = document.getElementById('bottom');
const reportEl = document.getElementById('report');
const catchphrasesEl = document.getElementById('catchphrases');
const catchphraseInputEl = document.getElementById('catchphrase-input');
const catchphraseButton = document.getElementById('catchphrase-button');

// set state for how many times the user changes the head, middle, and bottom
let headCount = 0;
let middleCount = 0;
let bottomCount = 0;
// set state for all of the character's catchphrases
let catchphrases = [];
// Events
headDropdown.addEventListener('change', () => {
    headEl.style.backgroundImage = makeURL(headDropdown.value, 'head');
    headCount++;
    displayStats();
});
middleDropdown.addEventListener('change', () => {
    middleEl.style.backgroundImage = makeURL(middleDropdown.value, 'middle');
    // get the value of the middle dropdown
    const userClicked = middleEl.value;
    // increment the middle change count state
    middleCount++;
    // update the dom for the middle (NOTE: use style.backgroundImage on the middleEl div instead of trying to set the .src -- it's NOT an img tag!)
    // update the stats to show the new count (call displayStats() to do this work)
    displayStats();
});

bottomDropdown.addEventListener('change', () => {
    bottomEl.style.backgroundImage = makeURL(bottomDropdown.value, 'bottom');
    // get the value of the bottom dropdown
    const userClicked = bottomEl.value;
    // increment the bottom change count state
    bottomCount++;
    // update the dom for the bottom (NOTE use style.backgroundImage on the bottomEl div instead of trying to set the .src -- it's NOT an img tag!)
    // update the stats to show the new count (call displayStats() to do this work)
    displayStats();
});

catchphraseButton.addEventListener('click', () => {
    // get the value of the catchphrase input
    const inputPhrase = catchphraseInputEl.value;
    // push the new catchphrase to the catchphrase array in state
    catchphrases.push(inputPhrase);
    // clear out the form input's value so it's empty to the user
    catchphraseInputEl.value = '';
    // update the dom to show the new catchphrases (refactor to/call displayCatchphrases to do this work)
    displayCatchphrases();
});

function makeURL(select, type) {
    return `url(../assets/${select}-${type}.png)`;
}

function displayStats() {
    // text content of the reportEl to tell the user how many times they've changed each piece of the state
    reportEl.textContent = `You have changed the head ${headCount} times... middle ${middleCount} times.. and bottom ${bottomCount} times!`;
}

function displayCatchphrases() {
    // clear out the DOM for the currently displayed catchphrases
    // loop through each catchphrase in state
    // and for each catchphrase
    // create an HTML element with the catchphrase as its text content
    // and append that HTML element to the cleared-out DOM
}
