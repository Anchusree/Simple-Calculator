

function btton(val){
    document.getElementById("display").value += val

}

function equalbtton(){
    let display = document.getElementById("display").value
    let result = eval(display)
    document.getElementById("display").value = result 
    if(display == ""){
        document.getElementById("display").value = "ERROR"
    }
 
}

function clearbtton(){
    document.getElementById("display").value = " " 
}

function deletebtton(){
    var ans = document.getElementById("display").value;
    document.getElementById("display").value = ans.substr(0, ans.length - 1);
 
}



