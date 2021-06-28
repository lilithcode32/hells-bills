import React, {ReactElement, useEffect, useState} from 'react';
import {InvoiceDoc} from '../invoice';
import AddressBlock                               from 'components/AddressBlock';

function Invoice() : ReactElement {
    let [invoiceDoc, setInvoiceDoc] = useState<InvoiceDoc | null>(null);

    useEffect(()=>{
        setTimeout(()=>{
            setInvoiceDoc(mock);
        },50);
    }, [])

    if(!invoiceDoc) return null;

    return <div>
        <AddressBlock address={invoiceDoc.shipping} />
        <AddressBlock address={invoiceDoc.billing} />
        <div>invoice block</div>
        <table id={"line-items"}>
            <thead>
            <tr>
                <th>Qty</th>
                <th>Description</th>
                <th>Unit Price</th>
                <th>Cost</th>
            </tr>
            </thead>
            <tbody>
            {
                invoiceDoc.lineItems.map((item, idx )=> <tr key={idx}>
                    <td>{item.qty}</td>
                    <td>{item.name}</td>
                    <td>{item.currencySymbol}{item.perEa}</td>
                    <td>{item.currencySymbol}{item.qty * item.perEa}</td>
                </tr>)
            }
            </tbody>
        </table>
    </div>;
}
const souls = "\u00A4";

const now = new Date();
const mock = {
    id: "invoicenumhere",
    poId: "ponumhere",
    createdAt: now,
    createdBy: "demon_3",
    lastModified: now,
    lastModifiedBy: "demon_4",
    invoiceDate: now,
    dueDate: now,
    department: "Pride",
    lineItems: [{qty:1, name:"Elixir of Eternal Youth", perEa:3000000, currencySymbol:souls, currency:souls}],
    billing: {
        firstname: "Guy",
        lastname: "Dude",
        addr1: "376 Stupid Lane",
        addr2: "Suite #55",
        city: "Derp",
        state: "KS",
        zip:"33829-3941"
    },
    shipping: {
        firstname: "Guy",
        lastname: "Dude",
        addr1: "376 Stupid Lane",
        addr2: "Suite #55",
        city: "Derp",
        state: "KS",
        zip:"33829-3941"
    }
};


export default Invoice;
