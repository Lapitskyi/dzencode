interface IGuarantee {
        start: string,
        end: string
}

interface IPrice    {value: number, symbol: string, isDefault: number}

export interface IProducts{
    id: number,
    serialNumber: number,
    isNew: number,
    photo: string,
    title: string,
    type: string,
    specification: string,
    guarantee: IGuarantee,
    price: IPrice[],
    order: number,
    date: string
}




export interface IOrder {
    id: number,
    title: string,
    date: string,
    description: string,
    products: IProducts[]
}