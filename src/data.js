const data = {
    "main": {
      "name":"Srinagesh Keerti",
      "occupation":"Senior Software Engineer",
      "description":"specializing in cloud infrastructure & distributed systems",
      "image":"profilepic.jpg",
      "bio":"Senior Software Engineer with 6+ years architecting distributed systems and enterprise cloud infrastructure. Currently at Tesla as one of the earliest engineers on the internal cloud platform, building foundational infrastructure that powers VM provisioning, bare metal automation, and GPU workloads across 25+ datacenters. AWS Certified Solutions Architect with deep expertise in Golang, Kubernetes, and VMware vSphere.",
      "contactmessage":"Have a question or want to work together? Feel free to reach out!",
      "email": "keertisrinagesh@gmail.com",
      "phone": "7049683387",
      "address":{
        "city":"San Jose",
        "state":"California",
        "zip": "95112"
      },
      "website": "http://www.srinageshkeerti.com",
      "resumedownload":"https://drive.google.com/file/d/1zht7RP9gWI_UqWeMp14SZa6DhpveKHXe/view?usp=sharing",
      "social":[
        {
          "name":"linkedin",
          "url":"https://www.linkedin.com/in/srinagesh-keerti",
          "className":"fa fa-linkedin"
        },
        {
          "name":"github",
          "url":"https://github.com/srinagesh11",
          "className":"fa fa-github"
        },
        {
          "name":"instagram",
          "url":"https://www.instagram.com/sri_nagesh/",
          "className":"fa fa-instagram"
        }
      ]
    },
    "resume":{
      "skillmessage":"Core technologies I work with day-to-day",
      "education":[
        {
          "school":"Santa Clara University",
          "degree":"Master of Science, Computer Science and Engineering",
          "graduated":"March 2023",
        },
        {
          "school":"Jawaharlal Nehru Technological University Hyderabad",
          "degree":"Bachelor of Technology, Computer Science and Engineering",
          "graduated":"June 2018",
        }
      ],
      "awards":[
        {
          "award":"AWS Certified Solutions Architect – Associate",
          "company":"Amazon Web Services",
          "year":"2023",
        },
        {
          "award":"High Five – Individual Award",
          "company":"Intuit",
          "year":"June 2021",
        },
        {
          "award":"Bravo – Team Award",
          "company":"Actifio",
          "year":"December 2020",
        }
      ],
      "work":[
        {
          "company":"Tesla",
          "title":"Senior Software Engineer – Cloud Platform",
          "years":"January 2023 – Present",
          "description":"One of the earliest engineers on Tesla's internal cloud platform, architecting infrastructure managing 400K+ VMs across 25+ datacenters. Built automated VM data integration pipeline to migrate 60,000+ VMs with accurate ownership mapping. Architected multi-hypervisor infrastructure (LXD + vSphere) reducing AWS cloud costs by $3M/month. Built real-time VM sync framework reducing failed deployments by 99%. Implemented IPAM integration with NetBox eliminating IP conflicts entirely. Driving GPU VM provisioning pipeline on vSphere to support AI/ML workloads. Tech stack: Golang, Kubernetes, Terraform, vSphere, GoVomi, Redis, RabbitMQ, NATS, Docker, Puppet, Next.js"
        },
        {
          "company":"F5",
          "title":"Software Engineer Intern",
          "years":"June 2022 – September 2022",
          "description":"Contributed to modernizing the NGINX SSL offloading module, migrating from a monolithic C architecture to a microservices-based design using Golang. Implemented CI/CD pipeline improvements and test coverage tooling to support the refactored architecture. Tech stack: Golang, NGINX, CI/CD"
        },
        {
          "company":"Intuit",
          "title":"Software Engineer",
          "years":"January 2021 – July 2021",
          "description":"Built scalable backend for TurboTax Product Survey platform using Java thread pools and AWS auto-scaling to handle 100K+ concurrent submissions. Developed automated security monitoring system to detect malicious IPs and auto-deploy WAF rules on AWS ELB, achieving 99.9% uptime during peak tax season. Tech stack: Java, DynamoDB, AWS (ELB, WAF, Auto Scaling)"
        },
        {
          "company":"Actifio (acquired by Google Cloud)",
          "title":"Software Engineer",
          "years":"August 2019 – December 2020",
          "description":"Refactored API architecture supporting both RESTful APIs and CLI, eliminating duplicate logic and reducing application size by 20%. Developed pre-flight checks for AWS, GCP, and Azure deployments improving backup job success rate by 95%. Built PII data masking feature with SLA compliance across Actifio's backup products. Tech stack: Java, Spring Boot, RESTful APIs, AWS, GCP, Azure"
        }
      ],
      "projects":[
        {
          "title":"Opinion Board",
          "years":"Apr 2022 – Jun 2022",
          "description":"Social platform where users can view a feed, post opinions, and comment on others posts. Features user authentication, real-time feed updates, and a clean responsive UI.",
          "tools": "ReactJS, Java, Spring Framework, PostgreSQL, Docker",
          "link" : "https://github.com/srinagesh11/opinion-board"
        },
        {
          "title":"Edeze",
          "years":"Jan 2022 – Mar 2022",
          "description":"Student Q&A Android app similar to Quora, where students can post questions and answer peers. Includes push notifications, real-time database sync, and Google authentication.",
          "tools": "Android, Java, Google Firebase (Auth, Firestore, Cloud Messaging)",
          "link" : "https://github.com/srinagesh11/Edeze"
        },
        {
          "title":"Weather Application",
          "years":"Nov 2021",
          "description":"Full-stack weather app that geocodes a location name into coordinates and fetches live temperature and weather details from a third-party API.",
          "tools": "ReactJS, NodeJS, MongoDB, CSS, HTML",
          "link" : "https://github.com/srinagesh11/weather-app"
        },
        {
          "title":"Online Shopping Application",
          "years":"Jun 2021 – Sep 2021",
          "description":"Marketplace web app where users can list and sell products, similar to Facebook Marketplace. Includes user auth, product listings, and image uploads.",
          "tools": "ReactJS, NodeJS, MongoDB, CSS, HTML",
          "link" : "https://github.com/srinagesh11/online-shopping"
        },
        {
          "title":"Chatting Application",
          "years":"Jan 2021 – Mar 2021",
          "description":"Real-time chat application supporting multi-user conversations using WebSocket-based communication via Socket.io.",
          "tools": "NodeJS, Socket.io, HTML, CSS",
          "link" : "https://github.com/srinagesh11/chatting-application"
        },
        {
          "title":"Secure Real Estate Web Portal",
          "years":"Feb 2018 – Apr 2018",
          "description":"Real estate platform with a government authorization module to validate property listings. Properties are plotted on Google Maps based on geolocation data.",
          "tools": "Java, JSP, Servlets, JavaScript, Google Maps API",
          "link" : "https://github.com/srinagesh11/Realestate-webportal"
        }
      ],
      "skills":[
        {
          "name":"Golang",
          "level":"90%"
        },
        {
          "name":"Kubernetes",
          "level":"88%"
        },
        {
          "name":"Java",
          "level":"80%"
        },
        {
          "name":"VMware vSphere",
          "level":"85%"
        },
        {
          "name":"Amazon Web Services",
          "level":"82%"
        },
        {
          "name":"Docker",
          "level":"85%"
        },
        {
          "name":"JavaScript / ReactJS",
          "level":"75%"
        },
        {
          "name":"Terraform",
          "level":"75%"
        },
        {
          "name":"SQL / NoSQL",
          "level":"80%"
        },
        {
          "name":"Redis / RabbitMQ / NATS",
          "level":"78%"
        }
      ]
    },
    "testimonials":{
      "testimonials":[
        {
          "text":"Working with Srinagesh at Tesla has been outstanding. He quickly became a VM as a Service expert within Tesla Cloud project and a versatile contributor across the platform. His readiness to assist and mentor new engineers accelerated their integration and productivity, making him the first point of contact for many. His keen ability to spot and rectify design flaws has significantly influenced feature development. His fire and forget reliability ensures he delivers excellent results independently. Srinagesh is truly one of the standout engineers I have worked with, and I highly recommend him for his expertise and impact.",
          "user":"Hassan Youssef (Sr. Staff Software Engineer at Tesla)"
        },
        {
          "text":"I have directly worked with Srinagesh for quite some time now. He is a quick learner and a very good listener. He picked up the work very quickly and was very thorough in his approach every time we discussed on a problem, be it technical or functional. The best part I liked was his attention to minute details, and coming up with questions that just seemed appropriate. He has a very good understanding of Java and related technologies. Working with him is always a pleasure.",
          "user":"Angshuman Das (Software Engineer at Google)"
        },
        {
          "text":"Srinagesh is very prompt in completing the tasks given to him. He is down to earth and always completes tasks before the deadline. He is very good in cloud computing technologies and has strong knowledge in Java.",
          "user":"Neela Shiva Prasad (Senior Software Engineer)"
        }
      ]
    }
  }
  export default data
