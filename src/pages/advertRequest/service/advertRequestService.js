import {flatten, unflatten} from 'flat';

import advertRequestRepository from '../repository/advertRequestRepository';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    async getAdvertRequestList(page = 1) {
        return (await advertRequestRepository.getAdvertRequestList(page)).data;
    },

    async getFlatAdvertRequestById(id) {
        return flatten((await advertRequestRepository.getAdvertRequestById(id)).data, { maxDepth: 2 });
    },

    updateAdvertRequest(advertRequest) {
        return advertRequestRepository.updateAdvertRequest(advertRequest);
    },

    flatAdvertRequestList(data) {
        return data.map((item) => {
            return this.flatAdvertRequestItem(item);
        })
    },

    flatAdvertRequestItem(item) {
        const docs = item.documents_ids;
        item.documents_ids = null;
        item = flatten(item, { maxDepth: 2 });
        item.documents_ids = docs;
        return item;
    },

    async updateFlatAdvertRequest(item) {
        return await this.updateAdvertRequest(unflatten(item))
    },
};
