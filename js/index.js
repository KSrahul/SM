if (window.location == "https://ksrahul.github.io/Test/" || "https://ksrahul.github.io/Test/index.html") {
    document.getElementsByTagName("body")[0].style = "overflow: hidden"
    document.onreadystatechange = function() {
        setTimeout(function() {
            if (document.readyState == "complete") {
                document.getElementById("loaderSpiner").className = "loader remove"
                document.getElementById("loader").className = "removeLoaded"
                document.getElementsByTagName("body")[0].style = "overflow: scroll"
            } else {
                document.getElementById("loaderSpiner").className = "loader"
                document.getElementById("loader").className = ""
                document.getElementsByTagName("body")[0].style = "overflow: hidden"
            }
        }, 2000)
    }
}
// For automatically hide or onclick, the account deactivation message.
if (window.location == "file:///Users/rahulalam/Desktop/Test/deactivate-home.html") {
    setInterval(function() {
        if (document.getElementById("deactivateMessage").className = "deactivate-message-show") {
            document.getElementById("deactivateMessage").className = "deactivate-message-show hide_Deactivation";
            window.location.replace("https://doons.herokuapp.com/");
        }
    }, 1000);
}

function hideMessage() {
    if (document.getElementById("deactivateMessage").className = "deactivate-message-show") {
        document.getElementById("deactivateMessage").className = "deactivate-message-show hide_Deactivation";
        window.location.replace("https://doons.herokuapp.com/");
    }
}
// For automatically hide or onclick, the account deactivation message.
// For Header Scroll
function headerScroll() {
    var scroll = window.scrollY;
    if (scroll > 0) {
        document.getElementById("header").className = "header active";
    } else {
        document.getElementById("header").className = "header";
    }
}
document.addEventListener("scroll", headerScroll);
// For Header Scroll

// For Search location cross icon
function searchPlace() {
    if (document.getElementById("searchTextField").value) {
        document.getElementById("search-location").className = "input-search-icon search-location hide-search";
        document.getElementById("cross-search").className = "input-search-icon cross-search show-cross";
    } else {
        document.getElementById("search-location").className = "input-search-icon search-location";
        document.getElementById("cross-search").className = "input-search-icon cross-search";
        // document.getElementById("searchTextField").placeholder = "Search location by city";
    }
}

function hideSearch() {
    document.getElementById("searchTextField").value = "";
    document.getElementById("search-location").className = "input-search-icon search-location";
    document.getElementById("cross-search").className = "input-search-icon cross-search";
}
// if (document.getElementById("searchTextField").value.length == 1) {
//     alert("length is one");
// }
// For Search location cross icon

// For Filter color fill onclick
function filterBtn() {
    if (document.getElementById("filter-btn").className = "filter-btn") {
        document.getElementById("filter-btn").className = "filter-btn filter-btn";
    }

    if (document.getElementById("filter-icon").className = "filter-icon") {
        document.getElementById("filter-icon").className = "product-filter-img filter-icon active";
    }
}

function filterHide() {
    if (document.getElementById("filter-btn").className = "filter-btn filter-btn") {
        document.getElementById("filter-btn").className = "filter-btn outline-filter-btn";
    }

    if (document.getElementById("filter-icon").className = "product-filter-img filter-icon active") {
        document.getElementById("filter-icon").className = "product-filter-img filter-icon";
    }
}
// For Filter color fill onclick

// For onclick bottom to top scrolling
if (window.location == "file:///Users/rahulalam/Desktop/Test/tenders.html") {
    function topScroll() {
        if (window.pageYOffset > 1000) {
            document.getElementById("scroll-btn").className = "scroll-btn active";
        } else {
            document.getElementById("scroll-btn").className = "scroll-btn";
        }
    }
    document.addEventListener("scroll", topScroll);
} else {

}

function returnTop() {
    if (window.pageYOffset > 1000) {
        $("html, body").animate({
            scrollTop: 0
        });
        // document.body.scrollTop = 0;
        // document.documentElement.scrollTop = 0;
    }
}
// For onclick bottom to top scrolling

// For Accordion Submenu Active Link
function toggleOfferingList(value) {
    if (document.getElementById("panellink2").className == "active" || document.getElementById("panellink2").className == "collapsed active") {
        document.getElementsByClassName("sub-accordion")[0].className = "sub-accordion";
        resetAnchors();
    } else {
        document.getElementsByClassName("sub-accordion")[0].className = "sub-accordion sub-accordion-close"
    }
}

