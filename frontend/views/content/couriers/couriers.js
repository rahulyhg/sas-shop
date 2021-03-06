myApp.controller('CouriersCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http,$uibModal) {
    $scope.template = TemplateService.getHTML("content/couriers/couriers.html");
    TemplateService.title = "Couriers"; //This is the Title of the Website
    $scope.navigation = NavigationService.getNavigation();
    TemplateService.backgoundChange = "";
    TemplateService.homefooterNone = "";

    //enquiry form modal
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
        "image": "img/couriers/couriers_bg.jpg",
        "title": "Simplified Courier Solution <br> For Your Business!",
        "subtitle": "Manage & send all your e-commerce shipments <br> at a discounted rate with an easy-to-use dashboard.",
        "btntext": "Start your free trial"
    }]
    //data for pagedivision html directive
    $scope.pagedivision=[{
        "image": "icon-Compare",
        "title": "Compare Prices",
        "subtitle": "Provide your product details and Compare prices of the courier partner"
    },{
        "image": "icon-Schedule",
        "title": "Schedule Pickup",
        "subtitle": "Choose the Courier partner that best fits your expected rate and schedule the pickup"
    },{
        "image": "icon-Handover",
        "title": "Print Shipping Label",
        "subtitle": "Print necessary invoices and wait for the Pickup by courier guy to happen before the Daily Cutoff time"
    },{
        "image": "icon-Handover",
        "title": "Handover Shipments",
        "subtitle": "Handover the shipments & Stay updated about the shipping status"
    }]
    //data for alternatediv html directive    
    $scope.alternatesection=[{
        "image1": "img/couriers/mac.png",
        "maintitle1": "Choose From Multiple Courier Partners & Services",
        "subtitle1":"Run Product Ads On Top Social Media Platforms",
        "subcontent1": "<p>Run Product Ads across Facebook and Instagram with Social Media Advertising.</p><p>Attract the right audience on your website with great Ad relevancy and Accurate Targeting.</p><p>Get Real-time Report of your every campaign's ROI with Ad Analytics.</p>",
        "image2": "img/couriers/mac.png",
        "maintitle2": "Choose From Multiple Courier Partners & Services",
        "subtitle2":"Run Product Ads On Top Social Media Platforms",
        "subcontent2": "<p>Run Product Ads across Facebook and Instagram with Social Media Advertising.</p><p>Attract the right audience on your website with great Ad relevancy and Accurate Targeting.</p><p>Get Real-time Report of your every campaign's ROI with Ad Analytics.</p>"
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