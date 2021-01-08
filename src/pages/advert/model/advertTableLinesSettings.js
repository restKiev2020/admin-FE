import AdvertIdRenderer from '../component/table/AdvertIdRenderer';
import SliceTextRenderer from '../../../ui/sliceTextRenderer';
import UserIdRenderer from "../../user/component/table/UserIdRenderer";

export const baseLevelAdvertFields =  [
    {
        title: 'id',
        readOnly: true,
        data: 'id',
        renderer: AdvertIdRenderer,
    },
    {
        title: 'Документы',
        data: 'documents_ids',
        readOnly: true,
        type: 'document',
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
    {
        title: 'Тип дома',
        data: 'building',
        renderer: SliceTextRenderer,
    },
    {
        title: 'Населенный пункт',
        data: 'city',
        renderer: SliceTextRenderer,
    },
    {
        title: 'Описание',
        data: 'description',
        renderer: SliceTextRenderer,
    },
    {
        title: 'Район',
        data: 'district',
        renderer: SliceTextRenderer,
    },
    {
        title: 'Отремонтирован',
        data: 'has_repair',
        type: 'checkbox',
    },
    {
        title: 'Микрорайон',
        data: 'microdistrict',
        renderer: SliceTextRenderer,
    },
    {
        title: 'Примечания',
        data: 'notes',
        renderer: SliceTextRenderer,
    },
    {
        title: 'Цена в месяц UAH',
        data: 'price_per_ms_uah',
        renderer: SliceTextRenderer,
    },
    {
        title: 'Цена в месяц USD',
        data: 'price_per_ms_usd',
        renderer: SliceTextRenderer,
    },
    {
        title: 'Цена UAH',
        data: 'price_uah',
        renderer: SliceTextRenderer,
    },
    {
        title: 'Цена USD',
        data: 'price_usd',
        renderer: SliceTextRenderer,
    },
    {
        title: 'Область',
        data: 'region',
        editor: 'select',
        selectOptions: [
            'Киевская область',
            'Харьковская область',
            'Днепровская область',
            'Одесская область',
            'Львовская область',
        ],
    },
    {
        title: 'Запрошено',
        data: 'requested',
        type: 'numeric',
    },
    {
        title: 'Улица',
        data: 'street',
        renderer: SliceTextRenderer,
    },
    {
        title: 'total_area',
        data: 'total_area',
        type: 'numeric',
    },
    {
        title: 'Пользователь',
        data: 'user_id',
        renderer: UserIdRenderer,
        readOnly: true,
    },
];

export const detailsLevelAdvertFields = [
    {
        title: 'Ф.И.О.',
        data: 'advert_details.fio',
        renderer: SliceTextRenderer,
    },
    {
        title: 'Город',
        data: 'advert_details.city',
        renderer: SliceTextRenderer,
    },
    {
        title: 'Тип',
        data: 'advert_details.type',
        renderer: SliceTextRenderer,
    },
    {
        title: 'Примечания',
        data: 'advert_details.notes',
        renderer: SliceTextRenderer,
    },
    {
        title: 'Номер телефона',
        data: 'advert_details.phone',
        renderer: SliceTextRenderer,
    },
    {
        title: 'Количество комнат',
        data: 'advert_details.rooms',
        editor: 'select',
        selectOptions: [].concat(
            [...new Array(10).keys()].map((item) => (item + 1).toString())
        ),
    },
    {
        title: 'Заголовок',
        data: 'advert_details.title',
        renderer: SliceTextRenderer,
    },
    {
        title: 'Улица',
        data: 'advert_details.street',
        renderer: SliceTextRenderer,
    },
    {
        title: 'Этажей в доме',
        data: 'advert_details.storeys',
        editor: 'select',
        selectOptions: [].concat(
            [...new Array(25).keys()].map((item) => (item + 1).toString())
        ),
    },
    {
        title: 'Санузел',
        data: 'advert_details.bathroom',
        editor: 'select',
        selectOptions: ['Раздельный', 'Смежный', '2 и более'],
    },
    {
        title: 'Количество спален',
        data: 'advert_details.bedrooms',
        editor: 'select',
        selectOptions: [].concat(
            [...new Array(10).keys()].map((item) => (item + 1).toString())
        ),
    },
    {
        title: 'Строение',
        data: 'advert_details.building',
        renderer: SliceTextRenderer,
    },
    {
        title: 'Комисия',
        data: 'advert_details.feeValue',
        type: 'numeric',
    },
    {
        title: 'Цена Uah',
        data: 'advert_details.priceUah',
        type: 'numeric',
    },
    {
        title: 'Цена Usd',
        data: 'advert_details.priceUsd',
        type: 'numeric',
    },
    {
        title: 'Тип дома',
        data: 'advert_details.houseType',
        editor: 'select',
        selectOptions: ['Дом, котедж', 'Таунхаус', 'Дуплекс', 'Дача'],
    },
    {
        title: 'Шейринг',
        data: 'advert_details.isSharing',
        type: 'checkbox',
    },
    {
        title: 'Цена UAH',
        data: 'advert_details.price_uah',
        renderer: SliceTextRenderer,
    },
    {
        title: 'Цена USD',
        data: 'advert_details.price_usd',
        renderer: SliceTextRenderer,
    },
    {
        title: 'Общая площадь м/кв.',
        data: 'advert_details.totalArea',
        type: 'numeric',
    },
    {
        title: 'Площадь участка, сот.',
        data: 'advert_details.yard_area',
        type: 'numeric',
    },
    {
        title: 'Ремонт',
        data: 'advert_details.has_repair',
        type: 'checkbox',
    },
    {
        title: 'Жилая площадь м/кв.',
        data: 'advert_details.livingArea',
        type: 'numeric',
    },
    {
        title: 'Общая прощадь м/кв.',
        data: 'advert_details.total_area',
        type: 'numeric',
    },
    {
        title: 'Описание',
        data: 'advert_details.description',
        renderer: SliceTextRenderer,
    },
    {
        title: 'Площадь кухни м/кв.',
        data: 'advert_details.kitchenArea',
        type: 'numeric',
    },
    {
        title: 'Жилая прощадь м/кв.',
        data: 'advert_details.living_area',
        type: 'numeric',
    },
    {
        title: 'Буква дома',
        data: 'advert_details.house_letter',
        renderer: SliceTextRenderer,
    },
    {
        title: 'Площадь кухни м/кв.',
        data: 'advert_details.kitchen_area',
        type: 'numeric',
    },
    {
        title: 'Материал Стен',
        data: 'advert_details.wallMaterial',
        editor: 'select',
        selectOptions: [
            'Газоблок',
            'Кирпич красный',
            'Кирпич селикатный',
            'Ракушняк',
            'Сруб',
            'Хонка',
        ],
    },
    {
        title: 'Вознаграждение',
        data: 'advert_details.shareFeeValue',
        type: 'numeric',
    },
    {
        title: 'Высота потолка',
        data: 'advert_details.ceiling_height',
        editor: 'select',
        selectOptions: ['2.5', '2.6', '2.75', '2.85', '3', 'Выше 3'],
    },
    {
        title: 'Выход на воду с участка',
        data: 'advert_details.access_to_water',
        editor: 'select',
        selectOptions: ['Да', 'Нет'],
    },
    {
        title: 'Состояние',
        data: 'advert_details.condition_house',
        editor: 'select',
        selectOptions: [
            'Требуется ремонт',
            'От строителей без отделки',
            'Под чистовую отделку',
            'Советское',
            'Незаконченный ремонт',
            'Хорошее состояние',
            'Евроремонт',
            'Авторский, VIP уровня',
        ],
    },
    {
        title: 'Год постройки',
        data: 'advert_details.constructionYear',
        type: 'numeric',
    },
    {
        title: 'Тип постройки',
        data: 'advert_details.construction_type',
        type: 'numeric',
    },
    {
        title: 'Дом внутри котеджного городка',
        data: 'advert_details.inside_of_cottage',
        editor: 'select',
        selectOptions: ['Да', 'Нет'],

    },
    {
        title: 'Подъезд к дому',
        data: 'advert_details.house_access_floor',
        editor: 'select',
        selectOptions: ['Асфальт', 'Грунтовка', 'Не обустроен'],
    },
    {
        title: 'Дополнительные параметры',
        data: 'advert_details.house_additional_params',
        editor: 'select',
        selectOptions: [
            'Гараж в доме',
            'Бассейн в доме',
            'Бассейн на улице',
            'Сауна',
            'Сигнализация',
            'Дом охраны',
            'Гостевой домик',
        ],
    },
    {
        title: 'Год комуникаций',
        data: 'advert_details.yard_communications',
        type: 'numeric',
    },
]

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
    key: 'advertSettings',
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

