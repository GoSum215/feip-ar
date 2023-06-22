import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import { usePathname  } from 'next/navigation';
import { useEffect, useState } from 'react';

const name = 'Your Name';
export const siteTitle = 'Next.js Sample Website';

export default function Layout({ children, home }) {
  const router = usePathname ();
  const [isCatalog, setIsCatalog] = useState(false);
  const [isContacts, setIsContacts] = useState(false);

  useEffect(() => {
      if (router == '/catalog') {
          setIsCatalog(true)
      }
      else{
          setIsCatalog(false)
      }
  
      if (router == '/contacts') {
          setIsContacts(true)
      }
      else {
          setIsContacts(false)
      }
  })

  const [isMenu, setIsMenu] = useState(false);

  const menuButtonClick = () => {
      setIsMenu(isMenu => !isMenu)
  }


  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        {/* <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" /> */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      </Head>

      <header className={styles.header}>
        <div className={styles.leftSide}>
          <Link href="/"><Image src="/layout/logo.svg" alt="logo" width={264} height={34} /></Link>
          <Link className={isCatalog ? styles.active : ''} href="/catalog">Каталог</Link>
          <Link href="https://cyber-brand.ru/o-proekte/">О проекте</Link>
          <Link className={isContacts ? styles.active : ''} href="/contacts">Контакты</Link>
        </div>
        <div className={styles.rightSide}>
          {/* <button className={styles.headBtn}> */}
            <Link className={styles.headBtn} href="/ar">AR-подиум</Link>
          {/* </button> */}
        </div>
      </header>
      <div className={styles.headerMobile}>
        <div className={styles.dropdown}>
            <div className={isMenu ? styles.menu_btn + ' ' + styles.open : styles.menu_btn} id={styles.menu_btn} onClick={menuButtonClick}>
            <div className={styles.menu_btn__burger}></div>
          </div>
          <div className={isMenu ? styles.dropdownContent + ' ' + styles.dropdownContent_open : styles.dropdownContent} id={styles.menu}>
            <Link href="/catalog">Каталог</Link>
            <Link href="https://cyber-brand.ru/o-proekte/">О проекте</Link>
            <Link href="/ar">AR-подиум</Link>
            <Link href="/contacts">Контакты</Link>
            <Link href="https://t.me/cyberstudio_prim">Сообщество</Link>
          </div>
        </div>
        <div className={styles.logo}>
          <Link href="/"><Image src="/layout/logo.svg" height={40} width={310} alt="logo"/></Link> 
        </div>
        <div className={styles.help}></div>
      </div>

    
      <main>{children}</main>
      


      <footer className={styles.footer}>
        <div className={styles.top}>
          <Image src="/layout/logo2.svg" width={264} height={34} alt="logo"/>
          <div className={styles.topText}>
            <Link href="https://www.dvfu.ru/institute_of_mathematics_and_computer_technologies/ob-institute/">Сделано в ИМКТ ДВФУ</Link>
            <p> </p>
            <Link href="https://vvsu.ru/">Совместно с ВВГУ</Link>
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.bottomLeft}>
            <Link href="/catalog">каталог</Link>
            <Link href="https://cyber-brand.ru/o-proekte/">о проекте</Link>
            <Link href="/ar">AR-подиум</Link>
            <Link href="/contacts">контакты</Link>
            <Link href="https://t.me/cyberstudio_prim">сообщество</Link>
          </div>
          <div className={styles.bottomRight}>
            <Link href="https://www.dvfu.ru/"><Image src="/layout/FEFU.svg" width={80} height={49} alt="fefu"/></Link>
          </div>
        </div>
      </footer>
      <div className={styles.footerMobile}>
        <div className={styles.leftFooter}>
          <Link href="/catalog">каталог</Link>
          <Link href="https://cyber-brand.ru/o-proekte/">о проекте</Link>
          <Link href="/ar">AR-подиум</Link>
          <Link href="/contacts">контакты</Link>
          <Link href="https://t.me/cyberstudio_prim">сообщество</Link>
        </div>
        <div className={styles.rightFooter}>
          <Link href="https://www.dvfu.ru/institute_of_mathematics_and_computer_technologies/ob-institute/">Сделано в ИМКТ ДВФУ</Link>
          <Link href="https://vvsu.ru/">Совместно с ВВГУ</Link>
          <Link href="https://www.dvfu.ru/"><Image src="/layout/FEFU.svg" width={150} height={92} alt="fefu" /></Link>
        </div>
      </div>
    </div>
  );
}