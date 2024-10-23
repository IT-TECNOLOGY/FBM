$('#sf2').hide();


var salario = 0.00;
var familia = 0;
var HT = 0;
var valeA = 0.00;
var insaL = 0;
var insaM = 0;
var insaG = 0;
var peri = 0;
var vt = 0;
var inss = 0.00;
var irrf = 0.00;
var fgts = 0.00;
var sf1 = 0;
var sf = 0;
var salarioBruto = 0.00;
var insa = 0;
var salarioH = 0.00;
var HT2 = 0.00;
var HE2 = 0.00;
var HE3 = 0.00;
var pericu = 0.00;
	var filhosE = 0;
	var salario13 = 0;
	var conteudoHTML = '';
	var mensagem = '';
  var diasT = 0;
  var horasT = 0;
	$('#pegaS').val(0);
	$('#pegaH').val(0);
	$('#pegaHdias').val(0);
	$('#pegaDias').val(0);
	$('#pegaFE').val(0);
	$('#pegaF').val(0);
	$('#pegaVA').val(0);
	$('#pegaHE').val(0);
	$('#pegaHE2').val(0);
	$('#pegaHE3').val(0);
	$('#pegaVT').val(0);
	$('#mostraHoras').val(0);

	setInterval(function(){
			salario = parseFloat($("#pegaS").val());
			HT = parseInt($("#pegaH").val());
			familia = parseInt($("#pegaF").val());
			valeA = parseFloat($("#pegaVA").val());
			insaL = $("#pegaIL").val();
			insaM = $("#pegaIM").val();
			insaG = $("#pegaIG").val();
			peri = $("#pegaP").val();
			vt = parseFloat($("#pegaVT").val());
			irrf = $("#pegaIRRF").val();
			sf1 = 62.04;
			sf = parseFloat(sf1);
			filhosE = parseInt($('#pegaFE').val());
			salarioH = parseFloat(salario/HT);
    diasT = parseInt($('#pegaDias').val());

    //HORAS TRABALHADAS
			if(HT > 0){

        //DIAS TRABALHADOS
        if(diasT > 0){
        horasT = diasT*$('#pegaHdias').val(); 
        salario = parseFloat(salarioH*horasT);
        $('#mostraHoras').val(horasT+"h");
        }
        
			$('#mostraSH').val(salarioH.toFixed(2));
			$('#mostraS').val(salario.toFixed(2));
			}else{
				$('#mostraSH').val(0.00.toFixed(2));
				$('#mostraS').val(0.00.toFixed(2));
			}
    

		if($('#pegaS').val() > 0){
			$('#totalSB').html('Salário base <br> R$ '+salario.toFixed(2));
		}

		// Supondo que você tenha as variáveis salario, familia e filhosE definidas anteriormente
		if (filhosE > 0) {
			// Calcula o salário família
			var salarioFamilia = sf * filhosE;
			var totalFilhos = 0;

			if(salario < 1819.26){
			salarioFamilia = sf * (filhosE + familia);
				totalFilhos = filhosE + familia;
				$('#sf2').hide();
				$('#sf').show();
			// Exibe o resultado
			$('#mostraF').val((salarioFamilia).toFixed(2));
			}else{
				totalFilhos = filhosE;
				$('#sf2').hide();
				$('#sf').show();
				// Exibe o resultado
				$('#mostraF').val((salarioFamilia).toFixed(2));
			}

		} else if(familia > 0){
			var salarioFamilia = 0.00;
			var totalFilhos = familia;
			if(salario < 1819.26){
				$('#sf2').hide();
				$('#sf').show();
			// Calcula o salário família considerando apenas filhos normais
			salarioFamilia = sf * (familia);
			// Exibe o resultado
			$('#mostraF').val(salarioFamilia.toFixed(2));
			}else{
				$('#sf').hide();
				$('#sf2').show();
				$('#sf2').html("<b>OBS:</b> Salário acima do limite");
			}
		}else{
			$('#mostraF').val(0.00.toFixed(2));
			var salarioFamilia = 0.00;
		}

		// Verifica se o campo vale transporte está vazio
		if ($('#pegaVA').val() == '') {
				valeA = 0;
				$('#mostraVA').val(valeA.toFixed(2));

		} else {
				// Converte o valor do campo para um número
				valeA = parseFloat($("#pegaVA").val());
				$('#mostraVA').val(valeA.toFixed(2));
		}




		// Verifica se a opção do 13º salário está marcada
		var mesesTrabalhados = 6;

		// Calcula o 13º salário se a opção estiver marcada
		if ($('#pega13').is(":checked")) {
				salario13 = (salario / 12) * mesesTrabalhados;
				$('#mostra13').val(salario13.toFixed(2));
		} else {
				salario13 = 0;
				$('#mostra13').val(salario13.toFixed(2));
		}


		if ($("#pegaIL").is(":checked")) {
				insa = (1412 * 0.1);
			var insalubridade = 10;
				// Acumula o valor de insalubridade no salário bruto
		} else if ($("#pegaIM").is(":checked")) {
				// Lógica para insalubridade média...
				insa = (1412 * 0.2);
			var insalubridade = 20;
				// Acumula o valor de insalubridade no salário bruto
		} else if ($("#pegaIG").is(":checked")) {
				// Lógica para insalubridade média...
				insa = (1412 * 0.4);
			var insalubridade = 40;
				// Acumula o valor de insalubridade no salário bruto
		} else {
				insa = 0;
		}
		// Arredonda para 2 casas decimais
		insa = parseFloat(insa.toFixed(2));
		if(insa >= 1){
			$('#mostraI').val(+ insa.toFixed(2))
			$('#mostraIS').val(+ (insa + salario).toFixed(2));
		}else{
			$('#mostraI').val(0.00.toFixed(2));
			$('#mostraIS').val(0.00.toFixed(2));
		}

		if ($("#pegaP").is(":checked")) {
			pericu = (parseFloat(salario) * 0.3);
			$(`#mostraP`).val(+ pericu.toFixed(2));
			$(`#mostraPS`).val(+ (salario + pericu).toFixed(2));
		} else{
			pericu = 0;
			$(`#mostraP`).val(0);
			$(`#mostraPS`).val(0);
		}

		//HORAS EXTRAS
    var he = parseInt($("#pegaHE").val());
		// Verifica se o campo de horas extras não está vazio
		if (he > 0 || he != '') {
				// Calcula o valor das horas extras com 50% de acréscimo
				HT2 = (parseFloat((salario + insa + pericu) / HT) * 1.50) * $(`#pegaHE`).val();
				$('#mostraHE').val(HT2.toFixed(2));
		} else {
      he = 0;
      HT2 = 0;
      $("#pegaHE").val(0);
				$('#mostraHE').val(0);
		}

		var horaE2 = parseInt($('#pegaHE2').val());

		if(horaE2 > 0 || horaE2 != ''){
			HE2 = (parseFloat(((salario + insa + pericu)/HT)) * 2) * $(`#pegaHE2`).val();
			$('#mostraHE2').val(+ HE2.toFixed(2));
		}else{
        horaE2 = 0;
      HE2 = 0;
      $("#pegaHE2").val(0);
			$('#mostraHE2').val(0);
		}

		var horaE3 = parseInt($('#pegaHE3').val());

		if(horaE3 > 0 || horaE3 != ''){
			HE3 = (parseFloat(((salario + insa + pericu)/HT)) * 2) * $(`#pegaHE3`).val();
			$('#mostraHE3').val(+ HE3.toFixed(2));
		}else{
      horaE3 = 0;
      HE3 = 0;
      $("#pegaHE3").val(0);
			$('#mostraHE3').val(0);
		}

		var totalHE = parseFloat(HT2) + parseFloat(HE2) + parseFloat(HE3);
		var totalHoras = parseInt(he) + parseInt(horaE2) + parseInt(horaE3) + "h";

		$('#mostraTotalHE').val(totalHE.toFixed(2));

		// Mostra salário bruto
		salarioBruto = salario + salarioFamilia + insa + valeA + totalHE + pericu + salario13;
		if(salarioBruto > 0){
		$('#mostraSB').val(+ salarioBruto.toFixed(2));
			$('#totalVenc').html('Total de Vencimentos: R$' + salarioBruto.toFixed(2));
		}else{
			$('#mostraSB').val(0);
		}

		//descontos

		// Verifica se o campo vale transporte está vazio
		if ($('#pegaVT').val() === '') {
				vt = 0.00;
				$('#mostraVT').val(+ vt.toFixed(2));
		} else {
				// Converte o valor do campo para um número
				vt = parseFloat($("#pegaVT").val());
				$('#mostraVT').val(+ vt.toFixed(2));
		}

	if($('#pegaFGTS').is(":checked")){
		fgts = parseFloat(salarioBruto) * 0.08;
		$('#mostraFGTS').val(fgts.toFixed(2));
		$('#FGTSmes').html("FGTS do mês <br> R$"+fgts.toFixed(2));
		$('#baseFGTS').html("Base FGTS <br> R$"+fgts.toFixed(2));
	}else{
		$('#mostraFGTS').val(0.00.toFixed(2));
	}

		if ($('#pegaINSS').is(":checked")) {
			if (salarioBruto > 0 && salarioBruto <= 1412.00) {
					inss = (salarioBruto * 0.075);
				var refINSS = 7.5;
			} else if (salarioBruto >= 1412.01 && salarioBruto <= 2666.68) {
					inss = (salarioBruto * 0.09) - 21.18;
				var refINSS = 9;
			} else if (salarioBruto >= 2666.69 && salarioBruto <= 4000.03) {
					inss = (salarioBruto * 0.12) - 101.18;
				var refINSS = 12;
			} else if (salarioBruto >= 4000.04 && salarioBruto <= 7786.02) {
					inss = (salarioBruto * 0.14) - 181.18;
				var refINSS = 14;
			} else if (salarioBruto >= 7786.03) {
					inss = (salarioBruto * 0.14) - 181.18;
				var refINSS = 14;
			}
			$('#mostraINSS').val(inss.toFixed(2));
			$('#baseINSS').html("Base INSS <br> R$"+inss.toFixed(2));
	} else {
			inss = 0.00;
			$('#mostraINSS').val(inss.toFixed(2));
	}

	if ($('#pegaIRRF').is(":checked")) {
			if (salarioBruto > 0 && salarioBruto <= 2112.00) {
					irrf = 0.00;
				var faixa = 1;
			} else if (salarioBruto >= 2112.01 && salarioBruto <= 2826.65) {
					irrf = (salarioBruto * 0.075) - 158.40;
				var refIRRF = 7.5;
				var faixa = 2;
			} else if (salarioBruto >= 2826.66 && salarioBruto <= 3751.05) {
					irrf = (salarioBruto * 0.15) - 370.40;
				var refIRRF = 15;
				var faixa = 3;
			} else if (salarioBruto >= 3751.06 && salarioBruto <= 4664.68) {
					irrf = (salarioBruto * 0.225) - 651.73;
				var refIRRF = 22.5;var faixa = 1;
				var faixa = 4;
			} else if (salarioBruto >= 4664.69) {
					irrf = (salarioBruto * 0.275) - 884.96;
				var refIRRF = 27.5;
				var faixa = 5;
			}
			$('#mostraIRRF').val(irrf.toFixed(2));
			$('#baseIRRF').html("Base IRRF <br> R$"+irrf.toFixed(2));
			$('#faixaIRRF').html("Faixa IRRF <br> "+faixa);
	} else {
			irrf = 0.00;
			$('#mostraIRRF').val(irrf.toFixed(2));
	}

		var totalDesc = parseFloat(irrf) + parseFloat(inss) + parseFloat(fgts) + parseFloat(vt);

		$('#totalDesc').html('Total de Descontos: R$' + totalDesc.toFixed(2));


		var salarioLiquido = salarioBruto - inss - vt - irrf;

		// Verifica se o resultado é um número válido
		if (!isNaN(salarioLiquido) && isFinite(salarioLiquido)) {
				$('#mostraSL').val(salarioLiquido.toFixed(2));
		} else {
				$('#mostraSL').val("Erro no cálculo");
		}

		$('#totalLiquid').html("R$"+salarioLiquido.toFixed(2));

		// Seleciona todos os inputs do tipo checkbox
		$('input[type="checkbox"]').each(function() {
				// Aplica o estilo CSS desejado a cada checkbox
				$(this).css('height', '25px');
		});

		var empregador = $('#pegaPatrao').val();
		var empresa = $('#pegaEmpresa').val();
		var endereco = $('#pegaEnd').val();
		var cnpj = $('#pegaCNPJ').val();
		var codigo = $('#pegaCodigo').val();
		var cbo = $('#pegaCBO').val();
		var funcionario = $('#pegaFunc').val();
		var funcao = $('#pegaFuncao').val();
		var dias = $('#pegaDias').val();
		var empresaText = '';

		if(empregador != ''){
		$('#empregador').html(empregador);
			}else{
		$('#empregador').html('');
			}
				if(empresa != '' || endereco != '' || cnpj != ''){
				empresaText = empresa + '<br>' + endereco + '<br>' + cnpj;
		$('#mostraEmp').html(empresaText);
			}else{
	empresaText = '';
			}

		if(codigo != ''){
			$('#mostraCodigo').html(codigo);
		}

		if(funcionario != ''){
			$('#mostraFunc').html(funcionario);
		}else{
			funcionario = '';
		}

		if(cbo != ''){
			$('#mostraCBO').html(cbo);
		}else{
			cbo = '';
		}

		if(funcao != ''){
		$('#mostraFuncao').html(funcao);
		}else{
			funcao = '';
		}

		var cod = 0;

		//cria um texto para cada situação
		if (salario != 0) {
				conteudoHTML = '<tr class="salario"><td width="100px" style="border: 2px solid;">' + cod1 +
						'</td><td width="500px" style="text-align: start; border: 2px solid;">Salário Base</td><td width="150px" style="text-align: center; border: 2px solid;">' + HT + ":00" +
						'</td><td style="text-align: end; border: 2px solid;">' + salario.toFixed(2) +
						'</td><td style="text-align: end; border: 2px solid;"></td></tr>';
		}

		if (salarioFamilia > 0) {
				conteudoHTML += '<tr class="salario"><td width="100px" style="border: 2px solid;">' + cod2 +
						'</td><td width="500px" style="text-align: start; border: 2px solid;">Salário Família</td><td width="150px" style="text-align: center; border: 2px solid;">' + totalFilhos +
						'</td><td style="text-align: end; border: 2px solid;">' + salarioFamilia.toFixed(2) +
						'</td><td style="text-align: end; border: 2px solid;"></td></tr>';
		}

		if(valeA > 0){
			conteudoHTML += '<tr class="salario"><td width="100px" style="border: 2px solid;">' + cod3 +
			'</td><td width="500px" style="text-align: start; border: 2px solid;">Vale Alimentação</td><td width="150px" style="text-align: center; border: 2px solid;">' + '' +
			'</td><td style="text-align: end; border: 2px solid;">' + valeA.toFixed(2) +
			'</td><td style="text-align: end; border: 2px solid;"></td></tr>';
		}

		if(salario13 > 0){
			conteudoHTML += '<tr class="salario"><td width="100px" style="border: 2px solid;">' + cod4 +
			'</td><td width="500px" style="text-align: start; border: 2px solid;">13º Salário</td><td width="150px" style="text-align: center; border: 2px solid;">' + '' +
			'</td><td style="text-align: end; border: 2px solid;">' + salario13.toFixed(2) +
			'</td><td style="text-align: end; border: 2px solid;"></td></tr>';
		}

		if(totalHE > 0){
			conteudoHTML += '<tr class="salario"><td width="100px" style="border: 2px solid;">' + cod5 +
			'</td><td width="500px" style="text-align: start; border: 2px solid;">Horas Extras</td><td width="150px" style="text-align: center; border: 2px solid;">' + totalHoras +
			'</td><td style="text-align: end; border: 2px solid;">' + totalHE.toFixed(2) +
			'</td><td style="text-align: end; border: 2px solid;"></td></tr>';
		}

		if(insa > 0){
			conteudoHTML += '<tr class="salario"><td width="100px" style="border: 2px solid;">' + cod6 +
			'</td><td width="500px" style="text-align: start; border: 2px solid;">Insalubridade</td><td width="150px" style="text-align: center; border: 2px solid;">' + insalubridade + '%' +
			'</td><td style="text-align: end; border: 2px solid;">' + insa.toFixed(2) +
			'</td><td style="text-align: end; border: 2px solid;"></td></tr>';
		}

		if(pericu > 0){
			conteudoHTML += '<tr class="salario"><td width="100px" style="border: 2px solid;">' + cod7 +
			'</td><td width="500px" style="text-align: start; border: 2px solid;">Periculosidade</td><td width="150px" style="text-align: center; border: 2px solid;">' + 30 + '%' +
			'</td><td style="text-align: end; border: 2px solid;">' + pericu.toFixed(2) +
			'</td><td style="text-align: end; border: 2px solid;"></td></tr>';
		}

	if(vt > 0){
		conteudoHTML += '<tr class="salario"><td width="100px" style="border: 2px solid;">' + cod8 +
		'</td><td width="500px" style="text-align: start; border: 2px solid;">Vale Transporte</td><td width="150px" style="text-align: center; border: 2px solid;">' + '' +
		'</td><td style="text-align: end; border: 2px solid;">' +
		'</td><td style="text-align: end; border: 2px solid;">'+vt.toFixed(2)+'</td></tr>';
	}

		if(fgts > 0){
			conteudoHTML += '<tr class="salario"><td width="100px" style="border: 2px solid;">' + cod9 +
			'</td><td width="500px" style="text-align: start; border: 2px solid;">FGTS</td><td width="150px" style="text-align: center; border: 2px solid;">' + 8 + '%' +
			'</td><td style="text-align: end; border: 2px solid;">' +
			'</td><td style="text-align: end; border: 2px solid;">'+fgts.toFixed(2)+'</td></tr>';
		}

		if(inss > 0){
			conteudoHTML += '<tr class="salario"><td width="100px" style="border: 2px solid;">' + cod10 +
			'</td><td width="500px" style="text-align: start; border: 2px solid;">INSS</td><td width="150px" style="text-align: center; border: 2px solid;">' + refINSS + '%' +
			'</td><td style="text-align: end; border: 2px solid;">' +
			'</td><td style="text-align: end; border: 2px solid;">'+inss.toFixed(2)+'</td></tr>';
		}

		if(irrf > 0){
			conteudoHTML += '<tr class="salario"><td width="100px" style="border: 2px solid;">' + cod11 +
			'</td><td width="500px" style="text-align: start; border: 2px solid;">IRRF</td><td width="150px" style="text-align: center; border: 2px solid;">' + refIRRF + '%' +
			'</td><td style="text-align: end; border: 2px solid;">' +
			'</td><td style="text-align: end; border: 2px solid;">'+irrf.toFixed(2)+'</td></tr>';
		}

		// Substitua o conteúdo da tabela .info
		$('.info').html(conteudoHTML);

		if ($('#pegaMensagem').val() !== '') {
			var mensagem = $('#pegaMensagem').val();
			mensagem = mensagem.replace(/\n/g, '<br>'); // Substitui quebras de linha por <br>
			$('#mensagem').html(mensagem);
		} else {
			$('#mensagem').html('');
		}


	}, 200);


