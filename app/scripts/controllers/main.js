'use strict';

angular.module('todoApp')
    .controller('MainCtrl', function($scope) {

        $scope.tarefas = [
            {nome: 'Angular 1.?', descricao: 'Estudar angular 1.{3,4} e praticar', active: 'active', completed: false, thumbs: 'down'},
            {nome: 'Angular 2.0', descricao: 'Estudar angualr 2.0 e Web Components', active: '', completed: false, thumbs: 'down'}
        ];

        $scope.addTarefa = function(invalid) {
            if (invalid){return;}
            $scope.tarefa.thumbs = 'thumbs-down';
            $scope.tarefas.push($scope.tarefa);
            $scope.tarefa = {};
        };

        $scope.removeTarefa = function(index) {
        	$scope.tarefas.splice(index, 1);
        };

        $scope.activeted = function(index) {
            if ($scope.tarefas[index].active) {
                $scope.tarefas[index].active = '';
                return;
            };
            angular.forEach($scope.tarefas, function(tarefa, key) {
                if (tarefa.active === 'active') {tarefa.active = ''};
            });
            $scope.tarefas[index].active = 'active';
        };

        $scope.concluirTarefa = function(index) {
            $scope.tarefas[index].completed = !$scope.tarefas[index].completed;
            $scope.tarefas[index].active = '';
            if ($scope.tarefas[index].completed) {
                $scope.tarefas[index].thumbs = 'up';
            } else {
                $scope.tarefas[index].thumbs = 'down';
            }
        };
    });
