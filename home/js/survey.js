const surveyApp = Vue.createApp({
    data() {
      return {
        started: false, // To track if the survey has started
        currentQuestionIndex: 0,
        selectedAnswer: null,
        showThankYou: false,
        feedback: [],
        questions: [
          {
            question: "Please rate the design of this website",
            options: ["Yes", "Yes", "Yes", "Yes"],
          },
          {
            question: "Just kidding lol. How would you rate the design of this website?",
            options: ["Excellent", "Good", "Average", "Poor"],
          },
          {
            question: "Was the website easy to navigate?",
            options: ["Very Easy", "Somewhat Easy", "Neutral", "Difficult"],
          },
          {
            question: "Would you recommend this website to others?",
            options: ["Definitely", "Probably", "Not Sure", "No"],
          },
          {
            question: "Any suggestions for improvement?",
            options: ["Better Design", "More Features", "Faster Loading", "None"],
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
      startSurvey() {
        this.started = true; // Start the survey
      },
      selectAnswer(index) {
        this.selectedAnswer = index;
      },
      nextQuestion() {
        this.feedback.push({
          question: this.currentQuestionData.question,
          answer: this.currentQuestionData.options[this.selectedAnswer],
        });
        this.selectedAnswer = null;
        if (this.currentQuestionIndex < this.questions.length - 1) {
          this.currentQuestionIndex++;
        } else {
          this.showThankYou = true;
          this.started = false;
        }
      },
      restartSurvey() {
        this.currentQuestionIndex = 0;
        this.feedback = [];
        this.selectedAnswer = null;
        this.showThankYou = false;
        this.started = false;
      },
    },
  });
  surveyApp.mount("#surveyApp");