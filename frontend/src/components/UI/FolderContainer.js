import { useEffect, useState } from "react";
import FolderList from "../FolderList/FolderList";
import NewFolder from "../NewFolder/NewFolder";
import styles from "./FolderContainer.module.scss";

const FolderContainer = (props) => {
  const [folders, setFolders] = useState([]);

  const getFolders = () => {
    const fetchedFolders = [];
    require("axios")
      .get(`${process.env.REACT_APP_API_URL}/folders`)
      .then((response) => {
        response.data.forEach((folder) => {
          fetchedFolders.push(folder);
        });
      })
      .then(() => {
        setFolders(fetchedFolders);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getFolders();
  }, []);

  const addFolder = (folder) => {
    require("axios")
      .post(`${process.env.REACT_APP_API_URL}/folders`, folder)
      .then((response) => {
        setFolders([...folders, response.data]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteFolder = (folder) => {
    require("axios")
      .delete(`${process.env.REACT_APP_API_URL}/folders/${folder.id}`)
      .then((response) => {
        setFolders(folders.filter((f) => f.id !== folder.id));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateFolder = (folder) => {
    require("axios")
      .put(`${process.env.REACT_APP_API_URL}/folders`, folder)
      .then((response) => {
        setFolders(
          folders.map((f) => {
            if (f.id === folder.id) {
              return response.data;
            } else {
              return f;
            }
          })
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={styles.folder_list}>
      <NewFolder addFolder={addFolder} />
      <h2>Folders</h2>
      <FolderList folders={folders} selectFolder={props.selectFolder} />
    </div>
  );
};

export default FolderContainer;
