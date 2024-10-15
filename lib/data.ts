import {
  ICarouselItem,
  ISlide,
  ITestimonialData,
  ITeamData,
  IReviewsData,
  ICourses,
} from './type';

export const slides: ISlide[] = [
  {
    id: '1',
    image:
      'https://firebasestorage.googleapis.com/v0/b/coast-craft.appspot.com/o/tutorial.webp?alt=media&token=029195b3-2fe2-4db6-87da-db7ce89138f9',
    heading: 'Innovating Tomorrow with Bespoke Software Solutions',
    text: 'Custom software development tailored to your business needs.',
    tip: 'Unlock Growth',
    linkText: 'Learn more about our solutions',
    url: '/services',
  },
  {
    id: '2',
    image:
      'https://firebasestorage.googleapis.com/v0/b/coast-craft.appspot.com/o/craft.webp?alt=media&token=490895ad-ee9f-4226-9e94-92f5e0168cbf',
    heading: 'Coastlink24 – Revolutionizing Loan Management',
    text: 'A seamless platform for managing loan requests, disbursements, and repayments via USSD or web.',
    tip: 'Discover Coastlink24',
    linkText: 'See how it works.',
    url: 'www.coastresearchtechnology.com.ng',
  },
  {
    id: '3',
    image:
      'https://firebasestorage.googleapis.com/v0/b/coast-craft.appspot.com/o/tutorial.webp?alt=media&token=029195b3-2fe2-4db6-87da-db7ce89138f9',
    heading: 'LendAsset API – Connecting Asset Providers and Lenders',
    text: 'An API platform designed to link asset providers and lenders effortlessly.',
    tip: 'Explore LendAsset',
    linkText: 'Integrate with ease.',
    url: 'www.coastresearchtechnology.com.ng',
  },
  {
    id: '4',
    image:
      'https://firebasestorage.googleapis.com/v0/b/coast-craft.appspot.com/o/companyhero.webp?alt=media&token=b0b7e7eb-da38-4458-9c69-9f6d429c08ff',
    heading: 'Empowering the Future of Tech Professionals',
    text: 'Hands-on training programs designed to equip you with industry-leading skills.',
    tip: 'Get Trained',
    linkText: 'Explore our courses.',
    url: '/trainings',
  },
  {
    id: '5',
    image:
      'https://firebasestorage.googleapis.com/v0/b/coast-craft.appspot.com/o/recruit.webp?alt=media&token=91a74347-703e-4040-bb48-18255b050cf0',
    heading: 'Recruitment Services for Top Tech Talent',
    text: 'Find the right candidates to drive your business forward.',
    tip: 'Hire the Best',
    linkText: 'Start your search now.',
    url: '/career',
  },
  {
    id: '6',
    image:
      'https://firebasestorage.googleapis.com/v0/b/coast-craft.appspot.com/o/tutorial.webp?alt=media&token=029195b3-2fe2-4db6-87da-db7ce89138f9',
    heading: 'Coast Craft – Insights and Innovation',
    text: 'Your hub for tech news, tips, and trends.',
    tip: 'Read the Latest',
    linkText: 'Visit our blog.',
    url: '/coast-craft',
  },
];

