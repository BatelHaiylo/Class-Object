class Student{
    constructor(name,claseGrade,id){
        this.name = name
        this.claseGrade = claseGrade
        this.id = id
    }
        printDataToLog(){
           console.log(this.name, this.claseGrade, this.id);
    }
}
const studentA = new Student("Maya","8th",12546)
const studentB = new Student("Eithan","12th",34552)
console.log(studentA, studentB)

class CollegeStudent extends Student {}
const collegeBoy = new CollegeStudent("Dereck","1year",2265)
console.log(collegeBoy)

class HighSchoolStd extends Student {}
const schoolGirl = new HighSchoolStd("Debby","9th",05253)
console.log(schoolGirl)

class HighSchoolStd2 extends Student {
    constructor(name,claseGrade,id,afterSchoolCiriculam,gender){
        super(name,claseGrade,id)
            this.afterSchoolCiriculam = afterSchoolCiriculam;
            this.gender = gender;
    }
    printDataToLog(){
        super.printDataToLog()
        console.log("hello")
    }
}
const schoolBoy = new HighSchoolStd2("Sean","9th",15487,"sacss class","Male")
console.log(schoolBoy)

class MiddleSchoolStudent extends Student {}
const MiddleSchoolGirl = new MiddleSchoolStudent("Susen","5th",5124)
console.log(MiddleSchoolGirl)
schoolBoy.printDataToLog()

