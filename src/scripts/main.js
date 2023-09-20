document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('form-sorteador').addEventListener('submit', function(evento){
        evento.preventDefault();

        //Resolução de equação do 2º grau do a, b, c
        let coeficienteA = document.getElementById('numero-a').value;
        coeficienteA = parseFloat(coeficienteA);

        let coeficienteB= document.getElementById('numero-b').value;
        coeficienteB = parseFloat(coeficienteB);

        let coeficienteC = document.getElementById('numero-c').value;
        coeficienteC = parseFloat(coeficienteC);

        let delta = (coeficienteB**2 - 4 * coeficienteA * coeficienteC);
        let  resposta = "";
        
        if (delta> 0){

            x1 = (-coeficienteB + Math.sqrt(coeficienteB**2 - 4 * coeficienteA * coeficienteC))/(2 * coeficienteA);
            x2 = (-coeficienteB - Math.sqrt(coeficienteB**2 - 4 * coeficienteA * coeficienteC))/(2 * coeficienteA);
            resposta =  "As raízes da equação são " + x1.toFixed(1) + " e " + x2.toFixed(1);

        } else if ( delta == 0) {
            
            x1 = (-coeficienteB) /(2 * coeficienteA);
            resposta =  "As raízes da equação é " + x1.toFixed(1);

        } else {
            resposta =  "Não há raízes reais";
        }
        
     
        document.getElementById('valor-sorteador').innerText = resposta;
        document.querySelector('.resultado').style.display = 'block';
    })
})