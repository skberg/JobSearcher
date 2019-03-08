<template>
    <div class="container">
        <job-List v-bind:job-list="jobList"></job-List>
    </div>
</template>

<script>
    import JobList from '../jobs/JobList';;
    
    
    export default {
        name: "JobsPage",
        components: {
            JobList
        },
        created() {
    
            //get all of the awesom jobs 
            const conversionUrl = 'https://cors-anywhere.herokuapp.com/';
            const url = 'https://jobs.github.com/positions.json';
            fetch(`${conversionUrl}${url}`).then(resp => resp.json())
                .then(data => {
                    this.jobList = data;
                })
                .catch(err => {
                    console.log(err);
    
                })
        },
        data() {
            return {
                jobList: []
            }
        }
    }
</script>

<style scoped>
    
</style>