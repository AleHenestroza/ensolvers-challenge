package ar.com.alehenestroza.todoapi.controllers;

import ar.com.alehenestroza.todoapi.entities.Folder;
import ar.com.alehenestroza.todoapi.services.FolderService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins="*", exposedHeaders="Access-Control-Allow-Origin")
@RestController
@RequestMapping("/folders")
public class FolderController {
    private final FolderService folderService;

    public FolderController(FolderService folderService) {
        this.folderService = folderService;
    }

    @GetMapping
    public List<Folder> getAll() {
        return folderService.getAll();
    }

    @PostMapping
    public Folder create(@RequestBody Folder folder) {
        return folderService.createFolder(folder);
    }

    @GetMapping("/{id}")
    public Folder getById(@PathVariable("id") int id) {
        return folderService.getFolderById(id);
    }

    @DeleteMapping("/{id}")
    public String delete(@PathVariable("id") int id) {
        return folderService.deleteFolder(id);
    }

    @PutMapping("/{id}")
    public Folder update(@PathVariable("id") int id, @RequestBody Folder folder) {
        return folderService.updateFolder(id, folder.getName());
    }
}
