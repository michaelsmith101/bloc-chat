(function() {
  function Message($firebaseArray) {
    var Message = {};
    var ref = firebase.database().ref().child("messages");
    var message = $firebaseArray(ref);

    Message.getByRoomId = function(roomID) {
        var array = $firebaseArray(ref.orderByChild("roomID").equalTo(roomID));
        // var array = $firebaseArray(ref.orderByChild("roomId").equalTo(parseInt(roomId)));
        return array;
    };

    Message.send = function(newMessage,roomID, username) {
        message.$add({ content: newMessage, roomID: roomID, username: username})
    }

    return Message;
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();
