# 🎮 Pong Dashboard

A modern take on the classic Pong game with an interactive dashboard, built using TypeScript for enhanced type safety and maintainability.

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Game](https://img.shields.io/badge/Game-FF6B6B?style=for-the-badge&logo=gamepad&logoColor=white)

## 🎯 Overview

This project combines the nostalgic gameplay of Pong with modern web technologies. Features a clean dashboard interface for tracking scores, game statistics, and player performance.

## ✨ Features

- **Classic Gameplay**: Traditional Pong mechanics with smooth controls
- **Interactive Dashboard**: Real-time statistics and game metrics
- **TypeScript**: Type-safe code for better maintainability
- **Responsive Design**: Playable on different screen sizes
- **Score Tracking**: Keep track of wins, losses, and high scores
- **Game Statistics**: View detailed performance metrics
- **Modern UI**: Clean and intuitive interface

## 🎮 Gameplay

- **Two Player Mode**: Classic head-to-head gameplay
- **Keyboard Controls**: Simple and responsive controls
- **Real-time Physics**: Smooth ball movement and collision detection
- **Score System**: First to reach target score wins

## 🛠️ Technologies

- **TypeScript**: Core game logic and type safety
- **HTML5 Canvas**: Game rendering
- **CSS3**: Styling and animations
- **Modern JavaScript**: ES6+ features

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/cgds1/pong-dashboard.git
cd pong-dashboard
```

2. Install dependencies
```bash
npm install
```

3. Run development server
```bash
npm run dev
```

4. Build for production
```bash
npm run build
```

## 🎯 Controls

### Player 1 (Left Paddle)
- **W**: Move up
- **S**: Move down

### Player 2 (Right Paddle)
- **Arrow Up**: Move up
- **Arrow Down**: Move down

### General
- **Space**: Start/Pause game
- **R**: Restart game

## 📊 Dashboard Features

- **Current Score**: Live score display
- **Game Timer**: Track game duration
- **Win/Loss Record**: Historical performance
- **Best Streak**: Longest winning streak
- **Average Rally Length**: Gameplay statistics

## 📁 Project Structure

```
pong-dashboard/
├── src/
│   ├── game/              # Game logic
│   │   ├── Ball.ts        # Ball mechanics
│   │   ├── Paddle.ts      # Paddle controls
│   │   └── Game.ts        # Main game loop
│   ├── dashboard/         # Dashboard components
│   ├── utils/             # Helper functions
│   └── main.ts            # Entry point
├── public/                # Static assets
└── package.json
```

## 🎨 Customization

Modify game settings in `src/config.ts`:
```typescript
export const GAME_CONFIG = {
  ballSpeed: 5,
  paddleSpeed: 8,
  winningScore: 11,
  backgroundColor: '#000000',
  // ... more options
};
```

## 🎯 Future Enhancements

- [ ] AI opponent mode
- [ ] Power-ups and special effects
- [ ] Multiplayer online mode
- [ ] Custom themes and skins
- [ ] Sound effects and background music
- [ ] Tournament mode
- [ ] Leaderboard system

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest new features
- Submit pull requests
- Improve game mechanics

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

**Carlos Díaz**
- GitHub: [@cgds1](https://github.com/cgds1)
- LinkedIn: [Carlos Díaz](https://www.linkedin.com/in/cgds1)

---

⭐ Star this repo if you enjoy playing Pong!
