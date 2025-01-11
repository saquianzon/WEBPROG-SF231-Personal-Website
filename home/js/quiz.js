const quizApp = Vue.createApp({
    data() {
      return {
        quizStarted: false,
        currentQuestionIndex: 0,
        selectedAnswer: null,
        isCorrect: false,
        score: 0,
        showResult: false,
        questions: [
          {
            question: "What do I wish to be?",
            options: ["Musician", "Animator", "Athlete", "Dinosaur"],
            answer: 1,
          },
          {
            question: "Which country would I love to visit?",
            options: ["Japan", "Italy", "Korea", "Spain"],
            answer: 0,
          },
          {
            question: "Among the hobbies, which may I likely choose?",
            options: ["Reading", "Gaming", "Playing Ukulele", "Drawing"],
            answer: 3,
          },
          {
            question: "What pet do I want to own?",
            options: ["Dog", "Cat", "Bird", "Fish"],
            answer: 1,
          },
          {
            question: "Which school did I go to during Junior High School?",
            options: ["O.B Montessori", "Victory Elijah Christian College", "Ignacio Villamor High School", "Spurgeon School Foundation Inc."],
            answer: 1,
          },
          {
            question: "What language did I use for the greeting message at the Home tab?",
            options: ["None, I put a typo", "Greek", "Swedish", "Dutch"],
            answer: 2,
          },
        ],
      };
    },
    computed: {
      currentQuestionData() {
        return this.questions[this.currentQuestionIndex];
      },
    },
    methods: {
      startQuiz() {
        this.quizStarted = true;
      },
      checkAnswer(index) {
        this.selectedAnswer = index;
        if (index === this.currentQuestionData.answer) {
          this.isCorrect = true;
          this.score++;
        } else {
          this.isCorrect = false;
        }
        setTimeout(() => {
          this.nextQuestion();
        }, 1000);
      },
      nextQuestion() {
        this.selectedAnswer = null;
        this.isCorrect = false;
        this.currentQuestionIndex++;
        if (this.currentQuestionIndex >= this.questions.length) {
          this.showResult = true;
        }
      },
      restartQuiz() {
        this.quizStarted = false;
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.showResult = false;
      },
    },
  });
  quizApp.mount("#quizApp");