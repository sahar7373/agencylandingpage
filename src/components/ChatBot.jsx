import { useState, useRef, useEffect } from 'react'
import { GoogleGenerativeAI } from "@google/generative-ai"
import { Hammer, MessageCircle, X, Send, Bot, Loader2 } from 'lucide-react'

const CONTEXT = `
You are the AI assistant for "YourTradePartner", a specialized agency helping trade businesses (plumbers, electricians, builders, etc.) grow.

CORE OFFERINGS:
1. PACKAGE 1: Trade-Ready Setup ($1,900 + $499/yr)
   - 3-page website (Home, Projects, Quote), domain, hosting, email, G-Business Profile.
   - For solo operators wanting to look professional.
2. PACKAGE 2: Local Jobs Engine ($3,600 + $399/qtr) - MOST POPULAR
   - 6-page site, local SEO pages, enquiry tracking, AI voice assistant.
   - For trades wanting consistent enquiries without admin work.
3. PACKAGE 3: Growth System (From $6,500 + $399/qtr)
   - 12-page site, intense SEO, advanced receptionist systems, ads setup (optional).
   - For established trades scaling up.

NEW OFFERS:
- MISSED JOB REVIEW ($89.99): A 30-min session to find where you're losing money (missed calls, bad follow-up).
- FREE GUIDE: "Get a Free Guide" available for download to help you understand the system.

KEY STATS & PHILOSOPHY:
- 78% of homeowners check a website before calling.
- "We don't sell websites, we build job-winning systems."
- GUARANTEE: "No lock-in: if you’re not confident after delivery, you can walk away."

INSTRUCTIONS:
- STRICT LIMIT: Keep answers UNDER 30 WORDS.
- DRIVE ACTION: Use CTAs like "Book a Missed Job Review ($89)" or "Check out the Local Jobs Engine."
- TONE: Professional but blunt trade talk. No marketing fluff.
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

        try {
            const genAI = new GoogleGenerativeAI(apiKey)
            const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-exp" })
            const chat = model.startChat({
                history: [
                    {
                        role: "user",
                        parts: [{ text: `System Context: ${CONTEXT}` }],
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
            console.error(error)
            setMessages(prev => [...prev, { role: 'assistant', content: "Sorry, I hit a snag. Try asking differently?" }])
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="fixed bottom-6 right-6 z-50 font-sans">
            {!isOpen && (
                <button
                    onClick={() => setIsOpen(true)}
                    className="h-16 w-16 rounded-full bg-safety-orange hover:bg-safety-orange-hover shadow-2xl animate-in fade-in zoom-in duration-300 flex items-center justify-center text-black transition-colors"
                >
                    <Hammer className="w-8 h-8" />
                </button>
            )}

            {isOpen && (
                <div className="bg-construction-charcoal border border-white/10 w-[350px] md:w-[400px] h-[500px] rounded-lg shadow-2xl flex flex-col animate-in slide-in-from-bottom-5 duration-300 overflow-hidden">
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
