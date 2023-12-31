"use client";
import titlePic from "../../public/titlePic.png";
import Image from "next/image";
import Pic02 from "../../public/pic-02.jpg";
import Pic03 from "../../public/pic-03.jpg";
import Pic04 from "../../public/pic-04.jpg";
import Pic05 from "../../public/pic-05.jpg";
import Pic06 from "../../public/pic-06.jpg";
import styles from "./firstBlog.module.scss";
import joblists from "./job.json";
import ModalComponent from "./modal";
import { useState } from "react";



function FirstBlog() {

  const openModel =(value)=>{
    setModalDefaultOpen({flag:true,data:value})
  }

  const [modalDefaultOpen, setModalDefaultOpen] = useState({flag:false,data:null});


  return (
    <div className={styles.bgColor}>
      

      <ModalComponent modalDefaultOpen={modalDefaultOpen} setModalDefaultOpen={setModalDefaultOpen}></ModalComponent>

      <div className={styles.firstBlog}>
        <time dateTime="2023-11-16T12:00">2023 / 11 / 16</time>
        <h1>【完全未経験向け】IT業界への転職方法</h1>
        <Image src={Pic06} alt="pic06" className={styles.pics} ></Image>

        {/* title part */}
        <article className={styles.title}>
          <Image src={titlePic} alt="pic01"></Image>
          <p>
            <b>未経験からIT転職したい人</b>
            『未経験でも応募できる企業や求められるレベルを知りたい。IT業界への未経験転職はやめとけ、ブラックなどと聞くが大丈夫かな。興味あるけど30代でも間に合うかな、、、どうやって企業を見つけよう、、、』
          </p>
        </article>
        <p>こういった疑問に答えます。</p>

        {/* agenda part */}
        <article className={styles.agenda}>
          <h2>本記事の内容</h2>
          <ul>
            <li>①未経験でも問題ない理由</li>
            <li>②30代でも転職する方法</li>
            <li>③未経験でも応募できる企業をまとめました</li>
            <li>④未経験の方におすすめな求人サイトのご紹介</li>
          </ul>
        </article>

        {/* 記事の信頼性 */}
        <article>
          <h2>記事の信頼性</h2>
          <p>
            実際に未経験から内定を10社頂いた学習期間1年程度の私が分かりやすく解説します。
          </p>
        </article>

        {/* ①未経験でも問題ない理由 */}
        <article>
          <h2 className={styles.content}>①未経験でも問題ない理由</h2>
          <Image src={Pic02} className={styles.pics} alt="pic02"></Image>
          <p>結論として問題ありません</p>
        </article>

        {/* ②30代でも転職する方法 */}
        <article>
          <h2 className={styles.content}>②30代でも転職する方法</h2>
          <Image src={Pic03} className={styles.pics} alt="pic03"></Image>
          <p>結論として問題ありません</p>
        </article>

        {/* ③未経験でも応募できる企業をまとめました */}
        <article>
          <h2 className={styles.content}>
            ③未経験でも応募できる企業をまとめました
          </h2>
          <Image src={Pic04} className={styles.pics} alt="pic04"></Image>
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th className={styles.tdID}>/</th>
                <th>会社名</th>
                <th>勤務地</th>
              </tr>
            </thead>
            <tbody>
              {joblists.map((value) => {
                return (
                  <tr key={value.ID} onClick={()=>openModel(value)}>
                    <td className={styles.tdID}>{value.ID}</td>
                    <td >{value.name}</td>
                    <td >{value.place}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </article>

        {/* ④未経験の方におすすめな求人サイトのご紹介 */}
        <article>
          <h2 className={styles.content}>
            ④未経験の方におすすめな求人サイトのご紹介
          </h2>
          <Image src={Pic05} className={styles.pics} alt="pic05"></Image>
          <p>結論として問題ありません</p>
        </article>
      </div>
    </div>
  );
}
export default FirstBlog;
