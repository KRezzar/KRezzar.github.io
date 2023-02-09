let textContent = '{' +
                    '"s_1": {"title": "Web Development","description": "Develop, Troubleshoot and custumize a Website from the scratch using PHP, HTML, CSS, JS, and different kinds of frameworks and plugins."},'+
                    '"s_2":{"title": "UI/UX Web Design","description": "Can Produce a Web design with an excellent user interface."},'+
                    '"s_3":{"title": "Graphic Design","description": "Create logos, banners, web page designs, and photo manipulation."},'+
                    '"s_4":{"title": "Video Editing","description": "Edit a video presentations with different transitions and effects."},'+
                    '"s_5":{"title": "Audio Editing","description": "Enhance your audio files to have a better quality, removes noise and adds some cool effects."},'+
                    '"s_6":{"title": "Wordpress","description": "I am knowledgeable in creating a template from a scratch, creating a child theme, manipulating some functions, etc. I am familiar with Elementor, woocommerce, SiteOrigin and many more plugins"},'+
                    '"s_7":{"title": "Shopify","description": "If you’re looking on starting an e-commerce website, I can help you with that with Shopify. Shopify is an excellent software if you want to sell your products online, I do personally recommend it if you want to start your online store."},'+
                    '"s_8":{"title": "Hubspot CMS","description": "Want to build a website in HubSpot? I am a certified HubSpot CMS developer and can help you in developing your website using this platform."}'+      
                    '}';

 // onload start  
window.onload = function(){ 
    var elements = document.getElementsByClassName("optionSkills");
    
    for (var i = 0; i < elements.length; i++) {//Loop all elements using class get all their ID   
        $(elements[i]).click(function(){
            fnReset_OS();
            fnOnClick($(this).attr("id"));    
        });     
        $(elements[i]).mouseenter(function(){ //mouse enter event
            fnMouseEnter($(this).attr("id"));    
        });
        $(elements[i]).mouseleave(function(){ //mouse exit event
            fnMouseOut($(this).attr("id"));
        });
    }   

    function fnReset_OS(){//reset animation skills
        for (var i = 0; i < elements.length; i++) {
            $(elements[i]).css("color", "gray");   
            $('#'+$(elements[i]).attr("id")+'_hand').css('visibility', 'hidden');         
        }    
    }
    //start button in welcome
    $("#btnStart").click(function() {
        //onclick
        ctrProgressTimer =0;
        $("#myProgress-bar-container").css('visibility','visible');
        $("#btnStart").css('visibility','hidden');

        myTimer = setInterval(function() {ctrProgressTimer += 10;  $("#myProgress-bar").css('width',ctrProgressTimer+'%');console.log(ctrProgressTimer);}, 100);
        $(".bw-img").css('filter','none');
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#sectionSkills").offset().top
        }, 2000);

        //after auto scrolled
        setTimeout(() => {
            /*$(".bw-img").css('filter','grayscale(100%)');*/
            $("#myProgress-bar-container").css('visibility','hidden');
            $("#myProgress-bar").css('width','0%');
            $("#btnStart").css('visibility','visible');
            clearInterval(myTimer); 
            console.log('Done');
        }, 4000);
    });
    // certificate carousel
   
    //ball animation start
    var switchDrag =false;
    var startPosLeft =  $("#tunnelStartCircle").offset().left;
    var startPosTop =  $("#tunnelStartCircle").offset().top;
    var clickCounter =0;
    console.log(startPosLeft+" - "+ startPosTop);
    /*$("#mycursor").css({ //circle animation
        left:startPosLeft+130,
        top: startPosTop-140
    });*/

    $("#mycursor").draggable();
    $( "#droppable" ).droppable({
        drop: function( event, ui ) {
         /* $( this )
            .addClass( "ui-state-highlight" )
            .find( "p" )
              .html( "Dropped!" );*/
              switchDrag =false;
              $('#toast-body').html('I will stop chasing you now, Thank you for bringing me back on my real home! &#128525;');
              $('#myToast').toast('show');
              console.log('droppable');
        }
    });
   
    $( "#mycursor" ).mousedown(function() {setBallPos($("#mycursor").offset().top,$("#mycursor").offset().left);$("#ball_msg").css('visibility','hidden');$("#mycursor").css('transition-duration','0s');switchDrag =false;});
    $( "#mycursor" ).mouseup(function() { 
        toastSetter(clickCounter);
        switchDrag =true;
        if(clickCounter==0){
            $("#mycursor").css('filter','none');
            $("#follow").attr("src", "img/extras/ball-animation-cursor.gif");
        }
        clickCounter++;
    });
    $('#sectionTechnologies').mousemove(function(e){
        if(switchDrag){
            $("#mycursor").css('transition-duration','0.8s');
            $("#mycursor").css({ //circle animation
                left: (e.pageX - 15),
                top: (e.pageY - 15),
                display:'block'
            });
            //console.log(e.pageY);
        }
    });
   //ball animation end
   //send email start
    $( "#client_email" ).keyup(function() {
        if(isEmail($("#client_email").val()) == false){
            $("#client_email").get(0).setCustomValidity('Invalid');
         }else{
            $("#client_email").get(0).setCustomValidity('');
         }
    });
    $("#btnSend").click(function() {
         if(!validateForm()){return;};
         console.log('proceeded');
         $('#btnSend').prop('disabled', true);
       var data = {
            service_id: 'service_kssev4d',
            template_id: 'template_20mlzvp',
            user_id: '4hRP5epHr-6um0O7V',
            template_params: {
                'client_name': $("#client_name").val(),
                'client_email': $("#client_email").val(),
                'client_message':$("#client_message").val()
            }
        };
         
        $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
            type: 'POST',
            data: JSON.stringify(data),
            contentType: 'application/json'
        }).done(function() {
            $('#myNotification').toast('show');
            $('#ContactFormModal').modal('hide');
          
            console.log('Your mail is sent!');
        }).fail(function(error) {
            console.log('Oops... ' + JSON.stringify(error));
        });


    });
    $('#ContactFormModal').on('hidden.bs.modal', function (e) {
        clearForm();
    })
   //send email end
};
 // onload end
