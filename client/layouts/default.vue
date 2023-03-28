<template>
    <v-container>
        <v-app>
            <v-app-bar elevation="2" @click="drawer = !drawer">
                <v-app-bar-nav-icon></v-app-bar-nav-icon>
                <v-toolbar-title>
                    <h3>SpaceX</h3>
                </v-toolbar-title>
            </v-app-bar>
            <v-navigation-drawer v-model="drawer">
                <v-list>
                    <v-list-item active-class>
                        <nuxt-link to="/" style="text-decoration: none">Home</nuxt-link>
                    </v-list-item>
                    <v-list-item active-class>
                        <nuxt-link to="/rocket" style="text-decoration: none">Rockets</nuxt-link>
                    </v-list-item>
                    <v-list-item active-class>
                        <nuxt-link to="/" style="text-decoration: none">Favorites</nuxt-link>
                    </v-list-item>
                </v-list>
            </v-navigation-drawer>
            <v-main>
                <slot />
            </v-main>
            <v-footer absolute width="100%" class="d-flex align-center justify-center">
                &copy; 2023 SpaceX
            </v-footer>
        </v-app>
    </v-container>
</template>
<script>
export default {
    name: 'DefaultLayout',
    data() {
        return {
            drawer: false,
        }
    },
}
</script>

<style scoped>
.nav {
    display: flex;
    justify-content: space-between;
}
</style>
