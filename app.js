var myModule = angular.module(’Angello’, []);
myModule.factory(’AngelloHelper’, function() { });
myModule.service(’AngelloModel’, function() { });
myModule.controller(’MainCtrl’, function() { });
myModule.directive(’story’, function() { });

myModule.controller(’MainCtrl’, function() {
var main = this;

main.createStory = function() {
    main.stories.push({
        title:’New Story’,
        description:’Description pending.’,
        criteria:’Criteria pending.’,
        status:’Back Log’,
        type:’Feature’,
        reporter:’Pending’,
        assignee:’Pending’
    });
    };

    main.stories = [
    {
        title: ’First story’,
        description: ’Our first story.’,
        criteria: ’Criteria pending.’,
        status: ’To Do’,
        type: ’Feature’,
        reporter: ’Arpitha’,
        assignee: ’Arpitha’
    },
    {
        title: ’Second story’,
        description: ’Do something.’,
        criteria: ’Criteria pending.’,
        status: ’Back Log’,
        type: ’Feature’,
        reporter: ’Arpitha’,
        assignee: ’Arpitha’
        },
    {
        title: ’Another story’,
        description: ’Just one more.’,
        criteria: ’Criteria pending.’,
        status: ’Code Review’,
        type: ’Enhancement’,
        reporter: ’Arpitha’,
        assignee: ’Arpitha’
        }
    ];

});

myModule.directive('story', function() {
    return {
        scope: true,
        replace: true,
        template: '<div><h4>{{story.title}}</h4><p>{{story.description}}</p></div>'
    }
});