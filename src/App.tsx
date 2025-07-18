import React, { useState, useEffect } from 'react';
import { Terminal, Zap, Shield, Cpu, Download, Star, ArrowRight, Users, PlayCircle, MessageSquare, Sparkles, Code, Database, Cloud } from 'lucide-react';
import { SudosuLogo } from './components/SudosuLogo';
import { FabIcon } from './components/FabIcon';

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [terminalStep, setTerminalStep] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    // Animate terminal demo with smoother transitions
    const interval = setInterval(() => {
      setTerminalStep(prev => (prev + 1) % 5);
    }, 4000);
    
    return () => clearInterval(interval);
  }, []);

  const terminalExamples = [
    {
      command: "sudosu setup a new microservice with docker and postgres",
      aiResponse: "I'll help you create a complete microservice setup with Docker containerization and PostgreSQL database. Let me analyze your requirements...",
      executing: false,
      terminalOutput: []
    },
    {
      command: "sudosu setup a new microservice with docker and postgres",
      aiResponse: "✓ Project structure analyzed\n✓ Docker configuration ready\n✓ PostgreSQL setup prepared\n✓ Environment variables configured\n\nExecuting setup...",
      executing: true,
      terminalOutput: [
        "🔍 Creating project structure...",
        "📦 Generating Dockerfile...",
        "🐘 Setting up PostgreSQL container...",
        "⚙️ Configuring environment..."
      ]
    },
    {
      command: "sudosu setup a new microservice with docker and postgres",
      aiResponse: "✅ Microservice setup complete!\n\n📁 Project structure created\n🐳 Docker containers running\n🗄️ PostgreSQL database ready\n🔗 API endpoints configured\n\nYour service is running on http://localhost:3000",
      executing: false,
      terminalOutput: [
        "✅ Dockerfile created successfully",
        "✅ docker-compose.yml configured",
        "✅ PostgreSQL container started",
        "✅ Database migrations applied",
        "✅ API server running on port 3000"
      ]
    },
    {
      command: "sudosu optimize my python ml pipeline for production",
      aiResponse: "I'll analyze your ML pipeline and optimize it for production deployment. Let me check your current setup and suggest improvements...",
      executing: false,
      terminalOutput: []
    },
    {
      command: "sudosu optimize my python ml pipeline for production",
      aiResponse: "✓ Pipeline analyzed\n✓ Performance bottlenecks identified\n✓ Optimization strategies ready\n✓ Production config generated\n\nApplying optimizations...",
      executing: true,
      terminalOutput: [
        "🔍 Analyzing model performance...",
        "⚡ Optimizing data preprocessing...",
        "🚀 Setting up model caching...",
        "📊 Configuring monitoring..."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-gradient-to-br from-black via-gray-900/50 to-emerald-950/30"></div>
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-400/10 via-transparent to-transparent"></div>
      
      {/* Navigation */}
      <nav className="relative z-50 p-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-5">
            <SudosuLogo className="h-12" />
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="hover:text-emerald-400 transition-colors">Features</a>
            <a href="#how-it-works" className="hover:text-emerald-400 transition-colors">How it Works</a>
            {/* <a href="#pricing" className="hover:text-emerald-400 transition-colors">Pricing</a> */}
            <button className="group inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 px-6 py-2 rounded-lg transition-all duration-200 transform hover:scale-105 text-black font-semibold"
                    onClick={() => window.open('https://tally.so/r/npY4GP', '_blank')}>
              <span>Request Early Access</span>
              <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
            </button>
            
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-40 pt-20 pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                The Ultimate AI Co-Pilot
                <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent block">
                  for your Terminal
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Execute complex workflows with natural language. SUDOSU understands your intent, 
                creates execution plans, and runs commands safely with AI assistance.
              </p>
            </div>
            
            <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <button className="group bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-200 transform hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/25 flex items-center space-x-2 text-black"
                        onClick={() => window.open('https://tally.so/r/npY4GP', '_blank')}>
                  {/* <Download className="w-5 h-5" /> */}
                  <span>Request Early Access</span>
                  {/* <span>Download for Mac</span> */}
                  <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                </button>
                {/* <button className="px-8 py-4 rounded-xl text-lg font-semibold border border-gray-700 hover:border-emerald-400 transition-all duration-200 transform hover:scale-105 backdrop-blur-sm bg-gray-900/30 flex items-center space-x-2">
                  <PlayCircle className="w-5 h-5" />
                  <span>Watch Demo</span>
                </button> */}
              </div>
              
              <div className="flex items-center justify-center space-x-6 text-gray-400">
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span>4.9/5 on App Store</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5" />
                  <span>10k+ developers</span>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Terminal Demo with Chat Panel */}
          <div className={`mt-20 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="relative max-w-6xl mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-2xl blur-xl"></div>
              <div className="relative backdrop-blur-xl bg-gray-900/60 border border-gray-700/50 rounded-2xl shadow-2xl overflow-hidden">
                
                {/* Terminal Header */}
                <div className="flex items-center justify-between p-4 border-b border-gray-700/50">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-gray-400 ml-4">SUDOSU Terminal</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-400">
                    <Sparkles className="w-4 h-4" />
                    <span className="text-sm">AI Assistant Active</span>
                  </div>
                </div>

                <div className="flex h-96">
                  {/* Terminal Panel */}
                  <div className="flex-1 p-6 font-mono text-sm">
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <span className="text-emerald-400">➜</span>
                        <span className="text-cyan-400">~/projects</span>
                        <span className="text-gray-300">git:(main)</span>
                      </div>
                      
                      {terminalStep >= 0 && (
                        <div className="flex items-center space-x-2 transition-all duration-500 ease-in-out">
                          <span className="text-emerald-400">$</span>
                          <span className="text-white">{terminalExamples[terminalStep].command}</span>
                          {terminalStep === 0 && <span className="animate-pulse">|</span>}
                        </div>
                      )}

                      {terminalStep >= 1 && terminalExamples[terminalStep].terminalOutput.length > 0 && (
                        <div className="text-emerald-300 ml-4 space-y-1 transition-all duration-700 ease-in-out">
                          {terminalExamples[terminalStep].terminalOutput.map((line, index) => (
                            <div 
                              key={index} 
                              className="opacity-0 animate-[fadeInUp_0.5s_ease-out_forwards]"
                              style={{ animationDelay: `${index * 0.3}s` }}
                            >
                              {line}
                            </div>
                          ))}
                        </div>
                      )}

                      {terminalExamples[terminalStep].executing && (
                        <div className="text-cyan-300 ml-4 space-y-1 transition-all duration-500 ease-in-out">
                          {terminalExamples[terminalStep].executing && (
                            <div className="flex items-center space-x-2">
                              <div className="animate-spin w-4 h-4 border-2 border-emerald-400 border-t-transparent rounded-full"></div>
                              <span>Processing...</span>
                            </div>
                          )}
                        </div>
                      )}

                      {(terminalStep === 3 || terminalStep === 0) && !terminalExamples[terminalStep].executing && (
                        <div className="flex items-center space-x-2 transition-all duration-500 ease-in-out">
                          <span className="text-emerald-400">$</span>
                          <span className="animate-pulse">|</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* AI Chat Panel */}
                  <div className="w-80 border-l border-gray-700/50 bg-gray-900/40 backdrop-blur-sm">
                    <div className="p-4 border-b border-gray-700/50">
                      <div className="flex items-center space-x-2">
                        <MessageSquare className="w-5 h-5 text-emerald-400" />
                        <span className="font-semibold">Sudosu AI</span>
                      </div>
                    </div>
                    
                    <div className="p-4 h-full overflow-y-auto">
                      <div className="space-y-4">
                        <div className="flex items-start space-x-3 transition-all duration-700 ease-in-out">
                          <div className="w-8 h-8 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-black text-sm">😊</span>
                          </div>
                          <div className="bg-gray-800/60 rounded-lg p-3 text-sm leading-relaxed">
                            {terminalExamples[terminalStep].aiResponse}
                          </div>
                        </div>
                        
                        {(terminalStep === 2 || terminalStep === 4) && (
                          <div className="flex items-start space-x-3 transition-all duration-500 ease-in-out opacity-0 animate-[fadeInUp_0.5s_ease-out_0.5s_forwards]">
                            <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center flex-shrink-0">
                              <span className="text-white text-xs">You</span>
                            </div>
                            <div className="bg-emerald-900/30 border border-emerald-700/50 rounded-lg p-3 text-sm">
                              {terminalStep === 2 ? "Can you also add API documentation?" : "How can I monitor the model performance?"}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative z-40 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Intelligent Terminal
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent block">
                Built for Modern Developers
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the next generation of command line interfaces with AI-powered automation and intuitive workflows.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <MessageSquare className="w-8 h-8" />,
                title: "Natural Language Commands",
                description: "Describe what you want to accomplish in plain English. SUDOSU translates your intent into precise terminal commands."
              },
              {
                icon: <Sparkles className="w-8 h-8" />,
                title: "Sudosu AI Assistant",
                description: "Get real-time guidance, explanations, and suggestions through an integrated chat interface that understands your workflow."
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Safe Execution",
                description: "Built-in safety checks and confirmation prompts ensure your system remains secure during automated command execution."
              },
              {
                icon: <Code className="w-8 h-8" />,
                title: "Context Awareness",
                description: "Understands your project structure, git status, dependencies, and environment to make intelligent decisions."
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Smart Automation",
                description: "Automate complex multi-step workflows with a single command. From Docker setup to ML pipelines, SUDOSU handles it all."
              },
              {
                icon: <Cpu className="w-8 h-8" />,
                title: "Native Mac Experience",
                description: "Designed specifically for macOS with native performance, beautiful UI, and seamless system integration."
              }
            ].map((feature, index) => (
              <div key={index} className="group">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                  <div className="relative backdrop-blur-xl bg-gray-900/30 border border-gray-700/50 rounded-2xl p-8 h-full hover:border-emerald-500/50 transition-all duration-300 transform group-hover:scale-105">
                    <div className="text-emerald-400 mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="relative z-40 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Three Steps to
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent block">
                Terminal Mastery
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                step: "01", 
                title: "Describe Your Goal", 
                content: "Simply tell SUDOSU what you want to accomplish in natural language. No need to remember complex command syntax.",
                example: '"Set up a new microservice with Docker"'
              },
              { 
                step: "02", 
                title: "Review the Plan", 
                content: "AI generates a step-by-step execution plan tailored to your project. Review and approve before execution.",
                example: "Create → Configure → Build → Deploy"
              },
              { 
                step: "03", 
                title: "Execute & Monitor", 
                content: "Watch as SUDOSU safely executes each step with real-time feedback and smart error handling.",
                example: "✅ Service running successfully!"
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto text-2xl font-bold text-black">
                    {item.step}
                  </div>
                  {index < 2 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-emerald-500/50 to-transparent transform -translate-y-0.5"></div>
                  )}
                </div>
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <p className="text-gray-300 mb-4">{item.content}</p>
                <div className="text-emerald-400 font-mono text-sm bg-gray-900/40 rounded-lg p-2 border border-gray-700/50">
                  {item.example}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="relative z-40 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Trusted by Developers Worldwide
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "SUDOSU has completely transformed how I work with the terminal. What used to take me 10 commands now takes just one natural language request.",
                author: "Sarah Chen",
                role: "Senior Frontend Developer",
                company: "Stripe"
              },
              {
                quote: "The AI assistant is incredibly smart. It understands context and suggests the exact commands I need. It's like having a senior developer pair programming with me.",
                author: "Marcus Rodriguez",
                role: "DevOps Engineer",
                company: "Vercel"
              },
              {
                quote: "Finally, a terminal that speaks human. SUDOSU makes complex deployments feel effortless. The safety features give me confidence to automate more.",
                author: "Emily Watson",
                role: "Full Stack Developer",
                company: "GitHub"
              }
            ].map((testimonial, index) => (
              <div key={index} className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-cyan-500/5 rounded-2xl blur-xl"></div>
                <div className="relative backdrop-blur-xl bg-gray-900/30 border border-gray-700/50 rounded-2xl p-8">
                  <div className="text-gray-300 mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full flex items-center justify-center text-black font-bold">
                      {testimonial.author.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="font-semibold">{testimonial.author}</div>
                      <div className="text-gray-400 text-sm">{testimonial.role} at {testimonial.company}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-40 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-3xl blur-xl"></div>
            <div className="relative backdrop-blur-xl bg-gray-900/40 border border-gray-700/50 rounded-3xl p-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Transform
                <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent block">
                  Your Terminal Experience?
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join thousands of developers who have already revolutionized their command line workflow with SUDOSU.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {/* <button className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-200 transform hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/25 text-black">
                  Download for Mac
                </button> */}
                <button className="px-8 py-4 rounded-xl text-lg font-semibold border border-gray-700 hover:border-emerald-400 transition-all duration-200 transform hover:scale-105 backdrop-blur-sm bg-gray-900/30"
                        onClick={() => window.open('https://tally.so/r/npY4GP', '_blank')}>
                  Request Early Access
                </button>
              </div>
              <div className="mt-6 text-gray-400 text-sm">
                Free 14-day trial • No credit card required • macOS 12.0+
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-40 py-12 px-6 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <SudosuLogo className="h-10" />
            </div>
            <div className="flex space-x-6 text-gray-400">
              <a href="#" className="hover:text-emerald-400 transition-colors">Privacy</a>
              <a href="#" className="hover:text-emerald-400 transition-colors">Terms</a>
              <a href="#" className="hover:text-emerald-400 transition-colors">Support</a>
              <a href="#" className="hover:text-emerald-400 transition-colors">Documentation</a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2025 SUDOSU. All rights reserved. Built with ❤️ for developers.</p>
          </div>
        </div>
      </footer>
      <div className="fixed bottom-8 right-8">
        <button className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 p-4 rounded-full shadow-lg transform hover:scale-110 transition-all duration-200">
          <FabIcon className="w-8 h-8" />
        </button>
      </div>
    </div>
  );
}

export default App;