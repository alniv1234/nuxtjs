<template>
    <v-container>
        SpaceX Launches
        <v-select v-model="selectedYear" :items="years" label="Select a year"></v-select>
        <button @click="toggleSortOrder">
            {{ sortOrder === 'asc' ? 'Sort by: Descending' : 'Sort by: Ascending' }}
        </button>
        <v-table>
            <thead>
                <tr>
                    <th class="text-left">Mission Name</th>
                    <th class="text-left">Launch Date</th>
                    <th class="text-left">Launch Site</th>
                    <th class="text-left">Rocket Name</th>
                    <th class="text-left">Details</th>
                    <th class="text-left">Favorite</th>
                </tr>
            </thead>
            <tbody>
                <tr v-show="filteredLaunches.length == 0">
                    <td colspan="5" class="text-center">No Data Found</td>
                </tr>
                <tr v-for="item in sortedLaunches" :key="item.id">
                    <td>{{ item.mission_name }}</td>
                    <td>{{ item.launch_date_local }}</td>
                    <td>{{ item.launch_site }}</td>
                    <td>{{ item.rocket['rocket_name'] }}</td>
                    <td>{{ item.details }}</td>
                    <td><v-btn size="small" icon="mdi-vuetify" flat></v-btn></td>
                </tr>
            </tbody>
        </v-table>
    </v-container>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import useLaunches from '~~/composables/useLaunches'
import useSort from '~~/composables/useSort'

const { sortOrder, sortLaunchesByDate, toggleSortOrder } = useSort()
const query = gql`
    query getLaunches {
        launches {
            id
            mission_name
            launch_date_local
            launch_site {
                site_name
            }
            rocket {
                rocket_name
            }
            details
        }
    }
`
const { data } = useAsyncQuery<{
    launches: {
        id: string
        mission_name: string
        launch_date: string
        launch_site: Object
        rocket: Object
        details: string
    }
}>(query)

const selectedYear = ref(null)
const years = Array.from({ length: 18 }, (_, i) => 2006 + i)
years.unshift('All')
const filteredLaunches = computed(() =>
    useLaunches().filterLaunchesByYear(data.value?.launches ?? [], selectedYear),
)
const sortedLaunches = computed(() => sortLaunchesByDate(filteredLaunches.value))
</script>
