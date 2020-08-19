<template src="@/templates/area.html"></template>

<script>
export default {
    name: 'Area',
    methods: {
        updateForm(){

        // hide all inputs
            document.getElementById("input-circle").hidden = true;
            document.getElementById("input-triangle").hidden = true;
            document.getElementById("input-rectangle").hidden = true;
            document.getElementById("input-square").hidden = true;

        // get the selected shape and show its input using switch statement
            let shape = document.getElementById("shapes").value;
            switch (shape) {
                case "circle":
                    document.getElementById("input-circle").hidden = false;
                    break;
                case "triangle":
                    document.getElementById("input-triangle").hidden = false;
                    break;
                case "rectangle":
                    document.getElementById("input-rectangle").hidden = false;
                    break;
                case "square":
                    document.getElementById("input-square").hidden = false;
                    break;
            }
        },

        calculateArea(){
            //get the selected shape
             let shape = document.getElementById("shapes").value;

            //calculate the shape's area using switch statement
            let area = 0;
            switch (shape){
                case "circle":{  //yo {} use vaxa yesma, coz eslint le vanxa let , const variables use garda {} vitra lekhne 
                                 //(eg:  Unexpected lexical declaration in case block  no-case-declarations) natra yesto error aunxa
                    let Radius = document.getElementById("radius").value;
                    area = Math.PI * Radius * Radius;
                    break;
                }
                case "triangle":{    //yo {} use vaxa yesma, coz eslint le vanxa let , const variables use garda {} vitra lekhne 
                                    //(eg:  Unexpected lexical declaration in case block  no-case-declarations) natra yesto error aunxa
                    let Base = document.getElementById("base").value;
                    let Height = document.getElementById("height").value;
                    area =  Base * Height / 2;
                    break;
                }
                case "rectangle":{    //yo {} use vaxa yesma, coz eslint le vanxa let , const variables use garda {} vitra lekhne 
                                     //(eg:  Unexpected lexical declaration in case block  no-case-declarations) natra yesto error aunxa
                    let Length = document.getElementById("length").value;
                    let Width = document.getElementById("width").value;
                    area = Length * Width;
                    break;
                }
                case "square":{     //yo {} use vaxa yesma, coz eslint le vanxa let , const variables use garda {} vitra lekhne 
                                   //(eg:  Unexpected lexical declaration in case block  no-case-declarations) natra yesto error aunxa
                    let Side = document.getElementById("side").value;
                    area =  Side * Side;
                    break;
                }
            }
                 //output the area
              document.getElementById("output").innerHTML = "Area = " + area;
        }
    }


}
</script>