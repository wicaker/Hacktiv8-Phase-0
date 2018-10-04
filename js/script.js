//event saat link di klik
$('.page-scroll').on('click',function(e){

	var tujuan = $(this).attr("href");
	var elemenTujuan = $(tujuan);
	$('html,body').animate({
		scrollTop: elemenTujuan.offset().top-50 
	},1000, 'swing');

	e.preventDefault();

});



