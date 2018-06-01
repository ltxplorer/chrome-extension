# chrome-extension

Tron wallet chrome extension that uses https://github.com/tronwallet/trxwallet application. 

The chrome extension uses trxwallet extension mechanism in order to provide a simple but effective way to sign transactions offline
while never submitting/revealing the private key to third party websites/applications.

## Chrome extension features

For currently implemeted wallet features see : https://github.com/tronwallet/trxwallet

In addition to TRXWallet features that can be used in the extension, the chrome-extension can be easily invoked by third party website or applications in order to request the authorization for a transaction

For exemple: if a user has the extension installed the code will automatically open the extension on the "Authentication requested"
screen and will ask the logged used for his credentials (wallet password, not private key)

``` javascript
 # A third party website or application can invoke the plugin with the following code
 # In this example we send a signature request in order to send 200 TRX to XXX
 var data = { type: "TRXWALLET_SIGNATURE_REQUEST", transaction: {type:'sendTRX',options:{to:'XXX',amount:200}} };
 window.postMessage(data, "*");
```
If the user accepts and provide the correct password, the transaction will be broadcasted to TRON network


## Integration

[TRXPlorer.io](https://www.trxplorer.io) (tron blockchain explorer) will be the first third party app fully integrated with this chrome-extension. 

Users will be able to vote, send trx, tokens, unfreeze etc directly from trxplorer.io without any wallet directly integrated into the website.
