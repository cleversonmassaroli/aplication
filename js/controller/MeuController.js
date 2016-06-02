//A Variavel myApp foi criada no arquivo myApp.js
myApp.controller('MeuController', function($scope) {

	$scope.pessoa = {};

	$scope.dados = [{
		nome : 'Massaroli',
		telefone : '(46) 8808 4886',
		email : 'cleverson@gmail.com'
	},
	{
		nome : 'Marcos Brad',
		telefone : '(46) 8808 4886',
		email : 'cleverson@gmail.com'
	}];


	$scope.enviaDados = function( pes){


		var newPessoa = angular.copy(pes);
		

		if ( newPessoa.nome.length > 2 &&
			 newPessoa.telefone.length > 7 &&
			 newPessoa.email.length >4 ) {
				
			$scope.dados.push(newPessoa);
			$scope.pessoa = {};
			$scope.msgAlert = false;
		} else {
			$scope.msgAlert = true;
		};

		
	}

})
