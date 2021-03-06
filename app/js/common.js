'use strict';
// $(document).ready(function() {

//  //Таймер обратного отсчета
//  //Документация: http://keith-wood.name/countdown.html
//  //<div class="countdown" date-time="2015-01-07"></div>
//  var austDay = new Date($(".countdown").attr("date-time"));
//  $(".countdown").countdown({until: austDay, format: 'yowdHMS'});//таймер end

//  //Попап менеджер FancyBox
//  //Документация: http://fancybox.net/howto
//  //<a class="fancybox"><img src="image.jpg" /></a>
//  //<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
//  $(".fancybox").fancybox();//fancybox end

//  //Навигация по Landing Page
//  //$(".top_mnu") - это верхняя панель со ссылками.
//  //Ссылки вида <a href="#contacts">Контакты</a>
//  $(".top_mnu").navigation();//навигация end

//  //Добавляет классы дочерним блокам .block для анимации
//  //Документация: http://imakewebthings.com/jquery-waypoints/
//  $(".block").waypoint(function(direction) {
// 	 if (direction === "down") {
// 		 $(".class").addClass("active");
// 	 } else if (direction === "up") {
// 		 $(".class").removeClass("deactive");
// 	 };
//  }, {offset: 100});//end

//  //Плавный скролл до блока .div по клику на .scroll
//  //Документация: https://github.com/flesler/jquery.scrollTo
//  $("a.scroll").click(function() {
// 	 $.scrollTo($(".div"), 800, {
// 		 offset: -90
// 	 });
//  });//плавный скролл end

//  //Каруселька
//  //Документация: http://owlgraphic.com/owlcarousel/
//  var owl = $(".carousel");
//  owl.owlCarousel({
// 	 items : 1,
// 	 autoPlay: 5000,
// 	 pagination: false,
// 	 transitionStyle: 'fade',
// 	 itemsDesktop: [1199,1],
// 	 itemsDesktopSmall: [979,1],
// 	 itemsTablet: [768,0],
// 	 itemsMobile: [479,0]
//  });
//  owl.on("mousewheel", ".owl-wrapper", function (e) {
// 	 if (e.deltaY > 0) {
// 		 owl.trigger("owl.prev");
// 	 } else {
// 		 owl.trigger("owl.next");
// 	 }
// 	 e.preventDefault();
//  });
//  $(".next_button").click(function(){
// 	 owl.trigger("owl.next");
//  });
//  $(".prev_button").click(function(){
// 	 owl.trigger("owl.prev");
//  });//карусель end

//  //Кнопка "Наверх"
//  //Документация:
//  //http://api.jquery.com/scrolltop/
//  //http://api.jquery.com/animate/
//  $("#top").click(function () {
// 	 $("body, html").animate({
// 		 scrollTop: 0
// 	 }, 800);
// 	 return false;
//  });//кнопка "наверх" end
	
//  //Аякс отправка форм
//  //Документация: http://api.jquery.com/jquery.ajax/
//  $("form").submit(function() {
// 	 $.ajax({
// 		 type: "GET",
// 		 url: "mail.php",
// 		 data: $("form").serialize()
// 	 }).done(function() {
// 		 alert("Спасибо за заявку!");
// 		 setTimeout(function() {
// 			 $.fancybox.close();
// 		 }, 1000);
// 	 });
// 	 return false;
//  });//ajax формы end

// 	//AJAX вкладки (анимацию делать на keyframes)
// 	$('.link').click(function() {

// 		var info = $(this).attr('href') + ' #content';//берет href ссылки и задает тот блок, который будет обновляться с помощью ajax при переходе по ссылке
// 		$('#content').hide(0, loadContent());//скрываем содержимое блока #content той страницы, на которой находимся//задать анимацию для содержимого
// 		$('#loader').fadeIn('slow');//анимация лоадера

// 		function loadContent() {//основная функция для загрузки контента
// 			$('#content').load(info, '', function() {//блок, в который мы хотим загрузить новый контент//info подгружает именно тот контент, который нам нужен//'' - различные переменные, дата, опускаем его
// 				$('#content').show(0, hideLoader());//показываем наш блок с контентом//скрываем лоадер//задать анимацию для содержимого
// 			});
// 		}

