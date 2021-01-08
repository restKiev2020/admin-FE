import client from '../../../http/client';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getAdvertRequestList(page) {
        return client.get(`/api/advert-requests?page=${page||1}`);
    },

    getAdvertRequestById(id) {
        return  client.get(`/api/advert-requests/${id}`);
    },

    updateAdvertRequest(advert) {
        return  client.put(`/api/advert-requests/${advert.id}`, {
            advert: advert
        });
    },
};
