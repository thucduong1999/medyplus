$(document).ready(function () {
    if (screen.width <= 1024) {
        // Click để hiện thông tin web
        $('.web-info-btn').click(function (e) { 
            e.preventDefault();
            $(this).find('.info-content').toggle('show');
            $(this).siblings().toggle('hidden');
        });
        // Click để hiện dropdown language
        $('.language-btn').click(function (e) { 
            e.preventDefault();
            $('.dropdown-content').addClass('active-drop-language');
            $('.cover').addClass('active-drop-language');
        });
        $('.cover').click(function (e) { 
            e.preventDefault();
            $('.dropdown-content').removeClass('active-drop-language');
            $('.cover').removeClass('active-drop-language');

        });
        // Click để hiện dropdown category
        $('.cate-btn').click(function (e) { 
            e.preventDefault();
            $('.dropdown-content').addClass('active-drop-category');
            $('.cover').addClass('active-drop-category');
        });
        $('.cover').click(function (e) { 
            e.preventDefault();
            $('.dropdown-content').removeClass('active-drop-category');
            $('.cover').removeClass('active-drop-category');
        });
    }
    // Click để hiện navigation
    $('.nav-icon').click(function (e) { 
        e.preventDefault();
        $('.navbar').addClass('active');
        $('.cover').addClass('active');
    });
    $('.cover').click(function (e) { 
        e.preventDefault();
        $('.navbar').removeClass('active');
        $('.cover').removeClass('active');
    });
    // Click để hiện Cart
    $('.top-selling-item').click(function (e) { 
        e.preventDefault();
        $('.add-to-cart').addClass('active-cart');
        $('.cover').addClass('active-cart');
    });
    $('.cover').click(function (e) { 
        e.preventDefault();
        $('.add-to-cart').removeClass('active-cart');
        $('.cover').removeClass('active-cart');
    });
});