function clearForm(){
    if($('.needs-validation').hasClass('was-validated')){$('.needs-validation').removeClass('was-validated');    console.log('clear');}
    $('#btnSend').prop('disabled', false);
    $("#client_name").val('');
    $("#client_email").val('');
    $("#client_message").val('');
}
function validateForm(){
    var myBool = false;
    var forms = document.querySelectorAll('.needs-validation')
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
     
       /* $('#'+form[0].id).get(0).setCustomValidity('Invalid');
        $('#'+form[1].id).get(0).setCustomValidity('Invalid');
        $('#'+form[2].id).get(0).setCustomValidity('');*/
        
          if (!form.checkValidity()) {
            console.log('incomplete');
            myBool = false;
          }else{
            //console.log('send');
            myBool = true;
          }
          form.classList.add('was-validated');
          
      })

      return myBool;
}


function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}
function toastSetter(ctr){
   var byTens = ctr % 10;
   var bythrees = ctr % 3;
    if(ctr==0){
        $('#myToast').toast('show');
    }
    /*else if(ctr==1){
       // $('#myToast').toast('hide');
        setTimeout(() => {
            $('#toast-body').html("I won't stop chasing you now! &#128514;");
            $('#myToast').toast('show');
        }, 1000);
     
    }
    else if(ctr==3){
        //$('#myToast').toast('hide');
        setTimeout(() => {
            $('#toast-body').html("Please help me to get back on my real home... &#128583;");
            $('#myToast').toast('show');
        }, 1000);
    }*/
    else if(bythrees==0){
        $('#toast-body').html('Interested in working together? <br><a href = "mailto: rezzar.t@usource.me""> Click here to send a message.<i class="fa fa-envelope" aria-hidden="true" ></i></a>');
        $('#myToast').toast('show');
    }
    else if(byTens==0){
        $('#toast-body').html('It looks like your having fun? My inbox is always open &#128525;');
        $('#myToast').toast('show');
    }
}
function setBallPos(ctop,cleft){
    $("#mycursor").css({ //circle animation
        left: cleft,
        top: ctop,
        position: 'absolute'
    });
}

function fnOnClick(thisID){
    $("#"+thisID).css("color", "Black");
    $('#'+thisID+'_hand').css('visibility', 'visible');  
    fnDisplaySkillDescription(thisID);
}
function fnMouseEnter(thisID){

}
function fnMouseOut(thisID){
    playTextAnimation(thisID,'data-in-effect','swing','start')
}

function DisplayText(thisID){
    const jsonToText = JSON.parse(textContent);
    $("#s_title").html(jsonToText[thisID]['title']);
    $("#s_description").html(jsonToText[thisID]['description']);
    $("#s_description").html('<p id="clone_s_description">'+jsonToText[thisID]['description']+'</p>');

}
function fnDisplaySkillDescription(thisID){ 
  $.when( DisplayText(thisID) )
  .then( playTextAnimationDelay('clone_s_description','data-in-effect','bounceInUps','start'));       
}

function playTextAnimation(thisID,status,thiseffect,todo){
    $("#"+thisID).attr(status, thiseffect);
    $("#"+thisID).textillate(todo);
    $("#"+thisID).removeAttr(status);

 
  
}
function playTextAnimationDelay(thisID,status,thiseffect,todo){
    $("#"+thisID).textillate({
        minDisplayTime: 2000,
        in: {
            // set the effect name
          effect: thiseffect,
      
          // set the delay factor applied to each consecutive character
          delayScale: 1.5,
      
          // set the delay between each character
          delay: 20,
      
          // set to true to animate all the characters at the same time
          sync: false,
      
          // randomize the character sequence
          // (note that shuffle doesn't make sense with sync = true)
          shuffle: false,
      
          // reverse the character sequence
          // (note that reverse doesn't make sense with sync = true)
          reverse: false,
      
          // callback that executes once the animation has finished
          callback: function () {}
        }
      });
  
}