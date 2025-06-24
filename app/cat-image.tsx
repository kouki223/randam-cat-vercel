//猫画像を表示するReactコンポーネントを記述する
"use client"

import { useState } from "react"
import { fetchImage } from "./fetch-image"
import styles from "./page.module.css"

type CatImageProps = {
    url: string;
    id: string;
};

export function CatImage({ url, id }: CatImageProps) {
    const [imageUrl, setImageUrl] = useState(url);
    const [imageId, setImageId] = useState(id);

    const freshImage = async() => {
        setImageUrl("");
        const image = await fetchImage();
        setImageUrl(image.url);
        setImageId(image.id);
    };

    return (
        <>
            <h1 className={styles.h1}>この猫のIDは{imageId}</h1>
            <div className={styles.page}>
                <button onClick={freshImage} className={styles.button}>
                    他のニャンコも見る
                </button>
                <div className={styles.frame}>
                    {imageUrl && <img src={imageUrl} className={styles.img}/>}
                </div>
            </div>
        </>
    )
};
