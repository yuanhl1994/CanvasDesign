// $(function(){
	// $("#view-btn").click(function(){
	// fanye();
	// })
// })
$(document).ready(function(){
	g = 0;
	$("#view-btn").click(function(){
		$(".yemian").css('display','none');
		fanye();
		g++;
	})
})

function fanye(){
	var $div = $("<div class='magazine-viewport'></div>");
    $div[0].id = 'yulan';
    $div.appendTo("#fanye");
    var $span = $("<div id='fanhui' ></div>");
    $span[0].innerHTML = '返回';
    $("#yulan").append($span);
	var $container = $("<div class='container' id='sa'></div>");
    $("#yulan").append($container);
	var $magazine = $("<div class='magazine'></div>");
    $("#sa").append($magazine);
	var $next_button = $("<div ignore='1' class='next-button'></div>");
	var $previous_button = $("<div ignore='1' class='previous-button'></div>");
	$("#yulan").append($next_button);
    $("#yulan").append($previous_button);
		var pages=canvas_name_array.length;			//添加问题
		$(function(){
		var next_button = $(".next-button");              //初始化左右箭头
		var previous_button = $(".previous-button");
		setArrows();
		});
function loadApp() {
			console.log("111");
			var flipbook = $('.magazine');
			// Check if the CSS was already loaded	
			// if (flipbook.width()==0 || flipbook.height()==0) {
				// setTimeout(loadApp, 10);
				// return;
			// }
		
			// 创建flipbook
			flipbook.turn({			
					width: 1200,
					height: 781,
					duration: 1000,   //翻页速度，值越小越快
					// Hardware acceleration
					acceleration: !isChrome(),
					// Enables gradients
					gradients: true,			
					// Auto center this flipbook
					autoCenter: true,
					// Elevation from the edge of the flipbook when turning a page
					elevation: 50,
					// The number of pages
					pages: pages,
					// Events
					when: {
						turning: function(event, page, view) {					
							var book = $(this),
							currentPage = book.turn('page'),
							pages = book.turn('pages');			
							// Update the current URI
							Hash.go('page/' + page).update();
							// Show and hide navigation buttons
							disableControls(page); 				
						},
						turned: function(event, page, view) {
							disableControls(page);
							$(this).turn('center');
							if (page==1) { 
								$(this).turn('peel', 'br');
							}
						},
						missing: function (event, pages) {
							// Add pages that aren't in the magazine
							for (var i = 0; i < pages.length; i++)
								addPage(pages[i], $(this));
						}
					}
			});

			// Zoom.js
			$('.magazine-viewport').zoom({
				flipbook: $('.magazine'),
				max: function() { 			
					return largeMagazineWidth()/$('.magazine').width();
				}, 
				when: {
					swipeLeft: function() {
						$(this).zoom('flipbook').turn('next');
					},
					swipeRight: function() {				
						$(this).zoom('flipbook').turn('previous');
					},

					resize: function(event, scale, page, pageElement) {
						if (scale==1)
							loadSmallPage(page, pageElement);
						else
							loadLargePage(page, pageElement);
					},
					zoomIn: function () {
						$('.made').hide();
						$('.magazine').removeClass('animated').addClass('zoom-in');
						$('.zoom-icon').removeClass('zoom-icon-in').addClass('zoom-icon-out');				
						if (!window.escTip && !$.isTouch) {
							escTip = true;
							$('<div />', {'class': 'exit-message'}).
								html('<div>Press ESC to exit</div>').
									appendTo($('body')).
									delay(2000).
									animate({opacity:0}, 500, function() {
										$(this).remove();
									});
						}
					},
					zoomOut: function () {
						$('.exit-message').hide();
						$('.thumbnails').fadeIn();
						$('.made').fadeIn();
						$('.zoom-icon').removeClass('zoom-icon-out').addClass('zoom-icon-in');
						setTimeout(function(){
							$('.magazine').addClass('animated').removeClass('zoom-in');
							resizeViewport();
						}, 0);
					}
				}
			});

			// // Zoom event
			// if ($.isTouch)
				// $('.magazine-viewport').bind('zoom.doubleTap', zoomTo);
			// else
				// $('.magazine-viewport').bind('zoom.tap', zoomTo);
			// // Using arrow keys to turn the page
			$(document).keydown(function(e){
				var previous = 37, next = 39, esc = 27;
				switch (e.keyCode) {
					case previous:
						// left arrow
						$('.magazine').turn('previous');
						e.preventDefault();
					break;
					case next:
						//right arrow
						$('.magazine').turn('next');
						e.preventDefault();
					break;
					case esc:				
						$('.magazine-viewport').zoom('zoomOut');	
						e.preventDefault();
					break;
				}
			});

			// URIs - Format #/page/1 
			Hash.on('^page\/([0-9]*)$', {
				yep: function(path, parts) {
					var page = parts[1];
					if (page!==undefined) {
						if ($('.magazine').turn('is'))
							$('.magazine').turn('page', page);
					}
				},
				nop: function(path) {
					if ($('.magazine').turn('is'))
						$('.magazine').turn('page', 1);
				}
			});
			$(window).resize(function() {
				resizeViewport();
			}).bind('orientationchange', function() {
				resizeViewport();
			});
			
			// Events for thumbnails
			$('.thumbnails').click(function(event) {		
				var page;
				if (event.target && (page=/page-([0-9]+)/.exec($(event.target).attr('class'))) ) {		
					$('.magazine').turn('page', page[1]);
				}
			});
			$('.thumbnails li').
				bind($.mouseEvents.over, function() {			
					$(this).addClass('thumb-hover');

				}).bind($.mouseEvents.out, function() {
					
					$(this).removeClass('thumb-hover');

				});

			if ($.isTouch) {	
				$('.thumbnails').
					addClass('thumbanils-touch').
					bind($.mouseEvents.move, function(event) {
						event.preventDefault();
					});
			} else {
				$('.thumbnails ul').mouseover(function() {
					$('.thumbnails').addClass('thumbnails-hover');
				}).mousedown(function() {
					return false;
				}).mouseout(function() {
					$('.thumbnails').removeClass('thumbnails-hover');
				});
			}

			// Regions
			if ($.isTouch) {
				$('.magazine').bind('touchstart', regionClick);
			} else {
				$('.magazine').click(regionClick);
			}

			// Events for the next button
			$('.next-button').bind($.mouseEvents.over, function() {		
				$(this).addClass('next-button-hover');
			}).bind($.mouseEvents.out, function() {		
				$(this).removeClass('next-button-hover');
			}).bind($.mouseEvents.down, function() {		
				$(this).addClass('next-button-down');
			}).bind($.mouseEvents.up, function() {		
				$(this).removeClass('next-button-down');
			}).click(function() {
				$('.magazine').turn('next');
				setTimeout(function(){
				setArrows() ;
				},300);
			});

			// Events for the next button	
			$('.previous-button').bind($.mouseEvents.over, function() {		
				$(this).addClass('previous-button-hover');
			}).bind($.mouseEvents.out, function() {		
				$(this).removeClass('previous-button-hover');
			}).bind($.mouseEvents.down, function() {		
				$(this).addClass('previous-button-down');
			}).bind($.mouseEvents.up, function() {		
				$(this).removeClass('previous-button-down');
			}).click(function() {		
				$('.magazine').turn('previous');
				setTimeout(function(){
				setArrows() ;
				},300);

			});
			resizeViewport();
			$('.magazine').addClass('animated');
		}
		// 加载HTML4版本如果没有CSS的变换
		 console.log(g);
		 if(g > 0){
			loadApp();
		}
			yepnope({
				test : Modernizr.csstransforms,
				yep: ['../TurnBook/js/turn.js'],
				nope: ['../TurnBook/js/turn.html4.min.js'],
				both: ['../TurnBook/js/zoom.min.js', '../TurnBook/js/magazine.js', '../TurnBook/css/magazine.css'],
				complete: loadApp
			});
			//loadApp();
		
		// if(g > 0){
			// loadApp();
		// }
		console.log(Modernizr.csstransforms);
		//添加页数
		//加载页面内容，修改页面
		// for (var i = 1; i < pages+1; i++){
			// var $showcanvas=new fabric.Canvas(""+i+"");
			// var json = JSON.stringify(canvas_array[i-1]);
			// $showcanvas.loadFromJSON(json, $showcanvas.renderAll.bind($showcanvas), function(o, object) {});
		// }
	
}

		$(document).on("click","#fanhui",function(){
			$(".yemian").css('display','block');
			$(".magazine-viewport").remove();
		})
		
		