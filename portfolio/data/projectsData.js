// /data/projectsData.js
const projectsData = [
    {
        slug: "personal-portfolio",
        title: {
            en: "Personal Portfolio Website",
            es: "Sitio Web de Portafolio Personal"
        },
        image: "/assets/images/project_screenshots/portfolio.png",
        shortDescription: {
            en: "A modern, responsive portfolio showcasing skills, projects, and experience, built with Nuxt.js and Tailwind CSS.",
            es: "Un portafolio moderno y responsivo que muestra habilidades, proyectos y experiencia, construido con Nuxt.js y Tailwind CSS."
        },
        technologies: ["Nuxt.js", "Vue.js", "Tailwind CSS", "JavaScript"],
        date: "2023-12-01",
        fullDescription: {
            en: [
                "Developed a personal portfolio website to showcase my skills, projects, and professional experience. The website is built using Nuxt.js, a powerful Vue.js framework for creating server-side rendered (SSR) and static websites.",
                "Implemented a clean and modern design using Tailwind CSS, a utility-first CSS framework. The portfolio features a responsive layout that adapts to different screen sizes, ensuring a seamless user experience across devices.",
                "Incorporated interactive elements using Vue.js, such as a dynamic project filtering system and a dark/light mode toggle. The website also includes subtle animations and transitions to enhance user engagement.",
                "Optimized the website for search engines (SEO) by utilizing Nuxt.js's built-in SEO capabilities. Implemented best practices for accessibility, achieving a high score on Google Lighthouse.",
                "Deployed the website using Vercel, a cloud platform for static sites and serverless functions. The portfolio is designed to be easily maintainable and extensible, allowing for future updates and additions."
            ],
            es: [
                "Desarrollé un sitio web de portafolio personal para mostrar mis habilidades, proyectos y experiencia profesional. El sitio web está construido usando Nuxt.js, un poderoso framework de Vue.js para crear sitios web renderizados en el servidor (SSR) y estáticos.",
                "Implementé un diseño limpio y moderno usando Tailwind CSS, un framework CSS de utilidad primero. El portafolio presenta un diseño responsivo que se adapta a diferentes tamaños de pantalla, asegurando una experiencia de usuario fluida en todos los dispositivos.",
                "Incorporé elementos interactivos usando Vue.js, como un sistema dinámico de filtrado de proyectos y un interruptor de modo oscuro/claro. El sitio web también incluye animaciones y transiciones sutiles para mejorar la interacción del usuario.",
                "Optimicé el sitio web para los motores de búsqueda (SEO) utilizando las capacidades SEO integradas de Nuxt.js. Implementé las mejores prácticas para la accesibilidad, logrando una alta puntuación en Google Lighthouse.",
                "Desplegué el sitio web usando Vercel, una plataforma en la nube para sitios estáticos y funciones sin servidor. El portafolio está diseñado para ser fácilmente mantenible y extensible, permitiendo futuras actualizaciones y adiciones."
            ]
        },
        liveLink: "https://anabel-portfolio.vercel.app", // Replace with actual link
        codeLink: "https://github.com/anabeljesuslorenzo/portfolio" // Replace with actual link
    },
    {
        slug: "ai-chatbot",
        title: {
            en: "AI-Driven Chatbot",
            es: "Chatbot Impulsado por IA"
        },
        image: "/assets/images/project_screenshots/chatbot.png",
        shortDescription: {
            en: "An intelligent chatbot powered by natural language processing and machine learning, capable of understanding and responding to user queries.",
            es: "Un chatbot inteligente impulsado por procesamiento de lenguaje natural y aprendizaje automático, capaz de entender y responder a las consultas de los usuarios."
        },
        technologies: ["Python", "NLP", "Machine Learning", "Flask"],
        date: "2022-05-15",
        fullDescription: {
            en: [
                "Developed an AI-driven chatbot as part of an academic project, showcasing the application of natural language processing (NLP) and machine learning in creating conversational agents.",
                "Implemented the chatbot using Python, leveraging libraries such as NLTK and spaCy for text processing, and TensorFlow/Keras for building and training the machine learning models.",
                "Designed the chatbot to understand user intents and context through a combination of rule-based and machine learning approaches. The model was trained on a custom dataset to recognize a variety of user queries and provide relevant responses.",
                "Integrated the chatbot with a Flask-based web application, allowing users to interact with the chatbot through a simple and intuitive web interface. The web application was designed to be responsive and user-friendly.",
                "Conducted extensive testing and evaluation of the chatbot, achieving a conversational accuracy rate of 85% in user testing. Presented the project at the university's annual tech symposium, receiving positive feedback for innovation and practical application of AI."
            ],
            es: [
                "Desarrollé un chatbot impulsado por IA como parte de un proyecto académico, mostrando la aplicación del procesamiento del lenguaje natural (PLN) y el aprendizaje automático en la creación de agentes conversacionales.",
                "Implementé el chatbot usando Python, aprovechando bibliotecas como NLTK y spaCy para el procesamiento de texto, y TensorFlow/Keras para construir y entrenar los modelos de aprendizaje automático.",
                "Diseñé el chatbot para entender las intenciones y el contexto del usuario a través de una combinación de enfoques basados en reglas y aprendizaje automático. El modelo fue entrenado en un conjunto de datos personalizado para reconocer una variedad de consultas de los usuarios y proporcionar respuestas relevantes.",
                "Integré el chatbot con una aplicación web basada en Flask, permitiendo a los usuarios interactuar con el chatbot a través de una interfaz web simple e intuitiva. La aplicación web fue diseñada para ser responsiva y fácil de usar.",
                "Realicé pruebas y evaluaciones exhaustivas del chatbot, logrando una tasa de precisión conversacional del 85% en las pruebas de usuario. Presenté el proyecto en el simposio tecnológico anual de la universidad, recibiendo comentarios positivos por la innovación y la aplicación práctica de la IA."
            ]
        },
        liveLink: null,
        codeLink: "https://github.com/anabeljesuslorenzo/ai-chatbot" // Replace with actual link
    },
    {
        slug: "microservices-architecture",
        title: {
            en: "Microservices Architecture for E-commerce",
            es: "Arquitectura de Microservicios para Comercio Electrónico"
        },
        image: "/assets/images/project_screenshots/microservices.png",
        shortDescription: {
            en: "Designed and implemented a scalable e-commerce platform using microservices architecture, improving system resilience and maintainability.",
            es: "Diseñé e implementé una plataforma de comercio electrónico escalable utilizando arquitectura de microservicios, mejorando la resiliencia y mantenibilidad del sistema."
        },
        technologies: ["Python", "Flask", "Docker", "Kubernetes", "SQL"],
        date: "2023-08-20",
        fullDescription: {
            en: [
                "Led the development of a microservices-based architecture for an e-commerce platform as part of my role at TREBOL ENERGIA. The goal was to improve the scalability, resilience, and maintainability of the existing monolithic system.",
                "Designed and implemented multiple microservices using Python and Flask, each responsible for a specific business function such as product catalog, user authentication, shopping cart, and order processing.",
                "Utilized Docker for containerization of each microservice, ensuring consistency across different environments and simplifying deployment. Implemented container orchestration using Kubernetes, enabling automated deployment, scaling, and management of the microservices.",
                "Implemented RESTful APIs for communication between microservices, following best practices for API design, documentation, and versioning. Used tools like Swagger for API documentation and testing.",
                "Optimized database interactions using SQL, ensuring efficient data retrieval and storage. Implemented database sharding and replication to improve performance and ensure data availability.",
                "Collaborated closely with cross-functional teams, including front-end developers, DevOps engineers, and product managers, to ensure seamless integration and alignment with business requirements. The project resulted in a 40% increase in system performance and significantly reduced downtime."
            ],
            es: [
                "Lideré el desarrollo de una arquitectura basada en microservicios para una plataforma de comercio electrónico como parte de mi rol en TREBOL ENERGIA. El objetivo era mejorar la escalabilidad, resiliencia y mantenibilidad del sistema monolítico existente.",
                "Diseñé e implementé múltiples microservicios utilizando Python y Flask, cada uno responsable de una función de negocio específica como catálogo de productos, autenticación de usuarios, carrito de compras y procesamiento de pedidos.",
                "Utilicé Docker para la contenerización de cada microservicio, asegurando la consistencia en diferentes entornos y simplificando la implementación. Implementé la orquestación de contenedores utilizando Kubernetes, permitiendo la implementación, escalado y gestión automatizados de los microservicios.",
                "Implementé APIs RESTful para la comunicación entre microservicios, siguiendo las mejores prácticas para el diseño, documentación y versionado de APIs. Utilicé herramientas como Swagger para la documentación y pruebas de APIs.",
                "Optimicé las interacciones con la base de datos utilizando SQL, asegurando una recuperación y almacenamiento de datos eficiente. Implementé la partición y replicación de la base de datos para mejorar el rendimiento y asegurar la disponibilidad de los datos.",
                "Colaboré estrechamente con equipos multifuncionales, incluyendo desarrolladores front-end, ingenieros DevOps y gerentes de producto, para asegurar una integración fluida y la alineación con los requerimientos del negocio. El proyecto resultó en un aumento del 40% en el rendimiento del sistema y redujo significativamente el tiempo de inactividad."
            ]
        },
        liveLink: null,
        codeLink: null
    },
    {
        slug: "video-game-engine",
        title: {
            en: "3D Video Game Engine",
            es: "Motor de Videojuegos 3D"
        },
        image: "/assets/images/project_screenshots/game_engine.png",
        shortDescription: {
            en: "Developed a custom 3D game engine from scratch as a capstone project, demonstrating skills in graphics programming, AI, and physics simulation.",
            es: "Desarrollé un motor de videojuegos 3D personalizado desde cero como proyecto final, demostrando habilidades en programación de gráficos, IA y simulación física."
        },
        technologies: ["C++", "OpenGL", "Physics Engine"],
        date: "2021-06-01",
        fullDescription: {
            en: [
                "As a capstone project for my B.Sc. in Video Game Design and Development, I designed and developed a 3D game engine from scratch using C++ and OpenGL.",
                "Implemented core engine components, including a rendering pipeline, scene management, resource loading, and a scripting system. The rendering pipeline supported features such as real-time lighting, shadows, and texturing.",
                "Integrated a custom physics engine to handle collision detection, rigid body dynamics, and basic character physics. Implemented algorithms for realistic simulation of physical interactions within the game world.",
                "Developed an AI system to control non-player characters (NPCs), implementing pathfinding, decision-making, and behavior trees. The AI system enabled the creation of dynamic and engaging game scenarios.",
                "Created tools and utilities to support game development, including a level editor and a debugging console. The level editor allowed for the creation and manipulation of game environments, while the debugging console provided real-time insights into engine performance and game state.",
                "Demonstrated the capabilities of the game engine by developing a playable demo game featuring multiple levels, interactive objects, and AI-controlled enemies. The project showcased my skills in graphics programming, game design, and software engineering."
            ],
            es: [
                "Como proyecto final para mi Grado en Diseño y Desarrollo de Videojuegos, diseñé y desarrollé un motor de videojuegos 3D desde cero utilizando C++ y OpenGL.",
                "Implementé componentes centrales del motor, incluyendo un pipeline de renderizado, gestión de escenas, carga de recursos y un sistema de scripting. El pipeline de renderizado soportaba características como iluminación en tiempo real, sombras y texturizado.",
                "Integré un motor de física personalizado para manejar la detección de colisiones, la dinámica de cuerpos rígidos y la física básica de personajes. Implementé algoritmos para la simulación realista de interacciones físicas dentro del mundo del juego.",
                "Desarrollé un sistema de IA para controlar personajes no jugadores (NPCs), implementando pathfinding, toma de decisiones y árboles de comportamiento. El sistema de IA permitió la creación de escenarios de juego dinámicos y atractivos.",
                "Creé herramientas y utilidades para apoyar el desarrollo del juego, incluyendo un editor de niveles y una consola de depuración. El editor de niveles permitía la creación y manipulación de entornos de juego, mientras que la consola de depuración proporcionaba información en tiempo real sobre el rendimiento del motor y el estado del juego.",
                "Demostré las capacidades del motor de juegos desarrollando un juego demo jugable con múltiples niveles, objetos interactivos y enemigos controlados por IA. El proyecto mostró mis habilidades en programación de gráficos, diseño de juegos e ingeniería de software."
            ]
        },
        liveLink: null,
        codeLink: "https://github.com/anabeljesuslorenzo/game-engine" // Replace with actual link
    },
    {
        slug: "web-app-vue",
        title: {
            en: "Web Application with Vue.js",
            es: "Aplicación Web con Vue.js"
        },
        image: "/assets/images/project_screenshots/web_app.png",
        shortDescription: {
            en: "Contributed to the development of a dynamic web application using Vue.js and Flask, focusing on front-end development and UI/UX design.",
            es: "Contribuí al desarrollo de una aplicación web dinámica utilizando Vue.js y Flask, centrándome en el desarrollo front-end y el diseño UI/UX."
        },
        technologies: ["Vue.js", "JavaScript", "Flask", "HTML", "CSS"],
        date: "2020-09-01",
        fullDescription: {
            en: [
                "During my internship at SoftSolutions, I contributed to the development of a web application that aimed to streamline internal workflows and improve data management.",
                "Worked primarily on the front-end using Vue.js, creating reusable components and implementing dynamic user interfaces. Utilized Vuex for state management and Vue Router for client-side routing.",
                "Collaborated with the back-end team to integrate the front-end with a Flask-based RESTful API. Implemented data fetching, form handling, and user authentication using asynchronous JavaScript and Axios.",
                "Focused on creating a responsive and user-friendly design, ensuring the application was accessible across different devices and screen sizes. Implemented UI/UX best practices to enhance user engagement and satisfaction.",
                "Participated in code reviews, agile development practices, and version control using Git. Gained valuable experience in collaborative software development and learned about the importance of writing clean, maintainable code."
            ],
            es: [
                "Durante mi pasantía en SoftSolutions, contribuí al desarrollo de una aplicación web que tenía como objetivo agilizar los flujos de trabajo internos y mejorar la gestión de datos.",
                "Trabajé principalmente en el front-end usando Vue.js, creando componentes reutilizables e implementando interfaces de usuario dinámicas. Utilicé Vuex para la gestión del estado y Vue Router para el enrutamiento del lado del cliente.",
                "Colaboré con el equipo de back-end para integrar el front-end con una API RESTful basada en Flask. Implementé la obtención de datos, el manejo de formularios y la autenticación de usuarios usando JavaScript asíncrono y Axios.",
                "Me centré en crear un diseño responsivo y fácil de usar, asegurando que la aplicación fuera accesible en diferentes dispositivos y tamaños de pantalla. Implementé las mejores prácticas de UI/UX para mejorar la participación y satisfacción del usuario.",
                "Participé en revisiones de código, prácticas de desarrollo ágil y control de versiones usando Git. Obtuve una valiosa experiencia en el desarrollo colaborativo de software y aprendí sobre la importancia de escribir código limpio y mantenible."
            ]
        },
        liveLink: null,
        codeLink: null
    },
    {
        slug: "real-time-data-visualization",
        title: {
            en: "Real-Time Data Visualization Dashboard",
            es: "Panel de Visualización de Datos en Tiempo Real"
        },
        image: "/assets/images/project_screenshots/data_visualization.png",
        shortDescription: {
            en: "Built a real-time data visualization dashboard using Python and JavaScript, enabling live monitoring and analysis of key performance indicators.",
            es: "Construí un panel de visualización de datos en tiempo real usando Python y JavaScript, permitiendo el monitoreo y análisis en vivo de indicadores clave de rendimiento."
        },
        technologies: ["Python", "JavaScript", "D3.js", "WebSocket"],
        date: "2023-03-15",
        fullDescription: {
            en: [
                "Developed a real-time data visualization dashboard to monitor and analyze key performance indicators (KPIs) for an e-commerce platform. The dashboard provides live updates and interactive visualizations, enabling stakeholders to make data-driven decisions.",
                "Implemented the back-end using Python, with a focus on data processing and aggregation. Utilized libraries such as Pandas for data manipulation and WebSocket for real-time communication with the front-end.",
                "Developed the front-end using JavaScript and D3.js, a powerful library for creating dynamic and interactive data visualizations. Designed charts and graphs to display KPIs such as sales, traffic, and conversion rates in real-time.",
                "Implemented a responsive design, ensuring the dashboard is accessible and functional across different devices and screen sizes. Optimized the performance of the dashboard to handle large volumes of data and provide a smooth user experience.",
                "Deployed the dashboard on a cloud platform, utilizing Docker for containerization and Kubernetes for orchestration. The project resulted in a 25% increase in the efficiency of data analysis and reporting."
            ],
            es: [
                "Desarrollé un panel de visualización de datos en tiempo real para monitorear y analizar indicadores clave de rendimiento (KPIs) para una plataforma de comercio electrónico. El panel proporciona actualizaciones en vivo y visualizaciones interactivas, permitiendo a las partes interesadas tomar decisiones basadas en datos.",
                "Implementé el back-end usando Python, con un enfoque en el procesamiento y agregación de datos. Utilicé bibliotecas como Pandas para la manipulación de datos y WebSocket para la comunicación en tiempo real con el front-end.",
                "Desarrollé el front-end usando JavaScript y D3.js, una poderosa biblioteca para crear visualizaciones de datos dinámicas e interactivas. Diseñé gráficos y diagramas para mostrar KPIs como ventas, tráfico y tasas de conversión en tiempo real.",
                "Implementé un diseño responsivo, asegurando que el panel sea accesible y funcional en diferentes dispositivos y tamaños de pantalla. Optimicé el rendimiento del panel para manejar grandes volúmenes de datos y proporcionar una experiencia de usuario fluida.",
                "Desplegué el panel en una plataforma en la nube, utilizando Docker para la contenerización y Kubernetes para la orquestación. El proyecto resultó en un aumento del 25% en la eficiencia del análisis y reporte de datos."
            ]
        },
        liveLink: null,
        codeLink: "https://github.com/anabeljesuslorenzo/data-visualization-dashboard" // Replace with actual link
    }
];

export default projectsData;