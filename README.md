# To-Do App for the Ensolvers Implementation Challenge

Here is a solution to the Ensolvers Implementation Challenge: A To-Do application built with Spring Boot for the backend, React.js as the frontend library and MySQL for the database. The app is structured with docker-compose running 3 separate containers: a RESTful API that handles CRUD operations for the To-Dos and the Folders, a React application being served by an Nginx server and a MySQL container.

## Technologies used

- Java 11
- Spring Boot 2.6.3
  - JPA
  - Spring Web
  - Lombok
- Maven 3.6.3
- Node.js 16.13.2
- React 17.0.2
- Axios 2.1.4
- MySQL 8.0.27
- SASS
- Docker & Docker Compose
- Nginx

## Requirements

To run this application, you need to have installed [Docker](https://docs.docker.com/engine/install/) and [Docker Compose](https://docs.docker.com/compose/install/)

## Run the App

Once Docker and Compose are installed, you can run this app with the following commands:

`docker-compose build`

`docker-compose up`

Access the application by openning a browser and going to localhost

The first time you run the app, it will take some time to download all of the required dependencies. It can take up to 10 minutes, based on the internet speed. The next times, the app will start much faster.

## Note

The docker-compose.yml file has the configuration for each service, they are all mapped to their default values (8080 for the backend, 80 for the nginx proxy and 3306 for the MySQL container). If you have any other service running on one of these ports, the `docker-compose up` command will throw an error.
