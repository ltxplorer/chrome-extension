
module.exports = {
  name: 'Tron Wallet',
  version: '0.0.1',
  description: 'Tron TRXWallet is a secure offline wallet for chrome that prevent you from revealing your private key. With Tron wallet, you can send TRX or any TRON based token, vote for TRON SR election and much more !',
  author: 'tronwallet',
  manifest_version: 2,
  icons: { '16': 'icons/16.png', '128': 'icons/128.png' },
  permissions: [
    '<all_urls>',
    '*://*/*',
    'activeTab',
    'tabs',
    'cookies',
    'background',
    'contextMenus',
    'unlimitedStorage',
    'storage',
    'notifications'
  ],
  browser_action: {
    default_title: 'title',
    default_popup: 'pages/popup.html'
  },
  background: {
    persistent: true,
    page: 'pages/app.html'
  },
  content_scripts: [{
    js: [ 'js/inject.js' ],
    run_at: 'document_end',
    matches: ['<all_urls>'],
    all_frames: true
  }],
  content_security_policy: "script-src 'self' 'unsafe-eval'; object-src 'self'",
  web_accessible_resources: [ 'panel.html', 'js/content.js' ]
}
