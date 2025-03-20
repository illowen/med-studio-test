$(document).ready(function () {
    $(window).scroll(function() {

        var header = $('.header').offset().top;
        if(header > 50){
            $('header').addClass('fixed');
        } else{
            $('header').removeClass('fixed');
        }

    });

    $(".menu_mob_btn").click(function () {
        $(this).toggleClass("active");
        $(".menu_wrap").toggleClass("active");
    });

    $(".menu_mob_close").click(function () {
        $(".menu_wrap").toggleClass("active");
    });

    $(".programs_block_item").each(function () {
        $('.programs_block_head').click(function() {
            let _parent = $(this).closest(".programs_block_item");

            $('.programs_block_head', _parent).toggleClass('active');

            $('.programs_block_cont', _parent).toggleClass('active');
        });
    });


    const btnUp = {
        el: document.querySelector('.btn_scroll'),
        show() {
            // удалим у кнопки класс btn-up_hide
            this.el.classList.remove('hide');
        },
        hide() {
            // добавим к кнопке класс btn-up_hide
            this.el.classList.add('hide');
        },
        addEventListener() {
            // при прокрутке содержимого страницы
            window.addEventListener('scroll', () => {
                // определяем величину прокрутки
                const scrollY = window.scrollY || document.documentElement.scrollTop;
                // если страница прокручена больше чем на 400px, то делаем кнопку видимой, иначе скрываем
                scrollY > 400 ? this.show() : this.hide();
            });
            // при нажатии на кнопку .btn-up
            document.querySelector('.btn_scroll').onclick = () => {
                // переместим в начало страницы
                window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: 'smooth'
                });
            }
        }
    }

    btnUp.addEventListener();
})