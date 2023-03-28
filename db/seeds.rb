# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
 
puts "Seeding in process...."
Applicant.create(username: "Shebang", first_name: "Hellen", last_name: "Akinyi", age: 24, date_of_birth: 1999, email: "shebang@gmail.com")
Applicant.create(username: "earth", first_name: "William ", last_name: "Kentridge", age: 23, date_of_birth: 2000, email: "willmuh@gmail.com")
Applicant.create(username: "ice", first_name: "Geri", last_name: "wakasongsa", age: 25, date_of_birth: 1998, email: "geri500@gmail.com")
Applicant.create(username: "fire", first_name: "Adel", last_name: "Abdessemed", age: 22, date_of_birth: 2001, email: "armtàge500@gmail.com")
Applicant.create(username: "sun", first_name: "Wangechi", last_name: "Mutu", age: 20, date_of_birth: 2003, email: "wangechimutu@gmail.com")
Applicant.create(username: "alex", first_name: "Julie", last_name: "Mehretu", age: 24, date_of_birth: 1999, email: "mahretujulie@yahoo.com")
Applicant.create(username: "trojan", first_name: "Wael", last_name: "Shawky", age: 23, date_of_birth: 2000, email: "waeelshawky@yaohoo.com")
Applicant.create(username: "troy", first_name: "Cisco", last_name: "Ramon", age: 19, date_of_birth: 2004, email: "ciscoRamon@yahoo.com")
Applicant.create(username: "baz", first_name: "Luke ", last_name: "Dunphy", age: 20, date_of_birth: 2003, email: "lukie@yahoo.com")
Applicant.create(username: "clark", first_name: "Luke ", last_name: "Dunphy", age: 24, date_of_birth: 1999, email: "lukie@yahoo.com")
Applicant.create(username: "cent", first_name: "Jean", last_name: "Albèrola", age: 21, date_of_birth: 2002, email: "jeanMicheal@gmail.com")

