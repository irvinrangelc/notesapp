angular.module("NoteWrangler")
	.directive('nwCategorySelect', function(Category){
		return {
			// replace: true, in the course, was with this, check this out ???
			restrict: "E",
			templateUrl: "/templates/directives/nw-category-select.html",
			link: function(scope, element, attrs){
				//console.log(Category.all());
				scope.categories = Category.all();
			},
			controller: function($scope){
				this.getActiveCategory = function(){
					return $scope.activeCategory;
				}
				this.setActiveCategory = function(category){
					$scope.activeCategory = category.name;
				}
				return this;
			},
			scope: {
				activeCategory: "="
			}
		};
	});