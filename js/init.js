(function($){
  $(function(){

    $('.button-collapse').sideNav();

  }); // end of document ready
})(jQuery); // end of jQuery name space


// MODAL >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

$(document).ready(function() {
  $('.modal-trigger').leanModal({
  	dismissible: true, // Modal can be dismissed by clicking outside of the modal
      opacity: .5, // Opacity of modal background
      in_duration: 300, // Transition in duration
      out_duration: 200, // Transition out duration
      starting_top: '4%', // Starting top style attribute
      ending_top: '10%', // Ending top style attribute
      
    });
  $('.modal-clos').closeModal();

  $('.collapsible').collapsible({
      accordion: false, // A setting that changes the collapsible behavior to expandable instead of the default accordion style
      onOpen: function(el) { alert('Open'); }, // Callback for Collapsible open
      onClose: function(el) { alert('Closed'); } // Callback for Collapsible close
    }
  );
});

//END of MODAL >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

