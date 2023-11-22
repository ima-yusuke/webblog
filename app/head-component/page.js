import styles from "./head.module.scss";

function HeadComponent(){
    return(
        <>
            <div className={styles.headComponent}>
                <h1>Yusuke Blog</h1>
                <p>Written by Yusuke Imai</p>
            </div>
        </>
    )
}
export default HeadComponent