// 		function hideLoader() {//функция для скрытия лоадера
// 			$('#loader').fadeOut('normal');
// 		}

// 		return false;//чтобы не происходило перехода по ссылке, а только происходила подгрузка контента

// 	});//ajax вкладки end

// 	// Аккордеон
// 	$(document).ready(function() {
		
// 	 $('.service2>.wrapper>.block-2>article').not(':first-of-type').hide();
	 
		
// 		$('.service2>.wrapper>.block-2>.headline').click(function() {
			
// 			var findArticle = $(this).next();
// 			var findWrapper = $(this).closest('.block-2');
			
// 			if (findArticle.is(':visible')) {
// 				findArticle.slideUp(50);
// 			}
// 			else {
// 				findWrapper.find('>article').slideUp(50);
// 				findArticle.slideDown(50);
// 			}
// 		});

// 	});//аккордеон end

// });//doc ready end

$(document).ready(function() {

	//prevent default
	function prevdef() {
		$('.prevdef').click(function(event) {
			event.preventDefault();
		});
	}// prevdef();
	prevdef();

	;(function tabs() {
		var aboutTabs = document.querySelectorAll('.about-section1__tab');
		var aboutBlocks2 = document.querySelectorAll('.about-section1__block2');

		for (var i = 0; i < aboutTabs.length; i++) {
			aboutTabs[i].onclick = function() {
				for (var i = 0; i < aboutTabs.length; i++) {
					aboutTabs[i].classList.remove('active');
					aboutBlocks2[i].classList.remove('active');
				}
				this.classList.add('active');
				for (var i = 0; i < aboutTabs.length; i++) {
					if (aboutTabs[i].classList.contains('active')) {
						aboutBlocks2[i].classList.add('active');
					}
				}
			}
		}
	})();

	;(function() {
		var modalOverlay = document.querySelector('.modal__overlay');
		var modalError = document.querySelector('.modal__error');
		var modalSuccess = document.querySelector('.modal__success');
		var modalContainers = document.querySelectorAll('.modal__container');
		var contactSubmitButton = document.querySelector('.contact__submit-button');
		var contactInputs = document.querySelectorAll('.contact__input');
		var contactNameInput = document.querySelector('.contact__name-input');
		var contactEmailInput = document.querySelector('.contact__email-input');
		var contactSubjectInput = document.querySelector('.contact__subject-input');
		var contactMessageInput = document.querySelector('.contact__message-input');

		contactSubmitButton.addEventListener('click', validationCheck);
		modalOverlay.addEventListener('click', modalsHide);
		for (var i = 0; i < modalContainers.length; i++) {
			modalContainers[i].addEventListener('click', modalsHide);
		}

		function validationCheck() {
			for (var i = 0; i < contactInputs.length; i++) {
				if (!contactInputs[i].value) {
					modalErrorShow();
				}

				if (contactNameInput.value && contactEmailInput.value && contactSubjectInput.value && contactMessageInput.value) {
					modalSuccessShow();
				}
			}
		}

		function modalErrorShow() {
			modalOverlay.style.opacity = '1';
			modalOverlay.style.zIndex = '999';
			modalError.style.opacity = '1';
			modalError.style.zIndex = '999';
		}

		function modalSuccessShow() {
			modalOverlay.style.opacity = '1';
			modalOverlay.style.zIndex = '999';
			modalSuccess.style.opacity = '1';
			modalSuccess.style.zIndex = '999';
			for (var i = 0; i < contactInputs.length; i++) {
				contactInputs[i].value = '';
			}
		}

		function modalsHide() {
			modalOverlay.style.opacity = '';
			modalOverlay.style.zIndex = '';
			modalSuccess.style.opacity = '';
			modalSuccess.style.zIndex = '';
			modalError.style.opacity = '';
			modalError.style.zIndex = '';
		}
	})();

	$('.top-panel__logo-container, .top-panel__menu-link').mPageScroll2id({
		offset: 50,
		scrollSpeed: 200
	});

});//doc.ready end

var cLog = function(n) {
	return console.log(n);
};//console.log