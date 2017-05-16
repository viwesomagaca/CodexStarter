$(document).ready(function(){
    var req = {};
    req.deviceName = 'aisTester';
    req.username = "demo";
    req.password = "demo";
    
    $.ajax({
      url: "http://demo.steltix.com/jderest/tokenrequest",
      type: 'post',
      data: JSON.stringify(req),
      contentType: 'application/json',
      fail: function (xhr, textStatus, errorThrown) {
        console.log(errorThrown, textStatus, xhr)
        
      }
    }).done(function (data, textStatus, xhr) {

    // form service
    //   var reqData = {
    //                 "version": "ZJDE0001",
    //                 "formActions": [],
    //                 "deviceName": "aisTester",
    //                 "formName": "P4101_W4101A"
    //   }

    // dataservice
      var reqData = {
        "deviceName": "aisTester",
        "aliasNaming": true,
        "outputType": "VERSION2",
        "targetName": "F4101",
        "targetType": "table",
        "dataServiceType": "BROWSE",
        "maxPageSize": "50",
        //"returnControlIDs": "F4101.KCOO",
        "query": {
          "autoFind": true,
          "condition": []
        }
        
      }

      reqData.token = data.userInfo.token;

      $.ajax({
        url: "http://demo.steltix.com/jderest/dataservice",
        type: "post",
        contentType: "application/json",
        data: JSON.stringify(reqData)
      }).done(function (data) {
        console.log(JSON.stringify(data))
        $('.results').html(JSON.stringify(data));
      })



    })

})