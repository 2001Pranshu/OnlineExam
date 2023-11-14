var set1 = [
    {
        "question" : "What command is used to manage different NodeJS veresions?",
        "option1": "npm",
        "option2": "nvm",
        "option3": "node",
        "option4": "js",
        "answer" : "a"
    },
    {
        "question" : "Which of the following statement is correct?",
        "option1": "js is Server Side Language.",
        "option2": "js is the Client Side Language.",
        "option3": "js is both Server Side and Client Side Language.",
        "option4": "None of the Above",
        "answer" : "a"
    },
    {
        "question" : "What does the REPL stand for?",
        "option1": "REPL stands for 'Research Eval Program Learn.'",
        "option2": "REPL stands for 'Read Earn Point Learn.r'",
        "option3": "REPL stands for 'Read Eval Print Loop.'",
        "option4": "None of the Above",
        "answer" : "c"
    },
    {
        "question" : "Which of the following command is used to start a REPL session?",
        "option1": "G$ node start",
        "option2": "$ node",
        "option3": "I$ node repl",
        "option4": "S$ node console",
        "answer" : "b"
    },
    {
        "question" : " Which of the following extension is used to save the Node.js files?",
        "option1": ".java",
        "option2": ".node",
        "option3": ".txt",
        "option4": ".js",
        "answer" : "d"
    },
]

var index = 0;

var userAnswerList = ["", "", "", "", ""];

var qno = document.getElementById("qno");
var question = document.getElementById("question");
var op1 = document.getElementById("op1");
var op2 = document.getElementById("op2");
var op3 = document.getElementById("op3");
var op4 = document.getElementById("op4");
var nextbtn = document.getElementById("nextbtn");
var prevbtn = document.getElementById("prevbtn");
var finishbtn = document.getElementById("finishbtn");
var uans1 = document.getElementById("uans1");
var uans2 = document.getElementById("uans2");
var uans3 = document.getElementById("uans3");
var uans4 = document.getElementById("uans4");

function displayQuestion()
{

    uans1.checked = false;
    uans2.checked = false;
    uans3.checked = false;
    uans4.checked = false;

    if(userAnswerList[index] == 'a')
    {
        uans1.checked = true;
    }
    if(userAnswerList[index] == 'b')
    {
        uans2.checked = true;
    }
    if(userAnswerList[index] == 'c')
    {
        uans3.checked = true;
    }
    if(userAnswerList[index] == 'd')
    {
        uans4.checked = true;
    }


    if(index == 0)
    {
        prevbtn.style.display = "none";
    }
    else{
        prevbtn.style.display = "block";
    }

   
    if(index == set1.length-1)
    {
        nextbtn.style.display = "none";
        finishbtn.style.display = "block";
    }
    else{
        nextbtn.style.display = "block";
        finishbtn.style.display = "none";
    }

    qno.innerHTML = index+1;
    question.innerHTML = set1[index].question;
    op1.innerHTML = set1[index].option1;
    op2.innerHTML = set1[index].option2;
    op3.innerHTML = set1[index].option3;
    op4.innerHTML = set1[index].option4;
}

function nextQuestion()
{
    checkAnswer();
    index++;
    displayQuestion()
}

function prevQuestion()
{
    index--;
    displayQuestion()
}


function finishExam()
{
    checkAnswer();

    if(confirm("Are u sure to submit?"))
    {
        var marks = 0;
        for(i=0; i<userAnswerList.length; i++)
        {
            if(userAnswerList[i] == set1[i].answer)
                marks++;
        }
    
        document.write("Thank you. You got "+marks+" marks");
    }

  
}

function checkAnswer()
{
    var selectedAns = "";
    if(uans1.checked == true)
    {
        selectedAns = "a";
    }
    if(uans2.checked == true)
    {
        selectedAns = "b";
    }
    if(uans3.checked == true)
    {
        selectedAns = "c";
    }
    if(uans4.checked == true)
    {
        selectedAns = "d";
    }

    userAnswerList[index] = selectedAns;
   
}