$(document).ready(function() {
  var config = {
    apiKey: "AIzaSyC-KUbKjOpvJv1UIg7yAAMD-xJ8_yt4nYk",
    authDomain: "skillshareredditclone.firebaseapp.com",
    databaseURL: "https://skillshareredditclone.firebaseio.com",
    projectId: "skillshareredditclone",
    storageBucket: "skillshareredditclone.appspot.com",
    messagingSenderId: "868707919715"
  };
  var createdAt = new Date();
  var dummyData = [
    {
      title: 'Funny Video!',
      link: 'https://www.youtube.com',
      votes: 32,
      user: 'Stephen',
      createdAt: createdAt
    },
    {
      title: 'Funny Video!',
      link: 'https://www.youtube.com',
      votes: 32,
      user: 'Stephen',
      createdAt: createdAt
    },
    {
      title: 'Funny Video!',
      link: 'https://www.youtube.com',
      votes: 32,
      user: 'Stephen',
      createdAt: createdAt
    }
  ];

  firebase.initializeApp(config);
  var database = firebase.database();

  dummyData.forEach(function(item) {
    var $template = $('#content-template').clone();
    var newItem = $template.prop('content');

    $(newItem).find('.content-title').text(item.title);
    $(newItem).find('.votes').text(item.votes);
    $(newItem).find('.content-link').attr('href', item.link).attr('target', '_blank');
    $(newItem).find('.content-meta').text(item.user + ' posted at ' + item.createdAt);

    $('#list').append(newItem);
  })
});
