const app = Vue.createApp({
    data: () => {
        return {
            courseGoalA: "Learn VueJS",
            courseGoalB: "Master VueJS",
            vueLink: "https://vuejs.org/"
        }
    },
    methods : {
        outputGoal() {
            console.log('output goal function');
            const randomNumber = Math.random();
            /* this keyword works differenly
            in normal javascript - refers to the local object
            but here in vue - the "data"'s properties are processed and attached to the global object
            which our this then refers to */
            if(randomNumber < 0.5) {
                return this.courseGoalA;
            } else {
                return this.courseGoalB;
            }
        }
    }
});

app.mount('#user-goal'); // this identifies what part of your code vue controls
// you can control this part of the html with vue-js then