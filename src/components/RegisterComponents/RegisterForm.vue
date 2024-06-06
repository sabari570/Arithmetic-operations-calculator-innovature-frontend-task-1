<template>
    <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
    <form @submit.prevent="onRegisterSubmit" class="auth-form">
        <div class="form-group">
            <label for="username">
                <i class="fa-solid fa-user"></i>
            </label>
            <input class="auth-input-fields" type="text" name="username" v-model="username" placeholder="Username"
                required />
        </div>

        <div class="form-group">
            <label for="password">
                <i class="fa-solid fa-lock"></i>
            </label>
            <input class="auth-input-fields password-field" type="password" name="password" v-model="password"
                placeholder="Password" required />
        </div>

        <small class="auth-footer">
            Already have an account?
            <router-link to="/login">Log in</router-link>
        </small>

        <div class="form-group form-button">
            <button class="auth-btn" type="submit">
                <LoaderComponent v-if="isLoading" />
                <div v-if="!isLoading">Sign Up</div>
            </button>
        </div>
    </form>
</template>

<script>
import { ERROR_MESSAGE_GETTER, IS_USER_AUTHENTICATED_GETTER, REGISTER_ACTION, SHOW_LOADING_SPINNER_MUTATION } from '@/store/storeConstants';
import { mapActions, mapGetters, mapMutations, mapState } from 'vuex';
import LoaderComponent from '../Loader/LoaderComponent.vue';
import { ERROR_MESSAGE_MUTATION } from '@/store/storeConstants';
export default {
    name: "RegisterForm",
    data() {
        return {
            username: "",
            password: "",
        }
    },
    mounted() {
        this.clearErrorMessage("");
    },
    computed: {
        ...mapGetters('auth', {
            errorMessage: ERROR_MESSAGE_GETTER,
            isUserAuthenticated: IS_USER_AUTHENTICATED_GETTER,
        }),
        ...mapState({
            isLoading: (state) => state.showLoading,
        }),
    },
    methods: {
        ...mapActions('auth', {
            onRegister: REGISTER_ACTION,
        }),
        ...mapMutations({
            showLoading: SHOW_LOADING_SPINNER_MUTATION,
        }),
        ...mapMutations('auth', {
            clearErrorMessage: ERROR_MESSAGE_MUTATION,
        }),
        async onRegisterSubmit() {
            this.showLoading(true);
            await this.onRegister({ username: this.username, password: this.password });
            this.username = "";
            this.password = "";
            this.showLoading(false);
        },
    },
    components: { LoaderComponent },
}
</script>

<style></style>