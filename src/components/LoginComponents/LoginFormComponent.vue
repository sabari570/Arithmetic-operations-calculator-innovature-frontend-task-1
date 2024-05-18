<template>
    <div class="login-form-section">
        <h2 class="login-heading">Sign Up</h2>
        <LoginFormVue />
    </div>
</template>

<script>
import LoginFormVue from './LoginForm.vue'
export default {
    name: 'LoginForm',
    components: { LoginFormVue }
}
</script>

<style>
.login-form-section {
    display: flex;
    flex: 1;
    align-items: center;
    flex-direction: column;
}

.login-heading{
    line-height: 1.66;
    font-weight: 700;
    font-size: 26px;
    width: 70%;
}
</style>