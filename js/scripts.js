WW = window.innerWidth || document.clientWidth || document.getElementsByTagName('body')[0].clientWidth
WH = window.innerHeight || document.clientHeight || document.getElementsByTagName('body')[0].clientHeight
BODY = document.getElementsByTagName('body')[0]


document.addEventListener('DOMContentLoaded', function () {

	$(document).on('change', '.error', function() {
        $(this).removeClass('error');
    })


    $('.form button').on('click', function(event){
        event.preventDefault();

        var dataForAjax = "action=form&";
        var addressForAjax = myajax.url;
        var valid = true;
        
        $(this).closest('form').find('input:not([type=submit]),textarea, select').each(function(i, elem) {
            if (this.value.length < 3 && $(this).hasClass('required')) {
                valid = false;
                $(this).addClass('error');
            }
            if ($(this).attr('name') == 'email' && $(this).hasClass('required')) {
                var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
                if (!pattern.test($(this).val())) {
                    valid = false;
                    $(this).addClass('error');
                }
            }
            if ($(this).attr('name') == 'agree' && !$(this).prop("checked")) {
                $(this).addClass('error');
                valid = false;
            }

            if($(this).attr('name') == 'phone' && $(this).hasClass('required')) {
                console.log(this.value.replace(/[_-]/g, '').length);
                if (this.value.replace(/[_-]/g, '').length!=16)
                {
                    valid = false;
                    $(this).addClass('error');
                }
            } 

            if (i > 0) {
                dataForAjax += '&';
            }
            dataForAjax += this.name + '=' + encodeURIComponent(this.value);
        })
       

        if (!valid) {
            return false;
        }  

        $.ajax({
            type: 'POST',
            data: dataForAjax,
            url: addressForAjax,
            success: function(response) {
                $("form").trigger("reset");
                Fancybox.close()

                Fancybox.show([{
                    src: "#success_modal",
                    type: 'inline'
                }])               
            }
        });  
    }); 


	// Team slider
	const teamSliders = [],
		team = document.querySelectorAll('.team .swiper')

	team.forEach((el, i) => {
		el.classList.add('team_s' + i)

		let options = {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			lazy: true,
			spaceBetween: 20,
			slidesPerView: 'auto'
		}

		teamSliders.push(new Swiper('.team_s' + i, options))
	})


	// Objects slider
	const objectsSliders = [],
		objects = document.querySelectorAll('.objects .swiper')

	objects.forEach((el, i) => {
		el.classList.add('objects_s' + i)

		let options = {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			lazy: true,
			spaceBetween: 0,
			slidesPerView: 1
		}

		objectsSliders.push(new Swiper('.objects_s' + i, options))
	})


	// Objects gallery slider
	const objectGallerysSliders = [],
		objectGallerys = document.querySelectorAll('.object_gallery .swiper')

	objectGallerys.forEach((el, i) => {
		el.classList.add('object_gallery_s' + i)

		let options = {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			lazy: true,
			breakpoints: {
				0: {
					spaceBetween: 10,
					slidesPerView: 'auto'
				},
				768: {
					spaceBetween: 20,
					slidesPerView: 1
				},
				1024: {
					paceBetween: 20,
					slidesPerView: 2
				}
			}
		}

		objectGallerysSliders.push(new Swiper('.object_gallery_s' + i, options))
	})


	// Object page
	if ($('.object_info .images').length) {
		const objectThumbs = new Swiper('.object_info .thumbs .swiper', {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 20,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			lazy: true,
			breakpoints: {
				0: {
					slidesPerView: 3
				},
				1200: {
					slidesPerView: 5
				}
			}
		})

		new Swiper('.object_info .big .swiper', {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 0,
			slidesPerView: 1,
			lazy: true,
			thumbs: {
				swiper: objectThumbs
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			}
		})
	}


	// Object to favorite
	$('.object .favorite_btn, .object_info .favorite_btn').click(function (e) {
		e.preventDefault()

		$(this).toggleClass('active')
	})


	// Smooth scrolling to anchor
	const scrollBtns = document.querySelectorAll('.scroll_btn')

	if (scrollBtns) {
		scrollBtns.forEach(element => {
			element.addEventListener('click', e => {
				e.preventDefault()

				let anchor = element.getAttribute('data-anchor')

				document.getElementById(anchor).scrollIntoView({
					behavior: 'smooth',
					block: 'start'
				}, 1000)
			})
		})
	}


	// Accordion
	$('body').on('click', '.accordion .accordion_item .head', function(e) {
		e.preventDefault()

		let item = $(this).closest('.accordion_item'),
			accordion = $(this).closest('.accordion')

		if (item.hasClass('active')) {
			item.removeClass('active').find('.data').slideUp(300)
		} else {
			accordion.find('.accordion_item').removeClass('active')
			accordion.find('.data').slideUp(300)

			item.addClass('active').find('.data').slideDown(300)
		}
	})


	// Fancybox
	Fancybox.defaults.autoFocus = false
	Fancybox.defaults.trapFocus = false
	Fancybox.defaults.dragToClose = false
	Fancybox.defaults.placeFocusBack = false
	Fancybox.defaults.l10n = {
		CLOSE: 'Закрыть',
		NEXT: 'Следующий',
		PREV: 'Предыдущий',
		MODAL: 'Вы можете закрыть это модальное окно нажав клавишу ESC'
	}

	Fancybox.defaults.template = {
		closeButton: '<svg><use xlink:href="images/sprite.svg#ic_close"></use></svg>',
		spinner: '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="25 25 50 50" tabindex="-1"><circle cx="50" cy="50" r="20"/></svg>',
		main: null
	}


	// Modals
	$('.modal_btn').click(function(e) {
		e.preventDefault()

		Fancybox.close()

		Fancybox.show([{
			src: document.getElementById(e.target.getAttribute('data-modal')),
			type: 'inline'
		}])
	})


	// Zoom images
	Fancybox.bind('.fancy_img', {
		Image: {
			zoom: false
		},
		Thumbs: {
			autoStart: false
		}
	})


	// Mob. menu
	$('header .mob_menu_btn').click((e) => {
		e.preventDefault()

		$('header .mob_menu_btn').toggleClass('active')
		$('body').toggleClass('menu_open')
		$('.mob_menu').toggleClass('show')
		$('.header_wrap.absolute header').toggleClass('light')
	})


	// Phone input mask
	const phoneInputs = document.querySelectorAll('input[type=tel]')

	if (phoneInputs) {
		phoneInputs.forEach(el => {
			IMask(el, {
				mask: '+{7} (000) 000-00-00',
				lazy: true
			})
		})
	}


	// Submitting forms
	/*$('form').submit(function(e) {
		e.preventDefault()

		Fancybox.close()

		Fancybox.show([{
			src: '#success_modal',
			type: 'inline'
		}])
	})*/


	// Mob. contacts block
	$('.contacts_block .mob_spoler_btn').click((e) => {
		e.preventDefault()

		$(this).hide()
		$('.contacts_block .data').fadeIn(300)
	})

	$('.contacts_block .data .close_btn').click((e) => {
		e.preventDefault()

		$('.contacts_block .data').hide()
		$('.contacts_block .mob_spoler_btn').fadeIn(300)
	})


	// Mob. object location
	$('.object_location .mob_spoler_btn').click((e) => {
		e.preventDefault()

		$(this).hide()
		$('.object_location .data').fadeIn(300)
	})

	$('.object_location .data .close_btn').click((e) => {
		e.preventDefault()

		$('.object_location .data').hide()
		$('.object_location .mob_spoler_btn').fadeIn(300)
	})
})



