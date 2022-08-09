import React from 'react';

// import next 
import Link from 'next/link';
// import styles 
import s from './dropDownMenu.module.css'

// import Components 
import Frontend from '../../../pages/Frontend';
const DropDown = () => {
    return (
        <div>
            <div class={s.dropdown}>
                <span class={s.dropbtn}>Категория</span>
                <div class={s.dropdown__content}>
                    <Link href="/Frontend"><a>Frontend</a></Link>
                    <Link href="/Backend"><a> Backend</a></Link>
                    <Link href="/Mobile"><a>Mobile dev</a></Link>
                    <Link href="/Hacking"><a>Ethical hacking</a></Link>
                    <Link href="/Linux"><a>Linux</a></Link>
                </div>
            </div>
        </div>
    );
};

export default DropDown;