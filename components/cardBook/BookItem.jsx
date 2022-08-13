// import react 
import React from "react";

// import next 
import Link from "next/link";
import Image from "next/image";
// import styles 
import s from "./bookItem.module.css";
import { CardImage } from "../cardImage/CardImage";

const BookItem = ({ book }) => {
    return (
        <div className={s.content__container}>
            <div className={s.card__container}>
                <div ><CardImage image_url={book.image_url} /></div>
                <span className={s.card__name}>{book.name}</span>
                <span className={s.card__price}>{book.price}</span>
                <Link href="">
                    <a>
                        <button className={s.btn__card}>Заказать</button>
                    </a>
                </Link>
            </div>
        </div>
    );
};

export default BookItem;
