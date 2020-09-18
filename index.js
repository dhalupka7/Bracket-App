
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();
var numberOfPlayers;
var gameTitle;
var playerNames = [];


function bracketTitle() {                                                       //Gets title of bracket 
    gameTitle = document.getElementById("gameTitle").value;
    return gameTitle;
}

function NumberOfPlayers() {                                                    //Gets number of players
    numberOfPlayers = document.getElementById("playerNum").value;
    return numberOfPlayers;
}



function numPlayers(){                                                          // Navigates to numPlayers page
     window.location.href="numPlayers.html";    
}
function enterNames() {
    window.location.href="enterNames.html";                                     // Navigates to enterNames page
}

function index(){                                                                // Navigates to MAIN index page
    localStorage.clear();
     window.location.href="index.html";    
}


function bracketField4(){                                                       // Navigates to bracketField page with 4 max players
     window.location.href="bracketField4.html";    
}
function bracketField6() {                                                      // Navigates to bracketField page with 6 max players
    window.location.href="bracketField6.html";   
}
function bracketField8() {                                                       // Navigates to bracketField page with 8 max players{
      window.location.href="bracketField8.html";   
}
function bracketField10(){                                                                               
     window.location.href="bracketField10.html";                                // Navigates to bracketField page with 10 max players
}
function bracketField12(){                                                          
     window.location.href="bracketField12.html";                                // Navigates to bracketField page with 12 max players
}
function bracketField14() {
    window.location.href="bracketField14.html";                                 // Navigates to bracketField page with 14 max players
}
function bracketField16(){
      window.location.href="bracketField16.html";                                // Navigates to bracketField page with  16 max players
}