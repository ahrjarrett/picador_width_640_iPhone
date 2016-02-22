app.controller('MainController2', ['$scope', function($scope) {
	$scope.title = 'MODERN CLASSICS';
	$scope.promo = 'The Picador Modern Classics line pairs iconic books with a design that\'s both small enough to fit in your pocket and unique enough to stand out on your bookshelf.';

	$scope.reviews = [
		{

		}
	];

	$scope.products = [
		{
      name:'The Virgin Suicides',
      price:21,
      pubdate:new Date('2013','00','10'),
        //CDN -- cover:'http://ecx.images-amazon.com/images/I/81RKqEvbYaL.jpg',
    cover: 'img/virgin-suicides.jpg',
      amazon:'http://www.amazon.com/dp/1250074819/',
      barnesNoble:'http://www.barnesandnoble.com/w/virgin-suicides-jeffrey-eugenides/1100356894',
      indieBound:'http://www.indiebound.org/book/9781250074812',
      powells:'http://www.powells.com/book/the-virgin-suicides-9781250074812'
    },
    {
      name:'Housekeeping',
      price:18,
      pubdate:new Date('1920','04','08'),
        //CDN -- cover:'http://images.abovethetreeline.com/ea/MM/images/jacket_covers/original/9781250060655_d5d26.jpg',
      cover: 'img/jesus-son.jpg',
      amazon:'http://www.amazon.com/dp/1250060656/',
      barnesNoble:'http://www.barnesandnoble.com/w/housekeeping-marilynne-robinson/1100355573',
      indieBound:'http://www.indiebound.org/book/9781250060655',
      powells:'http://www.powells.com/book/housekeeping-9781250060655'
    },
    {
      name:'Steppenwolf',
      price:45,
      pubdate:new Date('1966','03','11'),
      // CDN -- cover:'http://ecx.images-amazon.com/images/I/81VEOUtcAHL.jpg',
      cover: 'img/steppenwolf.jpg',
      amazon:'http://www.amazon.com/dp/1250074827/ref=sr_1_1',
      barnesNoble:'http://www.barnesandnoble.com/w/steppenwolf-hermann-hesse/1100158717',
      indieBound:'http://www.indiebound.org/book/9781250074829',
      powells:'http://www.powells.com/book/steppenwolf-9781250074829'
    },
    {
      name:'Jesus\' Son',
      price:14,
      pubdate:new Date('2014','02','07'),
      //CDN -- cover:'http://ecx.images-amazon.com/images/I/81xr4GX7V9L.jpg',
        cover: 'img/jesus-son.jpg',
      amazon:'http://www.amazon.com/dp/1250074800/',
      barnesNoble:'http://www.barnesandnoble.com/w/jesus-son-denis-johnson/1002601463',
      indieBound:'http://www.indiebound.org/book/9781250074805',
      powells:'http://www.powells.com/book/jesus-son-stories-9781250074805'
    }
	];

}]);