import {sData} from "./makeData";

export const sortingFunctions = {
    sortUp: function (item: string, func: any){
        switch (item){
            case 'name':
                return func(()=> [...sData].sort((a,b) => {
                    let decisionA = a.name.toLowerCase(),
                        decisionB = b.name.toLowerCase()
                    if (decisionA > decisionB)
                        return 1
                    if (decisionA < decisionB)
                        return -1
                    return 0
                }))
            case 'gender':
                return func(()=> [...sData].sort((a,b) => {
                    let genderA = a.gender.toLowerCase(),
                    genderB = b.gender.toLowerCase()
                    if (genderA > genderB)
                        return 1
                    if (genderA < genderB)
                        return -1
                    return 0
                }))
            case 'bank':
                 return func(()=> [...sData].sort((a,b) => {
                let bankA = a.bank.toLowerCase(),
                    bankB = b.bank.toLowerCase()
                if (bankA > bankB)
                    return 1
                if (bankA < bankB)
                    return -1
                return 0
            }))
            case 'citizenship':
                return func(()=> [...sData].sort((a,b) => {
                    let citizenshipA = a.citizenship.toLowerCase(),
                        citizenshipB = b.citizenship.toLowerCase()
                    if (citizenshipA > citizenshipB)
                        return 1
                    if (citizenshipA < citizenshipB)
                        return -1
                    return 0
                }))
            case 'patent':
                return func(()=> [...sData].sort((a,b) => {
                    let patentA = a.patent.toLowerCase(),
                        patentB = b.patent.toLowerCase()
                    if (patentA > patentB)
                        return 1
                    if (patentA < patentB)
                        return -1
                    return 0
                }))
            case 'post':
                return func(()=> [...sData].sort((a,b) => {
                    let postA = a.post.toLowerCase(),
                        postB = b.post.toLowerCase()
                    if (postA > postB)
                        return 1
                    if (postA < postB)
                        return -1
                    return 0
                }))
            case 'subdivision':
                return func(()=> [...sData].sort((a,b) => {
                    let subA = a.subdivision.toLowerCase(),
                        subB = b.subdivision.toLowerCase()
                    if (subA > subB)
                        return 1
                    if (subA < subB)
                        return -1
                    return 0
                }))
            case 'subway':
                return func(()=> [...sData].sort((a,b) => {
                    let subwayA = a.subway.toLowerCase(),
                        subwayB = b.subway.toLowerCase()
                    if (subwayA > subwayB)
                        return 1
                    if (subwayA < subwayB)
                        return -1
                    return 0
                }))
            case 'decision':
                return func(()=> [...sData].sort((a,b) => {
                    let decisionA = a.decision.toLowerCase(),
                        decisionB = b.decision.toLowerCase()
                    if (decisionA > decisionB)
                        return 1
                    if (decisionA < decisionB)
                        return -1
                    return 0
                }))
        }
    },
    sortDown: function (item: string, func: any){
        switch (item){
            case 'name':
                return func(()=> [...sData].sort((a,b) => {
                    let decisionA = a.name.toLowerCase(),
                        decisionB = b.name.toLowerCase()
                    if (decisionA > decisionB)
                        return -1
                    if (decisionA < decisionB)
                        return 1
                    return 0
                }))
            case 'gender':
                return func(()=> [...sData].sort((a,b) => {
                    let genderA = a.gender.toLowerCase(),
                        genderB = b.gender.toLowerCase()
                    if (genderA > genderB)
                        return -1
                    if (genderA < genderB)
                        return 1
                    return 0
                }))
            case 'bank':
                return func(()=> [...sData].sort((a,b) => {
                    let bankA = a.bank.toLowerCase(),
                        bankB = b.bank.toLowerCase()
                    if (bankA > bankB)
                        return -1
                    if (bankA < bankB)
                        return 1
                    return 0
                }))
            case 'citizenship':
                return func(()=> [...sData].sort((a,b) => {
                    let citizenshipA = a.citizenship.toLowerCase(),
                        citizenshipB = b.citizenship.toLowerCase()
                    if (citizenshipA > citizenshipB)
                        return -1
                    if (citizenshipA < citizenshipB)
                        return 1
                    return 0
                }))
            case 'patent':
                return func(()=> [...sData].sort((a,b) => {
                    let patentA = a.patent.toLowerCase(),
                        patentB = b.patent.toLowerCase()
                    if (patentA > patentB)
                        return -1
                    if (patentA < patentB)
                        return 1
                    return 0
                }))
            case 'post':
                return func(()=> [...sData].sort((a,b) => {
                    let postA = a.post.toLowerCase(),
                        postB = b.post.toLowerCase()
                    if (postA > postB)
                        return -1
                    if (postA < postB)
                        return 1
                    return 0
                }))
            case 'subdivision':
                return func(()=> [...sData].sort((a,b) => {
                    let subA = a.subdivision.toLowerCase(),
                        subB = b.subdivision.toLowerCase()
                    if (subA > subB)
                        return -1
                    if (subA < subB)
                        return 1
                    return 0
                }))
            case 'subway':
                return func(()=> [...sData].sort((a,b) => {
                    let subwayA = a.subway.toLowerCase(),
                        subwayB = b.subway.toLowerCase()
                    if (subwayA > subwayB)
                        return -1
                    if (subwayA < subwayB)
                        return 1
                    return 0
                }))
            case 'decision':
                return func(()=> [...sData].sort((a,b) => {
                    let decisionA = a.decision.toLowerCase(),
                        decisionB = b.decision.toLowerCase()
                    if (decisionA > decisionB)
                        return -1
                    if (decisionA < decisionB)
                        return 1
                    return 0
                }))
        }
    },
    selectableColumns: ['name', 'gender', 'subway', 'bank', 'citizenship', 'patent', 'post', 'subdivision', 'decision']
}
