<?php include './components/header.php'; ?>
		<title>FBM</title>
	</head>
<?php include './components/navbar.php'; ?>
	<body>
		<style>

			a{
				text-decoration: none;
				color: black;
			}

			.parallax {
					/* The image used */
					background-image: url('https://picsum.photos/1920/1080');
					}

				 .parallax2 {
					 background-image: url('https://picsum.photos/1921/1081');
				 }
			.parallax, .parallax2{
				/* Set a specific height */
				min-height: 500px;

				/* Create the parallax scrolling effect */
				background-attachment: fixed;
				background-position: center;
				background-repeat: no-repeat;
				background-size: cover;
			}
			
			@media screen and (max-width: 500px) {
				.funcoes {
					flex-direction: column;
					align-items: center;
				}
			}
			
		</style>
		<section class="parallax">
			<div style="
				font-size: larger;
				width: 100%;">
				<div style="
					width: 50%;
					border-radius: 15px;
					padding: 1%;
					background-color: #ffffffe6;
					box-shadow: 5px 5px 8px 3px;">
					<center><h2>Full Business Manager</h2></center>
					<h3>Olá, bem vindo ao FBM</h3>
					<h5>Aqui você terá total controle e informações de tudo que acontece na sua empresa.<br>
					Como? Basta cadastrar a sua empresa, você terá a sua página totalmente personalizada, com sua logo, seus funcionários, caso haja, e o melhor, o sistema é completamente automatizado. Ao se cadastrar, você terá algumas funções para escolher, o que torna o serviço livre, onde você monta seu próprio pacote e não paga por serviços que não precisa</h5>
				</div>
			</div>
			<div style="
				font-size: larger;
				width: 100%;
				display: flex;
				justify-content: flex-end;">
				<div style="
					width: 50%;
					border-radius: 15px;
					padding: 1%;
					background-color: #ffffffe6;
					box-shadow: 5px 5px 8px 3px;">
					<h3>Dúvidas</h3>
					<h3><b>Eu não entendo de administração:</b></h3><br>
					<h5>As funções são autoexplicativas, para você entender exatamente para que serve, e, no meio do uso, o que está sendo ocorrido, como por exemplo, no fim do mes, poderá ver seus resultados e o sistema lhe informará, com base na sua meta informada, se você atingiu ou não, o que deu errado, no que precisa melhorar, e varias outras funções informativas.</h5>
					<h3><b>Eu não entendo de Contabilidade:</b></h3><br>
					<h5>Não tem problema nenhum, o sistema foi feito com auxilio de profissionais na área, além de informar todos os passos, caso sua empresa tenha um contador, será uma grande ajuda e praticidade a utilização do sistema para montar o salário dos funcionários, por exemplo, ou desenvolver uma <a href="./curvaABC/curvaABC.php"style="color: blue; text-decoration: underline;">curva ABC</a> para ver quais produtos mais vendeu</h5>
					<h4>São diversos serviços para ajudar a sua empresa a crescer de forma rápida e segura.</h4>

					<h4>Veja a baixo algumas das funções que você poderá ter de forma automática e prática, sem precisar passar horas esquentando a cabeça.</h4>
				</div>
			</div>
		</section>
	<section class="parallax2">
		<style>
			.amort, .scc, .bp{
				margin: 15px;
				border-radius: 100px;
				border: 2px solid black;
				width: 140px;
				transition: 0.2s;
			}
			.amort:hover, .scc:hover, .bp:hover{
				transform: scale(1.1);
				box-shadow: 0px 0px 9px 2px;
			}

			.funcoes a{
				border-radius: 20px;
				background-color: white;
				box-shadow: -7px 9px 4px 3px black;
				transition: all 0.5s;
				margin-left: 10px;
				margin-right: 10px;
				font-weight: bold;
				margin-top: 8%;
			}

			.funcoes a:hover{
				margin-left: 10%;
				margin-right: 10%;
			}
		</style>
		<div class="funcoes" style="display: flex; justify-content: center;">
			<!-- Contracheque (Holerite) -->
			<a href="./scc/scc.php">
			<div class="text-center" style="
				border-radius: 20px;">
				<img class="scc" src="./images/contracheque.png" width="140px" height="140px"><br>
				Contracheque
			</div>
			</a>

			<!-- Amortização -->
			<a href="./amortizacao.php">
			<div>
					<div class="text-center" style="
						border-radius: 20px;">
						<img class="amort" src="./images/AmorSAC.png" width="140px" height="140px"><br>
						Amortizacao SAC
					</div>
			</div>
			</a>
			<!-- Balanço Patrimonial -->
			<a href="./BalancoP/BPatrimonial.php">
			<div>
					<div class="text-center" style="
						border-radius: 20px;">
						<img class="bp" src="./images/balancoP.png" width="140px" height="140px"><br>
						Balanço Patrimonial
					</div>
			</div>
			</a>
			<!-- Balanço Patrimonial -->
			<a href="./curvaABC/curvaABC.php">
			<div>
					<div class="text-center" style="
						border-radius: 20px;">
						<img class="bp" src="./images/curvaABC.png" width="140px" height="140px"><br>
						Curva ABC
					</div>
			</div>
			</a>
		</div>
	</section>

		<script>
			$('.funcoes a').mousedown(function() {
				$(this).css('transition', 'all 0.1s');
					$(this).css('box-shadow', '0px 0px 4px 3px black');
			});

			$('.funcoes a').mouseup(function(){
					$(this).css('box-shadow', '-7px 9px 4px 3px black');
			});
		</script>

    <style>
      .comecar{
        width: 270px;
        height: 70px;
        font-size: 30px;
        font-weight: bold;
        border-radius: 18px;
        transition: 0.2s;
      }

      .comecar:hover{
        transform: scale(1.1);
        box-shadow: 0px 0px 10px 3px black;
      }
    </style>

    <section>
      <div style="
        padding: 2%;">
        <h2 class="text-center">Full Business Manager</h2><br>
        <h2>Você está preparado?</h2>
        <h2>Para dar um boost na sua empresa?</h2>
        <h2>Então, vamos começar!</h2>
        <h4>Não se preocupe, estarei com você o tempo todo. Em cada botão que você clicar, e o sistema irá te informar e te guiar, e você terá acesso a todas as funções, com meu auxilio.</h4>
        <h4>Ao cliclar em começar, você será levado a uma página onde irá escolher os sistemas que mais achar necessários à sua empresa. Você poderá escolher quantos sistemas quiser, cada sistema com seu valor único, e no fim, você verá o valor total do seu pacote de sistemas personalizado.</h4>
        <h1>Vamos lá?</h1>
        <div class="text-center">
          <a href="./cadastro/cadastrar_funcoes.php">
          <button class="btn btn-secondary comecar">COMEÇAR</button>
          </a>
        </div>
      </div>
    </section>

<?php include './components/footer.php'; ?>