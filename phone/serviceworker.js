//Altos nadas por enquanto.
//POR ENQUANTO.
//rollsafe.jpg


//Acredito não ter problema de licença, já que aqui é só 'aprendizaje'
//Qualquer coisa, vem cá, Polícia do Apache.


self.addEventListener('fetch', e => {
  let timeStamp = Date.now();
  e.waitUntil(
    caches.open('YTPBR10').then(cache => {
      return cache.addAll([
        "/",
		"/phone/",
        "/index.html?timestamp=${timeStamp}",
		"/css/site_global.css",
		"/phone/css/master_mestre3224.css?3908474420",
		"/phone/css/index.css?4217621930",
		"/images/u702-4.png",
		"/images/u1119-4.png",
		"/images/u1104-6.png",
		"/images/logo%2010anos%20ytpbr-crop-u675.png",
		"/images/u1122-4.png",
		/* ... */		
		"/images/logo_ytpbr10_lowres.png"
      ])
      .then(() => self.skipWaiting());
    })
  )
});