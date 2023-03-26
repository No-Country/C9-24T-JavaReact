# ![Logo](./img/Group.png)

> Kiosko app is a platform designed to allow students to purchase items from the school cafeteria without having to queue or handle cash.
> Live demo [_here_](http://no-country-kioskoapp-react.s3-website-us-east-1.amazonaws.com/). (email: test@test.com password: testuser)  
> Backend Demo [_here_](http://3.88.177.40:8080/swagger-ui/index.html#).



https://user-images.githubusercontent.com/62969028/227791794-54326cfc-6e78-4e16-8d59-69bbb6470653.mp4



<p align="center">
  <img src="https://github.com/No-Country/C9-24T-JavaReact/blob/main/img/inicio.png" alt="screenshot of the app"/>
</p>

## Table of Contents
* [General Info](#general-information)
* [Our Team](#our-team)
* [Technologies Used](#technologies-used)
* [Features](#features)
* [Setup](#setup)
* [Usage](#usage)
  * [Backend (Postman collection and Swagger)](#backend-postman-collection-and-swagger)
  * [Frontend](#frontend-1)
* [Project Status](#project-status)
* [Room for Improvement](#room-for-improvement))

## General Information
This project was carried out over a period of one month for [_No Country_](https://www.nocountry.tech/perfilesit). Our objective was to develop an application that enables high school students to make purchases at the school cafeteria without having to endure lengthy queues. This can be achieved by allowing students to select items and add them to their cart, place an order, and simply collect it without any hassle. Additionally, this system eliminates the need for cash transactions, provides parents with greater control over their children's consumption habits, and facilitates data collection for the school to analyze consumption patterns and develop strategies to promote healthier lifestyles among students.

## Our Team
**Frontend**
- Luis Manuel Velasquez Enciso: [**GitHub**](https://github.com/luisvelark) [**LinkedIn**](https://www.linkedin.com/in/luisvelark)
- Dedwison Alvarez: [**GitHub**](https://github.com/dedwison) [**LinkedIn**](https://www.linkedin.com/in/dedwison)

**Backend**
- Alex Lihuel Mujica: [**GitHub**](https://github.com/LihuelMujica) [**LinkedIn**](https://www.linkedin.com/in/lihuelmujica)

**UX/UI**
- Franco De Carli: [**LinkedIn**](https://www.example.com)
- Daniela Gil: [**LinkedIn**](https://www.example.com)

**Team Leader**
- Josefina Anschütz: [**LinkedIn**](https://www.linkedin.com/in/josefina-anschutz/)

## Technologies Used
- **Backend:** Java, Spring Boot, Spring Security, Hibernate, REST, API, JWT, JSON, Maven, Apache, JUnit, Swagger, MapStruct
- **Database:** MySQL
- **Frontend:** HTML, CSS, JavaScript, React, Redux, Material UI, Axios, React Router, Styled Components, Hooks
- **Infrastructure:** EC2, S3, RDS, Docker, Docker-Compose
- **Tools:** Git, GitHub, VSCode, IntelliJ IDEA, ESLint Postman, Trello, Discord, Meet, Slack, Figma

## Features
Developed features:

- Student login
- Product list
- Inspect product details and characteristics
- Product filtering using category
- Add to cart
- Purchase cart
- REST API:
  - Category full crud
  - Characteristic full crud of characteristics
  - Product full crud including diffrent filterings
  - Add funds to student wallet
  - Create and cancell orders
  - List all orders
  - Filter orders by student or parent identification 
  - Student and Parent registration and authentication
  - Security
- UX/UI:
  - Student flow
  - Parent flow
  - Add funds using credit card 
 
## Setup
### Prerequistes
For running this project you need:
- SDK Java 18
- Maven 3.8 or above
- NodeJs
- MySQL
- Git
- You have to clone this repository using: 
```console
git clone https://github.com/your-username/your-repository.git
```
### Database
You have the script for generating the database on model.sql. 

Here is the ERD: 
<p align="center">
  <img src="https://github.com/No-Country/C9-24T-JavaReact/blob/main/img/ERD.png" alt="ERD"/>
</p>

### Backend
1. Install any required dependencies by running the following command in the backend directory of the project:
```console
mvn install
```
2. Configure any necessary settings, such as database credentials, by editing the application.properties file located in the src/main/resources directory.
```console
spring.datasource.url=jdbc:mysql://localhost:3306/mydatabase
spring.datasource.username=dbuser
spring.datasource.password=dbpass
```
3. Build the project using the following command:
```console
mvn package
```
4. Run the project using the following command:
```console
java -jar target/your-project.jar
```

This will start the Spring Boot application and make it available at http://localhost:8080/

### Frontend
1. Install any required dependencies by running the following command in the backend directory of the project:
```console
npm i
```
2. Configure the backend url in client/src/services/configAxios.js, put your backend url in the variable baseURL in line 4
3. Run the frontend in dev mod using
```console
npm run dev
```
or you can create a build using:
```console
npm run build
```
## Usage

### Backend (Postman collection and Swagger)
You can acces api documentation in swagger in http://localhost:8080/swagger-ui/index.html#.

[_Here_](https://elements.getpostman.com/redirect?entityId=18775030-f492f3cd-2492-4dac-9182-a3eebfb888c1&entityType=collection) you have a postman collection with examples of api usage

### Frontend
<p align="center">
  <img src="https://github.com/No-Country/C9-24T-JavaReact/blob/main/img/userflow1.png" alt="screenshot of the app"/>
</p>
<p align="center">
  <img src="https://github.com/No-Country/C9-24T-JavaReact/blob/main/img/userflow2.png" alt="screenshot of the app"/>
</p>
<p align="center">
  <img src="https://github.com/No-Country/C9-24T-JavaReact/blob/main/img/userflow3.png" alt="screenshot of the app"/>
</p>
<p align="center">
  <img src="https://github.com/No-Country/C9-24T-JavaReact/blob/main/img/userflow4.png" alt="screenshot of the app"/>
</p>
<p align="center">
  <img src="https://github.com/No-Country/C9-24T-JavaReact/blob/main/img/userflow5.png" alt="screenshot of the app"/>
</p>
<p align="center">
  <img src="https://github.com/No-Country/C9-24T-JavaReact/blob/main/img/userflow6.png" alt="screenshot of the app"/>
</p>


## Project Status

Project is _no longer being worked on_ since it was a one month project

## Room for Improvement
Room for improvement:
- Integration tests
- Unit tests
- The footer in some devices doesn't work properly
- Sometimes the frontend does not show the order number

To do: 
- Implement frontend for administration: full CRUD of product, categories and characteristics. Users registration. Add funds to students. View of orders and the possibility of cancel an order.
- Implement frontend for parents: view students consumitions
- Implement frontend search bar and filtering by characteristics
- Implement creditcard payment
- Allow parents to restrict products for their sons
- Add an option to the admin for making offers
