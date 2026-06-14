$('.collection-slider').slick({
  dots: true,
  arrows: false,
  dots: true,
  dotsClass: 'slick-dots',
  mobileFirst: true,
  items: 1,
  arrows: true,
  prevArrow: '<div class="slick-prev"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="icon-right" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"></path></svg></div>',
  nextArrow: '<div class="slick-next"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="icon-right" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M15.41 16.59 10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"></path></svg></div>'
});

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

class Calendar {

  constructor () {
    this.monthDiv = document.querySelector('.cal-month__current');
    this.headDivs = document.querySelectorAll('.cal-head__day');
    this.bodyDivs = document.querySelectorAll('.cal-body__day');
    this.nextDiv = document.querySelector('.cal-month__next');
    this.prevDiv = document.querySelector('.cal-month__previous');

  }

  init () {
    moment.locale(window.navigator.userLanguage || window.navigator.language)

    this.month = moment()
    this.today = this.selected = this.month.clone()
    this.weekDays = moment.weekdaysShort(true)

    this.headDivs.forEach((day, index) => {
      day.innerText = this.weekDays[index]
    });

    // Check if the DOM element is present to avoid addEventListener of null of error
    if(this.nextDiv && this.prevDiv) {
      this.nextDiv.addEventListener('click', _ => { this.addMonth() })
      this.prevDiv.addEventListener('click', _ => { this.removeMonth() })
    } else {
      return;
    }

    this.bodyDivs.forEach(day => {
      day.addEventListener('click', e => {
        const date = +e.target.innerHTML < 10 ? `0${e.target.innerHTML}` : e.target.innerHTML

        if (e.target.classList.contains('cal-day__month--next')) {
          this.selected = moment(`${this.month.add(1, 'month').format('YYYY-MM')}-${date}`)
        } else if (e.target.classList.contains('cal-day__month--previous')) {
          this.selected = moment(`${this.month.subtract(1, 'month').format('YYYY-MM')}-${date}`)
        } else {
          this.selected = moment(`${this.month.format('YYYY-MM')}-${date}`)
        }

        this.update()
      })
    })

    this.update()
  }

  update () {
    this.calendarDays = {
      first: this.month.clone().startOf('month').startOf('week').date(),
      last: this.month.clone().endOf('month').date()
    }

    this.monthDays = {
      lastPrevious: this.month.clone().subtract(1,'months').endOf('month').date(),
      lastCurrent: this.month.clone().endOf('month').date()
    }

    this.monthString = this.month.clone().format('MMMM YYYY')

    this.draw()
  }

  addMonth () {
    this.month.add(1, 'month')

    this.update()
  }

  removeMonth () {
    this.month.subtract(1, 'month')

    this.update()
  }

  draw () {
    this.monthDiv.innerText = this.monthString

    let index = 0

    if (this.calendarDays.first > 1) {
      for (let day = this.calendarDays.first; day <= this.monthDays.lastPrevious; index ++) {
        this.bodyDivs[index].innerText = day++

        this.cleanCssClasses(false, index)

        this.bodyDivs[index].classList.add('cal-day__month--previous')
      }
    }

    let isNextMonth = false
    for (let day = 1; index <= this.bodyDivs.length - 1; index ++) {
      if (day > this.monthDays.lastCurrent) {
        day = 1
        isNextMonth = true
      }

      this.cleanCssClasses(true, index)

      if (!isNextMonth) {
        if (day === this.today.date() && this.today.isSame(this.month, 'day')) {
          this.bodyDivs[index].classList.add('cal-day__day--today')
        }

        if (day === this.selected.date() && this.selected.isSame(this.month, 'month')) {
          this.bodyDivs[index].classList.add('cal-day__day--selected')
        }

        this.bodyDivs[index].classList.add('cal-day__month--current')
      } else {
        this.bodyDivs[index].classList.add('cal-day__month--next')
      }

      this.bodyDivs[index].innerText = day++
    }
  }

  cleanCssClasses (selected, index) {
    this.bodyDivs[index].classList.contains('cal-day__month--next') &&
      this.bodyDivs[index].classList.remove('cal-day__month--next')
    this.bodyDivs[index].classList.contains('cal-day__month--previous') &&
      this.bodyDivs[index].classList.remove('cal-day__month--previous')
    this.bodyDivs[index].classList.contains('cal-day__month--current') &&
      this.bodyDivs[index].classList.remove('cal-day__month--current')
    this.bodyDivs[index].classList.contains('cal-day__day--today') &&
      this.bodyDivs[index].classList.remove('cal-day__day--today')
    if (selected) {
      this.bodyDivs[index].classList.contains('cal-day__day--selected') &&
        this.bodyDivs[index].classList.remove('cal-day__day--selected')
    }
  }
}

const cal = new Calendar();
cal.init();