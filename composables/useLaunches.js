export default function useLaunches() {
    function filterLaunchesByYear(launches, year) {
        if (year.value && year.value !== 'All') {
            return launches.filter((launch) => convertToDateOnly(launch.launch_date_local) === year.value)
        } else {
            return launches
        }
    }
    function convertToDateOnly(dateString) {
        const date = new Date(dateString)
        return date.getFullYear()
    }

    return {
        filterLaunchesByYear,
    }
}
