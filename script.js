const app = new Vue({
    el: "#app",
    data: {
        images: [
            "https://randomwordgenerator.com/img/picture-generator/54e1dc414c56b10ff3d8992cc12c30771037dbf85254784973267cd6934e_640.jpg",
            "https://randomwordgenerator.com/img/picture-generator/53e0d3424353ac14f1dc8460962e33791c3ad6e04e50744172277fd7924fcd_640.jpg",
            "https://randomwordgenerator.com/img/picture-generator/52e8d54b4f54af14f1dc8460962e33791c3ad6e04e50774977267cdd9f4bc4_640.jpg",
            "https://randomwordgenerator.com/img/picture-generator/53e3d6434d55a914f1dc8460962e33791c3ad6e04e507440762e7ad3954fcd_640.jpg",
            "https://randomwordgenerator.com/img/picture-generator/54e4d6474356ad14f1dc8460962e33791c3ad6e04e5074417d2d73dc974fcc_640.jpg"
        ],
        activeImage: 0
    },
    methods: {
        onDotClick: function (index) {
            this.activeImage = index;
        },
        // potevo usare una funzione unica che in base all'input andava avanti o indietro
        leftArrowClick: function () {
            this.activeImage--;
            if (this.activeImage < 0) {
                this.activeImage = this.images.length - 1;
            }
        },
        rightArrowClick: function () {
            this.activeImage++;
            if (this.activeImage > this.images.length - 1) {
                this.activeImage = 0;
            }
        },
        // tecnicamente scorretto
        arrowKeyPress: addEventListener("keydown", function (event) {
            if (event.key == "ArrowRight") {
                app.rightArrowClick();
            } else if (event.key == "ArrowLeft") {
                app.leftArrowClick();
            }
        })
    },
    /*
    tutti questi metodi vanno definiti separatamente dai methods
    mounted: function() {
        document.querySelector(.slider.container).focus()
        // focussare l'elemento dove ho messo il tabindex

        // posso mettere qui anche il setInterval
        setInterval(function() {
            this.rightArrowClick()
        }, 3000)
        // non funziona perchè lo scope della function non fa si che il this prenda il valore giusto
        setInterval(() => {this.rightArrowClick()}, 3000)
    }
    */
})

const TIMER = 3;
var clock = setInterval(() => app.rightArrowClick(), 1000 * TIMER)