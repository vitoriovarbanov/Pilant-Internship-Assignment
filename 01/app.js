(function () {
    /***********CAROUSEL IMPLEMENTATION*****************/
    const carouselHeaders = Array.from(document.getElementsByClassName('carousel-header'))
    const carouselButtons = Array.from(document.querySelectorAll('.carousel-navigation button'))
    let arrayLength = carouselHeaders.length;

    const init = function () {
        let res;
        for (const el of carouselHeaders) {
            if (el.style.display === 'inline') {
                el.style.display = 'none'
                res = el;
                showNext(res)
                break;
            }
        }
    }

    function showNext(currParagraph) {
        let nextPId = Number(currParagraph.id) + 1
        if (Number(currParagraph.id) === arrayLength - 1) {
            nextPId = 0;
        }
        let nextParagraph;
        carouselHeaders.forEach(el => {
            if (Number(el.id) === nextPId) {
                nextParagraph = el;
            }
        })
        nextParagraph.style.display = 'inline'
    }

    let switchParagraphs = window.setInterval(() => {
        init()
    }, 5000)

    carouselButtons.forEach((el, index) => {
        el.addEventListener('click', function () {
            carouselHeaders.forEach(elem => {
                if (Number(elem.id) === index) {
                    elem.style.display = 'inline'
                } else {
                    elem.style.display = 'none'
                }
            })
            window.clearInterval(switchParagraphs)
            switchParagraphs = window.setInterval(init, 5000)
        })
    })
})();




