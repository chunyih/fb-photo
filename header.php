<!DOCTYPE html>
<html>
<head>
  <title>Facebook Wonderland</title>
  <!-- <link rel="stylesheet" type="text/css" href="/css/foundation.css"> -->
  <link rel="stylesheet" type="text/css" href="/css/normalize.css">
  <link rel="stylesheet" type="text/css" href="//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css" >
  <link rel='stylesheet' type='text/css' href='https//fonts.googleapis.com/css?family=Open+Sans:400,300'>
  <link rel="stylesheet" type="text/css" href="/fancybox/source/jquery.fancybox.css?v=2.1.5" media="screen" />
  <link rel="stylesheet" type="text/css" href="/fancybox/source/helpers/jquery.fancybox-buttons.css?v=1.0.5" media="screen" />
  <link rel="stylesheet" type="text/css" href="/fancybox/source/helpers/jquery.fancybox-thumbs.css?v=1.0.7" media="screen" />
  <link rel="stylesheet" type="text/css" href="/css/style.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script> <!-- [IMP!] MUST BE IN HEADER -->
</head>
<body>
<div id="fb-root"></div>
  
  <nav class="top-bar" data-topbar>
    <div class="topBarContent">
      <div class="leftBtn">
        <a id="#backHome" href="../">
          <i class="fa fa-angle-left"><div>Albums</div></i></div>
        </a>
      <div class="mainTitle"><p></p></div>
      <div class="rightBtn">
        <div class="fb-login-button" data-max-rows="1" data-size="medium" data-show-faces="false" data-auto-logout-link="true" scope="user_photos"></div>
      </div>
    </div>
  </nav>

  <div class="row main" id="main"></div>


  <script src="/js/fb.js"></script>



  