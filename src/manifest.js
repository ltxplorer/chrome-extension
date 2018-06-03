
module.exports = {
  name: 'TRXWallet - Tron wallet',
  version: '0.0.1',
  description: 'Tron TRXWallet is a secure offline wallet that keeps your private key safe.You can send TRX, vote for TRON SR election and much more',
  author: 'tronwallet',
  manifest_version: 2,
  icons: { '16': 'icons/16.png','48':'icons/48.png', '128': 'icons/128.png' },
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
    default_title: 'Tron wallet overview',
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
