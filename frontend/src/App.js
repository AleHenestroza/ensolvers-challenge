import { useState } from "react";
import "./App.scss";
import FolderContainer from "./components/UI/FolderContainer";
import TodoContainer from "./components/UI/TodoContainer";

const App = () => {
  const [selectedFolder, setSelectedFolder] = useState(null);

  const selectFolder = (folder) => {
    setSelectedFolder(folder);
  };

  const deselectFolder = () => {
    setSelectedFolder(null);
  };

  return (
    <div className="app">
      {selectedFolder ? (
        <TodoContainer
          folder={selectedFolder}
          deselectFolder={deselectFolder}
        />
      ) : (
        <FolderContainer selectFolder={selectFolder} />
      )}
    </div>
  );
};

export default App;
