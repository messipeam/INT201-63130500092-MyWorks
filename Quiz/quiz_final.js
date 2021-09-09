//Object Questions
//สร้างชุดคำถาม 5 คำถาม โดยสร้าง Object ของ questions ทั้งหมด 5 Object โดยแต่ละ object แบ่งเป็น 3 property คือ question (คำถาม) , answer (ตัวเลือกในการตอบคำถาม) โดยจะมี property ย่อยคือ choice a, b, c , correctAnswer(ตัวเลือกของคำตอบที่ถูกต้อง)
const question1 = {
  question: "What is the answer of 2+1?",
  answer: {
    a: "5",
    b: "4",
    c: "3",
  },
  correctAnswer: "c",
};

const question2 = {
  question: "What do pandas eat?",
  answer: {
    a: "Bamboo",
    b: "Ant",
    c: "Rice",
  },
  correctAnswer: "a",
};

const question3 = {
  question: "What is the capital city of Thailand?",
  answer: {
    a: "Saraburi",
    b: "Bangkok",
    c: "Chonburi",
  },
  correctAnswer: "b",
};

const question4 = {
  question: "What  ____  you doing? Which word can be used in this sentence?",
  answer: {
    a: "is",
    b: "are",
    c: "do",
  },
  correctAnswer: "b",
};

const question5 = {
  question:
    "How much the energy value that give us by 1 glass of low fat milk?",
  answer: {
    a: "250 kj",
    b: "400 kj",
    c: "550 kj",
  },
  correctAnswer: "c",
};
//case1
//Object Players
//สร้าง object player1 โดยมี 4 property เก็บชื่อผู้เล่น คำถามที่ผู้เล่นเลือกและ คำตอบที่เลือกของคำถามนั้นไว้ และคะแนนสะสมทีได้
const player1 = {
  name: "Steve",
  questionSelect: [question1, question4, question2], //กำหนดเป็น Array โดยอ้างถึง object question ที่เลือก
  answerSelect: ["a", "b", "c"], //เก็บคำตอบเป็น Array
  totalScore: function () {
    //สร้าง function ในการเทียบคำตอบที่ผู้เล่นเลือกกับคำตอบที่ถูกต้องและสรุปคะแนนที่ได้ออกมา
    let score = 0; //กำหนด score = 0
    if (player1.answerSelect[0] === player1.questionSelect[0].correctAnswer)
      //ถ้าคำตอบที่ผู้เล่นเลือกตรงกับคำตอบที่ถูกต้องของชุดคำถามที่ผุู้เล่นเลือกให้ ค่า score +1
      score++;
    if (player1.answerSelect[1] === player1.questionSelect[1].correctAnswer)
      score++;
    if (player1.answerSelect[2] === player1.questionSelect[2].correctAnswer)
      score++;
    return score;
  },
};
//case2
const player2 = {
    name: "Peter",
    questionSelect: [question2, question1, question2,question5], //กำหนดเป็น Array โดยอ้างถึง object question ที่เลือก
    answerSelect: ["a", "a", "b","c"], //เก็บคำตอบเป็น Array
    totalScore: function () {
      //สร้าง function ในการเทียบคำตอบที่ผู้เล่นเลือกกับคำตอบที่ถูกต้องและสรุปคะแนนที่ได้ออกมา
      let score = 0; //กำหนด score = 0
      if (player2.answerSelect[0] === player2.questionSelect[0].correctAnswer)
        //ถ้าคำตอบที่ผู้เล่นเลือกตรงกับคำตอบที่ถูกต้องของชุดคำถามที่ผุู้เล่นเลือกให้ ค่า score +1
        score++;
      if (player2.answerSelect[1] === player2.questionSelect[1].correctAnswer)
        score++;
      if (player2.answerSelect[2] === player2.questionSelect[2].correctAnswer)
        score++;
        if (player2.answerSelect[3] === player2.questionSelect[3].correctAnswer)
        score++;
      return score;
    },
  };
