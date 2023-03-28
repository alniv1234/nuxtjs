<template>
    <v-container>
        <v-card class="mx-auto" max-width="800">
            <v-card-title>{{ rocket.name }}</v-card-title>
            <v-card-text>
                <v-list>
                    <v-list-item>
                        <v-list-item-title>Description:</v-list-item-title>
                        <v-list-item-subtitle class="wrap-text">
                            {{ rocket.description }}
                        </v-list-item-subtitle>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-title>First Flight:</v-list-item-title>
                        <v-list-item-subtitle>{{ rocket.first_flight }}</v-list-item-subtitle>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-title>Height:</v-list-item-title>
                        <v-list-item-subtitle>
                            {{ rocket.height?.feet }} ft ({{ rocket.height?.meters }} m)
                        </v-list-item-subtitle>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-title>Diameter:</v-list-item-title>
                        <v-list-item-subtitle>
                            {{ rocket.diameter?.feet }} ft ({{ rocket.diameter?.meters }} m)
                        </v-list-item-subtitle>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-title>Mass:</v-list-item-title>
                        <v-list-item-subtitle>
                            {{ rocket.mass?.kg }} kg ({{ rocket.mass?.lb }} lb)
                        </v-list-item-subtitle>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-title>Stages:</v-list-item-title>
                        <v-list-item-subtitle>{{ rocket.stages }}</v-list-item-subtitle>
                    </v-list-item>
                    <v-btn class="mt-10 float-end bg-red-accent-2" to="/rocket">Back</v-btn>
                </v-list>
            </v-card-text>
        </v-card>
    </v-container>
</template>

<script lang="ts" setup>
const { id } = useRoute().params

// getRockets($id:String)

const query = gql`
    query getRockets($id: ID!) {
        rocket(id: $id) {
            name
            description
            first_flight
            height {
                feet
                meters
            }
            diameter {
                feet
                meters
            }
            mass {
                kg
                lb
            }
            stages
        }
    }
`

const { data } = useAsyncQuery<{
    rocket: {
        id: string
        name: string
        description: string
        first_flight: string
        height: Object
        diameter: Object
        mass: Object
        stages: string
    }
}>(query, { id })
const rocket = computed(() => data.value?.rocket ?? [])
</script>

<style scoped>
.wrap-text {
    -webkit-line-clamp: unset !important;
}
</style>
