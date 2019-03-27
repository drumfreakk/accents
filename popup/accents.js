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

document.querySelector("#seag").addEventListener("click", function(){copy("#seag")});
document.querySelector("#secr").addEventListener("click", function(){copy("#secr")});
document.querySelector("#semc").addEventListener("click", function(){copy("#semc")});
document.querySelector("#segr").addEventListener("click", function(){copy("#segr")});
document.querySelector("#secc").addEventListener("click", function(){copy("#secc")});
document.querySelector("#seum").addEventListener("click", function(){copy("#seum")});

document.querySelector("#ceag").addEventListener("click", function(){copy("#ceag")});
document.querySelector("#cecr").addEventListener("click", function(){copy("#cecr")});
document.querySelector("#cemc").addEventListener("click", function(){copy("#cemc")});
document.querySelector("#cegr").addEventListener("click", function(){copy("#cegr")});
document.querySelector("#cecc").addEventListener("click", function(){copy("#cecc")});
document.querySelector("#ceum").addEventListener("click", function(){copy("#ceum")});

document.querySelector("#saag").addEventListener("click", function(){copy("#saag")});
document.querySelector("#sacr").addEventListener("click", function(){copy("#sacr")});
document.querySelector("#samc").addEventListener("click", function(){copy("#samc")});
document.querySelector("#sagr").addEventListener("click", function(){copy("#sagr")});
document.querySelector("#sacc").addEventListener("click", function(){copy("#sacc")});
document.querySelector("#saum").addEventListener("click", function(){copy("#saum")});

document.querySelector("#caag").addEventListener("click", function(){copy("#caag")});
document.querySelector("#cacr").addEventListener("click", function(){copy("#cacr")});
document.querySelector("#camc").addEventListener("click", function(){copy("#camc")});
document.querySelector("#cagr").addEventListener("click", function(){copy("#cagr")});
document.querySelector("#cacc").addEventListener("click", function(){copy("#cacc")});
document.querySelector("#caum").addEventListener("click", function(){copy("#caum")});

