setInterval(loadLog, 1000);	

function loadLog(){	
  
  var chatBefore = document.getElementById('chatbox');
  var oldscrollHeight = chatBefore.scrollHeight - 20;

  $.ajax({
    url: "log.html",
    cache: false,
      success: function(html){		
        $("#chatbox").html(html);		

        var chatAfter = document.getElementById('chatbox');
        var newscrollHeight = chatAfter.scrollHeight - 20;
        if(newscrollHeight > oldscrollHeight){
          $("#chatbox").animate({ scrollTop: newscrollHeight }, 'normal'); 
        }	
      },
  });
}
function inputChat() 
{
  var nameField = document.getElementById('name');
  var chatField = document.getElementById('chat');
  var nameInput = $('#name').val();
  var chatInput = $('#chat').val();
  if (nameInput != "")
  {
    $.ajax({
    type: 'POST',
    url: 'chat.php',
    data: { name: nameInput, chat: chatInput },
    success: function(response) {
        console.log(response);
        }
    });
    nameField.value = nameInput;
    chatField.value = "";
    scrollToBottom();
  }
}

function isEnter(e){
     if (e.keyCode == 13)
     {
      inputChat();
     }
}
