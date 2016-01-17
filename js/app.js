$(document).ready(function () {

	var productsIMG = $('.thumbnail img');
	var productsCaptions = $('.thumbnail .caption');

	//adds the title, price and image for each product
	function genProductsHTML(numProducts) {

		for (var i = 0; i < numProducts; i++) {
			var title = productsCaptions[i].children[1].children[0];
			var price = productsCaptions[i].children[0];
			productsIMG[i].setAttribute('src', 'img/' + products[i].category + '/' + products[i].name + '.png');
			title.text = products[i].title;
			price.innerHTML = '$' + parseFloat(products[i].price.dollar + '.' + products[i].price.cent).toFixed(2);
			
		}

	}

	genProductsHTML(products.length);

});