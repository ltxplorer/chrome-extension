import Vue from 'vue'
import root from './root.vue'
import TrxWallet from 'trxwallet'
const app = TrxWallet('#root')

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


