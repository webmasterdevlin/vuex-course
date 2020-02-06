<template>
        <section>
<!--            <div id="nav">-->
<!--                <router-link to="/">Home</router-link> |-->
<!--                <router-link to="/heroes">Heroes</router-link> |-->
<!--                <router-link to="/">Villains</router-link>-->
<!--            </div>-->

            <div>
                <v-app-bar
                        color="deep-purple accent-4"
                        dense
                        dark
                >
                    <v-app-bar-nav-icon></v-app-bar-nav-icon>
                    <v-toolbar-title>Vuetify Vuex</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <router-link class="mx-2" style="color:white" to="/">Home</router-link> |
                    <router-link class="mx-2" style="color:white"  to="/heroes">Heroes</router-link> |
                    <router-link class="mx-2" style="color:white"  to="/">Villains</router-link>
                </v-app-bar>
            </div>
        </section>
</template>

<script>
  export default {
    name: 'Navbar'
  }
</script>

<style scoped>

</style>
