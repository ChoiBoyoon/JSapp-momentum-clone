const quotes = [
  {
    quote:
      "Let everything happen to you / Beauty and terror / Just keep going / No feeling is final.",
    author: "Rainer Maria Rilke",
  },
  {
    quote: "Never, never, never give up.",
    author: "Winston Churchill",
  },
  {
    quote:
      "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill",
  },
  {
    quote:
      "Life is like riding a bicycle. To keep your balance, you must keep moving.",
    author: "Albert Einstein",
  },
  {
    quote:
      "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma - which is living with the results of other people's thinking.",
    author: "Steve Jobs",
  },
  {
    quote: "Have the courage to follow your heart and intuition.",
    author: "Steve Jobs",
  },
  {
    quote:
      "Sometimes life is going to hit you in the head with a brick. Don't lose faith.",
    author: "Steve Jobs",
  },
  {
    quote:
      "Weak people revenge. Strong people forgive. Intelligent people ignore.",
    author: "Albert Einstein",
  },
  {
    quote: "Once you stop learning, you start dying.",
    author: "Albert Einstein",
  },
  {
    quote:
      "Bad programmers worry about the code. Good programmers worry about data structures and their relationships.",
    author: "Linus Torvalds",
  },
  {
    quote: "Those that can, do. Those that can't complain.",
    author: "Linus Torvalds",
  },
  {
    quote:
      '변명 중에서도 가장 어리석고 못난 변명은 "시간이 없어서"라는 변명이다.',
    author: "",
  },
  {
    quote:
      "Management is doing things right; leadership is doing the right things.",
    author: "Peter Drucker",
  },
  {
    quote:
      "Knowledge has to be improved, challenged, and increased constantly, or it vanishes.",
    author: "Peter Drucker",
  },
  {
    quote:
      "Whenever you see a successful business, someone once made a courageous decision.",
    author: "Peter Drucker",
  },
  {
    quote: "Business has only two functions -- marketing and innovation.",
    author: "Peter Drucker",
  },
  {
    quote:
      "Plans are only good intentions unless they immediately degenerate into hard work.",
    author: "Peter Drucker",
  },
  {
    quote: "Change before you have to.",
    author: "Jack Welch",
  },
  {
    quote:
      'When launching something new, you have to go for it -- "playing not to lose" can never be an option',
    author: "Jack Welch",
  },
  {
    quote: "My name is Linus, and I am your God.",
    author: "Linus Torvalds",
  },
  {
    quote:
      "The successful woman will profit from her mistakes and try again in a different way.",
    author: "Dale Carnegie",
  },
  {
    quote:
      "All women have fears, but the brave put down their fears and go forward, sometimes to death, but always to victory.",
    author: "Dale Carnegie",
  },
  {
    quote:
      "You can measure the size of a person by what makes her or him angry.",
    author: "Dale Carnegie",
  },
  {
    quote:
      "If you are not in the process of being the person you want to be, you are automatically engaging in becoming the person you don't want to be.",
    author: "Dale Carnegie",
  },
  {
    quote:
      "When dealing with people, remember you are not dealing with creatures of logic, but with creatures bristling with prejudice and motivated by pride and vanity.",
    author: "Dale Carnegie",
  },
  {
    quote:
      "Any fool can criticize, complain, and condemn -- and most fools do. But it takes character and self-control to be understanding and forgiving.",
    author: "Dale Carneigie",
  },
  {
    quote:
      "Develop success from failures. Discouragement and failure are two of the surest stepping stones to success.",
    author: "Dale Carnegie",
  },
  {
    quote: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
  },
  {
    quote:
      "The greatest glory in living lies not in never failing, but in rising every time we fall.",
    author: "Nelson Mandela",
  },
  {
    quote:
      "If life were predictable it would cease to be life, and be without flavor.",
    author: "Eleanor Roosevelt",
  },
  {
    quote: "Life is either a daring adventure or nothing at all.",
    author: "Helen Keller",
  },
  {
    quote:
      "Many of life's failures are people who did not realize how close they were to success when they gave up.",
    author: "Thomas A. Edison",
  },
  {
    quote:
      "Life is not fair, and perhaps it is a good thing for most of us that it is not.",
    author: "Oscar Wilde",
  },
  {
    quote: "The only impossible journey is the one you never begin.",
    author: "Tony Robbins",
  },
  {
    quote: "Life is really simple, but we insist on making it complicated.",
    author: "Confucius",
  },
  {
    quote: "Life is a long lesson in humility.",
    author: "James M. Barrie",
  },
  {
    quote: "Life is trying things to see if they work.",
    author: "Ray Bradbury",
  },
  {
    quote:
      "If you really look closely, most overnight successes took a long time.",
    author: "Steve Jobs",
  },
  {
    quote: "I find that the harder I work, the more luck I seem to have.",
    author: "Thomas Jefferson",
  },
  {
    quote:
      "Success is stumbling from failure to failure wiht no loss of enthusiasm.",
    author: "Winston Churchill",
  },
  {
    quote:
      "You know you are on the road to success if you would do your job and not be paid for it.",
    author: "Oprah Winfrey",
  },
  {
    quote: "Dream big and dare to fail.",
    author: "Norman Vaughan",
  },
  {
    quote: "Keep your eyes on the stars, and your feet on the ground.",
    author: "Theodore Roosevelt",
  },
  {
    quote: "If you don't risk anything, you risk even more.",
    author: "Erica Jong",
  },
  {
    quote: "Work hard in silence. Let success make the noise.",
    author: "",
  },
  {
    quote: "Showing off is the fool's idea of glory.",
    author: "",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = '"' + todaysQuote["quote"] + '"';
author.innerText = "- " + todaysQuote["author"];
