FROM maven:3.6.1-jdk-8-alpine AS MAVEN_BUILD
COPY ./ ./
RUN mvn clean install


FROM openjdk:8-jdk-alpine
#RUN addgroup -S oab && adduser -S oab -G oab
#USER oab
#COPY target/*.jar app.jar
COPY --from=MAVEN_BUILD target/*.jar /app.jar

ENTRYPOINT ["java","-jar","/app.jar"]


#mvn install -DskipTests
#sudo docker build -t daniel/toDoList .
#sudo docker run -p 8082:8082 daniel/toDoList --server.port=8082
