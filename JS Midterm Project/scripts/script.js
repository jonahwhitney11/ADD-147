var roster = []; // Array to store players

// Function to display roster
function displayRoster() {
  var rosterContainer = document.getElementById("roster");
  rosterContainer.innerHTML = ""; // Clear previous content

  for (var i = 0; i < roster.length; i++) {
    var player = roster[i];

    // Create player card using innerHTML
    var playerCard = "<div class='player-card'><h2>" + player.name +
      "</h2><p># " + player.number + "</p><p>Position: " + player.position + "</p></div>";

    rosterContainer.innerHTML += playerCard;
  }
}

// Function to add a player
function addPlayer() {
  var name = document.getElementById("playerName").value;
  var number = document.getElementById("playerNumber").value;
  var position = document.getElementById("playerPosition").value;

  if (name === "" || number === "") {
    alert("Please enter all player details!");
    return;
  }

  // Create player object
  var player = {
    name: name,
    number: number,
    position: position
  };

  roster.push(player); // Add to array
  displayRoster(); // Refresh display

  // Clear input fields
  document.getElementById("playerName").value = "";
  document.getElementById("playerNumber").value = "";
}

// Event Listener for "Add Player" button
document.getElementById("addPlayer").addEventListener("click", addPlayer);
