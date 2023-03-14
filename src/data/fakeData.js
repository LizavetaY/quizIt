const reactRules = [
  {
    id: 1,
    question: "What is a hook?",
    answers: [
      "a JavaScript library for building user interfaces",
      "a javascript function, allows you to create/access state and life cycles",
      "one of the core building blocks of React",
      "the standard routing library for React",
    ],
    isCorrect: answers[1],
    explanation: string, // (if we wanna display it)
  },
  {
    id: 2,
    question: "When Hooks were launched in React?",
    answers: [
      "in React 16.7.0",
      "first released in October of 2022",
      "in React 16.8",
      "29 May 2013",
    ],
    isCorrect: answers[2],
    explanation: string, // (if we wanna display it)
  },
  {
    id: 3,
    question: "What plugin enforces two rules of Hooks?",
    answers: ["TSLint", "ESLint", "Betterer", "Prettier"],
    isCorrect: answers[1],
    explanation: string, // (if we wanna display it)
  },
];

const html = [
  {
    id: 1,
    question: "Which tag is used inside the <map> tag",
    answers: ["<a>", "<map>", "<area>", "<img>"],
    isCorrect: answers[2],
    explanation: string, // (if we wanna display it)
  },
  {
    id: 2,
    question:
      "What value of the input element's type attribute does not exist?",
    answers: ["date", "month", "week", "day"],
    isCorrect: answers[3],
    explanation: string, // (if we wanna display it)
  },
  {
    id: 3,
    question: "Which of the tags does NOT have the autocomplete attribute?",
    answers: ["applies to all", "textarea", "form", "input"],
    isCorrect: answers[0],
    explanation: string, // (if we wanna display it)
  },
  {
    id: 4,
    question: "What value of type attribute does not exist for inputs?",
    answers: ["number", "email", "color", "phone"],
    isCorrect: answers[3],
    explanation: string, // (if we wanna display it)
  },
  {
    id: 5,
    question:
      "What value should be given to the input tag's type attribute to create a radio button?",
    answers: ["range", "radio", "button", "checkbox"],
    isCorrect: answers[1],
    explanation: string, // (if we wanna display it)
  },
];

const css = [
  {
    id: 1,
    question: "What types of positioning do you know?",
    answers: [
      "static, sticky, absolute, relationship, fixed",
      "static, stinky, absolute, relative, fixed",
      "static, sticky, absolute, relative, fixed",
      "flex, relative, absolutly",
    ],
    isCorrect: answers[2],
    explanation: string, // (if we wanna display it)
  },
  {
    id: 2,
    question: "What does CSS stand for?",
    answers: [
      "Computer Style Sheets",
      "Creative Style Sheets",
      "Colorful Style Sheets",
      "Cascading Style Sheets",
    ],
    isCorrect: answers[3],
    explanation: string, // (if we wanna display it)
  },
  {
    id: 3,
    question: "What rule allows you to include external fonts?",
    answers: ["@font-rule", "@font", "@font-face", "@fonts"],
    isCorrect: answers[2],
    explanation: string, // (if we wanna display it)
  },
  {
    id: 4,
    question: "What is the rgba() function responsible for?",
    answers: [
      "color + transparency",
      "color + saturation",
      "color + contrast",
      "color mixing",
    ],
    isCorrect: answers[0],
    explanation: string, // (if we wanna display it)
  },
  {
    id: 5,
    question: "What defines selector weight (specificity) in CSS?",
    answers: [
      "number of selectors in code",
      "style priority",
      "how long will the page load",
      "way to connect to HTML",
    ],
    isCorrect: answers[1],
    explanation: string, // (if we wanna display it)
  },
  {
    id: 6,
    question: "Which HTML attribute is used to define inline styles?",
    answers: [
      "font",
      "style",
      "styles",
      "class",
    ],
    isCorrect: answers[1],
    explanation: string, // (if we wanna display it)
  },
  {
    id: 7,
    question: "Which is the correct CSS syntax?",
    answers: [
      "body {color: black;}",
      "{body;color:black;}",
      "{body:color=black;}",
      "body:color=black;",
    ],
    isCorrect: answers[0],
    explanation: string, // (if we wanna display it)
  },
  {
    id: 8,
    question: "What is the correct CSS syntax for making all the <p> elements bold?",
    answers: ["<p style='font-size:bold;'>", 
    "p {font-weight:bold;}",
    "<p style='text-size:bold;'>", 
    "p {text-size:bold;}"],
    isCorrect: answers[1],
    explanation: string, // (if we wanna display it)
  },
  {
    id: 9,
    question: "How do you make each word in a text start with a capital letter?",
    answers: [
      "text-transform:capitalize",
      "text-style:capitalize",
      "You can't do that with CSS",
      "transform:capitalize",
    ],
    isCorrect: answers[0],
    explanation: string, // (if we wanna display it)
  },
  {
    id: 10,
    question: "How do you select an element with id 'demo'?",
    answers: [
      "#demo",
      "demo",
      "*demo",
      ".demo",
    ],
    isCorrect: answers[0],
    explanation: string, // (if we wanna display it)
  },
];

const js = [
  {
    id: 1,
    question: "What type of data is not in JS?",
    answers: ["Symbol", "Char"],
    isCorrect: answers[1],
    explanation: string, // (if we wanna display it)
  },
  {
    id: 2,
    question: "What is used to iterate over objects?",
    answers: ["Object.keys", "for of"],
    isCorrect: answers[0],
    explanation: string, // (if we wanna display it)
  },
  {
    id: 3,
    question: "What will be the result var foo = 10 + "20" ?",
    answers: ["30", "'1020'"],
    isCorrect: answers[1],
    explanation: string, // (if we wanna display it)
  },
  {
    id: 4,
    question: "'Use strict mode' helps in writing cleaner and safer code?",
    answers: [
      "True",
      "False"
    ],
    isCorrect: answers[0],
    explanation: string, // (if we wanna display it)
  },
  {
    id: 5,
    question: "What will be the result let a = (1,5 - 1) * 2 ?",
    answers: [
      "1",
      "8",
    ],
    isCorrect: answers[1],
    explanation: string, // (if we wanna display it)
  },
  {
    id: 6,
    question: "null === undefined?",
    answers: [
      "True",
      "False"
    ],
    isCorrect: answers[1],
    explanation: string, // (if we wanna display it)
  },
  {
    id: 7,
    question: "let value = true; alert(typeof value)?",
    answers: [
      "boolean",
      "undefined",
    ],
    isCorrect: answers[0],
    explanation: string, // (if we wanna display it)
  },
  {
    id: 8,
    question: "Boolean any of these values 0, null, undefined, NaN, '' will?",
    answers: [
      "True",
      "False"
    ],
    isCorrect: answers[1],
    explanation: string, // (if we wanna display it)
  },
  {
    id: 9,
    question: "What will be the result console.log( +true ) ?",
    answers: [
      "1",
      "True"
    ],
    isCorrect: answers[0],
    explanation: string, // (if we wanna display it)
  },
  {
    id: 10,
    question: "What will be the result: let counter = 0; alert( counter++ ); ?",
    answers: [
      "1",
      "0"
    ],
    isCorrect: answers[1],
    explanation: string, // (if we wanna display it)
  },
];
