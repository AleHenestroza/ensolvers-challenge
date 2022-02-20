#### Build the application
FROM maven:3.8.1-openjdk-11-slim AS build

WORKDIR /app

COPY pom.xml .

RUN mvn -e -B dependency:resolve

COPY src ./src

RUN mvn clean -e -B package -DskipTests

#### Run the application
FROM openjdk:11-jre-slim-buster

WORKDIR /app

COPY --from=build /app/target/todo-api-0.0.1-SNAPSHOT.jar .

ENTRYPOINT ["java", "-jar", "./todo-api-0.0.1-SNAPSHOT.jar"]