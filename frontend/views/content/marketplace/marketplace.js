myApp.controller('MarketplaceCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http, $uibModal) {
    $scope.template = TemplateService.getHTML("content/marketplace/marketplace.html");
    TemplateService.title = "Marketplace"; //This is the Title of the Website
    $scope.navigation = NavigationService.getNavigation();
    TemplateService.backgoundChange = "";
    TemplateService.homefooterNone = "";
    $scope.modalOpen = function () {
        $scope.enquiry = $uibModal.open({
            animation: true,
            templateUrl: "views/modal/enquiry.html",
            scope: $scope,
            size: 'lg',
            // backdropClass: 'back-drop'
        });
        $scope.closeModal = function () {
            $scope.enquiry.close();
        };
    }

    //data is saved and enquiry modal is closed and thank you modal is shown with timeout
    $scope.enquirySubmit = function (enquiry) {
        NavigationService.saveEnquiry(enquiry, function (data) {

            if (data.data.value) {
                $scope.enquiry.close();
                $scope.thankyou = $uibModal.open({
                    animation: true,
                    templateUrl: 'views/modal/thanks.html',
                    scope: $scope,
                    size: 'sm'
                });
                $timeout(function () {
                    $scope.thankyou.close();
                }, 1500);

            }

        })
    }
    //data for banner image and content
    $scope.banners = [{
        "image": "img/marketplace/marketplace_bg.png",
        "title": "One Stop Solution For Selling <br> On Marketplaces",
        "subtitle": "Choose India's leading E-Commerce website service & <br> grow your brand online!",
        "btntext": "Start your free trial"
    }]
    //data for pagedivision html directive
    $scope.pagedivision = [{
        "image": "icon-Order_nventory",
        "title": "Order And Inventory Management",
        "btn": "Know More",
    }, {
        "image": "icon-Registration",
        "title": "Reconciliation & Accounting Compliance",
        "btn": "Know More",
    }, {
        "image": "icon-Registration",
        "title": "Listing & Registration Assistance",
        "btn": "Know More",
    }, {
        "image": "icon-Registration",
        "title": "Advertise Products On Marketplaces.",
        "btn": "Know More",
    }]
    //data for alternatediv html directive    
    $scope.alternatesection = [{
        "image1": "img/marketplace/section1.png",
        "maintitle1": "Process Orders From Multiple Marketplaces And Your Website",
        "subtitle1": "Manage Orders Of All Marketplaces In A Single Dashboard",
        "subcontent1": "<p>Process all orders with Ease with Centralized order management and bulk order processing</p><p>Sync Inventory across channels with real-time syncing and centralized inventory update</p><p>Generate Shipping Labels and Manifests and deliver using Integrated Couriers</p>",
        "image2": "img/marketplace/section2.png",
        "maintitle2": "The Most Advanced Marketplace Reconciliation Dashboard",
        "subtitle2": "Get Paid Right By Keeping A Track Of Your Reconciliations",
        "subcontent2": "<p>Get Automatic Reconciliation reports with Minimal Human intervention</p><p>Track your Reconciliation by checking penalties and Claim unpaid orders</p><p>Manage your account with integration with accounting softwares like Tally & Busy</p>"
    }, {
        "image1": "img/marketplace/section3.png",
        "maintitle1": "Get Straight To Growing Your Business",
        "subtitle1": "Directly Start Selling On Marketplaces With Our Assistance",
        "subcontent1": "<p>Get registered on Marketplaces with brand approval and necessary documentation processing</p><p>Provide basic product details and get listed on Marketplaces without hassle</p><p>Get Search engine optimized content writing for better organic visibility</p>",
        "image2": "img/marketplace/section4.png",
        "maintitle2": "Get More Sales With Marketplace Ads",
        "subtitle2": "Boost Your Sales With Targeted Product Ads",
        "subcontent2": "<p>Advertise your products with Sponsored ads on top Marketplaces.</p><p>Increase your sales with better visibility for as low as Rs 10,000/-</p><p>Get Free consultation on Marketplace promotions and listing</p>"
    }]
    //data for pricing html directive    
    $scope.pricing = [{
        "name": "standard",
        "price": "₹ 50,000",
        "period": "Month",
        "minper": "Minimum Period 12 months",
        "otp": "Rs 5,99,999 for One Time Payment*",
        "services": [{
            "id": "s1",
            "name": "Ecommerce Website"
        }, {
            "id": "s2",
            "name": "Mobile App Android"
        }, {
            "id": "s3",
            "name": "Design service (Banners)"
        }, {
            "id": "s4",
            "name": "Couriers Solution"
        }, {
            "id": "s5",
            "name": "Advertisement on FB / Google"
        }, {
            "id": "s6",
            "name": "Email & SMS Marketing"
        }, {
            "id": "s7",
            "name": "Social Media Management"
        }, {
            "id": "s8",
            "name": "Marketplace Advertisement"
        }, {
            "id": "s9",
            "name": "Personal Account Manager"
        }]
    }, {
        "name": "Professional",
        "price": "₹ 75,000",
        "period": "Month",
        "minper": "Minimum Period 12 months",
        "otp": "Rs 8,99,999 for One Time Payment*",
        "services": [{
            "id": "p1",
            "name": "Ecommerce Website"
        }, {
            "id": "p2",
            "name": "Mobile App Android"
        }, {
            "id": "p3",
            "name": "Design service (Banners)"
        }, {
            "id": "p4",
            "name": "Couriers Solution"
        }, {
            "id": "p5",
            "name": "Advertisement on FB / Google"
        }, {
            "id": "p6",
            "name": "Email & SMS Marketing"
        }, {
            "id": "p7",
            "name": "Social Media Management"
        }, {
            "id": "p8",
            "name": "Marketplace Advertisement"
        }, {
            "id": "p9",
            "name": "Personal Account Manager"
        }]
    }, {
        "name": "Premium",
        "price": "₹ 1,00,000",
        "period": "Month",
        "minper": "Minimum Period 12 months",
        "otp": "Rs 9,99,999 for One Time Payment*",
        "services": [{
            "id": "pr1",
            "name": "Ecommerce Website"
        }, {
            "id": "pr2",
            "name": "Mobile App Android"
        }, {
            "id": "pr3",
            "name": "Design service (Banners)"
        }, {
            "id": "pr4",
            "name": "Couriers Solution"
        }, {
            "id": "pr5",
            "name": "Advertisement on FB / Google"
        }, {
            "id": "pr6",
            "name": "Email & SMS Marketing"
        }, {
            "id": "pr7",
            "name": "Social Media Management"
        }, {
            "id": "pr8",
            "name": "Marketplace Advertisement"
        }, {
            "id": "pr9",
            "name": "Personal Account Manager"
        }]
    }]
})