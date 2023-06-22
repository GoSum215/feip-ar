import styles from "../../styles/ar.module.css"
import Head from "next/head";
import Link from "next/link";
import Image from 'next/image';
import Layout from "../../components/layout";

export default function Page({}) {

  return (
    <Layout>
        <Head>
            {/* <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">
            <link rel="stylesheet" href="new_style.css">
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;1,100;1,300&display=swap" rel="stylesheet">
            <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;1,100;1,300&display=swap" rel="stylesheet">
            <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,900;1,100;1,300&display=swap" rel="stylesheet"> */}
            <title>AR подиум - КиберАтелье</title>
        </Head>

        <div className={styles.main}>
            <div className={styles.returning_url_div}>
                <Link id="url_btn" href="/catalog"> ВЕРНУТЬСЯ В КАТАЛОГ</Link>
            </div>
            <div className={styles.label_div}>
                <div className={styles.page_name}>ar-подиум</div>
                <div className={styles.dress_name_main}>платье Goranskaya 1</div>
            </div>

            <div className={styles.description_div}>
                <div className={styles.description_main}>
                <div className={styles.dress_name} id="mobile_dress_name">платье Goranskaya 1</div>
                <div className={styles.description}>Платье выполнено в сочетании морского и спортивного стиля. Широкие трикотажные брюки, красно-белая тельняшка с вышивкой-аппликацией «Тигр» и жилет из трикотажного полотна дополняет образ и подчеркивает Приморский характер.</div>
                </div>
            </div>

            <div className={styles.AR_div}>
                <div className={styles.circle} id="load" ></div>
                <iframe className={styles.mainAR} id="iframeAR" src="/ar/ar_content"></iframe>
            </div>

            <div className={styles.line}></div>

            <div className={styles.decoration}>
                <p>выберите модель из каталога</p>
                <div className={styles.blue_line}></div>
            </div>

            <div className={styles.slider_div}>
                <div className={styles.left_button}> {/* onclick="prev_button()" */}
                <Image alt='arrow' width={9} height={16} src="/ar/left-arrow.png" />
                </div>
                <div className={styles.place_slider_div}>

                {/* <input type="radio" name="r" id="dress1" value="1" checked />
                <input type="radio" name="r" id="dress2" value="2" />
                <input type="radio" name="r" id="dress3" value="3" />
                <input type="radio" name="r" id="dress4" value="4" /> */}
                <div className={styles.dress_div} id="slide">
                    <div className={styles.dress_main} id="1">
                    <Image alt='model' width={400} height={400} src="/ar_assets/image1.svg" id="d_i" />
                    <p className={styles.dress_name}>Alexander Varlakov Limited</p>
                    </div>
                </div>    
                </div>
                <div className={styles.right_button}> {/* onclick="next_button();" */}
                <Image alt='arrow' width={9} height={16} src="/ar/right-arrow.png" />
                </div>
            </div>
                        
                <div className={styles.come_back_div}>
                <a href="/catalog">Перейти к каталогу</a>
            </div>
            </div>
        <script>
            onload();
        </script>
    </Layout>
  );
}