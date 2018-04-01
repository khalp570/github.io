$(function() {
	var $inputs = $('input[type="checkbox"]');

	$inputs.change(function() {
		var $input = $(this);
		var text = $input.attr('data-text');
		var destinationId = $input.attr('name');
		var $destination = $('[data-text-destination="' + destinationId + '"]');

		console.log('$destination', $destination);
		console.log('text', text);

		if ( $input.is(':checked') ) {
			$destination.html(text);
		} else {
			$destination.empty();
		}
	});
});