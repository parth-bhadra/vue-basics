const app = Vue.createApp({
    data: () => {
        return {
            courseGoal: "Learn VueJS",
            vueLink: "https://vuejs.org/"
        }
    },
    methods : {
        outputGoal() {
            const randomNumber = Math.random();
            if(randomNumber < 0.5) {
                return 'Learn Vue';
            } else {
                return 'Master Vue';
            }
        }
    }
});

app.mount('#user-goal'); // this identifies what part of your code vue controls
// you can control this part of the html with vue-js then