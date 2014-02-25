var albumPerRow = 2;
var appid = document.URL.match(/appid=(.\d*)/i)[1];

window.fbAsyncInit = function() {
  FB.init({
    appId      : appid, //1409816439271990, 735983303092584
    status     : true, // check login status
    cookie     : true, // enable cookies to allow the server to access the session
    xfbml      : true  // parse XFBML
  });

  FB.Event.subscribe('auth.authResponseChange', function(response) { 
    if (response.status === 'connected') {
      testAPI();
      
      jQuery(document).ready(function($){
        var albumID      = "",
            coverPhotoID = "",
            title        = "",
            thumbURL     = "",
            albumArray   = [],
            divBlock     = "";

        // List all albums, only runs on home page
        if( $("body").has("span#home").length != 0 ){
          $(".mainTitle > p").text("Albums");
          $(".leftBtn > a").hide();
          
          FB.api('/me/albums', {fields: ["id","name","cover_photo"]}, function(response) {
            console.log(response.data[0]);
            albumArray = response.data;
          
            var i = 0;
            $.each( albumArray, function(key,val){
              coverPhotoID = val.cover_photo;
              FB.api('/'+coverPhotoID, {fields: "images"}, function(response) {
                albumID  = val.id;
                title    = val.name;
                console.log(title);


                console.log(response);
                thumbURL = response.images[response.images.length-3].source;
                console.log(thumbURL);

                if( i % albumPerRow == 0 ){
                  $("#main").append("<div class='row albumRow'></div>");
                };

                divBlock = '<a href="/album?albid='+albumID+'&title='+title+'&appid='+appid+'&"> \
                              <div class="large-6 columns albumDiv"> \
                                <img src="'+thumbURL+'"><p class="albumTitle">'+title+'</p>\
                              </div> \
                            </a>';
                $(".albumRow").last().append(divBlock);

                i += 1;
              });
            });
          });
        };

        // List all photos in one album, only runs on album page
        if( $("body").has("span#album").length != 0 ){
          albumID = document.URL.match(/albid=(.\d*)&/i)[1];
          title = document.URL.match(/title=(.*)&./i)[1];
          title = title.replace(/(%20)/g, " ");

          $(".mainTitle > p").text(title); // display album title
          $(".leftBtn > a").attr("href",'../?appid='+appid+'');
          $(".leftBtn > a").show();

          FB.api('/'+albumID+'/photos', {fields: "images"}, function(response) {
            console.log(response);

            photoArray = response.data;

            var i = 0;
            $.each( photoArray, function(key,val){
              thumbURL = val.images[val.images.length-1].source;
              fullFrameURL = val.images[0].source;

              divBlock = '<div class="large-4 columns photoThumb">\
                            <a class="fancybox" rel="group" href="'+fullFrameURL+'"> \
                              <img src="'+thumbURL+'"> \
                            </a> \
                          </div>';
              $("#main").append(divBlock);

              i += 1;
            });
          });
        };

      });


    } else if (response.status === 'not_authorized') {
      console.log("not_authorized");  
      FB.login(function(response) {
         // handle the response
       }, {scope: ['user_friends','user_photos']});
    } else {
      console.log("not login")
      FB.login(function(response) {
         // handle the response
       }, {scope: ['user_friends','user_photos']});
    }
  });
};



// Load the SDK asynchronously
(function(d){
 var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
 if (d.getElementById(id)) {return;}
 js = d.createElement('script'); js.id = id; js.async = true;
 js.src = "//connect.facebook.net/en_US/all.js";
 ref.parentNode.insertBefore(js, ref);
}(document));



// Simple test of the Graph API after login is successful 
function testAPI() {
  console.log('Welcome!  Fetching your information.... ');
  FB.api('/me', function(response) {
    console.log('Good to see you, ' + response.name + '.');
  });
}

