package ar.com.alehenestroza.todoapi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.sql.*;

@SpringBootApplication
public class TodoApiApplication {

    public static void main(String[] args) {
        setupDB();
        SpringApplication.run(TodoApiApplication.class, args);
    }

    private static void setupDB() {
        String user = "admin";
        String password = "admin";
        createDbIfNotExists(user, password);
        createTodoTableIfNotExists(user, password);
        createFolderTableIfNotExists(user, password);
    }

    // This function will check if the 'ensolvers' database exists, and if it doesn't, it will run command to create it.
    private static void createDbIfNotExists(String user, String password) {
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306", user, password);
            Statement stmt = con.createStatement();
            stmt.executeUpdate("CREATE DATABASE IF NOT EXISTS ensolvers;");
            stmt.close();
            con.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    private static void createTodoTableIfNotExists(String user, String password) {
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/ensolvers", user, password);
            Statement stmt = con.createStatement();
            stmt.executeUpdate("CREATE TABLE IF NOT EXISTS `ensolvers`.`todos` (\n" +
                    "  `id` int(11) NOT NULL AUTO_INCREMENT,\n" +
                    "  `description` varchar(255) NOT NULL,\n" +
                    "  `is_done` tinyint(1) NOT NULL,\n" +
                    "  `folder_id` int(11),\n" +
                    "  PRIMARY KEY (`id`)\n" +
                    ") ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;");
            stmt.close();
            con.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    private static void createFolderTableIfNotExists(String user, String password) {
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/ensolvers", user, password);
            Statement stmt = con.createStatement();
            stmt.executeUpdate("CREATE TABLE IF NOT EXISTS `ensolvers`.`folders` (\n" +
                    "  `id` int(11) NOT NULL AUTO_INCREMENT,\n" +
                    "  `name` varchar(255) NOT NULL,\n" +
                    "  PRIMARY KEY (`id`)\n" +
                    ") ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;");
            stmt.close();
            con.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
