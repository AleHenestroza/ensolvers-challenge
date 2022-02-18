package ar.com.alehenestroza.todoapi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class TodoApiApplication {

    public static void main(String[] args) {
        createDbIfNotExists();
        SpringApplication.run(TodoApiApplication.class, args);
    }

    // This function will check if the 'ensolvers' MySQL database exists, and if it doesn't, it will run command to create it.
    private static void createDbIfNotExists() {
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            java.sql.Connection con = java.sql.DriverManager.getConnection("jdbc:mysql://localhost:3306/ensolvers", "admin", "admin");
            java.sql.Statement stmt = con.createStatement();
            stmt.executeUpdate("CREATE DATABASE IF NOT EXISTS ensolvers;");
            stmt.executeUpdate("CREATE TABLE IF NOT EXISTS `ensolvers`.`todos` (\n" +
                    "  `id` int(11) NOT NULL AUTO_INCREMENT,\n" +
                    "  `description` varchar(255) NOT NULL,\n" +
                    "  `is_done` tinyint(1) NOT NULL,\n" +
                    "  PRIMARY KEY (`id`)\n" +
                    ") ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;");
            stmt.close();
            con.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