export const testimonial: ITestimonialData[] = [
  {
    id: '1',
    position: 1,
    image: '/taiwo-oredugba.jpg',
    name: 'Taiwo Oredugba',
    text: 'Coast research is just that tech family everyone needs.',
    url: 'https://maps.app.goo.gl/JW2G7VNWPRbh17at5',
  },
  {
    id: '2',
    position: 2,
    image: '/kolade-agboola-nelson.jpeg',
    name: 'Kolade Agboola Nelson',
    text: 'Coast Research Technology is an amazing place to learn about tech. The teacher is knowledgeable and approachable, and he really goes out of his way to help students succeed. The facilities are modern and well-equipped, and the school has a strong sense of community. Overall, I would highly recommend Coast Research Technology to anyone interested in pursuing a career in tech.',
    url: 'https://maps.app.goo.gl/JW2G7VNWPRbh17at5',
  },
  {
    id: '3',
    position: 3,
    image: '/kolajo-olufemi.jpg',
    name: 'Kolajo Oluwafemi',
    text: 'Regardless of your status and your level of proficiency, Coast Research will refine and bring out the best of you. The meticulous passion with which tech is taught will make the dullest to become a professional in no time. The gap between the class and the reality is being bridged at Coast Research Technology. 100% recommended',
    url: 'https://maps.app.goo.gl/JW2G7VNWPRbh17at5',
  },
  {
    id: '4',
    position: 4,
    image: '/isaac ogunleye.jpeg',
    name: 'Isaac Ogunleye',
    text: "The teachings are beyond imaginable and very practical. I'll fully recommend this training school to anyone that definitely wants value for money. Well done and good job to coast research technology 👍",
    url: 'https://maps.app.goo.gl/HnD3ghWV4MmJ2iUg6',
  },
  {
    id: '5',
    position: 5,
    image: '/segun_joseph.png',
    name: 'Segun Joseph',
    text: 'If you are looking for a software development company in Ibadan to explore into Tech career, Coast Research Technology Ibadan is the best option for you to make. They are highly skilled in solving real life problems, I bet you, a trial today might convince you.',
    url: 'https://maps.app.goo.gl/JW2G7VNWPRbh17at5',
  },
  {
    id: '6',
    position: 6,
    image: '/popoola_temitope.jpeg',
    name: 'Popoola Temitope',
    text: 'A great software development company, they have a very nice learning environment, great tutors and their services are top notch and very professional',
    url: 'https://maps.app.goo.gl/JW2G7VNWPRbh17at5',
  },
];

export const studentsTestimonial: ITestimonialData[] = [
  {
    id: '1',
    position: 1,
    image: '/taiwo-oredugba.jpg',
    name: 'Taiwo Oredugba',
    text: 'Coast research is just that tech family everyone needs.',
    url: 'https://maps.app.goo.gl/JW2G7VNWPRbh17at5',
  },
  {
    id: '2',
    position: 2,
    image: '/kolade-agboola-nelson.jpeg',
    name: 'Kolade Agboola Nelson',
    text: 'Coast Research Technology is an amazing place to learn about tech. The teacher is knowledgeable and approachable, and he really goes out of his way to help students succeed. The facilities are modern and well-equipped, and the school has a strong sense of community. Overall, I would highly recommend Coast Research Technology to anyone interested in pursuing a career in tech.',
    url: 'https://maps.app.goo.gl/JW2G7VNWPRbh17at5',
  },
  {
    id: '3',
    position: 3,
    image: '/kolajo-olufemi.jpg',
    name: 'Kolajo Oluwafemi',
    text: 'Regardless of your status and your level of proficiency, Coast Research will refine and bring out the best of you. The meticulous passion with which tech is taught will make the dullest to become a professional in no time. The gap between the class and the reality is being bridged at Coast Research Technology. 100% recommended',
    url: 'https://maps.app.goo.gl/JW2G7VNWPRbh17at5',
  },
  {
    id: '4',
    position: 4,
    image: '/isaac ogunleye.jpag',
    name: 'Isaac Ogunleye',
    text: "The teachings are beyond imaginable and very practical. I'll fully recommend this training school to anyone that definitely wants value for money. Well done and good job to coast research technology 👍",
    url: 'https://maps.app.goo.gl/HnD3ghWV4MmJ2iUg6',
  },
  {
    id: '5',
    position: 5,
    image: '/Toluwase.jpeg',
    name: 'Toluwase',
    text: "The teachings are beyond imaginable and very practical. I'll fully recommend this training school to anyone that definitely wants value for money. Well done and good job to coast research technology 👍",
    url: 'https://maps.app.goo.gl/HnD3ghWV4MmJ2iUg6',
  },
  {
    id: '6',
    position: 6,
    image: '/popoola_temitope.jpeg',
    name: 'Temitope Popoola',
    text: "The teachings are beyond imaginable and very practical. I'll fully recommend this training school to anyone that definitely wants value for money. Well done and good job to coast research technology 👍",
    url: 'https://maps.app.goo.gl/HnD3ghWV4MmJ2iUg6',
  },
  {
    id: '6',
    position: 6,
    image: '/Bukky.jpag',
    name: 'Bukky',
    text: "The teachings are beyond imaginable and very practical. I'll fully recommend this training school to anyone that definitely wants value for money. Well done and good job to coast research technology 👍",
    url: 'https://maps.app.goo.gl/HnD3ghWV4MmJ2iUg6',
  },
];

