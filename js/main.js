window.addEventListener('load', init);

var count = 0;
var count1 = 0;
var content;
var daydiv;
var monthdiv;

function init() {
    var day = document.getElementById('day');
    day.addEventListener('click', dayclick);

    var month = document.getElementById('month');
    month.addEventListener('click', monthclick);
}

function dayclick() {
    count++;
    if (count == 1) {
        content = document.getElementById("content");
        daydiv = document.createElement('div');
        daydiv.id = 'dayDropdown';
        content.appendChild(daydiv);
    }
    else {
        content.removeChild(daydiv);
        count = 0;
    }
}

function monthclick() {
    count1++;
    if (count1 == 1) {
        content = document.getElementById("content");
        monthdiv = document.createElement('div');
        monthdiv.id = 'monthDropdown';
        content.appendChild(monthdiv);
    }
    else {
        content.removeChild(monthdiv);
        count1 = 0;
    }
}