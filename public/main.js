$(document).ready(function() {
  const firebaseConfig = {
    apiKey: "AIzaSyCUV9BOvfnQOFyDqzf_1cs8bPAE7lgjL8E",
    authDomain: "redditclone-e503c.firebaseapp.com",
    databaseURL: "https://redditclone-e503c.firebaseio.com",
    projectId: "redditclone-e503c",
    storageBucket: "redditclone-e503c.appspot.com",
    messagingSenderId: "522268201681",
    appId: "1:522268201681:web:23c7329aa5b76d24c26bf0",
    measurementId: "G-G6PGTGRTJ5"
  };
  
  firebase.initializeApp (firebaseConfig);
  var database = firebase.database();

  database.ref('/items').once('value').then(function(snapshot) {
    var results = snapshot.val();
    console.log(results);
  })

//   dummyData.forEach(function(item) {
//     var $template = $('#content-template').clone();
//     var newItem = $template.prop('content');

//     $(newItem).find('.content-title').text(item.title);
//     $(newItem).find('.votes').text(item.votes);
//     $(newItem).find('.content-link').attr('hreh',item.link).attr('target', '_blank');
//     $(newItem).find('.content-meta').text(item.user + 'posted at' + item.createdAt);

//     $('#list').append(newItem);
//   })
});













// $(document).ready(function() {
//   var config = {
//     apiKey: "AIzaSyC-KUbKjOpvJv1UIg7yAAMD-xJ8_yt4nYk",
//     authDomain: "skillshareredditclone.firebaseapp.com",
//     databaseURL: "https://skillshareredditclone.firebaseio.com",
//     projectId: "skillshareredditclone",
//     storageBucket: "skillshareredditclone.appspot.com",
//     messagingSenderId: "868707919715"
//   };
//   var DAY_IN_MS = 86400000;

//   firebase.initializeApp(config);
//   var database = firebase.database();

//   database.ref('items')
//     .orderByChild('createdAt')
//     .startAt(Date.now() - DAY_IN_MS)
//     .on('child_added', function(snapshot) {
//       if ($('#loadingMsg').is(':visible')) {
//         $('#loadingMsg').hide();
//       }
//       var result = snapshot.val();
//       result.id = snapshot.key;
//       buildItemElement(result);
//     });

//   database.ref('items')
//     .on('child_changed', function(snapshot) {
//       var result = snapshot.val();
//       result.id = snapshot.key;
//       console.log('working?', result)
//       $('div.votes#'+result.id).text(result.votes);
//   });

//   function upVote() {
//     var itemID = $(this).attr('id');
//     firebase.database().ref('/items/' + itemID + '/votes')
//       .transaction(function(currentVotes) {
//         return currentVotes + 1;
//       });
//   }

//   function downVote() {
//     var itemID = $(this).attr('id');
//     firebase.database().ref('/items/' + itemID + '/votes')
//       .transaction(function(currentVotes) {
//         return currentVotes - 1;
//       });
//   }

//   function buildItemElement(item) {
//     var $template = $('#content-template').clone();
//     var newItem = $template.prop('content');

//     $(newItem).find('.content-title').text(item.title);
//     $(newItem).find('.arrow').attr('id', item.id);
//     $(newItem).find('.vote-up').on('click', upVote);
//     $(newItem).find('.vote-down').on('click', downVote);
//     $(newItem).find('.votes').text(item.votes).attr('id', item.id);
//     $(newItem).find('.content-link').attr('href', item.link).attr('target', '_blank');
//     $(newItem).find('.content-meta').text(item.user + ' posted at ' + moment(item.createdAt).fromNow());

//     $('#list').prepend(newItem);
//   }

//   $('#sharePost').on('click', function() {
//     var link = $('#inputURL').val();
//     var title = $('#inputTitle').val();
//     var user = $('#inputUser').val();
//     var createdAt = Date.now();
//     var votes = 0;

//     var data = {
//       link: link,
//       title: title,
//       user: user,
//       createdAt: createdAt,
//       votes: votes
//     };

//     var itemsListRef = database.ref('items');
//     var newItemRef = itemsListRef.push(data, function(err) {
//       if (err) {
//         console.error('Error saving to firebase', err);
//       } else {
//         console.log('Success saving to firebase!');
//         $('#inputURL').val('');
//         $('#inputTitle').val('');
//         $('#inputUser').val('');
//         $('#addPost').modal('hide');
//       }
//     });
//   });
// });