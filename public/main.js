$(document).ready(function() {
  var config = {
    apiKey: "AIzaSyC-KUbKjOpvJv1UIg7yAAMD-xJ8_yt4nYk",
    authDomain: "skillshareredditclone.firebaseapp.com",
    databaseURL: "https://skillshareredditclone.firebaseio.com",
    projectId: "skillshareredditclone",
    storageBucket: "skillshareredditclone.appspot.com",
    messagingSenderId: "868707919715"
  };
  var DAY_IN_MS = 86400000;

  firebase.initializeApp(config);
  var database = firebase.database();

  database.ref('items')
    .orderByChild('createdAt')
    .startAt(Date.now() - DAY_IN_MS)
    .on('child_added', function(snapshot) {
      if ($('#loadingMsg').is(':visible')) {
        $('#loadingMsg').hide();
      }
      var result = snapshot.val();
      result.id = snapshot.key;
      buildItemElement(result);
    });

  function buildItemElement(item) {
    var $template = $('#content-template').clone();
    var newItem = $template.prop('content');

    $(newItem).find('.content-title').text(item.title);
    $(newItem).find('.arrow').attr('id', item.id);
    $(newItem).find('.votes').text(item.votes);
    $(newItem).find('.content-link').attr('href', item.link).attr('target', '_blank');
    $(newItem).find('.content-meta').text(item.user + ' posted at ' + moment(item.createdAt).fromNow());

    $('#list').prepend(newItem);
  }

  $('#sharePost').on('click', function() {
    var link = $('#inputURL').val();
    var title = $('#inputTitle').val();
    var user = $('#inputUser').val();
    var createdAt = Date.now();
    var votes = 0;

    var data = {
      link: link,
      title: title,
      user: user,
      createdAt: createdAt,
      votes: votes
    };

    var itemsListRef = database.ref('items');
    var newItemRef = itemsListRef.push(data, function(err) {
      if (err) {
        console.error('Error saving to firebase', err);
      } else {
        console.log('Success saving to firebase!');
        $('#inputURL').val('');
        $('#inputTitle').val('');
        $('#inputUser').val('');
        $('#addPost').modal('hide');
      }
    });
  });
});
