import { button, sub } from "framer-motion/client";

export const translations = {
    en: {
        navbar: {
            home: "Home",
            about: "About Me",
            experience: "Experience",
            projects: "Projects",
            contact: "Contact",
        },
        hero: {
            based: "Based In Brazil",
            titleLine1: "Quality",
            titleLine2: "Design & Web Development",
            titleLine3: "Synergy",
            subtitle:
                "Hi, I'm Igor, I create intuitive, visually stunning and highly functional web applications.",
            btnProjects: "See My Work",
            btnContact: "Download CV",
            btnLanguage: "Portuguese",
        },
        about: {
            title: "About Me",
            paragraph1:
                "I'm a passionate web developer with a love for building elegant, user-friendly applications. With expertise in modern frontend and backend technologies, I bring ideas to life through clean code and thoughtful design.",
            paragraph2:
                "When I'm not coding, you'll find me exploring new technologies, contributing to open-source, or enjoying a good cup of coffee.",
            card1Title: "Modern Technologies",
            card1Desc: "React.Js, Tailwind, Next.Js",
            card2Title: "Back-end Solutions",
            card2Desc: "Spring-boot, .Net, Django.",
        },
        technologies: {
            title: "Current technologies",
            subtitle:
                "I'm proficient in a range of modern technologies that empower me to build highly functional solutions. These are some of my main technologies.",
        },
        experience: {
            title: "My experience",
        },
        projects: {
            title: "My projects",
            button: "All Projects",
        },
        contact: {
            title: "Like what you see?",
            subtitle: "Reach out",
            subtitle2: "via email",
            subtitle3: "to collaborate!",
            email: "Email",
            phone: "Phone",
            location: "Location",
            github: "Github",
            linkedin: "LinkedIn",
            name: "Name",
            emailInput: "Email",
            messageInput: "Message",
            sendButton: "Submit",
        },
    },
    pt: {
        navbar: {
            home: "Início",
            about: "Sobre Mim",
            experience: "Experiência",
            projects: "Projetos",
            contact: "Contato",
        },
        hero: {
            based: "Baseado no Brasil",
            titleLine1: "Qualidade",
            titleLine2: "Design & Desenvolvimento Web",
            titleLine3: "Conectados",
            subtitle:
                "Olá, sou Igor, crio aplicações web intuitivas, visualmente impressionantes e altamente funcionais.",
            btnProjects: "Veja Meu Trabalho",
            btnContact: "Baixar CV",
            btnLanguage: "English",
        },
        about: {
            title: "Sobre Mim",
            paragraph1:
                "Sou um desenvolvedor web apaixonado por criar aplicações elegantes e fáceis de usar. Com expertise em tecnologias modernas de frontend e backend, dou vida às ideias através de código limpo e design cuidadoso.",
            paragraph2:
                "Quando não estou codificando, você me encontrará explorando novas tecnologias, contribuindo para projetos open-source ou apreciando uma boa xícara de café.",
            card1Title: "Tecnologias Modernas",
            card1Desc: "React.Js, Tailwind, Next.Js",
            card2Title: "Soluções Back-end",
            card2Desc: "Spring-boot, .Net, Django.",
        },
        technologies: {
            title: "Tecnologias atuais",
            subtitle:
                "Sou proficiente em uma variedade de tecnologias modernas que me permitem construir soluções altamente funcionais. Estas são algumas das minhas principais tecnologias.",
        },
        experience: {
            title: "Minha experiência",
        },
        projects: {
            title: "Meus projetos",
            button: "Todos os Projetos",
        },
        contact: {
            title: "Gostou do que viu?",
            subtitle: "Entre em contato",
            subtitle2: "via email",
            subtitle3: "para colaborar!",
            email: "Email",
            phone: "Telefone",
            location: "Localização",
            github: "Github",
            linkedin: "LinkedIn",
            name: "Nome",
            emailInput: "Email",
            messageInput: "Mensagem",
            sendButton: "Enviar",
        },
    },
};

export type Language = "en" | "pt";
