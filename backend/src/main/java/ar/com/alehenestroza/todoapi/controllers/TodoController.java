package ar.com.alehenestroza.todoapi.controllers;

import ar.com.alehenestroza.todoapi.entities.Todo;
import ar.com.alehenestroza.todoapi.services.TodoService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", exposedHeaders = "Access-Control-Allow-Origin")
@RestController
@RequestMapping("/todos")
public class TodoController {
    private final TodoService todoService;

    public TodoController(TodoService todoService) {
        this.todoService = todoService;
    }

    @PostMapping
    public Todo addTodo(@RequestBody Todo todo) {
        return this.todoService.addTodo(todo);
    }

    @GetMapping("/{folder_id}")
    public List<Todo> getTodos(@PathVariable int folder_id) {
        return this.todoService.getTodosByFolderId(folder_id);
    }

    @PutMapping
    public Todo updateTodo(@RequestBody Todo todo) {
        return this.todoService.updateTodo(todo);
    }

    @DeleteMapping("/{id}")
    public String deleteTodo(@PathVariable int id) {
        return this.todoService.deleteTodo(id);
    }
}
