<template>
    <div class="auth-form-section">
        <h2 class="auth-heading">Sign In</h2>
        <LoginFormVue />
    </div>
</template>

<script>
import LoginFormVue from './LoginForm.vue'
export default {
    name: 'LoginFormWrapper',
    components: { LoginFormVue }
}
</script>

<style>
.auth-form-section {
    display: flex;
    flex: 1;
    align-items: center;
    flex-direction: column;
}

.auth-heading {
    line-height: 1.66;
    font-weight: 700;
    font-size: 26px;
    width: 70%;
}

.error-message {
    font-size: 0.8rem;
    color: white;
    background: #ff3f3f;
    padding: 5px 15px;
    margin-top: 0.5rem;
    border-radius: 5px;
    width: 75%;
}

@media only screen and (max-width: 768px) {
    .auth-heading {
        font-size: 23px;
        margin-top: 0.5rem;
    }
}
</style>