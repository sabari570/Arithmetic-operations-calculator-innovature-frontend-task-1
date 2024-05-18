<template>
    <form @submit.prevent="" class="login-form">
        <div class="form-group">
            <label for="username">
                <i class="fa-solid fa-user"></i>
            </label>
            <input type="text" name="username" placeholder="Username" />
        </div>

        <div class="form-group">
            <label for="password">
                <i class="fa-solid fa-lock"></i>
            </label>
            <input type="password" name="password" placeholder="Password" />
        </div>

        <div class="form-group remember-me">
            <input type="checkbox" name="remember-me" class="remember-me-checkbox" />
            <label for="remember-me" class="remember-me-label">Remember me</label>
        </div>

        <div class="form-group form-button">
            <button class="login-btn" type="submit">Log in</button>
        </div>
    </form>
</template>

<script>

import 'primeicons/primeicons.css'

export default {
    name: 'LoginForm'
}
</script>

<style scoped>
.login-form {
    width: 70%;
    padding-top: 1rem;
}

input {
    width: 100%;
    display: block;
    border: none;
    outline: none;
    border-bottom: 1px solid #999;
    padding: 6px 30px;
    margin-bottom: 1.5rem;
    background: transparent;
}

.remember-me {
    display: flex;
    margin: 0.5rem 0;
}

.remember-me input[type=checkbox] {
    position: relative;
    top: 2.5px;
    margin-right: 0.8rem;
    display: inline-block;
    height: 13px;
    width: 13px;
    border: 1px solid #999;
    border-radius: 2px;
}

.remember-me-label {
    font-size: 0.7rem;
}

.form-group {
    position: relative;
    overflow: hidden;
}

.form-group i {
    position: relative;
    top: 20px;
    font-size: 0.8rem;
}

.login-btn {
    background-color: #003366;
    cursor: pointer;
    display: inline-block;
    border-bottom: none;
    color: #fff;
    border-radius: 5px;
    width: auto;
    border: none;
    outline: none;
    font-size: 12px;
    padding: 12px 35px;
}

.login-btn:hover{
    background-color: #5a97d3;
}
</style>