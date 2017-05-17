$(document).ready(function () { 

$.getJSON("js/grid_Data.js").done(function(data){
	console.log(data.fs_DATABROWSE_F0101.data.gridData.rowset);
	
	var customerOptions = document.querySelector('.customerOptions');
	var dropDown = document.querySelector(".dpDowns").innerHTML;
	var myTemplate = Handlebars.compile(dropDown);
	 
	
	
	function ATI(){
		
		var myData = data.fs_DATABROWSE_F0101.data.gridData.rowset;
		var uniqueATI = [];
		var mapATI = {}
		
		for(var i = 0; i< myData.length; i++){
			var newATI = myData[i]
			
			if(mapATI[newATI.F0101_AT1] === undefined){
				
				mapATI[newATI.F0101_AT1] = newATI.F0101_AT1;
				uniqueATI.push(newATI.F0101_AT1);
			}
			
		}
		
		console.log(uniqueATI)
		
		customerOptions.innerHTML = myTemplate({F0101_AT1:uniqueATI});
		
	}
	
ATI();
   var searchBtn = document.querySelector('.btnFilter');
	
	var output;
	
	searchBtn.addEventListener('click', filterATI);
	function filterATI(){
		var customerOptions = document.querySelector('.customerOptions');
//		
//		 function filterData(input){
//			 return customerOptions.value = input.F0101_ATI;
//		 }
		
		if (customerOptions.value !==""){
			output = myData.filter(function(record) {
				return record.F0101_AT1 == customerOptions.value;
			});
			var results = newTemp({myData:output})

			tableDisplay.innerHTML =results
		}
		
	}
	
	var myData = data.fs_DATABROWSE_F0101.data.gridData.rowset;
	var tableDisplay = document.getElementById('display');
    var template = document.querySelector('.tableDisplay').innerHTML;
    var newTemp = Handlebars.compile(template);
    var results = newTemp({myData:myData})

tableDisplay.innerHTML =results 
	
})


});// wait for document to be ready

















































	
	

//    var req = {}; // empty object to hold our http request
//    req.deviceName = 'aisTester'; // <<---- here change to a unique name
//    req.username = "demo";
//    req.password = "demo";
//
//    // authenticate with the system by getting a token
//    $.ajax({
//        url: "http://demo.steltix.com/jderest/tokenrequest", // <<- JD Edwards API token service
//        type: 'post', // <<- the method that we using
//        data: JSON.stringify(req), // <<- JSON of our request obj
//        contentType: 'application/json', // <<- telling server how we are going to communicate
//        fail: function (xhr, textStatus, errorThrown) {
//
//            console.log(errorThrown, textStatus, xhr) //  <<- log any http errors to the console
//
//        }
//    }).done(function (data, textStatus, xhr) {
//
//        if (data.hasOwnProperty('userInfo')) {  // <<- see example response below
//
//            var token = data.userInfo.token;
//
//            // build a request obj to fetch data
//            var reqData = {  
//                    "deviceName" : "aisTesterAmi",
//                    "targetName" : "F0101",
//                    "targetType" : "table",
//                    "outputType":"GRID_DATA",
//                    "dataServiceType" : "BROWSE",  
//                    "maxPageSize" : "1000",
//                    "query" : {
//                        "autoFind" : true,
//                        "condition" : []
//                        }
//                    }
//
//
//            reqData.token = token;  // <<- add our token from 1st request
//
//            $.ajax({
//                url: "http://demo.steltix.com/jderest/dataservice", // <<- can also try http://demo.steltix.com/jderest/formservice with example request object below"
//                type: "post",
//                contentType: "application/json",
//                data: JSON.stringify(reqData)
//            }).done(function (data) {
//
//                console.log(JSON.stringify(data, null,3)) // <<- log data to console
//                const resultsElem = document.querySelector('.results');  // <<- handle for results
//                resultsElem.textContent = JSON.stringify(data, null, 3);  // <<-  add data to DOM
//                
//            })
//
//        }
//
//    })
//
//})
//
//

// Token request response example
// {
//   "username": "DEMO",
//   "environment": "JDV920",
//   "role": "*ALL",
//   "jasserver": "http://e1srv:7020",
//   "userInfo": {
//     "token": "044v2SEf1SZK9xhb/Say3dkrNzm43TUDkvtVBvPe8X08XQ=MDE4MDA5OTM5NTM0ODA4MTg2MTY3MzY1YWlzVGVzdGVyMTQ5NDk2NTI1OTg0Nw==",
//     "langPref": "  ",
//     "locale": "en",
//     "dateFormat": "MDE",
//     "dateSeperator": "/",
//     "simpleDateFormat": "MM/dd/yyyy",
//     "decimalFormat": ".",
//     "addressNumber": 0,
//     "alphaName": "DEMO",
//     "appsRelease": "E920",
//     "country": " ",
//     "username": "DEMO"
//   },
//   "userAuthorized": false,
//   "version": null,
//   "poStringJSON": null,
//   "altPoStringJSON": null,
//   "aisSessionCookie": "negS345IlfkoLIS3aLD2mO4uM35_uX0LzNVTbtemxEy-AhVMLdO1!1643583743!1494965259848",
//   "adminAuthorized": false,
//   "deprecated": true
// }



//  extra credit to play around with Form Services
// form service
//   var reqData = {
//                 "version": "ZJDE0001",
//                 "formActions": [],
//                 "deviceName": "aisTester",
//                 "formName": "P4101_W4101A"
//   }
