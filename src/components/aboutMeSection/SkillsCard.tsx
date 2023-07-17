import React from "react";
import Card from "@/components/Card";

interface SkillsCardProps {
  className?: string;
}

const SkillsCard = ({ className = "" }: SkillsCardProps) => {
  return (
    <Card
      className={`lg:py-18 flex flex-col items-center gap-20 bg-base-200 text-primary ${className}`}
    >
      <span className="text-base font-medium md:text-2xl">My Skills</span>
      <SkillsIcons />
    </Card>
  );
};

const skills = [
  "androidstudio",
  "gradle",
  "kotlin",
  "java",
  "bootstrap",
  "css",
  "emotion",
  "express",
  "html",
  "js",
  "ts",
  "materialui",
  "mongodb",
  "nextjs",
  "nodejs",
  "prisma",
  "react",
  "redis",
  "redux",
  "sass",
  "styledcomponents",
  "tailwind",
  "vite",
  "webpack",
  "ktor",
  "graphql",
  "mysql",
  "postgres",
  "sqlite",
  "aws",
  "c",
  "cpp",
  "figma",
  "firebase",
  "git",
  "github",
  "idea",
  "linux",
  "md",
  "nginx",
  "planetscale",
  "postman",
  "swift",
  "vscode",
  "spring",
  "heroku",
  "gcp",
].join(",");

const SkillsIcons = () => {
  return (
    <>

      {/*desktop view*/}
      <div className="flex hidden w-full items-center justify-center lg:block">
        <img
          src={`https://skillicons.dev/icons?i=${skills}`}
          style={{ width: "100%", objectFit: "contain" }}
        />
      </div>


      {/*tablet view*/}
      <div className="flex hidden w-full items-center justify-center md:block lg:hidden">
        <img
          src={`https://skillicons.dev/icons?i=${skills}&perline=12`}
          style={{ width: "100%", objectFit: "contain" }}
        />
      </div>

      {/*mobile view*/}
      <div className="block flex w-full items-center justify-center md:hidden">
        <img
          src={`https://skillicons.dev/icons?i=${skills}&perline=7`}
          style={{ width: "100%", objectFit: "contain" }}
        />
      </div>
    </>
  );
};

export default SkillsCard;
