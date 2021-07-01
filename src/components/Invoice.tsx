import React, {ReactElement, useEffect, useState} from 'react';
import {InvoiceDoc}                               from '../invoice';
import AddressBlock                               from 'components/AddressBlock';
import InvoiceBlock                               from 'components/InvoiceBlock'


const hellAddr = {
    firstname: "Hell",
    lastname: "Incorporated",
    addr1: "666 Avarice Boulevard",
    city:"Stygia",
    state: "Planes of Torment",
    zip: "00666-0666"

}

function Invoice(): ReactElement {
    let [invoiceDoc, setInvoiceDoc] = useState<InvoiceDoc | null>(null);

    useEffect(() => {
        setTimeout(() => {
            setInvoiceDoc(mock);
        }, 50);
    }, [setInvoiceDoc])

    if (!invoiceDoc) {
        return null;
    }

    return <div className="flex grid grid-cols-3 mt-20 gap-y-10 gap-x-4 p-6 content-start">
        <div className="col-span-2 mb-10">
            <AddressBlock address={hellAddr} />
        </div>
        <div className="w-40 mb-10">
            LOGO
        </div>
        <div>
            <span className="font-bold text-xl">Shipping Info</span>
            <AddressBlock address={invoiceDoc.shipping} />
        </div>
        <div>
            <span className="font-bold text-xl">Billing Info</span>
            <AddressBlock address={invoiceDoc.billing}/>
        </div>


        <InvoiceBlock invoice={invoiceDoc}/>
        <table id={'line-items'} className="col-span-3 text-right">
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
                invoiceDoc.lineItems.map((item, idx) => <tr key={idx}>
                    <td>{item.qty}</td>
                    <td>{item.name}</td>
                    <td>{item.currencySymbol}{item.perEa}</td>
                    <td>{item.currencySymbol}{item.qty * item.perEa}</td>
                </tr>)
            }
            </tbody>
            <tfoot>
                <tr>
                    <td colSpan={3}>Total</td>
                    <td>%%%%</td>
                </tr>
            </tfoot>
        </table>
        <footer>Some kinda footer</footer>
    </div>;
}

const souls = '\u00A4';

const now  = new Date();
const mock = {
    id            : 'invoicenumhere',
    poId          : 'ponumhere',
    createdAt     : now,
    createdBy     : 'demon_3',
    lastModified  : now,
    lastModifiedBy: 'demon_4',
    invoiceDate   : now,
    dueDate       : now,
    department    : 'Pride',
    lineItems     : [{qty: 1, name: 'Elixir of Eternal Youth', perEa: 3000000, currencySymbol: souls, currency: souls}],
    billing       : {
        firstname: 'Guy',
        lastname : 'Dude',
        addr1    : '376 Stupid Lane',
        addr2    : 'Suite #55',
        city     : 'Derp',
        state    : 'KS',
        zip      : '33829-3941'
    },
    shipping      : {
        firstname: 'Guy',
        lastname : 'Dude',
        addr1    : '376 Stupid Lane',
        addr2    : 'Suite #55',
        city     : 'Derp',
        state    : 'KS',
        zip      : '33829-3941'
    }
};


export default Invoice;
