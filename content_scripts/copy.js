(function() {
  /**
   * Check and set a global guard variable.
   * If this content script is injected into the same page again,
   * it will do nothing next time.
   */
  if (window.hasRun) {
    return;
  }
  window.hasRun = true;

  /**
   * Given a URL to a beast image, remove all existing beasts, then
   * create and style an IMG node pointing to
   * that image, then insert the node into the document.
   */
  function copyAccent(accent) {
	console.log("hi");

  	navigator.clipboard.writeText(accent).then(function() {
  	  /* clipboard successfully set */
  	}, function() {
  	  console.error("Could not accent");
  	});

console.log("second");

navigator.permissions.query({name: "clipboard-write"}).then(result => {
  if (result.state == "granted" || result.state == "prompt") {
    navigator.clipboard.writeText(accent).then(function() {
  	  /* clipboard successfully set */
  	}, function() {
  	  console.error("Could not accent");
  	});
  }
	console.log("last");

});

  }

  /**
   * Listen for messages from the background script.
   * Call "beastify()" or "reset()".
  */
  browser.runtime.onMessage.addListener((message) => {
    if (message.command === "copy") {
      copyAccent(message.accentURL);
    }
  });

})();
