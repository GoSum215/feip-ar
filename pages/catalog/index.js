import Link from 'next/link';
import styles from '../../styles/catalog.module.css'
import Image from 'next/image';
import {useEffect, useState} from 'react';
import Layout from '../../components/layout';
import { prisma } from "../../server/db/client"
import Head from "next/head";
import { useRouter } from 'next/router';

export default function Page( {items} ) {
    const [isFilter, setIsFilter] = useState(false);
    const [isSort, setIsSort] = useState(false);
    const [isArrow1, setIsArrow1] = useState(false);
    const [isArrow2, setIsArrow2] = useState(false);

    const filterWindowClick = () => {
        setIsFilter(isFilter => !isFilter)
        setIsArrow1(isArrow1 => !isArrow1)
        setIsSort(false)
        setIsArrow2(false)
        //console.log(isSort + " + 1")
    }

    const sortWindowClick = () => {
        setIsSort(isSort => !isSort)
        setIsArrow2(isArrow2 => !isArrow2)
        setIsFilter(false)
        setIsArrow1(false)
        //console.log(isSort + " + 1")
    }

    const [isNew, setIsNew] = useState(true);
    const [isWoman, setIsWoman] = useState(false);
    const [isMan, setMan] = useState(false);
    const [isOther, setIsOther] = useState(false);

    
    const filterWoman = () => {
        setIsWoman(isWoman => !isWoman)
        console.log("woman is " + isWoman)
    }
    const filterMan = () => {
        setMan(isMan => !isMan)
        console.log("man is " + isMan)
    }
    const filterOther = () => {
        setIsOther(isOther => !isOther)
        console.log("other is " + isOther)
    }

    const router = useRouter();
    

    const sortNew = () => {
        setIsNew(true)
        router.replace({
            query: { ...router.query, sort: 'new' },
        });
    }

    const sortOld = () => {
        setIsNew(false)
        router.replace({
            query: { ...router.query, sort: 'old' },
        });
    }

    return (
        <Layout>
            <Head>
                <title>Каталог - КиберАтелье</title>
            </Head>
            <div className={styles.description}>
                <div className={styles.desc_1row}>ВЫБЕРИ СВОЙ СТИЛЬ</div>
                <div className={styles.desc_2row}>Здесь представлен каталог самых разных ателье и дизайнеров.
                    <br />
                    Специальные коллекции одежды и аксессуаров от участников проекта Киберателье.</div>
                <div className={styles.header_photo}>
                    <Image className={styles.image} src="/catalog/header_photo_background.jfif" width={3000} height={2000} alt='background'/>
                </div>
                <div className={styles.header_cubes}>
                    <Image className={styles.image} src="/catalog/cubes.png" width={2000} height={1000} alt='cubes'/>
                </div>
                <div className={styles.header_small_cubes}>
                    <Image className={styles.image} src="/catalog/small_cubes.png" width={2240} height={950} alt='small_cubes'/>
                </div>
            </div>

            <div className={styles.filters}>
                <div className={styles.filter_mobile} id={styles.filter_m} onClick={filterWindowClick}>
                    <p className={styles.filter_title_mobile} id={styles.filterName}>ФИЛЬТРЫ</p>
                    <div id={styles.arrow1} className={isArrow1 ? styles.arrow_open + ' ' + styles.arrow : styles.arrow}></div>
                </div>
                <div className={styles.sort_mobile} id={styles.sort_m} onClick={sortWindowClick}>
                    <p className={styles.filter_title_mobile} id={styles.sortName}>СОРТИРОВКА</p>
                    <div id={styles.arrow2} className={isArrow2 ? styles.arrow_open + ' ' + styles.arrow : styles.arrow}></div>
                </div>
                <div className={isFilter ? styles.window_open + ' ' + styles.filter : styles.window_close + ' ' + styles.filter} id={styles.filter}> {/* onClick={filterWindowClick} */}
                    <p className={styles.filter_title}>ДЛЯ КОГО?</p>
                    <form method="get" id={styles.filterForm}>
                        <div className={styles.radio_div} onClick={filterWoman}>
                            <input type="checkbox" className={styles.custom_checkbox} id={styles.woman} name="woman" value="1" /> {/* onchange=""  */}
                            <label for="woman">женская</label>
                        </div>

                        <div className={styles.radio_div} onClick={filterMan}>
                            <input type="checkbox" className={styles.custom_checkbox} id={styles.man} name="man" value="2" />
                            <label for="man">мужская</label>
                        </div>

                        <div className={styles.radio_div} onClick={filterOther}>
                            <input type="checkbox" className={styles.custom_checkbox} id={styles.different} name="different" value="3" />
                            <label for="different">унисекс</label>
                        </div>
                    </form>
                </div>
                <div className={isSort ? styles.window_open + ' ' + styles.sort : styles.window_close + ' ' + styles.sort} id={styles.sort}> {/* onClick={sortWindowClick} */}
                    <p className={styles.filter_title} id={styles.sort_title}>СОРТИРОВКА</p>
                    <form method="get" id={styles.sortForm}>

                        <div className={styles.radio_div} onClick={sortNew}>
                            <input type="checkbox" className={styles.custom_checkbox} id={styles.new} name="sort" value="1" />
                            <label htmlFor="new">сначала новые</label>
                        </div>

                        <div className={styles.radio_div} onClick={sortOld}>
                            <input type="checkbox" className={styles.custom_checkbox} id={styles.old} name="sort" value="2" />
                            <label htmlFor="old">сначала старые</label>
                        </div>
                    </form>
                </div>
                <div className={styles.clear_filter}>
                    <p className={styles.filter_title}>СБРОС</p>
                </div>
            </div>

            <div className={styles.line_parent}>
                <div className={styles.line} id={styles.line}>
                {items.map((item) => (
                    <div className={ !(isWoman || isMan || isOther) || (isWoman && item.gender == 0) || (isMan && item.gender == 1) || (isOther && item.gender == 2) ? "" : styles.hidden_card}>
                        {/* <h1>{item.name}</h1>
                        <p>{item.desc_item}</p>
                        <a href={"https://t.me/" + item.link_tel}>Ссылка на телеграм</a> */}
                        <Link href={"/catalog/" + item.slug}>
                            <div className={styles.card}>
                                <Image src={"/image_db/" + item.img} className={styles.img} alt='model' width={1480} height={2000} />
                                <div className={styles.caption}>{item.name}</div>
                            </div>
                        </Link>
                    </div>
                ))}
                </div>
            </div>
      
        </Layout>
    );
}

export async function getServerSideProps( context ) {
    console.log(context.query.sort)
    console.log(context.query.sort == 'new')
    const sort = (context.query.sort === 'old' ? 'desc' : 'asc')
    // const gen = parseInt(context.query.gender ||= '0')

    const items = await prisma.item.findMany({
        // where : {
        //     'gender' : gen
        // },
        orderBy : [
            {
                'createdAt' : sort
            },
            {
                'id' : sort
            }
        ]
    })
    
    return {
        props: {
            items: JSON.parse(JSON.stringify(items)),
        },
    }
}