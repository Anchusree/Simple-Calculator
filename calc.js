

function btton(val){
    document.getElementById("display").value += val

}

function equalbtton(){
    let display = document.getElementById("display").value
    let result = eval(display)
    document.getElementById("display").value = result 

}


