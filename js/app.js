'use strict';

/* App Module */
var app = angular.module('vsApp', ['ngRoute', 'use-info']);

  app.config(function($routeProvider) {
    $routeProvider.
      when('/', { 
        templateUrl:'partial/main.html',
        controller: 'MainCtrl'
      }).
      when('/events', { templateUrl:'partial/events.html'}).
      when('/catalog', { templateUrl:'partial/catalog.html'}).
      when('/event', { templateUrl:'partial/events.html'}).
      when('/contacts', { templateUrl:'partial/contacts.html'}).
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