function resetAnchors() {
    for (var i = 0, len = allAnchors.length; i < len; i++) {
        allAnchors[i].className = "accordion-anchor"
    }
    document.getElementsByClassName("accordion-anchor")[0].className = "accordion-anchor active"
}

function anchor(value) {
    allAnchors = document.getElementsByClassName("accordion-anchor")
    for (var i = 0, len = allAnchors.length; i < len; i++) {
        allAnchors[i].className = "accordion-anchor"
    }
    value.className = "accordion-anchor active"

    if (document.getElementById("panellink1").className == "active") {
        document.getElementById("panellink1").className = "";
    }
    if (document.getElementById("panellink2").className === "") {
        document.getElementById("panellink2").className = "active";
    }
}

// function noPadding() {
//     if (document.getElementById("no-bottom-padding").className == "right-accordion") {
//         document.getElementById("no-bottom-padding").className = "right-accordion no-bottom-padding";
//     } else {
//         document.getElementById("no-bottom-padding").className = "right-accordion";
//     }
// }
// For Accordion Submenu Active Link



// For back to previous page
function goPrevious() {
    window.history.back();
}
// For back to previous page

// For Two columns accordion active onclick
function resetPanels() {
    $('#panellink1').removeClass('active')
    $('#panellink2').removeClass('active')
    $('#panellink3').removeClass('active')
}

function togglePanels(id) {
    resetPanels();
    let value = "";
    if (id == 1) {
        value = "collapseOpenOne";
    } else if (id == 2) {
        value = "collapseOpenTwo";
    } else if (id == 3) {
        value = "collapseOpenThree";
    }

    if ($("#" + value).hasClass("in")) {
        $('#panellink' + id).removeClass('active')
    } else {
        $('#panellink' + id).addClass('active')
    }
}
// For Two columns accordion active onclick

// For Password Visibility
function passwordShow(value) {
    if (value.checked) {
        $(".input-pass").attr("type", "text");
    } else {
        $(".input-pass").attr("type", "password");
    }
}
// For Password Visibility


// For City Selection
function closeSearch(value) {
    $(`#${value.id}`).remove();
}

function addCity(item) {
    // console.log(item.value);
    let count = $(".selectedlocation").length;
    let id = "selectedCity" + count;
    $(".citiesSelected").append(`<li class='selectedlocation' id=${id}>` + item.value + `<span class='closelocation' onclick='closeSearch(${id})'> </span>` + "</li > ");
    item.value = "";
    searchPlace();
    console.log("selectedlocation");
}
// For City Selection

