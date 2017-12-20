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

<style lang="scss">
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;

        h1, h2 {
            font-weight: normal;
        }

        ul {
            list-style-type: none;
            padding: 0;
        }

        li {
            display: inline-block;
            margin: 0 10px;
        }

        a {
            color: #42b983;
        }


        .router-link-exact-active{
            color: #ff00ff;
        }
    }
</style>
