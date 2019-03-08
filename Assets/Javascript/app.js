
/*
User goes to site, sees splash page w/ instructions & start button
After clicking start, a question populates. 
Timer Begins
Upon receiving an answer or the timer running out, correct answer is revealed 
Correct/Wrong Guesses total updates
A diff timer begins 
After shorter timer, next question appears 
*/

var triviaGame = {
    qBank: [{
        question: "Can I Kick It?",
        answers: ["Yes you can!", "nah", "HELL NAH", "Sure"],
        correctAnswer: 0
    }, {
        question: "Which record label featured artists such as Dr. Dre, Tupac, and Snoop Dogg?",
        answers: ["Bad Boy", "The Dungeon Family", "Roc-A-Fella", "Death Row Records"],
        correctAnswer: 3
    }, {
        question: "How old was Biggie at the time of his death?",
        answers: ["28", "24", "22", "25"],
        correctAnswer: 1
    }, {
        question: "Which rapper was NOT a member of De La Soul",
        answers: ["Maseo", "Posdnuos", "Q-Tip", "Trugoy"],
        correctAnswer: 2
    }, {
        question: "Complete these lyrics: 'Now in my younger days I used to sport a shag / When I went to school____________'",
        answers: ["I carried lunch in a bag", "I flunked all my exams", "I always had a lot of swag", "I brought the biscuit with the mag"],
        correctAnswer: 0
    }, {
        question: "Which rapper was a member of Wu-Tang Clan?",
        answers: ["Cappadonna", "Jadakiss", "Nas", "Inspectah Deck"],
        correctAnswer: 3
    }, {
        question: "What was the name of Fresh Prince's DJ?",
        answers: ["Funkmasta Flex", "Jazzy Jeff", "King Coopa", "Madlib"],
        correctAnswer: 1
    }, {
        question: "'3 Stacks' is the nickname of which rapper?",
        answers: ["Cee-Lo", "Trick Daddy", "Andre 3000", "Killer Mike"],
        correctAnswer: 2
    }, {
        question: "Suge Knight famously dangled which rapper over a balcony?",
        answers: ["Eazy-E", "Ice Cube", "Vanilla Ice", "Dr. Dre"],
        correctAnswer: 1
    }, {
        question: "What film starred Nas & DMX in lead roles?",
        answers: ["Cool Runnings", "Strait Outta Compton", "Belly", "ATL"],
        correctAnswer: 2
    }
    ],

    numRight: 0,
    numWrong: 0,
    didntAnswer: 0, //variable to store number of unanswered questions if time expires
    answered: false, //variable to stop timer if an answer is clicked
    questionsRemaining: 0,
    correctAnswer: 1,
    timeRemaining: 15,
    currentQuestion: " ",
    answers: "",
    i: 0,



    startGame: function () {
        this.i = 0;
        this.questionsRemaining = this.qBank.length - 1;
        this.numRight = 0;
        this.numWrong = 0;
        this.didntAnswer = 0;
        this.loadQ();
        this.updateScreen();

    },

    loadQ: function () {

        this.currentQuestion = this.qBank[this.i].question;
        this.answers = this.qBank[this.i].answers;
        this.correctAnswer = this.qBank[this.i].correctAnswer;
        this.updateScreen();

    },

    incrementQ: function () {
        if (this.questionsRemaining > 0) {
            this.i++;
            this.questionsRemaining--;
            this.loadQ();
        }
        else {
            $("#question-card").hide();
            $("#resetBtn").show();
            alert("You ran out of questions!")
        }

    },

    checkAnswer: function (value) {
        if (value === this.correctAnswer) {
            this.numRight++
            // alert("You got it right!") // add message with a timer here, 
        } else {
            // alert("Close! But, no cigar") //add same timer here 
            this.numWrong++
        }
        this.incrementQ();
        this.updateScreen();

    },

    updateScreen: function () {
        $("#a-one").text(this.answers[0]);
        $("#a-two").text(this.answers[1]);
        $("#a-three").text(this.answers[2]);
        $("#a-four").text(this.answers[3]);
        $("#question").text(this.currentQuestion);
        $("#ques-remain").text("Questions Remaining: " + this.questionsRemaining);
        $("#right").text("Correct Answers " + this.numRight);
        $("#wrong").text("Incorrect Answers " + this.numWrong);
        $("#na").text("Didn't Answer: " + this.didntAnswer)
    },

    // timer: function () { },

    // resetRound: function () { },

}

triviaGame.startGame();

