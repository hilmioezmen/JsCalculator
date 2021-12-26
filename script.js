let inpResult = document.getElementById("inputtext");

let calculate = (numbers) => {
    inpResult.value = inpResult.value + numbers ;
}

let result = () => {
    try {
        inpResult.value = eval (inpResult.value)
    }
    catch (err) {
        alert( "Opps! Enter the valid Input");
    }
}

function clr() {
    inpResult.value = " ";
}

function del () {
    inpResult.value = inpResult.value.slice (0,-1);
}