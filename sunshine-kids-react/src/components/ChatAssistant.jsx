import { useState, useRef, useEffect } from 'react';
import './ChatAssistant.css';

const SCHOOL_KNOWLEDGE = {
  security: ["password", "credential", "login", "admin", "teacher login", "secret", "access"],
  greetings: ["hello", "hi", "hey", "greetings"],
  programs: ["programs", "classes", "nursery", "kg", "kindergarten", "playgroup"],
  admission: ["admission", "join", "enroll", "fees", "register"],
  location: ["location", "address", "where", "reach"],
  contact: ["contact", "phone", "call", "email", "number"],
  facilities: ["facilities", "infrastructure", "campus", "playground", "safety"],
  activities: ["activities", "sports", "annual day", "events"]
};

const BOT_RESPONSES = {
  security: "I cannot provide any login credentials, passwords, or sensitive information. That information is strictly confidential. 🔒",
  greetings: "Hello! I am Gani-AI. How can I help you today? I can assist you with programs, admissions, or any queries you have!",
  programs: "We offer several programs: \n- **Playgroup** (2-3 years)\n- **Nursery** (3-4 years)\n- **Junior KG** (4-5 years)\n- **Senior KG** (5-6 years)\nEach program is designed for holistic development!",
  admission: "Admission is currently open! 📝 You can fill out the inquiry form on our Contact page, or visit us directly. Would you like the admission fee details?",
  location: "We are located in **BTM Layout, Bangalore**. You can find our exact pin on the Contact page. 📍",
  contact: "You can reach us at **+91 98765 43210** or email us at **hello@sunshinekids.com**. 📞",
  facilities: "Our campus is child-safe and features a colorful playground, digital classrooms, a library, and a dedicated activity zone! 🏫",
  activities: "We have regular sports days, annual functions, and theme-based activities to keep the little ones engaged and learning! 🎨",
  default: "I'm not quite sure about that. But you can call our office at +91 98765 43210 for immediate help! 😊"
};

export default function ChatAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi! I'm Gani-AI. How can I assist you today?", isBot: true }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input.trim();
    setMessages(prev => [...prev, { text: userMessage, isBot: false }]);
    setInput('');
    setIsTyping(true);

    // Simulate AI processing
    setTimeout(() => {
      let response = BOT_RESPONSES.default;
      const lowerInput = userMessage.toLowerCase();

      for (const [key, keywords] of Object.entries(SCHOOL_KNOWLEDGE)) {
        if (keywords.some(k => lowerInput.includes(k))) {
          response = BOT_RESPONSES[key];
          break;
        }
      }

      setMessages(prev => [...prev, { text: response, isBot: true }]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <div className={`chat-assistant-wrapper ${isOpen ? 'open' : ''}`}>
      {/* CHAT BUTTON */}
      <button className="chat-toggle-btn" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? '✕' : '💬'}
      </button>

      {/* CHAT WINDOW */}
      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <div className="bot-info">
              <div className="bot-avatar">🤖</div>
              <div>
                <h4>Gani-AI</h4>
                <span>Smarter. Faster. More Human.</span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="close-btn">✕</button>
          </div>

          <div className="chat-messages" ref={scrollRef}>
            {messages.map((msg, i) => (
              <div key={i} className={`message-bubble ${msg.isBot ? 'bot' : 'user'}`}>
                {msg.text.split('\n').map((line, j) => (
                  <p key={j}>{line}</p>
                ))}
              </div>
            ))}
            {isTyping && (
              <div className="message-bubble bot typing">
                <span>.</span><span>.</span><span>.</span>
              </div>
            )}
          </div>

          <form className="chat-input-area" onSubmit={handleSend}>
            <input 
              type="text" 
              placeholder="Type your doubt here..." 
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit">🚀</button>
          </form>
        </div>
      )}
    </div>
  );
}
