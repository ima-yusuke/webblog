import titlePic from "../../public/titlePic.png";
import Image from "next/image";
import styles from "./firstBlog.module.scss";

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
        </article>
      </div>
    </div>
  );
}
export default FirstBlog;
