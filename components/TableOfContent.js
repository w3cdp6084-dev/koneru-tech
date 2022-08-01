import styles from "../styles/components/TableOfContents.module.scss"

export const TableOfContents = ({ toc }) => {
    return (
      <div className={styles.wrapToc}>
        <p className={styles.titleH2}>目次</p>
        <ul className={styles.list}>
          {toc.map(data => (
            <li key={data.id}>
              <a href={`#${data.text}`}>
                {data.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  };