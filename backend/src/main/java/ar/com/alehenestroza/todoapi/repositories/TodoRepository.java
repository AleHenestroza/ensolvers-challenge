package ar.com.alehenestroza.todoapi.repositories;

import ar.com.alehenestroza.todoapi.entities.Todo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TodoRepository extends JpaRepository<Todo, Integer> {
}
