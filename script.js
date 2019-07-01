console.log("hello script js");

const col = "🍍&nbsp";
const rowInput = [];
const rows = [];

var inputHappened = function(currentInput){
    // if user input clear, reset rows to display
    if (currentInput === "clear") {
        console.log("celaring!");
        display("");
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

var addPineapples = function(input){
    let i = 1;
    // add pineapples to new row based on user input
    while (i < (input + 1)){
        rowInput.push(col);
        i++;
    };
    let newRow = `<p>${rowInput.join("")}</p>`;

    // add newRow into rows to display
    rows.push(newRow);
    display(rows.join(""));
};

var clearForNewInput = function(){
    document.querySelector('#input').value = "";
    rowInput.length = 0;
};