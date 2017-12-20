<template>
    <div id="app">
        <ul>
            <li>
                <router-link to="/">FirstPage</router-link>
            </li>
            <li>
                <router-link to="/page2">SecondPage</router-link>
            </li>
        </ul>
        <img src="./assets/logo.png">
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: 'app',
    }
</script>


<style lang="scss" src="./assets/scss/app.scss"></style>
