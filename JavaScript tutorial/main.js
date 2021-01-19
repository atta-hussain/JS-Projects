function getAndUpdate() {

    question = document.getElementById('question').value;
    option_a = document.getElementById('option_a').value;
    option_b = document.getElementById('option_b').value;
    option_c = document.getElementById('option_c').value;
    option_d = document.getElementById('option_d').value;
    correct = document.getElementById('correct').value;
    if (localStorage.getItem('questionJson') == null) {
        questionJsonArray = [];
        questionJsonArray.push([question, option_a, option_b, option_c, option_d, correct]);
        localStorage.setItem('questionJson', JSON.stringify(questionJsonArray))
    } else {
        questionJsonArrayStr = localStorage.getItem('questionJson')
        questionJsonArray = JSON.parse(questionJsonArrayStr);
        questionJsonArray.push([question, option_a, option_b, option_c, option_d, correct]);
        localStorage.setItem('questionJson', JSON.stringify(questionJsonArray))
    }
    update();
}

function update() {
    if (localStorage.getItem('questionJson') == null) {
        questionJsonArray = [];
        localStorage.setItem('questionJson', JSON.stringify(questionJsonArray))
    } else {
        questionJsonArrayStr = localStorage.getItem('questionJson')
        questionJsonArray = JSON.parse(questionJsonArrayStr);
    }
    // Populate the table
    let tableBody = document.getElementById("tableBody");
    let str = "";
    questionJsonArray.forEach((element, index) => {
        str += `
        <tr>
        <th scope="row">${index + 1}</th>
        <td>${element[0]}</td>
        <td>${element[1]}</td> 
        <td>${element[2]}</td> 
        <td>${element[3]}</td> 
        <td>${element[4]}</td> 
        <td>${element[5]}</td> 
        <td><button class="btn btn-sm btn-primary" onclick="deleted(${index})">Delete</button></td> 
        </tr>`;
    });
    
}


function deleted(itemIndex) {
    console.log("Delete", itemIndex);
    questionJsonArrayStr = localStorage.getItem('questionJson')
    questionJsonArray = JSON.parse(questionJsonArrayStr);
    // Delete itemIndex element from the array
    questionJsonArray.splice(itemIndex, 1);
    localStorage.setItem('questionJson', JSON.stringify(questionJsonArray));
    update();

}


function clearStorage() {
    if (confirm("Do you areally want to clear?")) {
        // console.log('Clearing the storage')
        localStorage.clear();
        update()
    }
}



(function () {
    const addQuizBtn = document.getElementById("add_quizBtn");
    const startBtn = document.getElementById("startBtn");


    // console.log('---------');
    // console.log(startBtn);
    // startBtn.style.display = "block";
    // addQuizBtn.style.display = "block";

    window.onclick = function (event) {
        // startBtn.style.display = "none";
        // addQuizBtn.style.display = "none";
    };
    add = document.getElementById("add");
    if (add) {
        add.addEventListener("click", getAndUpdate);
    }
    update();
})();