import client from "../../../http/client";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getUsersList() {
        return client.get('/api/users');
    },

    getUserById(userId) {
        return client.get(`/api/users/${userId}`);
    },

    updateUser(user) {
        return client.put(`/api/users/${user.id}`, {
            user: user,
        })
    },

    getUserAdverts(userId) {
        return client.get(`/api/users/${userId}/adverts`);
    },

    getUserAdvertRequests(userId) {
        return client.get(`/api/users/${userId}/advert-requests`);
    },

    resetPassword(id) {
        return client.post(`/api/reset-pwd-admin/${id}`);
    },
};
