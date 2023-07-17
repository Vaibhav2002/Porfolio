import WorkExperience from "@/models/WorkExperience";

const workExperience: WorkExperience = {
  experiences: [
    {
      company: "Pratilipi",
      position: "Software Engineer - Intern",
      startDate: "Apr 2022",
      endDate: "Present",
      description: [
        "Revamped UI of IVM Podcasts, ensuring a fluid User Experience and implementing a redesigned homepage using Jetpack Compose.",
        "Modernized Pratilipi Comics codebase, adopting best practices of Modern Android Development and improving overall efficiency.",
        "Migrated from RxJava to Coroutines and Flow, enhancing code maintainability and performance while leveraging Kotlin ViewBinding.",
        "Revamped critical codebases, following SOLID Principles and M.A.D. practices, resulting in improved user experience and optimized performance for high-impact screens.",
      ],
    },
    {
      company: "Freelance",
      position: "Android Developer",
      startDate: "Aug 2021",
      endDate: "March 2022",
      description: [
        "Developed a comprehensive party planning app with seamless user experience and intricate functionalities.",
        "Built feature-rich e-commerce apps using Kotlin and Modern Android Development Practices.",
        "Followed SOLID and M.A.D. Practices to deliver high-quality codebases, ensuring scalability, maintainability.",
      ],
    },
    {
      company: "Flyseas Pvt Ltd.",
      position: "Android Developer - Intern",
      startDate: "Feb 2021",
      endDate: "Aug 2021",
      description: [
        "Developed two e-commerce apps from scratch, following industry-standard coding practices.",
        "Integrated over 30 REST APIs using Retrofit and adhered to MVVM architecture",
        "Applied SOLID principles and Android development best practices for a high-quality and scalable codebase.",
      ],
    },
  ],
};

export default workExperience;