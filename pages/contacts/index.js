import Link from 'next/link';
import styles from "../../styles/contacts.module.css"
import Layout from '../../components/layout';
import Head from "next/head";

export default function Page() {
    return (
        <Layout> 
            <Head>
                <title>Контакты - КиберАтелье</title>
            </Head>
            <div className={styles.contact}>
                <div className={styles.cont_left}>
                    <div className={styles.cont_left_h1}>
                        <a className={styles.left_h1_top}>СВЯЖИТЕСЬ С НАМИ</a>
                        <a className={styles.left_h1_bottom}>ПРЯМО СЕЙЧАС</a>
                    </div>
                    <div className={styles.cont_left_h2}>Оставьте заявку и мы свяжемся с вами в ближайшее время.</div>
                    {/* <div className={styles.success}>Обращение отправленно успешно</div> */}
                    <div className={styles.form_name}>ВАШЕ ИМЯ</div>
                    <div className={styles.form}><input type="text" name="username" placeholder="Мария" /></div> {/* value=""  */}
                    {/* <div className={styles.error}>Ошибка ввода</div> */}
                    <div className={styles.form_name}>ВАША ЭЛЕКТРОННАЯ ПОЧТА</div>
                    <div className={styles.form}><input type="email"  name="useremail" placeholder="maria090@gmail.com" /></div> {/* value=""  */}
                    {/* <div className={styles.error}>Ошибка ввода</div> */}
                    <div className={styles.form_name}>НОМЕР ТЕЛЕФОНА</div>
                    <div className={styles.form}><input type="text" name="theme" placeholder="+70000000000" /></div> {/* value=""  */}
                    {/* <div className={styles.error}>Ошибка ввода</div> */}
                    <div className={styles.form_name}>ТЕКСТ ПИСЬМА</div>
                    <div className={styles.form_message}><textarea name="message" placeholder="Добрый день! Очень нравится ваш проект, хотела бы предложить сотрудничество. Можете рассказать об условиях?"></textarea></div>
                    {/* <div className={styles.error}>Ошибка ввода</div> */}
                    <button form="contact_form" className={styles.form_btn}>ОТПРАВИТЬ ПИСЬМО</button> {/* href="/" */}
                    <div className={styles.personal_data}>Нажимая кнопку, вы даете согласие на <a className={styles.link} href="#">обработку персональных данных</a></div>
                </div>
                <div className={styles.cont_right}>
                    <div className={styles.cont_right_h1}>
                        <a>НАШИ</a>
                        <a className={styles.right_h1_bottom}>КОНТАКТЫ</a>
                    </div>
                    <div className={styles.cont_right_p}>
                        <p className={styles.right_p_bold}>ИДЕЯ КИБЕРАТЕЛЬЕ <a className={styles.right_p_regular} href="https://cyber-brand.ru/o-proekte/">https://cyber-brand.ru/o-proekte/</a></p>
                        <p className={styles.right_p_bold}>ПРИСОЕДИНЯЙТЕСЬ К НАМ <a href="https://t.me/cyberstudio_prim">В ТЕЛЕГРАМ-КАНАЛЕ</a></p> 
                        <p className={styles.right_p_bold}>АДРЕС <a className={styles.right_p_regular}> ул. Тигровая д.7, каб. 611</a></p>
                    </div>
                    <div className={styles.map_frame}>
                        <div className={styles.map}>
                            <Link className={styles.map_town} href="https://yandex.ru/maps/75/vladivostok/?utm_medium=mapframe&utm_source=maps">
                                Владивосток
                            </Link>
                            <Link className={styles.map_street} href="https://yandex.ru/maps/75/vladivostok/house/tigrovaya_ulitsa_7/ZUoHaA9nT0UEWEJuYGJwcHhlYg8=/?ll=131.876034%2C43.114667&utm_medium=mapframe&utm_source=maps&z=17.14">
                                Тигровая улица, 7 — Яндекс Карты
                            </Link>
                            <iframe className={styles.map_link} src="https://yandex.ru/map-widget/v1/-/CCUVU6WsXD" width="100%" height="100%" frameBorder="0" allowFullScreen={true}></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

