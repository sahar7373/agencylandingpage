import { useState, useRef, useEffect } from 'react'
import { X, Send, Bot } from 'lucide-react'

const ChatBot = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [messages, setMessages] = useState([
        {
            role: 'assistant',
            content: "Quick one — what usually happens when someone calls while you're on the tools?"
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

        const userMessage = { role: 'user', content: input }
        const currentMessages = messages
        setMessages(prev => [...prev, userMessage])
        setInput('')
        setIsLoading(true)

        let pageContent = ''
        try {
            pageContent = document.body.innerText.slice(0, 10000)
        } catch (e) {
            console.error('Failed to read page content', e)
        }

        try {
            const res = await fetch('/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ messages: currentMessages, pageContent, userMessage: input })
            })

            if (!res.ok) throw new Error(`Server error: ${res.status}`)

            const data = await res.json()
            setMessages(prev => [...prev, { role: 'assistant', content: data.text }])
        } catch (error) {
            console.error('Chatbot error:', error)
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
                            aria-label="Close chat"
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
                            <button type="submit" aria-label="Send message" className="h-10 w-10 bg-safety-orange hover:bg-safety-orange-hover text-white rounded-md flex items-center justify-center transition-colors">
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
