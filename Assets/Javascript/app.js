
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
    numRight: 0,
    numWrong: 0,
    didntAnswer: 0, //variable to store number of unanswered questions if time expires
    answered: false, //variable to stop timer if an answer is clicked
    questionsRemaining: 9,
    correctAnswer: 1,
    timeRemaining: 15,
    currentQuestion: " ",
    answers: "",
    i: 0,

    qBank: [{
        question: "Can I Kick It?",
        answers: ["Yes you can!", "nah", "HELL NAH", "Why certainly..."],
        correctAnswer: 0
    }, {
        question: "How Many?!",
        answers: ["12", "14", "more", "less"],
        correctAnswer: 3
    }, {
        question: "How Much?!",
        answers: ["12", "14", "more", "less"],
        correctAnswer: 1
    }, {
        question: "How Come?!",
        answers: ["12", "14", "more", "less"],
        correctAnswer: 2
    }, {
        question: "Can I Kick It?",
        answers: ["Yes you can!", "nah", "HELL NAH", "Why certainly..."],
        correctAnswer: 0
    }, {
        question: "How Many?!",
        answers: ["12", "14", "more", "less"],
        correctAnswer: 3
    }, {
        question: "How Much?!",
        answers: ["12", "14", "more", "less"],
        correctAnswer: 1
    }, {
        question: "How Come?!",
        answers: ["12", "14", "more", "less"],
        correctAnswer: 2
    }, {
        question: "How Much?!",
        answers: ["12", "14", "more", "less"],
        correctAnswer: 1
    }, {
        question: "How Come?!",
        answers: ["12", "14", "more", "less"],
        correctAnswer: 2
    }
    ],

    startGame: function () {
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

