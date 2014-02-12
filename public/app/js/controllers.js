'use strict';

/* Controllers */

angular.module('qbrando.controllers', ['qbrando.services']).


    controller('MainController', ['$scope', 'Cart', 'Products', 'Sticky', function ($scope, Cart, Products, Sticky) {

        $scope.cart = Cart;

        $scope.addToCart = function(product)
        {
            $scope.cart.add(product);
        }
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

        Timer.start(2, 10, 5, 3);

        $scope.timer = Timer;

    }])



    .controller('ProductController', ['$scope', '$element', 'Products', function ($scope, $element, Products) {

//        var elementTitle = $element.find('[ng-bind="product.title"]').html();
//
//        if(elementTitle) elementTitle = elementTitle.replace('<!--IE fix-->', '');
//
//        // Set product scope
//        $scope.product = {
//            'id'   : $element.find('[ng-bind="product.id"]').val(),
//            'title': elementTitle,
//            'image': $element.find('[ng-bind="product.image"]').attr('src'),
//            'price': $element.find('[ng-bind="product.price | currency:currency"]').html()
//        };
//
//        $element.find('[ng-bind="product.title"]').attr('href', 'javascript:void(0)');
//
//        $element.find('img[data-large]').imagezoomsl({
//
//            zoomrange: [3, 3],
//            magnifiersize: [500, 200],
//            magnifierborder: "1px solid #CCC",
//            disablewheel: false
//        });
//
//        if($scope.product.price !== undefined)
//        {
//            $scope.product.price = $scope.product.price.replace('QAR ', '');
//        }
//
//        // Add these information to partial information..
//        Products.addPartialInfo($scope.product);
    }])


    .controller('CartController', ['$scope', '$element', function ($scope, $element) {

//        var i = 0;
//        setInterval(function()
//        {
//            $element.find(".checkout-btn").each(function()
//            {
//                if(i%2 == 0) $( this ).animate({backgroundColor: "#AB066A"}, 1000 );
//
//                else $( this ).animate({backgroundColor: "#333"}, 1000 );
//            })
//            i++
//
//        }, 500);
    }])


    .controller('CheckoutController', ['$scope', 'Stepify', function ($scope, Stepify) {

        $scope.order   = {
            contact: {},
            payment: {method: 'paypal'}
        };

        $scope.steps = ['Contact Information', 'Shipping Address', 'Payment Method'];

        $scope.defaultCity = function() {
            $scope.city = $scope.country.length > 0 ? $scope.country[0] : '';
        }

        $scope.$watch('countries', function() {
            $scope.country = $scope.countries['Qatar'];
            $scope.defaultCity();
        });
//
//        // Start stepify when the checkout form is ready
//        $scope.$watch('checkoutForm', function(checkoutForm) {
//
//            Stepify.start($scope.steps, 'step', checkoutForm);
//        });
//
//        $scope.isCurrentStep = function(i) { return Stepify.isCurrentStep(i); }
//        $scope.scrollTo      = function(i) { return Stepify.scrollTo(i, true); }
//        $scope.stepNext      = function()  { return Stepify.stepNext(); }
//        $scope.stepBack      = function()  { return Stepify.stepBack(); }
//        $scope.isFirstStep   = function()  { return Stepify.isFirstStep(); }
//        $scope.isLastStep    = function()  { return Stepify.isLastStep(); }

    }])


    .controller('CarouselController', ['$element', function($element) {
    }])


    .controller('ProductsController', ['$scope', function ($scope) {

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
