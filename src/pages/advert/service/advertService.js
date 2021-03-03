import advertRepository from '../repository/advertRepository';
import {flatten, unflatten} from 'flat';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    async getAdvertList(page = 1) {
        return (await advertRepository.getAdvertList(page)).data;
    },

    async getFlatAdvertById(id) {
        let doc = (await advertRepository.getAdvertById(id)).data;
        let docIds = doc.documents_ids;
        doc.documents_ids = null;

        doc = flatten(doc, { maxDepth: 2 });
        doc.documents_ids = docIds;
        return doc;
    },

    updateAdvert(advert) {
        return advertRepository.updateAdvert(advert);
    },

    removeAvert(item) {
        return advertRepository.removeAdvertById(item);
    },

    removeRequest(item) {
        return advertRepository.removeAdvertRequestById(item);
    },

    flatAdvertList(data) {
        return data.map((item) => {
            return this.flatAdvertItem(item);
        })
    },

    flatAdvertItem(item) {
        const docs = item.documents_ids;
        item.documents_ids = null;
        item = flatten(item, { maxDepth: 2 });
        item.documents_ids = docs;
        return item;
    },

    async updateFlatAdvert(item) {
        return this.updateAdvert(unflatten(item))
    },
};
