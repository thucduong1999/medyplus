$(document).ready(function () {
    // Click để hiện thông tin web
    $('.info-icon').click(function (e) { 
        e.preventDefault();
        $(this).find('.info-content').toggle('show');
        $(this).siblings().toggle('hidden');
    });
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
});