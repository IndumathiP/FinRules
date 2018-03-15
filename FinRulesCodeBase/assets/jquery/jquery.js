$(document).ready(function(){	
	$('ul.tabs li').click(function(){
    var tab_id;
    tab_id=$(this).attr('data-tab');
		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');
		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
  })
  $('span.condition-link').click(function(){
    $("#tab-4").removeClass('current');
    $("#tab-1").addClass('current');
    $("#navtab-4").removeClass('current');
    $("#navtab-1").addClass('current');
  })
  $('span.task-link').click(function(){
    $("#tab-4").removeClass('current');
    $("#tab-2").addClass('current');
    $("#navtab-4").removeClass('current');
    $("#navtab-2").addClass('current');
  })
  $('span.businessrule-link').click(function(){
    $("#tab-4").removeClass('current');
    $("#tab-3").addClass('current');
    $("#navtab-4").removeClass('current');
    $("#navtab-3").addClass('current');
  })
  if ($("#tab-4").hasClass("current")) {
    $("#next-link").hide();
  }
});