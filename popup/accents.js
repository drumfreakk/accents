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
document.querySelector("#segr").addEventListener("click", function(){copy("#segr")});
document.querySelector("#secc").addEventListener("click", function(){copy("#secc")});
document.querySelector("#seum").addEventListener("click", function(){copy("#seum")});

document.querySelector("#ceag").addEventListener("click", function(){copy("#ceag")});
document.querySelector("#cecr").addEventListener("click", function(){copy("#cecr")});
document.querySelector("#cegr").addEventListener("click", function(){copy("#cegr")});
document.querySelector("#cecc").addEventListener("click", function(){copy("#cecc")});
document.querySelector("#ceum").addEventListener("click", function(){copy("#ceum")});

document.querySelector("#saag").addEventListener("click", function(){copy("#saag")});
document.querySelector("#sacr").addEventListener("click", function(){copy("#sacr")});
document.querySelector("#sagr").addEventListener("click", function(){copy("#sagr")});
document.querySelector("#sacc").addEventListener("click", function(){copy("#sacc")});
document.querySelector("#saum").addEventListener("click", function(){copy("#saum")});

document.querySelector("#caag").addEventListener("click", function(){copy("#caag")});
document.querySelector("#cacr").addEventListener("click", function(){copy("#cacr")});
document.querySelector("#cagr").addEventListener("click", function(){copy("#cagr")});
document.querySelector("#cacc").addEventListener("click", function(){copy("#cacc")});
document.querySelector("#caum").addEventListener("click", function(){copy("#caum")});

document.querySelector("#siag").addEventListener("click", function(){copy("#siag")});
document.querySelector("#sigr").addEventListener("click", function(){copy("#sigr")});

document.querySelector("#ciag").addEventListener("click", function(){copy("#ciag")});
document.querySelector("#cigr").addEventListener("click", function(){copy("#cigr")});

document.querySelector("#suum").addEventListener("click", function(){copy("#suum")});
document.querySelector("#cuum").addEventListener("click", function(){copy("#cuum")});

document.querySelector("#soum").addEventListener("click", function(){copy("#soum")});
document.querySelector("#coum").addEventListener("click", function(){copy("#coum")});

document.querySelector("#sccd").addEventListener("click", function(){copy("#sccd")});
document.querySelector("#cccd").addEventListener("click", function(){copy("#cccd")});

document.querySelector("#euro").addEventListener("click", function(){copy("#euro")});
document.querySelector("#degr").addEventListener("click", function(){copy("#degr")});
document.querySelector("#eszt").addEventListener("click", function(){copy("#eszt")});

document.querySelector("#delt").addEventListener("click", function(){copy("#delt")});
document.querySelector("#omeg").addEventListener("click", function(){copy("#omeg")});
document.querySelector("#micr").addEventListener("click", function(){copy("#micr")});
document.querySelector("#shro").addEventListener("click", function(){copy("#shro")});
document.querySelector("#piii").addEventListener("click", function(){copy("#piii")});
