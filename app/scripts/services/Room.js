(function() {
  function Room($firebaseArray) {
    var rooms = {};
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);
    
    rooms.all = rooms;

    return rooms;
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();
