/**
 * Videos Database can be added here.
 * You can add videos of your wish with different attributes
 * */
import { v4 as uuid } from "uuid";
export const videos = [
  {
    _id: uuid(),
    title: "Power of Fitness",
    categoryName: "Health",
    videoUrl: "https://youtu.be/37UhELFvPec",
    description:
      "Why exercise is an important part of a healthy lifestyle. Vincent Lam has had a passion for fitness for as long as he can remember. His goal is to help people restore, maintain, and promote quality of life and optimal physical function. He is devoted to helping others achieve their fitness goals. He graduated from Penn State with a B.S. in kinesiology and is also a certified personal trainer. This talk was given at a TEDx event using the TED conference format but independently organized by a local community. ",
    creator: "TEDx",
  },

  {
    _id: uuid(),
    title: "Financial basics for Indians",
    categoryName: "Finance",
    videoUrl: " https://youtu.be/J0cD6Mqe944",
    description:
      "hin Kamath is back again. Part 1 was all about the story of Zerodha. The real bootstrapped success story. ",
    creator: "BeerBiceps",
  },
  {
    _id: uuid(),
    title: "15 Books to read in 2022",
    videoUrl: "https://www.youtube.com/watch?v=lCrMAtbBUJA",
    categoryName: "Book",
    creator: "Ali Abdaal ",
    description: "In this video Ali Abdaal suggests her book recommendation",
  },
  {
    _id: uuid(),
    title: "The exercise paradox",
    videoUrl: "https://youtu.be/8so1WZ4j1oQ",
    categoryName: "Health",
    creator: "TEDx",
    description:
      "How can you manipulate your brain to achieve greater levels of happiness? Can you be so inspired that your daily exercises bring you joy and increase your self-esteem? By practicing the four key strategies given in this TEDx talk, we can all achieve greater levels of energy, mood and overall health along with positive long-term changes in our physiques.",
  },
  {
    _id: uuid(),
    title: "Get rich without getting lucky",
    categoryName: "Finance",
    videoUrl: " https://www.youtube.com/watch?v=1-TZqOsVCNM",
    description:
      "hin Kamath is back again. Part 1 was all about the story of Zerodha. The real bootstrapped success story. ",
    creator: "BeerBiceps",
  },
  {
    _id: uuid(),
    title: "What is mental health?",
    videoUrl: "https://www.youtube.com/watch?v=oxx564hMBUI",
    categoryName: "Health",
    creator: "The School of Life",
    description:
      "Nowadays, we know more and more about what it means to be mentally unwell - but what exactly constitutes mental 'health’? In this film, we’ll explore what characterises an optimally functioning mind. ",
  },
  {
    _id: uuid(),
    title: "India's Youngest Billionare on How to make money",
    videoUrl: "https://www.youtube.com/watch?v=cpg78ouK54I",
    categoryName: "Finance",
    creator: "Raj Shamani",
    description:
      "Nikhil Kamath, 35, co-founded Zerodha, India's largest trading platform by volume, with his older brother Nithin in 2010 in the southern Indian city of Bangalore. In this video, he discusses how he moved out of his house and went from working at a Call Centre to Building up One of the Largest Businesses and becoming India's Youngest Billionaire! ",
  },
  {
    _id: uuid(),
    title: "Atomic habbits Summary",
    videoUrl: "https://www.youtube.com/watch?v=EjsTWJ7U1rk",
    categoryName: "Book",
    creator: "Readers book club ",
    description: "This video contain summary of Atomic Habits",
  },
  {
    _id: uuid(),
    title: "We all have mental health",
    videoUrl: "https://youtu.be/DxIDKZHW3-E",
    categoryName: "Health",
    creator: "Anna Freud NCCF",
    description:
      "We All Have Mental Health is an animation designed to give young people aged 11-14 a common language and understanding of what we mean by mental health and how we can look after it. It has been created for young people in Key stage 3 and can be used with accompanying teaching resources.. ",
  },
  {
    _id: uuid(),
    title: "Building a side Projects",
    videoUrl: "https://youtu.be/PU4zArf71Yg",
    categoryName: "Technology",
    creator: "Tanay Pratap",
    description:
      "In episode 2, Rachit Gulati from Microsoft joins Tanay to talk about how he got started with hobby projects and how they helped him in cracking interviews. Rachit goes on to explain how once can go about doing hobby projects and benefit from them. ",
  },
  {
    _id: uuid(),
    title: "Stock market for beginners",
    videoUrl: "https://www.youtube.com/watch?v=3UF0ymVdYLA",
    categoryName: "Finance",
    creator: "Pranjal Kamra",
    description:
      "Stock Market for Beginners is the introductory video for everyone who is interested in investing in the share market. ",
  },
  {
    _id: uuid(),
    title: "Easy explaination of Blockchain",
    videoUrl: "https://youtu.be/qeMmxq0MT6g",
    categoryName: "Technology",
    creator: "BeerBiceps ",
    description: "How blockchain works by Indian Crypto millionaire",
  },
  {
    _id: uuid(),
    title: "We all have mental health",
    videoUrl: "https://youtu.be/DxIDKZHW3-E",
    categoryName: "Health",
    creator: "Anna Freud NCCF",
    description:
      "We All Have Mental Health is an animation designed to give young people aged 11-14 a common language and understanding of what we mean by mental health and how we can look after it. It has been created for young people in Key stage 3 and can be used with accompanying teaching resources.. ",
  },
  {
    _id: uuid(),
    title: "Personal Financial Stratergies 2021",
    videoUrl: "https://www.youtube.com/watch?v=nbrkmJTuGoY",
    categoryName: "Finance",
    creator: "Ankoor warikoo ",
    description:
      "Budgeting your #money is the key to having enough,” said Elizabeth Warren.Since we have entered a new financial year, in this video I will share my #PersonalFinance resolutions that I have planned for the next twelve months. And yes, I’ve been doing it since my college days when I used to spend Rs. 7,500 per month. So these budgeting, allocations and places where I will spend my money without thinking – apply even to college kid ",
  },
  {
    _id: uuid(),
    title: "Book You must read if you hate reading",
    videoUrl: "https://www.youtube.com/watch?v=KXgBQS9Lbl8&t=105s",
    categoryName: "Book",
    creator: "Mostlysane ",
    description: "In this video mostlysane suggests her book recommendation",
  },
  {
    _id: uuid(),
    title: "Habits of efficient developers",
    videoUrl: "https://youtu.be/9-cyC6O81Bk",
    categoryName: "Technology",
    creator: "TED ",
    description:
      "Even if a 10x developer may be a myth, we all know of some developer that just shines and is able to do more in less time, and seems to do it without effort! Even if may seem that you need some kind of special natural talent, it is not.In this session by Daniel Lebrero you can learn what you need to learn to become a more efficient developer.",
  },
  {
    _id: uuid(),
    title: "Best diet for mental and brain health",
    videoUrl: "https://youtu.be/vGad9MvQEwo",
    categoryName: "Health",
    creator: "Dr Caroline Leaf",
    description:
      "In this podcast I talk to Harvard-trained nutritional psychiatrist Dr. Georgia Ede about how certain diets can affect our mental wellbeing, what foods help the brain function best, and what foods to avoid if we want to heal and improve our mental and physical health. ",
  },
  {
    _id: uuid(),
    title: "Financial planning for beginners",
    videoUrl: "https://youtu.be/LLdKcFpHgM8",
    categoryName: "Finance",
    creator: "CA Rachana Ranade ",
    description: "A CA explains basic finance for beginners ",
  },
  {
    _id: uuid(),
    title: "The future we are building-Elon Musk",
    videoUrl: "https://youtu.be/zIwLWfaAg-8",
    categoryName: "Technology",
    creator: "TED ",
    description:
      "Elon Musk discusses his new project digging tunnels under LA, the latest from Tesla and SpaceX and his motivation for building a future on Mars in conversation with TED's Head Curator, Chris Anderson ",
  },
  {
    _id: uuid(),
    title: "Steve Jobs favourite books",
    videoUrl: "https://www.youtube.com/watch?v=zAS1nXFqBM8",
    categoryName: "Book",
    creator: "Alux.com ",
    description: "Steve jobs book recommendation",
  },
];
