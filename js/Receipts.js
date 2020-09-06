'use strict';

const receiptsArray = [{
  "date": "2017-10-16 12:07:07",
  "name": "Творог 9% с курагой",
  "id": 564564867361367,
  "image": "https://i.otzovik.com/objects/b/720000/719926.png",
  "price": 121,
  "quantity": 45,
  "removed": 0
}, {
  "date": "2017-10-16 12:07:07",
  "name": "Молочный Яблоко 100",
  "id": 564564867361367,
  "image": "https://www.utkonos.ru/images/photo/3265/3265004H.jpg",
  "price": 25.1,
  "quantity": 44,
  "removed": 0
}, {
  "date": "2017-10-16 12:07:07",
  "name": "Молочный Традиция 100",
  "id": 564564867361367,
  "image": "http://irecommend.ru/sites/default/files/imagecache/copyright1/user-images/299388/Ydfgl76IXe0nEM2gO6Ww.JPG",
  "price": 115,
  "quantity": 62,
  "removed": 0
}, {
  "date": "2017-10-16 12:07:07",
  "name": "Виноград 0,3л",
  "id": 564564867361367,
  "image": "http://карапузик.com.images.1c-bitrix-cdn.ru/upload/iblock/b28/b28f089d41db757b74cfebfe21609228.jpg",
  "price": 65,
  "quantity": 87,
  "removed": 0
}, {
  "date": "2017-10-16 12:07:07",
  "name": "Русская картошка чедар 50",
  "id": 564564867361367,
  "image": "https://vksv.ru/wp-content/uploads/2018/02/CHipsy-Russkaya-kartoshka-Syr-150g.jpeg",
  "price": 46.3,
  "quantity": 86,
  "removed": 0
}, {
  "date": "2017-10-16 12:07:07",
  "name": "Молочный Груша 200",
  "id": 564564867361367,
  "image": "https://images.ua.prom.st/50389447_w640_h640_ncheskaya_s_grushej_200_g..jpg",
  "price": 180,
  "quantity": 80,
  "removed": 0
}, {
  "date": "2017-10-16 12:07:07",
  "name": "Аленка карамель 100г Акционный товар Большая скидка",
  "id": 564564867361367,
  "image": "https://avatars.mds.yandex.net/get-mpic/1862701/img_id7152508388072550792.jpeg/orig",
  "price": 73.9,
  "quantity": 94,
  "removed": 0
}, {
  "date": "2017-10-16 12:07:07",
  "name": "Сыр 125г",
  "id": 564564867361367,
  "image": "https://www.utkonos.ru/images/photo/3176/3176192H.jpg",
  "price": 131,
  "quantity": 83,
  "removed": 0
}, {
  "date": "2017-10-16 15:09:08",
  "name": "Яблоко-Виноград 0,5л",
  "id": 564564867361368,
  "image": "http://карапузик.com.images.1c-bitrix-cdn.ru/upload/iblock/b28/b28f089d41db757b74cfebfe21609228.jpg",
  "price": 44,
  "quantity": 20,
  "removed": 0
}, {
  "date": "2017-10-16 15:09:08",
  "name": "Молочный Груша 200",
  "id": 564564867361368,
  "image": "https://images.ua.prom.st/50389447_w640_h640_ncheskaya_s_grushej_200_g..jpg",
  "price": 180,
  "quantity": 65,
  "removed": 0
}, {
  "date": "2017-10-16 15:09:08",
  "name": "Творог 9% с курагой",
  "id": 564564867361368,
  "image": "https://i.otzovik.com/objects/b/720000/719926.png",
  "price": 121,
  "quantity": 41,
  "removed": 0
}, {
  "date": "2017-10-16 15:09:08",
  "name": "Молочный Изюм 100",
  "id": 564564867361368,
  "image": "https://www.komus.ru/medias/sys_master/root/hd3/h93/9286922043422.jpg",
  "price": 102,
  "quantity": 72,
  "removed": 0
}, {
  "date": "2017-10-16 15:09:08",
  "name": "Виноград 0,3л",
  "id": 564564867361368,
  "image": "http://карапузик.com.images.1c-bitrix-cdn.ru/upload/iblock/b28/b28f089d41db757b74cfebfe21609228.jpg",
  "price": 65,
  "quantity": 39,
  "removed": 0
}, {
  "date": "2017-10-16 18:11:09",
  "name": "Молочный Традиция 100",
  "id": 564564867361369,
  "image": "http://irecommend.ru/sites/default/files/imagecache/copyright1/user-images/299388/Ydfgl76IXe0nEM2gO6Ww.JPG",
  "price": 115,
  "quantity": 60,
  "removed": 0
}, {
  "date": "2017-10-16 18:11:09",
  "name": "Аленка карамель 100г Акционный товар Большая скидка",
  "id": 564564867361369,
  "image": "https://avatars.mds.yandex.net/get-mpic/1862701/img_id7152508388072550792.jpeg/orig",
  "price": 73.9,
  "quantity": 99,
  "removed": 0
}, {
  "date": "2017-10-16 18:11:09",
  "name": "Русская картошка чедар 50",
  "id": 564564867361369,
  "image": "https://vksv.ru/wp-content/uploads/2018/02/CHipsy-Russkaya-kartoshka-Syr-150g.jpeg",
  "price": 46.3,
  "quantity": 51,
  "removed": 0
}, {
  "date": "2017-10-16 18:11:09",
  "name": "Русская картошка икра 50",
  "id": 564564867361369,
  "image": "https://www.utkonos.ru/images/photo/3117/3117496H.jpg",
  "price": 33.1,
  "quantity": 15,
  "removed": 0
}, {
  "date": "2017-11-01 12:09:03",
  "name": "Молочный Груша 200",
  "id": 564564867361360,
  "image": "https://images.ua.prom.st/50389447_w640_h640_ncheskaya_s_grushej_200_g..jpg",
  "price": 180,
  "quantity": 96,
  "removed": 0
}, {
  "date": "2017-11-01 12:09:03",
  "name": "Молочный Яблоко 100",
  "id": 564564867361360,
  "image": "https://www.utkonos.ru/images/photo/3265/3265004H.jpg",
  "price": 25.1,
  "quantity": 9,
  "removed": 0
}, {
  "date": "2017-11-03 13:11:06",
  "name": "Русская картошка чедар 50",
  "id": 564564867361361,
  "image": "https://vksv.ru/wp-content/uploads/2018/02/CHipsy-Russkaya-kartoshka-Syr-150g.jpeg",
  "price": 46.3,
  "quantity": 62,
  "removed": 0
}, {
  "date": "2017-11-03 13:11:06",
  "name": "Молочный Сказка 100",
  "id": 564564867361361,
  "image": "https://selcdn.fedsp.com/kaph/15/1089/500x500.1165a5ca267833cd.jpg",
  "price": 39,
  "quantity": 67,
  "removed": 0
}, {
  "date": "2017-11-03 13:11:06",
  "name": "Тоник 0,5л",
  "id": 564564867361361,
  "image": "http://makro-market.ru/wa-data/public/shop/products/91/22/12291/images/13661/13661.345x0.jpg",
  "price": 63,
  "quantity": 51,
  "removed": 0
}, {
  "date": "2017-11-03 13:11:06",
  "name": "Молочный Изюм 100",
  "id": 564564867361361,
  "image": "https://www.komus.ru/medias/sys_master/root/hd3/h93/9286922043422.jpg",
  "price": 102,
  "quantity": 4,
  "removed": 0
}, {
  "date": "2017-11-03 13:11:06",
  "name": "Творог 9% с курагой",
  "id": 564564867361361,
  "image": "https://i.otzovik.com/objects/b/720000/719926.png",
  "price": 121,
  "quantity": 60,
  "removed": 0
}, {
  "date": "2017-11-03 13:11:06",
  "name": "Виноград 0,3л",
  "id": 564564867361361,
  "image": "http://карапузик.com.images.1c-bitrix-cdn.ru/upload/iblock/b28/b28f089d41db757b74cfebfe21609228.jpg",
  "price": 65,
  "quantity": 61,
  "removed": 0
}, {
  "date": "2017-11-03 13:11:06",
  "name": "Беседа. 50гр",
  "id": 564564867361361,
  "image": "https://cdn-irec.r-99.com/sites/default/files/imagecache/300o/product-images/2636/cache_500_56771.jpg",
  "price": 36.5,
  "quantity": 41,
  "removed": 0
}, {
  "date": "2017-11-03 13:11:06",
  "name": "Молочный Изюм 100",
  "id": 564564867361362,
  "image": "https://www.komus.ru/medias/sys_master/root/hd3/h93/9286922043422.jpg",
  "price": 102,
  "quantity": 3,
  "removed": 0
}, {
  "date": "2017-11-03 13:11:06",
  "name": "Сыр 125г",
  "id": 564564867361362,
  "image": "https://www.utkonos.ru/images/photo/3176/3176192H.jpg",
  "price": 131,
  "quantity": 96,
  "removed": 0
}, {
  "date": "2017-11-03 13:11:06",
  "name": "Тоник 0,5л",
  "id": 564564867361362,
  "image": "http://makro-market.ru/wa-data/public/shop/products/91/22/12291/images/13661/13661.345x0.jpg",
  "price": 63,
  "quantity": 31,
  "removed": 0
}, {
  "date": "2017-11-03 13:11:06",
  "name": "Капля росы негаз 1.5л",
  "id": 564564867361362,
  "image": "http://www.svoda.ru/site/userfiles/images/%D0%9A%D0%90%D0%9F%D0%9B%D0%AF%20%D0%A0%D0%9E%D0%A1%D0%AB%201.5%D0%9B%20%D0%93%D0%90%D0%97%D0%98%D0%A0%D0%9E%D0%92%D0%90%D0%9D%D0%9D%D0%90%D0%AF.jpg",
  "price": 16.9,
  "quantity": 16,
  "removed": 0
}, {
  "date": "2017-11-03 13:11:06",
  "name": "Нежирный творог",
  "id": 564564867361362,
  "image": "http://www.calorizator.ru/sites/default/files/imagecache/product_512/product/tvorog-prostokvashino-1.jpg",
  "price": 52.41,
  "quantity": 81,
  "removed": 0
}, {
  "date": "2017-11-03 13:11:06",
  "name": "Творог 9% с курагой",
  "id": 564564867361362,
  "image": "https://i.otzovik.com/objects/b/720000/719926.png",
  "price": 121,
  "quantity": 23,
  "removed": 0
}, {
  "date": "2017-11-03 13:11:06",
  "name": "Горький коньяк 100",
  "id": 564564867361362,
  "image": "https://tashkentcena.com/files/products/893eebe7b69146290886dc504a3328ef.jpeg",
  "price": 336,
  "quantity": 52,
  "removed": 0
}, {
  "date": "2017-11-03 13:11:06",
  "name": "Аленка карамель 100г Акционный товар Большая скидка",
  "id": 564564867361362,
  "image": "https://avatars.mds.yandex.net/get-mpic/1862701/img_id7152508388072550792.jpeg/orig",
  "price": 73.9,
  "quantity": 12,
  "removed": 0
}, {
  "date": "2017-11-29 17:26:57",
  "name": "Русская картошка чедар 50",
  "id": 564564867361365,
  "image": "https://vksv.ru/wp-content/uploads/2018/02/CHipsy-Russkaya-kartoshka-Syr-150g.jpeg",
  "price": 46.3,
  "quantity": 3,
  "removed": 0
}, {
  "date": "2017-11-29 17:26:57",
  "name": "Виноград 0,3л",
  "id": 564564867361365,
  "image": "http://карапузик.com.images.1c-bitrix-cdn.ru/upload/iblock/b28/b28f089d41db757b74cfebfe21609228.jpg",
  "price": 65,
  "quantity": 88,
  "removed": 0
}, {
  "date": "2017-11-29 17:26:57",
  "name": "Нежирный творог",
  "id": 564564867361365,
  "image": "http://www.calorizator.ru/sites/default/files/imagecache/product_512/product/tvorog-prostokvashino-1.jpg",
  "price": 52.41,
  "quantity": 20,
  "removed": 0
}, {
  "date": "2017-11-29 17:26:57",
  "name": "Тоник 0,5л",
  "id": 564564867361365,
  "image": "http://makro-market.ru/wa-data/public/shop/products/91/22/12291/images/13661/13661.345x0.jpg",
  "price": 63,
  "quantity": 64,
  "removed": 0
}, {
  "date": "2017-11-29 17:26:57",
  "name": "Молочный Сказка 100",
  "id": 564564867361365,
  "image": "https://selcdn.fedsp.com/kaph/15/1089/500x500.1165a5ca267833cd.jpg",
  "price": 39,
  "quantity": 54,
  "removed": 0
}, {
  "date": "2017-11-29 17:26:57",
  "name": "Сметана и лук 25г",
  "id": 564564867361365,
  "image": "https://melnitsa.tm/photos_catalog/009910.jpg",
  "price": 30,
  "quantity": 33,
  "removed": 0
}, {
  "date": "2017-11-29 17:26:57",
  "name": "Беседа. 50гр",
  "id": 564564867361365,
  "image": "https://cdn-irec.r-99.com/sites/default/files/imagecache/300o/product-images/2636/cache_500_56771.jpg",
  "price": 36.5,
  "quantity": 6,
  "removed": 0
}, {
  "date": "2017-11-29 18:29:00",
  "name": "Молочный Традиция 100",
  "id": 564564867361364,
  "image": "http://irecommend.ru/sites/default/files/imagecache/copyright1/user-images/299388/Ydfgl76IXe0nEM2gO6Ww.JPG",
  "price": 115,
  "quantity": 64,
  "removed": 0
}, {
  "date": "2017-11-29 19:31:03",
  "name": "Русская картошка чедар 50",
  "id": 564564867361363,
  "image": "https://vksv.ru/wp-content/uploads/2018/02/CHipsy-Russkaya-kartoshka-Syr-150g.jpeg",
  "price": 46.3,
  "quantity": 6,
  "removed": 0
}, {
  "date": "2017-11-29 19:31:03",
  "name": "Сметана и лук 25г",
  "id": 564564867361363,
  "image": "https://melnitsa.tm/photos_catalog/009910.jpg",
  "price": 30,
  "quantity": 18,
  "removed": 0
}, {
  "date": "2017-11-29 19:31:03",
  "name": "Беседа. 50гр",
  "id": 564564867361363,
  "image": "https://cdn-irec.r-99.com/sites/default/files/imagecache/300o/product-images/2636/cache_500_56771.jpg",
  "price": 36.5,
  "quantity": 99,
  "removed": 0
}, {
  "date": "2017-11-29 19:31:03",
  "name": "Горький коньяк 100",
  "id": 564564867361363,
  "image": "https://tashkentcena.com/files/products/893eebe7b69146290886dc504a3328ef.jpeg",
  "price": 336,
  "quantity": 94,
  "removed": 0
}, {
  "date": "2017-11-29 19:31:03",
  "name": "Сыр 125г",
  "id": 564564867361363,
  "image": "https://www.utkonos.ru/images/photo/3176/3176192H.jpg",
  "price": 131,
  "quantity": 64,
  "removed": 0
}, {
  "date": "2017-11-29 19:31:03",
  "name": "Молочный Яблоко 100",
  "id": 564564867361363,
  "image": "https://www.utkonos.ru/images/photo/3265/3265004H.jpg",
  "price": 25.1,
  "quantity": 52,
  "removed": 0
}];


