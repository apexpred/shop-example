var cart = (function () {

	var productsInCart = [];
	var total = {
		dollar: 0,
		cent: 0
	}

	//adds a product obj unto products Array
	var add = function (product) {
		productsInCart.push(product);
		var totalCents = total.cent + product.price.cent

		total.dollar += product.price.dollar;
		if (totalCents > 99) {
			total.dollar++;
			total.cent = totalCents - 100;
		}
		else {
			total.cent = totalCents;
		}
	}

	var remove = function (product) {

		total.dollar -= product.price.dollar;

		if (total.cent < product.price.cent ) {
			total.cent = (total.cent - product.price.cent) + 100;
			total.dollar--;
		}
		else {
			total.cent -= product.price.cent;
		}

		productsInCart = productsInCart.filter(function (item) {
			return product.title !== item.title
		});

	}

	var getTotal = function () {
		return '$' + parseFloat(total.dollar + '.' + total.cent).toFixed(2)
	}

	var getProductsInCart = function () {
		return productsInCart;
	}

	return {
		add: add,
		remove: remove,
		getTotal: getTotal,
		getProductsInCart: getProductsInCart
	};


})();