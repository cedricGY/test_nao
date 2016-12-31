$(document).ready(function() {
    "use strict";

    /* ----------------------------------------------------------------------
     Flickr
     ---------------------------------------------------------------------- */

    $('.flickr-cbox').jflickrfeed({
        limit: 8,
        qstrings: {
            id: '52617155@N08'
        },
        itemTemplate: '<li>' + '<a href="{{image}}" title="{{title}}">' + '<img src="{{image_s}}" alt="{{title}}" />' + '</a>' + '</li>'
    }, function(data) {

        $(".flickr-cbox a").nivoLightbox({
            effect: 'fadeScale'
        });

    });

    /* ----------------------------------------------------------------------
     Bootstrap - doropdownhover
     ---------------------------------------------------------------------- */

    $('.js-activated').dropdownHover().dropdown();

    /* ----------------------------------------------------------------------
     Bootstrap - submenu
     ---------------------------------------------------------------------- */

    $('[data-submenu]').submenupicker();

    /* ----------------------------------------------------------------------
     Bootstrap - Tooltip/popover
     ---------------------------------------------------------------------- */

    $("[data-toggle=tooltip]").tooltip();
    $("[data-toggle=popover]").popover();

    /* ----------------------------------------------------------------------
     Sticky
     ---------------------------------------------------------------------- */

    $("#header").sticky({
        topSpacing: 0
    });

    /* ----------------------------------------------------------------------
     Back to Top
     ---------------------------------------------------------------------- */

    $('.back-to-top').on('click', function() {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });

    /* ----------------------------------------------------------------------
     Skill Bar
     ---------------------------------------------------------------------- */

    $('.skillbar-percent').each(function() {
        $(this).animate({
            width: $(this).attr('data-percent')
        }, 3000);
    });

    /* ----------------------------------------------------------------------
     Toggle
     ---------------------------------------------------------------------- */

    $(".toggle-content").hide();
    $(".toggle-container > h4").on('click', function() {
        $(this).toggleClass("active").next().slideToggle(300);
    });

    /* ----------------------------------------------------------------------
     Top Panel
     ---------------------------------------------------------------------- */

    $(".toppanel-button").on('click', function() {
        $(".toppanel").slideToggle("slow");
        $(this).toggleClass("active");
        return false;
    });

    /* ----------------------------------------------------------------------
     Typed
     ---------------------------------------------------------------------- */

    $(".typed").typed({
        stringsElement: $('.typed-strings'),
        typeSpeed: 100,
        backDelay: 500,
        loop: true // or false
    });

    /* ----------------------------------------------------------------------
     Easy Tabs
     ---------------------------------------------------------------------- */

    $('.tab-container').easytabs({
        updateHash: false,
        animate: false
    });

    $('.tab-side-container').easytabs({
        updateHash: false,
        animate: false,
        tabActiveClass: "selected-tab",
        panelActiveClass: "displayed"
    });

    /* ----------------------------------------------------------------------
     Owl Carousel
     ---------------------------------------------------------------------- */

    // slider
    $(".owl-slider").owlCarousel({
        pagination: true,
        navigation: true,
        autoPlay: 10000,
        navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        transitionStyle: "fade",
        addClassActive: true,
        afterMove: previousslide,
        beforeMove: nextslide,
        singleItem: true
    });
    $(".owl-slider .active .owl-fadeInUp").addClass('animated fadeInUp');
    $(".owl-slider .active .owl-fadeInDown").addClass('animated fadeInDown');
    $(".owl-slider .active .owl-fadeInLeft").addClass('animated fadeInLeft');
    $(".owl-slider .active .owl-fadeInRight").addClass('animated fadeInRight');
    $(".owl-slider .active .owl-bounceIn").addClass('animated bounceIn');

    function previousslide() {
        $(".owl-slider .active .owl-fadeInUp").addClass('animated fadeInUp');
        $(".owl-slider .active .owl-fadeInDown").addClass('animated fadeInDown');
        $(".owl-slider .active .owl-fadeInLeft").addClass('animated fadeInLeft');
        $(".owl-slider .active .owl-fadeInRight").addClass('animated fadeInRight');
        $(".owl-slider .active .owl-bounceIn").addClass('animated bounceIn');
    }

    function nextslide() {
        $(".owl-slider .active .owl-fadeInUp").removeClass('animated fadeInUp');
        $(".owl-slider .active .owl-fadeInDown").removeClass('animated fadeInDown');
        $(".owl-slider .active .owl-fadeInLeft").removeClass('animated fadeInLeft');
        $(".owl-slider .active .owl-fadeInRight").removeClass('animated fadeInRight');
        $(".owl-slider .active .owl-bounceIn").removeClass('animated bounceIn');
    }

    // Five images
    $(".owl-image").owlCarousel({
        items: 5,
        navigation: true,
        navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        pagination: false
    });

    // single
    $(".owl-single").owlCarousel({
        pagination: true,
        navigation: false,
        transitionStyle: "backSlide",
        singleItem: true
    });

    // testimonial
    $(".owl-testimonial").owlCarousel({
        singleItem: true,
        autoPlay: 5000,
        navigation: false,
        paginationSpeed: 1000,
        autoHeight: true,
        stopOnHover: true,
        goToFirstSpeed: 2000,
        transitionStyle: "fade"
    });

    // client
    $(".owl-client").owlCarousel({
        items: 7,
        autoPlay: true,
        navigation: false,
        pagination: false
    });

    // shop single
    var sync1 = $("#sync1");
    var sync2 = $("#sync2");
    sync1.owlCarousel({
        singleItem: true,
        slideSpeed: 1000,
        navigation: false,
        pagination: false,
        afterAction: syncPosition,
        responsiveRefreshRate: 200,
    });
    sync2.owlCarousel({
        items: 3,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 3],
        itemsTablet: [768, 3],
        itemsMobile: [479, 3],
        navigation: true,
        navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        pagination: false,
        responsiveRefreshRate: 100,
        afterInit: function(el) {
            el.find(".owl-item").eq(0).addClass("synced");
        }
    });

    function syncPosition(el) {
        var current = this.currentItem;
        $("#sync2")
            .find(".owl-item")
            .removeClass("synced")
            .eq(current)
            .addClass("synced")
        if ($("#sync2").data("owlCarousel") !== undefined) {
            center(current)
        }
    }
    $("#sync2").on("click", ".owl-item", function(e) {
        e.preventDefault();
        var number = $(this).data("owlItem");
        sync1.trigger("owl.goTo", number);
    });

    function center(number) {
        var sync2visible = sync2.data("owlCarousel").owl.visibleItems;
        var num = number;
        var found = false;
        for (var i in sync2visible) {
            if (num === sync2visible[i]) {
                var found = true;
            }
        }
        if (found === false) {
            if (num > sync2visible[sync2visible.length - 1]) {
                sync2.trigger("owl.goTo", num - sync2visible.length + 2)
            } else {
                if (num - 1 === -1) {
                    num = 0;
                }
                sync2.trigger("owl.goTo", num);
            }
        } else if (num === sync2visible[sync2visible.length - 1]) {
            sync2.trigger("owl.goTo", sync2visible[1])
        } else if (num === sync2visible[0]) {
            sync2.trigger("owl.goTo", num - 1)
        }
    }

    /* ----------------------------------------------------------------------
     Nivo Lightbox
     ---------------------------------------------------------------------- */

    $(".nivo-lightbox").nivoLightbox({
        effect: 'fadeScale'
    });
    $(".nivo-lightbox-video").nivoLightbox({
        effect: 'fade'
    });

    /* ----------------------------------------------------------------------
     ContactForm - Validation
     ---------------------------------------------------------------------- */

    // contact.html
    $(".commentForm").validate();

    // contact2.html
    $(".commentForm2").validate();

    // bottompanel
    $(".commentForm3").validate();

    /* ----------------------------------------------------------------------
     ContactForm - Ajax Form
     ---------------------------------------------------------------------- */

    // contact.html
    var options = {
        target: '.message',
        url: 'contact.php'
    };

    $('.commentForm').ajaxForm(options);

    // contact2.html
    var options2 = {
        target: '.message2',
        url: 'contact2.php'
    };

    $('.commentForm2').ajaxForm(options2);

    // bottompanel
    var options3 = {
        target: '.message3',
        url: 'contact3.php'
    };

    $('.commentForm3').ajaxForm(options3);

    /* ----------------------------------------------------------------------
     mb-YTPlayer
     ---------------------------------------------------------------------- */

    $(".mbyt-player").mb_YTPlayer();

    /* ----------------------------------------------------------------------
     Simple Placeholder
     ---------------------------------------------------------------------- */

    $('input[placeholder]').simplePlaceholder();
    $('textarea[placeholder]').simplePlaceholder();

    /* ----------------------------------------------------------------------
     Chart Waypoint
     ---------------------------------------------------------------------- */

    $('.chart').waypoint(function(direction) {
        $(this.element).easyPieChart({
            easing: 'easeOutBounce',
            onStep: function(from, to, percent) {
                $(this.el).find('.percent').text(Math.round(percent));
            }
        });
    }, {
        offset: '90%'
    });

    /* ----------------------------------------------------------------------
     Animated Waypoint
     ---------------------------------------------------------------------- */

    $('.animated').css('opacity', 0);
    $('.animated').waypoint(function(direction) {
        $(this.element).css('opacity', 1);
    }, {
        offset: '90%'
    });

    $('.animated').waypoint(function(direction) {
        $(this.element).addClass($(this.element).data('animation'));
    }, {
        offset: '90%'
    });

});

