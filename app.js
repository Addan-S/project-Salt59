class App {
    constructor() {
        
        this.$landingBg = document.querySelector('#bg');
        this.$navBtn = document.querySelector('#nav-btn'); 
        this.$navBtnImg = document.querySelector('#nav-btn-img');
        this.navImgIdentifier = 0; 

        this.addEventListeners();
        this.handleNavBtnClick();
        this.displaySrc();

    };

    displaySrc () {
        console.log(`NavBtnImg Src: ${this.$navBtnImg.src}`);
    }

    addEventListeners() {
            window.addEventListener('scroll', () => {
            let value = window.scrollY;
            this.$landingBg.style.backgroundSize = 100 + value*2 + "px";
        });

            this.$navBtn.addEventListener('click', event => {
                this.handleNavBtnClick(event); 
            });

    };

    handleNavBtnClick(event) {
        const isNavBtnClicked = this.$navBtn.contains(event.target);
        console.log(isNavBtnClicked);
        if(isNavBtnClicked && this.navImgIdentifier % 2 == 0) {
            this.$navBtnImg.src = './Images/up-arrow.svg';
            this.navImgIdentifier++;
        }
        else if(isNavBtnClicked && this.navImgIdentifier % 2 == 1) {
            this.$navBtnImg.src = './Images/down-arrow.svg'; 
            this.navImgIdentifier++;
        } 
    };

};

new App();


