

function calculate(){
    let height = document.getElementById("height").value/100;
    let weight = document.getElementById("weight").value;


    let imc=weight/height**2;
    let resultado = document.getElementById("resultado");
    let text = ""

    resultado.innerHTML = 
`<div class="imcp">
<p class = "pp">Seu imc é ${imc.toFixed(2)} </p></div>`;



    if(imc<18.5){
        text=("Você está abaixo do seu peso ideal.")
    }else if (imc<24.9){
        text=("Seu IMC está ideal.")
    }else if (imc<29.9){
        text=("Você está com sobrepeso.")
    }else if (imc<39.9){
        text=("Você está com obesidade.")
    } else if (imc>39.9){
        text=("Você está com obesidade mórbita.")
    }

    document.getElementById("text_area").innerText=text


}

