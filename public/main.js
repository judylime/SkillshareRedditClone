$(document).ready(function() {
  var config = {
    apiKey: "AIzaSyC-KUbKjOpvJv1UIg7yAAMD-xJ8_yt4nYk",
    authDomain: "skillshareredditclone.firebaseapp.com",
    databaseURL: "https://skillshareredditclone.firebaseio.com",
    projectId: "skillshareredditclone",
    storageBucket: "skillshareredditclone.appspot.com",
    messagingSenderId: "868707919715"
  };

  firebase.initializeApp(config);
  var database = firebase.database();

  database.ref('/items').once('value').then(function(snapshot) {
    var results = snapshot.val();
    for (var id in results) {
      buildItemElement(results[id]);
    }
  });

  function buildItemElement(item) {
    var $template = $('#content-template').clone();
    var newItem = $template.prop('content');

    $(newItem).find('.content-title').text(item.title);
    $(newItem).find('.votes').text(item.votes);
    $(newItem).find('.content-link').attr('href', item.link).attr('target', '_blank');
    $(newItem).find('.content-meta').text(item.user + ' posted at ' + moment(item.createdAt).fromNow());

    $('#list').append(newItem);
  }
});
