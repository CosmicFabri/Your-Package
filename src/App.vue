<template>
  <body>
    <!-- Bar that contains the logo -->
    <div class="logo-bar">
      <img src="./assets/logo-3.png" alt="Your Pack logo" id="logo-img">
    </div>

    <!-- Navigation bar for various options -->
    <div class="navigation-bar">
      [Various options, might be divs]
    </div>
  </body>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0%;
}

body {
  margin: 0px !important;
}

.logo-bar {
  background-color: #c6e6fb;
  height: 75px;
  padding-left: 170px;
  padding-right: 170px;
  padding-top: 20px;
  padding-bottom: 20px;
}

.navigation-bar {
  background-color: white;
  height: 25px;
  padding-left: 170px;
  padding-right: 170px;
  padding-top: 20px;
  padding-bottom: 20px;
  box-shadow: 0 4px 2px -2px gray;
}
</style>
