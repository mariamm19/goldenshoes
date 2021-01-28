function estimateDelivery(){
    moment().format();
    var selectedDate = $('#datepicker').datepicker('getDate'); 
    
    $('[data-delivery-offset]').each(function(){
      var offset = $(this).data('delivery-offset');
      var shipDate = moment(selectedDate).add(offset, 'weeks').format('D MMM YY');
      $(this).text(shipDate);
    });  
  };
  
  $( '#datepicker' ).datepicker({
    dateFormat: 'd M y'
  });
  
  $('#datepicker').change(function() {
    estimateDelivery();
    $('label[data-delivery-offset]').addClass('animate');
    setTimeout(function() {
      $('.animate').removeClass('animate')
    }, 1000);
  });
  
  
  estimateDelivery();