export const clientsTestimonial: ITestimonialData[] = [
  // {
  //   id: "1",
  //   position: 1,
  //   image: "/sharp-credit.png",
  //   name: "Sharp Credit",
  //   text: "",
  //   url: "https://maps.app.goo.gl/JW2G7VNWPRbh17at5",
  //   ceoName: "Mr. Uche Uwudu, (CEO)",
  // },
  {
    id: '2',
    position: 2,
    image: '/Sparkling Wave Investment.png',
    name: 'Sparkling Wave Investment Company Limited',
    text: "Coast Research Technology exceeded my expectations in every way! Their team is incredibly knowledgeable and professional, always delivering on time with innovative solutions that truly fit our business needs. From start to finish, their customer service was impeccable, and their tech expertise has greatly improved our operations. If you're looking for reliable, top-tier technology services, I highly recommend them! MD, Sparkling Wave Investment Company Limited",
    url: 'https://maps.app.goo.gl/zws276p7MraJiJwC7',
    ceoName: 'Mr. Smart Chris, (CEO)',
  },

  {
    id: '3',
    position: 3,
    image: '/vatex.jpeg',
    name: 'Vatex Engineering Services',
    text: "Coast Research Technology is hands down the best choice for software development. They built our website with exceptional precision, delivering a sleek, user-friendly design that perfectly matched our vision. Their team is highly professional, attentive to detail, and always responsive to our needs. From start to finish, they ensured every aspect was tailored to our satisfaction, making the entire process smooth and hassle-free. If you're looking for a reliable partner who delivers top-notch results, Coast Research Technology is the company to go with.",
    url: 'https://maps.app.goo.gl/JW2G7VNWPRbh17at5',
    ceoName: 'Engr. Vincent Ogboye, (CEO)',
  },
  // {
  //   id: "4",
  //   position: 4,
  //   image: "/Ada-Nsitem.png",
  //   name: "Naija Expo",
  //   text: "",
  //   url: "https://maps.app.goo.gl/JW2G7VNWPRbh17at5",
  //   ceoName: "Ada Nsitem, (CEO)",
  // },
];

export const trainingSlides: ISlide[] = [
  {
    id: '1',
    image: '/kolade-agboola-nelson.jpeg',
    name: 'Kolade Agboola Nelson',
    text: 'Coast Research Technology is an amazing place to learn about tech. The teacher is knowledgeable and approachable, and he really goes out of his way to help students succeed. The facilities are modern and well-equipped, and the school has a strong sense of community. Overall, I would highly recommend Coast Research Technology to anyone interested in pursuing a career in tech.',
    position: 'Database Administrator',
  },
  {
    id: '2',
    image: '/segun_joseph.png',
    name: 'Segun Joseph',
    text: 'If you are looking for a software development company in Ibadan to explore into Tech career, Coast Research Technology Ibadan is the best option for you to make. They are highly skilled in solving real life problems, I bet you, a trial today might convince you.',
    position: 'Fullstack Developer',
  },
  {
    id: '3',
    image: '/isaac ogunleye.jpeg',
    name: 'Isaac Ogunleye',
    text: "The teachings are beyond imaginable and very practical. I'll fully recommend this training school to anyone that definitely wants value for money. Well done and good job to coast research technology 👍",
    position: 'Backend Developer',
  },
  {
    id: '4',
    image: '/temitope-popoola.jpeg',
    name: 'Temitope Popoola',
    text: "The teachings are beyond imaginable and very practical. I'll fully recommend this training school to anyone that definitely wants value for money. Well done and good job to coast research technology 👍",
    position: 'Fullstack Developer',
  },
];

export const team: ITeamData[] = [
  {
    id: '1',
    image: '/coast-segun-dup.png',
    position: 'Tech lead',
    name: 'Toluwalope Coast',
  },
  {
    id: '1',
    image: '/coast-segun-dup.png',
    position: 'moblie-app developer',
    name: 'Ibrahim Al-amin',
  },
  {
    id: '1',
    image: '/coast-segun-dup.png',
    position: 'front-end developer',
    name: 'Adeleke Segun',
  },
  {
    id: '1',
    image: '/coast-segun-dup.png',
    position: 'full stack developer',
    name: 'Balogun Abimbola',
  },
];

