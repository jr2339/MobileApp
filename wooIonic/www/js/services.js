angular.module('starter.services',[])
.service('WC', function(){
    return {
        WC: function(){
            var Woocommerce = new WooCommerceAPI.WooCommerceAPI({
                url: 'https://sebastiengrey.com',
                consumerKey: 'ck_f97319b805870df9fcabea703ada5075c509bc5c',
                consumerSecret: 'cs_92f4349040f735fe20010b86e541e08aed4069a3'
            });
            return Woocommerce;
        }
}});
