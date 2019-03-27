function copySelection() {
    var selectedText = window.getSelection().toString().trim();

    if (selectedText) {
        document.execCommand("Copy");
    }
}


