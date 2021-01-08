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
};
