import { ref } from 'vue'

export default function useSort() {
    const sortOrder = ref('asc') // default sort order is ascending

    function sortLaunchesByDate(launches) {
        const sortedLaunches = [...launches].sort((a, b) => {
            const dateA = new Date(a.launch_date_local)
            const dateB = new Date(b.launch_date_local)
            return sortOrder.value === 'asc' ? dateA - dateB : dateB - dateA
        })
        return sortedLaunches
    }

    function toggleSortOrder() {
        sortOrder.value = sortOrder.value === 'asc' ? 'desc' : 'asc'
    }

    return {
        sortOrder,
        sortLaunchesByDate,
        toggleSortOrder,
    }
}
