console.log("hello script js");

const output = document.querySelector('#output');

// add event listener to input
document.querySelector('#input').addEventListener('change', function(event){
    const currentInput = event.target.value;
    inputHappened(currentInput);
});

const col = "🍍&nbsp";
const rowInput = [];

const inputHappened = function(currentInput){
    // let userInput = currentInput.split(" ");
    // console.log(userInput);

    // let cleared = checkForClear(userInput);

    // if user input clear, reset rows to display
    if (currentInput === "clear") {
        console.log("clearing!");
        while (output.firstChild) {
            output.removeChild(output.firstChild);
        }
        rows.length = 0;
    }
    else {
        let input = parseInt(currentInput);
        console.log( input );

        if (Number.isInteger(input)) {
            // if input is a number, add pineapples
            console.log("number!");
            addPineapples(input);
        }
        else {
            // display error message if input is not a number
            console.log("not number!");
            display( "Please input a number" );
        };
    }
    // clear input and newRow to ready for next input
    clearForNewInput();
};

function checkForClear(){
    console.log("hello!")
}

var addPineapples = function(input){
    let i = 1;
    // add pineapples to new row based on user input
    while (i < (input + 1)){
        rowInput.push(col);
        i++;
    };
    let newRow = document.createElement("p");
    newRow.innerHTML = `<p>${rowInput.join("")}</p>`;
    output.appendChild(newRow)
};

var clearForNewInput = function(){
    document.querySelector('#input').value = "";
    rowInput.length = 0;
};