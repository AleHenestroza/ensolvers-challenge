package ar.com.alehenestroza.todoapi.entities;

import lombok.*;

import javax.persistence.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "todos")
public class Todo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "description")
    private String description;
    @Column(name = "is_done")
    private boolean isDone;
    @Column(name = "folder_id")
    private int folderId;

    public Todo(String description, int folderId) {
        this.description = description;
        this.folderId = folderId;
        this.isDone = false;
    }
}
