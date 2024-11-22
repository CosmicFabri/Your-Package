<template>
  <div id="app">
    <!-- Bar that contains the logo -->
    <div id="logo-bar">
      <img src="../src/assets/logo.png" alt="Your Pack logo" id="logo-img">
    </div>

    <!-- Navigation bar or other global elements -->
    <div id="navigation-bar">
      <router-link to="/">Home</router-link>
      <router-link to="/send-package" id="link">Send Package</router-link>
      <router-link to="/view-parcel" id="link">View Parcel Services</router-link>
    </div>

    <!-- Space for other pages to use -->
    <router-view/>

    <!-- Footer -->
    <div id="footer">
      <img id="logo-bw" src="../src/assets/logo-bw.png" alt="Your Pack logo, b/w">
      <div id="footer-descr">© Copyright Fabrizio Guzmán, 2024. All rights reserved.</div>
    </div>
  </div>
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
  color: #355472;
  margin: 0%;
}

body {
  margin: 0px !important;
}

#logo-bar {
  background-image: linear-gradient(to right, #a0d4f6, #e5f1fc 70%);
  height: 75px;
  padding-left: 170px;
  padding-right: 170px;
  padding-top: 20px;
  padding-bottom: 20px;
  position: sticky;
  top: 0;
}

#navigation-bar {
  background-color: white;
  height: 25px;
  padding-left: 170px;
  padding-right: 170px;
  padding-top: 20px;
  padding-bottom: 20px;
  box-shadow: 0 4px 2px -2px gray;
}

#navigation-bar a {
  text-decoration: none;
  color: black;
}

#navigation-bar a:hover {
  text-decoration: underline;
  color: #4a8ab4;
}

#link {
  margin-left: 45px;
}
</style>
