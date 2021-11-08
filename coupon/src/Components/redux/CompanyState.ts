import Company from "../models/Company";


export class CompanyState {
    public Companies: Company[] = [];
}

export enum CompanyActionType {
    CompanyAdd = "CompanyAdd",
    CompanyUpdate = "CompanyUpdate",
    CompanyDelete = "CompanyDelete",
    CompanyDownloaded = "CompanyDownloaded",
}

export interface CompanyAction {
    type: CompanyActionType,
    payload?: any,
}

//action functions

export function CompanyAddAction(Companies: Company[]): CompanyAction {
    return { type: CompanyActionType.CompanyAdd, payload: Companies }
}

export function CompanyUpdateAction(Companies: Company[]): CompanyAction {
    return { type: CompanyActionType.CompanyUpdate, payload: Companies }
}

export function CompanyDeleteAction(Companies: Company[]): CompanyAction {
    return { type: CompanyActionType.CompanyDelete, payload: Companies }
}

export function CompanyDownloadedAction(Companies: Company[]): CompanyAction {
    return { type: CompanyActionType.CompanyDownloaded, payload: Companies }
}

//reducer
export function companyReducer(currentState: CompanyState = new CompanyState(), action: CompanyAction): CompanyState {
    const newState = { ...currentState }; //spread variable

    switch (action.type) {
        case CompanyActionType.CompanyAdd:
            newState.Companies = action.payload;
            break;
        case CompanyActionType.CompanyUpdate:
            newState.Companies = action.payload;
            break;
        case CompanyActionType.CompanyDelete:
            newState.Companies = action.payload;
            break;
        case CompanyActionType.CompanyDownloaded:
            newState.Companies = action.payload;
            break;
    }

    return newState;
}