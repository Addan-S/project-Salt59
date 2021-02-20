// let bg = document.querySelector('#bg');
//             window.addEventListener('scroll', function(){
//                 let value = window.scrollY;
//                 bg.style.backgroundSize = 100 + value*2 + "px";
//             })


class App {
    constructor() {
        
        this.$landingBg = document.querySelector('#bg'); 

        this.addEventListeners();
    };

    addEventListeners() {
            window.addEventListener('scroll', event => {
            let value = window.scrollY;
            this.$landingBg.style.backgroundSize = 100 + value*2 + "px";
        });
    };


};

new App();
