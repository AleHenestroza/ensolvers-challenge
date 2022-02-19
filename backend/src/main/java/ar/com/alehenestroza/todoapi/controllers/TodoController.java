package ar.com.alehenestroza.todoapi.controllers;

import ar.com.alehenestroza.todoapi.entities.Todo;
import ar.com.alehenestroza.todoapi.services.TodoService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600)
@RestController
public class TodoController {
    private final TodoService todoService;

    public TodoController(TodoService todoService) {
        this.todoService = todoService;
    }

    @PostMapping("/todos")
    public Todo addTodo(@RequestBody Todo todo) {
        return this.todoService.addTodo(todo);
    }

    @GetMapping("/todos")
    public List<Todo> getTodos() {
        return this.todoService.getTodos();
    }

    @GetMapping("/todos/{id}")
    public Todo getTodo(@PathVariable int id) {
        return this.todoService.getTodoById(id);
    }

    @PutMapping("/todos")
    public Todo updateTodo(@RequestBody Todo todo) {
        return this.todoService.updateTodo(todo);
    }

    @DeleteMapping("/todos/{id}")
    public String deleteTodo(@PathVariable int id) {
        return this.todoService.deleteTodo(id);
    }
}