const dateConversion = (item) => { // конвертация даты в формат 'число месяц' (кириллица)
  const date = item.date.split(' ')[0];

  const options = {
    month: 'long',
    day: 'numeric',
    timezone: 'UTC'
  };
  item.date = new Date(date).toLocaleString("ru", options);

  return item;
}


const toFormatArray = (arr) => {
  let sortArr = arr.map(dateConversion).
  sort((item1, item2) => item1.date - item2.date);

  const result = [];

  for (let i = 0; i < sortArr.length; i++) { //создание многомерного массива

    if (sortArr[i - 1] === undefined ||
      sortArr[i].date !== sortArr[i - 1].date) { // добавления в массив структуры с новой датой
      result.push({
        dateArr: [{
          idArr: [sortArr[i]],
          idValue: sortArr[i].id,
        }],
        dateValue: sortArr[i].date,
        sum: sortArr[i].price * sortArr[i].quantity,

      })

    } else {
      result[result.length - 1].sum += sortArr[i].price * sortArr[i].quantity;

      if (sortArr[i - 1] === undefined ||
        sortArr[i].id !== sortArr[i - 1].id) { //добавление в массив структуры с новым id
        result[result.length - 1].dateArr.push({

          idArr: [sortArr[i]],
          idValue: sortArr[i].id,

        });
      } else {

        result[result.length - 1].dateArr[result[result.length - 1].dateArr.length - 1].idArr.push(sortArr[i]); //добавление данных в уже созданную структуру 
      }
    }
  }

  return result;
}


export default function getAll() {
  return toFormatArray(receiptsArray);
}