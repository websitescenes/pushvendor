$('#customItem').modal('hide');
$('.sale_form_details').html("<%= escape_javascript render(:file => 'sales/_form.html.erb') %>");
$('body').removeClass('modal-open');