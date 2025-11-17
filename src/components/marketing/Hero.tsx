"use client";

export function Hero() {
  const scrollToWaitlist = () => {
    const element = document.getElementById("waitlist");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const scrollToHowItWorks = () => {
    const element = document.getElementById("how-it-works");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      className="relative flex items-center overflow-hidden"
      style={{ minHeight: "calc(100vh - 48px)" }}
    >
      {/* Background matching app - dark indigo to purple gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0d1a] via-[#1a1b2e] to-[#0f0a19]" />
      
      {/* Subtle glowing lines effect */}
      <div className="absolute inset-0">
        <div className="absolute left-[10%] top-[20%] h-px w-1/4 bg-gradient-to-r from-transparent via-pink-500/20 to-transparent" />
        <div className="absolute right-[15%] top-[60%] h-px w-1/3 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
      </div>
      
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center gap-8 px-6 py-10 sm:py-14 lg:flex-row lg:gap-16 lg:py-20">
        {/* Left Content */}
        <div className="flex-1 space-y-6 text-center lg:text-left">
          <div className="space-y-4">
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              RememberHer
            </h1>
            <p className="text-xl text-white/80 sm:text-2xl">
              Never forget the moments that matter.
            </p>
          </div>
          
          <p className="mx-auto max-w-xl text-base leading-relaxed text-white/70 lg:mx-0">
            The AI assistant that helps you remember birthdays, anniversaries, favorite things, 
            and all the little details that show you care.
          </p>
          
          <div className="flex flex-col items-center gap-4 sm:flex-row lg:items-start">
            <button
              onClick={scrollToWaitlist}
              className="group relative w-full overflow-hidden rounded-full bg-gradient-to-r from-pink-500 to-purple-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-pink-500/30 transition-all duration-300 hover:scale-105 hover:shadow-pink-500/50 sm:w-auto"
            >
              <span className="relative z-10">Get notified at launch</span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </button>
            <button
              onClick={scrollToHowItWorks}
              className="w-full rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/30 hover:bg-white/10 sm:w-auto"
            >
              See how it works
            </button>
          </div>
        </div>
        
        {/* Right - Chat Interface Mockup */}
        <div className="flex-1">
          <div className="relative mx-auto w-full max-w-sm">
            {/* Glow behind phone */}
            <div className="absolute -inset-2 rounded-[42px] bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-pink-500/10 blur-2xl" />
            {/* Phone frame */}
            <div className="relative rounded-[40px] border border-white/20 bg-gradient-to-b from-[#18192b] to-[#0c0d19] p-4 shadow-2xl backdrop-blur-sm">
              {/* Status bar */}
              <div className="mb-4 flex items-center justify-between px-2 text-xs text-white/60">
                <span>4:32</span>
                <div className="flex items-center gap-1">
                  <div className="h-1 w-1 rounded-full bg-white/60" />
                  <div className="h-1 w-1 rounded-full bg-white/60" />
                  <div className="h-1 w-1 rounded-full bg-white/60" />
                </div>
              </div>
              
              {/* Header */}
              <div className="mb-6 flex items-center justify-center gap-2">
                <span className="text-2xl">💝</span>
                <h2 className="text-lg font-semibold text-white">LoveAI Assistant</h2>
              </div>
              <p className="mb-6 text-center text-sm text-white/60">
                Ask anything about Sarah Mitchell
              </p>
              
              {/* Chat messages */}
              <div className="space-y-3">
                {/* User message - bright pink */}
                <div className="ml-auto max-w-[80%]">
                  <div className="rounded-2xl rounded-tr-sm bg-[#ff80b5] px-4 py-2.5 text-sm font-medium text-[#130915] shadow-sm">
                    What's my partner's favorite brands?
                  </div>
                </div>
                
                {/* AI response - darker purple */}
                <div className="mr-auto max-w-[85%]">
                  <div className="flex items-start gap-2">
                    <span className="text-base">🤖</span>
                    <div className="rounded-2xl rounded-tl-sm bg-[#6b4c93] px-4 py-2.5 text-sm text-white shadow-sm">
                      Your partner's favorite brands are Gucci and Prada.
                    </div>
                  </div>
                </div>
                
                {/* User message */}
                <div className="ml-auto max-w-[80%]">
                  <div className="rounded-2xl rounded-tr-sm bg-[#ff80b5] px-4 py-2.5 text-sm font-medium text-[#130915] shadow-sm">
                    What's her favorite color
                  </div>
                </div>
                
                {/* AI response */}
                <div className="mr-auto max-w-[85%]">
                  <div className="flex items-start gap-2">
                    <span className="text-base">🤖</span>
                    <div className="rounded-2xl rounded-tl-sm bg-[#6b4c93] px-4 py-2.5 text-sm text-white shadow-sm">
                      Sarah's favorite colors are Black, Pink, Dark Green, and Brown.
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Input area */}
              <div className="mt-6 flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 backdrop-blur-sm">
                <input
                  type="text"
                  placeholder="Ask LoveAI anything..."
                  className="flex-1 bg-transparent text-sm text-white placeholder:text-white/40 focus:outline-none"
                  readOnly
                />
                <button className="rounded-full bg-gradient-to-r from-pink-500 to-purple-500 px-4 py-1.5 text-xs font-semibold text-white shadow-sm transition hover:shadow-md">
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

