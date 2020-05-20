// Inside vue.config.js
// documentation on vue cli plugins : PWA, configuraiton
module.exports = {
  pwa: {
    name: "Yokai",
    themeColor: "#D90429",
    msTileColor: "#000000",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "black",
    orientation: "portrait",
    iconPaths: {
      favicon32: 'yokai-logo.png',
      favicon16: 'yokai-logo.png',
      appleTouchIcon: 'yokai-logo.png',
      maskIcon: 'yokai-logo.png',
      msTileImage: 'yokai-logo.png'
    },
    manifestOptions: {
      display: "fullscreen",
      icons: [
        {
          'src': 'img/icons/icon-192x192.png',
          'sizes': '192x192',
          'type': 'image/png',
        },
        {
          'src': 'img/icons/icon-512x512.png',
          'sizes': '512x512',
          'type': 'image/png',
        },
        {
          'src': 'img/icons/icon-16x16.png',
          'sizes': '16x16',
          'type': 'image/png',
        },
        {
          'src': 'img/icons/icon-32x32.png',
          'sizes': '32x32',
          'type': 'image/png',
        },
        {
          'src': 'img/icons/icon-72x72.png',
          'sizes': '72x72',
          'type': 'image/png',
        },
        {
          'src': 'img/icons/icon-96x96.png',
          'sizes': '96x96',
          'type': 'image/png',
        },
        {
          'src': 'img/icons/icon-128x128.png',
          'sizes': '128x128',
          'type': 'image/png',
        },
        {
          'src': 'img/icons/icon-144x144.png',
          'sizes': '144x144',
          'type': 'image/png',
        },
        {
          'src': 'img/icons/icon-152x152.png',
          'sizes': '152x152',
          'type': 'image/png',
        },
        {
          'src': 'img/icons/icon-384x384.png',
          'sizes': '384x384',
          'type': 'image/png',
        },
      ],
    },
    // configure the workbox plugin
    workboxPluginMode: "InjectManifest",
    workboxOptions: {
      // swSrc is required in InjectManifest mode.
      swSrc: "src/service-worker.js"
    }
  }
};
