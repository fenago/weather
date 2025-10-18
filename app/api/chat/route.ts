import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: NextRequest) {
  try {
    const { messages, weatherContext } = await req.json();

    // Add weather context to the system message if available
    const systemMessage = weatherContext
      ? {
          role: "system" as const,
          content: `You are a helpful weather assistant with access to REAL weather data. The user is viewing weather for ${weatherContext.city}, ${weatherContext.country}.

CURRENT WEATHER:
- Temperature: ${weatherContext.temperature}°${weatherContext.unit === "fahrenheit" ? "F" : "C"}
- Conditions: ${weatherContext.conditions}
- Wind Speed: ${weatherContext.windSpeed} km/h
- Humidity: ${weatherContext.humidity}%

FORECAST (Next 6 days):
${weatherContext.forecast.map((day: any) => `- ${day.day}: ${day.conditions}, High: ${day.high}°, Low: ${day.low}°`).join('\n')}

IMPORTANT: You HAVE access to this forecast data above. When users ask about future weather (tomorrow, this week, etc.), use the forecast data provided. DO NOT say you can't check forecasts - you already have the data! Answer confidently based on the forecast above.

Provide helpful, specific advice about clothing, activities, and planning based on this actual data. Be conversational and friendly. Keep responses concise (2-3 sentences max).`,
        }
      : {
          role: "system" as const,
          content: "You are a helpful weather assistant. Answer questions about weather and provide helpful advice. Keep responses concise and friendly.",
        };

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [systemMessage, ...messages],
      temperature: 0.7,
      max_tokens: 500,
    });

    return NextResponse.json({
      message: completion.choices[0].message.content,
    });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { error: "Failed to process chat request" },
      { status: 500 }
    );
  }
}
