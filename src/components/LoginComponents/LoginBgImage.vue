<template>
    <div class="login-image">
        <img :src="imageSrc" alt="Login bg image" />
    </div>
</template>

<script>
import LoginBgImage from '../../assets/images/login-bg-image.png'
export default {
    name: 'LoginBgImage',
    data() {
        return {
            imageSrc: LoginBgImage,
        }
    }
}
</script>

<style>
.login-image {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.5rem;
}

.login-image img {
    height: 20rem;
    width: 20rem;
}

@media only screen and (max-width: 768px) {

    .login-image {
        margin-bottom: 0.5rem;
    }

    .login-image img {
        height: 10rem;
        width: 10rem;
    }
}
</style>