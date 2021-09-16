const student = {
    id: 1, //1 property หลัง : คือ property value
    name: 'Peam',
  };
  
  student.email = 'panupong.n@mail.kmutt.ac.th'; //สามารถเพิ่ม property ได้
  console.log(student); //camel case
  /*myVarible
  myMethod
  myFunction
  myObject*/ const CM_TO_METER = 0.2554; //primative type
  
  let superhero = ['Spiderman', 'Ironman', 'Captain America', 'Black Widow'];
  
  //for-in
  //for (let i in superhero){
  //   console.log(i);
  //}
  
  //for-of
  //for(let i of superhero){
  // console.log(i);
  //}
  
  let movie = {
    name: ['Spiderman', 'Ironman', 'Captain America', 'Black Widow'],
  };
  
  movie.flimCompany = 'Marvel';
  
  console.log(movie);
  
  //------------------------------------------------------
  /*let square = {
  
    area: function () { return this.side * this.side; },
  
    side: 10
  
  };*/
  
  //เขียนได้อีกแบบ (หลัง es6) 
  let square = {
    area() {
      return this.side * this.side;
    }, //<----
    side: 10,
  };
  square.area();
  
  console.log(square.area());
  //------------------------------------------------------
  
  
  let book = {
    isbn: 1111,
    title: 'JS Beginner',
    author: { firstname: 'John', lastname: 'Hang' },
  };
  
  let date = new Date();
  console.log(date);
  
  const movies = {
    movieName: 'Avengers',
    flim: 'Marvel',
    years: 2012
  
  }
  
  console.log(movies);
  
  //#1 independent variables, all are array
  
  let ids = [1, 2];
  
  let quests = ['what is your name?', 'where are you?'];
  
  let answers = ['Umaporn', 'at home'];
  
  
  
  //#2 array of objects, easy iterate all items under a single variable
  
  let quest3 = [
  
    { id: 1, question: 'What is your name?', answer: 'Umaporn' },
  
    { id: 2, question: 'Where are you?', answer: 'at home' }
  
  ];
  
  
  
  //#3 one object, each property stores with array
  
  let quest4 = {
  
    ids: [1, 2],
  
    quests: ['what is your name?', 'where are you?'],
  
    answers: ['Umaporn', 'at home']
  
  };
  
  movies.movieName = 'Spiderman';
  console.log(movies)
  
  
  const hello1 = { id: 2, question: 'What' }
  let hello2 = { id: 3, question: 'Wow' }
  
  hello2 = hello1; //assign value -> memory address
  
  console.log(hello1);
  
  //object แบบ const จะไม่สามารถ assign ค่าจาก obj อื่นเข้าไปได้ 
  //object แบบ let สามารถ assign ค่าจาก obj อื่นได้
  //แต่ภายใน object -> property กับ value สามารถ re-assign ค่าได้ ทั้ง const และ let
  
  //hello1 = {id: 3,question:'No'} assign ไม่ได้ เพราะ hello1 เป็น const
  //hello2 = {id: 3,question:'No'}
  //console.log(hello2);
  
  class Name {
    constructor(firstname, lastname) {
      this.firstname = firstname;
      this.lastname = lastname;
    }
  
  }
  
  let name1 = new Name("panupong", "nakmanee");
  
  console.log(name1);
  //---------------------------------------
  
  let quest = {
    id: '1',
    quest: '',
    check: function () {
      if (quest.quest === undefined) {
        quest.quest = 'Unknown'
      } else {
        return quest.quest
      }
  
  
    }
  };
  
  console.log(quest.check());
  
  class Question {
    constructor(id, question) {
      this._id = id
      this._question = (question === undefined ? 'unknown' : question);
  
  
    }
    get id() {
      return this._id
    }
    set id(id) {
      return this._id
    }
    get question() {
      console.log('This is getter question')
      return this._question
    }
    set question(question) {
      console.log('This is setter question')
      if (question === '') {
        this._question = 'unknown'
      } else {
        this._question = question
      }
    }
    displayQuestion() {
      return `id: ${this._id}, question: ${this._question}`
    }
  
  }
  
  
  let question1 = new Question(1);
  let question2 = new Question(2, 'whois peam?');
  
  
  
  //console.log(question1);
  //console.log(question2);
  
  question2.question = '' //call setter
  
  //console.log(question2);
  //console.log(question2.question);
  
  let quest1 = new Question(1, 'Q1');
  let quest2 = new Question(2, 'Q2');
  
  Question.prototype.getQuestLength = function () { //ใส่ func เพิ่มเข้าไปใน class
    return this._question.length;
  
  }
  
  console.log(quest1.getQuestLength());