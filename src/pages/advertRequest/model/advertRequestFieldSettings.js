import {detailsLevelAdvertFields} from '../../advert/model/advertTableLinesSettings';
import AdvertRequestIdRenderer from '../component/table/AdvertRequestIdRenderer';
import UserIdRenderer from "../../user/component/table/UserIdRenderer";

export const baseLevelAdvertFields = [
    {
        title: 'id',
        readOnly: true,
        data: 'id',
        renderer: AdvertRequestIdRenderer,
    },
    {
        title: 'Пользователь',
        data: 'user_id',
        readOnly: true,
        renderer: UserIdRenderer,
    },
    {
        title: 'Одобрен',
        data: 'approval',
        type: 'checkbox',
    },
    {
        title: 'Модерация',
        data: 'moderated',
        type: 'checkbox',
    },
];

export const allSettings = [
    ...baseLevelAdvertFields,
    ...detailsLevelAdvertFields,
];

function arr_diff (a1, a2) {

    var a = [], diff = [];

    for (var i = 0; i < a1.length; i++) {
        a[a1[i]] = true;
    }

    for (var i = 0; i < a2.length; i++) {
        if (a[a2[i]]) {
            delete a[a2[i]];
        } else {
            a[a2[i]] = true;
        }
    }

    for (var k in a) {
        diff.push(k);
    }

    return diff;
}

export default {
    key: 'advertRequestSettings',
    stateSettings: null,

    getStateSettings() {
        if (!this.stateSettings) {
            this.stateSettings = this.getSortedSettings();
        }

        return this.stateSettings;
    },
    getSortedSettings() {

        let rawSettings = localStorage.getItem(this.key);
        if (rawSettings) {
            return JSON.parse(rawSettings);
        }

        this.setSortedSettings(allSettings);

        return allSettings;
    },
    setSortedSettings(settings) {
        localStorage.setItem(this.key, JSON.stringify(settings.filter((item) => !!item)));
    },
    dropSortedSettings() {
        localStorage.removeItem(this.key);
        this.setSortedSettings(allSettings);
        this.stateSettings = allSettings;
    },
    hideColl(firstArr, secondArr){
        let id = arr_diff(firstArr, secondArr)[0]*1 + 1;
        let settings = this.getSortedSettings();
        if (id < 0) {
            id = 0;
        }
        const findedItem = this.getStateSettings()[id];

        delete settings[settings.findIndex(n => n.data ===findedItem.data)];

        this.setSortedSettings([...settings]);
    },
    moveColl(a, b) {
        let x = a[0],
            y = b;
        let settings = this.getSortedSettings();

        this.getStateSettings();
        this.stateSettings = this.stateSettings.move(x, y);
        this.setSortedSettings(settings.move(x, y));
    }
};

