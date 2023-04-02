# README

Things you may want to cover:

- Ruby version
  This project is using Ruby version 2.7.4
- System dependencies

- Configuration
  To start up the project. After cloning the project. Run `bundle install` to install all the required dependencies. Then navigate to the client folder. Run `npm install` to install the dependencies for the react app.
- Database creation
  To set up your database run `rails db:migrate` to create the tables. Then run `rails db:seed` to seed sample data for the webiste.

# Moringa-student-application-portal

##Project description.
This is a rails api and react application that models a student application for Moringa where students can aply for various courses at the school. This project has a backend that provides the endpoints for the frontend and storage of user data. This project also has a client app that holds the frontend react app that just provides the GUI of the student application.

## Setup instructions

1. Download the zip file under the 'Code' tab.
2. Extract files from the zip file.
3. Open the extracted folder with VS Code.
4. In your VS Code terminal to install the required gems, run:
   `bundle install`
5. In your VS Code terminal to migrate the database, run:
   sh
   `rails db:migrate`
6. In your VS Code terminal to seed the database, run:
   `rails db:seed`
7. In the terminal navigate to the client folder and run:
   `npm install` to install dependencies.
8. In your terminal run:
   `rails s` to start server. And in a different terminal run: `npm start --prefix client`
9. You can now view the project in "http://localhost:3000"

## BDD
As a user, I will be able to consume the following routes from the API and receive the following responses:

### Courses

GET/courses
this will return records as JSON object
[{
id: 1,
title: "Data Science",
short_description: "It deals with data analysis",
description:
"This is for individuals with a demanding schedule. Learn how to explore, analyze, visualize, build models with data using programming languh as Python and R, and deploy models into applications.This is the course for you. Kickstart the journey to your future career now!",
course_modules: "Artificial Intelligence Engineer",
status: "Intake on going",
banner:
"https://moringaschool.com/wp-content/uploads/2021/08/moringa-students-ms009-768x400.jpg",
requirements:
"Access to a laptop or desktop computer, Access to a stable internet connection, Proficiency in written and spoken English",
fee: 180000.0,
start_date: Tue, 01 Jan 2013,
duration: 6,
created_at: Sun, 02 Apr 2023 14:44:20.098685000 UTC +00:00,
updated_at: Sun, 02 Apr 2023 14:44:20.098685000 UTC +00:00>
}]

GET/courses/:id
This will return records as JSON
[{course_modules
:
"Artificial Intelligence Engineer"
description
:
"This is for individuals with a demanding schedule. Learn how to explore, analyze, visualize, build models with data using programming languh as Python and R, and deploy models into applications.This is the course for you. Kickstart the journey to your future career now!"
duration
:
6
fee
:
180000
id
:
1
requirements
:
"Access to a laptop or desktop computer, Access to a stable internet connection, Proficiency in written and spoken English"
short_description
:
"It deals with data analysis"
start_date
:
"2013-01-01"
status
:
"Intake on going"
title
:
"Data Science"}] 3. If the GET /courses request is not successful, it will return the following JSON data:
sh
[{

"error": "Course not found"

}]

### Applicants

GET/applicants
This will return the records as JSON
[{
id: 1,  
 username: "Shebang",  
 first_name: "Hellen",  
 last_name: "Akinyi",  
 date_of_birth: Tue, 02 Mar 1999,  
 email: "shebang@gmail.com",  
 password_digest: "[FILTERED]",  
 created_at: Sun, 02 Apr 2023 14:44:16.865807000 UTC +00:00,  
 updated_at: Sun, 02 Apr 2023 14:44:16.865807000 UTC +00:00
}]

GET/applicants/:id
This will return the records as JSON
[{id: 1,  
 username: "Shebang",  
 first_name: "Hellen",  
 last_name: "Akinyi",  
 date_of_birth: Tue, 02 Mar 1999,  
 email: "shebang@gmail.com",  
 password_digest: "[FILTERED]", }]

DELETE/applicants/:id
This will return a header with a no content reply

### Applications
GET/applications
This will return the records as JSON
[{
id: 1,
applicant_id: 1,
course_id: 2,
documents: "ID, Birth Certificate, KCSE Certificate",
status: "Pending Review",
created_at: Sun, 02 Apr 2023 14:44:20.442285000 UTC +00:00,
updated_at: Sun, 02 Apr 2023 14:44:20.442285000 UTC +00:00}]

GET/applications/:id
This will return the records as JSON
[{
id: 1,
applicant_id: 1,
course_id: 2,
documents: "ID, Birth Certificate, KCSE Certificate",
status: "Pending Review",
created_at: Sun, 02 Apr 2023 14:44:20.442285000 UTC +00:00,
updated_at: Sun, 02 Apr 2023 14:44:20.442285000 UTC +00:00
}]

## User interface
This is the homepage.

This is the sign up page.

This is the login page.

This is the applications page.

This is the all courses page.

This is the course details page.
