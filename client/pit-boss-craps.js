/*
 * TheHouse() --> ALWAYS OPEN!!
 *   opening, open, closing, closed
 *
 * CrapsTable()
 *  closed
 *  closing
 *  comeOut
 *  point
 *  diceOut
 *  sevenOut
 *  payout - pay winning bets
 *  collection - grab losing bets
 *  pointHitPayout ??
 *
 * /
 * /signin
 * /signout
 * /tables
 * /table/:tid
 * /house
 */
$(function() {
  'use strict';

  $('#signin').click(function(event) {
    navigator.id.request();
  });
  $('#signout').click(function(event) {
    navigator.id.logout();
  });

  navigator.id.watch({
    loggedInUser: null,
    onlogin: function(assertion) {
      $.ajax({
        type: 'POST',
        url: '/gambler/login',
        data: { assertion: assertion }
      }).success(function(data) {
        console.log('successful login');
        console.dir(data);
      });
    },
    onlogout: function() {
      console.log('LOGGIN ROU!');
      this.loggedInUser = null;
      $.post('/gambler/logout').success(function(data) {
        console.log('you logged right out');
      });
    }
  });

  //
  // gamewebsocket
  var msg = {
    HELLO: 0,
    GOODBYE: 1,
    TABLE_LIST: 2
  };
  var gws = new WebSocket('ws://' + window.location.host + '/');
  gws.onopen = function() {
    gws.send(msg.HELLO);
  };

});
