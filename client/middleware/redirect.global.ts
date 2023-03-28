export default defineNuxtRouteMiddleware((to) => {
    if (!to.name && to.matched.length === 0) {
        return '/'
    }
})
