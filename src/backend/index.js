
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
  
        console.log('request received from backed !')        
        // app.$trxwallet.onSignatureRequest = ()=>{
        //   sendResponse('signature done !')
        // }
  
        // chrome.tabs.create({ url: 'pages/app.html' })
        // app.$trxwallet.requestSignature(request.type,request.options)
    }
  )
  
  