import Project from "@/models/Project";

const image = (hash:string) => `https://repository-images.githubusercontent.com/${hash}`;

const projects: Project[] = [
  {
    name: "BlogVault",
    description: "Explore Your Passions and Build Your Audience on Our User-Friendly Blogging Platform",
    url: "https://github.com/Vaibhav2002/BlogVault",
    imageUrl: image("625532497/46fe03bc-8a9c-414e-b405-ec5b3cb6102e")
  },
  {
    name: "DocuBox",
    description: "DocuBox is a cloud based file storing app where you can securely store and access your documents from anywhere around the world!",
    url:"https://github.com/Vaibhav2002/DocuBox-AndroidApp",
    imageUrl: image("499822014/67941d46-d279-4308-b871-9d5dac0f046c")
  },
  {
    name: 'Taskify',
    description: "Taskify - An app to manage your daily tasks and boost your productivity.",
    url: "https://github.com/Vaibhav2002/Taskify",
    imageUrl: image("375697442/19788377-151a-4b34-a92f-d675c29660fe")
  },
  {
    name: "MusicX",
    description: "MusicX is a music player app made using Jetpack Compose and follows Material 3 guidelines.",
    url: "https://github.com/Vaibhav2002/MusicX",
    imageUrl: image("446123333/b13d625b-aa4b-4d11-8aa0-2677290ef044")
  },
  {
    name: "Quizzify",
    description: "Quizzify - Play unlimited quizzes with your friends for free 🔥.",
    url: "https://github.com/Vaibhav2002/Quizzify",
    imageUrl: image("469355489/91e5da24-e042-4891-9da3-d36954f730e8")
  },
  {
    name: 'WriterAi',
    description: "WriterAI is an AI-based content writing tool that can turn your unstructured text into engaging content.",
    url:"https://github.com/Vaibhav2002/WriterAI-Backend",
    imageUrl: image("512184098/a2318cc2-73bc-4f1c-81e2-9524c38c187b")
  },
  {
    name: 'NewsGo',
    description: "News Go - Your daily shot of news on the go 🚀",
    url: "https://github.com/Vaibhav2002/NewsGo",
    imageUrl: image("571660723/86b363d3-bb12-42ef-9bfa-168a0936e622")
  },
  {
    name: 'MovieMate',
    description: "Discover your next favourite movie with MovieMate - the ultimate movie guide with a hand-picked selection of the best films.",
    url: "https://github.com/Vaibhav2002/MovieMate-MERN",
    imageUrl: image("616081603/f806f125-89db-45d7-9145-4f6491a84f65")
  },
  {
    name: "NoteSy",
    description: "All your notes. Organized. Effortless. NoteSy is a MERN app built using Typescript following best practices.",
    url: "https://github.com/Vaibhav2002/NoteSy-MERN",
    imageUrl: image("606098421/9518388d-2566-4a9e-aaa0-fdc0956605d1")
  }
];

export default projects;
