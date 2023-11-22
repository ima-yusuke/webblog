import Link from "next/link";
import styles from "./nav.module.scss";

function Nav() {
  return (
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href="../../blog-one" className={styles.link}>
              未経験からのIT転職方法
            </Link>
          </li>
          <li>
            <Link href="../../blog-two" className={styles.link}>
              SESの実態
            </Link>
          </li>
          <li>
            <Link href="../../blog-one" className={styles.link}>
              N+1問題とは
            </Link>
          </li>
        </ul>
      </nav>
  );
}
export default Nav;
