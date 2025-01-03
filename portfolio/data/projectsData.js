// /data/projectsData.js
const projectsData = [
    {
        slug: "personal-portfolio",
        title: "Personal Portfolio Website",
        image: "/assets/images/project_screenshots/portfolio.jpg",
        shortDescription: "A modern, responsive portfolio showcasing skills, projects, and experience, built with Nuxt.js and Tailwind CSS.",
        technologies: ["Nuxt.js", "Vue.js", "Tailwind CSS", "JavaScript"],
        date: "2023-12-01",
        fullDescription: [
            "Developed a personal portfolio website to showcase my skills, projects, and professional experience. The website is built using Nuxt.js, a powerful Vue.js framework for creating server-side rendered (SSR) and static websites.",
            "Implemented a clean and modern design using Tailwind CSS, a utility-first CSS framework. The portfolio features a responsive layout that adapts to different screen sizes, ensuring a seamless user experience across devices.",
            "Incorporated interactive elements using Vue.js, such as a dynamic project filtering system and a dark/light mode toggle. The website also includes subtle animations and transitions to enhance user engagement.",
            "Optimized the website for search engines (SEO) by utilizing Nuxt.js's built-in SEO capabilities. Implemented best practices for accessibility, achieving a high score on Google Lighthouse.",
            "Deployed the website using Vercel, a cloud platform for static sites and serverless functions. The portfolio is designed to be easily maintainable and extensible, allowing for future updates and additions."
        ],
        liveLink: "https://anabel-portfolio.vercel.app", // Replace with actual link
        codeLink: "https://github.com/anabeljesuslorenzo/portfolio" // Replace with actual link
    },
    {
        slug: "ai-chatbot",
        title: "AI-Driven Chatbot",
        image: "/assets/images/project_screenshots/chatbot.jpg",
        shortDescription: "An intelligent chatbot powered by natural language processing and machine learning, capable of understanding and responding to user queries.",
        technologies: ["Python", "NLP", "Machine Learning", "Flask"],
        date: "2022-05-15",
        fullDescription: [
            "Developed an AI-driven chatbot as part of an academic project, showcasing the application of natural language processing (NLP) and machine learning in creating conversational agents.",
            "Implemented the chatbot using Python, leveraging libraries such as NLTK and spaCy for text processing, and TensorFlow/Keras for building and training the machine learning models.",
            "Designed the chatbot to understand user intents and context through a combination of rule-based and machine learning approaches. The model was trained on a custom dataset to recognize a variety of user queries and provide relevant responses.",
            "Integrated the chatbot with a Flask-based web application, allowing users to interact with the chatbot through a simple and intuitive web interface. The web application was designed to be responsive and user-friendly.",
            "Conducted extensive testing and evaluation of the chatbot, achieving a conversational accuracy rate of 85% in user testing. Presented the project at the university's annual tech symposium, receiving positive feedback for innovation and practical application of AI."
        ],
        liveLink: null,
        codeLink: "https://github.com/anabeljesuslorenzo/ai-chatbot" // Replace with actual link
    },
    {
        slug: "microservices-architecture",
        title: "Microservices Architecture for E-commerce",
        image: "/assets/images/project_screenshots/microservices.jpg",
        shortDescription: "Designed and implemented a scalable e-commerce platform using microservices architecture, improving system resilience and maintainability.",
        technologies: ["Python", "Flask", "Docker", "Kubernetes", "SQL"],
        date: "2023-08-20",
        fullDescription: [
            "Led the development of a microservices-based architecture for an e-commerce platform as part of my role at TREBOL ENERGIA. The goal was to improve the scalability, resilience, and maintainability of the existing monolithic system.",
            "Designed and implemented multiple microservices using Python and Flask, each responsible for a specific business function such as product catalog, user authentication, shopping cart, and order processing.",
            "Utilized Docker for containerization of each microservice, ensuring consistency across different environments and simplifying deployment. Implemented container orchestration using Kubernetes, enabling automated deployment, scaling, and management of the microservices.",
            "Implemented RESTful APIs for communication between microservices, following best practices for API design, documentation, and versioning. Used tools like Swagger for API documentation and testing.",
            "Optimized database interactions using SQL, ensuring efficient data retrieval and storage. Implemented database sharding and replication to improve performance and ensure data availability.",
            "Collaborated closely with cross-functional teams, including front-end developers, DevOps engineers, and product managers, to ensure seamless integration and alignment with business requirements. The project resulted in a 40% increase in system performance and significantly reduced downtime."
        ],
        liveLink: null,
        codeLink: null
    },
    {
        slug: "video-game-engine",
        title: "3D Video Game Engine",
        image: "/assets/images/project_screenshots/game_engine.jpg",
        shortDescription: "Developed a custom 3D game engine from scratch as a capstone project, demonstrating skills in graphics programming, AI, and physics simulation.",
        technologies: ["C++", "OpenGL", "Physics Engine"],
        date: "2021-06-01",
        fullDescription: [
            "As a capstone project for my B.Sc. in Video Game Design and Development, I designed and developed a 3D game engine from scratch using C++ and OpenGL.",
            "Implemented core engine components, including a rendering pipeline, scene management, resource loading, and a scripting system. The rendering pipeline supported features such as real-time lighting, shadows, and texturing.",
            "Integrated a custom physics engine to handle collision detection, rigid body dynamics, and basic character physics. Implemented algorithms for realistic simulation of physical interactions within the game world.",
            "Developed an AI system to control non-player characters (NPCs), implementing pathfinding, decision-making, and behavior trees. The AI system enabled the creation of dynamic and engaging game scenarios.",
            "Created tools and utilities to support game development, including a level editor and a debugging console. The level editor allowed for the creation and manipulation of game environments, while the debugging console provided real-time insights into engine performance and game state.",
            "Demonstrated the capabilities of the game engine by developing a playable demo game featuring multiple levels, interactive objects, and AI-controlled enemies. The project showcased my skills in graphics programming, game design, and software engineering."
        ],
        liveLink: null,
        codeLink: "https://github.com/anabeljesuslorenzo/game-engine" // Replace with actual link
    },
    {
        slug: "web-app-vue",
        title: "Web Application with Vue.js",
        image: "/assets/images/project_screenshots/web_app.jpg",
        shortDescription: "Contributed to the development of a dynamic web application using Vue.js and Flask, focusing on front-end development and UI/UX design.",
        technologies: ["Vue.js", "JavaScript", "Flask", "HTML", "CSS"],
        date: "2020-09-01",
        fullDescription: [
            "During my internship at SoftSolutions, I contributed to the development of a web application that aimed to streamline internal workflows and improve data management.",
            "Worked primarily on the front-end using Vue.js, creating reusable components and implementing dynamic user interfaces. Utilized Vuex for state management and Vue Router for client-side routing.",
            "Collaborated with the back-end team to integrate the front-end with a Flask-based RESTful API. Implemented data fetching, form handling, and user authentication using asynchronous JavaScript and Axios.",
            "Focused on creating a responsive and user-friendly design, ensuring the application was accessible across different devices and screen sizes. Implemented UI/UX best practices to enhance user engagement and satisfaction.",
            "Participated in code reviews, agile development practices, and version control using Git. Gained valuable experience in collaborative software development and learned about the importance of writing clean, maintainable code."
        ],
        liveLink: null,
        codeLink: null
    },
    {
        slug: "real-time-data-visualization",
        title: "Real-Time Data Visualization Dashboard",
        image: "/assets/images/project_screenshots/data_visualization.jpg",
        shortDescription: "Built a real-time data visualization dashboard using Python and JavaScript, enabling live monitoring and analysis of key performance indicators.",
        technologies: ["Python", "JavaScript", "D3.js", "WebSocket"],
        date: "2023-03-15",
        fullDescription: [
            "Developed a real-time data visualization dashboard to monitor and analyze key performance indicators (KPIs) for an e-commerce platform. The dashboard provides live updates and interactive visualizations, enabling stakeholders to make data-driven decisions.",
            "Implemented the back-end using Python, with a focus on data processing and aggregation. Utilized libraries such as Pandas for data manipulation and WebSocket for real-time communication with the front-end.",
            "Developed the front-end using JavaScript and D3.js, a powerful library for creating dynamic and interactive data visualizations. Designed charts and graphs to display KPIs such as sales, traffic, and conversion rates in real-time.",
            "Implemented a responsive design, ensuring the dashboard is accessible and functional across different devices and screen sizes. Optimized the performance of the dashboard to handle large volumes of data and provide a smooth user experience.",
            "Deployed the dashboard on a cloud platform, utilizing Docker for containerization and Kubernetes for orchestration. The project resulted in a 25% increase in the efficiency of data analysis and reporting."
        ],
        liveLink: null,
        codeLink: "https://github.com/anabeljesuslorenzo/data-visualization-dashboard" // Replace with actual link
    }
];

export default projectsData;