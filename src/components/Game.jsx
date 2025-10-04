import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Gamepad2, RefreshCw } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

const Game = () => {
  const { t } = useTranslation();
  // Game state
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [targetPosition, setTargetPosition] = useState({ x: 50, y: 50 });
  const [timeLeft, setTimeLeft] = useState(30);
  const gameAreaRef = useRef(null);

  // Start the game
  const startGame = () => {
    setScore(0);
    setGameOver(false);
    setGameStarted(true);
    setTimeLeft(30);
    moveTarget();
  };

  // Reset the game
  const resetGame = () => {
    setGameStarted(false);
    setGameOver(false);
    setScore(0);
    setTimeLeft(30);
  };

  // Move the target to a random position
  const moveTarget = () => {
    if (gameAreaRef.current) {
      const gameArea = gameAreaRef.current.getBoundingClientRect();
      
      // Account for the target size (50px) to keep it within bounds
      const maxX = gameArea.width - 50;
      const maxY = gameArea.height - 50;
      
      const newX = Math.floor(Math.random() * maxX);
      const newY = Math.floor(Math.random() * maxY);
      
      setTargetPosition({ x: newX, y: newY });
    }
  };

  // Handle target click
  const handleTargetClick = () => {
    if (!gameOver && gameStarted) {
      setScore(prevScore => prevScore + 1);
      moveTarget();
    }
  };

  // Timer effect
  useEffect(() => {
    let timer;
    if (gameStarted && !gameOver) {
      timer = setInterval(() => {
        setTimeLeft(prevTime => {
          if (prevTime <= 1) {
            clearInterval(timer);
            setGameOver(true);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [gameStarted, gameOver]);

  return (
    <section className="py-20 relative" id="game">
      <div className="container-custom">
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 text-[var(--color-text-secondary)] px-4 py-2 rounded-full bg-[var(--color-secondary-lighter)]/50 border border-[var(--color-border)] mb-4">
            <Gamepad2 size={18} className="text-[var(--color-primary)]" />
            <span className="text-sm font-medium">{t('game.miniGame')}</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="heading-gradient">{t('game.quickReflexes')}</span>
          </h2>
          
          <p className="text-[var(--color-text-secondary)] text-lg max-w-2xl mx-auto">
            {t('game.description')}
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="card p-6 backdrop-blur-md">
            {/* Game controls */}
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-4">
                <div className="px-4 py-2 bg-[var(--color-secondary-darker)] rounded-lg">
                  <span className="text-[var(--color-text)]">{t('game.score')}: <span className="text-[var(--color-primary)] font-bold">{score}</span></span>
                </div>
                <div className="px-4 py-2 bg-[var(--color-secondary-darker)] rounded-lg">
                  <span className="text-[var(--color-text)]">{t('game.time')}: <span className={`font-bold ${timeLeft < 10 ? 'text-red-500' : 'text-[var(--color-primary)]'}`}>{timeLeft}s</span></span>
                </div>
              </div>
              
              <motion.button
                onClick={gameStarted ? resetGame : startGame}
                className="btn-primary py-2 px-4 flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {gameStarted ? (
                  <>
                    <RefreshCw size={16} />
                    {t('game.reset')}
                  </>
                ) : (
                  <>
                    <Gamepad2 size={16} />
                    {t('game.startGame')}
                  </>
                )}
              </motion.button>
            </div>
            
            {/* Game area */}
            <div 
              ref={gameAreaRef}
              className="relative bg-[var(--color-secondary-darker)]/30 rounded-xl h-[300px] sm:h-[400px] border border-[var(--color-border)] overflow-hidden"
              style={{ cursor: gameStarted && !gameOver ? 'crosshair' : 'default' }}
            >
              {!gameStarted && !gameOver && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Gamepad2 size={48} className="text-[var(--color-primary)] mx-auto mb-4" />
                    <p className="text-[var(--color-text)] text-xl font-bold">{t('game.clickStart')}</p>
                  </motion.div>
                </div>
              )}
              
              {gameOver && (
                <div className="absolute inset-0 flex items-center justify-center bg-[var(--color-secondary-darker)]/80 backdrop-blur-sm">
                  <motion.div
                    className="text-center p-6 rounded-xl bg-[var(--color-secondary)]/80 border border-[var(--color-border)]"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Gamepad2 size={48} className="text-[var(--color-primary)] mx-auto mb-4" />
                    <h3 className="text-[var(--color-text)] text-2xl font-bold mb-2">{t('game.gameOver')}</h3>
                    <p className="text-[var(--color-text-secondary)] mb-4">{t('game.yourScore')}: <span className="text-[var(--color-primary)] font-bold text-xl">{score}</span></p>
                    <motion.button
                      onClick={startGame}
                      className="btn-primary py-2 px-6"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {t('game.playAgain')}
                    </motion.button>
                  </motion.div>
                </div>
              )}
              
              {gameStarted && !gameOver && (
                <motion.div
                  className="absolute w-12 h-12 rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] flex items-center justify-center cursor-pointer shadow-lg"
                  style={{ 
                    left: `${targetPosition.x}px`, 
                    top: `${targetPosition.y}px`,
                  }}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleTargetClick}
                >
                  <div className="w-4 h-4 bg-white rounded-full" />
                </motion.div>
              )}
            </div>

            {/* Instructions */}
            <div className="mt-4 p-4 rounded-lg bg-[var(--color-secondary-darker)]/30 border border-[var(--color-border)]">
              <h4 className="text-[var(--color-text)] font-medium mb-2">{t('game.howToPlay')}</h4>
              <ul className="text-[var(--color-text-secondary)] text-sm space-y-1">
                <li>• {t('game.instruction1')}</li>
                <li>• {t('game.instruction2')}</li>
                <li>• {t('game.instruction3')}</li>
                <li>• {t('game.instruction4')}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Game; 