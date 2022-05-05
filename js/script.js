let input = document.querySelector("input");
let terminalBody = document.querySelector("#terminalBody");

let commandList = ['whoami', 'whatibelieve', 'aspiration', 'purpose', 'oportunity', 'social', 'clear'];

functionCalls();

function functionCalls() {
    checkWindowClick();
    checkPressedEnter();
}

function checkWindowClick() {
    terminalBody.addEventListener ('click', function(event){
        input.focus();
    });
}

function checkPressedEnter() {
    input.addEventListener('keydown', function(e){
        if (e.key === 'Enter') {
            execute(input.value);
        }
    });
}

function execute(inputValue) {
    let temp = input.value;
    input.remove();
    terminalBody.innerHTML += temp;
    checkCommand(temp);
    addInput();
}

function executeCommand(command){

    terminalBody.innerHTML += '<br><br>'

    for(let i=0; i<data[command].length; ++i){

        terminalBody.innerHTML += `${data[command][i].name} ` ;

        if(data[command][i].value.includes('http')){
            terminalBody.innerHTML += `<a href="${data[command][i].value}" target="_blank">${data[command][i].value}</a><br>` ;
        } else{
            terminalBody.innerHTML += `${data[command][i].value}<br>` ;
        }
    }
}

function checkCommand(inputCommand){

    let command = inputCommand.split(" ")[0];

    if(command){
        if(command === 'clear'){ commandClear();}
        else if(command === 'echo') {commandEcho(inputCommand);}
        else if(command === 'help'){ commandHelp();}
        else if(commandList.includes(command)){ executeCommand(command);}
        else{
            terminalBody.innerHTML +=  '<br>' + inputCommand + ' is not recognized as a command, Try \"help\"<br>';
        }
    }
    else {
        terminalBody.innerHTML += '<br>';
    }
}

function addInput() {
    terminalBody.innerHTML += '<span class="line-part1">gustavo@madeiramadeira</span>:<span class="line-part2">/dev/null</span>$ <input type="text" autofocus/>';
    input = document.querySelector("input");
    input.focus();
    functionCalls();
}

function commandClear() {
    terminalBody.innerHTML = ``;
}

function commandHelp() {
    terminalBody.innerHTML += '<br><br>';
    for(let i=0; i<commandList.length; i++) {
        terminalBody.innerHTML += `${commandList[i]}<br>`
    }
}

function commandEcho(inputCommand) {
    terminalBody.innerHTML += '<br>';
    for(let i=1; i<inputCommand.split(' ').length; i++){
        terminalBody.innerHTML += inputCommand.split(' ')[i] + ' ';
    }
    terminalBody.innerHTML += '<br>';
}