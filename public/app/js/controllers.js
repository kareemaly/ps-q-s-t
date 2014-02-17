'use strict';

/* Controllers */

angular.module('qbrando.controllers', ['qbrando.services']).


    controller('MainController', ['$scope', 'Cart', 'Price', 'MassOffer', function ($scope, Cart, Price, MassOffer) {

        $scope.cart = Cart;
        $scope.price = Price;
        $scope.currency = 'QAR ';
        $scope.massOffer = MassOffer;


        $(".slidedown-info").mouseover(function()
        {
            $(this).find('.info').slideUp('fast');
        });

        $('img[data-large]').imagezoomsl({

            zoomrange: [3, 3],
            magnifiersize: [500, 200],
            magnifierborder: "0px solid #DDD",
            disablewheel: false
        });
    }])

    .controller('HeaderController', ['Sticky', '$location', function(Sticky, $location) {

        // Make sticky menu
        Sticky.make(angular.element('#main-menu'), angular.element("#sticky-menu"));

        // Make active menu item
        var makeActiveMenu = function()
        {
            $("#main-menu").find('a').each(function()
            {
                if($(this).attr('href') == $location.absUrl().replace(/\/+$/, ''))
                {
                    $(this).addClass('active');
                }
            });
        }

        makeActiveMenu();
    }])

    .controller('OfferTimerController', ['$scope', 'Timer', function($scope, Timer) {

        $scope.timer = Timer;

        $scope.timerFinishAt = function(date)
        {
            $scope.timer.finishAt(date);
        }
    }])



    .controller('ProductController', ['$scope', '$element', function ($scope, element) {
    }])


    .controller('CartController', ['$scope', 'Cart', 'Products', function ($scope, Cart, Products) {

        Products.loadProductsFromItems(Cart.getItems(), function(products)
        {
            $scope.products = products;
        });

        $scope.removeItem = function(index)
        {
            // Remove products from array
            $scope.products.splice(index, 1);

            // Remove from cart
            Cart.removeItem(index);
        }

        $scope.updateQuantity = function(index)
        {
            // Update quantity
            Cart.updateItem(index, $scope.products[index].quantity);
        }
    }])


    .controller('CheckoutController', ['$scope', function ($scope) {

        $scope.contact = {};
        $scope.location = {};
    }])


    .controller('CarouselController', ['$element', function($element) {
    }])


    .controller('BottomNotifierController', ['$scope', '$element', function($scope, $element) {

//        $element.hide();

//        $(window).scroll(function()
//        {
//            if($(this).scrollTop() > 400 && ! $scope.cart.isEmpty() && $scope.cart.isReady())
//            {
//                $element.slideDown('slow');
//            }
//            else
//            {
//                $element.slideUp('slow');
//            }
//        });

    }]);
