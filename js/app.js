'use strict';

/* App Module */
var app = angular.module('App', ['ngRoute', 'appControllers']);

  app.config(function($routeProvider) {
    $routeProvider.
      when('/', { 
        templateUrl:'partial/main.html',
        controller: 'MainCtrl'
      }).
      when('/fablab', { templateUrl:'partial/fablab.html'}).
      when('/fablab/wherefrom', { templateUrl:'partial/fablab/wherefrom.html'}).
      when('/fablab/charter', { templateUrl:'partial/fablab/charter.html'}).
      when('/fablab/network', { templateUrl:'partial/fablab/network.html'}).
      when('/creativity', { templateUrl:'partial/creativity.html'}).
      when('/creativity/2d', { templateUrl:'partial/creativity/2d.html'}).
      when('/creativity/3d', { templateUrl:'partial/creativity/3d.html'}).
      when('/creativity/2d-3d', { templateUrl:'partial/creativity/2d-3d.html'}).
      when('/creativity/electronics', { templateUrl:'partial/creativity/electronics.html'}).
      when('/creativity/large', { templateUrl:'partial/creativity/large.html'}).
      when('/events', { templateUrl:'partial/events.html'}).
      when('/catalog', { templateUrl:'partial/catalog.html'}).
      when('/explore', { templateUrl:'partial/explore.html'}).
      when('/sign-in', { templateUrl:'partial/sign-in.html'}).
      when('/sign-up', { templateUrl:'partial/sign-up.html'}).
      when('/event', { templateUrl:'partial/events.html'}).
      when('/contacts', { templateUrl:'partial/contacts.html'}).
      when('/equipment', { templateUrl:'partial/equipment.html'}).
      when('/equipment/dimention-elite', { templateUrl:'partial/equipment/dimention-elite.html'}).
      when('/equipment/3dtouch-3d-printer', { templateUrl:'partial/equipment/3dtouch-3d-printer.html'}).
      when('/equipment/replicator', { templateUrl:'partial/equipment/replicator.html'}).
      when('/equipment/formlabs-form-1', { templateUrl:'partial/equipment/formlabs-form-1.html'}).
      when('/equipment/flexicam-stealth', { templateUrl:'partial/equipment/flexicam-stealth.html'}).
      when('/equipment/mtm-snap', { templateUrl:'partial/equipment/mtm-snap.html'}).
      when('/equipment/milling-machine', { templateUrl:'partial/equipment/milling-machine.html'}).
      when('/equipment/roland-modella-mdx-20', { templateUrl:'partial/equipment/roland-modella-mdx-20.html'}).
      when('/equipment/roland-modella-mdx-540', { templateUrl:'partial/equipment/roland-modella-mdx-540.html'}).
      when('/equipment/laser-epilog-mini', { templateUrl:'partial/equipment/laser-epilog-mini.html'}).
      when('/equipment/laser-pro-spirit', { templateUrl:'partial/equipment/laser-pro-spirit.html'}).
      when('/equipment/roland-gx300-gx24', { templateUrl:'partial/equipment/roland-gx300-gx24.html'}).
      when('/equipment/soldering-station', { templateUrl:'partial/equipment/soldering-station.html'}).
      when('/equipment/instek', { templateUrl:'partial/equipment/instek.html'}).
      when('/equipment/dremel-3000', { templateUrl:'partial/equipment/dremel-3000.html'}).
      when('/equipment/press-schulze', { templateUrl:'partial/equipment/press-schulze.html'}).
      when('/equipment/fiac-dryer', { templateUrl:'partial/equipment/fiac-dryer.html'}).
      when('/equipment/drilling-machine', { templateUrl:'partial/equipment/drilling-machine.html'}).
      when('/equipment/thermostatic-basin', { templateUrl:'partial/equipment/thermostatic-basin.html'}).
      when('/equipment/grinder', { templateUrl:'partial/equipment/grinder.html'}).
      otherwise({redirectTo:'/'});
  });

var usearray=[
  {
    "number": 1,
    "title": "Пищевое производство",
    "image": "img/use-1.jpg",
    "list": [
      "бумаги для выпечки;",
      "упаковки для жевательной резинки, леденцов конфет и т.д.;",
      "упаковки продуктов ресторанов быстрого питания."
    ]
  }, 
  {
    "number": 2,
    "title": "Медицина и гигиена", 
    "image": "img/use-2.jpg",
    "list": [
      "средств личной гигиены;",
      "хирургических расходных материалов;",
      "пластырей;",
      "прокладок."
    ] 
  }, 
  {
    "number": 3,
    "title": "Строительство", 
    "image": "img/use-3.jpg",
    "list": [
      "кровельных материалов;",
      "герметиков;",
      "парогидроизоляционных лент;",
      "полиуритановых прокладок."
    ]
  },
  {
    "number": 4,
    "title": "Полиграфия", 
    "image": "img/use-4.jpg",
    "list": [
      "самоклеящегося материала для рекламной продукции;",
      "голограм для документов особой важности, кредитных карт и т.д.;",
      "этикеток для пищевой и др. видов продукции.",
    ]
  },
  {
    "number": 5,
    "title": "Автомобилестроение", 
    "image": "img/use-5.jpg",
    "list": [
      "противоскрипных материалов;",
      "звукоизоляционных материалов;",
      "герметизирующих материалов;",
      "вибропоглощающих материалов."
    ]
  },
  {
    "number": 6,
    "title": "Самолетостроение", 
    "image": "img/use-6.jpg",
    "list": [
      "вибропоглощающих пластичных материалов;",
      "звукопоглощающих материалов;",
      "декоративных элементов салона и фюзеляжа."
    ]
  }
]