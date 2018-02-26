

// WHAT ABOUT ASYNCHRONOUS CALLBACKS?
// ASYNCHRONOUS: More than one at a time.

// The javascript engine does not really run own its own.  Its usually in a container program, often a web-browser,
// so while it can hook into those external sources, like the browser and we use the term ASYNCHRONOUS, the javascript
// engine itself, and everything in it, happens SYNCRONOUSLY.

// long running function
function waitThreeSeconds(){
    var ms = 3000 + new Date().getTime();
    while (new Date() < ms) {}
    console.log('finished function.');
}

function clickHandler(){
    console.log('click event!');
}

// listen for the click event
document.addEventListener('click', clickHandler);

waitThreeSeconds();
console.log('finished execution!');
