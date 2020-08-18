<template src="@/templates/counter.html"></template>

    <script>
    var counter = 0;

    export default {
        name: 'Counter',
        methods: {
            increase(){
                
                
                counter++;
                var para = document.getElementById('countme');
                para.innerHTML = counter;
                    
                


            },

            decrease(){
                
                counter--;
                var para = document.getElementById('countme');
                para.innerHTML = counter;
            }
        }
    }
    </script>