
var row = 1;
var submitBtn = document.getElementById("submitBtn").addEventListener('click', displayQuiz);

function displayQuiz () {
    var question = document.getElementById('question').Value;
    var option_a = document.getElementById('option_a').Value;
    var option_b = document.getElementById('option_b').Value;
    var option_c = document.getElementById('option_c').Value;
    var option_d = document.getElementById('option_d').Value;

    if(!question || !option_a || !option_b || !option_c || !option_d) {
        alert('Please Enter completely')
        return;
    }

    var displayQuiz = document.getElementById('displayQuiz');

var newRow = displayQuiz.insertRow(row);

var cell1 = newRow.insertCell(0);
var cell2 = newRow.insertCell(1);
var cell3 = newRow.insertCell(2);
var cell4 = newRow.insertCell(3);
var cell5 = newRow.insertCell(4);

cell1.innerHTML = question;
cell2.innerHTML = option_a;
cell3.innerHTML = option_b;
cell4.innerHTML = option_c;
cell5.innerHTML = option_d;

row++;

};


