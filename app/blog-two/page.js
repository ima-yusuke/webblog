import titlePic from "../../public/titlePic.png";
import Image from "next/image";
import Pic02 from "../../public/pic-02.jpg";
import Pic03 from "../../public/pic-03.jpg";
import Pic04 from "../../public/pic-04.jpg";
import Pic09 from "../../public/pic-09.jpg";
import Pic10 from "../../public/pic-10.jpg";
import Pic11 from "../../public/pic-11.jpg";
import Pic12 from "../../public/pic-12.jpg";
import Pic07 from "../../public/pic-07.png";
import Pic08 from "../../public/pic-08.png";
import styles from "./twoBlog.module.scss";

function SecondBlog() {
  return (
    <div className={styles.bgColor}>
      <div className={styles.firstBlog}>
        <time datetime="2023-11-16T12:00">2023 / 11 / 22</time>
        <h1>【初心者向けに解説】SESとは?</h1>
        <Image src={Pic09} alt="pic09" className={styles.pics}></Image>

        {/* title part */}
        <article className={styles.title}>
          <Image src={titlePic} alt="pic01"></Image>
          <p>
            <b>SESについて気になる人</b>
            『SESの働き方や自社開発との違いなど実態を知りたい。SESへの転職はやめとけ、ブラックなどと聞くが大丈夫かな、、、派遣との違いや契約形式についても気になる、、、』
          </p>
        </article>
        <p>こういった疑問に答えます。</p>

        {/* agenda part */}
        <article className={styles.agenda}>
          <h2>本記事の内容</h2>
          <ul>
            <li>①SESの契約形式・派遣契約との違いは?</li>
            <li>②SESの闇</li>
            <li>③自社開発・受託開発・SIerの特色まとめ</li>
          </ul>
        </article>

        {/* 記事の信頼性 */}
        <article>
          <h2>記事の信頼性</h2>
          <p>
            実際に50社以上SES企業との面接経験がある私が分かりやすく解説します。
          </p>
        </article>

        <section className={styles.main}>
        {/* ①SESの契約形式・派遣契約との違いは? */}
        <article>
          <h2 className={styles.content}>
            ①SESの契約形式・派遣契約との違いは?
          </h2>
          <Image src={Pic10} className={styles.pics} alt="pic10"></Image>
          <p>SESとは、System Engineering Serviceの略称で、システム開発における委託契約のひとつです。</p>
          <h3 className={styles.content2}>SESの契約形式</h3>
          <p>
            よくある契約方法としては業務委託契約となり大きく下記二つに分かれます
          </p>
          <br></br>

          {/* ①請負契約とは */}
          <article>
            <h5>①請負契約</h5>
            <p>A社からB社に対し『仕事を任せるから完成させてくれ』というもの</p>
            <p>
              ⇒この<span>完成した成果物に対して</span>
              A社がB社にお金を払うよって契約
              (基本、好きな場所で好きな時間に働いてOK)
            </p>
          </article>
          
          <hr></hr>

          {/* ②準委任契約とは */}
          <article>
            <h5>②準委任契約</h5>
            <p>
              A社からB社に対し『仕事を任せるからとにかくA会社(客先)に来て働いてくれ』というもの
            </p>
            <p>
              ⇒アプリ、システムなど<span>完成しなくても</span>
              、とにかく働いた時間分だけ払うよって契約
            </p>
          </article>

          <h5>SESは上記②<span>準委任契約</span>になる</h5>

          {/* 派遣契約との違い */}
          <article>
            <h3 className={styles.content2}>派遣契約との違い</h3>
            <p>派遣契約の場合、国の許可や細かい規定がある。</p>
            <p>
              ⇒つまり『準委任契約』のが企業としては楽でIT業界ではこの準委任契約が主流
            </p>
            <br></br>
            <hr></hr>
            <br></br>
            <p>〜注意点〜</p>
            <Image src={Pic07} className={styles.pics2} alt="pic07"></Image>
            <p className={styles.example}>
              B社(SES)に所属の太郎くんがA社に客先常駐で行くことになった。
              <b>『準委任契約』</b>のこの場合A社の人は
              <span>太郎くんに直接指示してはいけない</span>
              決まりがある。何か指示をしたい場合、A社はB社に対して作業依頼をしてB社から太郎くんに指示をしないといけない
            </p>
            <p>
              A社 :『太郎くんに〇〇の作業をお願いしたいんだが』<br></br>
              <span>※ここで直接太郎くんに指示してはいけない</span>
            </p>
            <p>B社 :『承知致しました。それでは弊社から太郎に指示します』</p>
            <p>
              B社 :『太郎くん、A社から〇〇の作業依頼が来てるんだけど、、、』
              <br></br>
              <span>※B社から太郎くんへ指示</span>
            </p>
            <p>
              とこのような手順を踏まないといけません。これが
              <span>
                『派遣契約』だとA社から太郎くんに直接指示することができます。
              </span>
            </p>
          </article>
        </article>

        {/* ②SESの闇 */}
        <article>
          <h2 className={styles.content}>②SESの闇</h2>
          <Image src={Pic11} className={styles.pics} alt="pic11"></Image>
          <p>
            上記①の注意点の所で『派遣契約』との違いを説明しましたが、これがSESの闇と関係しています。
          </p>

          {/* ①偽装請負 */}
          <article>
            <h5 className={styles.content2}>【SESの闇①】偽装請負</h5>
            <p>
              『派遣契約』を結ばずに労働者派遣を行うこと。つまり『準委任契約』なのに常駐先から直接指示を受ける状況。
            </p>
            <p>
              ※常駐先からしたら契約先の企業を通して指示するより直接エンジニアにしたほうが早くて楽。なので違法だがこっそり直接指示してることが多々ある。
            </p>
          </article>

          {/* ②多重構造 */}
          <article>
            <h5 className={styles.content2}>【SESの闇②】多重構造</h5>
            <p>
              多重構造になっており、どんどんピンハネしていくのでエンジニアに届く給料が低くなる
            </p>
            <p>
              ピンハネ :
              A社が自社の儲け分を引いてB社に。B社も自社の儲け分を引いてC社に。このような構造なので下に行くほど取り分が低くなる
            </p>
            <Image alt="pic-08" src={Pic08} className={styles.pics2}></Image>
          </article>
        </article>

        {/* ③自社開発・受託開発・SIerの特色まとめ*/}
        <article>
          <h2 className={styles.content}>
            ③自社開発・受託開発・SIerの特色まとめ
          </h2>
          <Image src={Pic12} className={styles.pics} alt="pic12"></Image>
          <p>『SES』の他にもエンジニアとして下記3つの働き方があります。</p>

          {/* 自社開発の特色 */}
          <article>
            <h5 className={styles.content2}>自社開発</h5>
            <ul>
              <li>
                自社でサービスを開発してるのでチャレンジしやすい社風が多い
              </li>
              <li>
                新しい技術などを使用し他社と差別化しようとするのでどんどん新しい技術が使える
                <br></br>
                ⇒その一方で常に新しい技術に関心を持ち、キャッチアップしていく必要がある
              </li>
              <li><span>最も技術力を付けやすい</span></li>
              <li>
                ただ、既に存在し運営しているアプリやサービスの開発の場合、モダンな言語に切り替えることで失敗した場合、1時間止まるだけでユーザーが大量に減る大損失になる可能性がある。なので基本的に現在使ってる言語でのみの開発になりがちなデメリットもある。スタートアップの企業や新しく始めたものに関してはモダンな技術使ってることも多い。
              </li>
            </ul>
          </article>

          {/* 受託開発 (Web制作)の特色 */}
          <article>
            <h5 className={styles.content2}>受託開発 (Web制作) </h5>
            <ul>
              <li>webページ、webサービスを受託開発してる企業</li>
              <li>自社開発と使用技術やカルチャー似てる</li>
              <li><span>会社ホームページやキャンペーンサイトのみを作ってる会社が多く、市場価値の低い技術しか身につかない企業もある</span></li>
            </ul>
          </article>

          {/* SIerの特色 */}
          <article>
            <h5 className={styles.content2}>SIer</h5>
            <ul>
              <li>企業のシステム構築を請け負う企業のこと</li>
              <li>大規模プロジェクトのマネジメントを経験できるのがポイント</li>
              <li>固くて年功序列の企業が多い</li>
              <li>大手企業だと待遇が良い</li>
              <li>大規模なプロジェクトになると失敗すると怖いのでモダンな技術より古くからある安定な言語を使いがち<br></br>⇒<span>枯れた技術を使うことが多く、技術力が身につきにくい傾向にある</span></li>
              <li>多重請負構造でさらに納期もあるので労働環境がブラック化しやすい</li>
            </ul>
          </article>


        </article>
        </section>
      </div>
    </div>
  );
}
export default SecondBlog;
