import client from '../http/client';
import AuthUser from './AuthUser';
import userService from '../pages/user/service/userService';

class AuthService {
    static AUTH_TOKEN_STORAGE_KEY = 'authToken';
    static AUTH_USER_ID_STORAGE_KEY = 'userId';
    static IS_AUTHENTICATED_STORAGE_KEY = 'refreshToken';

    constructor() {
        this.userData = null;
    }

    get authToken() {
        return localStorage.getItem(AuthService.AUTH_TOKEN_STORAGE_KEY);
    }
    set authToken(value) {
        localStorage.setItem(AuthService.AUTH_TOKEN_STORAGE_KEY, value);
    }

    get userId() {
        return localStorage.getItem(AuthService.AUTH_USER_ID_STORAGE_KEY);
    }
    set userId(value) {
        localStorage.setItem(AuthService.AUTH_USER_ID_STORAGE_KEY, value);
    }

    get isAuthenticated() {
        return localStorage.getItem(AuthService.IS_AUTHENTICATED_STORAGE_KEY);
    }
    set isAuthenticated(value) {
        localStorage.setItem(AuthService.IS_AUTHENTICATED_STORAGE_KEY, value);
    }

    async mount() {
        if (this.authToken && this.userId) {
            try {
                this.userData = new AuthUser(await userService.getUserById(this.userId));
                return true;
            }catch (e) {
                console.log(e)
            }
        }
        this.dropState();
        return false;
    }

    async login(username, password) {
        try {
            const response = await client.login(username, password);

            if (response.data.message) {
                return false;
            }

            this.userData = new AuthUser(response.data.user);
            this.userId = this.userData.id
            this.authToken = response.data.token.access_token
            this.isAuthenticated = true;

            return true;
        } catch (e) {
          console.error(e);
        }
        this.isAuthenticated = null;
        return null;
    }

    logout() {
        this.dropState();
        window.location.reload();
    }

    dropState() {
        localStorage.removeItem(AuthService.AUTH_TOKEN_STORAGE_KEY);
        localStorage.removeItem(AuthService.AUTH_USER_ID_STORAGE_KEY);
        localStorage.removeItem(AuthService.IS_AUTHENTICATED_STORAGE_KEY);
        this.userData = null;
    }
}

export default new AuthService();
