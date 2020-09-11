
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


function bracketTitle() {
    gameTitle = document.getElementById("gameTitle").value;
    return gameTitle;
}

function NumberOfPlayers() {
    numberOfPlayers = document.getElementById("playerNum").value;
    return numberOfPlayers;
}



function numPlayers(){                                                          // location functions
     window.location.href="numPlayers.html";    
}
function enterNames() {
    window.location.href="enterNames.html";   
}
function bracketField()
{
      window.location.href="bracketField.html";   
}
function index(){                                                          // location functions
     window.location.href="index.html";    
}
