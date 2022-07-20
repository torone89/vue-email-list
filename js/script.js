
// VERIFICA COLLEGAMENTO JAVA
console.log("JS")

// VERIFICA COLLEGAMENTO VUEJS

console.log('Vue ok', Vue)

// Bonus
// Far comparire gli indirizzi email solamente quando sono stati tutti generati.

new Vue({
    el: '#root  ',
    data: {
        mailList: [],
    },
    methods: {
        generateTenMail: function () {
            // Attraverso l'apposita API di Boolean
            // https://flynn.boolean.careers/exercises/api/random/mail
            // generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
            for (let i = 0; i < 10; i++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')

                    .then((res) => {
                        const result = res.data.response;
                        this.mailList.push(result)

                    });
            };
        },
    },

    created() {
        this.generateTenMail();
    }
});




