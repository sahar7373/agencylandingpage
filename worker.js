const GEMINI_CONTEXT = `
You are the operations assistant for "Your Trade Partner".

Your role is to diagnose how a trade business handles enquiries and identify where jobs may be slipping through due to response gaps.

You must ask ONE question at a time.

Never ask multiple questions in one message.

Tone:

* Calm
* Practical
* Direct
* Trade-aware
* Professional Australian tone
* Not salesy

You are NOT a marketing assistant.
You do NOT lead with AI, automation, websites, SEO, or ads.
You focus only on enquiry handling behaviour.

PRIMARY OBJECTIVE:
Identify small operational gaps in:

* Missed calls
* After-hours calls
* Slow callbacks
* Form enquiries sitting unanswered
* Lack of structured follow-up
* Booking delays

DIAGNOSTIC FLOW:
Ask 3–5 short operational questions.
Each question must follow a response that:

1. Acknowledges briefly.
2. Identifies potential gap.
3. Asks ONE next question.

Keep responses under 35 words.

After gathering enough information (3–5 responses), provide a short mini audit summary.

MINI AUDIT SUMMARY RULES:

* 3–5 short bullet-style observations
* Calm tone
* No blame
* No hype
* No revenue exaggeration
* No technical explanation

Example format:

Based on what you've shared:

• Some calls may go unanswered when you're on site
• After-hours enquiries rely on manual callbacks
• Response timing may vary depending on workload
• Follow-up isn't fully structured

This usually results in small but consistent enquiry leakage.

Then close with:

"If you'd like, we can walk through your enquiry flow properly. Click Stop Missing Jobs above."

Do not force the CTA.
Do not repeat it multiple times.
Only present it after the mini audit.

If the user ends the conversation, politely close.

Never criticise workmanship.
Never sound aggressive.
Never oversell.
Never use hype language.
`

export default {
  async fetch(request, env) {
    const url = new URL(request.url)

    if (url.pathname === '/chat' && request.method === 'POST') {
      return handleChat(request, env)
    }

    return env.ASSETS.fetch(request)
  }
}

async function handleChat(request, env) {
  const apiKey = env.OPENROUTER_API_KEY
  if (!apiKey) {
    return jsonResponse({ error: 'API key not configured' }, 500)
  }

  let body
  try {
    body = await request.json()
  } catch {
    return jsonResponse({ error: 'Invalid request body' }, 400)
  }

  const { messages = [], pageContent = '', userMessage } = body
  if (!userMessage) {
    return jsonResponse({ error: 'userMessage is required' }, 400)
  }

  const openRouterMessages = [
    { role: 'system', content: `${GEMINI_CONTEXT}\n\nCURRENT PAGE VISIBLE TEXT:\n${pageContent}` },
    ...messages.map(m => ({
      role: m.role === 'user' ? 'user' : 'assistant',
      content: m.content
    })),
    { role: 'user', content: userMessage }
  ]

  try {
    const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
        'HTTP-Referer': 'https://yourtradepartner.com.au',
        'X-Title': 'YourTradePartner'
      },
      body: JSON.stringify({
        model: 'openai/gpt-4o-mini',
        messages: openRouterMessages
      })
    })

    if (!res.ok) {
      const err = await res.text()
      console.error('OpenRouter API error:', err)
      return jsonResponse({ error: 'OpenRouter API error' }, 502)
    }

    const data = await res.json()
    const text = data.choices?.[0]?.message?.content ?? "Sorry, I couldn't generate a response."

    return jsonResponse({ text })
  } catch (error) {
    console.error('Worker fetch error:', error)
    return jsonResponse({ error: 'Internal server error' }, 500)
  }
}

function jsonResponse(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' }
  })
}
