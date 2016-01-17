$(document).ready(function () {

	var product = $('.product');
	var categories = $('.cat');

	genProductsHTML(products);

	//adds the title, price and image for each product
	function genProductsHTML(products, typeOfProduct) {

		var productsIMG;
		var productsCaptions;
		var sorted;

		if (typeof typeOfProduct !== 'undefined' && typeOfProduct != null) {
			sorted = genTypeOfProducts(products, typeOfProduct);
			sorted.forEach(function () {
				product.clone().appendTo('.products');
			});

			productsIMG = $('.thumbnail img');
			productsCaptions = $('.thumbnail .caption');



			sorted.forEach(function (product, index) {
				var title = productsCaptions[index].children[1].children[0];
				var price = productsCaptions[index].children[0];
				productsIMG[index].setAttribute('src', 'img/' + product.category + '/' + product.name + '.png');
				title.text = product.title;
				price.innerHTML = '$' + parseFloat(product.price.dollar + '.' + product.price.cent).toFixed(2);
			});

			

		}

		else {

			products.forEach(function () {
				product.clone().appendTo('.products');
			});

			productsIMG = $('.thumbnail img');
			productsCaptions = $('.thumbnail .caption');

			products.forEach(function (product, index) {
				var title = productsCaptions[index].children[1].children[0];
				var price = productsCaptions[index].children[0];
				productsIMG[index].setAttribute('src', 'img/' + product.category + '/' + product.name + '.png');
				title.text = product.title;
				price.innerHTML = '$' + parseFloat(product.price.dollar + '.' + product.price.cent).toFixed(2);
			});

			
		}
		
		

	}

	//filters out the products based on its category you pass in and returns sorted products
	function genTypeOfProducts(products, typeOfProduct) {
		
		var sortedProducts;

		sortedProducts = products.filter(function (product) {
			return product.category === typeOfProduct;
		});

		return sortedProducts;
		
	}

	
	categories.on('click', function (e) {
		e.preventDefault();
		$('.products').children().remove();

		if ($(this).data('category') === 'all') {
			genProductsHTML(products);
		}
		else {
			genProductsHTML(products, $(this).data('category'));
		}

		
	})

});