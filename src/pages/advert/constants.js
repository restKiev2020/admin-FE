const buildingType = [
    {
        title: 'Вторичка',
        value: 'second',
        goTo: 'EditObjectFormScreen',
    },
    {
        title: 'Новостройка',
        value: 'new',
        goTo: 'EditObjectFormScreen',
    },
];

const apartmentChoices = {
    status: {
        title: 'Статус',
        field: 'status',
        sellTypes: ['sell'],
        queue: 2,
        objectTypes: ['flat'],
        children: ['Первичка', 'Вторичка', 'Переуступка'],
        isRequests: true,
    },
    buildingType: {
        title: 'Тип дома',
        field: 'buildingType',
        sellTypes: ['rent', 'sell'],
        queue: 8,
        objectTypes: ['flat'],
        children: [
            'Старая Панель',
            'Утеплённая панель',
            'Монолитно-каркасный/Газоблок',
            'Монолитно-каркасный/Кирпич',
            'Монолитно-каркасный/Керамоблок',
            'Сталинка',
            'Хрущёвка',
            'Чешка',
            'Царский ',
            'Совмин',
            'Кирпичный ',
        ],
        isRequests: true,
    },
    houseType: {
        title: 'Тип дома',
        field: 'houseType',
        sellTypes: ['rent', 'sell'],
        objectTypes: ['house'],
        queue: 1,
        children: ['Дом, котедж', 'Таунхаус', 'Дуплекс', 'Дача'],
        isRequests: true,
    },
    wallMaterial: {
        title: 'Материал Стен',
        field: 'wallMaterial',
        sellTypes: ['rent', 'sell'],
        objectTypes: ['house'],
        queue: 9,
        children: [
            'Газоблок',
            'Кирпич красный',
            'Кирпич селикатный',
            'Ракушняк',
            'Сруб',
            'Хонка',
        ],
        isRequests: true,
    },
    subway: {
        title: 'Метро',
        type: 'text',
        sellTypes: ['rent', 'sell'],
        queue: 18,
        objectTypes: ['flat', 'commerce', 'osz'],
        field: 'subway',
        isRequests: true,
    },
    rooms_layout: {
        title: 'Планировка комнат',
        field: 'rooms_layout',
        sellTypes: ['rent', 'sell'],
        objectTypes: ['flat'],
        queue: 2,
        isRequests: true,
        children: [
            'Смежная',
            'Раздельная',
            'Смежно-Раздельная',
            'Студия',
            'Пентхаус',
            'Кухня-гостинная',
            'Многоуровневая',
        ],
    },
    condition_house: {
        title: 'Состояние',
        isRequests: true,
        sellTypes: ['rent', 'sell'],
        objectTypes: ['house'],
        field: 'condition_house',
        queue: 5,
        children: [
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
    condition: {
        title: 'Состояние',
        isRequests: true,
        sellTypes: ['sell'],
        objectTypes: ['flat'],
        field: 'condition',
        queue: 5,
        children: [
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
    condition_rent: {
        title: 'Состояние',
        isRequests: true,
        sellTypes: ['rent'],
        objectTypes: ['flat'],
        field: 'condition_rent',
        queue: 5,
        children: [
            'Советское',
            'Незаконченный ремонт',
            'Хорошее состояние',
            'Евроремонт',
            'Авторский, VIP уровня',
        ],
    },
    bathroom: {
        title: 'Санузел',
        field: 'bathroom',
        sellTypes: ['rent', 'sell'],
        objectTypes: ['flat', 'house'],
        queue: 10,
        isRequests: true,
        children: ['Раздельный', 'Смежный', '2 и более'],
    },
    heating_house: {
        title: 'Отопление',
        isRequests: true,
        sellTypes: ['rent', 'sell'],
        objectTypes: ['house'],
        field: 'heating_house',
        isMultiple: true,
        queue: 11,
        children: [
            'Газовый котёл',
            'Электрический котёл',
            'Твёрдотопливный котёл',
            'Тепловой насос',
        ],
    },
    heating: {
        title: 'Отопление',
        isRequests: true,
        sellTypes: ['rent', 'sell'],
        objectTypes: ['flat'],
        field: 'heating',
        queue: 11,
        children: ['Централизованное', 'Автономное'],
    },
    ceiling_height: {
        title: 'Высота потолка',
        isRequests: true,
        sellTypes: ['rent', 'sell'],
        objectTypes: ['flat', 'house'],
        queue: 12,
        field: 'ceiling_height',
        children: ['2.5', '2.6', '2.75', '2.85', '3', 'Выше 3'],
    },
};

const apartmentFields = {
    rooms: {
        title: 'Количество комнат',
        field: 'rooms',
        sellTypes: ['rent', 'sell'],
        queue: 3,
        objectTypes: ['flat', 'house'],
        children: [].concat(
            [...new Array(10).keys()].map((item) => (item + 1).toString())
        ),
        isRequests: true,
    },
    bedrooms: {
        title: 'Количество спален',
        isRequests: true,
        sellTypes: ['rent', 'sell'],
        objectTypes: ['flat', 'house'],
        field: 'bedrooms',
        queue: 4,
        children: [].concat(
            [...new Array(10).keys()].map((item) => (item + 1).toString())
        ),
    },
    flat_room: {
        title: 'Номер квартиры  (не публикуется)',
        sellTypes: ['rent', 'sell'],
        objectTypes: ['flat'],
        field: 'flat_room',
    },
    entrance: {
        title: 'Номер парадного  (не публикуется)',
        sellTypes: ['rent', 'sell'],
        objectTypes: ['flat'],
        field: 'entrance',
    },
    house_letter: {
        title: 'Буква дома',
        type: 'text',
        queue: 17,
        sellTypes: ['rent', 'sell'],
        objectTypes: ['flat', 'house', 'garage', 'commerce', 'osz'],
        field: 'house_letter',
    },
    housing_complex_title: {
        title: 'Название ЖК',
        type: 'text',
        queue: 19,
        sellTypes: ['rent', 'sell'],
        objectTypes: ['flat', 'commerce', 'garage'],
        field: 'housing_complex_title',
    },
    house_housing_complex_title: {
        title: 'Название КГ',
        type: 'text',
        queue: 19,
        sellTypes: ['rent', 'sell'],
        objectTypes: ['house'],
        field: 'house_housing_complex_title',
    },
};

const apartmentRentChoices = {
    first_rent: {
        title: 'Первая сдача',
        field: 'first_rent',
        sellTypes: ['rent'],
        queue: 5,
        objectTypes: ['flat', 'house'],
        isRequests: true,
        children: ['Да', 'Нет'],
    },
    registration_possibility: {
        title: 'Возможность регистрации',
        field: 'registration_possibility',
        sellTypes: ['rent'],
        objectTypes: ['flat', 'house'],
        queue: 20,
        isRequests: true,
        children: ['Да', 'Нет'],
    },
    cashless_payment: {
        title: 'Безналичная оплата',
        sellTypes: ['rent'],
        objectTypes: ['flat', 'house'],
        queue: 20,
        field: 'cashless_payment',
        isRequests: true,
        children: ['Да', 'Нет'],
    },
};

const apartmentRentMultipleChoices = {};

const houseSellingChoices = {
    house_access_floor: {
        title: 'Подъезд к дому',
        type: 'text',
        sellTypes: ['rent', 'sell'],
        objectTypes: ['house'],
        queue: 12,
        field: 'house_access_floor',
        children: ['Асфальт', 'Грунтовка', 'Не обустроен'],
    },
    area_access_floor: {
        title: 'Подъезд к участку',
        type: 'text',
        sellTypes: ['rent', 'sell'],
        objectTypes: ['areas'],
        queue: 12,
        field: 'area_access_floor',
        children: ['Асфальт', 'Грунтовка', 'Не обустроен'],
    },
    area_inside_of_cottage: {
        title: 'Участок внутри котеджного городка',
        field: 'area_inside_of_cottage',
        sellTypes: ['rent', 'sell'],
        objectTypes: ['areas'],
        queue: 12,
        isRequests: true,
        children: ['Да', 'Нет'],
    },
    inside_of_cottage: {
        title: 'Дом внутри котеджного городка',
        field: 'inside_of_cottage',
        sellTypes: ['rent', 'sell'],
        objectTypes: ['house'],
        queue: 12,
        isRequests: true,
        children: ['Да', 'Нет'],
    },
    access_to_water: {
        title: 'Выход на воду с участка',
        field: 'access_to_water',
        sellTypes: ['rent', 'sell'],
        objectTypes: ['house', 'areas'],
        queue: 12,
        isRequests: true,
        children: ['Да', 'Нет'],
    },
};

const houseSellingFields = {
    yard_area: {
        title: 'Площадь участка, сот',
        field: 'yard_area',
        sellTypes: ['rent', 'sell'],
        queue: 9,
        objectTypes: ['house', 'osz', 'areas'],
        isRequests: true,
    },
    additional_info: {
        title: 'Доп инфо',
        type: 'desc',
        sellTypes: ['rent', 'sell'],
        objectTypes: ['flat', 'house', 'garage', 'commerce', 'osz', 'areas'],
        field: 'additional_info',
    },
};

const houseRentChoices = {
    seasonal_rent: {
        title: 'Возможность аренды на сезон',
        isRequests: true,
        sellTypes: ['rent'],
        objectTypes: ['house'],
        field: 'seasonal_rent',
        children: ['Да', 'Нет'],
    },
};

export const extraChoices = {
    ...apartmentChoices,
    ...apartmentRentChoices,
    ...houseSellingChoices,
    ...houseRentChoices,
    flat_type: {
        title: 'Тип',
        field: 'flat_type',
        sellTypes: ['rent', 'sell'],
        objectTypes: ['flat'],
        isRequests: true,
        queue: 1,
        children: ['Квартира', 'Комната', 'Гостинка', 'Смарт-Квартира'],
    },
    special_purpose: {
        title: 'Целевое назначение',
        field: 'special_purpose',
        sellTypes: ['rent', 'sell'],
        objectTypes: ['areas'],
        queue: 1,
        isRequests: true,
        children: [
            'Земли жилой застройки',
            'Земли общественной застройки',
            'Земли сельскохозяйственного назначения',
            'Земли промышленности',
        ],
    },
    yard_communications: {
        title: 'Коммуникации',
        field: 'yard_communications',
        sellTypes: ['rent', 'sell'],
        objectTypes: ['areas', 'house'],
        queue: 11,
        isRequests: true,
        isMultiple: true,
        children: ['Газ', 'Электричество', 'Вода', 'Канализация'],
    },
    garage_type: {
        title: 'Тип',
        field: 'garage_type',
        sellTypes: ['rent', 'sell'],
        objectTypes: ['garage'],
        queue: 1,
        isRequests: true,
        children: [
            'Паркоместо в крытом паркинге',
            'Паркоместо в открытом паркинге',
            'Гараж',
        ],
    },
    commerce_type: {
        title: 'Тип',
        field: 'commerce_type',
        sellTypes: ['rent', 'sell'],
        objectTypes: ['commerce'],
        queue: 1,
        isRequests: true,
        children: [
            'Офис',
            'Кафе, ресторан',
            'Салон красоты',
            'Торговое помещение',
            'Производственное помещение',
            'Склад',
            'Помещение свободного назначения',
        ],
    },
    has_rentor: {
        title: 'Наличие Арендатора',
        isRequests: true,
        sellTypes: ['sell'],
        objectTypes: ['commerce', 'osz'],
        field: 'has_rentor',
        children: ['Да', 'Нет'],
    },
    restrictions: {
        title: 'Ограничения',
        field: 'restrictions',
        sellTypes: ['rent'],
        isMultiple: true,
        specialQueue: {
            flat: 20,
        },
        objectTypes: ['flat', 'house'],
        children: [
            'Только девушкам',
            'Только парням',
            'Только парам',
            'Можно студентам',
            'Можно интостранцам',
            'Можно с детьми',
            'Можно с питомцами',
            'Можно курить',
        ],
    },
    additional_params: {
        title: 'Дополнительные параметры',
        field: 'additional_params',
        sellTypes: ['rent', 'sell'],
        objectTypes: ['areas'],
        isMultiple: true,
        children: [
            'Возможность поменять целевое под клиента',
            'Участок огорожен забором',
        ],
    },
    house_additional_params: {
        title: 'Дополнительные параметры',
        field: 'house_additional_params',
        sellTypes: ['rent', 'sell'],
        objectTypes: ['house'],
        isMultiple: true,
        children: [
            'Гараж в доме',
            'Бассейн в доме',
            'Бассейн на улице',
            'Сауна',
            'Сигнализация',
            'Дом охраны',
            'Гостевой домик',
        ],
    },
    region: {
        title: 'Область',
        field: 'region',
        queue: 13,
        children: [
            'Киевская область',
            'Харьковская область',
            'Днепровская область',
            'Одесская область',
            'Львовская область',
        ],
        isRequests: true,
    },
    city: {
        title: 'Населенный пункт',
        field: 'city',
        queue: 14,
        isRequests: true,
    },
    street: {
        title: 'Улица',
        type: 'street',
        field: 'street',
        queue: 16,
        isRequests: true,
        children: ['Крещатик'],
    },
    district: {
        title: 'Район',
        type: 'district',
        field: 'district',
        queue: 14,
        isRequests: true,
    },
    microdistrict: {
        title: 'Микрорайон',
        type: 'microdistrict',
        field: 'microdistrict',
        queue: 15,
        isRequests: true,
    },
    constructionYear: {
        title: 'Год постройки',
        field: 'constructionYear',
        queue: 9,
        isRequests: true,
    },
    shareFeeValue: {
        title: 'Комиссия, которой делюсь',
        field: 'shareFeeValue',
        queue: 9,
        isRequests: false,
    },
};

export const extraFields = {
    ...apartmentFields,
    constructionYear: {
        title: 'Год постройки',
        sellTypes: ['rent', 'sell'],
        specialQueue: {
            flat: 9,
        },
        objectTypes: ['flat', 'house'],
        field: 'constructionYear',
        queue: 9,
        isRequests: false,
    },
    totalArea: {
        title: 'Общая площадь м/кв.',
        queue: 9,
        isRequests: true,
        specialQueue: {
            flat: 9,
        },
        sellTypes: ['rent', 'sell'],
        objectTypes: ['flat', 'house', 'osz', 'garage', 'commerce'],
        field: 'totalArea',
    },
    floor: {
        title: 'Этаж',
        field: 'floor',
        sellTypes: ['rent', 'sell'],
        queue: 6,
        objectTypes: ['flat'],
        children: [...new Array(25).keys()].map((item) =>
            (item + 1).toString()
        ),
    },
    storeys: {
        title: 'Этажей в доме',
        field: 'storeys',
        sellTypes: ['rent', 'sell'],
        queue: 7,
        objectTypes: ['flat', 'house'],
        children: [...new Array(25).keys()].map((item) =>
            (item + 1).toString()
        ),
    },
    storeys_osz: {
        title: 'Этажность',
        field: 'storeys',
        isRequests: true,
        queue: 10,
        sellTypes: ['rent', 'sell'],
        objectTypes: ['osz'],
        children: [...new Array(25).keys()].map((item) =>
            (item + 1).toString()
        ),
    },
    livingArea: {
        title: 'Жилая площадь м/кв.',
        sellTypes: ['rent', 'sell'],
        isRequests: false,
        specialQueue: {
            flat: 9,
        },
        queue: 9,
        objectTypes: ['flat', 'house'],
        field: 'livingArea',
    },
    kitchenArea: {
        title: 'Площадь кухни м/кв.',
        sellTypes: ['rent', 'sell'],
        isRequests: true,
        specialQueue: {
            flat: 9,
        },
        queue: 9,
        objectTypes: ['flat', 'house'],
        field: 'kitchenArea',
    },
    parking_number: {
        title: 'Номер паркоместа/гаража (скрыта другим информация)',
        sellTypes: ['rent', 'sell'],
        objectTypes: ['garage'],
        field: 'parking_number',
    },
    payback: {
        title: 'Окупаемость, мес',
        field: 'payback',
        sellTypes: ['sell'],
        objectTypes: ['commerce', 'osz'],
        isRequests: true,
    },
    ...houseSellingFields,
    cadastral_number: {
        title: 'Кадастровый номер',
        sellTypes: ['rent', 'sell'],
        queue: 18,
        objectTypes: ['areas'],
        field: 'cadastral_number',
    },
};

const aprartmentSellingTypes = [
    {
        title: 'Аренда',
        value: 'rent',
        isRequests: true,
        children: [
            {
                title: 'Вторичка',
                value: 'second',
                goTo: 'EditObjectFormScreen',
                choices: { ...apartmentChoices, ...apartmentRentChoices },
                fields: apartmentFields,
                multipleChoices: apartmentRentMultipleChoices,
            },
            {
                title: 'Новостройка',
                value: 'new',
                goTo: 'EditObjectFormScreen',
                choices: apartmentChoices,
                fields: apartmentFields,
                multipleChoices: apartmentRentMultipleChoices,
            },
        ],
        goTo: 'EditObjectFormScreen',
    },
    {
        title: 'Аренда',
        value: 'rent',
        isRequests: false,
        children: [
            {
                title: 'Вторичка',
                value: 'second',
                goTo: 'EditObjectFormScreen',
                choices: { ...apartmentChoices, ...apartmentRentChoices },
                fields: apartmentFields,
                multipleChoices: apartmentRentMultipleChoices,
            },
            {
                title: 'Новостройка',
                value: 'new',
                goTo: 'EditObjectFormScreen',
                choices: apartmentChoices,
                fields: apartmentFields,
                multipleChoices: apartmentRentMultipleChoices,
            },
        ],
        goTo: 'EditObjectFormScreen',
    },
    {
        title: 'Продажа',
        value: 'sell',
        isRequests: false,
        children: [
            {
                title: 'Первичка',
                value: 'first',
                goTo: 'EditObjectFormScreen',
                choices: apartmentChoices,
                fields: apartmentFields,
            },
            {
                title: 'Вторичка',
                value: 'second',
                goTo: 'EditObjectFormScreen',
                choices: apartmentChoices,
                fields: apartmentFields,
            },
            {
                title: 'Переуступка',
                value: 'third',
                goTo: 'EditObjectFormScreen',
                choices: apartmentChoices,
                fields: apartmentFields,
            },
        ],
        goTo: 'EditObjectFormScreen',
    },
    {
        title: 'Покупка',
        value: 'sell',
        isRequests: true,
        children: [
            {
                title: 'Первичка',
                value: 'first',
                goTo: 'EditObjectFormScreen',
                choices: apartmentChoices,
                fields: apartmentFields,
            },
            {
                title: 'Вторичка',
                value: 'second',
                goTo: 'EditObjectFormScreen',
                choices: apartmentChoices,
                fields: apartmentFields,
            },
            {
                title: 'Переуступка',
                value: 'third',
                goTo: 'EditObjectFormScreen',
                choices: apartmentChoices,
                fields: apartmentFields,
            },
        ],
        goTo: 'EditObjectFormScreen',
    },
];

const objectSellingTypes = [
    {
        title: 'Аренда',
        value: 'rent',
        isRequests: true,
        children: buildingType,
        goTo: 'EditObjectFormScreen',
    },
    {
        title: 'Аренда',
        value: 'rent',
        isRequests: false,
        children: buildingType,
        goTo: 'EditObjectFormScreen',
    },
    {
        title: 'Продажа',
        value: 'sell',
        isRequests: false,
        children: buildingType,
        goTo: 'EditObjectFormScreen',
    },
    {
        title: 'Покупка',
        value: 'sell',
        isRequests: true,
        children: buildingType,
        goTo: 'EditObjectFormScreen',
    },
];
const houseSellingTypes = [
    {
        title: 'Аренда',
        value: 'rent',
        isRequests: true,
        children: [
            {
                title: 'Вторичка',
                value: 'second',
                goTo: 'EditObjectFormScreen',
                choices: { ...houseSellingChoices, ...houseRentChoices },
                fields: { ...houseSellingFields },
            },
            {
                title: 'Новостройка',
                value: 'new',
                goTo: 'EditObjectFormScreen',
                choices: { ...houseSellingChoices, ...houseRentChoices },
                fields: houseSellingFields,
            },
        ],
        goTo: 'EditObjectFormScreen',
    },
    {
        title: 'Аренда',
        value: 'rent',
        isRequests: false,
        children: [
            {
                title: 'Вторичка',
                value: 'second',
                goTo: 'EditObjectFormScreen',
                choices: { ...houseSellingChoices, ...houseRentChoices },
                fields: { ...houseSellingFields },
            },
            {
                title: 'Новостройка',
                value: 'new',
                goTo: 'EditObjectFormScreen',
                choices: { ...houseSellingChoices, ...houseRentChoices },
                fields: houseSellingFields,
            },
        ],
        goTo: 'EditObjectFormScreen',
    },
    {
        title: 'Продажа',
        isRequests: false,
        value: 'sell',
        children: [
            {
                title: 'Вторичка',
                value: 'second',
                goTo: 'EditObjectFormScreen',
                choices: houseSellingChoices,
                fields: houseSellingFields,
            },
            {
                title: 'Новостройка',
                value: 'new',
                goTo: 'EditObjectFormScreen',
                choices: houseSellingChoices,
                fields: houseSellingFields,
            },
        ],
        goTo: 'EditObjectFormScreen',
    },
    {
        title: 'Покупка',
        isRequests: true,
        value: 'sell',
        children: [
            {
                title: 'Вторичка',
                value: 'second',
                goTo: 'EditObjectFormScreen',
                choices: houseSellingChoices,
                fields: houseSellingFields,
            },
            {
                title: 'Новостройка',
                value: 'new',
                goTo: 'EditObjectFormScreen',
                choices: houseSellingChoices,
                fields: houseSellingFields,
            },
        ],
        goTo: 'EditObjectFormScreen',
    },
];

export default [
    {
        source: {
            uri:
                'https://marvel-live.freetls.fastly.net/canvas/2019/8/0654fa27b76043fc95305a82ac9f996e?quality=95&fake=.png',
        },
        title: 'Квартиры',
        value: 'flat',
        children: aprartmentSellingTypes,
        goTo: 'AdvertTypeScreen',
    },
    /*{
        source: {
            uri: 'https://marvel-live.freetls.fastly.net/canvas/2019/8/ac2469ef588d4157be86415d8631e54f?quality=95&fake=.png'
        },
		title: 'Комнаты',
		value: 'flat',
		children: objectSellingTypes,
		goTo: 'AdvertTypeScreen',
    },*/
    {
        source: {
            uri:
                'https://marvel-live.freetls.fastly.net/canvas/2019/8/3f08f280a4844355bd0a4959d843cf45?quality=95&fake=.png',
        },
        title: 'Дома, дачи, коттеджи',
        value: 'house',
        children: houseSellingTypes,
        goTo: 'AdvertTypeScreen',
    },
    {
        source: {
            uri:
                'https://marvel-live.freetls.fastly.net/canvas/2019/8/1f29332322004dab9750ea032cb3aa86?quality=95&fake=.png',
        },
        title: 'Гаражи',
        value: 'garage',
        children: objectSellingTypes,
        goTo: 'AdvertTypeScreen',
    },
    {
        source: {
            uri:
                'https://marvel-live.freetls.fastly.net/canvas/2019/8/0f46dbcb4555490590e82f7a34e5b8ee?quality=95&fake=.png',
        },
        title: 'Коммерческая недвижимость',
        value: 'commerce',
        children: objectSellingTypes,
        goTo: 'AdvertTypeScreen',
    },
    {
        source: {
            uri:
                'https://marvel-live.freetls.fastly.net/canvas/2019/8/1f29332322004dab9750ea032cb3aa86?quality=95&fake=.png',
        },
        title: 'ОСЗ',
        value: 'osz',
        children: objectSellingTypes,
        goTo: 'AdvertTypeScreen',
    },
    {
        source: {
            uri:
                'https://marvel-live.freetls.fastly.net/canvas/2019/8/0f46dbcb4555490590e82f7a34e5b8ee?quality=95&fake=.png',
        },
        title: 'Участки',
        value: 'areas',
        children: objectSellingTypes,
        goTo: 'EditObjectFormScreen',
    },
];
