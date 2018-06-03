import Vue from 'vue'
import root from './root.vue'
import TrxWallet from 'trxwallet'
const app = TrxWallet('#root')
let tabId = null

chrome.tabs.query({active: true, currentWindow: true}, function(tabs){

  
});

app.$trxwallet.onSignatureSuccess((res)=>{

  chrome.tabs.sendMessage(tabId, res, function(response) {});  
  console.log('signature success')
  


});

app.$trxwallet.onSignatureFailure((res)=>{
  console.log('signature failure')
  
    
  
})

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {

      


      app.$trxwallet.requestSignature(request.type,request.options)
      chrome.tabs.create({ url: 'pages/app.html#/authorization/ ' })

  }
)


