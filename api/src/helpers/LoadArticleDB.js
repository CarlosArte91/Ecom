const { Article } = require("../db");

const allArt = [
  {
    "id": 1,
    "title": "Samsung Galaxy S22",
    "rating": 4.4,
    "detail": {
      "detail": "Es un kit de nivel profesional que cabe en una mano. La cámara posterior triple y la cámara de selfie ofrecen hardware y software de cámara innovadores para que puedas capturar fácilmente una galería llena de contenido digno de compartir.",
      "marca": "Samsung",
      "modelo": "S22",
      "so": "Android",
      "cpu": "Octa-Core de 2.99GHz",
      "ram": "8GB",
      "color": "Green",
      "pantalla": "6.1"
    },
    "image": "https://res.cloudinary.com/dsalyp6sj/image/upload/v1661406199/ecom/D_NQ_NP_686082-MLA49387650727_032022-O_kccnj2.webp",
    "stock": 5,
    "disable": false,
    "price": 1593,
    "conectividad": "USB Type-C, USB 3.2 Gen 1",
    "category": 1
  },
  {
    "id": 2,
    "title": "Samsung Galaxy S22 Ultra",
    "rating": 4.6,
    "detail": {
      "detail": "Conocé el Galaxy S22 Ultra, con el poder del Note. El marco pulido, delgado y audaz, rodea la forma extruida para lograr una simetria elegamte. Y la cámara lineal, acentuada por anillos de lentes espejados, parece flotar en su lugar.",
      "marca": "Samsung",
      "modelo": "S22 Ultra",
      "so": "Android",
      "cpu": "2.99GHz, 2.4GHz, 1.7GHz",
      "ram": "12GB",
      "color": "Green, Black, White, Burgundy",
      "pantalla": "8.9"
    },
    "image": "https://res.cloudinary.com/dsalyp6sj/image/upload/v1661406222/ecom/D_NQ_NP_668050-MLA49303776893_032022-O_dvw71o.webp",
    "stock": 4,
    "disable": false,
    "price": 2449,
    "conectividad": "USB Type-C, USB 3.2 Gen 1",
    "category": 1
  },
  {
    "id": 3,
    "title": "Samsung Galaxy S21 FE 5G",
    "rating": 4.6,
    "detail": {
      "detail": "Ya no volverás a perderte esa toma perfecta. Conocé los Galaxy S21 5G y S21+ 5G. Están diseñados para revolucionar el video y la fotografía, con una resolución cinematográfica de 8K para que puedas tomar fotos épicas mientras hacés un video. Ambos modelos tienen todas las características que necesitás: 64 MP, el conjunto de chips más rápido y una batería increíble que dura todo el día.1 Tu mundo va a ser realmente épico.",
      "marca": "Samsung",
      "modelo": "S21",
      "so": "Android",
      "cpu": "2.9GHz, 2.8GHz, 2.2GHz",
      "ram": "8GB",
      "color": "Gray",
      "pantalla": "6.2"
    },
    "image": "https://res.cloudinary.com/dsalyp6sj/image/upload/v1661406332/ecom/D_NQ_NP_730981-MLA48800008115_012022-O_esaofd.webp",
    "stock": 4,
    "disable": false,
    "price": 1291,
    "conectividad": "USB Type-C, USB 3.2 Gen 1",
    "category": 1
  },
  {
    "id": 4,
    "title": "Samsung Galaxy S21+ 5G",
    "rating": 4.6,
    "detail": {
      "detail": "Video de 8K es la resolución más alta en un teléfono inteligente, lo que hace que tu contenido luzca aún mejor que el cine. Y con 8K 24 fps, cada vlog y memoria es tu próxima toma al estrellato. Grabá, cargá y mirá directamente en YouTube.",
      "marca": "Samsung",
      "modelo": "S21+ 5G",
      "so": "Android",
      "cpu": "2.9GHz, 2.8GHz, 2.2GHz",
      "ram": "8GB",
      "color": "Violet",
      "pantalla": "6.2"
    },
    "image": "https://res.cloudinary.com/dsalyp6sj/image/upload/v1661406359/ecom/D_NQ_NP_908285-MLA50209440689_062022-O_pvxcpn.webp",
    "stock": 2,
    "disable": false,
    "price": 1622,
    "conectividad": "USB Type-C, USB 3.2 Gen 1",
    "category": 1
  },
  {
    "id": 5,
    "title": "Samsung Galaxy Z Flip3 5G",
    "rating": 4.6,
    "detail": {
      "detail": "Se pliega en el bolsillo. Entra en tu cartera. Se desliza en tus jeans más apretados. Cuando lo sacás, se abre un smartphone 5G con pantalla completa que se adapta a tus ángulos favoritos.",
      "marca": "Samsung",
      "modelo": "Flip3",
      "so": "Android",
      "cpu": "2.84GHz, 2.4GHz, 1.8GHz",
      "ram": "8GB",
      "color": "Black",
      "pantalla": "6.7"
    },
    "image": "https://res.cloudinary.com/dsalyp6sj/image/upload/v1661406397/ecom/D_NQ_NP_618327-MLA48897052450_012022-O_cjtp0f.webp",
    "stock": 3,
    "disable": false,
    "price": 1955,
    "conectividad": "USB Type-C, USB 2.0",
    "category": 1
  },
  {
    "id": 6,
    "title": "Samsung Galaxy Z Fold3 5G",
    "rating": 4.6,
    "detail": {
      "detail": "Esto es todo lo que querías en un smartphone 5G duradero y de primera calidad. Lo creamos plegable para revelar una enorme pantalla en la que puedas ver, trabajar y divertirte como nunca antes.",
      "marca": "Samsung",
      "modelo": "Fold3",
      "so": "Android",
      "cpu": "2.84GHz, 2.4GHz, 1.8GHz",
      "ram": "12GB",
      "color": "Silver",
      "pantalla": "7.6"
    },
    "image": "https://res.cloudinary.com/dsalyp6sj/image/upload/v1661406419/ecom/D_NQ_NP_680610-MLA47574356658_092021-O_n1nbwo.webp",
    "stock": 7,
    "disable": false,
    "price": 1955,
    "conectividad": "USB Type-C, USB 3.2 Gen 1",
    "category": 1
  },
  {
    "id": 7,
    "title": "Samsung Z Flip4",
    "rating": 4.2,
    "detail": {
      "detail": "Elegí un color que combine con todo, pero que no se parezca a nada. Un acabado opaco en el vidrio crea un contraste suave con el marco de metal brillante. Seleccioná entre cuatro tonos: Bora Purple, Graphite, Pink Gold y Blue.",
      "marca": "Samsung",
      "modelo": "Flip4",
      "so": "Android",
      "cpu": "2.99GHz, 2.4GHz, 1.7GHz",
      "ram": "12GB",
      "color": "Bora Purple, Graphite, Pink y Blue",
      "pantalla": "7.3"
    },
    "image": "https://res.cloudinary.com/dsalyp6sj/image/upload/v1661406441/ecom/D_NQ_NP_624071-MLA47717269574_092021-O_rnlvi5.webp",
    "stock": 3,
    "disable": false,
    "price": 1593,
    "conectividad": "USB Type-C, USB 3.2 Gen 1",
    "category": 1
  },
  {
    "id": 8,
    "title": "Samsung Galaxy Z Fold2",
    "rating": 4.7,
    "detail": {
      "detail": "Conocé el smartphone que está cambiando la forma del futuro. El número uno del mundo en plegables, este smartphone de última generación pone en la palma de tu mano un potente rendimiento, cristal plegable y una batería para todo el día",
      "marca": "Samsung",
      "modelo": "Fold2",
      "so": "Android",
      "cpu": "Octa-Core de 3.09GHz, 2.4GHz, 1.8GHz",
      "ram": "12GB",
      "color": "Green, Bronce",
      "pantalla": "7.6"
    },
    "image": "https://res.cloudinary.com/dsalyp6sj/image/upload/v1661406471/ecom/ar-galaxy-z-fold2-f916-341065-sm-f916bznqaro-thumb-344960155_ofmsrm.webp",
    "stock": 10,
    "disable": false,
    "price": 2449,
    "conectividad": "USB Type-C, USB 3.2 Gen 1",
    "category": 1
  },
  {
    "id": 9,
    "title": "Samsung Galaxy A23",
    "rating": 4.5,
    "detail": {
      "detail": "La pantalla TFT V-Cut de 6,6 pulgadas del Galaxy A23 te da espacio para ver y hacer más. Con la tecnología FHD+ y una frecuencia de actualización de 90 Hz, el contenido que de todos los días se verá más fluido y nítido.",
      "marca": "Samsung",
      "modelo": "A23",
      "so": "Android",
      "cpu": "Octa-Core de 2.4GHz, 1.9GHz",
      "ram": "4GB",
      "color": "Black, White, Blue",
      "pantalla": "6.6"
    },
    "image": "https://res.cloudinary.com/dsalyp6sj/image/upload/v1661406498/ecom/D_NQ_NP_848144-MLA49898514252_052022-O_vcrn7u.webp",
    "stock": 1,
    "disable": false,
    "price": 538,
    "conectividad": "USB Type-C, USB 2.0",
    "category": 1
  },
  {
    "id": 10,
    "title": "Samsung Galaxy A33 5G",
    "rating": 4.0,
    "detail": {
      "detail": "Alimentado con un procesador Octa-core de 5 nm, tu Galaxy está diseñado para manejar múltiples tareas. ram Plus lee tus patrones de uso y proporciona ram virtual adicional en los momentos que necesitás un impulso adicional.",
      "marca": "Samsung",
      "modelo": "A33",
      "so": "Android",
      "cpu": "Octa-Core de 5 nm",
      "ram": "6GB",
      "color": "Awesome Peach, Black, White, Blue",
      "pantalla": "6.4"
    },
    "image": "https://res.cloudinary.com/dsalyp6sj/image/upload/v1661406525/ecom/D_NQ_NP_737517-MLA50739491200_072022-O_atdpui.webp",
    "stock": 8,
    "disable": false,
    "price": 590,
    "conectividad": "USB Type-C, USB 2.0",
    "category": 1
  },
  {
    "id": 11,
    "title": "Samsung Galaxy A51",
    "rating": 4.3,
    "detail": {
      "detail": "Obtené la experiencia más reciente de Galaxy en tu teléfono. Actualizá el software para explorar la nuevas funciones disponibles.",
      "marca": "Samsung",
      "modelo": "A51",
      "so": "Android",
      "cpu": "Octa-Core de 2.3GHz, 1.7GHz",
      "ram": "4GB",
      "color": "Black, White",
      "pantalla": "6.5"
    },
    "image": "https://res.cloudinary.com/dsalyp6sj/image/upload/v1661466378/ecom/D_NQ_NP_622636-MLA50113502606_052022-O_hlkqwc.webp",
    "stock": 7,
    "disable": false,
    "price": 761,
    "conectividad": "USB Type-C, USB 2.0",
    "category": 1
  },
  {
    "id": 12,
    "title": "Samsung Galaxy A52",
    "rating": 4.6,
    "detail": {
      "detail": "Disfrutá de los detalles realmente vibrantes con la pantalla Super AMOLED Display FHD+, que alcanza los 800 nits para mayor claridad, incluso con la luz de día brillante. Eye Comfort Shield² reduce la luz azul y la pantalla extrafluida mantiene la vista relajada, ya sea que estés jugando o navegando. Todo en la amplia pantalla Infinity-O Display de 6,5 pulgadas.",
      "marca": "Samsung",
      "modelo": "A52",
      "so": "Android",
      "cpu": "Octa-Core de 2.3GHz, 1.8GHz",
      "ram": "6GB",
      "color": "Blue, Black, White, Violet",
      "pantalla": "6.5"
    },
    "image": "https://res.cloudinary.com/dsalyp6sj/image/upload/v1661466411/ecom/D_NQ_NP_861218-MLA50576439367_072022-O_mhtbhi.webp",
    "stock": 10,
    "disable": false,
    "price": 848,
    "conectividad": "USB Type-C, USB 2.0",
    "category": 1
  },
  {
    "id": 13,
    "title": "Samsung Galaxy A71",
    "rating": 4.4,
    "detail": {
      "detail": "Con un diseño de pantalla suave y elegante de borde curvo, Galaxy A71 es hermoso a la vista y se adapta cómodamente a la mano. Su acabado brillante premium lo hace fácil de sostener, y el patrón dinámico agrega un toque único de personalidad a cada una de sus ediciones Black y Silver.",
      "marca": "Samsung",
      "modelo": "A71",
      "so": "Android",
      "cpu": "Octa-Core de 2.2GHz, 1.8GHz",
      "ram": "6GB",
      "color": "Black, Silver",
      "pantalla": "6.7"
    },
    "image": "https://res.cloudinary.com/dsalyp6sj/image/upload/v1661466435/ecom/D_NQ_NP_815858-MLA41632030909_052020-O_x72uyq.webp",
    "stock": 12,
    "disable": false,
    "price": 961,
    "conectividad": "USB Type-C, USB 2.0",
    "category": 1
  },
  {
    "id": 14,
    "title": "Samsung Galaxy M12",
    "rating": 4.4,
    "detail": {
      "detail": "Poné en tus manos el elegante estilo del Galaxy M12. Un acabado metálico y un micro patrón ofrecen un diseño contemporáneo, mientras que las curvas suaves ofrecen un agarre cómodo, haciendo que se sienta tan bien como se ve. Elegí entre los colores clásicos Black o Green.",
      "marca": "Samsung",
      "modelo": "M12",
      "so": "Android",
      "cpu": "Octa-Core de 2GHz",
      "ram": "4GB",
      "color": "Blue, Black",
      "pantalla": "6.5"
    },
    "image": "https://res.cloudinary.com/dsalyp6sj/image/upload/v1661466455/ecom/D_NQ_NP_782705-MLA46928759833_072021-O_kzuffx.webp",
    "stock": 4,
    "disable": false,
    "price": 346,
    "conectividad": "USB Type-C, USB 2.0",
    "category": 1
  },
  {
    "id": 15,
    "title": "Samsung M23 5G",
    "rating": 5.0,
    "detail": {
      "detail": "Es un kit de nivel profesional que cabe en una mano. La cámara posterior triple y la cámara de selfie ofrecen hardware y software de cámara innovadores para que puedas capturar fácilmente una galería llena de contenido digno de compartir.",
      "marca": "Samsung",
      "modelo": "M23",
      "so": "Android",
      "cpu": "Octa-Core de 2.2GHz, 1.8GHz",
      "ram": "4GB",
      "color": "Green, Blue",
      "pantalla": "6.6"
    },
    "image": "https://res.cloudinary.com/dsalyp6sj/image/upload/v1661466474/ecom/D_NQ_NP_833241-MLA50136358907_052022-O_vgr9pw.webp",
    "stock": 15,
    "disable": false,
    "price": 634,
    "conectividad": "USB Type-C, USB 2.0",
    "category": 1
  },
  {
    "id": 16,
    "title": "Apple iPhone 11 (128 GB) - Negro",
    "rating": 5.0,
    "detail": {
      "detail": "Graba videos 4K y captura retratos espectaculares y paisajes increíbles con el sistema de dos cámaras. Toma grandes fotos con poca luz gracias al modo Noche. Disfruta colores reales en las fotos, videos y juegos con la pantalla Liquid Retina de 6.1 pulgadas (3). Aprovecha un rendimiento sin precedentes en los juegos, la realidad aumentada y la fotografía con el chip A13 Bionic. Haz mucho más sin necesidad de volver a cargar el teléfono gracias a su batería de larga duración (2). Y no te preocupes si se moja, el iPhone 11 tiene una resistencia al agua de hasta 30 minutos a una profundidad máxima de 2 metros (1).",
      "marca": "Apple",
      "modelo": "iPhone 11",
      "so": "iOS 14",
      "cpu": "Apple A13 Bionic",
      "ram": "4 GB",
      "color": "Negro",
      "pantalla": "6.1\""
    },
    "image": "https://res.cloudinary.com/dsalyp6sj/image/upload/v1661466504/ecom/D_NQ_NP_990246-MLA46153276373_052021-O_gu5sg3.webp",
    "stock": 10,
    "disable": false,
    "price": 696.99,
    "conectividad": "4G/LTE",
    "category": 1
  },
  {
    "id": 17,
    "title": "Apple iPhone 11 Pro 64 GB gris espacial",
    "rating": 5.0,
    "detail": {
      "detail": "Una pantalla que brilla sobre todo lo conocido. La pantalla OLED Super Retina XDR de 5,8\", sin marcos y con una resolución FullHD+, es la pantalla más nítida diseñada por Apple. Cuenta con dos niveles máximos de brillo que se ajustan automáticamente a la luz del ambiente. Gracias a la alta intensidad de contrastes y a un mayor nivel de detalle, es perfecta para ver películas HDR, incluso bajo el sol.",
      "marca": "Apple",
      "modelo": "iPhone 11 pro",
      "so": "iOS 13",
      "cpu": "Apple A13 Bionic",
      "ram": "4 GB",
      "color": "Negro",
      "pantalla": "6.1\""
    },
    "image": "https://res.cloudinary.com/dsalyp6sj/image/upload/v1661466523/ecom/D_NQ_NP_786531-MLA44294196323_122020-O_xz5x3i.webp",
    "stock": "10",
    "disable": false,
    "price": 774.96,
    "conectividad": "4G/LTE",
    "category": 1
  },
  {
    "id": 18,
    "title": "Apple iPhone 12 (64 GB) - Azul",
    "rating": 5.0,
    "detail": {
      "detail": "El iPhone 12 tiene una espectacular pantalla Super Retina XDR de 6.1 pulgadas (1). Un frente de Ceramic Shield, cuatro veces más resistente a las caídas (2). Modo Noche en todas las cámaras, para que puedas tomar fotos increíbles con poca luz. Grabación, edición y reproducción de video en Dolby Vision con calidad cinematográfica. Y el potente chip A14 Bionic. Además, es compatible con los nuevos accesorios MagSafe, que se acoplan fácilmente a tu iPhone y permiten una carga inalámbrica más rápida (3). Que comience la diversión.",
      "marca": "Apple",
      "modelo": "iPhone 12",
      "so": "iOS 14",
      "cpu": "Apple A14 Bionic",
      "ram": "4 GB",
      "color": "Negro",
      "pantalla": "6.1\""
    },
    "image": "https://res.cloudinary.com/dsalyp6sj/image/upload/v1661466545/ecom/D_NQ_NP_644895-MLA46153583487_052021-O_h9gkyd.webp",
    "stock": 10,
    "disable": false,
    "price": 871.51,
    "conectividad": "4G/LTE",
    "category": 1
  },
  {
    "id": 19,
    "title": "Apple iPhone SE (3ª generación, 128 GB) - Azul medianoche",
    "rating": 4.0,
    "detail": {
      "detail": "Chip A15 Bionic superrápido. Una increíble duración de batería y una cámara que es una superestrella. Y además, el vidrio más resistente en un smartphone y botón de inicio con la seguridad de Touch ID.",
      "marca": "Apple",
      "modelo": "iPhone SE (3rd Generation)",
      "so": "iOS 15.4",
      "cpu": "Apple A15 Bionic",
      "ram": "4 GB",
      "color": "Negro",
      "pantalla": "6.1\""
    },
    "image": "https://res.cloudinary.com/dsalyp6sj/image/upload/v1661466565/ecom/D_NQ_NP_990892-MLA49590214677_042022-O_haqsb5.webp",
    "stock": 7,
    "disable": false,
    "price": 546.45,
    "conectividad": "4G/LTE",
    "category": 1
  },
  {
    "id": 20,
    "title": "Apple iPhone 13 Pro Max 128gb",
    "rating": 5.0,
    "detail": {
      "detail": "Conoce la mejor experiencia de tecnología y eficiencia. Con nuestro IPHONE 13 PRO MAX de 128GB. Trae un sistema de cámaras mucho más poderoso. Una pantalla con respuesta inmediata en cada interacción. Procesador Apple A15 Bionic que lo hace mucho mas rápido. Un diseño increíblemente resistente. Y un gran salto en duración de batería.",
      "marca": "Apple",
      "modelo": "iPhone 13 Pro Max",
      "so": "iOS 15",
      "cpu": "Apple A15 Bionic",
      "ram": "4 GB",
      "color": "Negro",
      "pantalla": "6.1\""
    },
    "image": "https://res.cloudinary.com/dsalyp6sj/image/upload/v1661466594/ecom/D_NQ_NP_976471-MCO50076875473_052022-O_ivg0tu.webp",
    "stock": 12,
    "disable": false,
    "price": 1354.17,
    "conectividad": "4G/LTE",
    "category": 1
  },
  {
    "id": 21,
    "title": "Apple iPhone SE (2da generación) 64 GB - Negro",
    "rating": 5.0,
    "detail": {
      "detail": "El iPhone SE es el iPhone de 4,7 pulgadas más potente hasta ahora (1). Tiene el chip A13 Bionic, que ofrece un rendimiento increíble en apps, juegos y fotos. Viene con modo Retrato y seis efectos de iluminación para tomar retratos con calidad de estudio, HDR Inteligente de última generación que ofrece un nivel de detalle sorprendente en las luces y las sombras de las fotos, video 4K de calidad cinematográfica y todas las funcionalidades avanzadas de iOS. Además de una batería de larga duración (2) y resistencia al agua (3). Tiene todo lo que te gusta del iPhone en un diseño compacto que te encantará.",
      "marca": "Apple",
      "modelo": "iPhone SE (2nd Generation)",
      "so": "iOS 13",
      "cpu": "Apple A13 Bionic",
      "ram": "4 GB",
      "color": "Negro",
      "pantalla": "6.1\""
    },
    "image": "https://res.cloudinary.com/dsalyp6sj/image/upload/v1661466621/ecom/D_NQ_NP_624279-MLA47681022745_092021-O_wcjdmv.webp",
    "stock": 9,
    "disable": false,
    "price": 248.98,
    "conectividad": "4G/LTE",
    "category": 1
  },
  {
    "id": 22,
    "title": "Apple iPhone 7 Plus 32 GB negro mate",
    "rating": 4.0,
    "detail": {
      "detail": "El dispositivo cuenta con cámara frontal de 7 Mpx para que puedas sacarte divertidas selfies o hacer videollamadas. Sus 2 cámaras traseras de 12 Mpx/12 Mpx te permitirán tomar imágenes con más detalles y lograr efectos únicos como el famoso modo retrato de poca profundidad de campo. Su memoria ram de 3 GB permite que tu smartphone funcione de manera fluida y sin demoras al realizar distintas tareas, jugar o navegar. Con su memoria interna de 32 GB descarga tus aplicaciones favoritas y guarda todas las fotos y videos que quieras.",
      "marca": "Apple",
      "modelo": "iPhone 7 Plus",
      "so": "iOS 10.01",
      "cpu": "Apple A10 Fusion",
      "ram": "4 GB",
      "color": "Negro",
      "pantalla": "6.1\""
    },
    "image": "https://res.cloudinary.com/dsalyp6sj/image/upload/v1661466639/ecom/D_NQ_NP_604878-MLA43704039116_102020-O_xk8fus.webp",
    "stock": 6,
    "disable": false,
    "price": 482.88,
    "conectividad": "4G/LTE",
    "category": 1
  },
  {
    "id": 23,
    "title": "Apple iPhone X A1901 A1865 3gb 64gb",
    "rating": 4.5,
    "detail": {
      "detail": "El Apple iPhone X es una demostración de fuerza de Apple, mostrando lo que es capaz de hacer y para celebrar los 10 años del iPhone. El iPhone X cuenta con una pantalla de 5.8 pulgadas que abarca todo el frente del teléfono, dejando un espacio arriba para acomodar todos los sensores que contribuyen a Face ID, el nuevo método de desbloqueo por rostro, ya que el botón Touch ID desaparece. Con una atípica resolución de 2436 x 1125 pixels, acomoda 458ppi. Por dentro, el iPhone X tiene el nuevo procesador A11 Bionic. La cámara es dual de 12 MP similar a la del iPhone 8, es resistente al agua y corre iOS 11. A1865: El iPhone 10 X A1865 es considerado el teléfono global, ya que es compatible con redes GSM y CDMA. Todos los modelos cuentan con WI-FI 802.11ac con MIMO, tecnología inalánbrica Bluetooth 5.0. NFC con modo de lectura.",
      "marca": "Apple",
      "modelo": "iPhone X",
      "so": "iOS 11",
      "cpu": "Apple A11 Bionic",
      "ram": "4 GB",
      "color": "Negro",
      "pantalla": "6.1\""
    },
    "image": "https://res.cloudinary.com/dsalyp6sj/image/upload/v1661466655/ecom/D_NQ_NP_950598-MCO32413287415_102019-O_rhfvnk.webp",
    "stock": 7,
    "disable": false,
    "price": 579.22,
    "conectividad": "4G/LTE",
    "category": 1
  },
  {
    "id": 24,
    "title": "Apple iPhone XR A1984 3gb 128gb",
    "rating": 4.0,
    "detail": {
      "detail": "El Apple iPhone Xr llega en el 2018 para reemplazar definitivamente el botón Touch ID en el iPhone. reemplazando a los modelos clásicos del iPhone, el iPhone Xr tiene una pantalla LCD de 6.1 pulgadas de borde a borde con notch incluido y resolución Retina. El iPhone Xr está potenciado por el procesador A12 Bionic con 64GB, 128GB o 256GB de almacenamiento interno, y cuenta con una cámara de 12 megapixels, cámara frontal de 7 megapixels, carga inalámbrica y certificación IP67 a prueba de agua, disponible en una variedad enorme de colores. OS 12 es el sistema operativo del Apple iPhone Xr, que en cuanto a dimensiones tiene un perfil de 8.3 mm y un peso de 194 g. Entre las características del Apple iPhone Xr se destaca una pantalla de 6.1\" con una resolución de 828 x 1792 pixels. Completando las especificaciones técnicas del Apple iPhone Xr, podemos encontrar parlantes stereo para un sonido superior.",
      "marca": "Apple",
      "modelo": "iPhone XR",
      "so": "iOS 12",
      "cpu": "Apple A12 Bionic",
      "ram": "4 GB",
      "color": "Negro",
      "pantalla": "6.1\""
    },
    "image": "https://res.cloudinary.com/dsalyp6sj/image/upload/v1661466677/ecom/D_NQ_NP_625521-MCO32404760254_102019-O_uef4js.webp",
    "stock": 10,
    "disable": false,
    "price": 558.02,
    "conectividad": "4G/LTE",
    "category": 1
  },
  {
    "id": 25,
    "title": "Apple iPhone 12 Pro Max (256 Gb) - Azul Pacífico Model A2342",
    "rating": 4.5,
    "detail": {
      "detail": "El iPhone 12 Pro Max tiene una pantalla Super Retina XDR más grande, de 6.7 pulgadas (1). Con el nuevo Ceramic Shield, es cuatro veces más resistente a las caídas (2). Y te permite tomar fotos increíbles con poca luz gracias al mejor sistema de cámaras Pro de un iPhone y al rango de zoom óptico de 5x. También puedes grabar, editar y reproducir video en Dolby Vision con calidad cinematográfica, tomar retratos con modo Noche y disfrutar experiencias de realidad aumentada de última generación con el escáner LiDAR. El iPhone 12 Pro Max viene con el potente chip A14 Bionic y es compatible con los nuevos accesorios MagSafe, que se adhieren magnéticamente a tu iPhone y brindan una carga inalámbrica más rápida (3). Una infinidad de posibilidades que no dejarán de sorprenderte.",
      "marca": "Apple",
      "modelo": "iPhone 12 Pro Max",
      "so": "iOS 14",
      "cpu": "Apple A14 Bionic",
      "ram": "4 GB",
      "color": "Negro",
      "pantalla": "6.1\""
    },
    "image": "https://res.cloudinary.com/dsalyp6sj/image/upload/v1661466694/ecom/D_NQ_NP_751680-MLA46183698427_052021-O_ugcarv.webp",
    "stock": 6,
    "disable": false,
    "price": 1107.08,
    "conectividad": "4G/LTE",
    "category": 1
  },
  {
    "id": 26,
    "title": "Apple iPhone XS Max 64 Gb Oro",
    "rating": 4.8,
    "detail": {
      "detail": "El dispositivo cuenta con cámara frontal de 7 Mpx para que puedas sacarte divertidas selfies o hacer videollamadas. Sus 2 cámaras traseras de 12 Mpx/12 Mpx te permitirán tomar imágenes con más detalles y lograr efectos únicos como el famoso modo retrato de poca profundidad de campo. Con su pantalla OLED de 6.5\", disfruta de colores intensos y mayor nitidez en todos tus contenidos. Su memoria ram de 4 GB permite que tu smartphone funcione de manera fluida y sin demoras al realizar distintas tareas, jugar o navegar. Acerca el dispositivo a tu rostro para desbloquearlo instantáneamente. Su precisa tecnología de reconocimiento facial te garantiza un acceso al equipo rápido y seguro. Con su memoria interna de 64 GB siempre tendrás espacio para almacenar archivos y documentos importantes. Además, podrás guardar películas, series y videos para reproducirlos cuando quieras sin conexión",
      "marca": "Apple",
      "modelo": "iPhone XS Max",
      "so": "iOS 12",
      "cpu": "Apple A12 Bionic",
      "ram": "4 GB",
      "color": "Negro",
      "pantalla": "6.1\""
    },
    "image": "https://res.cloudinary.com/dsalyp6sj/image/upload/v1661466715/ecom/D_NQ_NP_837813-MLA44156024093_112020-O_eszgmo.webp",
    "stock": 6,
    "disable": false,
    "price": 977.53,
    "conectividad": "4G/LTE",
    "category": 1
  },
  {
    "id": 27,
    "title": "Apple iPhone XR 64 Gb Coral",
    "rating": 3.8,
    "detail": {
      "detail": "El iPhone XR viene con una pantalla Liquid Retina de 6.1 pulgadas (2) y está disponible en seis colores increíbles. El avanzado sistema Face ID te permite desbloquearlo de forma segura e iniciar sesión en tus apps con sólo una mirada. El chip A12 Bionic usa el aprendizaje automático en tiempo real para llevar aún más allá todo lo que puedes hacer con tus fotos, juegos, realidad aumentada y más. El sistema de cámara única de 12 MP con modo Retrato, Iluminación de Retrato, bokeh mejorado y Control de Profundidad te permite tomar retratos con calidad de estudio. Además, es resistente al agua.",
      "marca": "Apple",
      "modelo": "iPhone XR",
      "so": "iOS 12",
      "cpu": "Apple A12 Bionic",
      "ram": "4 GB",
      "color": "Negro",
      "pantalla": "6.1\""
    },
    "image": "https://res.cloudinary.com/dsalyp6sj/image/upload/v1661466735/ecom/D_NQ_NP_839636-MLA46597380704_072021-O_k5t4yd.webp",
    "stock": 10,
    "disable": false,
    "price": 506.41,
    "conectividad": "4G/LTE",
    "category": 1
  },
  {
    "id": 28,
    "title": "Apple iPhone 8 Plus Plata De 128gb",
    "rating": 4.5,
    "detail": {
      "detail": "El dispositivo cuenta con cámara frontal de 7 Mpx para que puedas sacarte divertidas selfies o hacer videollamadas. Con su pantalla IPS de 5.5\", disfruta de colores intensos y mayor nitidez en todos tus contenidos. Su memoria ram de 3 GB permite que tu smartphone funcione de manera fluida y sin demoras al realizar distintas tareas, jugar o navegar. Con el sensor de huella digital, el acceso es seguro y podrás desbloquearlo automáticamente con un toque. Con su memoria interna de 128 GB podrás almacenar archivos y aplicaciones de gran tamaño sin necesidad de subirlos a la nube y aprovechar tus momentos sin conexión para darles el máximo uso.",
      "marca": "Apple",
      "modelo": "iPhone 8 Plus",
      "so": "iOS 11",
      "cpu": "Apple A11 Bionic",
      "ram": "4 GB",
      "color": "Negro",
      "pantalla": "6.1\""
    },
    "image": "https://res.cloudinary.com/dsalyp6sj/image/upload/v1661466755/ecom/D_NQ_NP_933513-MLA44156542321_112020-O_ed9vuo.webp",
    "stock": 11,
    "disable": false,
    "price": 529.99,
    "conectividad": "4G/LTE",
    "category": 1
  },
  {
    "id": 29,
    "title": "Apple iPhone 8 Plus 64 Gb Oro",
    "rating": 4.0,
    "detail": {
      "detail": "El dispositivo cuenta con cámara frontal de 7 Mpx para que puedas sacarte divertidas selfies o hacer videollamadas. Con su pantalla IPS de 5.5\", disfruta de colores intensos y mayor nitidez en todos tus contenidos. Su memoria ram de 3 GB permite que tu smartphone funcione de manera fluida y sin demoras al realizar distintas tareas, jugar o navegar. Con el sensor de huella digital, el acceso es seguro y podrás desbloquearlo automáticamente con un toque. Con su memoria interna de 64 GB siempre tendrás espacio para almacenar archivos y documentos importantes. Además, podrás guardar películas, series y videos para reproducirlos cuando quieras sin conexión.",
      "marca": "Apple",
      "modelo": "iPhone 8 Plus",
      "so": "iOS 11",
      "cpu": "Apple A11 Bionic",
      "ram": "4 GB",
      "color": "Negro",
      "pantalla": "6.1\""
    },
    "image": "https://res.cloudinary.com/dsalyp6sj/image/upload/v1661466778/ecom/D_NQ_NP_890424-MLA44156537587_112020-O_mozveo.webp",
    "stock": 7,
    "disable": false,
    "price": 411.98,
    "conectividad": "4G/LTE",
    "category": 1
  },
  {
    "id": 30,
    "title": "Apple iPhone 13 - Red",
    "rating": 5.0,
    "detail": {
      "detail": "pantalla y diseño Superbrillante. Supercolorida. Supernítida.Una pantalla OLED más brillante que ahorra energía y se ve increíble incluso a pleno sol. Y un diseño duradero resistente al agua y al polvo Crea automáticamente bellos efectos de profundidad y cambios de enfoque para darles más fuerza narrativa a tus videos.  tus fotos y videos se veran aún más increíbles. La cámara gran angular capta más luz y la cámara ultra gran angular captura más detalle en las zonas oscuras. Además, se incluyo una nueva estabilización óptica de imagen por desplazamiento de sensor. El iPhone 13 da un gran salto en duración de batería. Ahora podrás maratonear tus series favoritas, jugar videojuegos o hacer lo que quieras por más tiempo con una sola carga. Incluso en el iPhone 13 mini Más velocidad. Mejores cámaras. Tú sales ganando.",
      "marca": "Apple",
      "modelo": "iPhone 13",
      "so": "iOS 15",
      "cpu": "Apple A15 Bionic",
      "ram": "4 GB",
      "color": "Black",
      "pantalla": "6.1\""
    },
    "image": "https://res.cloudinary.com/dsalyp6sj/image/upload/v1661466800/ecom/D_NQ_NP_733492-MCO48109679666_112021-O_flsyoz.webp",
    "stock": 6,
    "disable": false,
    "price": 989.28,
    "conectividad": "4G/LTE",
    "category": 1
  }, {
    "id": 31,
    "title": "Xiaomi Redmi Note 10 5g Dual Sim 128 Gb Azul Nocturno 4 Gb ram",
    "rating": 4.4,
    "detail": {
      "detail": "Fotografía profesional en tu bolsillo, descubrí infinitas posibilidades para tus fotos con las 3 cámaras principales de tu equipo. Poné a prueba tu creatividad y jugá con la iluminación, diferentes planos y efectos para obtener grandes resultados. Además, el dispositivo cuenta con cámara frontal de 8 Mpx para que puedas sacarte divertidas selfies o hacer videollamadas. Mayor rendimiento, su memoria ram de 4 GB permite que tu smartphone funcione de manera fluida y sin demoras al realizar distintas tareas, jugar o navegar.",
      "marca": "Xiaomi",
      "modelo": "Note 10 5G",
      "so": "Android 11.0",
      "cpu": "2x2.2 GHz Cortex-A76",
      "ram": "4 GB",
      "color": "Azul",
      "pantalla": "6.5"
    },
    "image": "https://res.cloudinary.com/dsalyp6sj/image/upload/v1661466826/ecom/D_627579-MLA48579055364_122021-I_z1unzt.jpg",
    "stock": 30,
    "disable": false,
    "price": 442,
    "conectividad": "5G",
    "category": 1
  }, {
    "id": 32,
    "title": "Xiaomi Redmi Note 10 Pro (global) Dual Sim 128 Gb Gris Ónix 6 Gb ram",
    "rating": 4.6,
    "detail": {
      "detail": "Fotografía profesional en tu bolsillo. Descubrí infinitas posibilidades para tus fotos con las 4 cámaras principales de tu equipo. Poné a prueba tu creatividad y jugá con la iluminación, diferentes planos y efectos para obtener grandes resultados. Experiencia visual increíble. Mirá tus series y películas favoritas con la mejor definición a través de su pantalla AMOLED de 6.67 pulgadas. Disfrutá de colores brillantes y detalles precisos en todos tus contenidos. Capacidad y eficiencia, con su potente procesador y memoria ram de 6 GB tu equipo alcanzará un alto rendimiento con gran velocidad de transmisión de contenidos y ejecutará múltiples aplicaciones a la vez sin demoras.",
      "marca": "Xiaomi",
      "modelo": "Note 10 Pro (Global)",
      "so": "Android 11.0",
      "cpu": "2x2.3 GHz Kryo 470 Gold",
      "ram": "6 GB",
      "color": "Gray",
      "pantalla": "6.6"
    },
    "image": "https://res.cloudinary.com/dsalyp6sj/image/upload/v1661466848/ecom/D_NQ_NP_689330-MLA50263507908_062022-O_j2qy4v.webp",
    "stock": 10,
    "disable": false,
    "price": 460,
    "conectividad": "4G/LITE",
    "category": 1
  }, {
    "id": 33,
    "title": "Xiaomi Redmi Note 10s Dual Sim 128 Gb Blanco Piedra 6 Gb ram",
    "rating": 4.0,
    "detail": {
      "detail": "Fotografía profesional en tu bolsillo. Descubrí infinitas posibilidades para tus fotos con las 4 cámaras principales de tu equipo. Poné a prueba tu creatividad y jugá con la iluminación, diferentes planos y efectos para obtener grandes resultados. Experiencia visual increíble. Mirá tus series y películas favoritas con la mejor definición a través de su pantalla AMOLED de 6.43 pulgadas. Disfrutá de colores brillantes y detalles precisos en todos tus contenidos. Capacidad y eficiencia, con su potente procesador y memoria ram de 6 GB tu equipo alcanzará un alto rendimiento con gran velocidad de transmisión de contenidos y ejecutará múltiples aplicaciones a la vez sin demoras.",
      "marca": "Xiaomi",
      "modelo": "Note 10S",
      "so": "Android 11.0",
      "cpu": "2x2.05 GHz Cortex-A76",
      "ram": "6 GB",
      "color": "White",
      "pantalla": "6.43"
    },
    "image": "https://res.cloudinary.com/dsalyp6sj/image/upload/v1661466872/ecom/D_NQ_NP_2X_698445-MLA49172994594_022022-F_ccq6c8.webp",
    "stock": 3,
    "disable": false,
    "price": 450,
    "conectividad": "4G/LITE",
    "category": 1
  }, {
    "id": 34,
    "title": "Xiaomi Redmi 10 Dual Sim 64 Gb Carbon Gray 4 Gb ",
    "rating": 3.6,
    "detail": {
      "detail": "Fotografía profesional en tu bolsillo. Descubrí infinitas posibilidades para tus fotos con las 4 cámaras principales de tu equipo. Mayor rendimiento con su memoria ram de 4 GB permite que tu smartphone funcione de manera fluida y sin demoras al realizar distintas tareas, jugar o navegar. Desbloqueo facial y dactilar con máxima seguridad para que solo vos puedas acceder al equipo. Podrás elegir entre el sensor de huella dactilar para habilitar el teléfono en un toque, o el reconocimiento facial que permite un desbloqueo hasta un 30% más rápido. ",
      "marca": "Xiaomi",
      "modelo": "10",
      "so": "Android 11.0",
      "cpu": "2x2 GHz Cortex-A75",
      "ram": "4 GB",
      "color": "Gray",
      "pantalla": "6.43"
    },
    "image": "https://res.cloudinary.com/dsalyp6sj/image/upload/v1661466889/ecom/D_NQ_NP_2X_729373-MLA48591993422_122021-F_ac3nfc.webp",
    "stock": 2,
    "disable": false,
    "price": 300,
    "conectividad": "4G/LITE",
    "category": 1
  }, {
    "id": 35,
    "title": "Xiaomi Mi 11 Lite 5g Ne Dual Sim 128 Gb Azul Chicle 8 Gb ram",
    "rating": 3.9,
    "detail": {
      "detail": "Fotografía profesional en tu bolsillo. Descubrí infinitas posibilidades para tus fotos con las 3 cámaras principales de tu equipo. Poné a prueba tu creatividad y jugá con la iluminación, diferentes planos y efectos para obtener grandes resultados. Además, el dispositivo cuenta con cámara frontal de 20 Mpx para que puedas sacarte divertidas selfies o hacer videollamadas. Experiencia visual increíble. Mirá tus series y películas favoritas con la mejor definición a través de su pantalla AMOLED de 6.55 pulgadas. Disfrutá de colores brillantes y detalles precisos en todos tus contenidos.",
      "marca": "Xiaomi",
      "modelo": "11 Lite 5G NE",
      "so": "Android 11.0",
      "cpu": "4x2.4 GHz Kryo 670",
      "ram": "8 GB",
      "color": "Blue",
      "pantalla": "6.55"
    },
    "image": "https://res.cloudinary.com/dsalyp6sj/image/upload/v1661466911/ecom/D_NQ_NP_799365-MLA50143685842_052022-O_voeiar.webp",
    "stock": 5,
    "disable": false,
    "price": 439,
    "conectividad": "5G",
    "category": 1
  }, {
    "id": 36,
    "title": "Xiaomi Redmi Note 11s Dual Sim 128 Gb Gris Grafito 6 Gb ram",
    "rating": 3.9,
    "detail": {
      "detail": "Fotografía profesional en tu bolsillo. Descubrí infinitas posibilidades para tus fotos con las 4 cámaras principales de tu equipo. Poné a prueba tu creatividad y jugá con la iluminación, diferentes planos y efectos para obtener grandes resultados. Experiencia visual increíble. Mirá tus series y películas favoritas con la mejor definición a través de su pantalla AMOLED de 6.43 pulgadas. Disfrutá de colores brillantes y detalles precisos en todos tus contenidos. Con su potente procesador y memoria ram de 6 GB tu equipo alcanzará un alto rendimiento con gran velocidad de transmisión de contenidos y ejecutará múltiples aplicaciones a la vez sin demoras.",
      "marca": "Xiaomi",
      "modelo": "Note 11S",
      "so": "Android 11.0",
      "cpu": "2x2.05 GHz Cortex-A76",
      "ram": "6 GB",
      "color": "Gray",
      "pantalla": "6.43"
    },
    "image": "https://res.cloudinary.com/dsalyp6sj/image/upload/v1661466930/ecom/D_NQ_NP_2X_734580-MLA49397636457_032022-F_tm4vbr.webp",
    "stock": 3,
    "disable": false,
    "price": 320,
    "conectividad": "4G/LITE",
    "category": 1
  }, {
    "id": 37,
    "title": " Xiaomi Redmi 5 Plus Dual SIM 32 GB  dorado 3 GB ram",
    "rating": 3.2,
    "detail": {
      "detail": "Momentos únicos, capturas reales. Capturá tus mejores momentos y revivilos cuando quieras con la cámara trasera de 12 Mpx. Además, el dispositivo cuenta con cámara frontal de 5 Mpx para que puedas sacarte divertidas selfies o hacer videollamadas. Con su pantalla IPS de 5.99 pulgadas, disfrutá de colores intensos y mayor nitidez en todos tus contenidos. Su memoria ram de 3 GB permite que tu smartphone funcione de manera fluida y sin demoras al realizar distintas tareas, jugar o navegar",
      "marca": "Xiaomi",
      "modelo": "5 Plus",
      "so": "Android Oreo 8.1.0",
      "cpu": "8x1.8 GHz Cortex-A",
      "ram": "3 GB",
      "color": "Gold",
      "pantalla": "5.99"
    },
    "image": "https://res.cloudinary.com/dsalyp6sj/image/upload/v1661466954/ecom/D_NQ_NP_729097-MLA31545355570_072019-O_m2f2wo.webp",
    "stock": 13,
    "disable": false,
    "price": 190,
    "conectividad": "4G/LITE",
    "category": 1
  }, {
    "id": 38,
    "title": "Xiaomi Redmi 9C NFC Dual SIM 32 GB amanecer naranja 2 GB ram",
    "rating": 3.0,
    "detail": {
      "detail": "Doble cámara y más detalles. Sus 2 cámaras traseras de 13 Mpx/2 Mpx te permitirán tomar imágenes con más detalles y lograr efectos únicos como el famoso modo retrato de poca profundidad de campo. Además, el dispositivo cuenta con cámara frontal de 5 Mpx para que puedas sacarte divertidas selfies o hacer videollamadas. Con su pantalla IPS de 6.53 pulgadas disfrutá de colores intensos y mayor nitidez en todos tus contenidos. Su memoria ram de 2 GB es justo lo que necesitás para utilizar las funciones más importantes como llamar, enviar mensajes, navegar y ejecutar aplicaciones de uso frecuente como redes sociales o multimedia.",
      "marca": "Xiaomi",
      "modelo": "9C NFC",
      "so": "Android 10",
      "cpu": "4x2.3 GHz Cortex-A53",
      "ram": "2 GB",
      "color": "Orange",
      "pantalla": "6.53"
    },
    "image": "https://res.cloudinary.com/dsalyp6sj/image/upload/v1661466991/ecom/D_NQ_NP_2X_936910-MLA50965794872_082022-F_nyjbrv.webp",
    "stock": 13,
    "disable": false,
    "price": 160,
    "conectividad": "4G/LITE",
    "category": 1
  }, {
    "id": 39,
    "title": "Xiaomi Redmi 9A Dual SIM 32 GB azul celeste 2 GB ram",
    "rating": 2.6,
    "detail": {
      "detail": "Momentos únicos, capturas reales. Capturá tus mejores momentos y revivilos cuando quieras con la cámara trasera de 13 Mpx. Además, el dispositivo cuenta con cámara frontal de 5 Mpx para que puedas sacarte divertidas selfies o hacer videollamadas. Con su pantalla IPS de 6.53 pulgadas, disfrutá de colores intensos y mayor nitidez en todos tus contenidos. Su memoria ram de 2 GB es justo lo que necesitás para utilizar las funciones más importantes como llamar, enviar mensajes, navegar y ejecutar aplicaciones de uso frecuente como redes sociales o multimedia.",
      "marca": "Xiaomi",
      "modelo": "9A",
      "so": "Android 10",
      "cpu": "8x2 GHz Cortex-A53",
      "ram": "2 GB",
      "color": "Blue",
      "pantalla": "6.53"
    },
    "image": "https://res.cloudinary.com/dsalyp6sj/image/upload/v1661467011/ecom/D_NQ_NP_2X_746902-MLA48765111950_012022-F_tfmfch.webp",
    "stock": 6,
    "disable": false,
    "price": 170,
    "conectividad": "4G/LITE",
    "category": 1
  }, {
    "id": 40,
    "title": "Xiaomi Redmi 9AT Dual SIM 32 GB carbon gray 2 GB ram",
    "rating": 2.7,
    "detail": {
      "detail": "Momentos únicos, capturas reales. Capturá tus mejores momentos y revivilos cuando quieras con la cámara trasera de 13 Mpx. Además, el dispositivo cuenta con cámara frontal de 5 Mpx para que puedas sacarte divertidas selfies o hacer videollamadas.  Con su pantalla IPS de 6.53 pulgadas, disfrutá de colores intensos y mayor nitidez en todos tus contenidos. Su memoria ram de 2 GB es justo lo que necesitás para utilizar las funciones más importantes como llamar, enviar mensajes, navegar y ejecutar aplicaciones de uso frecuente como redes sociales o multimedia.",
      "marca": "Xiaomi",
      "modelo": "9AT",
      "so": "Android 10",
      "cpu": "4x2 GHz Cortex-A53",
      "ram": "2 GB",
      "color": "Black",
      "pantalla": "6.53"
    },
    "image": "https://res.cloudinary.com/dsalyp6sj/image/upload/v1661467035/ecom/D_NQ_NP_760932-MLA48183269393_112021-O_yqi75q.webp",
    "stock": 2,
    "disable": false,
    "price": 130,
    "conectividad": "4G/LITE",
    "category": 1
  }, {
    "id": 41,
    "title": "Xiaomi Redmi 9C Dual SIM 64 GB naranja amanecer 3 GB ram",
    "rating": 3.3,
    "detail": {
      "detail": "Fotografía profesional en tu bolsillo. Descubrí infinitas posibilidades para tus fotos con las 3 cámaras principales de tu equipo. Poné a prueba tu creatividad y jugá con la iluminación, diferentes planos y efectos para obtener grandes resultados. Además, el dispositivo cuenta con cámara frontal de 5 Mpx para que puedas sacarte divertidas selfies o hacer videollamadas. Su memoria ram de 3 GB permite que tu smartphone funcione de manera fluida y sin demoras al realizar distintas tareas, jugar o navegar.",
      "marca": "Xiaomi",
      "modelo": "9C",
      "so": "Android 10",
      "cpu": "4x2.3 GHz Cortex-A53",
      "ram": "3 GB",
      "color": "Orange",
      "pantalla": "6.53"
    },
    "image": "https://res.cloudinary.com/dsalyp6sj/image/upload/v1661466991/ecom/D_NQ_NP_2X_936910-MLA50965794872_082022-F_nyjbrv.webp",
    "stock": 2,
    "disable": false,
    "price": 180,
    "conectividad": "4G/LITE",
    "category": 1
  }, {
    "id": 42,
    "title": "Xiaomi Poco F3 5G Dual SIM 128 GB azul océano profundo 6 GB ram",
    "rating": 3.7,
    "detail": {
      "detail": "Fotografía profesional en tu bolsillo. Descubrí infinitas posibilidades para tus fotos con las 3 cámaras principales de tu equipo. Poné a prueba tu creatividad y jugá con la iluminación, diferentes planos y efectos para obtener grandes resultados. Además, el dispositivo cuenta con cámara frontal de 20 Mpx para que puedas sacarte divertidas selfies o hacer videollamadas. Mirá tus series y películas favoritas con la mejor definición a través de su pantalla AMOLED de 6.67 pulgadas. Disfrutá de colores brillantes y detalles precisos en todos tus contenidos.",
      "marca": "Xiaomi",
      "modelo": "Poco F3 5G",
      "so": "Android 11",
      "cpu": "3x2.42 GHz Kryo-585",
      "ram": "6 GB",
      "color": "Blue",
      "pantalla": "6.67"
    },
    "image": "https://res.cloudinary.com/dsalyp6sj/image/upload/v1661467150/ecom/D_NQ_NP_2X_627008-MLA46481261873_062021-F_nu3ku3.webp",
    "stock": 1,
    "disable": false,
    "price": 460,
    "conectividad": "5G",
    "category": 1
  }, {
    "id": 43,
    "title": "Xiaomi Pocophone Poco X4 Pro 5G Dual SIM 128 GB laser black 6 GB ram",
    "rating": 4.0,
    "detail": {
      "detail": "Fotografía profesional en tu bolsillo. Descubrí infinitas posibilidades para tus fotos con las 3 cámaras principales de tu equipo. Poné a prueba tu creatividad y jugá con la iluminación, diferentes planos y efectos para obtener grandes resultados. Además, el dispositivo cuenta con cámara frontal de 20 Mpx para que puedas sacarte divertidas selfies o hacer videollamadas. Mirá tus series y películas favoritas con la mejor definición a través de su pantalla AMOLED de 6.67 pulgadas. Disfrutá de colores brillantes y detalles precisos en todos tus contenidos.",
      "marca": "Xiaomi",
      "modelo": "Poco X4 Pro 5G",
      "so": "Android 11",
      "cpu": "2x2.2 GHz Kryo 660 Gold",
      "ram": "6 GB",
      "color": "Black",
      "pantalla": "6.67"
    },
    "image": "https://res.cloudinary.com/dsalyp6sj/image/upload/v1661467177/ecom/D_NQ_NP_2X_782725-MLA49423195235_032022-F_k01akg.webp",
    "stock": 7,
    "disable": false,
    "price": 469,
    "conectividad": "5G",
    "category": 1
  }, {
    "id": 44,
    "title": "Xiaomi Redmi K40 Gaming Edition Dual SIM 256 GB gray 12 GB ram",
    "rating": 4.8,
    "detail": {
      "detail": "Fotografía profesional en tu bolsillo. Descubrí infinitas posibilidades para tus fotos con las 3 cámaras principales de tu equipo. Poné a prueba tu creatividad y jugá con la iluminación, diferentes planos y efectos para obtener grandes resultados.. Además, el dispositivo cuenta con cámara frontal de 16 Mpx para que puedas sacarte divertidas selfies o hacer videollamadas. Con su potente procesador y memoria ram de 12 GB tu equipo alcanzará un alto rendimiento con gran velocidad de transmisión de contenidos y ejecutará múltiples aplicaciones a la vez sin demoras.",
      "marca": "Xiaomi",
      "modelo": "K40 Gaming Edition",
      "so": "Android 11",
      "cpu": "4x2 GHz Cortex-A55",
      "ram": "12 GB",
      "color": "Gray",
      "pantalla": "6.67"
    },
    "image": "https://res.cloudinary.com/dsalyp6sj/image/upload/v1661467198/ecom/D_NQ_NP_2X_932890-MLA48554022561_122021-F_gwimm8.webp",
    "stock": 7,
    "disable": false,
    "price": 519,
    "conectividad": "5G",
    "category": 1
  }, {
    "id": 45,
    "title": "Xiaomi Redmi Note 8 2021 Dual SIM 64 GB neptuno azul 4 GB ram",
    "rating": 4.8,
    "detail": {
      "detail": "Fotografía profesional en tu bolsillo. Descubrí infinitas posibilidades para tus fotos con las 4 cámaras principales de tu equipo. Poné a prueba tu creatividad y jugá con la iluminación, diferentes planos y efectos para obtener grandes resultados. Su memoria ram de 4 GB permite que tu smartphone funcione de manera fluida y sin demoras al realizar distintas tareas, jugar o navegar. Máxima seguridad para que solo vos puedas acceder al equipo. Podrás elegir entre el sensor de huella dactilar para habilitar el teléfono en un toque, o el reconocimiento facial que permite un desbloqueo hasta un 30% más rápido.",
      "marca": "Xiaomi",
      "modelo": "Note 8 2021",
      "so": "Android 11",
      "cpu": "6x1.8 GHz Cortex-A55",
      "ram": "4 GB",
      "color": "Gray",
      "pantalla": "6.3"
    },
    "image": "https://res.cloudinary.com/dsalyp6sj/image/upload/v1661467221/ecom/D_NQ_NP_2X_616304-MLA47208005375_082021-F_et7xv4.webp",
    "stock": 10,
    "disable": false,
    "price": 320,
    "conectividad": "5G",
    "category": 1
  },
  {
    "id": 46,
    "title": "Lenovo 82H00013LM Tablet Ideapad D330-10IGM",
    "rating": 4.7,
    "detail": {
      "detail": "De las mas delgadas y economicas del mercado, justo para estudiantes con un costo beneficio excelente",
      "marca": "Lenovo",
      "modelo": "D330-10IGM",
      "so": "windows 10",
      "cpu": "Celeron N4020",
      "ram": "8 gb",
      "color": "Silver",
      "pantalla": "10.1"
    },
    "image": "https://res.cloudinary.com/dsalyp6sj/image/upload/v1661467257/ecom/41_I5GmZcBL._AC_SY300_SX300__id7mbg.jpg",
    "stock": 10,
    "disable": false,
    "price": 320,
    "conectividad": "Wi-Fi",
    "category": 2
  },
  {
    "id": 47,
    "title": "Lenovo Laptop IdeaPad 3-14ITL ",
    "rating": 4.0,
    "detail": {
      "detail": "Equipo ideal y basico para estudiantes, con gran capacidad de memoria, la combinación perfecta de rendimiento y versatilidad",
      "marca": "Lenovo",
      "modelo": "IdeaPad 3-15ITL",
      "so": "windows 10",
      "cpu": "Intel Core i3",
      "ram": "8 gb",
      "color": "Silver",
      "pantalla": "14"
    },
    "image": "https://res.cloudinary.com/dsalyp6sj/image/upload/v1661467274/ecom/61ST0gpYFPL._AC_SX522__ojinkc.jpg",
    "stock": 15,
    "disable": false,
    "price": 479.50,
    "conectividad": "Wi-Fi",
    "category": 2
  },
  {
    "id": 48,
    "title": "Laptop Lenovo pantalla 15.6 táctil HD",
    "rating": 5.0,
    "detail": {
      "detail": "Ejecuta al mismo tiempo varios programas exigentes o juega hasta los últimos títulos AAA. Disfruta de una velocidad e inteligencia sin igual que harán que tu experiencia sea rápida, fluida y sencilla, con la gran nitidez de imágenes que brinda la tarjeta gráfica integrada opcional Inte",
      "marca": "Lenovo",
      "modelo": "IdeaPad 3-15ITL05",
      "so": "windows 10",
      "cpu": "Intel UHD Graphics",
      "ram": "8gb", "color": "Silver",
      "pantalla": "15.1"
    },
    "image": "https://res.cloudinary.com/dsalyp6sj/image/upload/v1661467274/ecom/61ST0gpYFPL._AC_SX522__ojinkc.jpg",
    "stock": 8,
    "disable": false,
    "price": 432,
    "conectividad": "Wi-Fi",
    "category": 2
  },
  {
    "id": 49,
    "title": "Lenovo Legion 5 Computadora portátil para juegos,",
    "rating": 5.0,
    "detail": {
      "detail": "Equipo de alto rendimiento con graficos NVIDIA GetForce, pantalla antireflejos. ideal para Juegos y con teclado Legion de alta precision. Todo lo que necesitas para divertirte y ser productivo",
      "marca": "Lenovo",
      "modelo": "Legion 5",
      "so": "windows 10",
      "cpu": "AMD Ryzen 5 ",
      "ram": "32 gb",
      "color": "Black",
      "pantalla": "15.6"
    },
    "image": "https://res.cloudinary.com/dsalyp6sj/image/upload/v1661467408/ecom/41nznX70ODL._AC__nuraip.jpg",
    "stock": 9,
    "disable": false,
    "price": 498,
    "conectividad": "Wi-Fi 6",
    "category": 2
  },
  {
    "id": 50,
    "title": "Electronics Laptop Lenovo ThinkPad E15",
    "rating": 5.0,
    "detail": {
      "detail": "ESTÉTICA Y COMODIDAD. La ThinkPad E15 de 2da Gen llévatela a cualquier parte, es liviana y fácil de llevar. Tecnologia de vanguardia de ultima generación con lo que consigues un mayor rendimiento para las tareas en el trabajo.",
      "marca": "Lenovo",
      "modelo": "ThinkPad E15 2G",
      "so": "windows 11 pro",
      "cpu": "Intel Iris Xe Graphics",
      "ram": "16 gb",
      "color": "Black",
      "pantalla": "15.6"
    },
    "image": "https://res.cloudinary.com/dsalyp6sj/image/upload/v1661467635/ecom/51CFVDBG71L._AC_SX522__zcjc2t.jpg",
    "stock": 8,
    "disable": false,
    "price": 1299,
    "conectividad": "Wi-Fi 6",
    "category": 2
  },
  {
    "id": 51,
    "title": "Acer Laptop Aspire 3 A315-34-C1F5",
    "rating": 4.0,
    "detail": {
      "detail": "El dispositivo cuenta con una pantalla de 15.6 pulgadas, disfruta de colores intensos y mayor nitidez en todos tus contenidos. Permite realizar distintas tareas.",
      "marca": "Acer",
      "modelo": " 3 A315-34-C1F5",
      "so": "windows 10",
      "cpu": "Celeron N4020",
      "ram": "4 gb",
      "color": "Black",
      "pantalla": "15.6"
    },
    "image": "https://res.cloudinary.com/dsalyp6sj/image/upload/v1661467653/ecom/51q12xWfifL._AC_SX522__wq0kb7.jpg",
    "stock": 12,
    "disable": false,
    "price": 244.95,
    "conectividad": "Wi-Fi",
    "category": 2
  },
  {
    "id": 52,
    "title": "Acer Aspire 5 A515-56-36UT Slim Laptop",
    "rating": 4.0,
    "detail": {
      "detail": "El Aspire 5 incluye mucha potencia en el diseño portátil para satisfacer las necesidades multitarea de usted y su familia. El potente procesador Intel Core i3 de 11.ª generación es ideal para juegos ligeros, productividad y tareas de trabajo. Disfruta de la edición de fotos y vídeo en la pantalla Full HD de 15,6",
      "marca": "Acer",
      "modelo": "A15-56-36UT",
      "so": "windows 10",
      "cpu": "Intel Core i3",
      "ram": "4 gb",
      "color": "Silver",
      "pantalla": "15.6"
    },
    "image": "https://res.cloudinary.com/dsalyp6sj/image/upload/v1661467670/ecom/71233PTgAjL._AC_SX522__opfnuk.jpg",
    "stock": 10,
    "disable": false,
    "price": 406,
    "conectividad": "Wi-Fi",
    "category": 2
  },
  {
    "id": 53,
    "title": "Acer Nitro 5 Gaming Laptop",
    "rating": 5.0,
    "detail": {
      "detail": "La nitro cuenta con un procesador de 10a generación, con pantalla panoramica con retroiluminacion LED, grafico Nvidia GetForce que la hace perfecta para juegos, teclado retro iluminado",
      "marca": "Acer",
      "modelo": "AN515-55-59KS",
      "so": "windows 10 Home",
      "cpu": " Intel Core i5-10300H",
      "ram": "8 gb",
      "color": "Negra con teclado en Rojo",
      "pantalla": "15.6"
    },
    "image": "https://res.cloudinary.com/dsalyp6sj/image/upload/v1661467693/ecom/81Z8NvO2TFL._AC_SX522__edpvrw.jpg",
    "stock": 12,
    "disable": false,
    "price": 998.95,
    "conectividad": "Wi-Fi",
    "category": 2
  },
  {
    "id": 54,
    "title": "Predator Helios 300 PH315-54-760S Laptop para juegos ",
    "rating": 5.0,
    "detail": {
      "detail": "Rendimiento extremo: aplasta a la competencia con la impresionante potencia y velocidad del procesador Intel Core i7-11800H de 11ª generación, con 8 núcleos y 16 hilos para dividir y conquistar cualquier tarea o ejecutar tus juegos más intensivos,pantalla ultrarrápida: Esta pantalla IPS Full HD (1920 x 1080) con retroiluminación LED",
      "marca": "Acer",
      "modelo": "PH315-54-760S",
      "so": "windows 11 Home",
      "cpu": "Intel Core i7-11800H ",
      "ram": "16 gb",
      "color": "Black",
      "pantalla": "15.6"
    },
    "image": "https://res.cloudinary.com/dsalyp6sj/image/upload/v1661467710/ecom/71nz3cIcFOL._AC_SX522__wojlkr.jpg",
    "stock": 15,
    "disable": false,
    "price": 1670,
    "conectividad": "Killer WiFi 6",
    "category": 2
  },
  {
    "id": 55,
    "title": "MSI GL66 - Laptop para Juegos",
    "rating": 5.0,
    "detail": {
      "detail": "Gran pantalla de 15.6 pulgadas con imagenes realistas de actualización rapida, gran potencia para enfrentarse a cualquier juego y aplicación, con teclas personalizadas.",
      "marca": "Acer",
      "modelo": "Pulse GL66 11UGK-001",
      "so": "windows 10 Home",
      "cpu": "Intel Core i7",
      "ram": "16 gb",
      "color": "Black",
      "pantalla": "15.6"
    },
    "image": "https://res.cloudinary.com/dsalyp6sj/image/upload/v1661467748/ecom/61Ze2wc9nyS._AC_SX522__tzs3a8.jpg",
    "stock": 12,
    "disable": false,
    "price": 1899,
    "conectividad": "Wi-Fi",
    "category": 2
  },
  {
    "id": 56,
    "title": "Laptop Latitude E5400",
    "rating": 4.0,
    "detail": {
      "detail": "Equipo con un procesador intel de 8a generacion, lo que la hace rendidora para trabajar en la escuela u oficina, Memoria ram mayor a las del mercado",
      "marca": "Dell",
      "modelo": "Latitude E5400",
      "so": "windows 10 pro",
      "cpu": "Intel Core i7-8665U",
      "ram": "16 gb",
      "color": "Gray",
      "pantalla": "14"
    },
    "image": "https://res.cloudinary.com/dsalyp6sj/image/upload/v1661467770/ecom/61DocMRdvyL._AC_SX522__srtokl.jpg",
    "stock": 19,
    "disable": false,
    "price": 352.55,
    "conectividad": "Wi-Fi",
    "category": 2
  },
  {
    "id": 57,
    "title": "Laptop Inspiron 3501",
    "rating": 4.2,
    "detail": {
      "detail": "Cuenta con una pantalla de borde estrecho no táctil antirreflejo con retroiluminación LED, con disco solido de alta velocidad que combinada con su procesador y memoria ram, la hacen la opcion perfecta de compra",
      "marca": "Dell",
      "modelo": "Inspiron",
      "so": "windows 10",
      "cpu": "Intel Core i3",
      "ram": "8 gb",
      "color": "Silver",
      "pantalla": "15.6"
    },
    "image": "https://res.cloudinary.com/dsalyp6sj/image/upload/v1661467790/ecom/61kwF967nJL._AC_SX522__lmrdj2.jpg",
    "stock": 7,
    "disable": false,
    "price": 549.95,
    "conectividad": "Wi-Fi",
    "category": 2
  },
  {
    "id": 58,
    "title": "Laptop Inspiron 3501 ",
    "rating": 4.5,
    "detail": {
      "detail": "Acelera tus ideas, trabaja con extraordinaria eficiencia y disfruta de tus contenidos preferidos con el rendimiento de la Inspiron 15 3501",
      "marca": "Dell",
      "modelo": "Inspiron 3501",
      "so": "windows 10",
      "cpu": "Intel Core i7",
      "ram": "16 gb",
      "color": "plateado",
      "pantalla": "15.6"
    },
    "image": "https://res.cloudinary.com/dsalyp6sj/image/upload/v1661467790/ecom/61kwF967nJL._AC_SX522__lmrdj2.jpg",
    "stock": 20,
    "disable": false,
    "price": 1009,
    "conectividad": "Wi-Fi",
    "category": 2
  },
  {
    "id": 59,
    "title": "HP Laptop 15-eh0003la",
    "rating": 5.0,
    "detail": {
      "detail": "Una portátil con un rendimiento impresionante. Batería de larga duración incorporada, prestaciones de procesamiento multipleLa DDR4, diseñada para funcionar con más eficiencia y confiabilidad a mejores velocidades",
      "marca": "HP",
      "modelo": "15-eh0003la",
      "so": "windows 11 Home",
      "cpu": "AMD Ryzen 7",
      "ram": "16 gb",
      "color": "Gold",
      "pantalla": "15.6"
    },
    "image": "https://res.cloudinary.com/dsalyp6sj/image/upload/v1661467834/ecom/51uL8Dgxe7S.__AC_SY300_SX300_QL70_ML2__btpz12.jpg",
    "stock": 7,
    "disable": false,
    "price": 974.95,
    "conectividad": "Wi-Fi",
    "category": 2
  },
  {
    "id": 60,
    "title": "MSI GF65 Thin 10UE Gaming Laptop",
    "rating": 5.0,
    "detail": {
      "detail": "Adaptador de video RTX3060 de Nvidia, experiencia de juego definitiva, pantalla de alta definición de 15.6 pulgadas, Disco SSL",
      "marca": "MSI",
      "modelo": "GF65",
      "so": "windows 10",
      "cpu": "Intel Core i5",
      "ram": "8 gb",
      "color": "Black",
      "pantalla": "15.6"
    },
    "image": "https://res.cloudinary.com/dsalyp6sj/image/upload/v1661406158/ecom/71PnneF5LRL._AC_SX522__xx72jv.jpg",
    "stock": 14,
    "disable": false,
    "price": 1314,
    "conectividad": "Wi-Fi",
    "category": 2
  },
  {
    "id": 61,
    "title": "Tablet Samsung Galaxy Tab A A8 2022",
    "rating": 4.7,
    "detail": {
      "detail": "Esta tablet Samsung es la compañera ideal, con capacidad de sobra para cada una de tus actividades. El diseño delgado, compacto y portátil, con facilidad para sostener en una mano, lo convierte en una combinación perfecta de rendimiento y versatilidad. Transferir, sincronizar y acceder a tus dispositivos las veces que quieras ahora es posible. Sus conexiones wi-fi, bluetooth, usb-c 2.0, wi-fi direct te permiten potenciar sus funciones al máximo. Gracias a su cámara principal de 8 Mpx y frontal de 5 Mpx, podrás hacer videollamadas o sacarte fotos en cualquier momento y lugar, con una excelente calidad de imagen. Nitidez, brillo y colores vibrantes harán que tus experiencias se reflejen de manera óptima.",
      "marca": "Samsung",
      "modelo": "A8",
      "so": "Android 11.0",
      "cpu": "Octa-Core de 2GHz",
      "ram": "4GB",
      "color": "Silver",
      "pantalla": "8"
    },
    "image": "https://res.cloudinary.com/dsalyp6sj/image/upload/v1661467884/ecom/D_NQ_NP_684275-MLA49153411562_022022-O_xw8ylo.webp",
    "stock": 3,
    "disable": false,
    "price": 442,
    "conectividad": "USB",
    "category": 3
  },
  {
    "id": 62,
    "title": "Tablet Samsung Galaxy Tab S6 Lite SM-P610",
    "rating": 4.8,
    "detail": {
      "detail": "La Galaxy Tab S6 Lite va a ser tu gran compañía portátil para tomar notas. Con una gran pantalla de 10.4'' dentro de tamaño delgado y ligero, One UI 2 en Android y S Pen, está lista para acompañarte. Estés jugando, aprendiendo o dibujando, esta tablet está hecha para unirse a tu momento.",
      "marca": "Samsung",
      "modelo": "S6",
      "so": "Android 10.0",
      "cpu": "Quad-Core Cortex-A73, Quad-Core Cortex-A53 de 2.3GHz",
      "ram": "4GB",
      "color": "Grey",
      "pantalla": "10.4"
    },
    "image": "https://res.cloudinary.com/dsalyp6sj/image/upload/v1661468802/ecom/D_NQ_NP_795499-MLA42520536795_072020-O_kxfpup.webp",
    "stock": 1,
    "disable": false,
    "price": 671,
    "conectividad": "Wi-Fi, Wi-Fi Direct, Bluetooth, USB-C, ANT+",
    "category": 3
  },
  {
    "id": 63,
    "title": "Tablet Samsung Galaxy Tab A7 Lite SM-T220",
    "rating": 4.8,
    "detail": {
      "detail": "Esta tablet Samsung es la compañera ideal, con capacidad de sobra para cada una de tus actividades. El diseño delgado, compacto y portátil, con facilidad para sostener en una mano, lo convierte en una combinación perfecta de rendimiento y versatilidad. Transferir, sincronizar y acceder a tus dispositivos las veces que quieras ahora es posible. Sus conexiones wi-fi, wi-fi direct, bluetooth, usb-c te permiten potenciar sus funciones al máximo. Gracias a su cámara principal de 8 Mpx y frontal de 2 Mpx, podrás hacer videollamadas o sacarte fotos en cualquier momento y lugar, con una excelente calidad de imagen. Nitidez, brillo y colores vibrantes harán que tus experiencias se reflejen de manera óptima.",
      "marca": "Samsung",
      "modelo": "A7",
      "so": "Android 11.0",
      "cpu": "Octa-Core Cortex-A53 de 2.3GHz",
      "ram": "3GB",
      "color": "Grey",
      "pantalla": "8.7"
    },
    "image": "https://res.cloudinary.com/dsalyp6sj/image/upload/v1661468825/ecom/D_NQ_NP_765874-MLA47146197629_082021-O_l41tbn.webp",
    "stock": 8,
    "disable": false,
    "price": 228,
    "conectividad": "usb, cable USB-c",
    "category": 3
  },
  {
    "id": 64,
    "title": "Tablet Samsung Galaxy Tab A 2019 SM-T290",
    "rating": 4.8,
    "detail": {
      "detail": "Descubrí un compañero práctico con la Galaxy Tab A (8.0 ”, 2019), una tablet que sobresale de lo básico y agrega mucho más. Con un diseño fácil de llevar con una sola mano, es delgada, compacta y portátil, la combinación ideal de rendimiento, diseño y accesibilidad.",
      "marca": "Samsung",
      "modelo": "A",
      "so": "Android Pie",
      "cpu": "Quad-Core de 2GHz.",
      "ram": "2GB",
      "color": "Grey",
      "pantalla": "8"
    },
    "image": "https://res.cloudinary.com/dsalyp6sj/image/upload/v1661468844/ecom/D_NQ_NP_882575-MLA42902471570_072020-O_bfojek.webp",
    "stock": 7,
    "disable": false,
    "price": 324,
    "conectividad": "Bluetooth, USB, Wi-Fi, Wi-Fi Direct",
    "category": 3
  },
  {
    "id": 65,
    "title": "Tablet Samsung Galaxy Tab S7+ SM-T970",
    "rating": 4.9,
    "detail": {
      "detail": "Esta tablet Samsung es la compañera ideal, con capacidad de sobra para cada una de tus actividades. El diseño delgado, compacto y portátil, con facilidad para sostener en una mano, lo convierte en una combinación perfecta de rendimiento y versatilidad. Transferir, sincronizar y acceder a tus dispositivos las veces que quieras ahora es posible. Sus conexiones bluetooth, wi-fi, wi-fi direct, usb-c te permiten potenciar sus funciones al máximo. Capturá todos tus momentos al instante Gracias a sus cámaras principales de 13 Mpx, 5 Mpx y su cámara frontal de 8 Mpx, podrás hacer videollamadas o sacarte fotos en cualquier momento y lugar, con una excelente calidad de imagen. Nitidez, brillo y colores vibrantes, harán que tus experiencias se reflejen de manera óptima.",
      "marca": "Samsung",
      "modelo": "S7+",
      "so": "Android 10.0",
      "cpu": "Octa-Core Qualcomm Kryo 585 de 3.09GHz",
      "ram": "8GB",
      "color": "Black",
      "pantalla": "12.4"
    },
    "image": "https://res.cloudinary.com/dsalyp6sj/image/upload/v1661468869/ecom/D_NQ_NP_710925-MLA45377263029_032021-O_f4ckq2.webp",
    "stock": 4,
    "disable": false,
    "price": 1475,
    "conectividad": "Bluetooth, Wi-Fi, Wi-Fi Direct, USB-C",
    "category": 3
  },
  {
    "id": 66,
    "title": "Tablet Samsung Tab S8 S8 Ultra SM-X900",
    "rating": 4.7,
    "detail": {
      "detail": "Esta tablet Samsung es la compañera ideal, con capacidad de sobra para cada una de tus actividades. El diseño delgado, compacto y portátil, con facilidad para sostener en una mano, lo convierte en una combinación perfecta de rendimiento y versatilidad. Transferir, sincronizar y acceder a tus dispositivos las veces que quieras ahora es posible. Sus conexiones bluetooth, wi-fi, wi-fi direct, usb-c te permiten potenciar sus funciones al máximo. Capturá todos tus momentos al instante Gracias a sus cámaras principales de 13 Mpx, 5 Mpx y su cámara frontal de 8 Mpx, podrás hacer videollamadas o sacarte fotos en cualquier momento y lugar, con una excelente calidad de imagen. Nitidez, brillo y colores vibrantes, harán que tus experiencias se reflejen de manera óptima.",
      "marca": "Samsung",
      "modelo": "S8",
      "so": "Android",
      "cpu": "Cortex-X2, Tri-Core Cortex-A710, Quad-Core Cortex-A510 de 2.99GHz",
      "ram": "8GB",
      "color": "Black",
      "pantalla": "14.6"
    },
    "image": "https://res.cloudinary.com/dsalyp6sj/image/upload/v1661468892/ecom/D_NQ_NP_888357-MLA50219535100_062022-O_ymvf0k.webp",
    "stock": 1,
    "disable": false,
    "price": 2036,
    "conectividad": "USB 3.2 Gen 1, Wi-Fi Direct, Smart Switch, Wi-Fi, Bluetooth, MIMO",
    "category": 3
  },
  {
    "id": 67,
    "title": "Tablet Samsung Galaxy Tab A7 Lite",
    "rating": 4.8,
    "detail": {
      "detail": "Jugá donde quieras Disfrutá de tus películas y juegos favoritos en una amplia pantalla de 8,7 pulgadas. Los biseles reducidos ofrecen una mayor relación pantalla-cuerpo sin aumentar el tamaño de la tablet. Además, su forma compacta te brinda comodidad al usarla y ayuda a que no se te cansen las manos, incluso si jugás durante horas. Diseñada para acompañarte a todos lados Combinar estilo y comodidad ahora es posible. La Galaxy Tab A7 Lite te ofrece ambas características en un formato delgado. Además, la tablet superportátil tiene un grosor de 8,0 mm y pesa 366 g para que puedas llevarla con facilidad, sin agregar peso extra.",
      "marca": "Samsung",
      "modelo": "A7",
      "so": "Android",
      "cpu": "Cortex-X2, Tri-Core Cortex-A710, Quad-Core Cortex-A510 de 2.99GHz",
      "ram": "3GB",
      "color": "White",
      "pantalla": "8.7"
    },
    "image": "https://res.cloudinary.com/dsalyp6sj/image/upload/v1661468913/ecom/D_NQ_NP_939243-MLA48658808917_122021-O_qnecvo.webp",
    "stock": 9,
    "disable": false,
    "price": 228,
    "conectividad": "Wi-Fi,Wi-Fi Direct,Bluetooth,USB-C",
    "category": 3
  },
  {
    "id": 68,
    "title": "Tablet Samsung Galaxy Tab A8",
    "rating": 4.5,
    "detail": {
      "detail": "Una visión del mundo a lo grande Su pantalla de 10,5 de ancho cuenta con un marco simétrico de solo 10,2 mm para que te sumerjas de lleno en tus contenidos favoritos. Clásica y moderna, ¡lo tiene todo! Con una estética jovial y un toque de frescura, nuestra Galaxy Tab A8 desprende un aura vibrante y una apariencia juvenil. Su elegante cuerpo metálico, que presenta un perfil ultrafino de tan solo 6,9 mm, da lugar al diseño característico de las tablets Samsung",
      "marca": "Samsung",
      "modelo": "A8",
      "so": "Android 11.0",
      "cpu": "Quad-Core Cortex-A73, Quad-Core Cortex-A53 de 2.3GHz",
      "ram": "4GB",
      "color": "Black",
      "pantalla": "10.5"
    },
    "image": "https://res.cloudinary.com/dsalyp6sj/image/upload/v1661468934/ecom/D_NQ_NP_757891-MLA48886951265_012022-O_uaiema.webp",
    "stock": 14,
    "disable": false,
    "price": 442,
    "conectividad": "Wi-Fi,Bluetooth,USB-C 2.0,Wi-Fi Direct",
    "category": 3
  },
  {
    "id": 69,
    "title": "Tablet Samsung Galaxy Tab A Sm-t290",
    "rating": 4.9,
    "detail": {
      "detail": "La Tab A es tu compañera ideal, con capacidad de sobra para cada una de tus actividades. Su diseño, fácil de sostener con una sola mano, es delgado, compacto y portátil; una combinación perfecta de rendimiento y versatilidad.",
      "marca": "Samsung",
      "modelo": "A",
      "so": "Android 11.0",
      "cpu": "Quad-Core de 2GHz.",
      "ram": "2GB",
      "color": "Black",
      "pantalla": "8"
    },
    "image": "https://res.cloudinary.com/dsalyp6sj/image/upload/v1661468954/ecom/D_NQ_NP_910953-MLA45078386265_032021-O_w6hnpz.webp",
    "stock": 20,
    "disable": false,
    "price": 324,
    "conectividad": "Bluetooth,USB,Wi-Fi,Wi-Fi Direct",
    "category": 3
  },
  {
    "id": 70,
    "title": "Tablet Samsung Galaxy Tab A7 Lite Sm-t220",
    "rating": 4.0,
    "detail": {
      "detail": "Jugá donde quieras Disfrutá de tus películas y juegos favoritos en una amplia pantalla de 8,7 pulgadas. Los biseles reducidos ofrecen una mayor relación pantalla-cuerpo sin aumentar el tamaño de la tablet. Además, su forma compacta te brinda comodidad al usarla y ayuda a que no se te cansen las manos, incluso si jugás durante horas. Diseñada para acompañarte a todos lados Combinar estilo y comodidad ahora es posible. La Galaxy Tab A7 Lite te ofrece ambas características en un formato delgado. Además, la tablet superportátil tiene un grosor de 8,0 mm y pesa 366 g para que puedas llevarla con facilidad, sin agregar peso extra.",
      "marca": "Samsung",
      "modelo": "A7",
      "so": "Android 11.0",
      "cpu": "Quad-Core de 2GHz.",
      "ram": "3GB",
      "color": "Silver",
      "pantalla": "8.7"
    },
    "image": "https://res.cloudinary.com/dsalyp6sj/image/upload/v1661468971/ecom/D_NQ_NP_715404-MLA49333054220_032022-O_rrpihk.webp",
    "stock": 5,
    "disable": false,
    "price": 228,
    "conectividad": "Wi-Fi,Wi-Fi Direct,Bluetooth,USB-C",
    "category": 3
  },
  {
    "id": 71,
    "title": "Tablet Samsung Galaxy Tab S6 Lite",
    "rating": 4.7,
    "detail": {
      "detail": "La Galaxy Tab S6 Lite va a ser tu gran compañía portátil para tomar notas. Con una gran pantalla de 10.4'' dentro de tamaño delgado y ligero, One UI 2 en Android y S Pen, está lista para acompañarte. Estés jugando, aprendiendo o dibujando, esta tablet está hecha para unirse a tu momento.",
      "marca": "Samsung",
      "modelo": "S6",
      "so": "Android 10.0",
      "cpu": "Octa-Core",
      "ram": "4GB",
      "color": "Grey",
      "pantalla": "10.4"
    },
    "image": "https://res.cloudinary.com/dsalyp6sj/image/upload/v1661469357/ecom/D_NQ_NP_689767-MLA43675157500_102020-O_b3ags7.webp",
    "stock": 5,
    "disable": false,
    "price": 818,
    "conectividad": "ANT+,Bluetooth,USB,Wi-Fi,Wi-Fi Direct",
    "category": 3
  },
  {
    "id": 72,
    "title": "Samsung Galaxy Tab Active 3 ",
    "rating": 4.8,
    "detail": {
      "detail": "Galaxy Tab Active3 cuenta con un diseño resistente al agua, polvo y a caídas de más 1,5 metros, ideal para afrontar el día a día. Además, cuenta con batería reemplazable, NFC mejorado y Samsung Dex, para mejorar la productividad. Es una herramienta ideal para el trabajo gracias a sus ajustes de sensibilidad táctil, Active Key y S Pen.",
      "marca": "Samsung",
      "modelo": "Tab Active 3",
      "so": "Android",
      "cpu": "Octa-Core",
      "ram": "4GB",
      "color": "Black",
      "pantalla": "8"
    },
    "image": "https://res.cloudinary.com/dsalyp6sj/image/upload/v1661469386/ecom/D_NQ_NP_641773-MLA47631270935_092021-O_sgxdr9.webp",
    "stock": 16,
    "disable": false,
    "price": 146,
    "conectividad": "ANT+,Bluetooth,USB,Wi-Fi,Wi-Fi Direct",
    "category": 3
  },
  {
    "id": 73,
    "title": "Tablet Samsung Galaxy Tab E Sm-t560 ",
    "rating": 4.7,
    "detail": {
      "detail": "Su sistema operativo Android 4.4 KitKat permitirá mejorar el rendimiento de tu tablet optimizando la memoria y dando mayor fluidez a su pantalla táctil de 9.6 pulgadas. Podrás trabajar en dos aplicaciones simultáneamente gracias al modo de pantalla dividida y el multitareas mejorado. Además, podrás controlar las actividades de los más pequeños con el Kids Mode.",
      "marca": "Samsung",
      "modelo": "E",
      "so": "Android 4.4.4",
      "cpu": "Quad-Core Cortex-A7",
      "ram": "2GB",
      "color": "White",
      "pantalla": "9.6"
    },
    "image": "https://res.cloudinary.com/dsalyp6sj/image/upload/v1661469404/ecom/D_NQ_NP_869210-MLA50161052611_062022-O_rzkp3a.webp",
    "stock": 2,
    "disable": false,
    "price": 184,
    "conectividad": "Bluetooth,USB,Wi-Fi",
    "category": 3
  },
  {
    "id": 74,
    "title": "Samsung Galaxy Tab S7",
    "rating": 4.5,
    "detail": {
      "detail": "Su sistema operativo Android 4.4 KitKat permitirá mejorar el rendimiento de tu tablet optimizando la memoria y dando mayor fluidez a su pantalla táctil de 9.6 pulgadas. Podrás trabajar en dos aplicaciones simultáneamente gracias al modo de pantalla dividida y el multitareas mejorado. Además, podrás controlar las actividades de los más pequeños con el Kids Mode.",
      "marca": "Samsung",
      "modelo": "S7",
      "so": "Android 11.0",
      "cpu": "Dual-Core Cortex-A77,Hexa-Core Cortex-A55",
      "ram": "6GB",
      "color": "Black",
      "pantalla": "12.4"
    },
    "image": "https://res.cloudinary.com/dsalyp6sj/image/upload/v1661469437/ecom/D_NQ_NP_788706-MLA48050493737_102021-O_nxhjsh.webp",
    "stock": 5,
    "disable": false,
    "price": 1328,
    "conectividad": "Bluetooth,USB,Wi-Fi",
    "category": 3
  },
  {
    "id": 75,
    "title": "Tablet Samsung Galaxy Tab A 2019 SM-T510",
    "rating": 4.9,
    "detail": {
      "detail": "Esta tablet Samsung es la compañera ideal, con capacidad de sobra para cada una de tus actividades. El diseño delgado, compacto y portátil, con facilidad para sostener en una mano, lo convierte en una combinación perfecta de rendimiento y versatilidad.",
      "marca": "Samsung",
      "modelo": "A",
      "so": "Android 9.0",
      "cpu": "Octa-Core de 1.8GHz",
      "ram": "2",
      "color": "Black",
      "pantalla": "10.1"
    },
    "image": "https://res.cloudinary.com/dsalyp6sj/image/upload/v1661469456/ecom/D_NQ_NP_941627-MLA42924518202_072020-O_diwwnm.webp",
    "stock": 6,
    "disable": false,
    "price": 812,
    "conectividad": "Bluetooth,USB,Wi-Fi",
    "category": 3
  },
  {
    "id": 76,
    "title": "Apple Watch - Serie 7 con GPS y caja de aluminio color rojo de 1.61 pulgadas con correa deportiva color rojo, tamaño regular",
    "rating": 3.7,
    "detail": {
      "detail": "Monitor de actividad, monitor de ritmo cardíaco, monitor de sueño, oxígeno en sangre.",
      "marca": "Apple",
      "modelo": "Apple Watch Series 7",
      "so": "",
      "cpu": "",
      "ram": "",
      "color": "Pink",
      "pantalla": "4"
    },
    "image": "https://res.cloudinary.com/dsalyp6sj/image/upload/v1661469477/ecom/711BW6zqs0L._AC_SX679__u9tjjw.jpg",
    "stock": 12,
    "disable": false,
    "price": 315.84,
    "conectividad": "USB",
    "category": 4
  },
  {
    "id": 77,
    "title": "AMSUNG Galaxy Watch 4",
    "rating": 1.8,
    "detail": {
      "detail": "Time Display, Sleep Monitor, Text Messaging, GPS",
      "marca": "Samsung",
      "modelo": "Samsung Galaxy",
      "so": "",
      "cpu": "",
      "ram": "",
      "color": "Negro",
      "pantalla": "4"
    },
    "image": "https://res.cloudinary.com/dsalyp6sj/image/upload/v1661469494/ecom/61aCopNtt7L._AC_SX679__z744ug.jpg",
    "stock": 12,
    "disable": false,
    "price": 199.99,
    "conectividad": "Bluetooth",
    "category": 4
  },
  {
    "id": 78,
    "title": "Accutime Microsoft Minecraft",
    "rating": 1.5,
    "detail": {
      "detail": "Accutime Microsoft Minecraft Green - Reloj inteligente educativo con pantalla táctil para niños, niñas, niños pequeños, cámara selfie, juegos de aprendizaje, alarma, calculadora, podómetro y más (modelo: MIN4045AZ), forro polar verde con licencia oficial de star wars silent one crew., 40mm, Moderno",
      "marca": "Microsoft",
      "modelo": "Minecraft",
      "so": "",
      "cpu": "",
      "ram": "",
      "color": "",
      "pantalla": "1.35"
    },
    "image": "https://res.cloudinary.com/dsalyp6sj/image/upload/v1661469518/ecom/61dfuJcPnEL._AC_UY741__rlckbs.jpg",
    "stock": 10,
    "disable": false,
    "price": 34.99,
    "conectividad": "USB",
    "category": 4
  },
  {
    "id": 79,
    "title": "Apple Watch Series 3",
    "rating": 1.4,
    "detail": {
      "detail": "El producto está reacondicionado, es totalmente funcional y se encuentra en excelente estado. Respaldado por la garantía de Amazon Renewed de 90 días.",
      "marca": "Apple",
      "modelo": "Apple Watch Series 3",
      "so": "",
      "cpu": "",
      "ram": "",
      "color": "",
      "pantalla": "4"
    },
    "image": "https://res.cloudinary.com/dsalyp6sj/image/upload/v1661469536/ecom/71DvR4Ji95L._AC_SX679__ghlbwy.jpg",
    "stock": 2,
    "disable": false,
    "price": 239.36,
    "conectividad": "USB",
    "category": 4
  },
  {
    "id": 80,
    "title": "Garmin 010-02173-11 Venu",
    "rating": 4.6,
    "detail": {
      "detail": "Garmin 010-02173-11 Venu, GPS SmartWatch con pantalla táctil brillante, presenta música, monitoreo de energía corporal, entrenamientos animados, sensor de buey de pulso y más, negro",
      "marca": "Garmin",
      "modelo": "010-02173-11 Venu",
      "so": "",
      "cpu": "",
      "ram": "",
      "color": "",
      "pantalla": "1.3"
    },
    "image": "https://res.cloudinary.com/dsalyp6sj/image/upload/v1661469553/ecom/51kyjYuOZhL._AC_SL1000__iuqltj.jpg",
    "stock": 12,
    "disable": false,
    "price": 227.49,
    "conectividad": "USB",
    "category": 4
  },
  {
    "id": 81,
    "title": "Apple Series 3 Watch",
    "rating": 4.5,
    "detail": {
      "detail": "Altavoz, Aplicación deportiva, Asistente virtual, Calculadora, Calendario, Clima, Control de ciclo menstrual, Cronómetro, Distancia recorrida, Emergencia soS, Encuentra mi teléfono, Gestión de llamadas, Gestión de mensajes, Medidor de frecuencia cardíaca, Monitor de sueño, Notificaciones, Pagos, Recordatorio anti sedentarismo, Recordatorios, Relajación, Reproducción de música, Walkie-talkie",
      "marca": "Apple",
      "modelo": "Watch (GPS) serie 3",
      "so": "watchOS 8",
      "cpu": "",
      "ram": "8 GB",
      "color": "white",
      "pantalla": "4"
    },
    "image": "https://res.cloudinary.com/dsalyp6sj/image/upload/v1661469570/ecom/D_NQ_NP_2X_733035-MLA46397466792_062021-F_y7hcf4.webp",
    "stock": 12,
    "disable": false,
    "price": 479.54,
    "conectividad": "Bluetooth",
    "category": 4
  },
  {
    "id": 82,
    "title": "Xiaomi Mi Smart Band 6",
    "rating": 3.5,
    "detail": {
      "detail": "Alarma, Alerta de vibración, Aplicación deportiva, Calendario, Capturador de fotos remoto, Clima, Consumo de calorías, Control de ciclo menstrual, Control de música, Cronómetro, Cuenta pasos, Distancia recorrida, Encuentra mi smartwatch, Encuentra mi teléfono, Medidor de frecuencia cardíaca, Medidor de oxígeno, Monitor de sueño, Notificaciones, Recibir mensajes, Recordatorio anti sedentarismo, Recordatorios, Redes sociales, Relajación, Temporizador, Velocidad, Visualizar llamadas",
      "marca": "Xiaomi",
      "modelo": "Mi Smart Band 6",
      "so": "",
      "cpu": "",
      "ram": "",
      "color": "black",
      "pantalla": "1.56"
    },
    "image": "https://res.cloudinary.com/dsalyp6sj/image/upload/v1661469589/ecom/D_NQ_NP_2X_917772-MLA46164931649_052021-F_bqcrhr.webp",
    "stock": 12,
    "disable": false,
    "price": 58.24,
    "conectividad": "USB,Bluetooth",
    "category": 4
  },
  {
    "id": 83,
    "title": "Huawei Fit TIA-B09",
    "rating": 4.7,
    "detail": {
      "detail": "Alarma, Alerta de vibración, Aplicación deportiva, Calendario, Clima, Consumo de calorías, Cronómetro, Cuenta pasos, Distancia recorrida, Encuentra mi teléfono, Linterna, Medidor de frecuencia cardíaca, Medidor de oxígeno, Monitor de sueño, Notificaciones, Recibir mensajes, Recordatorio anti sedentarismo, Recordatorios, Redes sociales, Relajación, Temporizador, Visualizar llamadas",
      "marca": "Huawei",
      "modelo": "Fit TIA-B09",
      "so": "iOS 9.0, Android 5.0",
      "cpu": "",
      "ram": "",
      "color": "black",
      "pantalla": "1.64"
    },
    "image": "https://res.cloudinary.com/dsalyp6sj/image/upload/v1661469607/ecom/D_NQ_NP_2X_771823-MLA45810691826_052021-F_rbwubg.webp",
    "stock": 12,
    "disable": false,
    "price": 162.3,
    "conectividad": "USB,Bluetooth",
    "category": 4
  },
  {
    "id": 84,
    "title": "Xiaomi Redmi Watch 2 Lite In-ear",
    "rating": 4.7,
    "detail": {
      "detail": "Alarma, Aplicación deportiva, Brújula, Calendario, Clima, Consumo de calorías, Control de ciclo menstrual, Control de música, Cuenta pasos, Encuentra mi teléfono, Medidor de frecuencia cardíaca, Medidor de oxígeno, Monitor de sueño, Recibir mensajes, Recordatorio anti sedentarismo, Relajación, Temporizador, Visualizar llamadas",
      "marca": "Xiaomi",
      "modelo": "Redmi Watch 2 Lite",
      "so": "Android 6.0, iOS 10.0",
      "cpu": "",
      "ram": "",
      "color": "white",
      "pantalla": "2"
    },
    "image": "https://res.cloudinary.com/dsalyp6sj/image/upload/v1661469627/ecom/D_NQ_NP_2X_799200-MLA49011477414_022022-F_nabddp.webp",
    "stock": 12,
    "disable": false,
    "price": 106.96,
    "conectividad": "USB",
    "category": 4
  },
  {
    "id": 85,
    "title": "Auriculares in-ear Motorola Earbuds 2",
    "rating": 4.6,
    "detail": {
      "detail": "Con micrófono incorporado-sonido superior y sin límites.Cómodos y prácticos.",
      "marca": "Motorola",
      "modelo": "Earbuds 2",
      "so": "",
      "cpu": "",
      "ram": "",
      "color": "white",
      "pantalla": ""
    },
    "image": "https://res.cloudinary.com/dsalyp6sj/image/upload/v1661469643/ecom/D_NQ_NP_2X_780004-MLA41188556823_032020-F_kmnhwb.webp",
    "stock": 12,
    "disable": false,
    "price": 14.68,
    "conectividad": "USB",
    "category": 4
  },
  {
    "id": 86,
    "title": "Apple AirPods con estuche de carga inalámbrica In-ear",
    "rating": 4.6,
    "detail": {
      "detail": "Los AirPods te brindan una experiencia inalámbrica inigualable con un sonido de alta calidad, acceso a Siri (1) activado por voz. Gracias al estuche de carga inalámbrica, sólo tienes que colocar los audífonos sobre una base de carga para cargar su batería. Los AirPods están listos para funcionar con todos tus dispositivos (2). Póntelos y se conectarán al instante, como por arte de magia",
      "marca": "Apple",
      "modelo": "AirPods with wireless charging case (2nd generation)",
      "so": "",
      "cpu": "",
      "ram": "",
      "color": "white",
      "pantalla": ""
    },
    "image": "https://res.cloudinary.com/dsalyp6sj/image/upload/v1661469677/ecom/D_NQ_NP_2X_776908-MLA46302567710_062021-F_nuym6g.webp",
    "stock": 12,
    "disable": false,
    "price": 191.8,
    "conectividad": "USB,Bluetooth",
    "category": 4
  },
  {
    "id": 87,
    "title": "Auriculares in-ear gamer inalámbricos Xiaomi Redmi Buds 3 Lite",
    "rating": "2.4",
    "detail": {
      "detail": "Control de llamadas, Control de canciones, Control de modo de baja latencia, Play",
      "marca": "Xiaomi",
      "modelo": "Redmi Buds 3 Lite",
      "so": "",
      "cpu": "",
      "ram": "",
      "color": "black",
      "pantalla": ""
    },
    "image": "https://res.cloudinary.com/dsalyp6sj/image/upload/v1661469693/ecom/D_NQ_NP_2X_737334-MLA51162565871_082022-F_zb29dq.webp",
    "stock": 12,
    "disable": false,
    "price": 46.47,
    "conectividad": "USB,Bluetooth",
    "category": 4
  },
  {
    "id": 88,
    "title": "Auriculares in-ear inalámbricos Xiaomi Mi Earphones 2 Basic blanco",
    "rating": 3.6,
    "detail": {
      "detail": "Cuenta con tecnología True Wireless - Alcance inalámbrico de 10 m-La batería dura 5 h-Modo manos libres incluido-Con estuche de carga inalámbrica-Con micrófono incorporado-sonido superior y sin límites-Cómodos y prácticos.",
      "marca": "Xiaomi",
      "modelo": "Mi Earphones 2 Basic",
      "so": "",
      "cpu": "",
      "ram": "",
      "color": "white",
      "pantalla": ""
    },
    "image": "https://res.cloudinary.com/dsalyp6sj/image/upload/v1661469714/ecom/D_NQ_NP_2X_671211-MLA45814044235_052021-F_jwltyu.webp",
    "stock": 12,
    "disable": false,
    "price": 44.78,
    "conectividad": "USB,Bluetooth",
    "category": 4
  },
  {
    "id": 89,
    "title": "Auriculares inalámbricos sony WH-CH510 negro On-ear",
    "rating": 3.9,
    "detail": {
      "detail": "Alcance inalámbrico de 10 m-La batería dura 35 h-Modo manos libres incluido-Con micrófono incorporado-sonido superior y sin límites-Cómodos y prácticos.",
      "marca": "sony",
      "modelo": "WH-CH510",
      "so": "",
      "cpu": "",
      "ram": "",
      "color": "black",
      "pantalla": ""
    },
    "image": "https://res.cloudinary.com/dsalyp6sj/image/upload/v1661469733/ecom/D_NQ_NP_2X_933418-MLA40865317836_022020-F_itkuso.webp",
    "stock": 12,
    "disable": false,
    "price": 65.65,
    "conectividad": "USB",
    "category": 4
  },
  {
    "id": 90,
    "title": "Auriculares Philips 1000 Series TAH1205 On-ear",
    "rating": 4.5,
    "detail": {
      "detail": "Alcance inalámbrico de 10 m-La batería dura 15 h-Modo manos libres incluido-Con micrófono incorporado-sonido superior y sin límites-Cómodos y prácticos.",
      "marca": "Philips",
      "modelo": "TAH1205",
      "so": "",
      "cpu": "",
      "ram": "",
      "color": "black",
      "pantalla": "4"
    },
    "image": "https://res.cloudinary.com/dsalyp6sj/image/upload/v1661469761/ecom/D_NQ_NP_2X_856025-MLA46482186622_062021-F_rwubct.webp",
    "stock": 12,
    "disable": false,
    "price": 56.06,
    "conectividad": "USB",
    "category": 4
  },
  {
    "id": 91,
    "title": "Teclado bluetooth Apple Magic QWERTY",
    "rating": 5.9,
    "detail": {
      "detail": "",
      "marca": "Apple",
      "modelo": "Magic",
      "so": "",
      "cpu": "",
      "ram": "",
      "color": "white",
      "pantalla": ""
    },
    "image": "https://res.cloudinary.com/dsalyp6sj/image/upload/v1661469782/ecom/D_NQ_NP_2X_881724-MLA32721760966_102019-F_lykied.webp",
    "stock": 12,
    "disable": false,
    "price": 126.96,
    "conectividad": "USB",
    "category": 4
  },
  {
    "id": 92,
    "title": "Teclado gamer bluetooth Redragon Draconic K530 QWERTY Outemu Brown inglés US color blanco con luz RGB",
    "rating": 4.9,
    "detail": {
      "detail": "Distinción a todo color.Su retroiluminación le da un toque diferente a tu equipo y resalta su composición cuando es utilizado en espacios poco iluminados.Tecnología antighosting: Este dispositivo tiene teclas antighosting. Esta cualidad es indispensable si requerís de un uso intensivo del periférico. Gracias a esto podrás evitar fallas al tocar varias teclas al mismo tiempo.",
      "marca": "Redragon",
      "modelo": "Draconic K530",
      "so": "",
      "cpu": "",
      "ram": "",
      "color": "brown",
      "pantalla": ""
    },
    "image": "https://res.cloudinary.com/dsalyp6sj/image/upload/v1661469800/ecom/D_NQ_NP_2X_975008-MLA46503943203_062021-F_pndaoi.webp  ",
    "stock": 12,
    "disable": false,
    "price": 85.1,
    "conectividad": "USB",
    "category": 4
  },
  {
    "id": 93,
    "title": "Teclado gamer HyperX Alloy Elite 2 QWERTY Red español latinoamérica color negro con luz RGB",
    "rating": 4.9,
    "detail": {
      "detail": "Distinción a todo color:Suretroiluminación le da un toque diferente a tu equipo y resalta su composición cuando es utilizado en espacios poco iluminados.Tecnología antighosting.Este dispositivo tiene teclas antighosting. Esta cualidad es indispensable si requerís de un uso intensivo del periférico. Gracias a esto podrás evitar fallas al tocar varias teclas al mismo tiempo.",
      "marca": "HyperX",
      "modelo": "Alloy Elite 2",
      "so": "",
      "cpu": "",
      "ram": "",
      "color": "black",
      "pantalla": ""
    },
    "image": "https://res.cloudinary.com/dsalyp6sj/image/upload/v1661469829/ecom/D_NQ_NP_2X_929016-MLA45169314172_032021-F_pq6fyz.webp",
    "stock": 12,
    "disable": false,
    "price": 167.48,
    "conectividad": "USB",
    "category": 4
  },
  {
    "id": 94,
    "title": "Mouse inalámbrico recargable Logitech Master Series MX Master 3 grafito",
    "rating": 4.5,
    "detail": {
      "detail": "Contiene usb inalámbrico.-Puede conectarse a cualquier dispositivo a través de Bluetooth-tiliza cable-Incluye batería recargable-Posee rueda de desplazamiento-Cuenta con 7 botones para un mayor control-Con sensor óptico-Resolución de 8000dpi-Creado para llevar a todas partes-Control inteligente y navegación fácil.",
      "marca": "Logitech",
      "modelo": "Master Series MX Master 3",
      "so": "",
      "cpu": "",
      "ram": "",
      "color": "black",
      "pantalla": ""
    },
    "image": "https://res.cloudinary.com/dsalyp6sj/image/upload/v1661469846/ecom/D_NQ_NP_2X_658245-MLA43229688028_082020-F_fcxzck.webp",
    "stock": 12,
    "disable": false,
    "price": 182.62,
    "conectividad": "USB",
    "category": 4
  },
  {
    "id": 95,
    "title": "Mouse táctil inalámbrico Apple Magic A1296 blanco",
    "rating": 4.2,
    "detail": {
      "detail": "ontiene usb inalámbrico-Puede conectarse a cualquier dispositivo a través de Bluetooth-Utiliza cable-Tipo de alimentación inalámbrica: pilas-Con sensor láser-Creado para llevar a todas partes-Control inteligente y navegación fácil.",
      "marca": "Apple",
      "modelo": "Magic Mouse A1296",
      "so": "",
      "cpu": "",
      "ram": "",
      "color": "white",
      "pantalla": ""
    },
    "image": "https://res.cloudinary.com/dsalyp6sj/image/upload/v1661469879/ecom/D_NQ_NP_2X_624987-MLA48881660084_012022-F_hqx1f3.webp",
    "stock": 12,
    "disable": false,
    "price": 184.45,
    "conectividad": "USB",
    "category": 4
  },
  {
    "id": 96,
    "title": "Mouse inalámbrico Microsoft Bluetooth Mobile 3600 negro",
    "rating": 4.3,
    "detail": {
      "detail": "Contiene usb inalámbrico-Puede conectarse a cualquier dispositivo a través de Bluetooth-Posee rueda de desplazamiento-Cuenta con 3 botones para un mayor control-Con sensor óptico-Resolución de 1000dpi-Creado para llevar a todas partes-Control inteligente y navegación fácil.",
      "marca": "Microsoft",
      "modelo": "Mobile 3600",
      "so": "",
      "cpu": "",
      "ram": "",
      "color": "black",
      "pantalla": ""
    },
    "image": "https://res.cloudinary.com/dsalyp6sj/image/upload/v1661469914/ecom/D_NQ_NP_2X_861042-MLA32146410266_092019-F_d91z6c.webp",
    "stock": 12,
    "disable": false,
    "price": 29.5,
    "conectividad": "USB",
    "category": 4
  },
  {
    "id": 97,
    "title": "Combo mouse teclado",
    "rating": 4.2,
    "detail": {
      "detail": "Modelo detallado: K552RGB-BA-W-SP-Modelo del teclado: Kumara K552W RGB-Modelo del mouse: Griffin M607W",
      "marca": "Redragon",
      "modelo": "K552RGB-BA-W",
      "so": "",
      "cpu": "",
      "ram": "",
      "color": "white",
      "pantalla": ""
    },
    "image": "https://res.cloudinary.com/dsalyp6sj/image/upload/v1661469932/ecom/D_NQ_NP_2X_674043-MLA48688191484_122021-F_grx0c5.webp",
    "stock": 12,
    "disable": false,
    "price": 73.78,
    "conectividad": "USB",
    "category": 4
  },
  {
    "id": 98,
    "title": "Kit Combo Redragon Gamer Pandora Storm Elite Draconic White",
    "rating": 4.3,
    "detail": {
      "detail": "Modelo del mouse: Storm Elite M988 White-Modelo del teclado: Draconic K530RGB White",
      "marca": "Redragon",
      "modelo": "Pandora, Storm Elite y Draconic White",
      "so": "",
      "cpu": "",
      "ram": "",
      "color": "white",
      "pantalla": ""
    },
    "image": "https://res.cloudinary.com/dsalyp6sj/image/upload/v1661469951/ecom/D_NQ_NP_2X_806962-MLA46738644931_072021-F_pqwzpd.webp",
    "stock": 12,
    "disable": false,
    "price": 219.46,
    "conectividad": "USB",
    "category": 4
  },
  {
    "id": 99,
    "title": "Joystick inalámbrico sony PlayStation DualSense CFI-ZCT1 midnight black",
    "rating": 4.7,
    "detail": {
      "detail": "Cuenta con Bluetooth-pantalla táctil-Mando inalámbrico-Compatible con: PlayStation 5 y Televisores y iPadOS 14.5-Incluye un control- Con sistema de vibración incorporado-Compatible con: Android 12, iOS 14.5, MacOS Big Sur 11.3-iversión garantizada con tu joystick PlayStation-Diseño ergonómico.",
      "marca": "sony",
      "modelo": "PlayStation DualSense CFI-ZCT1",
      "so": "",
      "cpu": "",
      "ram": "",
      "color": "black",
      "pantalla": ""
    },
    "image": "https://res.cloudinary.com/dsalyp6sj/image/upload/v1661469970/ecom/D_NQ_NP_2X_621951-MLA46237882917_062021-F_dacsy1.webp",
    "stock": 12,
    "disable": false,
    "price": 168.4,
    "conectividad": "USB",
    "category": 4
  },
  {
    "id": 100,
    "title": "Joystick inalámbrico sony PlayStation DualSense CFI-ZCT1 cosmic red",
    "rating": 4.9,
    "detail": {
      "detail": "Cuenta con Bluetooth-pantalla táctil-Mando inalámbrico-ompatible con: PlayStation 5 y Televisores y iPadOS 14.5-Incluye un control-Con sistema de vibración incorporado-Compatible con: Android 12, iOS 14.5, MacOS Big Sur 11.3-Diversión garantizada con tu joystick PlayStation-Diseño ergonómico.",
      "marca": "sony",
      "modelo": "PlayStation DualSense CFI-ZCT1",
      "so": "",
      "cpu": "",
      "ram": "",
      "color": "red",
      "pantalla": ""
    },
    "image": "https://res.cloudinary.com/dsalyp6sj/image/upload/v1661469986/ecom/D_NQ_NP_2X_665357-MLA46237938567_062021-F_l3ur3k.webp",
    "stock": 12,
    "disable": false,
    "price": 192.56,
    "conectividad": "USB",
    "category": 4
  }
]

module.exports = async function loadArticle() {
  // Verificamos si los artículos ya fueron creados
  const allArticles = await Article.findAll()
  if (allArticles.length > 0) {
    console.log("Artículos cargados previamente")
    return
  }

  //Articulos para cargar a la BD
  allArt.forEach(async el => {
    const newArticle = await Article.create({
      title: el.title,
      rating: el.rating,
      detail: el.detail,
      image: el.image,
      stock: el.stock,
      disable: el.disable,
      price: el.price,
      conectividad: el.conectividad,
    })
    await newArticle.addCategory(el.category);

  })
  console.log("Artículos cargados")
};

