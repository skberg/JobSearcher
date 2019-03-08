<template>
    <div class="job-card col-xs-12 col-sm-6 col-md-4">
    
        <div class="card">
            <img v-bind:src="job.company_logo" alt="img" class="img-fluid">
            <div class="card-body">
    
                <div class="card-title">{{ job.title }}</div>
                <hr>
                <b>{{job.company}}</b><br>
                <p>Type: {{job.type}}</p>
                <div class="description" v-html="job.description">
    
                </div>
    
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Jobcard',
        props: ['job'],
        created() {
            this.job.description = this.job.description.substr(0, 120);
        }
    };
</script>

<style scoped>
    .card {
        margin-bottom: 35px;
        padding: 10px;
        border: none;
        border-radius: 15px;
        box-shadow: 1px 2px 3px 0.01px #0f0f0a;
    }
</style>
