<template>
    <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
    <form @submit.prevent="onLoginFormSubmit" class="login-form">
        <div class="form-group">
            <label for="username">
                <i class="fa-solid fa-user"></i>
            </label>
            <input type="text" name="username" v-model="username" placeholder="Username" required />
        </div>

        <div class="form-group">
            <label for="password">
                <i class="fa-solid fa-lock"></i>
            </label>
            <input type="password" name="password" v-model="password" placeholder="Password" required />
        </div>

        <div class="form-group form-button">
            <button class="login-btn" type="submit">
                <LoaderComponent v-if="isLoading" />
                <div v-if="!isLoading">Log In</div>
            </button>
        </div>
    </form>
</template>

<script>
import { mapActions, mapGetters, mapMutations, mapState } from 'vuex'
import { ERROR_MESSAGE_GETTER, IS_USER_AUTHENTICATED_GETTER, LOGIN_ACTION, SHOW_LOADING_SPINNER_MUTATION } from '../../store/storeConstants.js'
import LoaderComponent from '../Loader/LoaderComponent.vue';
export default {
    name: 'LoginForm',
    data() {
        return {
            username: '',
            password: '',
        }
    },
    computed: {
        ...mapGetters('auth', {
            errorMessage: ERROR_MESSAGE_GETTER,
            isUserAuthenticated: IS_USER_AUTHENTICATED_GETTER,
        }),
        ...mapState({
            isLoading: (state) => state.showLoading
        })
    },
    methods: {
        ...mapActions('auth', {
            onLogin: LOGIN_ACTION
        }),
        ...mapMutations({
            showLoading: SHOW_LOADING_SPINNER_MUTATION,
        }
        ),
        async onLoginFormSubmit() {
            this.showLoading(true)
            await this.onLogin({ username: this.username, password: this.password })
            this.username = ""
            this.password = ""
            this.showLoading(false)

            if (this.isUserAuthenticated) {
                this.$router.push('/')
            }
        }
    },
    components: { LoaderComponent }
}
</script>

<style scoped>
.login-form {
    width: 70%;
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
    padding: 14px 35px;
}

.login-btn:hover {
    background-color: #5a97d3;
}

@media only screen and (max-width: 768px) {
    input {
        margin-bottom: 1rem;
    }
}
</style>