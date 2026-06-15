window.initMyScripts = function() {

  const mainHeaderMobile = $('.main-header-mobile');
  const menuMobileContent = $('.main-header-mobile__content');

  const menuBarMobileButtonBar = $('.main-header-mobile__menu-bar-button');
  const menuBarMobileIconBar = $('.main-header-mobile__menu-bar-icon');

  const menuBarMobileButtonClose = $('.main-header-mobile__menu-close-button');
  const menuBarMobileIconClose = $('.main-header-mobile__menu-close-icon');

  const mainHeaderLogo = $('.main-header__logo');

  menuBarMobileButtonBar.on('click', function(e){
    e.preventDefault();
    mainHeaderLogo.addClass('main-header__logo--hide');
    menuBarMobileButtonBar.addClass('main-header-mobile__menu-bar-button--hide');
    menuMobileContent.addClass('main-header-mobile__content--open');
  });

  menuBarMobileButtonClose.on('click', function(e) {
    e.preventDefault();
    mainHeaderLogo.removeClass('main-header__logo--hide');
    menuBarMobileButtonBar.removeClass('main-header-mobile__menu-bar-button--hide');
    menuMobileContent.removeClass('main-header-mobile__content--open');
  });

}


