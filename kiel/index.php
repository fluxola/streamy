<!DOCTYPE html>
<html lang="en">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
  <link href="https://vjs.zencdn.net/7.6.6/video-js.css" rel="stylesheet" />
  <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.3/jquery.min.js"></script>
  <script type="text/javascript" src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
  <script type="text/javascript" src="codebullshit.js"></script>
 
</head>

<body style="background-color:black; color:beige;">
  <div style="margin:auto;">
  <div style="width: 60vw; float: left; margin:5px">
 <video
    id="my-video"
    class="video-js"
    controls
    preload="auto"
    width="60vw"
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
<div style="width:35vw; height:70vh; float: left;">

  <div id="chatbox" style="
    text-align:left;
    margin:0 auto;
    margin-bottom:25px;
    padding:10px;
    background:#0D0D0D;
    height:100%;
    width:100%;
    border:1px solid #ACD8F0;
    overflow:auto;">

    <?php
  
    $handle = fopen("log.html", "r");
    $contents = fread($handle, filesize("log.html"));
    fclose($handle);
     
    echo $contents;
  
    ?>
  </div>
  <p style="background:#0D0D0D; color:beige;">
    Name: <input type="text" id="name" style="background:#0D0D0D; color:beige;" name="name">
    <textarea autocomplete="off" type="text" id="chat" name="chat" style="width: 100%; background:#0D0D0D; color:beige;" onkeypress="isEnter(event)"></textarea><br/>
    <button id="button" onclick="inputChat()"> Submit </button>
</p>
</div>

<div style="clear:both;"></div>
</div>

</body>
</html>
