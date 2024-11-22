<template>
    <body>
      <!-- Big paragraph -->
      <div id="big-paragraph">
        Make a free online quote on any shipment you want to make
      </div>
  
      <!-- Separator between the big and descriptive paragraphs -->
      <hr class="solid">
  
      <!-- Descriptive paragraph -->
      <div id="descriptive-paragraph">
        We can offer you an instant quote for your domestic and international
        shipping needs, both small and large packages, and pallets. Fill out
        your shipment details below to discover your quotes. If you are satisfied,
        simply continue with the reservation.
      </div>
  
      <!-- Steps of the parcel process -->
      <div id="steps">
        <!-- Step one -->
         <div class="step">
          <div class="step-number">
            1.
          </div>
          <div class="step-descr">
            Insert source and destination
          </div>
         </div>
  
        <!-- Step two -->
        <div class="step">
          <div class="step-number">
            2.
          </div>
          <div class="step-descr">
            Fill the sipment requirements
          </div>
        </div>
  
         <!-- Step three -->
        <div class="step">
          <div class="step-number">
            3.
          </div>
          <div class="step-descr">
            Get an estimated quote
          </div>
        </div>
  
         <!-- Step four -->
        <div class="step">
          <div class="step-number">
            4.
          </div>
          <div class="step-descr">
            Proceed with the online reservation
          </div>
        </div>
      </div>
  
      <!-- 'Get started!' anchor -->
      <div id="div-started">
        <a href="" id="get-started">Get started!</a>
      </div>
    </body>
  </template>
  
  <script>
  // Importing the 'Package' module
  
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
  
  #link-parcel {
    margin-left: 45px;
  }
  
  #big-paragraph {
    width: 50%;
    margin-left: 170px;
    margin-top: 75px;
    font-size: 55px;
    font-family: Luminari, fantasy
  }
  
  hr.solid {
    border-top: 3px solid black;
    width: 5%;
    margin-left: 170px;
    margin-top: 25px;
  }
  
  #descriptive-paragraph {
    width: 60%;
    margin-left: 170px;
    margin-top: 30px;
    font-size: 21px;
    color: black;
  }
  
  #steps {
    width: 75%;
    margin-left: 170px;
    margin-top: 65px;
    text-align: center;
    @media (min-width: 1400px) {
      display: flex;
    }
  }
  
  .step {
    flex-grow: 1;
  }
  
  .step-number {
    font-size: 40px;
    font-family: Luminari, fantasy;
  }
  
  .step-descr {
    margin-top: 7.5px;
    width: 275px;
    color: black;
    font-size: 20px;
    font-weight: bold;
  }
  
  #div-started {
    margin-top: 80px;
    text-align: center;
  }
  
  #get-started {
    font-size: 40px;
    font-family: Luminari, fantasy;
    text-decoration: none;
    color: #355472;
  }
  
  #get-started:hover {
    font-size: 40px;
    font-family: Luminari, fantasy;
    text-decoration: underline;
    color: #355472;
  }
  
  #footer {
    display: flex;
    background-color: #ccc;
    width: calc(100% - 350px);
    margin-top: 100px;
    padding-left: 175px;
    padding-right: 175px;
    padding-top: 20px;
    padding-bottom: 20px;
  }
  
  #footer-descr {
    margin-top: 20px;
    margin-left: 16%;
    color: rgb(63, 63, 63);
    font-size: 25px;
  }
  </style>
  