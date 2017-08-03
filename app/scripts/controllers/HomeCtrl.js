(function() {
    function HomeCtrl(Room) {
      var main = this;
      main.chatRoomArray = Room.all;
      console.log(main.chatRoomArray);
    }
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', HomeCtrl]);
})();
