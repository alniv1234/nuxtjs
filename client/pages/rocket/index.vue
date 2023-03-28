<template>
    <v-list>
        <v-list-item-title class="text-lg-h5">SpaceX Rockets</v-list-item-title>
        <v-list-item v-for="item in rockets" :key="item.id">
            <NuxtLink :to="`/rocket/${item.id}`" style="text-decoration: none">{{ item.name }}</NuxtLink>
        </v-list-item>
    </v-list>
</template>

<script lang="ts" setup>
const query = gql`
    query getRockets {
        rockets {
            id
            name
        }
    }
`
const { data } = useAsyncQuery<{
    rockets: {
        id: string
        name: string
        description: string
        first_flight: string
        height: Object
        diameter: Object
        mass: Object
        stages: string
    }
}>(query)
const rockets = computed(() => data.value?.rockets ?? [])
</script>
