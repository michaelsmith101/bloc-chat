(function() {
  function Message($firebaseArray) {
    var Message = {};
    var ref = firebase.database().ref().child("messages");

    Message.getByRoomId = function(roomID) {
        var array = $firebaseArray(ref.orderByChild("roomID").equalTo(roomID));
        // var array = $firebaseArray(ref.orderByChild("roomId").equalTo(parseInt(roomId)));
        return array;
    };

    return Message;
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();
