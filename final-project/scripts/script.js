fetch('games.json')
  .then(response => response.json())
  .then(data => {
    const gameList = document.getElementById('gameList');

    data.forEach(game => {
      const gameDiv = document.createElement('div');
      gameDiv.innerHTML = `
        <div id="gameInfo">
        <h3>${game.name}</h3>
        <p>Publisher: ${game.publisher}</p>
        <p>Console: ${game.console}</p>
        <p>Release Year: ${game["release year"]}</p>
        </div>
      `;
      gameList.appendChild(gameDiv);
    });
  })
  .catch(error => console.error('Error loading JSON:', error));

$(document).ready(function () {
  // calculation for center position
  var centerPosition = ($(window).width() - $('#infoBox').outerWidth()) / 2;

  // animation
  $('#infoBox').animate({
    left: centerPosition
  }, 'slow');
});

$(document).ready(function () {
  $("button").click(function () {
    $("#div1").load("../text_file.txt");
  });
});