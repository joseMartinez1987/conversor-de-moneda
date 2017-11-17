var uf ;
var usd;
var euro;
var utm;
$.ajax({
	url:"http://mindicador.cl/api" ,
	method:"GET",
}).then(function(data){
	$("#dolar").text(data.dolar.valor);
	usd = data.dolar.valor
	uf = data.uf.valor
	euro = data.euro.valor
	utm = data.utm.valor
	$("#euro").text(data.euro.valor);
	$("#uf").text(data.uf.valor);
	$("#utm").text(data.utm.valor);
	
})
$('#myform').on("submit", function(event){
		event.preventDefault();
	$("#result_dolar").val(parseInt($("#monto").val()) / parseInt(usd) );
	$("#result_euro").val(parseInt($("#monto").val()) / parseInt(euro) );
	
	})