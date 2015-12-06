class UserSheetController {
  $mdBottomSheet: any;
  user: string;
  items: any;

  constructor($mdBottomSheet) {
    this.$mdBottomSheet = $mdBottomSheet;
    this.items = [
      { name: 'Phone'       , icon: 'phone'       , icon_url: 'assets/svg/phone.svg'},
      { name: 'Twitter'     , icon: 'twitter'     , icon_url: 'assets/svg/twitter.svg'},
      { name: 'Google+'     , icon: 'google_plus' , icon_url: 'assets/svg/google_plus.svg'},
      { name: 'Hangout'     , icon: 'hangouts'    , icon_url: 'assets/svg/hangouts.svg'}
    ];
  }

  performAction(action) {
    this.$mdBottomSheet.hide(action);
  };
}

export default [
  '$mdBottomSheet',
  UserSheetController
];
