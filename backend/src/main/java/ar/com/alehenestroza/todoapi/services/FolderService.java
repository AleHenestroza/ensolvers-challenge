package ar.com.alehenestroza.todoapi.services;

import ar.com.alehenestroza.todoapi.repositories.FolderRepository;
import ar.com.alehenestroza.todoapi.entities.Folder;
import ar.com.alehenestroza.todoapi.repositories.TodoRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FolderService {
    private final FolderRepository folderRepository;
    private final TodoRepository todoRepository;

    public FolderService(FolderRepository folderRepository, TodoRepository todoRepository) {
        this.folderRepository = folderRepository;
        this.todoRepository = todoRepository;
    }

    public Folder createFolder(Folder folder) {
        return folderRepository.save(folder);
    }

    public List<Folder> getAll() {
        return folderRepository.findAll();
    }

    public Folder getFolderById(int id) {
        return folderRepository.findById(id).orElse(null);
    }

    public Folder updateFolder(int id, String name) {
        Folder folder = folderRepository.findById(id).orElse(null);
        if (folder != null) {
            folder.setName(name);
            folderRepository.save(folder);
        }
        return folder;
    }

    // Delete folder and all todos in it
    public String deleteFolder(int id) {
        Folder folder = folderRepository.findById(id).orElse(null);
        if (folder != null) {
            todoRepository.deleteAll(folder.getTodos());
            folderRepository.delete(folder);
            return "Folder " + id + " deleted";
        }
        return "Folder " + id + " not found";
    }
}
