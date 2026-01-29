import { useState, useRef, useEffect } from 'react'
import { GoogleGenerativeAI } from "@google/generative-ai"
import { Hammer, MessageCircle, X, Send, Bot, Loader2 } from 'lucide-react'

const CONTEXT = `
You are the AI assistant for "YourTradePartner", a specialized agency helping trade businesses (plumbers, electricians, builders, etc.) grow.

CORE OFFERINGS:
1. PACKAGE 1: Trade-Ready Setup ($1,900 + $499/yr)
   - 3-page website (Home, Services, Project Showcase, Contact), domain, hosting, email, G-Business Profile.
   - For solo operators wanting to look professional. "Best for solo operators & small crews."

2. PACKAGE 2: Local Jobs Engine ($3,600 + $399/qtr) - STANDARD
   - 6-page site (Home, Services, About, Service Area, Projects, Contact).
   - Includes: Lead capture, Review system, basic local SEO pages, 1 year domain/hosting.
   - Call Handling: Website assistant chatbot included (custom booking bot priced separately).
   - "Don’t miss enquiries. Turn interest into calls."

3. PACKAGE 3: Growth System (From $6,500 + $399/qtr) - MOST POPULAR
   - Up to 7 pages + Extra Service & Suburb pages built around real local searches.
   - Includes: All of Package 2 + After-hours/Receptionist handling setup, LinkedIn profile, promotional videos/AI content.
   - Advanced Tracking: See where enquiries come from (pages, sources).
   - "Best for established trades who want consistent enquiries and long-term growth."
   - PRICING NOTE: Varies ($7.5k-$12k typ.) based on pages, locations, and system complexity. Receptionist billed separately.

NEW OFFER: "STOP MISSING JOBS" STRATEGY SESSION ($149 - Fully Credited):
- A paid business check to find where enquiries/confidence are leaking.
- We review: Website, call handling, trust signals.
- You get: 3-5 clear improvement points & priority recommendation.
- Cost credited back if you proceed with any setup. No lock-in.

KEY PHILOSOPHY:
- "We don't sell websites, we build job-winning systems."
- "The problem isn't work ethic, it's a system problem."
- "Nothing breaks overnight, but the gap widens quietly."
- ROI: Usually 3-5 extra jobs pays for the entire Growth System (approx 90 days).

GUARANTEE:
- "No lock-in: if you're not confident after delivery, you can walk away before ongoing fees start."

CONVERSATIONAL INSTRUCTIONS:
- GREETINGS: If user says "hi", "hello", "g'day", etc., respond warmly/briefly (e.g., "G'day! Doing well. What can I help you with?").
- BE HUMAN: Acknowledge first, then guide.
- STRICT LIMIT: Keep answers UNDER 40 WORDS.
- DRIVE ACTION: Use CTAs like "Book a Strategy Session" or "Check out the Local Jobs Engine."
- TONE: Professional but friendly trade talk.
- DYNAMIC CONTENT: Use the user's current view content provided below.
`

