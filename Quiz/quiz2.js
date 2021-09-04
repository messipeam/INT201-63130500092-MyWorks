//Questions
const questions = [
  /*สร้าง object questions เป็น Arrays เพื่อเก็บคำถามทั้งหมด 5 คำถาม แต่ละช่องก็จะมี object ของชุดคำถาม แบ่งออกเป็น 5 ชุดคำถาม
                        ในแต่ละชุดคำถามก็จะมีทั้งหมด 3 property ก็คือ question(คำถาม), answer(ตัวเลือกคำตอบ) ใน answer ก็จะมี value เป็น Object ย่อยเพื่อเก็บตัวเลือก choice a b c , correctAnswer (คำตอบที่ถูกต้องของคำถาม)  */

  {
    question: "What is the answer of 2+1?",
    answer: {
      a: "5",
      b: "4",
      c: "3",
    },
    correctAnswer: "c",
  },
  {
    question: "What do pandas eat?",
    answer: {
      a: "Bamboo",
      b: "Ant",
      c: "Rice",
    },
    correctAnswer: "a",
  },
  {
    question: "What is the capital city of Thailand?",
    answer: {
      a: "Saraburi",
      b: "Bangkok",
      c: "Chonburi",
    },
    correctAnswer: "b",
  },
  {
    question: "What  ____  you doing? Which word can be used in this sentence?",
    answer: {
      a: "is",
      b: "are",
      c: "do",
    },
    correctAnswer: "b",
  },
  {
    question:
      "How much the energy value that give us by 1 glass of low fat milk?",
    answer: {
      a: "250 kj",
      b: "400 kj",
      c: "550 kj",
    },
    correctAnswer: "c",
  },
];

//Players
const players1 = {
  //่สร้าง object players1 เพื่อเก็บชื่อ คำถามที่เลือกตอบ คำตอบที่ตอบ และคะแนนที่ได้
  name: "Panupong",
  questionSelect: [
    { question1: questions[0].question },
    { question2: questions[2].question },
    { question3: questions[1].question },
  ],
  answerSelect: {
    answer1: "c",
    answer2: "a",
    answer3: "a",
  },

  tototalScore: function () {
    //สร้าง function tototalScore เพื่อเทียบคำตอบของเเต่ละคำถามและสรุปคะแนนสะสมออกมา
    let score = 0;

    if (players1.answerSelect.answer1 === questions[0].correctAnswer) score++;
    if (players1.answerSelect.answer2 === questions[2].correctAnswer) score++;
    if (players1.answerSelect.answer3 === questions[1].correctAnswer) score++;

    return score;
  },
};

const players2 = {
  name: "Peter",
  questionSelect: [
    { question1: questions[3].question },
    { question2: questions[4].question },
    { question3: questions[1].question },
    { question4: questions[0].question },
  ],
  answerSelect: {
    answer1: "b",
    answer2: "c",
    answer3: "a",
    answer4: "a",
  },

  tototalScore: function () {
    let score = 0;

    if (players2.answerSelect.answer1 === questions[3].correctAnswer) score++;
    if (players2.answerSelect.answer2 === questions[4].correctAnswer) score++;
    if (players2.answerSelect.answer3 === questions[1].correctAnswer) score++;
    if (players2.answerSelect.answer4 === questions[0].correctAnswer) score++;

    return score;
  },
};

console.log(`-----------players1-----------`);
console.log(`Name : ${players1.name}`);

for (let index = 0; index < players1.questionSelect.length; index++) {
  console.log(`
    Question ${index + 1} :${
    players1.questionSelect[index]["question" + (index + 1)]
  }
    Choice : a.) ${questions[index].answer.a}
             b.) ${questions[index].answer.b}
             c.) ${questions[index].answer.c}
             
    Player Answer : ${players1["answerSelect"]["answer" + (index + 1)]} `);
}
console.log(`Total Score : ${players1.tototalScore()} `);
console.log("");
console.log(`-----------players2-----------`);
console.log(`Name : ${players2.name}`);

for (let index = 0; index < players2.questionSelect.length; index++) {
  console.log(`
    Question ${index + 1} :${
    players2.questionSelect[index]["question" + (index + 1)]
  }
    Choice : a.) ${questions[index].answer.a}
             b.) ${questions[index].answer.b}
             c.) ${questions[index].answer.c}
    Player Answer : ${players2["answerSelect"]["answer" + (index + 1)]} `);
}
console.log("");
console.log(`Total Score : ${players2.tototalScore()} `);
