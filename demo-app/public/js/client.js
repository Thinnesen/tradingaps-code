$(function(){
	$.get('/counties', appendToList);
	function appendToList(counties){
		var list = ['<option value="vazio"></option>'];
		$('#infocenas').hide();
		for(var i in counties){
			list.push($('<option>',{value: counties[i], text: counties[i]}));
		}
		$('.counties-sel').append(list);
	}
	$(function(){
	    $('.counties-sel').change(function() {
	         $('.county-name').html($(this).val());
			 $.get('/weather/' + $(this).val() + '/daily', setTemperature);
	    }).change();
	});
	function setTemperature(temperature){
		$('.counties-sel').val() === 'vazio' ? $('#infocenas').hide() : $('#infocenas').show();
		$('.temperature').html(Math.round(temperature) + 'º');
	}
	function setTemperatureTomorrow(temperature2){
		$('.temperatureT').html(Math.round(temperature2) + 'º');
	}
	$(".btn-success").click(function(){
		 $.get('/weather/' + $('.counties-sel').val(), setTemperatureTomorrow);
	});
});
