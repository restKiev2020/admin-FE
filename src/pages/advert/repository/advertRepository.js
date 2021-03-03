import client from '../../../http/client';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getAdvertList(page) {
        return client.get(`/api/adverts?page=${page||1}`);
    },

    getAdvertById(id) {
        return  client.get(`/api/adverts/${id}`);
    },

    updateAdvert(advert) {
        return  client.put(`/api/adverts/${advert.id}`, {
            advert: advert
        });
    },
    async removeAdvertById(advert) {
        return client.delete(`/api/adverts/${advert.id}`, {})
    },

    async removeAdvertRequestById(advert) {
        return client.delete(`/api/advert-requests/${advert.id}`, {})
    },
};
