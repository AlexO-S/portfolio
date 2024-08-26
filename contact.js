// JS FOR BACKGROUND MUSIC////////////////////////////
// Array of music file URLs
const musicFiles = [
    'sounds/music2.mp3',
    'sounds/music4.mp3',
    'sounds/music1.mp3',
    'sounds/music3.mp3'
];

// Function to pick a random music file
function getRandomMusicFile() {
    const randomIndex = Math.floor(Math.random() * musicFiles.length);
    return musicFiles[randomIndex];
}

// Set the audio source to a random music file
const audioElement = document.getElementById('background-music');
audioElement.src = getRandomMusicFile();

// Automatically play music once the page has fully loaded
window.onload = function() {
    audioElement.play().catch(error => {
        console.error("Error trying to play the audio: ", error);
    });
};

// To change the music after it ends
audioElement.addEventListener('ended', function() {
    audioElement.src = getRandomMusicFile();
    audioElement.play().catch(error => {
        console.error("Error trying to play the next audio: ", error);
    });
});

// Toggle play and pause functionality
const toggleButton = document.getElementById('toggle-button');

toggleButton.addEventListener('click', function() {
    if (audioElement.paused) {
        audioElement.play().then(() => {
            toggleButton.textContent = 'Pause Sound'; // Change button text to "Pause"
        }).catch(error => {
            console.error("Error trying to play the audio: ", error);
        });
    } else {
        audioElement.pause();
        toggleButton.textContent = 'Play Sound'; // Change button text to "Play"
    }
});




// JS FOR FORM SUBMISSION TO EMAIL////////////////////////////
const form = document.querySelector(".form-and-contactinfo form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const message = document.getElementById("message");

function sendEmail() {
    const bodyMessage = `Full Name: ${fullName.value}<br> Email: ${email.value}<br> Phone Number: ${phone.value}<br> Message: ${message.value}`;

    Email.send({
        SecureToken : "b8121448-f881-491b-98df-b997b369e860",
        To : "alexoseni.as@gmail.com",
        From : "alexoseni.as@gmail.com",
        Subject : subject.value,
        Body : bodyMessage
    }).then(
      message => {
        if (message == "OK") {
            Swal.fire({
                title: "Success!",
                text: "Message sent Successfully!",
                icon: "success"
            });
        }
      }
    );
}

function checkInputs() {
    const items = document.querySelectorAll(".item");

    for (const item of items) {
        if (item.value == "") {
            item.classList.add("error");
            item.parentElement.classList.add("error");
        }

        if (items[1].value != "") {
            checkEmail();
        }

        items[1].addEventListener("keyup", () => {
            checkEmail();
        });

        item.addEventListener("keyup", () => {
            if (item.value != "") {
                item.classList.remove("error");
                item.parentElement.classList.remove("error");
            }
            else {
                item.classList.add("error");
                item.parentElement.classList.add("error");
            }
        });
    }
}

function checkEmail() {
    const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
    const errorTxtEmail = document.querySelector(".error-txt.email");

    if (!email.value.match(emailRegex)) {
        email.classList.add("error");
        email.parentElement.classList.add("error");

        if (email.value != "") {
            errorTxtEmail.innerText = "Enter a valid email address";
        }
        else {
            errorTxtEmail.innerText = "Email Address can't be blank";
        }
    }
    else {
        email.classList.remove("error");
        email.parentElement.classList.remove("error");
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();

    if (!fullName.classList.contains("error") && !email.classList.contains("error") && !phone.classList.contains("error") && !subject.classList.contains("error") && !message.classList.contains("error")) {
       
        sendEmail();

        form.reset();
        return false
    }
    
});




// JS FOR LIFE CHAT////////////////////////////

// <!-- Start of Async Drift Code -->

"use strict";

!function() {
  var t = window.driftt = window.drift = window.driftt || [];
  if (!t.init) {
    if (t.invoked) return void (window.console && console.error && console.error("Drift snippet included twice."));
    t.invoked = !0, t.methods = [ "identify", "config", "track", "reset", "debug", "show", "ping", "page", "hide", "off", "on" ], 
    t.factory = function(e) {
      return function() {
        var n = Array.prototype.slice.call(arguments);
        return n.unshift(e), t.push(n), t;
      };
    }, t.methods.forEach(function(e) {
      t[e] = t.factory(e);
    }), t.load = function(t) {
      var e = 3e5, n = Math.ceil(new Date() / e) * e, o = document.createElement("script");
      o.type = "text/javascript", o.async = !0, o.crossorigin = "anonymous", o.src = "https://js.driftt.com/include/" + n + "/" + t + ".js";
      var i = document.getElementsByTagName("script")[0];
      i.parentNode.insertBefore(o, i);
    };
  }
}();
drift.SNIPPET_VERSION = '0.3.1';
drift.load('fpbdewrzxxti');

// <!-- End of Async Drift Code -->
