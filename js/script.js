// winners =
//   [0, 1, 2],
//   [3, 4, 5],
//   [6, 7, 8],
//   [0, 3, 6],
//   [1, 4, 7],
//   [2, 5, 8],
//   [0, 4, 8],
//   [2, 4, 6]

$(document).ready(function(){
  
  //adds a class of your_turn to the player, removes the class of the player who went
  var player_1 = $('#player_one_status');
	var player_2 = $('#player_two_status');
	var player1_array = [];
  var player2_array = [];
  var win_arrays = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]]

	var place_marker = function(tile) {
		if (player_1.hasClass('your_turn')) {
			//then place X marker on tile clicked
			tile.text("X");
			tile.addClass('active');
		} else {
			tile.text("O");
			tile.addClass('active');
		}
	};

	var pass_tile_id = function(tile) {
		if (player_1.hasClass('your_turn')) {
			player1_array.push(tile.attr("id"));
		} else {
			player2_array.push(tile.attr("id"));
			check_winner(player2_array);
		};
	}

var check_winner = function(user_array) {
	$.each(win_arrays, function(index, w) {
    counter = 0;
    $.each(w, function(x, tile) {
        if ($.inArray(tile, user_array) == 1) {
          counter += 1
        }
    		if (counter == 3) {
       		// match  
        	console.log('winner')
    		} else {
        console.log('nope')
    		}
		});
	});
};

  var move = function() {
		$('.tile').on('click', function() {
			var tile = $(this);
			if (tile.hasClass('active')) {
				return false 
			} else {
				place_marker(tile);
				pass_tile_id(tile);
				check_winner(player1_array);
				check_winner(player2_array);
				// player one's turn
				if (player_1.hasClass('your_turn')) { 
					player_2.addClass('your_turn');
					player_1.removeClass('your_turn');
				}
				// player two's turn
				else {
					player_2.removeClass('your_turn');
					player_1.addClass('your_turn');
				};
			};
		});
	};

	move()
	


// on click event, pass the tile's id into an array. compare to winner's arrays. 
//if match, declare winner.
// if no match, and all tiles are not filled, keep going
// if all tiles filled, declare tie




})

