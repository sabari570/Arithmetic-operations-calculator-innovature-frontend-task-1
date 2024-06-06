<template>
  <div class="auth-bg">
    <div class="auth-card">
      <LoginBgImageVue :imageSrc="LoginBgImageSrc" />
      <LoginFormComponentVue />
    </div>
  </div>
</template>

<script>
import LoginBgImageSrc from '../assets/images/login-bg-image.png'
import LoginBgImageVue from '@/components/LoginComponents/AuthBgImage.vue'
import LoginFormComponentVue from '@/components/LoginComponents/LoginFormComponent.vue'

export default {
  name: 'LoginView',
  components: { LoginBgImageVue, LoginFormComponentVue },
  data() {
    return {
      LoginBgImageSrc,
    }
  }
}
</script>

<style>
.auth-bg {
  padding: 3rem;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
}

.auth-card {
  width: 40rem;
  height: 28rem;
  padding: 4rem 1rem;
  border: 2px solid #fff;
  background: rgb(255, 255, 255, 0.1);
  backdrop-filter: blur(25px);
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 15px 16.83px .17px rgba(0, 0, 0, .05);
}

@media only screen and (max-width: 768px) {
  .auth-bg {
    width: 100%;
    padding: 2rem 0;
  }

  .auth-card {
    display: flex;
    flex-direction: column;
    width: 80%;
    height: fit-content;
    padding: 3rem 0;
  }
}
</style>