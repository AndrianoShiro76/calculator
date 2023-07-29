let display = document.getElementById('display');

let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText) {
            case 'C' :
                display.innerText = '';
                break;
            case 'DEL' :
                if(display.innerText){
                    display.innerText = display.innerText.slice(0, -1);
                }
                break;
            case '%' :
                if(display.innerText){
                    display.innerText = display.innerText/100;
                }
                break;
            
            // Perhitungan X pangkat 3
            // case 'X3' :
            //     if(display.innerText){
            //         display.innerText = Math.pow(display.innerText, 3);
            //     }
            //     break;

            // Perhitungan Akar
            // case '√' :
            //     if(display.innerText){
            //         display.innerText = Math.sqrt(display.innerText);
            //     }
            //     break;

            case '=' :
                try{
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = 'Error!';
                }
                break;
            default: 
                display.innerText += e.target.innerText;
        }
    })
})



