import Link from 'next/link';
import styles from '../../../styles/catalog-item.module.css'
import Image from 'next/image';
import {useRef, useEffect, useState} from 'react';
import Layout from '../../../components/layout';
import { prisma } from "../../../server/db/client"
import { useRouter } from 'next/router';
import Head from "next/head";

let router;

export default function Page( {items} ) {

    const router = useRouter();

  return (
    <Layout>
        <Head>
            <title>Каталог - КиберАтелье</title>
        </Head>
        {items.map((item) => (
            <div className={router.query.slug != item.slug ? styles.hidden_content : ''}>
                <div className={styles.all}> {/* + ' ' +  */}
                    <div className={styles.content}>
                        <div className={styles.back_mobile}>
                            <Link href="/catalog"> Вернуться в каталог</Link>
                        </div>
                        <div className={styles.name_mobile}>{item.name}</div>
                        
                        <div className={styles.images}>
                            <Image src={"/image_db/" + item.img} className={styles.main_photo} alt='model' width={1480} height={2200} />
                        </div>
                    </div>
                    <div className={styles.description}>
                        <div className={styles.back}>
                            <Link href="/catalog"> Вернуться в каталог</Link>
                        </div>
                        <div className={styles.name}>{item.name}</div>
                        <div className={styles.desc}>{item.desc_item}</div>
                        <div className={styles.ar_button}>
                            <Link href="/">СМОТРЕТЬ в AR</Link>
                        </div>
                        <div className={styles.horizontal_line}></div>
                        <div className={styles.designer}>О ДИЗАЙНЕРЕ И БРЕНДЕ</div>
                        <div className={styles.info}>{item.info1}</div>
                        <div className={styles.link_telegram}>
                            <Link href={"https://t.me/" + item.link_tel}>TELEGRAM ДИЗАЙНЕРА</Link>
                        </div>
                        <div className={styles.info}>{item.info2}</div>
                    </div>
                </div>
            </div>
        ))}
    </Layout>
  );
}

export async function getServerSideProps() {
    const items = await prisma.item.findMany({})
    
    return {
        props: {
            items: JSON.parse(JSON.stringify(items)),
        },
    }
  }