var numerosUtilizados = []; // Array para armazenar os números já utilizados

function gerarNumeroUnico(chave) {
	var novoNumero;

	do {
		novoNumero = Math.floor(Math.random() * 900) + 100; // Gera um número aleatório de 100 a 999
	} while (numerosUtilizados[chave] && numerosUtilizados[chave].includes(novoNumero)); // Verifica se o número já foi utilizado

	if (!numerosUtilizados[chave]) {
		numerosUtilizados[chave] = []; // Inicializa o array para a chave, se não existir
	}

	numerosUtilizados[chave].push(novoNumero); // Adiciona o número ao array de números utilizados
	return novoNumero;
}

// Exemplo de uso no seu código (dentro do setInterval)
var cod1 = gerarNumeroUnico('salario');
var cod2 = gerarNumeroUnico('salarioFamilia');
var cod3 = gerarNumeroUnico('valeA');
var cod4 = gerarNumeroUnico('salario13');
var cod5 = gerarNumeroUnico('totalHE');
var cod6 = gerarNumeroUnico('insalubridade');
var cod7 = gerarNumeroUnico('periculosidade');
var cod8 = gerarNumeroUnico('vt');
var cod9 = gerarNumeroUnico('fgts');
var cod10 = gerarNumeroUnico('inss');
var cod11 = gerarNumeroUnico('irrf');


	$('#baixar').on('click', function () {

		var meuAudio = $("#audio")[0]; // Obtém o elemento de áudio

			// Toca o áudio
			meuAudio.play();

			// Define um tempo limite para parar a reprodução após 4 segundos
			setTimeout(function() {
				meuAudio.pause();
				meuAudio.currentTime = 0; // Reinicia o áudio para o início
			}, 2000);


		// Clona o elemento que deseja imprimir
		var element = $('#tabela').clone().addClass('print-content');

		// Cria uma janela pop-up temporária
		var popupWin = window.open('', '_blank', 'width=600,height=600');

		// Adiciona o conteúdo clonado à janela pop-up
		popupWin.document.open();
		popupWin.document.write('<html><head>' + '<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">' + '<' + 'title>Recibo de Pagamento</title></head>' + `<style>
			.baixarTabela, .subHead{
				border: 2px solid black;
				margin-bottom: 10px;
			}

			td, th{
				border: none;
				text-align: end;
			}

			.Tbody, .Tfoot{
				border: 2px solid black;
			}

			.Tfoot{
				margin-bottom: 10%;
				margin-top: -18px;
			}

			@media print {
				body {
					visibility: hidden;
				}
				.print-content {
					visibility: visible;
				}
			}
		</style>` + '<' + 'body>');
		popupWin.document.write(element[0].outerHTML);
		popupWin.document.write('</body></html>');
		popupWin.document.close();

		// Aguarda o carregamento do conteúdo antes de chamar a função de impressão
		popupWin.onload = function () {
			popupWin.print();
			popupWin.onafterprint = function () {
				// Fecha a janela pop-up após a impressão
				popupWin.close();
			};
		};
	});

	$('.testar').click(function(){
		var texto = "Imagine que você tem um funcionário com as seguintes informações: \n\nNome: Alexandre Vieira \nSalário base: R$2.530,00 \nTrabalhou 220 horas no mês \nTem um filho de 7 anos e uma filha de 5 anos \nFez duas horas extras, uma na quinta e outra na sexta \nVale alimentação: R$ 120,00 \nVale transporte: R$ 120,00 \n\nCom esse sistema você pode ver todos os cálculos do salário desse funcionário";
		$('#exemplo').css('height', '340px');
		$('#exemplo').html(texto);
		$('#pegaS').val(2530);
		$('#pegaH').val(220);
		$('#pegaF').val(2);
		$('#pegaVA').val(120);
		$('#pegaHE').val(2);
		$('#pegaVT').val(120);
	});