const ChatBot = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [messages, setMessages] = useState([
        { role: 'assistant', content: "G'day! Want to know how to get more high-value jobs? Ask me anything." }
    ])
    const [input, setInput] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const scrollRef = useRef(null)

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' })
        }
    }, [messages, isOpen])

    // Auto-open effect
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsOpen(true)
        }, 2000)
        return () => clearTimeout(timer)
    }, [])

    const handleSend = async () => {
        if (!input.trim()) return

        const apiKey = import.meta.env.VITE_GEMINI_API_KEY
        if (!apiKey) {
            setMessages(prev => [...prev, { role: 'assistant', content: "System Error: API Key is missing. Please check .env file." }])
            return
        }

        const userMessage = { role: 'user', content: input }
        setMessages(prev => [...prev, userMessage])
        setInput('')
        setIsLoading(true)

        // Capture current page text logic
        let pageContent = ""
        try {
            // Simple robust scraping: Get visible text from body, ideally confusing parts removed
            // But for this simple landing page, body.innerText is sufficient and robust
            pageContent = document.body.innerText.slice(0, 10000) // Limit to avoid token overflow if huge
        } catch (e) {
            console.error("Failed to read page content", e)
        }

        try {
            const genAI = new GoogleGenerativeAI(apiKey)
            const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" })
            const chat = model.startChat({
                history: [
                    {
                        role: "user",
                        parts: [{ text: `System Context: ${CONTEXT}\n\nCURRENT PAGE VISIBLE TEXT:\n${pageContent}` }],
                    },
                    {
                        role: "model",
                        parts: [{ text: "Understood. I will act as the YourTradePartner assistant, keeping answers under 30 words and using the specific data provided." }],
                    },
                    ...messages.map(m => ({
                        role: m.role === 'user' ? 'user' : 'model',
                        parts: [{ text: m.content }]
                    }))
                ],
            })

            const result = await chat.sendMessage(input)
            const response = await result.response
            const text = response.text()

            setMessages(prev => [...prev, { role: 'assistant', content: text }])
        } catch (error) {
            console.error('Chatbot API Error:', error)
            console.error('Error details:', error.message)
            setMessages(prev => [...prev, { role: 'assistant', content: "Sorry, I hit a snag. Try asking differently?" }])
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="fixed left-0 top-1/2 -translate-y-1/2 z-50 font-sans">
            {!isOpen && (
                <button
                    onClick={() => setIsOpen(true)}
                    className="h-32 w-12 bg-safety-orange hover:bg-safety-orange-hover shadow-2xl flex flex-col items-center justify-center text-white transition-all duration-300 rounded-r-lg gap-2"
                    style={{ writingMode: 'vertical-rl' }}
                >
                    <span className="text-xs font-black uppercase tracking-widest rotate-180">Assistant</span>
                    <Hammer className="w-5 h-5 rotate-180" />
                </button>
            )}

            {isOpen && (
                <div className="bg-construction-charcoal border-r border-white/10 w-[350px] md:w-[400px] h-[500px] shadow-2xl flex flex-col animate-in slide-in-from-left-5 duration-300 overflow-hidden">
                    {/* Header */}
                    <div className="p-4 bg-safety-orange flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <Bot className="w-6 h-6 text-white" />
                            <div>
                                <h3 className="font-black uppercase text-white leading-none">Trade Assistant</h3>
                                <p className="text-[10px] text-white/80 font-bold uppercase tracking-widest">Online</p>
                            </div>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="text-white hover:bg-white/20 rounded-full h-8 w-8 flex items-center justify-center transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Messages */}
                    <div className="flex-grow p-4 overflow-y-auto scrollbar-thin scrollbar-thumb-white/10" ref={scrollRef}>
                        <div className="space-y-4">
                            {messages.map((m, i) => (
                                <div key={i} className={`flex gap-3 ${m.role === 'user' ? 'flex-row-reverse' : ''}`}>
                                    {m.role === 'assistant' && (
                                        <div className="h-8 w-8 bg-white/10 border border-white/5 rounded-full flex items-center justify-center overflow-hidden flex-shrink-0">
                                            <div className="bg-safety-orange text-white text-xs font-bold w-full h-full flex items-center justify-center">AI</div>
                                        </div>
                                    )}
                                    <div
                                        className={`rounded-lg p-3 text-sm max-w-[80%] ${m.role === 'user'
                                            ? 'bg-safety-orange text-white font-medium'
                                            : 'bg-white/10 text-white/90 border border-white/5'
                                            }`}
                                    >
                                        {m.content}
                                    </div>
                                </div>
                            ))}
                            {isLoading && (
                                <div className="flex gap-3">
                                    <div className="h-8 w-8 bg-white/10 border border-white/5 rounded-full flex items-center justify-center">
                                        <div className="bg-safety-orange text-white text-xs font-bold w-full h-full flex items-center justify-center rounded-full">AI</div>
                                    </div>
                                    <div className="bg-white/10 rounded-lg p-3 border border-white/5 flex items-center">
                                        <div className="w-4 h-4 text-white/50 animate-pulse text-[10px]">...</div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Input */}
                    <div className="p-4 border-t border-white/10 bg-black/20">
                        <form
                            onSubmit={(e) => {
                                e.preventDefault()
                                handleSend()
                            }}
                            className="flex gap-2"
                        >
                            <input
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Ask about growth..."
                                className="flex h-10 w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-safety-orange focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            />
                            <button type="submit" className="h-10 w-10 bg-safety-orange hover:bg-safety-orange-hover text-white rounded-md flex items-center justify-center transition-colors">
                                <Send className="w-4 h-4" />
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ChatBot
