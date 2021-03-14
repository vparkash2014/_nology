import styles from './ArticleCard.module.scss';

const ArticleCard = () => {
    return (
        <div>
            <h1 className={styles.ArticleCard_header}>This is an article</h1>
            <p><span className={styles.ArticleCard_text__bold}>Meghan Markle</span> blah blah</p>
            <p><span className={styles.ArticleCard_text__bold}>Prince Harry</span> blah blah</p>
        </div>
    )
}

export default ArticleCard;