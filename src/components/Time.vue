<template src="@/templates/time.html"></template>

<script>
export default {
    name: 'Time',
    
  methods:{
        showtime(){
             var d = new Date();
             
             var timing = document.getElementById('time');
             timing.innerHTML= d;
        }
    }
}
</script>