package ar.com.alehenestroza.todoapi.services;

import ar.com.alehenestroza.todoapi.repositories.FolderRepository;
import ar.com.alehenestroza.todoapi.entities.Folder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FolderService {
    private final FolderRepository folderRepository;

    public FolderService(FolderRepository folderRepository) {
        this.folderRepository = folderRepository;
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

    public String deleteFolder(int id) {
        try {
            folderRepository.deleteById(id);
        } catch (Exception e) {
            return e.getMessage();
        }
        return "Folder " + id + " deleted";
    }
}
