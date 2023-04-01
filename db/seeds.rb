
puts "Seeding in process...."

Applicant.create(username: "Shebang", first_name: "Hellen", last_name: "Akinyi", date_of_birth: "1999-03-02", email: "shebang@gmail.com", password: "tiffa")
Applicant.create(username: "earth", first_name: "William ", last_name: "Kentridge", date_of_birth: "2000-09-24", email: "willmuh@gmail.com", password: "will")
Applicant.create(username: "ice", first_name: "Geri", last_name: "wakasongsa", date_of_birth: "1998-08-11", email: "geri500@gmail.com", password:"geri")
Applicant.create(username: "fire", first_name: "Adel", last_name: "Abdessemed", date_of_birth: "2001-10-30", email: "armtàge500@gmail.com", password: "maryta")
Applicant.create(username: "sun", first_name: "Wangechi", last_name: "Mutu", date_of_birth: "2003-04-27", email: "wangechimutu@gmail.com", password: "wangechi")
Applicant.create(username: "alex", first_name: "Julie", last_name: "Mehretu", date_of_birth: "1999-05-15", email: "mahretujulie@yahoo.com", password: "julia")
Applicant.create(username: "trojan", first_name: "Wael", last_name: "Shawky", date_of_birth: "2000-09-13", email: "waeelshawky@yaohoo.com",password: "shawky")
Applicant.create(username: "troy", first_name: "Cisco", last_name: "Ramon", date_of_birth: "2004-12-04", email: "ciscoRamon@yahoo.com", password: "cisco")
Applicant.create(username: "baz", first_name: "Luke ", last_name: "Dunphy", date_of_birth: "2003-02-28", email: "lukie@yahoo.com", password: "lukie")
Applicant.create(username: "cent", first_name: "Jean", last_name: "Albèrola", date_of_birth: "2002-11-30", email: "jeanMicheal@gmail.com", password: "jean")

