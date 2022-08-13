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
                {/* <CardImage image={image_url}/> */}
                <Image src={book.image_url} alt="img" width={311} height={450}/>
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
