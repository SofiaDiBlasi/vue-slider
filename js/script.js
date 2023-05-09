const {
    createApp
  } = Vue


createApp({
data() {
    return {  
        counter: 0,
        thumbs: [
                {   
                    image: 'img/01.webp',
                    title: 'Marvel\'s Spiderman Miles Morale',
                    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                    class: 'thumb active'
                }, {
                    image: 'img/02.webp',
                    title: 'Ratchet & Clank: Rift Apart',
                    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                    class: 'thumb'
                }, {
                    image: 'img/03.webp',
                    title: 'Fortnite',
                    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                    class: 'thumb'
                }, {
                    image: 'img/04.webp',
                    title: 'Stray',
                    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                    class: 'thumb'
                }, {
                    image: 'img/05.webp',
                    title: "Marvel's Avengers",
                    text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                    class: 'thumb'
                }
            ]
        }
    },
    methods: {
        prev() {
            if (this.counter == 0){
                this.counter = 4;
                this.thumbs[this.counter].class = 'thumb active';
                this.thumbs[0].class = 'thumb';
            } else {
                 this.counter--;
                 this.thumbs[this.counter].class = 'thumb active';
                 this.thumbs[this.counter + 1].class = 'thumb';
            }
        },
        next(){
            if (this.counter == 4){
                this.counter = 0;
                this.thumbs[this.counter].class = 'thumb active';
                this.thumbs[4].class = 'thumb';
            } else {
                this.counter++;
                this.thumbs[this.counter].class = 'thumb active';
                this.thumbs[this.counter - 1].class = 'thumb';
            }
        }
    }
        
}).mount('#app')