

function storecomment() {

    var _name = document.getElementById("name").value;
    var _email= document.getElementById("email").value;
    var _comment= document.getElementById("comment").value;

    var res = _email.split(".", 1);

     firebase.database().ref('User/'+'article6/' + res).set({
            name : _name,
            email : _email,
            comment : _comment
          }, function(error) {
            if (error) {
              alert('Error Occured');
            } else {
                alert("Sent");
              console.log('Hoise');
           
            }
          });
 } 
 function showComment() {

  firebase.database().ref('User/'+'article6/').once('value').then(function (snapshot) {
    snapshot.forEach(function (child) {
      let dc = document.getElementById("comment-1").cloneNode(true);
      dc.children[0].children[0].innerHTML = child.val().name;
      dc.children[0].children[1].innerHTML = child.val().comment;
      document.getElementById('blog-comments').appendChild(dc);
      dc.style.display = "block";
    });
  
  }, function (error) {
    if (error) {
    } else {
      
    }
  });
  
  let demo_disappear = document.getElementById("blog-comments");
  demo_disappear.children[1].style.display = "none";


}



function storecomment1() {

  var _name = document.getElementById("name1").value;
  var _email= document.getElementById("email1").value;
  var _comment= document.getElementById("comment1").value;

  var res = _email.split(".", 1);

   firebase.database().ref('User/'+'article5/' + res).set({
          name : _name,
          email : _email,
          comment : _comment
        }, function(error) {
          if (error) {
            alert('Error Occured');
          } else {
              alert("Sent");
            console.log('Hoise');
         
          }
        });
} 
function showComment1() {

firebase.database().ref('User/'+'article5/').once('value').then(function (snapshot) {
  snapshot.forEach(function (child) {
    let dc = document.getElementById("comment-1").cloneNode(true);
    dc.children[0].children[0].innerHTML = child.val().name;
    dc.children[0].children[1].innerHTML = child.val().comment;
    document.getElementById('blog-comments').appendChild(dc);
    dc.style.display = "block";
  });

}, function (error) {
  if (error) {
  } else {
    
  }
});

let demo_disappear = document.getElementById("blog-comments");
demo_disappear.children[1].style.display = "none";


}

function storesuggestion() {
  var _mail= document.getElementById("mail").value;
  var _suggestion= document.getElementById("suggestion").value;
  var res = _mail.split(".", 1);
   firebase.database().ref('User/'+'to_admin/'+res).set({
          mail : _mail,
          suggestion : _suggestion
        }, function(error) {
          if (error) {
            alert('Error Occured');
          } else {
              alert("Sent");
            console.log('Hoise');
         
          }
        });
} 
function show() {

  firebase.database().ref('User/'+'to_admin/').once('value').then(function (snapshot) {
    snapshot.forEach(function (child) {
      let dc = document.getElementById("comm").cloneNode(true);
      dc.children[0].children[0].innerHTML = child.val().mail;
      dc.children[0].children[1].innerHTML = child.val().suggestion;
      document.getElementById('blog-comments').appendChild(dc);
      dc.style.display = "block";
    });
  
  }, function (error) {
    if (error) {
    } else {
      
    }
  });
  
  let demo_disappear = document.getElementById("blog-comments");
  demo_disappear.children[1].style.display = "none";
  
  
  }