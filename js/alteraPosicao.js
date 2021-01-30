function alteraPosicao($ele1, $ele2) {
	$ele1.before($ele2);
}

var $ele1 = $('.sobre-paragrafo-02');
var $ele2 = $('.nivia');

alteraPosicao($ele1, $ele2);