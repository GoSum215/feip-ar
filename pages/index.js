import Link from 'next/link';
import styles from "../styles/homepage.module.css"
// import Slider from "./slider"
import Layout from '../components/layout';
import { prisma } from "../server/db/client"
import Image from 'next/image';
import Head from "next/head";

export default function Page( {items} ) {

  function nextDres(){
    if (typeof window !== 'undefined') {
      let radios = document.querySelectorAll('input[type="radio"]');
      let radiosLen = radios.length;
      let value = 0;
      for (let radio of radios) {
        if (radio.checked) {;
          value = radio.value;
          radio.checked = false;
        }
      }
      value++;
      if(value > radiosLen){
        value = 1;
      }
      for (let radio of radios) {
        if(radio.value == value){
          radio.checked = true;
          if(radio.value == 1){
            document.getElementById("0").style.marginLeft = '0';
          }
          else if(radio.value == 2){
            document.getElementById("0").style.marginLeft = '-25%';
          }
          else if(radio.value == 3){
            document.getElementById("0").style.marginLeft = '-50%';
          }
          else if(radio.value == 4){
            document.getElementById("0").style.marginLeft = '-75%';
          }
        }
      }       
    }
  }

  function prevDres(){
    if (typeof window !== 'undefined') {
      let radios = document.querySelectorAll('input[type="radio"]');
      let radiosLen = radios.length;
      let value = 0;
      for (let radio of radios) {
        if (radio.checked) {;
          value = radio.value;
          radio.checked = false;
        }
      }
      value--;
      if(value == 0){
        value = radiosLen;
      }
      for (let radio of radios) {
        if(radio.value == value){
          radio.checked = true;
          if(radio.value == 1){
            document.getElementById("0").style.marginLeft = '0';
          }
          else if(radio.value == 2){
            document.getElementById("0").style.marginLeft = '-25%';
          }
          else if(radio.value == 3){
            document.getElementById("0").style.marginLeft = '-50%';
          }
          else if(radio.value == 4){
            document.getElementById("0").style.marginLeft = '-75%';
          }             
        }
      }       
    }
  }
    return (
        <Layout>
          <Head>
            <title>КиберАтелье</title>
          </Head>
          <div className={styles.banner}>  {/*style={{backgroundImage: `url("/layout/banner.svg")`}}*/}
            <div className={styles.bannerContent}>
              <p>
                Каталог-витрина
                <span className={styles.bannerText1}> специальных коллекций</span>
                <span className={styles.bannerText2}> от Fashion-дизайнеров и брендов</span>
              </p>
              <Link className={styles.bannerBtn} href='/catalog'>Перейти к каталогу</Link>
            </div>
          </div>
          <div className={styles.divide}></div>
          <div className={styles.info}>
            <div className={styles.infoText}>
              <p className={styles.bold}>В Приморье официально запустили стратегическую программу «Киберателье и креативные индустрии Приморья».</p>
              <p>Ведомственный проект, рассчитанный до 2030 года, по оценке экспертов, поможет не только перевести легкую промышленность края на новый уровень, но и оказать существенное воздействие на экономику региона в целом.</p>
            </div>
          </div>
          <div className={styles.new}>
              <h1>Новинки каталога</h1>
          </div>
          <div className={styles.catalogue}>
            <div className={styles.rectangle}>
              <div className={styles.arrowHolder}>
                <div className={styles.button + ' ' + styles.prev_button} onClick={prevDres}>
                  <i className={styles.arrow + ' ' +  styles.left}></i>
                </div>
                <div className={styles.slides_container}>

                  <input className={styles.input} type="radio" name="r" id="dress1" value="1" checked />
                  <input className={styles.input} type="radio" name="r" id="dress2" value="2" />
                  <input className={styles.input} type="radio" name="r" id="dress3" value="3" />
                  <input className={styles.input} type="radio" name="r" id="dress4" value="4" />

                  <div className={styles.dres_imgs}>
                    {items.map((item, index) => (
                      <div className={styles.slide_image} id={index}>
                        <Image src={"/image_db/" + item.img} alt="1" width={400} height={400}/>
                        <p>{item.name}</p>
                      </div>
                    ))}
                  </div>
                  <Link className={styles.catBtn} href='/catalog'>
                    <button className={styles.catBtn}>перейти</button>
                  </Link>
                </div>
                <div className={styles.button + ' ' +  styles.next_button} onClick={nextDres}>
                  <i className={styles.arrow + ' ' +  styles.right}></i>
                </div>
              </div>
            </div>
            <div className={styles.catMobile}>перейти</div>
          </div>
        </Layout>
    );
}

export async function getServerSideProps() {

  const items = await prisma.item.findMany({ take: 10, })
  
  return {
      props: {
          items: JSON.parse(JSON.stringify(items)),
      },
  }
}
