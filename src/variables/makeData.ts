import serverData from "../data/data.json";

export type Person = {
    serial: number
    name: string
    person_id: string
    phone: string
    gender: string
    bDate: string
    subway: string
    adress: string
    bank: string
    card_number: string
    citizenship: string
    passport: string
    issued_by: string
    validity: string
    bPlace: string
    registration: string
    patent: string
    patent_validaty: string
    snils: string
    inn: string
    medical_book: string
    post: string
    subdivision: string
    decision: string
    source: string
    decision_date: string
    remark: string
}
// @ts-ignore
export const sData: Data[] = serverData.map( item => {item.serial = serverData.indexOf(item) + 1; return item})

export const tableData = {
    getData: () => {
        return Promise.resolve({
            data: sData
        })
    }
}


