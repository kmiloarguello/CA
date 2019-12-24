const colorTransition = (colorInitial = "#000000",colorFinal = "#FFFFFF") => {

    //for(let i=1;i<colorFinal.length;i++){

        let coll = HexaDecimalToDecimal(colorInitial[1]);
        let fil = HexaDecimalToDecimal(colorFinal[1]);
        let c = parseInt( coll );
        let f = parseInt( fil );
        console.log({c,f})
        let count = 0;
    
        setInterval(() => {
    
            if(count <= 15){
    
                if(c <= 9){
    
                    coll = c.toString();
    
                    if(c < f) c+=1;
                    if(c > f) c-= 1;
    
                }else{
                    
                    if(c == 10){
                        coll = "A";
                    }else if(c== 11){
                        coll = "B";
                    }else if(c == 12){
                        coll = "C";
                    }else if(c == 13){
                        coll = "D";
                    }else if(c == 14){
                        coll = "E";
                    }else if(c == 15){
                        coll = "F";
                    }
    
                    if(c < f) c+=1;
                    if(c > f) c-= 1;
    
                }
    
                console.log("UPDATE", coll);
                
                count++;
    
            }else{
                clearInterval();
            }
    
            
    
        }, 500);

        console.log("colors", colorInitial);

    //}

};


const col = {
    A: 10,
    B: 11,
    C: 12,
    D: 13,
    E: 14,
    F: 15
}

const SumHexadecimal = (valueInitial,valueFinal) => {
    



    let sum;



    return sum;
};

const HexaDecimalToDecimal = (valueHexadecimal) => {
    
    let valueHexaCapital = valueHexadecimal.toUpperCase();

    if( new RegExp("A","ig").test(valueHexaCapital) ){
        return 10;
    }else if( new RegExp("B","ig").test(valueHexaCapital) ){
        return 11;
    }else if( new RegExp("C","ig").test(valueHexaCapital) ){
        return 12;
    }else if( new RegExp("D","ig").test(valueHexaCapital) ){
        return 13;
    }else if( new RegExp("E","ig").test(valueHexaCapital) ){
        return 14;
    }if( new RegExp("F","ig").test(valueHexaCapital) ){
        return 15;
    }else{
        return valueHexadecimal;
    }
}


module.exports = colorTransition;