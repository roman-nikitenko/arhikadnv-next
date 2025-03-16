import { PortfolioCardType, typeWork } from "./types/portfolio";
import project1 from "./public/portfolio/project1/101-BB-01-pages-1.jpg";
import project2 from "./public/portfolio/project1/101-BB-01-pages-2.jpg";
import project3 from "./public/portfolio/project1/101-BB-01-pages-3.jpg";
import project4 from "./public/portfolio/project1/101-BB-01-pages-4.jpg";
import project2_1 from "./public/portfolio/project2/Screenshot 2024-07-01.jpg";
import project2_2 from "./public/portfolio/project2/Screenshot 2024-07-02.jpg";
import project2_3 from "./public/portfolio/project2/Screenshot 2024-07-03.jpg";
import project2_4 from "./public/portfolio/project2/Screenshot 2024-07-04.png";
import project3_1 from "./public/portfolio/project3/Screenshot 2024-07-01.jpg";
import project3_2 from "./public/portfolio/project3/Screenshot 2024-07-02.jpg";
import project3_3 from "./public/portfolio/project3/Screenshot 2024-07-03.jpg";

export const slogan = "Втілюємо ваші мрії в архітектурні рішення";
export const phoneNumber = "(098) 005 54 04";
export const address = "Вул Героїв Майдану 15 офіс 58, м.Буча";

export const portfolioList: PortfolioCardType[] = [
  {
    id: "1",
    title: "Building constracrions in Bucha",
    subTitle:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque esse hic impedit quae repudiandae ullam.",
    typeOfWork: typeWork.construction,
    backgroundImage: "./public/portfolio/project1/101-BB-01-pages-1.jpg",
    listOfWorks: [
      "./public/portfolio/project1/101-BB-01-pages-1.jpg",
      "./public/portfolio/project1/101-BB-01-pages-2.jpg",
      "./public/portfolio/project1/101-BB-01-pages-3.jpg",
      "./public/portfolio/project1/101-BB-01-pages-4.jpg",
    ],
  },
  {
    id: "2",
    title: "Kitchen remodeling in Hollywood Hills",
    subTitle:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque esse hic impedit quae repudiandae ullam.",
    typeOfWork: typeWork.design,
    backgroundImage: "./public/portfolio/project2/Screenshot 2024-07-02.jpg",
    listOfWorks: [
      "./public/portfolio/project2/Screenshot 2024-07-01.jpg",
      "./public/portfolio/project2/Screenshot 2024-07-02.jpg",
      "./public/portfolio/project2/Screenshot 2024-07-03.jpg",
      "./public/portfolio/project2/Screenshot 2024-07-04.png",
    ],
  },
  {
    id: "3",
    title: "Office remodeling in Hollywood Hills",
    subTitle:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque esse hic impedit quae repudiandae ullam.",
    typeOfWork: typeWork.remodeling,
    backgroundImage: "./public/portfolio/project3/Screenshot 2024-07-03.jpg",
    listOfWorks: [
      "./public/portfolio/project3/Screenshot 2024-07-01.jpg",
      "./public/portfolio/project3/Screenshot 2024-07-02.jpg",
      "./public/portfolio/project3/Screenshot 2024-07-03.jpg",
    ],
  },
  {
    id: "4",
    title: "Office remodeling in Hollywood Hills",
    subTitle:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque esse hic impedit quae repudiandae ullam.",
    typeOfWork: typeWork.remodeling,
    backgroundImage: "./public/portfolio/project3/Screenshot 2024-07-03.jpg",
    listOfWorks: [
      "./public/portfolio/project3/Screenshot 2024-07-01.jpg",
      "./public/portfolio/project3/Screenshot 2024-07-02.jpg",
      "./public/portfolio/project3/Screenshot 2024-07-03.jpg",
    ],
  },
];