window.addEventListener('load', function () {
	// Align elements in the grid
	document.querySelectorAll('.objects .row').forEach(el => {
		let styles = getComputedStyle(el)

		objectsHeight(el, el.querySelectorAll('.object').length)
	})
})



window.addEventListener('resize', function () {
	WH = window.innerHeight || document.clientHeight || document.getElementsByTagName('body')[0].clientHeight

	let windowW = window.outerWidth

	if (typeof WW !== 'undefined' && WW != windowW) {
		// Overwrite window width
		WW = window.innerWidth || document.clientWidth || document.getElementsByTagName('body')[0].clientWidth


		// Align elements in the grid
		document.querySelectorAll('.objects .row').forEach(el => {
			let styles = getComputedStyle(el)

			objectsHeight(el, el.querySelectorAll('.object').length)
		})


		// Mob. version
		if (!fakeResize) {
			fakeResize = true
			fakeResize2 = false

			document.getElementsByTagName('meta')['viewport'].content = 'width=device-width, initial-scale=1, maximum-scale=1'
		}

		if (!fakeResize2) {
			fakeResize2 = true

			if (windowW < 360) document.getElementsByTagName('meta')['viewport'].content = 'width=360, user-scalable=no'
		} else {
			fakeResize = false
			fakeResize2 = true
		}
	}
})



// Objects height
function objectsHeight(context, step) {
	let start = 0,
		finish = step,
		objects = [...context.querySelectorAll('.object')],
		objectsDesc = context.querySelectorAll('.info'),
		i = 0

	objectsDesc.forEach(el => el.style.height = 'auto')

	objects.forEach(el => {
		objects.slice(start, finish).forEach(el => el.setAttribute('nodeList', i))

		setHeight(context.querySelectorAll('[nodeList="' + i + '"] .info'))

		start = start + step
		finish = finish + step
		i++
	})
}