'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "23d23b569f9c3116471a1e61b90c8141",
"assets/AssetManifest.bin.json": "0c4b1af183e3a957e0abe3b4dd42c592",
"assets/AssetManifest.json": "b9f211aa33675fea4af54a2e5b215c27",
"assets/assets/Adjustable%2520Dumbbells.jpg": "b55fe65f7b152e67ccb2c1f09e574c8a",
"assets/assets/Almonds.jpg": "29995deeeffad28e6ea84d1794d701ac",
"assets/assets/Bed%2520Sheet%2520Set.jpg": "3e713dd388d1a686af543858ab8cb08e",
"assets/assets/blutooth_spraker.jpg": "69c1bf381ab63740423ae1a9aa7bc57b",
"assets/assets/Camping%2520Tent.jpg": "16506b02ea2a05dcec6064768c107f5d",
"assets/assets/Coffee_Maker.jpg": "16133be74e4706c07c0495c7a091238d",
"assets/assets/Dark%2520Chocolate.jpg": "a1b2ebca96f506d01f3697d4dd290c72",
"assets/assets/Designer%2520Handbag.jpg": "e89926d70d1e306f76fbd855d9e0f2b6",
"assets/assets/Dining%2520Table%2520Set.jpg": "216bbf2edecc747f657923f5e3aa587b",
"assets/assets/Drone%2520with%2520Camera.jpg": "29c1eb07f63cd0c2bd8b607839fee643",
"assets/assets/gaming_laptop.jpg": "4357c39836a3fdc8c03a2df8b642a483",
"assets/assets/headphones.jpg": "c278938a58516af8f9f902d68459abc8",
"assets/assets/Jigsaw%2520Puzzle.jpg": "336a1659f29cfacefeea25ed7ef9ec2b",
"assets/assets/Leather%2520Jacket.jpg": "d34e96cdab05192429ee06b880f98868",
"assets/assets/logo.jpg": "c6a4136ba7d8417e7a82e2d3e681b816",
"assets/assets/mainlogo.png": "239aa90b435eaa52f5116cdcb2124c46",
"assets/assets/Mountain%2520Bike%2520Helmet.jpg": "2a593aa5601211ff1fa99a4bc024a6da",
"assets/assets/Olive%2520Oil.jpg": "34329d0878c7b0883ab5d1610ea004d6",
"assets/assets/Organic%2520Green%2520Tea.jpg": "bc96cab6a7382a8f6c21509cc5dee25f",
"assets/assets/Organic%2520Honey.jpg": "60eb5de1e39938117df065ebb5f6bf28",
"assets/assets/Robot_Vacuum.jpg": "b9845464291206acd37999d665dac833",
"assets/assets/Running%2520Shoes.jpg": "354f97cade1c994b10aba7a5aea00a26",
"assets/assets/Smart%2520Watch%2520Band.jpg": "7188427048fdd2f2ddfbfd8f8f724768",
"assets/assets/smart%2520watch%2520m.png": "3962baaa3a7fbbda24092a93b5f718ef",
"assets/assets/Sunglasses.jpg": "866d33a4075ee81014623edfde92813c",
"assets/assets/Trekking%2520Backpack.jpg": "c64d1f3c7255fd979b3850222e71b7e2",
"assets/assets/tv.jpg": "fe67be66653fa6b444ee1fa9f5c5b3d3",
"assets/assets/Yoga%2520Mat.jpg": "d3cfcb72174100c8d457b96171a857cf",
"assets/assets%255CAdjustable%2520Dumbbells.jpg": "b55fe65f7b152e67ccb2c1f09e574c8a",
"assets/assets%255CAlmonds.jpg": "29995deeeffad28e6ea84d1794d701ac",
"assets/assets%255CBed%2520Sheet%2520Set.jpg": "3e713dd388d1a686af543858ab8cb08e",
"assets/assets%255Cblutooth_spraker.jpg": "69c1bf381ab63740423ae1a9aa7bc57b",
"assets/assets%255CCamping%2520Tent.jpg": "16506b02ea2a05dcec6064768c107f5d",
"assets/assets%255CCoffee_Maker.jpg": "16133be74e4706c07c0495c7a091238d",
"assets/assets%255CDark%2520Chocolate.jpg": "a1b2ebca96f506d01f3697d4dd290c72",
"assets/assets%255CDesigner%2520Handbag.jpg": "e89926d70d1e306f76fbd855d9e0f2b6",
"assets/assets%255CDining%2520Table%2520Set.jpg": "216bbf2edecc747f657923f5e3aa587b",
"assets/assets%255CDrone%2520with%2520Camera.jpg": "29c1eb07f63cd0c2bd8b607839fee643",
"assets/assets%255Cgaming_laptop.jpg": "4357c39836a3fdc8c03a2df8b642a483",
"assets/assets%255Cheadphones.jpg": "c278938a58516af8f9f902d68459abc8",
"assets/assets%255CJigsaw%2520Puzzle.jpg": "336a1659f29cfacefeea25ed7ef9ec2b",
"assets/assets%255CLeather%2520Jacket.jpg": "d34e96cdab05192429ee06b880f98868",
"assets/assets%255Clogo.jpg": "c6a4136ba7d8417e7a82e2d3e681b816",
"assets/assets%255Cmainlogo.png": "239aa90b435eaa52f5116cdcb2124c46",
"assets/assets%255CMountain%2520Bike%2520Helmet.jpg": "2a593aa5601211ff1fa99a4bc024a6da",
"assets/assets%255COlive%2520Oil.jpg": "34329d0878c7b0883ab5d1610ea004d6",
"assets/assets%255COrganic%2520Green%2520Tea.jpg": "bc96cab6a7382a8f6c21509cc5dee25f",
"assets/assets%255COrganic%2520Honey.jpg": "60eb5de1e39938117df065ebb5f6bf28",
"assets/assets%255CRobot_Vacuum.jpg": "b9845464291206acd37999d665dac833",
"assets/assets%255CRunning%2520Shoes.jpg": "354f97cade1c994b10aba7a5aea00a26",
"assets/assets%255CSmart%2520Watch%2520Band.jpg": "7188427048fdd2f2ddfbfd8f8f724768",
"assets/assets%255Csmart%2520watch%2520m.png": "3962baaa3a7fbbda24092a93b5f718ef",
"assets/assets%255CSunglasses.jpg": "866d33a4075ee81014623edfde92813c",
"assets/assets%255CTrekking%2520Backpack.jpg": "c64d1f3c7255fd979b3850222e71b7e2",
"assets/assets%255Ctv.jpg": "fe67be66653fa6b444ee1fa9f5c5b3d3",
"assets/assets%255CYoga%2520Mat.jpg": "d3cfcb72174100c8d457b96171a857cf",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "8290d52b5d68d74a45aded3662f84d4d",
"assets/NOTICES": "4c37f49ab3ac00847879daeea0b1a285",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "eab82989d634d91a45fce954e6e5817d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "98dd0d2dd49181d22dae99f4302648ac",
"/": "98dd0d2dd49181d22dae99f4302648ac",
"main.dart.js": "8489213ceabd8ad0b369ec52bf561792",
"manifest.json": "5410485b6309cbf1d8bf5c4b845ab72a",
"version.json": "6bab89d6080d86626c61511e7b6a76df"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
