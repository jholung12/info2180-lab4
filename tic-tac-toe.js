document.addEventListener("DOMContentLoaded", createBoard);

function createBoard(){
  let board = document.getElementById("board");
  let square = board.children;
  let player = "X";
  let button = document.getElementsByClassName('btn');
  let status = document.getElementById('status');
  let arr = [0,1,2,3,4,5,6,7,8];

  // Displays all the squares and gives each event listeners
  for(let i = 0;i < square.length;i++){
    square[i].classList.add("square");

    // Changes colour of square when mouse hover
    square[i].addEventListener("mouseover", function () {
      square[i].classList.add("hover");
    });

    // Removes colour from square when mouse out
    square[i].addEventListener("mouseout", function () {
      square[i].classList.remove("hover");
    });

    // Places an X or O on mouse click
    square[i].addEventListener("click", function addClick() {
        if(square[i].textContent == ""){
          square[i].classList.add(player);
          square[i].textContent = player;
          arr[i] = square[i].textContent;
          if(checkWinner(arr)){
            status.classList.add("you-won");
            status.textContent = player + " Won!";
            for(let c = 0; c < arr.length; c++){
              if(arr[c]!= "X" && arr[c]!= "O"){
                square[c].textContent = " ";
              }
            }
          }
          if(player == "X"){
            player = "O";
          }
          else{
            player = "X";
          }
        }
    });
  }

  //Resets the board on button click
  button[0].addEventListener("click", function () {
    status.classList.remove("you-won");
    status.textContent = "Move your mouse over a square and click to play an X or an O.";
    player = "X";
    arr = [0,1,2,3,4,5,6,7,8];
    for(i = 0;i < square.length;i++){
      square[i].classList = "";
      square[i].textContent = "";
      square[i].classList.add("square");
    }
  });
}

function checkWinner(arr){
  if(arr[0] == arr[1] && arr[0] == arr[2]){
    return true;
  }
  else if(arr[3] == arr[4] && arr[3] == arr[5]){
    return true;
  }
  else if(arr[6] == arr[7] && arr[6] == arr[8]){
    return true;
  }
  else if(arr[0] == arr[3] && arr[0] == arr[6]){
    return true;
  }
  else if(arr[1] == arr[4] && arr[1] == arr[7]){
    return true;
  }
  else if(arr[2] == arr[5] && arr[2] == arr[8]){
    return true;
  }
  else if(arr[0] == arr[4] && arr[0] == arr[8]){
    return true;
  }
  else if(arr[2] == arr[4] && arr[2] == arr[6]){
    return true;
  }
  else{
    return false;
  }
}
