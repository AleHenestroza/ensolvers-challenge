import Folder from "../Folder/Folder";

const FolderList = (props) => {
  return (
    <ul>
      {props.folders.map((folder) => {
        return (
          <Folder
            folder={folder}
            key={folder.id}
            selectFolder={props.selectFolder}
            deleteFolder={props.deleteFolder}
          />
        );
      })}
    </ul>
  );
};

export default FolderList;
