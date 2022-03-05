$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrolly > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scroll > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
    // slide up script
    $('scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    })

    // toggle menu/navbar script
    $('menu-btn').click(function(){
        $('navbar.menu').toggleClass("active");
        $('menu-btn i').toggleClass("active");
    });

    // typing Animation script
    var typed = new Typed(".typing",{
        strings: ["Developer", "Cook", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    })

    var typed = new Typed(".typing-2",{
        strings: ["Developer", "Cook", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    })

});