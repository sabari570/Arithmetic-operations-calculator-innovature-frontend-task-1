<template>
    <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
    <form @submit.prevent="onLoginFormSubmit" class="auth-form">
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
            Don't have an account?
            <router-link to="/register">Sign up</router-link>
        </small>

        <div class="form-group form-button">
            <button class="auth-btn" type="submit">
                <LoaderComponent v-if="isLoading" />
                <div v-if="!isLoading">Sign In</div>
            </button>
        </div>
    </form>
</template>

<script>
import { mapActions, mapGetters, mapMutations, mapState } from 'vuex'
import { ERROR_MESSAGE_GETTER, ERROR_MESSAGE_MUTATION, IS_USER_AUTHENTICATED_GETTER, LOGIN_ACTION, SHOW_LOADING_SPINNER_MUTATION } from '../../store/storeConstants.js'
import LoaderComponent from '../Loader/LoaderComponent.vue';
export default {
    name: 'LoginForm',
    data() {
        return {
            username: '',
            password: '',
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
        ...mapMutations('auth', {
            clearErrorMessage: ERROR_MESSAGE_MUTATION,
        }),
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

<style>
.auth-form {
    width: 70%;
}

.auth-input-fields {
    width: 100%;
    display: block;
    border: none;
    outline: none;
    border-bottom: 1px solid #999;
    padding: 6px 30px;
    background: transparent;
}

.auth-input-fields.password-field {
    margin-bottom: 0.8rem;
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

.auth-footer {
    font-size: 0.7rem;
}


.auth-footer a {
    text-decoration: none;
    color: #003366;
    font-weight: 600;
}

.auth-btn {
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
    margin-top: 0.5rem;
}

.auth-btn:hover {
    background-color: #5a97d3;
}

@media only screen and (max-width: 768px) {
    input {
        margin-bottom: 1rem;
    }
}
</style>