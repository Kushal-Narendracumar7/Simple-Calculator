function press_number(num) {
    let resElement = document.getElementById('res');
    resElement.style.fontSize = "20px";  // Reset font size on new input

    let input = document.getElementById("input").value;
    input += num;
    document.getElementById('input').value = input;
}

function press_operator(operator) {
    let resElement = document.getElementById('res');
    resElement.style.fontSize = "20px";  

    let input = document.getElementById("input").value;
    input += operator;
    document.getElementById('input').value = input;
}
function backspace_function() {
    let input = document.getElementById('input').value;
    document.getElementById('input').value = input.slice(0, -1);
}


function clear_function() {
    document.getElementById('input').value = "";
    let resElement = document.getElementById('res');
    resElement.innerHTML = "Result will be displayed here..";
    resElement.style.fontSize = "20px";  
}


function evaluate_expression(){
    let expr = document.getElementById('input').value;
    try{
    let res = eval(expr);
    let resElement = document.getElementById('res');
    resElement.style.fontSize="30px";
    resElement.style.transition="font-size 0.2s ease";
    document.getElementById('res').innerHTML=res;

    }catch(error){
        document.getElementById('res').innerHTML = "Error Occurred";
    }
    
}