export const reviews: IReviewsData[] = [
  {
    id: '1',
    image: '/Professional dark head.png',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat sequi iusto dolor facilis, natus asperiores vero, libero aut ipsam fugit voluptas quibusdam repellendus dolorum eum molestiae odio! Ipsam, dolore! Hic?',
  },
  {
    id: '2',
    image: '/Professional white head.png',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat sequi iusto dolor facilis, natus asperiores vero, libero aut ipsam fugit voluptas quibusdam repellendus dolorum eum molestiae odio! Ipsam, dolore! Hic?',
  },
  {
    id: '3',
    image: '/coast-segun-dup.png',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat sequi iusto dolor facilis, natus asperiores vero, libero aut ipsam fugit voluptas quibusdam repellendus dolorum eum molestiae odio! Ipsam, dolore! Hic?',
  },
  {
    id: '4',
    image: '/Professional dark head.png',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat sequi iusto dolor facilis, natus asperiores vero, libero aut ipsam fugit voluptas quibusdam repellendus dolorum eum molestiae odio! Ipsam, dolore! Hic?',
  },
  {
    id: '5',
    image: '/segun_joseph.png',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat sequi iusto dolor facilis, natus asperiores vero, libero aut ipsam fugit voluptas quibusdam repellendus dolorum eum molestiae odio! Ipsam, dolore! Hic?',
  },
];

// export const blogs: IBlogData[] = [
//   {
//     id: "1",
//     post_image_url:
//       "/compressed/understanding-git-version-control-demystified.webp",
//     alt_image_url: "Understanding Git: Version Control Demystified",
//     title: "Understanding Git: Version Control Demystified",
//     date: "SEPTEMBER 28, 2023",
//     post_author: "Toluwalope Coast",
//   },
//   {
//     id: "2",
//     post_image_url:
//       "/compressed/mastering-app-state-management-the-key-to-crafting-ceamless-user-experiences.webp",
//     alt_image_url:
//       "Mastering App State Management: The Key to Crafting Seamless User Experiences.",
//     title:
//       "Mastering App State Management: The Key to Crafting Seamless User Experiences.",
//     date: "SEPTEMBER 21, 2023",
//     post_author: "Toluwalope Coast",
//   },
//   {
//     id: "3",
//     post_image_url:
//       "/compressed/javaScript-essentials-from-variables-to-functions.webp",
//     alt_image_url: "Javascript Essential: From Variables to Functions",
//     title: "Javascript Essential: From Variables to Functions",
//     date: "SEPTEMBER 28, 2023",
//     post_author: "Toluwalope Coast",
//   },
//   {
//     id: "4",
//     post_image_url:
//       "/compressed/devops-dynamics-streamlining-development-to-deployment-workflows.webp",
//     alt_image_url:
//       "DevOps Dynamics: Streamlining Development to Deployment Workflows",
//     title: "DevOps Dynamics: Streamlining Development to Deployment Workflows",
//     date: "SEPTEMBER 28, 2023",
//     post_author: "Toluwalope Coast",
//   },
// ];

// export const trendingNews: ITrendingNewsData[] = [
//   {
//     id: "1",
//     content:
//       "DevOps Dynamics: Streamlining Development to Deployment Workflows",
//   },
//   {
//     id: "1",
//     content: "Understanding Git: Version Control Demystified",
//   },
//   {
//     id: "1",
//     content:
//       "Mastering App State Management: The Key to Crafting Seamless User Experiences.",
//   },
// ];

export const courses: ICourses[] = [
  {
    id: 1,
    title: 'Web Development',
    duration: '6 months',
  },
  {
    id: 2,
    title: 'Mobile App Development',
    duration: '6 months',
  },
  {
    id: 3,
    title: 'UI/UX Design',
    duration: '6 months',
  },
  {
    id: 4,
    title: 'Database Development',
    duration: '6 months',
  },
  {
    id: 5,
    title: 'Data Science',
    duration: '6 months',
  },
  {
    id: 6,
    title: 'Cyber Security',
    duration: '8-9 months',
  },
];
