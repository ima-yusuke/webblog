import titlePic from "../../public/titlePic.png";
import Image from "next/image";
import Pic02 from "../../public/pic-02.jpg";
import Pic03 from "../../public/pic-03.jpg";
import Pic04 from "../../public/pic-04.jpg";
import Pic05 from "../../public/pic-05.jpg";
import styles from "./firstBlog.module.scss";
import joblists from "./job.json";

function FirstBlog() {
  return (
    <div className={styles.bgColor}>
      <div className={styles.firstBlog}>
        <h1>未経験からのIT業界への転職ロードマップ</h1>

        {/* title part */}
        <article className={styles.title}>
          <Image src={titlePic}></Image>
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
          <Image src={Pic02} className={styles.pics}></Image>
          <p>結論として問題ありません</p>
        </article>

        {/* ②30代でも転職する方法 */}
        <article>
          <h2 className={styles.content}>②30代でも転職する方法</h2>
          <Image src={Pic03} className={styles.pics}></Image>
          <p>結論として問題ありません</p>
        </article>

        {/* ③未経験でも応募できる企業をまとめました */}
        <article>
          <h2 className={styles.content}>
            ③未経験でも応募できる企業をまとめました
          </h2>
          <Image src={Pic04} className={styles.pics}></Image>
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th>会社名</th>
                <th>勤務地</th>
                <th>リモート</th>
                <th>種類</th>
                <th>働き方</th>
                <th>面接</th>
                <th>研修</th>
              </tr>
            </thead>
            <tbody>
              {joblists.map((value) => {
                return (
                  <tr>
                    <td>{value.name}</td>
                    <td>{value.place}</td>
                    <td>{value.remote}</td>
                    <td>{value.type}</td>
                    <td>{value.workstyle}</td>
                    <td>{value.interview}</td>
                    <td>{value.training}</td>
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
          <Image src={Pic05} className={styles.pics}></Image>
          <p>結論として問題ありません</p>
        </article>
      </div>
    </div>
  );
}
export default FirstBlog;
