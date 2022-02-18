package ar.com.alehenestroza.todoapi.services;

import ar.com.alehenestroza.todoapi.entities.Todo;
import ar.com.alehenestroza.todoapi.repositories.TodoRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TodoService {
    private final TodoRepository todoRepository;

    public TodoService(TodoRepository todoRepository) {
        this.todoRepository = todoRepository;
    }

    public Todo addTodo(Todo todo) {
        return this.todoRepository.save(todo);
    }

    public List<Todo> addTodos(List<Todo> todos) {
        return this.todoRepository.saveAll(todos);
    }

    public List<Todo> getTodos() {
        return this.todoRepository.findAll();
    }

    public Todo getTodoById(int id) {
        return this.todoRepository.findById(id).orElse(null);
    }

    public String deleteTodo(int id) {
        try {
            this.todoRepository.deleteById(id);
        } catch (Exception e) {
            return e.getMessage();
        }
        return "Todo " + id + " successfully deleted.";
    }

    public Todo updateTodo(Todo todo) {
        Todo todoToUpdate = this.todoRepository.findById(todo.getId()).orElse(null);
        if (todoToUpdate != null) {
            todoToUpdate.setDescription(todo.getDescription());
            todoToUpdate.setDone(todo.isDone());
            return this.todoRepository.save(todoToUpdate);
        }
        return null;
    }
}
