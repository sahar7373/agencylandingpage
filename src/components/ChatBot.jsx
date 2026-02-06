import { useState, useRef, useEffect } from 'react'
import { GoogleGenerativeAI } from "@google/generative-ai"
import { Hammer, MessageCircle, X, Send, Bot, Loader2 } from 'lucide-react'

const CONTEXT = `
You are the AI assistant for "YourTradePartner", a specialized agency helping trade businesses (plumbers, electricians, builders, etc.) grow.

GOAL: You are a "live ad unit" demonstrating the system. Your job is to SELL the value of this system without sounding salesy.

RESPONSE PATTERN (Apply to every answer):
1. Short direct answer (1 sentence).
2. Tie it back to money or missed jobs (Why it matters).
3. Soft CTA (Question or prompt).

EXAMPLE RESPONSES:
User: "What does this chatbot do?"
You: "This chatbot handles enquiries after hours, asks the right questions, and sends you a clean summary — so you don’t lose the job to the next trade. It essentially stops money leaking from your website. Want to see if this makes sense for your business?"

User: "How much is it?"
You: "Our packages start from $1,900 for a full setup, but the real cost is the jobs you're missing right now by not having a system. We build this to pay for itself in 90 days. [BOOK_ACTION]"

HARD RULES:
❌ DO NOT explain every package in detail.
❌ DO NOT quote specific ongoing prices inside chat (give range only if pressed).
✅ ALWAYS route to the "Stop Missing Jobs" CTA for next steps.
✅ KEEP answers short (under 40 words).
✅ DO NOT show the booking button in every response. Use the hidden token [BOOK_ACTION] only when the user shows clear interest or after 2-3 helpful exchanges.

CLOSING LINE:
If the user seems interested or asks for next steps, END your message with:
"If you want this exact system on your site, click Stop Missing Jobs above.[BOOK_ACTION]"
`

const ChatBot = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [messages, setMessages] = useState([
        {
            role: 'assistant',
            content: "Most trades don’t realise how many jobs slip through until someone shows them.\nI can show you exactly how this system works on your site."
        }
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
        }, 2000) // 2 seconds auto-open
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
                                            <div className="bg-safety-orange text-white text-xs font-bold w-full h-full flex items-center justify-center">YTP</div>
                                        </div>
                                    )}
                                    <div
                                        className={`rounded-lg p-3 text-sm max-w-[80%] ${m.role === 'user'
                                            ? 'bg-safety-orange text-white font-medium'
                                            : 'bg-white/10 text-white/90 border border-white/5'
                                            }`}
                                    >
                                        {m.content.replace('[BOOK_ACTION]', '')}
                                        {m.role === 'assistant' && (m.content.toLowerCase().includes('strategy session') || m.content.includes('[BOOK_ACTION]')) && (
                                            <button
                                                data-cal-namespace="strategy-session"
                                                data-cal-link="saharsh-patel-fr7cuf/strategy-session"
                                                data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
                                                className="mt-3 w-full bg-safety-orange hover:bg-safety-orange-hover text-white py-2 px-4 rounded-sm text-xs font-black uppercase tracking-widest transition-colors shadow-lg shadow-safety-orange/20"
                                            >
                                                Book Session Now
                                            </button>
                                        )}
                                    </div>
                                </div>
                            ))}
                            {isLoading && (
                                <div className="flex gap-3">
                                    <div className="h-8 w-8 bg-white/10 border border-white/5 rounded-full flex items-center justify-center">
                                        <div className="bg-safety-orange text-white text-xs font-bold w-full h-full flex items-center justify-center rounded-full">YTP</div>
                                    </div>
                                    <div className="bg-white/10 rounded-lg p-3 border border-white/5 flex items-center">
                                        <div className="w-4 h-4 text-white/50 animate-pulse text-[10px]">...</div>
                                    </div>
                                </div>
                            )}
                        </div>
                        {/* Starter Buttons */}
                        {messages.length === 1 && (
                            <div className="flex flex-col gap-2 mt-2">
                                <button
                                    onClick={() => { setInput("Show me how Chatbot works"); handleSend(); }}
                                    className="text-left text-xs font-bold text-white/80 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-md p-3 transition-colors"
                                >
                                    👉 Show me how Chatbot works
                                </button>
                                <button
                                    onClick={() => { setInput("How does Chatbot stop missed calls?"); handleSend(); }}
                                    className="text-left text-xs font-bold text-white/80 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-md p-3 transition-colors"
                                >
                                    📞 How does Chatbot stop missed calls?
                                </button>
                                <button
                                    onClick={() => { setInput("Is Chatbot included in your packages?"); handleSend(); }}
                                    className="text-left text-xs font-bold text-white/80 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-md p-3 transition-colors"
                                >
                                    💬 Is Chatbot included in your packages?
                                </button>
                            </div>
                        )}
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
