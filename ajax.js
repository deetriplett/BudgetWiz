// for the contact page, retrieves FORM HTML
$( document ).ready(function() {
$.ajax({
          type: 'GET',
          url:  url,

          success: function(data){
              console.log(data);
          },
          async:false
      });

$.//End ajax
});//End Ready
