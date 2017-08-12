(function() {
    function MainCtrl(Room,Message, $uibModal, $cookies) {
      var main = this;
      main.chatRoomArray = Room.all;

      if ($cookies.get('blocChatCurrentUser')) {
          main.currentUser = $cookies.get('blocChatCurrentUser');
      }

      main.openNewRoomModal = function() {
          var modalInstance = $uibModal.open({
              templateUrl: '/templates/new_room_modal.html',
              controller: 'ModalCtrl',
              controllerAs: 'modal'
          });
      };

      main.currentRoomId = undefined;

      main.setCurrentRoom = function(room) {
          main.messageArray = Message.getByRoomId(room.$id);
          main.currentRoomId = room.$id;
          main.currentRoomTitle = room.$value;
      };

      main.sendMessage = function() {
          Message.send(main.message, main.currentRoomId, main.currentUser);
      }

   }

    angular
        .module('blocChat')
        .controller('MainCtrl', ['Room','Message','$uibModal','$cookies', MainCtrl]);
})();
