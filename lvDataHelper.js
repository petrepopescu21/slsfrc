({
    getResponse: function(component, lat, long, dist) {
        // create a server side action.       
        var action = component.get("c.getCallResponse");
        action.setParams({
            "url": 'https://smartlivedata.herokuapp.com/eventsAndWeather?latitude='+lat+'&longitude='+long+'&distanceInKM='+dist
        });
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (component.isValid() && state === "SUCCESS") {   
                component.set("v.response", response.getReturnValue());
            
                var getAllObjects = component.get("v.response")['events']['myArrayList'];
                var eventList = [];
                for (var key in getAllObjects) {       
                    eventList.push(getAllObjects[key]['map']['description']);
                }           
                component.set("v.ListOfDescriptions", eventList);
            }
        });
 
        $A.enqueueAction(action);
    },
})