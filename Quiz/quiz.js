const myQuestions = [
  {
    question: "What is 2+1",
    answer: {
      a: "5",
      b: "4",
      c: "3",
    },
    correctAnswer: "3",
  },
  {
    question: "What food panda eat",
    answer: {
      a: "bamboo",
      b: "ant",
      c: "rice",
    },
    correctAnswer: "bamboo",
  },
  {
    question: "Capital city of thailand?",
    answer: {
      a: "Saraburi",
      b: "Bangkok",
      c: "Chonburi",
    },
    correctAnswer: "Bangkok",
  },
  {
    question: "What  ____  you doing? Which word can be used in this sentence?",
    answer: {
      a: "is",
      b: "are",
      c: "do",
    },
    correctAnswer: "are",
  },
  {
    question:
      "How much the energy value that give us by  1 glass of low fat milk?",
    answer: {
      a: "250 kj",
      b: "400 kj",
      c: "550 kj",
    },
    correctAnswer: "550 kj",
  },
];

const players1 = {
  name: "Panupong",
  //"questionSelect": [myQuestions[0].question, myQuestions[2].question, myQuestions[1].question],
  questionSelect: {
    question1: `${myQuestions[0].question}`,
    question2: `${myQuestions[2].question}`,
    question3: `${myQuestions[1].question}`,
  },

  //"answerSelect": [myQuestions[0].answer.c, myQuestions[2].answer.b, myQuestions.[1].answer.b],
  answerSelect: {
    answer1: `${myQuestions[0].answer.a}`,
    answer2: `${myQuestions[2].answer.b}`,
    answer3: `${myQuestions[1].answer.c}`,
  },

  tototalScore: function tototalScore() {
    let score = 0;
    let s
    if (players1.answerSelect.answer1 == myQuestions[0].correctAnswer) {
      score++;
    }
    if (players1.answerSelect.answer2 == myQuestions[2].correctAnswer) {
      score++;
    }
    if (players1.answerSelect.answer3 == myQuestions[1].correctAnswer) {
      score++;
    }else{
        
    }
    return score;
  },
};

console.log("--------------Player1------------------");
console.log(`
  Name : ${players1.name}
  ---------------------------------------
  Question 1 : ${players1.questionSelect.question1}
  Answer : ${players1.answerSelect.answer1} 
  
  Question 2 : ${players1.questionSelect.question2}
  Answer : ${players1.answerSelect.answer2} 
  
  Question 3 : ${players1.questionSelect.question3}
  Answer : ${players1.answerSelect.answer3} 
  
  Total Score : ${players1.tototalScore()}
  
  `);
