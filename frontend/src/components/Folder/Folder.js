import styles from "./Folder.module.scss";

const Folder = (props) => {
  const selectHandler = () => {
    props.selectFolder(props.folder);
  };

  const deleteHandler = () => {
    props.deleteFolder(props.folder);
  };

  return (
    <div className={styles.folder}>
      <div className={styles.folder__details} onClick={selectHandler}>
        <span className={styles.folder__details__icon}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M21.669 11l-1.385 9h-16.568l-1.385-9h19.338zm-13.697-9h-6.972l.714 5h2.021l-.429-3h3.694c1.112 1.388 1.952 2 4.277 2h9.283l-.2 1h2.04l.6-3h-11.723c-1.978 0-2.041-.417-3.305-2zm16.028 7h-24l2 13h20l2-13z" />
          </svg>
        </span>
        <p className={styles.folder__details__name}>{props.folder.name}</p>
      </div>
      <span className={styles.folder__delete} onClick={deleteHandler}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M3 8v16h18v-16h-18zm5 12c0 .552-.448 1-1 1s-1-.448-1-1v-8c0-.552.448-1 1-1s1 .448 1 1v8zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-8c0-.552.448-1 1-1s1 .448 1 1v8zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-8c0-.552.448-1 1-1s1 .448 1 1v8zm4-15.375l-.409 1.958-19.591-4.099.409-1.958 5.528 1.099c.881.185 1.82-.742 2.004-1.625l5.204 1.086c-.184.882.307 2.107 1.189 2.291l5.666 1.248z" />
        </svg>
      </span>
    </div>
  );
};

export default Folder;
