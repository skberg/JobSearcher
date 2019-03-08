<template>
    <div id="JobList">
    
        <div class="row">
            <div class="col-12">
                <br>
                <input type="text" class="form-control" placeholder="Search.." v-model="searchQuery">
                <br>
            </div>
        </div>
        <div class="row">
    
    
            <job-card v-for="job in filteredJobs" v-bind:key="job.id" v-bind:job="job">
            </job-card>
        </div>
    </div>
</template>

<script>
    import JobCard from './JobCard';
    
    export default {
        name: 'JobList',
        props: ['jobList'],
        data() {
            return {
                searchQuery: ''
            }
        },
        components: {
            JobCard
        },
        props: ['jobList'],
        computed: {
            filteredJobs() {
                return this.jobList.filter(job => {
    
                    return job.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                        job.company.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                        job.type.toLowerCase().includes(this.searchQuery.toLowerCase());
    
                });
    
            }
        }
    
    }
</script>

<style>
    
</style>


