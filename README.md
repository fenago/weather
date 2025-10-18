# Weather Dashboard

A modern, responsive weather dashboard built with Next.js, React, TypeScript, and Tailwind CSS. Get real-time weather data and a 5-day forecast for any city worldwide.

## Features

- 🌡️ **Current Weather**: Display current temperature, weather conditions, wind speed, and humidity
- 📅 **5-Day Forecast**: View detailed weather predictions for the next 5 days
- 🔍 **City Search**: Search for weather data in any city worldwide
- 🤖 **AI Chatbot**: Ask questions about the weather using OpenAI's GPT-4
- 🌡️ **Unit Toggle**: Switch between Celsius and Fahrenheit
- 🎨 **Modern UI**: Clean, beautiful design with gradient backgrounds and smooth animations
- 📱 **Responsive Design**: Fully optimized for mobile, tablet, and desktop devices
- 🌓 **Dark Mode Support**: Automatic dark mode based on system preferences
- ⚡ **Fast & Lightweight**: Built with Next.js for optimal performance

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Weather API**: Open-Meteo (free weather API)
- **AI**: OpenAI GPT-4o-mini
- **Icons**: Weather emoji icons

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn package manager

### Installation

1. Clone the repository or navigate to the project directory:
```bash
cd weather-dashboard
```

2. Create a `.env` file in the root directory and add your OpenAI API key:
```bash
OPENAI_API_KEY=your_openai_api_key_here
```
Get your API key from [OpenAI Platform](https://platform.openai.com/api-keys)

3. Install dependencies:
```bash
npm install
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Build for Production

To create an optimized production build:

```bash
npm run build
npm start
```

## Project Structure

```
weather-dashboard/
├── app/
│   ├── api/
│   │   └── chat/
│   │       └── route.ts      # OpenAI chat API endpoint
│   ├── globals.css           # Global styles and Tailwind imports
│   ├── layout.tsx            # Root layout component
│   └── page.tsx              # Main page component
├── components/
│   ├── ChatBot.tsx           # AI chatbot component
│   ├── CurrentWeather.tsx    # Current weather display
│   ├── Forecast.tsx          # 5-day forecast container
│   ├── ForecastCard.tsx      # Individual forecast day card
│   ├── SearchBar.tsx         # City search input
│   └── UnitToggle.tsx        # Temperature unit toggle
├── lib/
│   ├── weatherApi.ts         # Weather API service functions
│   └── weatherCodes.ts       # Weather code mappings
├── types/
│   └── weather.ts            # TypeScript type definitions
├── .env                      # Environment variables (API keys)
└── public/                   # Static assets
```

## API Information

This application uses the [Open-Meteo API](https://open-meteo.com/), a free weather API that doesn't require an API key. It provides:

- Current weather conditions
- Daily forecasts
- Geocoding for city search
- Automatic timezone handling

## Features Explained

### Current Weather Card
- Large temperature display
- Weather condition icon and description
- Wind speed and humidity metrics
- Beautiful gradient background

### 5-Day Forecast
- Individual cards for each day
- High and low temperatures
- Weather icons and descriptions
- Responsive grid layout

### Search Functionality
- Search any city worldwide
- Real-time loading states
- Error handling for invalid cities
- Default city (Miami) on initial load

### AI Chatbot
- Floating chat button in bottom-right corner
- Context-aware responses based on current weather
- Ask about weather conditions, clothing advice, travel tips
- Powered by OpenAI GPT-4o-mini
- Beautiful chat interface with message history

### Temperature Units
- Toggle between Celsius and Fahrenheit
- Instant conversion with data refresh
- Defaults to Fahrenheit

## Customization

### Change Default City
Edit `app/page.tsx` and modify the default city in the `useEffect`:

```typescript
useEffect(() => {
  handleSearch("Your City"); // Change "London" to your preferred city
}, []);
```

### Modify Color Scheme
Update the Tailwind classes in the components or modify `tailwind.config.ts` for global theme changes.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.

## Acknowledgments

- Weather data provided by [Open-Meteo](https://open-meteo.com/)
- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
