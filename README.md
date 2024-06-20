# Tic Tac Toe Game

This project is a simple implementation of the classic Tic Tac Toe game built using React.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Game Rules](#game-rules)
- [Contributing](#contributing)
- [License](#license)

## Features

- Play Tic Tac Toe against another player.
- Display the game's status (which player's turn, the winner, or a draw).
- Highlight the winning combination.
- Reset the game to play again.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (which includes npm)

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/mrdeepak21/tic-tac-toe.git
    ```
2. Navigate to the project directory:
    ```sh
    cd tic-tac-toe-react
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```
4. Start the development server:
    ```sh
    npm start
    ```

The game should now be running at `http://localhost:3000`.

## Usage

1. Open your browser and navigate to `http://localhost:3000`.
2. Click on any square to make your move.
3. The game will indicate the current player's turn.
4. The game will highlight the winning combination once a player wins.
5. Click the "Reset" button to start a new game.

## Game Rules

- The game is played on a 3x3 grid.
- Player 1 is 'X' and Player 2 is 'O'.
- Players take turns placing their mark in an empty square.
- The first player to get 3 of their marks in a row (vertically, horizontally, or diagonally) wins.
- If all 9 squares are filled and no player has 3 in a row, the game is a draw.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
