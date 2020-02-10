console.log('working');


document.getElementById('submitp1').addEventListener('click', function(){
  var h1p1 = parseInt(document.getElementById('h1p1').value);
  var h2p1 = parseInt(document.getElementById('h2p1').value);
  var h3p1 = parseInt(document.getElementById('h3p1').value);
  var h4p1 = parseInt(document.getElementById('h4p1').value);
  var h5p1 = parseInt(document.getElementById('h5p1').value);
  var total = h1p1+h2p1+h3p1+h4p1+h5p1;

  document.getElementById('yourTotalp1').innerHTML += total
});

document.getElementById('submitp2').addEventListener('click', function(){
  var h1p2 = parseInt(document.getElementById('h1p2').value);
  var h2p2 = parseInt(document.getElementById('h2p2').value);
  var h3p2 = parseInt(document.getElementById('h3p2').value);
  var h4p2 = parseInt(document.getElementById('h4p2').value);
  var h5p2 = parseInt(document.getElementById('h5p2').value);
  var total = h1p2+h2p2+h3p2+h4p2+h5p2;

  document.getElementById('yourTotalp2').innerHTML += total
});


document.getElementById('p1').addEventListener('click', function(){
  $('.p1Form').toggle();
});

document.getElementById('p2').addEventListener('click', function(){
  $('.p2Form').toggle();
});
