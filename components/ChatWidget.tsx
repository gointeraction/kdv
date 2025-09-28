import React, { useState, useEffect, useRef } from 'react';
import { ChatBubbleLeftRightIcon, PaperAirplaneIcon, XMarkIcon, UserCircleIcon, RobotIcon } from './icons/Icons';

type Message = {
  role: 'user' | 'model';
  text: string;
};

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: '¡Hola! 👋 Soy tu asistente virtual de Kit Digital Venezuela. ¿En qué puedo ayudarte hoy?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    // Scroll whenever messages update, especially during streaming
    scrollToBottom();
  }, [messages]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };
  
  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', text: input };
    const currentInput = input;
    const currentMessages = [...messages, userMessage];
    
    setInput('');
    setMessages([...currentMessages, { role: 'model', text: '' }]); // Add user msg and model placeholder
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          history: currentMessages, // Send history up to the user's message
        }),
      });

      if (!response.ok || !response.body) {
        throw new Error(`Server error: ${response.statusText}`);
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();

      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        
        const chunk = decoder.decode(value, { stream: true });

        setMessages(prev => {
          const lastMsgIndex = prev.length - 1;
          const updatedMessages = [...prev];
          updatedMessages[lastMsgIndex] = {
            ...updatedMessages[lastMsgIndex],
            text: updatedMessages[lastMsgIndex].text + chunk
          };
          return updatedMessages;
        });
      }
    } catch (e: any) {
      console.error("Error sending message:", e);
      const errorMessage: Message = { role: 'model', text: "Lo siento, ocurrió un error al procesar tu solicitud. Por favor, inténtalo de nuevo." };
      setMessages(prev => [...prev.slice(0, -1), errorMessage]); // Replace placeholder with error
      setError("Error de comunicación con el servidor.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 bg-gradient-to-br from-blue-600 to-cyan-500 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-2xl hover:scale-110 focus:scale-110 transition-transform duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-300 z-50"
        aria-label="Abrir chat"
      >
        {isOpen ? <XMarkIcon className="h-8 w-8" /> : <ChatBubbleLeftRightIcon className="h-8 w-8" />}
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 max-w-[calc(100vw-3rem)] h-[60vh] max-h-[700px] bg-white rounded-2xl shadow-2xl flex flex-col z-50 animate-fade-in-up">
          <header className="bg-brand-blue text-white p-4 rounded-t-2xl flex justify-between items-center">
            <h3 className="font-bold text-lg">Asistente Virtual Kit Digital</h3>
            <button onClick={() => setIsOpen(false)} aria-label="Cerrar chat">
              <XMarkIcon className="h-6 w-6" />
            </button>
          </header>

          <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
             {error && (
                <div className="p-3 my-2 bg-red-100 text-red-800 rounded-lg text-sm">{error}</div>
             )}
            {messages.map((msg, index) => (
              <div key={index} className={`flex items-start gap-3 my-3 ${msg.role === 'user' ? 'justify-end' : ''}`}>
                {msg.role === 'model' && <div className="w-8 h-8 rounded-full bg-brand-blue-light flex items-center justify-center flex-shrink-0"><RobotIcon className="w-5 h-5 text-brand-blue" /></div>}
                <div className={`max-w-xs px-4 py-2 rounded-2xl ${msg.role === 'user' ? 'bg-blue-600 text-white rounded-br-none' : 'bg-gray-200 text-gray-800 rounded-bl-none'}`}>
                  {msg.role === 'model' && msg.text === '' && isLoading ? (
                    <div className="flex items-center justify-center p-1">
                      <span className="h-2 w-2 bg-brand-blue rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                      <span className="h-2 w-2 bg-brand-blue rounded-full animate-bounce [animation-delay:-0.15s] mx-1"></span>
                      <span className="h-2 w-2 bg-brand-blue rounded-full animate-bounce"></span>
                    </div>
                  ) : (
                    <p className="text-sm whitespace-pre-wrap">{msg.text}</p>
                  )}
                </div>
                {msg.role === 'user' && <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0"><UserCircleIcon className="w-6 h-6 text-gray-500" /></div>}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-200 bg-white rounded-b-2xl">
            <div className="flex items-center bg-gray-100 rounded-full">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Escribe tu mensaje..."
                className="w-full bg-transparent px-4 py-2 text-sm focus:outline-none"
                disabled={isLoading || !!error}
              />
              <button type="submit" className="p-2 text-brand-blue hover:text-blue-700 disabled:text-gray-400" disabled={!input.trim() || isLoading}>
                <PaperAirplaneIcon className="h-6 w-6" />
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default ChatWidget;
