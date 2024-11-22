<template>
<!-- The weight section of the form -->
<div id="div-weight">
    <h1>2. Weight</h1>
    <p>This is the Send Package page.</p>
</div>

<!-- Move between sections of the form -->
<div id="div-move">
  <router-link to="/send-package" id="link">Previous section</router-link>
  <router-link to="/send-package-2" id="link">Next section</router-link>
</div>
</template>

<script>
</script>

<style>
#div-weight {
    margin-left: 170px;
    margin-top: 75px;
}
</style>