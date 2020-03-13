<template>
    <div id="app">
        <img src="./assets/logo.png">
        <router-view/>
    </div>
</template>

<script>
    console.log("fase");
    export default {
        name: "App"
    }
</script>

<style lang="scss">
    $black: black;
    $yellow: yellow;
    h2 {
        font-size: 60px;

        color: $black;
        background: $yellow;
        /*transform: rotate(20deg);*/
    }
</style>
