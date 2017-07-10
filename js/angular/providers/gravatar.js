angular.module('NoteWrangler')
.provider('Gravatar', function GravatarProvider() {
  var avatarSize = 80;
  var avatarUrl = "https://secure.gravatar.com/avatar/";

  this.setSize = function(size){
    avatarSize = size;
  };

  this.$get = function($http){
    return function(email){
      return avatarUrl + CryptoJS.MD5(email) + '?size=' + avatarSize.toString();
    }
  };

});