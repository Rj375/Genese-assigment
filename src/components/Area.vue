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

        // get the selected shape and show its input
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

        // video ko 12:00 paxi herne
    }


}
</script>