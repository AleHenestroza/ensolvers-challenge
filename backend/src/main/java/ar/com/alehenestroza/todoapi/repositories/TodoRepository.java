package ar.com.alehenestroza.todoapi.repositories;

import ar.com.alehenestroza.todoapi.entities.Todo;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TodoRepository extends JpaRepository<Todo, Integer> {
    List<Todo> findAllByFolderId (int folderId);
}
