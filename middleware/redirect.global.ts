export default defineNuxtRouteMiddleware((to) => {
    if (to.name === '404') {
        return '/'
    }
})