Course.create(
    [
        {
            "title": "Data Science",
            "short_description": "It deals with data analysis",
            "description": "This is for individuals with a demanding schedule. Learn how to explore, analyze, visualize, build models with data using programming languh as Python and R, and deploy models into applications.This is the course for you. Kickstart the journey to your future career now!",
            "course_modules": "Artificial Intelligence Engineer",
            "banner": "https://moringaschool.com/wp-content/uploads/2021/08/moringa-students-ms009-768x400.jpg",
            status: "Intake on going",
            "requirements": "Access to a laptop or desktop computer, Access to a stable internet connection, Proficiency in written and spoken English",
            "fee": 180000,
            "start_date": "2013-01-01",
            "duration": 6
        },

        { 
            "title": "Software Engineering Part-time",
            "short_description": "Learn how to design, develop, maintain, test, and evaluate computer software.",
            "description": "You will be able to use your skills to develop high-quality websites and dynamic applications for end users. Enroll now to kickstart your journey.Are you passionate about studying software engineering but want to avoid the hassle that comes with a daily commute? Enroll now to study from home and become a Moringa Certified Software Engineer!",
            "course_modules": "Front-End Engineer, Back-End Engineer",
            "banner": "https://ubunifucollege.com/assets/imses/web.jpg",
            status: "Intake on going",
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
            status: "Closed",
            "requirements": "Access to a laptop or desktop computer, Access to a stable internet connection, Proficiency in written and spoken English",
            "fee": 172000,
            "start_date": "2013-07-18",
            "duration": 7
        },

        { 
            "title": "Cloud computing",
            "short_description": "Cloud technologies are enabling organisations to transform rapidly, creating a high demand for cloud-savvy employees.",
            "description": "Cloud technologies are enabling organisations to transform rapidly, creating a high demand for cloud-savvy employees. As more and more companies adopt cloud services, there’s an immense drive to hire people with cloud computing skills, which LinkedIn recognised as one of the most in-demand hard skills in the tech market.",
            "course_modules": "Cloud Developer/Engineer,Cloud Architect,Cloud Consultant",
            "banner": "https://moringaschool.com/wp-content/uploads/2023/03/product-design-768x514.jpg",
            status: "Intake on going",
            "requirements": "Access to a laptop or desktop computer, Access to a stable internet connection, Proficiency in written and spoken English",
            "fee": 180000,
            "start_date": "2013-01-01",
            "duration": 6
        },

        { 
            "title": "Product Design (UI/UX)",
            "short_description": "Get the necessary skills to enable you to transform user research to high-fidelity interactive designs.",
            "description": "Our Product Design program will prepare you to become an end-to-end Product Designer by learning UX and UI design. You will learn to build the functionality and use cases of digital products such as mobile apps, websites, or software.",
            "course_modules": "Artificial Intelligence Engineer",
            "banner": "https://moringaschool.com/wp-content/uploads/2022/09/ui-ux-featured-768x420.jpg",
            status: "Closed",
            "requirements": "Be available to take a full-time course,Need to complete pre-work before onboarding week,Need to have completed high school",
            "fee": 190000,
            "start_date": "2013-02-20",
            "duration": 7
        },

        { 
            "title": "Software Engineer Online",
            "short_description": "Learn how to design, develop, maintain, test, and evaluate computer software.",
            "description": "The Full-Stack Software Engineering Curriculum covers both Back-End and Front-End programming technologies using Python.It is an extensive course of study that not only teaches how to simply code but how to learn and tackle novel problems. By the end of your course, you will graduate as a full-stack developer.",
            "course_modules": "Front-End Engineer, Back-End Engineer",
            "banner": "https://moringaschool.com/wp-content/uploads/2022/01/backend-768x514.jpg",
            status: "Intake on going",
            "requirements": "Access to a laptop or desktop computer, Access to a stable internet connection, Proficiency in written and spoken English",
            "fee": 150000,
            "start_date": "2013-01-01",
            "duration": 8
        },

        { 
            "title": "AWS Cloud Practioner",
            "short_description": "Advance your expertise in IT and Cloud Fluency and acquire the skills for global opportunities.",
            "description": "In partnership with Amazon Web Services (AWS), the market leader among the world’s biggest cloud services, the AWS Cloud Practitioner programme will prepare you for a career with top international companies that use cloud-based technologies, such as Samsung, BMW, Sony, Unilever, Johnson & Johnson, Airbnb, Siemens, Adobe, Netflix, Pfizer, and many more.",
            "course_modules": "Artificial Intelligence Engineer",
            "banner": "https://moringaschool.com/wp-content/uploads/2022/08/moringa-students-ms005-768x454.jpg",
            status: "Intake on going",
            "requirements": "Access to a laptop or desktop computer, Access to a stable internet connection, Proficiency in written and spoken English",
            "fee": 200000,
            "start_date": "2013-01-12",
            "duration": 6
        },

        { 
            "title": "DevOps Engineering",
            "short_description": "DevOps is a set of practices that combines software development and IT operations",
            "description": "DevOps focuses on better collaboration between the Development team and the Operations team. A DevOps Engineer is an individuals who oversee the entire software development lifecycle. They are instrumental in handling the code releases, implementing CI/CD pipeline, automating various processes, and solving any issues that arise during the development, deployment, or maintenance phase.",
            "course_modules": "Containerisation and Docker,Automation,Google cloud.",
            "banner": "https://moringaschool.com/wp-content/uploads/2022/09/moringa-devops-ms002-768x432.jpg",
            status: "Closed",
            "requirements": "Access to a laptop or desktop computer, Access to a stable internet connection, Proficiency in written and spoken English",
            "fee": 180000,
            "start_date": "2013-02-01",
            "duration": 7
        },

        { 
            "title": "Data Science Online",
            "short_description": "It deals with data analysis",
            "description": "This is for individuals with a demanding schedule. Learn how to explore, analyze, visualize, build models with data using programming languh as Python and R, and deploy models into applications.This is the course for you. Kickstart the journey to your future career now!",
            "course_modules": "Artificial Intelligence Engineer",
            "banner": "https://moringaschool.com/wp-content/uploads/2021/08/moringa-students-ms007-768x404.jpg",
            status: "Intake on going",
            "requirements": "Access to a laptop or desktop computer, Access to a stable internet connection, Proficiency in written and spoken English",
            "fee": 150000,
            "start_date": "2013-01-01",
            "duration": 7
        },

        { 
            "title": "Data Visualization with python",
            "short_description": "If you like using both the analytical and creative sides of your brain, then a career as a data visualization consultant or engineer may be right for you.",
            "description": "Data visualization is the graphic representation of data analysis to achieve clear and effective communication of results and insights drawn from data. One of the key skills of a data scientist is the ability to tell a compelling story, visualizing data and findings in an approachable and stimulating way. Learning to leverare tools to visualize data takes you a step closer to becoming a good data scientist.",
            "course_modules": "Statistical Measures, Python loops & Functions, Data analysis in Pandas,",
            "banner": "https://moringaschool.com/wp-content/uploads/2023/02/data-visualization-with-python-kenya-768x522.jpg",
            status: "Closed",
            "requirements": "Have basic math skills.Have basic computer skills.Proficiency in English both spoken and written,Access to a laptop or desktop computer",
            "fee": 160000,
            "start_date": "2013-02-01",
            "duration": 5
        }
    ]
)

# Application Data
Application.create(
    [{
        applicant_id: 1,
        course_id:2,
        documents:"id, Birth certificate, KCSE certificate",
        status:"Pending Review"
    },
    {
        applicant_id: 1,
        course_id:7,
        documents:"id, Birth certificate, KCSE certificate",
        status:"Submitted"
    },
    {
        applicant_id: 1,
        course_id:6,
        documents:"id, Birth certificate, KCSE certificate, Software Certificate",
        status:"Accepted"
    },
    {
        applicant_id: 2,
        course_id:4,
        documents:"id, Birth certificate, KCSE certificate",
        status:"Pending Review"
    },
    {
        applicant_id: 4,
        course_id:1,
        documents:"id, Software development certification, KCSE certificate",
        status:"Accepted"
    },
    {
        applicant_id: 9,
        course_id:1,
        documents:"id, Software development certification, KCSE certificate",
        status:"Submitted"
    },
    {
        applicant_id: 8,
        course_id:9,
        documents:"id, Software development certification, KCSE certificate",
        status:"Pending Review"
    },
    {
        applicant_id: 7,
        course_id:9,
        documents:"id, Software development certification, KCSE certificate",
        status:"Accepted"
    },
    {
        applicant_id: 5,
        course_id:8,
        documents:"id, Birth certificate, KCSE certificate",
        status:"Pending Review"
    },
    {
        applicant_id: 4,
        course_id:8,
        documents:"id, Birth certificate, KCSE certificate",
        status:"Pending Review"
    },
    {
        applicant_id: 10,
        course_id:6,
        documents:"id, Birth certificate, KCSE certificate",
        status:"Accepted"
    }]

)
puts "Seeding done."


