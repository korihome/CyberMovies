const images = document.querySelectorAll('img[data-src]')
const imagesObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const { target } = entry;
        const src = target.getAttribute('data-src')
        if (src && entry.isIntersecting) {
            target.setAttribute('src', src)
            imagesObserver.unobserve(target);
        }
    })
})

images.forEach(image => {
    imagesObserver.observe(image)
})


window.onscroll = function (params) {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        document.getElementById("headerfixed").style.transform = "translateY(0%)"
    } else {
        document.getElementById("headerfixed").style.transform = "translateY(-100%)"
    }
}


// var a = document.querySelector(".venobox");

// a.addEventListener('click', function (params) {
//     var video = document.querySelector(".video");
//     video.classList.toggle("d-none");
// })