var questionlist = [
    {
        question: 'What is the capital city of Indonesia?',
        choices: [
            ' Surabaya', ' Jakarta', ' Kendari', ' Bandung'
        ],
        correctAnswer: 1

    },
    {
        question: 'Who is the president of Indonesia?',
        choices: [
            ' Jokowi', ' Ahok', ' Iwan Fals', ' Luna Maya'
        ],
        correctAnswer: 0

    },
    {
        question: 'When is the independence day of Indonesia?',
        choices: [
            ' April 1st', ' July 4th', ' January 4th', ' August 17th'
        ],
        correctAnswer: 3

    },
    {
        question: 'What does red mean in Indonesia flag?',
        choices: [
            ' Kindness', ' Wisdom', ' Braveness', ' Power'
        ],
        correctAnswer: 2

    },
    {
        question: 'Which one of the following options is not a food from Indonesia?',
        choices: [
            ' Pecel Lele', ' Soto Madura', ' Coto Makassar', ' Longanissa Silog'
        ],
        correctAnswer: 3

    }
];

var currentQuestion = 0;
var point = 0;

//part 2~ rendering function//
function rendering() {
    $('#choices').empty();
    $('#notification').text("Question " + (currentQuestion + 1) + " of 5 Correct: " + point);
    $('#questions').text(questionlist[currentQuestion].question);
    for (var i = 0; i < questionlist[currentQuestion].choices.length; i++) {
        $('#choices').append("<li class='box'> <input type = 'radio' class = 'option' name = 'option' value = " + i + ">" + questionlist[currentQuestion].choices[i] + "</li>");
    }

}
//part 3~ display the answer//
$(document).ready(function () {
    $('#questionWrapper').hide();
    $('#finalResult').hide();

    $('.start-quiz ').click(function () {
        $('#introduction').hide();
        $('#questionWrapper').show();
        $('#finalResult').hide();
        rendering();

    });
    //is this the same with "if i click the button do this?"
    $('#questionWrapper').on('click', '.option', function () {

        //rendering();
        var choosenAnswer = $("input[class='option']:checked").val();
        console.log(choosenAnswer);
        var realAnswer = questionlist[currentQuestion].correctAnswer;
        console.log(realAnswer);
        if (choosenAnswer == realAnswer) {
            point++;
        }

        //if it is the last question
        if ((currentQuestion + 1) == questionlist.length) {
            $('#introduction').hide();
            $('#questionWrapper').hide();
            $('#finalResult').show();
            $('#result').text(point + "/" + questionlist.length);
        }
        //else keep showing the rest of the questions
        else {
            currentQuestion++;
            rendering();

        }
    });

    $('.restart').click(function () {

        console.log("restart");
        $('#introduction').show();
        $('#questionWrapper').hide();
        $('#finalResult').hide();
        currentQuestion = 0;
        point = 0;

    });

});
