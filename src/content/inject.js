window.addEventListener("message", function(event) {
    // We only accept messages from ourselves
    if (event.source != window)
        return;
  
    if (event.data.type && (event.data.type == "TRXWALLET_SIGNATURE_REQUEST")) {

      chrome.runtime.sendMessage(event.data.transaction, function(response) {
        console.log("Response: ", response);
      });

       
    }
  });