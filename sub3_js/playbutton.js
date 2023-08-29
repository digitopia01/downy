
$(function(){
	$('.vid_but').click(function(){
		var video = $('#ad');
		video.attr('src', '../sub3_img/광고영상.mp4');
		video.get(0).play();
	});
});