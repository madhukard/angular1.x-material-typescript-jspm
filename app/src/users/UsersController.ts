import UserSheetController from './UserSheetController';

/**
 * Main App Controller for the Angular Material Starter App
 */
class UsersController {
  userService: any;
  $mdSidenav: any;
  $mdBottomSheet: any;
  selected: string;
  users: any;

  constructor(usersService, $mdSidenav, $mdBottomSheet) {
    this.userService = usersService;
    this.$mdSidenav = $mdSidenav;
    this.$mdBottomSheet = $mdBottomSheet;

    var self = this;
    usersService
      .loadAll()
      .then( function(users) {
        self.users    = [].concat(users);
        self.selected = users[0];
      });
  }

  toggleUsersList() {
    this.$mdSidenav('left').toggle();
  };

  selectUser (user ) {
    this.selected = user;
    this.toggleUsersList();
  };

  share($event) {
    var user = this.selected;

    this.$mdBottomSheet.show({
      parent: angular.element(document.getElementById('content')),
      templateUrl: '/src/users/view/contactSheet.html',
      controller: [ '$mdBottomSheet', '$log', UserSheetController],
      controllerAs: "vm",
      bindToController : true,
      targetEvent: $event
    }).then(function(clickedItem) {
      //$log.debug( clickedItem.name + ' clicked!');
    });
  }
}

export default [
  'usersService', '$mdSidenav', '$mdBottomSheet',
  UsersController
];