Course.create(
    [
        {
            "title": "Data Science",
            "short_description": "It deals with data analysis",
            "description": "This is for individuals with a demanding schedule. Learn how to explore, analyze, visualize, build models with data using programming languages, such as Python and R, and deploy models into applications.This is the course for you. Kickstart the journey to your future career now!",
            "course_modules": "Artificial Intelligence Engineer",
            "banner": "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/copy-of-copy-of-drums-lessons-design-template-086986462694af55ad845468befba695.jpg?ts=1582317065",
            "status": "Intake on going",
            "requirements": "Access to a laptop or desktop computer, Access to a stable internet connection, Proficiency in written and spoken English",
            "fee": 180000,
            "start_date": "2013-01-01",
            "duration": 6
        },

        { 
            "title": "Software Engineering",
            "short_description": "Learn how to design, develop, maintain, test, and evaluate computer software.",
            "description": "You will be able to use your skills to develop high-quality websites and dynamic applications for end users. Enroll now to kickstart your journey.Are you passionate about studying software engineering but want to avoid the hassle that comes with a daily commute? Enroll now to study from home and become a Moringa Certified Software Engineer!",
            "course_modules": "Front-End Engineer, Back-End Engineer",
            "banner": "https://moringaschool.com/wp-content/uploads/2022/01/backend-768x514.jpg",
            "status": "Intake on going",
            "requirements": "Access to a laptop or desktop computer, Access to a stable internet connection, Proficiency in written and spoken English",
            "fee": 200000,
            "start_date": "2013-02-03",
            "duration": 6
        },

        { 
            "title": "Cyber Security",
            "short_description": "Get started on your journey to becoming a cybersecurity specialist with our 12-week Cybersecurity Prep Course",
            "description": "Are you new to the world of cybersecurity as a professional, or just interested in getting started in this industry? This introductory course is for you. For 12 weeks learners explore topics in cybersecurity like cyber threats, and cyber intelligence while gaining practical insight into governance, risk & compliance.",
            "course_modules": "python, c++",
            "banner": "https://moringaschool.com/wp-content/uploads/2023/02/cyber-security-768x468.jpg",
            "status": "Closed",
            "requirements": "Access to a laptop or desktop computer, Access to a stable internet connection, Proficiency in written and spoken English",
            "fee": 172000,
            "start_date": "2013-07-18",
            "duration": 7
        },

        { 
            "title": "Data Science",
            "short_description": "It deals with data analysis",
            "description": "This is for individuals with a demanding schedule. Learn how to explore, analyze, visualize, build models with data using programming languages, such as Python and R, and deploy models into applications.This is the course for you. Kickstart the journey to your future career now!",
            "course_modules": "Artificial Intelligence Engineer",
            "banner": "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/copy-of-copy-of-drums-lessons-design-template-086986462694af55ad845468befba695.jpg?ts=1582317065",
            "status": "Intake on going",
            "requirements": "Access to a laptop or desktop computer, Access to a stable internet connection, Proficiency in written and spoken English",
            "fee": 180000,
            "start_date": "2013-01-01",
            "duration": 6
        },

        { 
            "title": "Data Science",
            "short_description": "It deals with data analysis",
            "description": "This is for individuals with a demanding schedule. Learn how to explore, analyze, visualize, build models with data using programming languages, such as Python and R, and deploy models into applications.This is the course for you. Kickstart the journey to your future career now!",
            "course_modules": "Artificial Intelligence Engineer",
            "banner": "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/copy-of-copy-of-drums-lessons-design-template-086986462694af55ad845468befba695.jpg?ts=1582317065",
            "status": "Intake on going",
            "requirements": "Access to a laptop or desktop computer, Access to a stable internet connection, Proficiency in written and spoken English",
            "fee": 180000,
            "start_date": "2013-01-01",
            "duration": 6
        },

        { 
            "title": "Data Science",
            "short_description": "It deals with data analysis",
            "description": "This is for individuals with a demanding schedule. Learn how to explore, analyze, visualize, build models with data using programming languages, such as Python and R, and deploy models into applications.This is the course for you. Kickstart the journey to your future career now!",
            "course_modules": "Artificial Intelligence Engineer",
            "banner": "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/copy-of-copy-of-drums-lessons-design-template-086986462694af55ad845468befba695.jpg?ts=1582317065",
            "status": "Intake on going",
            "requirements": "Access to a laptop or desktop computer, Access to a stable internet connection, Proficiency in written and spoken English",
            "fee": 180000,
            "start_date": "2013-01-01",
            "duration": 6
        },

        { 
            "title": "Data Science",
            "short_description": "It deals with data analysis",
            "description": "This is for individuals with a demanding schedule. Learn how to explore, analyze, visualize, build models with data using programming languages, such as Python and R, and deploy models into applications.This is the course for you. Kickstart the journey to your future career now!",
            "course_modules": "Artificial Intelligence Engineer",
            "banner": "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/copy-of-copy-of-drums-lessons-design-template-086986462694af55ad845468befba695.jpg?ts=1582317065",
            "status": "Intake on going",
            "requirements": "Access to a laptop or desktop computer, Access to a stable internet connection, Proficiency in written and spoken English",
            "fee": 180000,
            "start_date": "2013-01-01",
            "duration": 6
        },

        { 
            "title": "Data Science",
            "short_description": "It deals with data analysis",
            "description": "This is for individuals with a demanding schedule. Learn how to explore, analyze, visualize, build models with data using programming languages, such as Python and R, and deploy models into applications.This is the course for you. Kickstart the journey to your future career now!",
            "course_modules": "Artificial Intelligence Engineer",
            "banner": "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/copy-of-copy-of-drums-lessons-design-template-086986462694af55ad845468befba695.jpg?ts=1582317065",
            "status": "Intake on going",
            "requirements": "Access to a laptop or desktop computer, Access to a stable internet connection, Proficiency in written and spoken English",
            "fee": 180000,
            "start_date": "2013-01-01",
            "duration": 6
        },

        { 
            "title": "Data Science",
            "short_description": "It deals with data analysis",
            "description": "This is for individuals with a demanding schedule. Learn how to explore, analyze, visualize, build models with data using programming languages, such as Python and R, and deploy models into applications.This is the course for you. Kickstart the journey to your future career now!",
            "course_modules": "Artificial Intelligence Engineer",
            "banner": "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/copy-of-copy-of-drums-lessons-design-template-086986462694af55ad845468befba695.jpg?ts=1582317065",
            "status": "Intake on going",
            "requirements": "Access to a laptop or desktop computer, Access to a stable internet connection, Proficiency in written and spoken English",
            "fee": 180000,
            "start_date": "2013-01-01",
            "duration": 6
        },

        { 
            "title": "Data Science",
            "short_description": "It deals with data analysis",
            "description": "This is for individuals with a demanding schedule. Learn how to explore, analyze, visualize, build models with data using programming languages, such as Python and R, and deploy models into applications.This is the course for you. Kickstart the journey to your future career now!",
            "course_modules": "Artificial Intelligence Engineer",
            "banner": "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/copy-of-copy-of-drums-lessons-design-template-086986462694af55ad845468befba695.jpg?ts=1582317065",
            "status": "Intake on going",
            "requirements": "Access to a laptop or desktop computer, Access to a stable internet connection, Proficiency in written and spoken English",
            "fee": 180000,
            "start_date": "2013-01-01",
            "duration": 6
        }
    ]
)

puts "Seeding done."