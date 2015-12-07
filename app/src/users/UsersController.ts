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

  selectUser(user) {
    this.selected = user;
    this.toggleUsersList();
  };

  share($event) {
    var user = this.selected;

    this.$mdBottomSheet.show({
      parent: angular.element(document.getElementById('content')),
      templateUrl: '/src/users/view/contactSheet.html',
      controller: [ '$mdBottomSheet', UserSheetController],
      controllerAs: "vm",
      bindToController : true,
      targetEvent: $event
    }).then(function(clickedItem) {
      //$log.debug( clickedItem.name + ' clicked!');
    });

    /**
     * Bottom Sheet controller for the Avatar Actions
     */
    function UserSheetController( $mdBottomSheet) {
      this.user = user;
      this.items = [
        { name: 'Phone'       , icon: 'phone'       , icon_url: 'assets/svg/phone.svg'},
        { name: 'Twitter'     , icon: 'twitter'     , icon_url: 'assets/svg/twitter.svg'},
        { name: 'Google+'     , icon: 'google_plus' , icon_url: 'assets/svg/google_plus.svg'},
        { name: 'Hangout'     , icon: 'hangouts'    , icon_url: 'assets/svg/hangouts.svg'}
      ];
      this.performAction = function(action) {
        $mdBottomSheet.hide(action);
      };
    }

  }
}

export default [
  'usersService', '$mdSidenav', '$mdBottomSheet',
  UsersController
];

