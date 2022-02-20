package ar.com.alehenestroza.todoapi.repositories;

import ar.com.alehenestroza.todoapi.entities.Folder;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FolderRepository extends JpaRepository<Folder, Integer> {
}
