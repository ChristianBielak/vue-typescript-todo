<template>
    <div id="app">
        <transition name="fade" mode="out-in">
            <router-view/>
        </transition>
        <div class="bottom_bar">
            <div class="row expanded">
                <div class="small-3 columns text-center"><i class="fa fa-cog" aria-hidden="true"></i></div>
                <div class="small-3 columns text-center">
                    <router-link to="/create_task">
                    <i class="fa fa-plus" aria-hidden="true"></i>
                    </router-link>
                </div>
                <div class="small-3 columns text-center">
                    <router-link to="/">
                        <i class="fa fa-home" aria-hidden="true"></i>
                    </router-link>
                </div>
                <div class="small-3 columns text-center">
                    <router-link to="/deleted_tasks">
                        <i class="fa fa-trash" aria-hidden="true"></i>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'app',
    }
</script>


<style lang="scss" src="./assets/scss/app.scss"></style>
