<template>
    <login-form v-bind:message="message" v-on:on-login="loginHandler"
    v-bind:show-username-error="showUsernameError"
     v-bind:show-pasaword-error="showPasswordError"
      v-bind:imput-username-error="inputUsernameError"
      v-bind:imput-password-error="inputPasswordError"
></login-form>
</template>

<script>
    import LoginForm from '../login/LoginForm'
    
    export default {
        name: "LoginPage",
        components: {
            LoginForm
        },
        data() {
    
            return {
                message: "pleas login to start... ",
                showUsernameError: false,
                showPasswordError: false,
                inputUsernameError: false,
                inputPasswordError: false
            }
        },
        methods: {
            loginHandler(username, password) {
                this.message= "logging in.."
                const cachedUser = localStorage.getItem('username');
                const cachedPassword = localStorage.getItem('password');

                if (username !== cachedUser || password !== cachedPassword) {
                    if (username !== cachedUser) {
                        this.showUsernameError = true;
                        this.inputUsernameError = true;
                        this.message = 'Please enter the correct login details';
                    } else {
                        this.showUsernameError = false;
                        this.inputUsernameError = false;
                    }
                    if (password !== cachedPassword) {
                        this.showPasswordError = true;
                        this.inputPasswordError = true;
                        this.message = 'Please enter the correct login details';
                    } else {
                        this.showPasswordError = false;
                        this.inputPasswordError = false;
                    }
                } else {
                    this.message = `Welcome back ${username}`;
                    this.showPasswordError = false;
                    this.showUsernameError = false;
                    this.inputPasswordError = false;
                    this.inputUsernameError = false;
                    sessionStorage.setItem('sessionId', (Math.floor(100000000 + Math.random() * 900000000)).toString());
                    this.$router.push("jobs");
                }

            }
        }
    }
</script>

<style scoped>
    
</style>
