export class MainCtrl {
	constructor($scope, $state) {
		$scope.url = $state;

		$scope.changeTag = function(tag) {
			$scope.tag = tag;
			console.log($scope.tag);
		};
		$scope.emps = [
			{id:"00001",name:"Aさん"}
			,{id:"00002",name:"Bさん"}
			,{id:"00003",name:"Cさん"}
			,{id:"00004",name:"Dさん"}
		];
	}
}