/* ----------------------------------------------------------------------
 Slider Revolution
 ---------------------------------------------------------------------- */

/* Fullwidth */
var tpj = jQuery;
var revapi1;
tpj(document).ready(function() {
    if (tpj("#rev_slider_fullwidth").revolution == undefined) {
        revslider_showDoubleJqueryError("#rev_slider_fullwidth");
    } else {
        revapi1 = tpj("#rev_slider_fullwidth").show().revolution({
            sliderType: "standard",
            jsFileLocation: "revolution/js/",
            sliderLayout: "fullwidth",

            dottedOverlay: "none",
            delay: 9000,
            autoHeight: "off",
            responsiveLevels: [4064, 1024, 778, 480],
            gridwidth: 1200,
            gridheight: 600,
            navigation: {
                keyboardNavigation: "off",
                keyboard_direction: "horizontal",
                mouseScrollNavigation: "off",
                onHoverStop: "off",
                touch: {
                    touchenabled: "on",
                    swipe_threshold: 75,
                    swipe_min_touches: 1,
                    swipe_direction: "horizontal",
                    drag_block_vertical: false
                },
                arrows: {
                    style: "zeus",
                    enable: true,
                    hide_onmobile: false,
                    hide_under: 600,
                    hide_onleave: true,
                    hide_delay: 200,
                    hide_delay_mobile: 1200,
                    tmp: '',
                    left: {
                        h_align: "left",
                        v_align: "center",
                        h_offset: 30,
                        v_offset: 0
                    },
                    right: {
                        h_align: "right",
                        v_align: "center",
                        h_offset: 30,
                        v_offset: 0
                    }
                },
                bullets: {
                    enable: true,
                    hide_onmobile: false,
                    hide_under: 960,
                    style: "zeus",
                    hide_onleave: true,
                    direction: "horizontal",
                    h_align: "right",
                    v_align: "bottom",
                    h_offset: 80,
                    v_offset: 50,
                    space: 5,
                    tmp: '<span class="tp-bullet-image"></span><span class="tp-bullet-imageoverlay"></span><span class="tp-bullet-title">{{title}}</span>'
                }
            },
            lazyType: "none",
            parallax: {
                type: "mouse",
                origo: "slidercenter",
                speed: 2000,
                levels: [2, 3, 4, 5, 6, 7, 12, 16, 10, 50],
                disable_onmobile: "on"
            },
            shadow: 0,
            spinner: "off",
            shuffle: "off",
            disableProgressBar: "on",
            stopLoop: "off",
            stopAfterLoops: -1,
            stopAtSlide: -1,
            hideThumbsOnMobile: "off",
            hideSliderAtLimit: 0,
            hideCaptionAtLimit: 0,
            hideAllCaptionAtLilmit: 0,
            debugMode: false,
            fallbacks: {
                simplifyAll: "off",
                nextSlideOnWindowFocus: "off",
                disableFocusListener: false,
            }
        });
        var newCall = new Object(),
            cslide;

        newCall.callback = function() {
            var proc = revapi1.revgetparallaxproc(),
                fade = 1 + proc,
                scale = 1 + (Math.abs(proc) / 10);

            punchgs.TweenLite.set(revapi1.find('.slotholder, .rs-background-video-layer'), {
                opacity: fade,
                scale: scale
            });
        }
        newCall.inmodule = "parallax";
        newCall.atposition = "start";

        revapi1.on("revolution.slide.onloaded", function(e) {
            revapi1.revaddcallback(newCall);
        });
    }
});

