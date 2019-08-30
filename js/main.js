$(document).ready(function () {
    var clicked = false
    $('.nav_btn').click(function () {
        if (clicked) {
            $("header ul").removeClass("open");
            $(".cover").css({display: "none"});
            clicked = false
        } else {
            $("header ul").addClass("open");
            $(".cover").css({display: "block"});
            clicked = true
        }
      })
    var _form = document.querySelector("header form");
    $("header form").on("submit", function (e) {
        if (
            $("header form input").val() === null
            || $("header form input").val() > 2
            || $("header form input").val() === ""
            ) {
                e.preventDefault();
        }
    });
    var images = document.querySelectorAll(".carousel img");
    const interval = "6000";
    let counter = 0;
    setInterval(() => {
        images.forEach(function (image) {
            $(image).css({
                left: `-${counter}00%`
            })
        });
        $(".carousel img").removeClass('show');
        $(`.carousel img:nth-child(${counter + 1})`).addClass('show');
        $(".carousel_btn span").removeClass('show');
        $(`.carousel_btn span:nth-child(${counter + 1})`).addClass('show');
        if (counter <= 5) {
            counter++
        } else if (counter > 5) {
            counter=0;
        } else {
            counter=0;
        }
    }, interval);
    $(".carousel_btn span").click(function (e) {
        $(".carousel_btn span").removeClass('show');
        $(this).addClass('show');
        console.log($(this).attr('id'))
        $(".carousel img").css({
            left: `-${$(this).attr('id')}00%`
        });
        counter=$(this).attr('id');
      });
});