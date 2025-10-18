# Weather Dashboard - Usage Guide

## Getting Started

### 1. Search for a City
- Type any city name in the search bar (e.g., "Miami", "Tokyo", "London")
- Click "Search" or press Enter
- The dashboard will display current weather and 5-day forecast

### 2. Toggle Temperature Units
- Look for the °C / °F toggle button below the search bar
- Click to switch between Celsius and Fahrenheit
- Weather data will automatically refresh with the new unit

### 3. Using the AI Chatbot

#### Opening the Chat
- Look for the blue circular button in the bottom-right corner with a chat icon
- Click it to open the chat window

#### Asking Questions
The chatbot is context-aware and knows about your current weather. Try asking:

**Weather Advice:**
- "Should I bring an umbrella today?"
- "Is it going to rain?"
- "What's the weather like?"

**Clothing Recommendations:**
- "What should I wear today?"
- "Do I need a jacket?"
- "Is it hot enough for shorts?"

**Activity Planning:**
- "Is it a good day for the beach?"
- "Can I go hiking today?"
- "Should I plan outdoor activities?"

**Weather Insights:**
- "Why is it so humid?"
- "What causes this weather?"
- "How does this compare to normal?"

**Forecast Questions:**
- "Will it rain tomorrow?"
- "What's the weather like this weekend?"
- "Should I plan for rain this week?"

#### Chat Features
- **Message History**: Your conversation is saved during the session
- **Context Awareness**: The bot knows what city and weather you're viewing
- **Quick Responses**: Powered by GPT-4o-mini for fast replies
- **Close Chat**: Click the X button or the chat icon again to close

### 4. Understanding the Weather Display

#### Current Weather Card (Top)
- **City Name**: Large display at the top
- **Temperature**: Big number with degree symbol
- **Weather Icon**: Emoji representing conditions
- **Conditions**: Text description (e.g., "Clear sky", "Light rain")
- **Wind Speed**: Shown in km/h
- **Humidity**: Percentage

#### 5-Day Forecast Cards (Bottom)
Each card shows:
- **Day**: Day of the week and date
- **Weather Icon**: Visual representation
- **Conditions**: Text description
- **High/Low**: Temperature range for the day

### 5. Dark Mode
- The app automatically adapts to your system's dark/light mode preference
- No manual toggle needed - it just works!

### 6. Mobile Usage
- Fully responsive design
- All features work on mobile devices
- Chat window adapts to smaller screens
- Touch-friendly interface

## Tips & Tricks

### Best Practices
1. **Be Specific**: Ask clear questions to get better chatbot responses
2. **Use Context**: The bot knows your current weather, so you can ask "Should I bring an umbrella?" instead of "Should I bring an umbrella in Miami?"
3. **Check Forecast**: Look at the 5-day forecast before asking about future weather
4. **Switch Units**: If temperatures seem off, check if you're using the right unit (°F vs °C)

### Troubleshooting

**City Not Found:**
- Check spelling
- Try adding country name (e.g., "Paris, France")
- Use major city names

**Chatbot Not Responding:**
- Check your internet connection
- Verify your OpenAI API key is set correctly in `.env`
- Check browser console for errors

**Weather Data Not Loading:**
- Check internet connection
- The Open-Meteo API might be temporarily down
- Try refreshing the page

## Keyboard Shortcuts

- **Enter**: Send chat message (when chat input is focused)
- **Shift + Enter**: New line in chat message
- **Tab**: Navigate between search and chat inputs

## Privacy & Data

- **No Data Storage**: Conversations are not saved to a database
- **Session Only**: Chat history clears when you refresh the page
- **API Keys**: Your OpenAI key is stored securely in `.env` (never committed to git)
- **Weather Data**: Fetched in real-time from Open-Meteo API

## Example Workflow

1. **Morning Routine**:
   - Open the dashboard
   - Search for your city
   - Check current temperature
   - Ask chatbot: "What should I wear today?"
   - Check 5-day forecast for the week

2. **Travel Planning**:
   - Search for destination city
   - Review 5-day forecast
   - Ask chatbot: "Is it a good time to visit?"
   - Switch to Celsius if traveling internationally
   - Ask about specific activities

3. **Daily Check**:
   - Quick glance at current weather
   - Check if rain is expected
   - Ask chatbot for quick advice
   - Plan your day accordingly

## Need Help?

- Check `README.md` for setup instructions
- See `CHATBOT_FEATURES.md` for detailed chatbot documentation
- Review code comments in the source files
- Open an issue on GitHub for bugs or feature requests
