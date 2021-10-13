//2.1
const student = {
    studentNumber : 63130500092,
    name : 'Panupong',
    registeredSubject : [semester1 = [ {   no : 'GEN101',  name : 'Physical education', credit : 1, grade : 'A'},
                                        {   no : 'GEN121',  name : 'Learning and problem solving skills', credit : 3, grade : 'B'},
                                        {   no : 'INT100',  name : 'IT FUN',    credit : 3, grade : 'B'},
                                        {   no : 'INT101',  name : 'Programing fundamentals',   credit : 3, grade : 'C+'},
                                        {   no : 'INT102',  name : 'Web technology',    credit : 1, grade : 'B+'},
                                        {   no : 'INT114',  name : 'Discrete math', credit : 3, grade : 'C'},
                                        {   no : 'LNG220', name : 'Academice English', credit : 3, grade : 'A'}],
                     

    ],
    creditRegister : 17,
    lvpScore : 57,
    GPA : 3.35,
    GPAX : 3.35
       

    }


student.registeredSubject.push(semester2 = [ {   no : 'GEN101',  name : 'Physical education', credit : 1, grade : 'A'},
                            {   no : 'GEN121',  name : 'Learning and problem solving skills', credit : 3, grade : 'B'},
                            {   no : 'INT100',  name : 'IT FUN',    credit : 3, grade : 'B'},
                            {   no : 'INT101',  name : 'Programing fundamentals',   credit : 3, grade : 'C+'},
                            {   no : 'INT102',  name : 'Web technology',    credit : 1, grade : 'B+'},
                            {   no : 'INT114',  name : 'Discrete math', credit : 3, grade : 'C'},
                            {   no : 'LNG220', name : 'Academice English', credit : 3, grade : 'A'}]);

console.log(student.registeredSubject.length);

//2.2
function total_credit(){
    let total_credit = 0;
    for (const key in student.registeredSubject[0]) {
        
        total_credit += student.registeredSubject[0][key].credit + student.registeredSubject[1][key].credit;
    }
    return total_credit;
}
        
    
 
    


student.creditRegister = total_credit();

console.log(student);


//2.4 หน่วยกิตที่คำนวณ
function cal_grade(){
    for (const key in student.registeredSubject[0]) {
        let
        if(student.registeredSubject[0][key].grade = 'A'){
            return 4;
        }
        if(student.registeredSubject[0][key].grade = 'B+'){
            return 3.5;
        }
    }
}