/* ----------------------------------------------------------------------
 Scroll
 ---------------------------------------------------------------------- */

$(window).scroll(function() {
    "use strict";

    // Sticky Header
    if ($(this).scrollTop() > 100) {
        $('#header').addClass("sticky-header");
    } else {
        $('#header').removeClass("sticky-header");
    }

    // Back to top
    if ($(this).scrollTop() > 100) {
        $('.back-to-top').fadeIn();
    } else {
        $('.back-to-top').fadeOut();
    }
});

/* ----------------------------------------------------------------------
 Load
 ---------------------------------------------------------------------- */

$(window).load(function() {
    "use strict";

    // Isotope fitRows
    var $container = $('.isotope').isotope({
        itemSelector: '.element-item',
        layoutMode: 'fitRows'
    });

    $('#filters').on('click', 'button', function() {
        var filterValue = $(this).attr('data-filter');
        $container.isotope({
            filter: filterValue
        });
    });

    $('.button-group').each(function(i, buttonGroup) {
        var $buttonGroup = $(buttonGroup);
        $buttonGroup.on('click', 'button', function() {
            $buttonGroup.find('.is-checked').removeClass('is-checked');
            $(this).addClass('is-checked');
        });
    });

    // Isotope masonry
    var $container2 = $('.isotope-masonry').isotope({
        itemSelector: '.grid-item',
        percentPosition: true,
        masonry: {
            columnWidth: '.grid-sizer'
        }
    })

    $('#filters').on('click', 'button', function() {
        var filterValue = $(this).attr('data-filter');
        $container2.isotope({
            filter: filterValue
        });
    });

    $('.button-group').each(function(i, buttonGroup) {
        var $buttonGroup = $(buttonGroup);
        $buttonGroup.on('click', 'button', function() {
            $buttonGroup.find('.is-checked').removeClass('is-checked');
            $(this).addClass('is-checked');
        });
    });

    // Isotope select menu
    var $container3 = $('.isotope-shop').isotope({
        itemSelector: '.element-item',
        layoutMode: 'fitRows'
    });

    $('.filters-select').on('change', function() {
        var filterValue = this.value;
        $container3.isotope({
            filter: filterValue
        });
    });


    /* ----------------------------------------------------------------------
     Selection
     ---------------------------------------------------------------------- */

    $('#saisie_complete').click(function () {
        $('.form-saisie-rapide').remove();
        $('#saisie_complete').attr('disabled','disabled');
        $('#saisie_rapide').removeAttr('disabled');
        $('#observation').append('<div class="form-saisie-complete"><div class="well"><h3 class="text-center">Formulaire de saisie Complète</h3><div class="form-group"><label>Nom de l\'espèces *</label><input class="form-control" type="text" name="Lorem" placeholder="Ex: Lorem" required></div><div class="form-group"><label>Date *</label><input class="form-control" type="text" name="Lorem" placeholder="Ex: Lorem" required></div><div class="form-group"><label>Coordonnées *</label><input class="form-control" type="text" name="Lorem" placeholder="Ex: Lorem" required><div class="form-group"><label>Nombre</label><input class="form-control" type="number" name="Lorem" placeholder="Ex: Lorem" required></div><div class="row"><div class="form-group"><label class="col-md-5 control-label" for="selectbasic">Saison</label><div class="col-md-5"><select id="selectbasic" name="selectbasic" class="form-control"><option value="1">Option one</option><option value="2">Option two</option></select></div></div></div><div class="row"><div class="form-group"><label class="col-md-5 control-label" for="selectbasic">Type de précipitations</label><div class="col-md-5"><select id="selectbasic" name="selectbasic" class="form-control"><option value="1">Option one</option><option value="2">Option two</option></select></div></div></div><div class="row"><div class="form-group"><label class="col-md-5 control-label" for="selectbasic">Météo</label><div class="col-md-5"><select id="selectbasic" name="selectbasic" class="form-control"><option value="1">Option one</option><option value="2">Option two</option></select></div></div></div><div class="row"><div class="form-group"><label class="col-md-5 control-label" for="selectbasic">Période</label><div class="col-md-5"><select id="selectbasic" name="selectbasic" class="form-control"><option value="1">Option one</option><option value="2">Option two</option></select></div></div></div><div class="row"><div class="form-group"><label class="col-md-5 control-label" for="selectbasic">Environnement</label><div class="col-md-5"><select id="selectbasic" name="selectbasic" class="form-control"><option value="1">Option one</option><option value="2">Option two</option></select></div></div></div><div class="row"><div class="form-group"><label class="col-md-5 control-label" for="selectbasic">Comportement</label><div class="col-md-5"><select id="selectbasic" name="selectbasic" class="form-control"><option value="1">Option one</option><option value="2">Option two</option></select></div></div></div><div class="row"><div class="form-group"><label class="col-md-5 control-label" for="selectbasic">Sensibilité</label><div class="col-md-5"><select id="selectbasic" name="selectbasic" class="form-control"><option value="1">Option one</option><option value="2">Option two</option></select></div></div></div><div class="form-group"><label>Votre photo</label><input class="form-control" type="file" name="Lorem" placeholder="Ex: Lorem" required></div><input class="submit btn btn-theme pull-right" name="submit" type="submit" value="Envoyer"></div></div>');
    });

    $('#saisie_rapide').on('click', function () {
        $('.form-saisie-complete').remove();
        $('#saisie_rapide').attr('disabled','disabled');
        $('#saisie_complete').removeAttr('disabled');
        $('#observation').append('<div class="form-saisie-rapide"><div class="well"><h3 class="text-center">Formulaire de saisie rapide</h3><div class="form-group"><label>Nom de l\'espèces *</label><input class="form-control" type="text" name="Lorem" placeholder="Ex: Lorem" required></div><div class="form-group"><label>Date *</label><input class="form-control" type="text" name="Lorem" placeholder="Ex: Lorem" required></div><div class="form-group"><label>Coordonnées *</label><input class="form-control" type="text" name="Lorem" placeholder="Ex: Lorem" required><div class="form-group"><label>Nombre</label><input class="form-control" type="number" name="Lorem" placeholder="Ex: Lorem" required></div><div class="form-group"><label>Votre photo</label><input class="form-control" type="file" name="Lorem" placeholder="Ex: Lorem" required></div><input class="submit btn btn-theme pull-right" name="submit" type="submit" value="Envoyer"></div></div>');
    });
  
    /* ----------------------------------------------------------------------
     Inscription
     ---------------------------------------------------------------------- */

    $('#optionsRadios1').on('click', function () {
        console.log('click 1');
        $('#naturaliste-user').remove();
    });

    $('#optionsRadios2').on('click', function () {
        console.log('click 2');
        $('#type-user').append('<div id="naturaliste-user"> <div class="form-group"> <label>Nom</label> <input type="text" name="nom" class="form-control" value=""> </div> <div class="form-group"> <label>Prénom</label> <input type="text" name="prenom" class="form-control" value=""> </div> <div class="form-group"> <label>Code ASSO</label> <input type="text" name="code ASSO" class="form-control" value=""> </div> </div>')
    });


});