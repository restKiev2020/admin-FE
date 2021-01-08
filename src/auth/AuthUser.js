export default class AuthUser {
    constructor(data) {
        this.data = data;
    }

    get id() {
        return this.data.id;
    }

    get userName() {
        return this.data.first_name;
    }

    get lastName() {
        return this.data.last_name;
    }
}