//case3
  const player3 = {
    name: "Tony",
    questionSelect: [question3, question2, question1], //กำหนดเป็น Array โดยอ้างถึง object question ที่เลือก
    answerSelect: ["a", "b", "c"], //เก็บคำตอบเป็น Array
    totalScore: function () {
      //สร้าง function ในการเทียบคำตอบที่ผู้เล่นเลือกกับคำตอบที่ถูกต้องและสรุปคะแนนที่ได้ออกมา
      let score = 0; //กำหนด score = 0
      if (player3.answerSelect[0] === player3.questionSelect[0].correctAnswer)
        //ถ้าคำตอบที่ผู้เล่นเลือกตรงกับคำตอบที่ถูกต้องของชุดคำถามที่ผุู้เล่นเลือกให้ ค่า score +1
        score++;
      if (player3.answerSelect[1] === player3.questionSelect[1].correctAnswer)
        score++;
      if (player3.answerSelect[2] === player3.questionSelect[2].correctAnswer)
        score++;
      return score;
    },
  };

function result() {
  //function แสดงผลคำถาม ตัวเลือกคำตอบ คำตอบของผู้เล่นและ จำนวนคะแนนสะสม โดยเก็บไว้ใน result และ return ออกมา
  let result = `
    -------------Player1-------------
    
    Name : ${player1.name}
    
    
    Question Select 1:  ${player1.questionSelect[0].question}
  
    Choice : a.) ${player1.questionSelect[0].answer.a}
             b.) ${player1.questionSelect[0].answer.b}
             c.) ${player1.questionSelect[0].answer.c}
  
    Player Answer : ${player1.answerSelect[0]}
  
    Question Select 2:  ${player1.questionSelect[1].question}
  
    Choice : a.) ${player1.questionSelect[1].answer.a}
             b.) ${player1.questionSelect[1].answer.b}
             c.) ${player1.questionSelect[1].answer.c}
  
    Player Answer : ${player1.answerSelect[1]}
  
    Question Select 3:  ${player1.questionSelect[2].question}
  
    Choice : a.) ${player1.questionSelect[2].answer.a}
             b.) ${player1.questionSelect[2].answer.b}
             c.) ${player1.questionSelect[2].answer.c}
  
    Player Answer : ${player1.answerSelect[2]}
  
    Total Score : ${player1.totalScore()}

    -------------Player2-------------
    
    Name : ${player2.name}
    
    
    Question Select 1:  ${player2.questionSelect[0].question}
  
    Choice : a.) ${player2.questionSelect[0].answer.a}
             b.) ${player2.questionSelect[0].answer.b}
             c.) ${player2.questionSelect[0].answer.c}
  
    Player Answer : ${player2.answerSelect[0]}
  
    Question Select 2:  ${player2.questionSelect[1].question}
  
    Choice : a.) ${player2.questionSelect[1].answer.a}
             b.) ${player2.questionSelect[1].answer.b}
             c.) ${player2.questionSelect[1].answer.c}
  
    Player Answer : ${player2.answerSelect[1]}
  
    Question Select 3:  ${player2.questionSelect[2].question}
  
    Choice : a.) ${player2.questionSelect[2].answer.a}
             b.) ${player2.questionSelect[2].answer.b}
             c.) ${player2.questionSelect[2].answer.c}
  
    Player Answer : ${player2.answerSelect[2]}
  
    Total Score : ${player2.totalScore()}

    -------------Player3-------------
    
    Name : ${player3.name}
    
    
    Question Select 1:  ${player3.questionSelect[0].question}
  
    Choice : a.) ${player3.questionSelect[0].answer.a}
             b.) ${player3.questionSelect[0].answer.b}
             c.) ${player3.questionSelect[0].answer.c}
  
    Player Answer : ${player3.answerSelect[0]}
  
    Question Select 2:  ${player3.questionSelect[1].question}
  
    Choice : a.) ${player3.questionSelect[1].answer.a}
             b.) ${player3.questionSelect[1].answer.b}
             c.) ${player3.questionSelect[1].answer.c}
  
    Player Answer : ${player3.answerSelect[1]}
  
    Question Select 3:  ${player3.questionSelect[2].question}
  
    Choice : a.) ${player3.questionSelect[2].answer.a}
             b.) ${player3.questionSelect[2].answer.b}
             c.) ${player3.questionSelect[2].answer.c}
  
    Player Answer : ${player3.answerSelect[2]}
  
    Total Score : ${player3.totalScore()}
  `;

  return result;
}

console.log(result());
