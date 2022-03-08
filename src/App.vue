<template>
  <SignIn/>
</template>

<script>
import SignIn from '@/components/SignIn'
export default {
  name: 'App',
  components: {SignIn}
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap');

@font-face {
	font-family: 'BebasNeue'; 
	src: url(./assets/BebasNeue.ttf); 
}
body {
  background: rgb(206, 206, 206)
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
