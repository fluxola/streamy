<!DOCTYPE html>
<html lang="en">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
  <link href="https://vjs.zencdn.net/7.6.6/video-js.css" rel="stylesheet" />
  <script src="//code.jquery.com/jquery-1.12.0.min.js"></script>
  <script type="text/javascript" src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
  <script type="text/javascript" src="codebullshit.js"></script>
 
</head>

<body style="background:#0D0D0D; color:beige; font-size: 40px;">
<div style="float:left">
  <div style="width: 98vw; align-content: center; text-align: center; float:left;">
 <video
    id="my-video"
    class="video-js"
    controls
    preload="auto"
    width="100vw"
    height="auto"
    poster="egnerpin1.png"
    data-setup='{"fluid": true}'
  >
    <source src="live/test/index.m3u8" type="application/x-mpegURL" />

    <p class="vjs-no-js">
      To view this video please enable JavaScript, and consider upgrading to a
      web browser that
      <a href="https://videojs.com/html5-video-support/" target="_blank"
        >supports HTML5 video</a
      >
    </p>
  </video>

  <script src="https://vjs.zencdn.net/7.6.6/video.js"></script>

</div>


<div style="width:95vw; float:left; clear:left;">

  <div id="chatbox" style="
    text-align:left;
    margin:0 auto;
    margin-bottom:25px;
    padding:10px;
    background:black;
    height:20vh;
    width:95vw;
    border:1px solid #ACD8F0;
    overflow:auto;" >

    <?php
  
    $handle = fopen("log.html", "r");
    $contents = fread($handle, filesize("log.html"));
    fclose($handle);
     
    echo $contents;
  
  ?>
  </div>
  <p style="font-size: 40px; width: 100%; background:#0D0D0D; color:beige;">
      Name: <input type="text" id="name" style="font-size: 40px; width: 40%; background:#0D0D0D; color:beige;" name="name"><br/>
      <textarea autocomplete="off" type="text" id="chat" name="chat" style="font-size: 40px; width: 100%; background:#0D0D0D; color:beige;" onkeypress="isEnter(event)"></textarea>
      <button id="button" onclick="inputChat()" style="font-size: 40px; width: 100%;"> Submit </button>
  </p>
</div>


</div>
</body>
</html>
