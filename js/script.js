function ipLookUp () {
$.ajax('http://ip-api.com/json')
.then(
    function success(response) {
        //console.log('User\'s Location Data is ', response);
        console.log(response.country);
    },

    function fail(data, status) {
        console.log('Request failed.  Returned status of',
                    status);
    }
);
}
ipLookUp()





//lang
function setLang(e) {
    var title = Object.keys(e);
    for (var i = 0; i < title.length; i++) {
        $('[text=' + title[i] + ']').html(e[title[i]]);
    };
}

$('.lang').click(function(){
    $(this).toggleClass('zh');
	if ( $('.lang').hasClass('zh') ) {
		setLang(i18n.zh);
	} else {
		setLang(i18n.en);
	}
})

setLang(i18n.zh);


$('.menu-close').click(function(){
    $('header').toggleClass('menu-open');
})

