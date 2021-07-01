import React, {ReactElement} from 'react';
import {InvoiceDoc}            from '../invoice';
import moment from 'moment';

export default function InvoiceBlock({invoice}: {invoice:InvoiceDoc}): ReactElement{

    const {id, poId, department, invoiceDate, dueDate } = invoice;
    return (
        <div className="">
            <div>Invoice # <span className="float-right">{id}</span></div>
            <div>Invoice Date <span className="float-right">{moment(invoiceDate).format('M/D/yyyy')}</span></div>
            <div>Due Date<span className="float-right">{moment(dueDate).format('M/D/yyyy')}</span></div>
            <div>Department<span className="float-right">{department}</span></div>
            <div>Purchase Order # <span className="float-right">{poId}</span></div>
        </div>
    )
}
