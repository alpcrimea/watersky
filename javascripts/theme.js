$(document).ready(function() {
	$("#time-report>tbody>tr:last").wrap('<tfoot />')
	var lastrow=$('#time-report>tbody>tfoot').detach()
	$('#time-report').append(lastrow)
	$.getScript("/themes/watersky/javascripts/jquery.tablesorter.min.js", function() {
		$("#time-report").tablesorter();
	});
});
