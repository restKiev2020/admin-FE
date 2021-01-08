import userRepository from '../repository/userRepository';
import advertService from '../../advert/service/advertService';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    async getUsersList() {
        return (await userRepository.getUsersList()).data.data.map((item) => {
            item.blocked = !!item.blocked;
            return item
        });
    },

    async getUserById(id) {
        return (await userRepository.getUserById(id)).data;
    },

    async updateUser(user) {
        return (await userRepository.updateUser(user)).data;
    },

    async getFlatUserAdverts(userId) {
        return advertService.flatAdvertList((await userRepository.getUserAdverts(userId)).data);
    },

    async getFlatUserAdvertRequests(userId) {
        return advertService.flatAdvertList((await userRepository.getUserAdvertRequests(userId)).data);
    },

    resetPassword(id) {
        userRepository.resetPassword(id);
    },
};
