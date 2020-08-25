FROM maven:3.6.1-jdk-8-alpine AS MAVEN_BUILD
COPY ./ ./
RUN mvn clean install


FROM openjdk:8-jdk-alpine
#RUN addgroup -S oab && adduser -S oab -G oab
#USER oab
COPY --from=MAVEN_BUILD target/*.jar /app.jar

ENTRYPOINT ["java","-jar","/app.jar"]


#sudo docker build -t daniel/todolist .
#sudo docker run -p 8081:8081 daniel/todolist --server.port=8081
