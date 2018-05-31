console.log(-1)
import Vue from 'vue'
console.log(0)
import root from './root.vue'
console.log(1)
import TrxWallet from 'trxwallet'
console.log(2)
const app = TrxWallet('#root')
console.log(3)


chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {

      
      app.$trxwallet.onSignatureRequest = ()=>{
        sendResponse('signature done !')
      }

      chrome.tabs.create({ url: 'pages/app.html' })
      app.$trxwallet.requestSignature(request.type,request.options)
  }
)

console.log(4)


