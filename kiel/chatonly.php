<!DOCTYPE html>
<html lang="en">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
  <link href="https://vjs.zencdn.net/7.6.6/video-js.css" rel="stylesheet" />
  <script src="//code.jquery.com/jquery-1.12.0.min.js"></script>
  <script type="text/javascript" src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
  <script type="text/javascript" src="codebullshit.js"></script>
 
</head>

<body style="background-color:black; color:beige;">


<div style="width:100vw; float:left; clear:left;">

  <div id="chatbox" style="
    text-align:left;
    margin:0 auto;
    margin-bottom:25px;
    padding:10px;
    background:#0D0D0D;
    height:60vh;
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
  <p style="font-size: 20px; width: 100%; background:#0D0D0D; color:beige;">
      Name: <input type="text" id="name" style="font-size: 20px; width: 40%; background:#0D0D0D; color:beige;" name="name"><br/>
      <textarea autocomplete="off" type="text" id="chat" name="chat" style="font-size: 20px; width: 100%; background:#0D0D0D; color:beige;" onkeypress="isEnter(event)"></textarea>
      <button id="button" onclick="inputChat()" style="font-size: 20px; width: 100%;"> Submit </button>
  </p>
</div>


</div>
</body>
</html>