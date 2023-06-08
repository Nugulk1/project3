// skill bar // 

$(document).ready(function() {
  function skillbar(id, percent) {
    let bar = new ProgressBar.Line(id, {
      strokeWidth: 3,
      trailWidth: 5,
      color: '#262a56',
      duration: 1400,
      step: function(state, line) {
        line.setText(Math.round(line.value() * 100) + ' %');
      }
    });
    bar.animate(percent);
  }

  skillbar("#ae", 0.9);
  skillbar("#ap", 0.85);
  skillbar("#ps", 0.8);
  skillbar("#html", 0.75);
  skillbar("#css", 0.7);
  skillbar("#js", 0.7);
});

// mobile nav //

$(document).ready(function() {
  let mobileBtn = $('.mobile-btn');
  let mobileNav = $('.mobile-nav');
  let windowMask = $('.window-mask');

  mobileBtn.click(function() {
    $(this).toggleClass("on");
    mobileNav.toggleClass("on");
    windowMask.toggleClass("on");
  });

  windowMask.click(function() {
    mobileBtn.removeClass("on");
    mobileNav.removeClass("on");
    windowMask.removeClass("on");
  });

  $(window).on('resize', function() {
    var windowWidth = $(window).width();

    if (windowWidth > 768 && mobileNav.hasClass('on')) {
      mobileNav.removeClass('on');
      mobileBtn.removeClass('on');
      windowMask.removeClass('on');
    }
  });
});

// tap menu //

$(document).ready(function() {
  $('.tab-menu li a').click(function(e) {
    e.preventDefault();

    $('.tab-menu li').removeClass('active');
    $('.tab-content .tab-item').removeClass('active');

    $(this).parent('li').addClass('active');

    var tabId = $(this).attr('href');
    $(tabId).addClass('active');
  });
});

// scrolling // 

$(document).ready(function() {
  const $menu = $('header ul li');
  const $contents = $('section');

  $menu.click(function() {
    // Remove 'on' class from all menu items
    $menu.removeClass('on');
    $(this).addClass('on');

    let idx = $(this).index();
    let $section = $contents.eq(idx);
    let sectionDistance = $section.offset().top - 110;
    console.log(sectionDistance);
    $("html, body").animate({
      scrollTop: sectionDistance
    });
  });
  $('.mobile-nav li').click(function() {
    $(this).addClass('on');
    let idx = $(this).index();
    let $section = $contents.eq(idx);
    let sectionDistance = $section.offset().top - 0;
    console.log(sectionDistance);
    $("html, body").animate({
      scrollTop: sectionDistance
    });
  });

  $(window).scroll(function() {
    $contents.each(function() {
      if ($(this).offset().top <= $(window).scrollTop() + 114) {
        let idx = $(this).index();
        $menu.removeClass("on");
        $menu.eq(idx).addClass("on");
        $('.mobile-nav li').removeClass('active');
        $('.mobile-nav li').eq(idx).addClass('active');
      }
    });
  });
});

// popup video // 

$(document).ready(function() {
  const popup = document.querySelector('.popup');
  const popupLinks = document.querySelectorAll('.popup-link');

  popupLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      
      const videoUrl = link.getAttribute('data-video-url');
      const iframe = document.createElement('iframe');
      iframe.src = videoUrl;
      iframe.width = '1120';
      iframe.height = '630';
      iframe.style.border = 'none';
      popup.innerHTML = '';
      popup.appendChild(iframe);
      
      popup.classList.add('active');
    });
  });

  popup.addEventListener('click', (e) => {
    if (e.target === popup) {
      popup.classList.remove('active');
    }
  });
});



