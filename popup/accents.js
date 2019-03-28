function selectText(element) {
	if (/INPUT|TEXTAREA/i.test(element.tagName)) {
		element.focus();
		if (element.setSelectionRange) {
			element.setSelectionRange(0, element.value.length);
		} else {
			element.select();
		}
		return;
	}

	if (window.getSelection) { // All browsers, except IE <=8
		window.getSelection().selectAllChildren(element);
	} else if (document.body.createTextRange) { // IE <=8
		var range = document.body.createTextRange();
		range.moveToElementText(element);
		range.select();
	}
}

function copy(id) {
	selectText(document.querySelector(id));
	document.execCommand("copy");
}

function makeStr(){
	var main = "";
	for(var i = 0; i < document.querySelectorAll('td').length; i++){
		var id = document.getElementsByTagName('td')[i].id;
		var hs = "#".concat(id);
		var yo = hs.concat(" ");
		main = main.concat(yo);
	}
	return main;
}

function addListenerMulti() {
  makeStr().split(' ').forEach(e => document.querySelector(e).addEventListener("click", function(){copy(e)}, false));
}

addListenerMulti();

