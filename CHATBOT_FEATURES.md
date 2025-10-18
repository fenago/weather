# AI Chatbot Features

## Overview
An intelligent weather assistant powered by OpenAI's GPT-4o-mini has been integrated into the weather dashboard. The chatbot provides context-aware responses based on the current weather data being displayed.

## Features

### 🤖 Smart Weather Assistant
- **Context-Aware**: The chatbot knows what city and weather you're viewing
- **Temperature Context**: Understands current temperature and conditions
- **Unit Awareness**: Knows whether you're using Celsius or Fahrenheit

### 💬 Chat Interface
- **Floating Button**: Accessible chat button in bottom-right corner
- **Clean UI**: Modern chat interface with message bubbles
- **Message History**: Maintains conversation context
- **Loading States**: Visual feedback while AI generates responses

### 🎯 Use Cases
Ask the chatbot about:
- **Weather Advice**: "Should I bring an umbrella?"
- **Clothing Recommendations**: "What should I wear today?"
- **Travel Planning**: "Is it a good day for outdoor activities?"
- **Weather Explanations**: "Why is it so humid?"
- **Comparisons**: "How does this compare to yesterday?"

## Technical Implementation

### API Route
- **Endpoint**: `/api/chat`
- **Method**: POST
- **Model**: GPT-4o-mini
- **Max Tokens**: 500 per response
- **Temperature**: 0.7 (balanced creativity)

### Security
- API key stored in `.env` file
- `.env` added to `.gitignore`
- Server-side API calls only
- No client-side key exposure

### Components
1. **ChatBot.tsx**: Main chat UI component
2. **route.ts**: API endpoint for OpenAI integration
3. Integration with weather data context

## Setup

1. **Get OpenAI API Key**:
   - Visit https://platform.openai.com/api-keys
   - Create a new API key
   - Copy the key

2. **Add to .env**:
   ```bash
   OPENAI_API_KEY=your_api_key_here
   ```

3. **Install Dependencies**:
   ```bash
   npm install
   ```

4. **Run the App**:
   ```bash
   npm run dev
   ```

## Example Conversations

**User**: "What should I wear today?"
**Bot**: "With the current temperature of 82°F in Miami and clear skies, I'd recommend light, breathable clothing like shorts and a t-shirt. Don't forget sunscreen!"

**User**: "Is it a good day for the beach?"
**Bot**: "Absolutely! With clear skies and 82°F, it's perfect beach weather. The wind speed is moderate at 12 km/h, so it won't be too breezy."

**User**: "Will it rain tomorrow?"
**Bot**: "Looking at the 5-day forecast, tomorrow shows partly cloudy conditions with a high of 84°F. No rain is expected, so you should be good to go!"

## Cost Considerations

- **Model**: GPT-4o-mini (cost-effective)
- **Token Limit**: 500 tokens per response (keeps costs low)
- **Typical Cost**: ~$0.0001-0.0003 per conversation
- **Recommendation**: Monitor usage in OpenAI dashboard

## Future Enhancements

Potential improvements:
- [ ] Add conversation export/save feature
- [ ] Implement rate limiting
- [ ] Add voice input/output
- [ ] Multi-language support
- [ ] Weather alerts and notifications
- [ ] Integration with calendar for planning
