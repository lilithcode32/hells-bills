import React, {ReactElement} from 'react';
import {AddrInfo}            from '../invoice';

export default function AddressBlock({address, className}: {address:AddrInfo, className?:string}): ReactElement{

    const {firstname, lastname, addr1, addr2, city, state, zip} = address;
    return (
        <address className={className}>
            <div>{firstname} {lastname}</div>
            <div>{addr1}</div>
            <div>{addr2}</div>
            <div>{city}, {state}, {zip}</div>
        </address>
    )
}
