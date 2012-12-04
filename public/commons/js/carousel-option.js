$(function() {

$("#topslide").carouFredSel({
	circular:true,
	infinite: false,
	direction: "left",
	scroll: {
		items: 1,
		duration: 1000,
		pauseOnHover: true,
		fx:"crossfade" //"none", "scroll", "directscroll", "fade", "crossfade", "cover" or "uncover".
	},
	auto: {
	pauseDuration:6000
	}
	//,
	//prev: {
	//	button: "#prev",
	//	key: "left"
	//},
	//next: {
	//	button: "#next",
	//	key: "right"
	//},
	//pagination: {
	//	container: "#pager",
	//	items:1
	//}
});

			});
