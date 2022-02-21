import styles from "./NewFolder.module.scss";

const NewFolder = (props) => {
  const submitHandler = (e) => {
    e.preventDefault();
    if (e.target.name.value.length > 0) {
      props.addFolder({
        name: e.target.name.value,
      });
      e.target.name.value = "";
    } else {
      alert("Please enter a folder name");
    }
  };
  return (
    <form className={styles.folder_form} onSubmit={submitHandler}>
      <input
        type="text"
        className={styles.folder_form__input}
        name="name"
        placeholder="New Folder"
      />
      <input
        type="submit"
        className={styles.folder_form__submit}
        value="Add Folder"
      />
    </form>
  );
};

export default NewFolder;
