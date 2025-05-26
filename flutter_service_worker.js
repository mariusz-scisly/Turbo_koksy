'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "34e0338029867e989dd4d5c0750e2f60",
".git/config": "2348ed5e47d1574d9e02e955663d0596",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "5ab7a4355e4c959b0c5c008f202f51ec",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "15cb3336220d5626fc30d260d5f85090",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "0bab6c9707acf855a0f91d2eb49012e4",
".git/logs/refs/heads/gh-pages": "0bab6c9707acf855a0f91d2eb49012e4",
".git/logs/refs/remotes/origin/gh-pages": "9ae2f034c5c92fea7e1bfa51fffceee0",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/03/b76f57fbab06916843f2edc25bfe36231f5425": "f1668cbe968b3a10897d339d2b1343fc",
".git/objects/08/4ece99e797e382e55804afa3b46b7633edf415": "bb87479fee465c5b38586ef476ac78cc",
".git/objects/08/558984a5917bfb0341e24199517b0fd8d1f008": "b5481abe6d1775d1052ffcc89822cbe5",
".git/objects/08/f67d2284602f0f76442317dd4d484e48f25ab6": "aae53bb82b2113ca03c3642e96c28335",
".git/objects/09/48bb832c599050074bf056aeb0a15fd00cf9a9": "9c1623a4fc60a3d7452a4f8b031eee1d",
".git/objects/12/368cdc39397158242fea0907c2a82a44244664": "ff6c522b845ca20b5c20531284683358",
".git/objects/12/3f58ea9d694950057ea1be47beeb9547dfebf0": "75ed86cec9eb18e4472139915bd4293d",
".git/objects/16/7aa9693ef87d801543e3733b62e1d0d57d561f": "d446c4ace76eea955cd9c99ee68e51a2",
".git/objects/24/f6845e4607a9345a31603c8e76abd36d75d9a0": "ac6f8989f210b1da93d0604d07932736",
".git/objects/33/31d9290f04df89cea3fb794306a371fcca1cd9": "e54527b2478950463abbc6b22442144e",
".git/objects/34/ff02dbdbeca5fa61c27d786bcfc19c5a84414a": "7f6af136a1fda313ff544d269a5434c8",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/3f/2a4d46d3ee44f0427a8de2b1975e8d6d1e02fa": "dc62bfff550b8fe1e90824a35626118b",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/44/d59653059e777cd7a9a02442c45d74e04b23e0": "b94ee551b8480109bcde9b4a97759624",
".git/objects/48/4e73c8ccaa65145f48f2030ad10cf58c1a2ba5": "552ab9b605e902de810a6a3dd7dc7c28",
".git/objects/48/753a8e33d1c4a610c5afa4925475109b1b1e47": "88fdbe0c3fe94cd2de21ae9be6fc9e18",
".git/objects/48/b9a1ded0d70873d392b14a13d0b43f31775c11": "79afe95e9012b9cab313916dcbdc928c",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/58/c4fb6131bd4e4d10d8623fe772c2406168b06d": "ae67cb39eecab14b87907a9bbea8087d",
".git/objects/5a/13bd5a18e506d22647433b1980295ce67bcebe": "50b077c2b68b737800ac0d99a322b746",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/62/6394bf49d373291e1dbd9c90a1c42aa0999f23": "06722f9fee1f670c7383775a0525342b",
".git/objects/64/5116c20530a7bd227658a3c51e004a3f0aefab": "f10b5403684ce7848d8165b3d1d5bbbe",
".git/objects/64/d02ddf234b92805609a97d14bb64d1870073e7": "9554e50307c03582cb5a603ebd7b7f0c",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6c/2f149999061e9b66e99d49996ebc1b213c9a63": "3d6f7cdaec8f60277a1f072157666b5a",
".git/objects/6c/c6f73234638a1d95620ba4251f5cc6ab7e9784": "1633a8b6d73c7edf32b5bce8864c2755",
".git/objects/72/a5cd8201cfa0b9ce92bd0f1dbfe61b8b7ddb92": "17911615594559f2d53465d30641b52a",
".git/objects/7b/d8aacfaf8dc76eca53ec0df75e285cba6a3b4e": "a1a1b381cf679027da29fedc6a35a09d",
".git/objects/7f/c3022f4d2df315c107004e17cb5a5e39205b0a": "8625115b6fc0fb962914b49c01444dbc",
".git/objects/84/28c8444cabe3938ea518fa9253851cf008a8dd": "ab3e6f9ebab9d5841a76f413369ede58",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/b2b5deeeea423229766b2df4a48a41c7f5426b": "d0bebad35a2553d23918e1a19484831d",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/94/daedb14149cb7cb7a5c80f804a0cdeb065905f": "746c054c1ba0dc16fbb50fcd80979481",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a6/32c36c766fc8a62d388f9509f8680dd3bd6037": "4800b3e67514e858e9d084b9c9fa74b0",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/af/be0d649dd8160310451c4766ea3bc25952f21a": "bac3b0e6b870380855f5e04486f90f57",
".git/objects/b4/3d0593c5ec4045600e83d8ec584ced45114ecc": "f32c4cc639bb4855cba04631ec04edf3",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c4/0a9b61b8dd095b323820be7cf754f582053339": "b702e5326c961e3398de67757cdc5dc7",
".git/objects/c4/594999a59d68672d272ca70cf17505b1e56d4e": "460bb1b19cad6be0a0c51d16b626794a",
".git/objects/ca/8a73c880abb0a83a111aded6099b612dd5ce84": "2da4eb407f0b84886c26c5c5c8026d2f",
".git/objects/cb/6b7a6137f8e01d986294349a6bc2fadc6d1849": "9df7d09456db8013ef6b3c4b23309f7a",
".git/objects/cb/be092fe858d40afa28c05f6c810770f48c0cd0": "d33e540d143205bfe42696e89651398b",
".git/objects/cf/ccc101c4d41b6b095e25d2abf64a9fb11e0bd5": "4189cccd91d50d7d4b8f9a2fc00c3945",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/1fc7ac3febadb6256123e8fb7c474a38e997bd": "1eb048cf47d79e71e0f6467d9e294750",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f6/bd528c245b05b7d7f8d96140891eb540d75910": "85bc1d6477fa91a60ba23c70023ef114",
".git/refs/heads/gh-pages": "ad91c0a9e26ba15ffa1e815dafca31a2",
".git/refs/remotes/origin/gh-pages": "ad91c0a9e26ba15ffa1e815dafca31a2",
"assets/AssetManifest.bin": "bd25133cf0fa3491573891385ec18d65",
"assets/AssetManifest.bin.json": "115e8d829f89f9295887e5be9bdcdfe9",
"assets/AssetManifest.json": "149c07d72fb0291729050d6b9e9f0829",
"assets/assets/images/bonus.png": "1864c80729c1a3f6cbb807751b037679",
"assets/assets/images/boss.png": "675b3a4fc499310fdd742ef9eac4df2e",
"assets/assets/images/bullet.png": "9eae98ff513745338baadafd92add762",
"assets/assets/images/enemy_0.png": "5a5b8e6871fcd28fb4749ffaaa66c16f",
"assets/assets/images/enemy_1.png": "91d5e5b77718b847ce22f77b3b695aab",
"assets/assets/images/enemy_2.png": "63d5a86fba28210e4639c1cd0952647f",
"assets/assets/images/mine.png": "5f85ce489d6d227ed4683ef98d560c00",
"assets/assets/images/player.png": "7e68551bb6e3031fe165fffba53d2842",
"assets/FontManifest.json": "968b872be522726c99a646fc9ae895fa",
"assets/fonts/MaterialIcons-Regular.otf": "c0ad29d56cfe3890223c02da3c6e0448",
"assets/fonts/NotoColorEmoji.ttf": "ddf7298c8439e2ff24262b16fc8e26a3",
"assets/NOTICES": "a8fff5fd2f488686f639ee1112e8d083",
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
"flutter_bootstrap.js": "9c04de75165ac406394454db2ab487ca",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "9bc0dc1b8a67da90efb35a42f82dd949",
"/": "9bc0dc1b8a67da90efb35a42f82dd949",
"main.dart.js": "e659b44214d115564b47db3e39c56808",
"manifest.json": "d3c6f6344a0705ab8c5cd2a03a4c3472",
"version.json": "09e07e1ecaf32bab5484422996f2b41b"};
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
