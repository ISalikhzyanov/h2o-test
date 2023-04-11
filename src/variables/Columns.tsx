export interface Column {
    id: 'serial' | 'name' | 'person_id' | 'gender' | 'phone' | 'bDate' | 'subway' | 'bank' | 'adress' | 'card_number' | 'citizenship' | 'passport' | 'validity' | 'issued_by' | 'bPlace' | 'registration' | 'patent_validaty' | 'patent' | 'snils' | 'inn' | 'medical_book' | 'post' | 'subdivision' | 'decision' | 'source' | 'decision_date' | 'remark'
    label: string;
    minWidth?: number;
    maxWidth?: number;
    align?: 'right' | 'center';
}

export const columns: Column[] = [
    { id: 'serial', label: '№'},
    { id: 'name', label: 'Имя сотрудника', align: 'right', maxWidth: 100 },
    { id: 'person_id', label: 'ID Номер', minWidth: 100 },
    { id: 'phone', label: 'Телефорн', minWidth: 100 },
    {
        id: 'gender',
        label: 'Пол',
        minWidth: 170,
        align: 'right',
    },
    {
        id: 'bDate',
        label: 'Дата рождения',
        minWidth: 170,
        align: 'right',
    },
    {
        id: 'subway',
        label: 'Метро',
        minWidth: 170,
        align: 'center',

    },
    {
        id: 'adress',
        label: 'Адрес проживания',
        minWidth: 170,
        align: 'center'
    },
    {
        id: 'bank',
        label: "Банк",
        minWidth: 170,
        align: 'center'
    },
    {
        id: 'card_number',
        label: 'Номер карты',
        minWidth: 170,
        align: 'center'
    },
    {
        id: 'citizenship',
        label: 'Гражданство',
        minWidth: 170,
        align: 'center'
    },
    {
        id: 'passport',
        label: 'Паспорт',
        minWidth: 170,
        align: 'center'
    },
    {
        id: 'issued_by',
        label: 'Кем выдан',
        minWidth: 170,
        align: 'center'
    },
    {
        id: 'validity',
        label: 'Срок действия',
        minWidth: 170,
        align: 'center'
    },
    {
        id: 'bPlace',
        label: 'Место рождения',
        minWidth: 170,
        align: 'center'
    },
    {
        id: 'registration',
        label: 'Адрес прописки',
        minWidth: 170,
        align: 'center'
    },
    {
        id: 'patent',
        label: 'Патент',
        minWidth: 170,
        align: 'center'
    },
    {
        id: 'patent_validaty',
        label: 'Срок действия',
        minWidth: 170,
        align: 'center'
    },
    {
        id: 'snils',
        label: 'СНИЛС',
        minWidth: 170,
        align: 'center'
    },
    {
        id: 'inn',
        label: 'ИНН',
        minWidth: 170,
        align: 'center'
    },
    {
        id: 'medical_book',
        label: 'Медкнижка',
        minWidth: 170,
        align: 'center'
    },
    {
        id: 'post',
        label: 'Должность',
        minWidth: 170,
        align: 'center'
    },
    {
        id: 'subdivision',
        label: 'Подразделение',
        minWidth: 170,
        align: 'center'
    },
    {
        id: 'decision',
        label: 'Решение',
        minWidth: 170,
        align: 'center'
    },
    {
        id: 'source',
        label: 'Источник',
        minWidth: 170,
        align: 'center'
    },
    {
        id: 'decision_date',
        label: 'Дата',
        minWidth: 170,
        align: 'center'
    },
    {
        id: 'remark',
        label: 'Примечание',
        minWidth: 170,
        align: 'center'
    }
];
