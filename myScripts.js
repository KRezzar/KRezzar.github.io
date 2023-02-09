$(document).ready(function() {

    // Executes when the HTML document is loaded and the DOM is ready
    alert("Document is ready");
});

// .load() method deprecated from jQuery 1.8 onward
$(window).on("load", function() {

     // Executes when complete page is fully loaded, including
     // all frames, objects and images
     alert("Window is loaded");
});


//get all id from class
window.onload = function(){ 
    var elements = document.getElementsByClassName("optionSkills");
    for (var i = 0; i < elements.length; i++) {
        elements[i].addEventListener('click', myFunction, false);
    }


    
    var myFunction = function() {
        var attribute = this.getAttribute("id");
        console.log(attribute);
    };
  };


  //hover color level 1

  window.onload = function(){ 
    var elements = document.getElementsByClassName("optionSkills");
    for (var i = 0; i < elements.length; i++) {
        elements[i].addEventListener('mouseover', mfMouserOver, false);
        elements[i].addEventListener('mouseout', mfMouserOut, false);
    }    
    function mfMouserOver(event) {
      var thisID = this.getAttribute("id");
      document.getElementById(thisID).style.backgroundColor = 'green';
      console.log(thisID+'in');
    }
    function mfMouserOut(event) {
      var thisID = this.getAttribute("id");
      document.getElementById(thisID).style.backgroundColor = '#FFFFFF';
      console.log(thisID+'out');
    }
  };

  
  //add inner html a icon per class elements per ID level 2

  window.onload = function(){ 
    var elements = document.getElementsByClassName("optionSkills");
    for (var i = 0; i < elements.length; i++) {
        elements[i].addEventListener('mouseover', mfMouserOver, false);
        elements[i].addEventListener('mouseout', mfMouserOut, false);
        var thisID  = elements[i].getAttribute("id"); //Get ID per Element on this Class
        var thisInnerHTML =document.getElementById(thisID).innerHTML;
        document.getElementById(thisID).innerHTML = thisInnerHTML+' <i id="'+thisID+'_hand" class="fa fa-hand-o-left" style="visibility:hidden;"></i>';
    }    
    function mfMouserOver(event) {
      var thisID = this.getAttribute("id");
      //document.getElementById(thisID).style.backgroundColor = 'green';
      document.getElementById(thisID+"_hand").style.visibility = "visible";
      console.log(thisID+'in');
    }
    function mfMouserOut(event) {
      var thisID = this.getAttribute("id");
      //document.getElementById(thisID).style.backgroundColor = '#FFFFFF';
      document.getElementById(thisID+"_hand").style.visibility = "hidden";
      console.log(thisID+'out');
    }
  };

  //set animation

  window.onload = function(){ 
    var elements = document.getElementsByClassName("optionSkills");
    for (var i = 0; i < elements.length; i++) {
        elements[i].addEventListener('mouseover', mfMouserOver, false);
        elements[i].addEventListener('mouseout', mfMouserOut, false);
        var thisID  = elements[i].getAttribute("id"); //Get ID per Element on this Class
        var thisInnerHTML =document.getElementById(thisID).innerHTML;
        document.getElementById(thisID).innerHTML = thisInnerHTML+' <i id="'+thisID+'_hand" class="fa fa-hand-o-left" style="visibility:hidden;"></i>';
    }    
    function mfMouserOver(event) {
      var thisID = this.getAttribute("id"); //get id of this class
      //set animation
      document.getElementById(thisID).setAttribute('data-in-effect', "rollIn");
      $(function () { $('#'+thisID).textillate('start'); })
      //set visibility of hand
      document.getElementById(thisID+"_hand").style.visibility = "visible";
      console.log(thisID+'in');
    }
    function mfMouserOut(event) {
      var thisID = this.getAttribute("id");
      //set animation
      //$(function () {$('#'+thisID).textillate('stop'); })
      document.getElementById(thisID+"_hand").style.visibility = "hidden";
      console.log(thisID+'out');
    }
   
    $(function () {
      //$('.optionSkills').textillate();
    })
  };


  //script full
  window.onload = function(){ 
    var elements = document.getElementsByClassName("optionSkills");
    for (var i = 0; i < elements.length; i++) {
        
       // elements[i].addEventListener('mouseover', mfMouserOver, false);
       // elements[i].addEventListener('mouseout', mfMouserOut, false);
      
        $(elements[i]).mouseenter(function(){
          //mfMouserOver();
          console.log('hoverJquery');
        });
        var thisID  = elements[i].getAttribute("id"); //Get ID per Element on this Class
        var thisInnerHTML =document.getElementById(thisID).innerHTML;
        document.getElementById(thisID).innerHTML = thisInnerHTML+' <i id="'+thisID+'_hand" class="fa fa-hand-o-left" style="visibility:hidden;"></i>';
    }    
    function mfOnClick(){
    
      var thisID = this.getAttribute("id"); //get id of this class
      //document.getElementById(thisID).innerHTML = thisInnerHTML+'sds';
      console.log('click'+thisID);
    }
    function mfMouserOver(event) {
      var thisID = this.getAttribute("id"); //get id of this class
      //set visibility of hand
      ResetOptionSkills();
     // document.getElementById(thisID+"_hand").style.visibility = "visible";
      document.getElementById(thisID).style.color = "black";
      //console.log(thisID+'in');
      //set animation
      document.getElementById(thisID).setAttribute('data-in-effect', "swing");
      //document.getElementById(thisID).setAttribute('data-out-effect', "swing");
      $(function () { $('#'+thisID).textillate('start'); })
     
    }
    function mfMouserOut(event) {
      var thisID = this.getAttribute("id");
      //set animation
      //$(function () {$('#'+thisID).textillate('stop'); })
     // document.getElementById(thisID+"_hand").style.visibility = "hidden";
      
     // console.log(thisID+'out');
    }


    function ResetOptionSkills(){
      for (var i = 0; i < elements.length; i++) {
        var thisID  = elements[i].getAttribute("id"); //Get ID per Element on this Class
        document.getElementById(thisID).style.color = "gray";
      }    

    }
  };
  


  //JQUERY EVENTS AND ANIMATION

  window.onload = function(){ 

    var elements = document.getElementsByClassName("optionSkills");
    for (var i = 0; i < elements.length; i++) {    
      $(elements[i]).click(function(){
        fnReset_OS();
        fnOnClick($(this).attr("id"));    
      });     
      $(elements[i]).mouseenter(function(){ //mouse enter event
        //fnReset_OS(elements[i]);
        fnMouseEnter($(this).attr("id"));    
      });
      $(elements[i]).mouseleave(function(){ //mouse exit event
        //fnReset_OS();
        fnMouseOut($(this).attr("id"));
      });
    }   
    function fnReset_OS(){
      for (var i = 0; i < elements.length; i++) {
          $(elements[i]).css("color", "gray");            
      }    
    }


  };
  function fnOnClick(thisID){
    $("#"+thisID).css("color", "Black");
    console.log('clicked'+thisID);
  }
  function fnMouseEnter(thisID){
    //set animation
  
    console.log('enter'+thisID);
  }
  function fnMouseOut(thisID){
    $("#"+thisID).attr('data-in-effect', "swing");
    $(function () { $('#'+thisID).textillate('start'); })
    //$(function () { $('#'+thisID).textillate('stop'); })
    console.log('out'+thisID);
  }
 
  // json to text


     
  window.onload = function(){ 

    

    var elements = document.getElementsByClassName("optionSkills");
    for (var i = 0; i < elements.length; i++) {    
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
    function fnReset_OS(){
      for (var i = 0; i < elements.length; i++) {
          $(elements[i]).css("color", "gray");            
      }    
    }


  };

 
  function fnOnClick(thisID){
    $("#"+thisID).css("color", "Black");
    let textContent = '{' +
                              '"s_1": {"title": "Doe","description": "Jane"},'+
                              '"s_2":{"title": "Smith","description": "Jane"}'+
                        '}';
    const jsonToText = JSON.parse(textContent);
    console.log(jsonToText);
    //console.log(jsonToText[thisID]['title']);
    $("#s_description").html(jsonToText[thisID]['title']);
    //console.log('clicked'+thisID+wew.thisID['title']);
  }
  function fnMouseEnter(thisID){
    //$(function () { $('#'+thisID).textillate('out'); })
    //console.log('enter'+thisID);
  }
  function fnMouseOut(thisID){
    $("#"+thisID).attr('data-in-effect', "swing");
    $(function () { $('#'+thisID).textillate('start'); })
    //console.log('out'+thisID);
  }
 

 //clean json dynamic value

 let textContent = '{' +
 '"s_1": {"title": "Web Development","description": "Desciption still on work"},'+
 '"s_2":{"title": "UI/UX Web Design","description": "Desciption still on work"},'+
 '"s_3":{"title": "Graphic Design","description": "Desciption still on work"},'+
 '"s_4":{"title": "Video Editing","description": "Desciption still on work"},'+
 '"s_5":{"title": "Audio Editing","description": "Desciption still on work"},'+
 '"s_6":{"title": "Wordpress","description": "Desciption still on work"},'+
 '"s_7":{"title": "Shopify","description": "Desciption still on work"},'+
 '"s_8":{"title": "Hubspot CMS","description": "Desciption still on work"}'+      
'}';
window.onload = function(){ 
var elements = document.getElementsByClassName("optionSkills");

for (var i = 0; i < elements.length; i++) {    
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
function fnReset_OS(){
for (var i = 0; i < elements.length; i++) {
$(elements[i]).css("color", "gray");            
}    
}


};



function fnOnClick(thisID){
$("#"+thisID).css("color", "Black");
fnDisplaySkillDescription(thisID);
}
function fnMouseEnter(thisID){

}
function fnMouseOut(thisID){
$("#"+thisID).attr('data-in-effect', "swing");
$('#'+thisID).textillate('start');
}

function fnDisplaySkillDescription(thisID){
const jsonToText = JSON.parse(textContent);
$("#s_title").html(jsonToText[thisID]['title']);
$("#s_description").html(jsonToText[thisID]['description']);
$('#s_description').textillate({ in: { effect: 'rollIn' } });
}


//sdsdsds

  
let textContent1 = '{' +
                      '"s_1": {"title": "Web Development","description": "Desciption still on work"},'+
                      '"s_2":{"title": "UI/UX Web Design","description": "Desciption still on work"},'+
                      '"s_3":{"title": "Graphic Design","description": "Desciption still on work"},'+
                      '"s_4":{"title": "Video Editing","description": "Desciption still on work"},'+
                      '"s_5":{"title": "Audio Editing","description": "Desciption still on work"},'+
                      '"s_6":{"title": "Wordpress","description": "Desciption still on work"},'+
                      '"s_7":{"title": "Shopify","description": "Desciption still on work"},'+
                      '"s_8":{"title": "Hubspot CMS","description": "Desciption still on work"}'+      
                '}';
window.onload = function(){ 
  var elements = document.getElementsByClassName("optionSkills");

  for (var i = 0; i < elements.length; i++) {    
    $(elements[i]).click(function(){
      fnReset_OS();
      fnOnClick($(this).attr("id"));    
    });     
    $(elements[i]).mouseenter(function(){ //mouse enter event
      fnMouseEnter($(this).attr("id"));    
    });
    $().mouseleave(function(){ //mouse exit event
      fnMouseOut($(this).attr("id"));
    });

    //var thisInnerHTML =$('#'+$(elements[i]).attr("id")).html();
   // $('#'+$(elements[i]).attr("id")).html(thisInnerHTML+' <i id="'+$(elements[i]).attr("id")+'_hand" class="fa fa-hand-o-left" style="visibility:hidden;"></i>');
  }   
  function fnReset_OS(){
    for (var i = 0; i < elements.length; i++) {
        $(elements[i]).css("color", "gray");   
       // $('#'+$(elements[i]).attr("id")+'_hand').css('visibility', 'hidden');         
    }    
  }
  /*$('#s_description').on('DOMSubtreeModified', function(){
    $('#s_description').textillate('start'); 
    console.log('changed');
  });*/

};



function fnOnClick(thisID){
  $("#"+thisID).css("color", "Black");
  //$('#'+thisID+'_hand').css('visibility', 'visible');  
  fnDisplaySkillDescription(thisID);
}
function fnMouseEnter(thisID){

}
function fnMouseOut(thisID){
  $("#"+thisID).attr('data-in-effect', "swing");
  $('#'+thisID).textillate('start');
}

function fnDisplaySkillDescription(thisID){
  const jsonToText = JSON.parse(textContent);
  $("#s_title").html(jsonToText[thisID]['title']);
  $("#s_description").html(jsonToText[thisID]['description']);
//  $("#s_description").removeAttr('data-in-effect');
  $("#s_description").attr('data-in-effect', "swing");
  $("#s_description").textillate('start');
}


//follow mouse cursor
$('#sectionTechnologies').mousemove(function(evt){
  var currentElementID = evt.target.id;
  var currentElementClass = evt.target.classList.contains('eB');
  var lastpositionLeft;var lastpositionTop;
  console.log(currentElementClass);
  
  if(currentElementClass){
     
          $("#follow").css({
            left: evt.pageX,
            top: evt.pageY   
          });
          lastpositionLeft = evt.pageX;
          lastpositionTop =evt.pageY;
          /*console.log('move');*/
  
  }else{
     
          $("#follow").css({
              left: lastpositionLeft,
              top: lastpositionTop 
          });
          /*console.log('stop');*/
   
     
    
  }
});


$('#sectionTechnologies').mousemove(function(evt){
  var currentElementID = evt.target.id;
  var currentElementClass = evt.target.classList.contains('eB');
  var lastpositionLeft;var lastpositionTop;
  console.log(currentElementClass);
  
  if(currentElementID){
     
          $("#follow").css({
            left: evt.pageX,
            top: evt.pageY   
          });
          lastpositionLeft = evt.pageX;
          lastpositionTop =evt.pageY;
  
  }else{
     
          $("#follow").css({
              left: lastpositionLeft,
              top: lastpositionTop 
          });
   
     
    
  }
});

$('#sectionTechnologies').mousemove(function(evt){
      console.log("wew");
});