export interface LineItem {
    qty: number,
    name: string,
    perEa: number,
    currency: string,
    currencySymbol: string
}

export interface AddrInfo {
    firstname: string,
    lastname: string,
    addr1: string,
    addr2?: string,
    city: string,
    state: string,
    zip: string
}

export interface BillInfo extends AddrInfo {
    accounts?: Array<string>
}

export interface ShipInfo extends AddrInfo {
    tracking?: Array<string>
}

export interface InvoiceDoc {
    id: string,
    poId: string,
    createdAt: Date,
    createdBy: string,
    lastModified: Date,
    lastModifiedBy: string,
    invoiceDate: Date,
    dueDate: Date,
    department: string,
    lineItems: Array<LineItem>,
    billing: BillInfo,
    shipping: ShipInfo
}
