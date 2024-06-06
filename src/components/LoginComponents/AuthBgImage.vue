<template>
    <div class="auth-image">
        <img :src="imageSrc" alt="Login bg image" />
    </div>
</template>

<script>
export default {
    name: 'AuthBgImage',
    props: {
        imageSrc: {
            type: String,
            required: true,
        }
    },
}
</script>

<style>
.auth-image {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.5rem;
}

.auth-image img {
    height: 20rem;
    width: 20rem;
}

@media only screen and (max-width: 768px) {

    .auth-image {
        margin-bottom: 0.5rem;
    }

    .auth-image img {
        height: 10rem;
        width: 10rem;
    }
}
</style>