$(document).ready(function() {
    $("#panellink2").click(function() {
        if ($("#panellink2").hasClass("active")) {
            $(this).siblings().children('li:first').children().addClass("active");
        } else {
            $(this).siblings().children('li').children().removeClass("active");
        }
    });
    $("#panellink1").click(function() {
        $("#panellink2").siblings().children('li').children().removeClass("active");
    });
    $('.datepicker').datepicker();
    // $(".closesearch").click(function() {
    //     $(this).parent().siblings(".selectedlocation").addClass("active")
    //     alert("rahul")
    // });

    // For accordion submenu Smooth Scrolling
    $(".accordion-anchor").click(function(e) {
        e.preventDefault();
        var target = $($(this).attr('href'));
        if (target.length) {
            var scrollTo = target.offset().top;
            $('body, html').animate({ scrollTop: scrollTo + 'px' }, 600);
        }
    });
    // For accordion submenu Smooth Scrolling

    // For Bootstrap Accordion Active Statement
    // For FAQ active effect
    $('.panel-collapse').on('show.bs.collapse', function() {
        $(this).parent().find(".faq-panel-heading").addClass('active');
    });
    $('.panel-collapse').on('hide.bs.collapse', function() {
        $(this).parent().find(".faq-panel-heading").removeClass('active');
    });

    $('.remove-content-border').on('show.bs.collapse', function() {
        $(this).parent().find(".remove-border").addClass('active');
    });
    $('.remove-content-border').on('hide.bs.collapse', function() {
        $(this).parent().find(".remove-border").removeClass('active');
    });
    // For FAQ active effect

    $(".smaill-screen-hearch").click(function() {
        $(".flex-ham-icons").addClass("active");
    });

    $(".search-cross-icon").click(function() {
        $(".flex-ham-icons").removeClass("active");
    });

    $('.right-panel-heading a').click(function() {
        $('.marketplace-panel-heading').removeClass('active');
    });
    // For Profile Active effect
    //Bootstrap Accordion Active Statement End Here


    // For Search Bar JS
    $(".search-icon").click(function() {
        $(".btns-menus").addClass("active");
        // $(".logo").addClass("active");
        // $(".search-container").addClass("active");
        $(".search-main").addClass("active");
        $(".input-search").focus();
    });
    $(".search-cross").click(function() {
        $(".btns-menus").removeClass("active");
        // $(".logo").removeClass("active");
        // $(".search-container").removeClass("active");
        $(".search-main").removeClass("active");
    });
    // Search Bar JS End Here


    // For Hamburger Menu JS
    $(".doon-ham-link").click(function() {
        $(".doon-slide-menus").toggleClass("active");
        $(this).toggleClass("active")
        if ($(".doon-slide-menus").hasClass("active")) {
            $("body").css("overflow", "hidden");
        } else {
            $("body").css("overflow", "auto");
        }
    });
    // Hamburger Menus JS End Here


    // For Contact Us Input Fields JS
    $(".text-field").focus(function() {
        $(this).parent().siblings(".up").addClass("active")
        $(this).parent().siblings(".underline").addClass("active")
        $(this).parent().siblings(".input-field-icon").addClass("active")
        $(this).addClass("active")
    });
    $(".text-field").focusout(function() {
        if (!$(this).val()) {
            $(this).parent().siblings(".up").removeClass("active")
            $(this).parent().siblings(".underline").removeClass("active")
            $(this).parent().siblings(".input-field-icon").removeClass("active")
        }
        $(this).removeClass("active")
    });
    // Contact Us Input Fields JS End Here


    // For Hide And Show Login And Sign-Up Pop-Up
    $(".login").click(function() {
        $(".hide-sign-up").modal("hide");
        $("#sent-reset-pass").modal("hide");
    });

    $(".signup").click(function() {
        $(".hide-login").modal("hide");
        $("#sent-reset-pass").modal("hide");
    });

    $(".reset-password").click(function() {
        $(".hide-login").modal("hide");
    });

    $(".reset-screen-hide").click(function() {
        $("#reset-password").modal("hide");
    });

    $(".back-modal").click(function() {
        $("#reset-password").modal("hide");
        $("#sent-reset-pass").modal("hide");
    });
    // For Hide And Show Login And Sign-Up Pop-Up End Here


    // For Materialize Select Field Activation
    $("select").formSelect();
    // For Materialize Select Field Activation


    // For Profile page JS
    $(".profile-btn").click(function() {
        $(".profile-drop-down").toggleClass("active");
    });

    $(".content").click(function() {
        $(".profile-drop-down").removeClass("active");
    });

    $("#personal-edit").click(function() {
        $(".personal-edit-field").addClass("active")
        $(".edited-field").addClass("active");
    });

    $("#company-edit").click(function() {
        $(".edited-field").addClass("active");
        $(".company-edit-field").addClass("active")
    });

    $(".profile-cancel").click(function() {
        $(".close-edit").addClass("active")
        $(".edited-field").removeClass("active");
        $(".company-edit-field").removeClass("active")
        $(".personal-edit-field").removeClass("active")
    });
    // Profile page JS End Here


    // For filter container
    $(".filter-btn").click(function() {
        $(".filter-container").slideDown(200);
    });
    $(".cancel-filter").click(function() {
        $(".filter-container").slideUp(200);
    });
    // filter container End Here


    // $(".add-input").click(function() {
    //     $(".added").append("<input type='text' name'text'><br>");
    // });

    // For Search Location initialize
    function initialize() {
        var input = document.getElementById('searchTextField');
        new google.maps.places.Autocomplete(input);
        autocomplete = new google.maps.places.Autocomplete(
            /** @type {HTMLInputElement} */
            (document.getElementById('searchTextField')), { types: ['geocode'] });
        google.maps.event.addListener(autocomplete, 'place_changed', function() {
            var place = autocomplete.getPlace();
            if (place.geometry) {
                addCity(document.getElementById('searchTextField'));
            }

        });
    }
    google.maps.event.addDomListener(window, 'load', initialize);
    // For Search Location initialize

});