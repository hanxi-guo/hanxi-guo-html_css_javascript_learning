
(function(window){
// DO NOT attach the speakWord variable to the 'byeSpeaker' object.
  var byeSpeaker = new Object();
  var speakWord = "Good Bye";
  byeSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  }
  window.byeSpeaker = byeSpeaker;
})(window);


