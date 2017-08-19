({
    calloutCtrl: function(component, event, helper) {
        var lat = 51.49353;
        var long = -0.08660;
        var dist = 10;
        helper.getResponse(component,lat,long,dist);
    }
})