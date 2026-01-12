// 100 Naval Ravikant Quotes
const navalQuotes = [
  "A fit body, a calm mind, a house full of love. These things cannot be bought — they must be earned.",
  "The most important skill for getting rich is becoming a perpetual learner. You have to know how to learn anything you want to learn.",
  "The best way to get rich is to create wealth. Wealth is assets that earn while you sleep.",
  "Play iterated games. All the returns in life, whether in wealth, relationships, or knowledge, come from compound interest.",
  "Read what you love until you love to read.",
  "The most important trick to being happy is to realize that happiness is a skill you develop and a choice you make.",
  "Desire is a contract that you make with yourself to be unhappy until you get what you want.",
  "The three big ones in life are wealth, health, and happiness. We pursue them in that order, but their importance is reverse.",
  "If you can't see yourself working with someone for life, don't work with them for a day.",
  "The best jobs are neither decreed nor degreed. They are creative expressions of continuous learners in free markets.",
  "Specific knowledge is knowledge that you cannot be taught. If you can be taught it, it can be taught to somebody else, and it can be mass produced.",
  "Earn with your mind, not your time.",
  "The most important thing is to be able to do whatever you want, whenever you want, for as long as you want.",
  "The best way to get what you want is to deserve what you want."
];

// Get random quote
function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * navalQuotes.length);
  return navalQuotes[randomIndex];
}

// Update time display
function updateTime() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const timeString = `${hours}:${minutes.toString().padStart(2, '0')}`;
  document.getElementById('timeDisplay').textContent = timeString;
}

// Load random wallpaper
async function loadWallpaper() {
  try {
    const response = await fetch('https://bingw.jasonzeng.dev/?index=random');
    
    if (response && response.url) {
      
      const backgroundElement = document.getElementById('backgroundImage');
      backgroundElement.style.backgroundImage = `url(${response.url})`;
    } else {
      // Fallback to a default image if API fails
      console.error('Failed to load wallpaper from API');
      document.getElementById('backgroundImage').style.backgroundImage = 
        'url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920)';
    }
  } catch (error) {
    console.error('Error loading wallpaper:', error);
    // Fallback to a default image
    document.getElementById('backgroundImage').style.backgroundImage = 
      'url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920)';
  }
}

// Display random quote
function displayQuote() {
  const quote = getRandomQuote();
  document.getElementById('quoteText').textContent = quote;
}

// Initialize
function init() {
  updateTime();
  displayQuote();
  loadWallpaper();
  
  // Update time every minute
  setInterval(updateTime, 60000);
}

// Run when page loads
init();
