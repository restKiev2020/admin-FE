import UserIdRenderer from '../component/table/UserIdRenderer';
import SliceTextRenderer from '../../../ui/sliceTextRenderer';
import {baseLevelAdvertFields, detailsLevelAdvertFields} from '../../advert/model/advertTableLinesSettings';

// eslint-disable-next-line import/no-anonymous-default-export
export const allSettings = [
    {
        title: 'Id',
        readOnly: true,
        data: 'id',
        renderer: UserIdRenderer,
    },
    {
        title: 'Статус',
        data: 'status',
        editor: 'select',
        selectOptions: ['pending','standard', 'silver', 'gold', 'platinum'],
    },
    {
        title: 'Имя',
        data: 'first_name',
        renderer: SliceTextRenderer,
    },
    {
        title: 'Фамилия',
        data: 'last_name',
        renderer: SliceTextRenderer,
    },
    {
        title: 'Меил',
        data: 'email',
        renderer: SliceTextRenderer,
    },
    {
        title: 'Месенджер',
        data: 'messenger',
        renderer: SliceTextRenderer,
    },
    {
        title: 'Блокировка',
        data: 'blocked',
        type: 'checkbox',
    },
    {
        title: 'Фамилия',
        data: 'last_name',
        type: 'numeric',
    },
    {
        title: 'Дата верификации имейла',
        data: 'email_verified_at',
        type: 'numeric',
    },
    {
        title: 'Дата верефикации',
        data: 'verified_at',
    },
    {
        title: 'Номер телефона',
        data: 'phone_number',
    },
    {
        title: 'Второй номер телефона',
        data: 'second_phone',
    },
    {
        title: 'Третий номер телефона',
        data: 'third_phone',
        type: 'numeric',
    },
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
    key: 'userSettings',
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
        if (!findedItem) return ;
        delete settings[settings.findIndex(n => n.data ===findedItem.data)];

        this.setSortedSettings([...settings]);
    },
    moveColl(a, b) {
        let x = a[0],
            y = b;
        let settings = this.getSortedSettings();

        this.getStateSettings();
        this.stateSettings = this.stateSettings.move(x, y)
        this.setSortedSettings(settings.move(x, y));
    }
};

