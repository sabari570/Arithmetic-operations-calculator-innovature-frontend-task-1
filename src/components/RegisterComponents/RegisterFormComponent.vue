<template>
    <div class="auth-form-section">
        <h2 class="auth-heading">Sign Up</h2>
        <RegisterForm />
    </div>
</template>

<script>
import RegisterForm from './RegisterForm.vue';
export default {
    name: "RegisterFormWrapper",
    components: { RegisterForm }
}
</script>

<style></style>