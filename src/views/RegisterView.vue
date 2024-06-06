<template>
  <div class="auth-bg">
    <div class="auth-card">
      <AuthBgImage :imageSrc="RegisterBgImage" />
      <RegisterFormComponent />
    </div>
  </div>
</template>

<script>
import AuthBgImage from '@/components/LoginComponents/AuthBgImage.vue';
import RegisterBgImage from "../assets/images/register-bg-image.png"
import RegisterFormComponent from '@/components/RegisterComponents/RegisterFormComponent.vue';
export default {
  name: "RegisterView",
  components: { AuthBgImage, RegisterFormComponent },
  data() {
    return {
      RegisterBgImage,
    }
  }
}
</script>

<style></style>