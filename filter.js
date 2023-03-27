$(function () {
	var newSelection = "";
	$("#flavor-nav a").click(function () {
		$("#all-flavors").show();
		$("#flavor-nav a").removeClass("current");
		$(this).addClass("current");

		newSelection = $(this).attr("rel");

		$(".flavor").not("." + newSelection).hide();
		$("." + newSelection).show();
		$("#all-flavors").fadeTo();
	});
});