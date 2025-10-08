import React from 'react';
import { Search, Bell, Plus, User, Users, Calendar, Settings, LogOut, Play, ChevronLeft, ChevronRight } from 'lucide-react';

export default function NetflixCloneStatic() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200">
      <div className="flex h-screen select-none pointer-events-none">
        {/* Sidebar */}
        <aside className="w-64 bg-white rounded-3xl m-4 p-6 shadow-lg hidden lg:block">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-800">Netflix.</h1>
          </div>

          {/* Menu */}
          <div className="mb-8">
            <p className="text-xs text-gray-400 mb-4 uppercase tracking-wider">Menu</p>
            <nav className="space-y-2">
              <div className="flex items-center gap-3 px-4 py-3 bg-red-50 text-red-600 rounded-xl border-l-4 border-red-600">
                <Play className="w-5 h-5" />
                <span className="font-medium">Browse</span>
              </div>
              <div className="flex items-center gap-3 px-4 py-3 text-gray-500 rounded-xl">
                <User className="w-5 h-5" />
                <span>Watchlist</span>
              </div>
              <div className="flex items-center gap-3 px-4 py-3 text-gray-500 rounded-xl">
                <Calendar className="w-5 h-5" />
                <span>Coming soon</span>
              </div>
            </nav>
          </div>

          {/* Social */}
          <div className="mb-8">
            <p className="text-xs text-gray-400 mb-4 uppercase tracking-wider">Social</p>
            <nav className="space-y-2">
              <div className="flex items-center gap-3 px-4 py-3 text-gray-500 rounded-xl">
                <User className="w-5 h-5" />
                <span>Friends</span>
              </div>
              <div className="flex items-center gap-3 px-4 py-3 text-gray-500 rounded-xl">
                <Users className="w-5 h-5" />
                <span>Parties</span>
              </div>
            </nav>
          </div>

          {/* General */}
          <div className="mb-8">
            <p className="text-xs text-gray-400 mb-4 uppercase tracking-wider">General</p>
            <nav className="space-y-2">
              <div className="flex items-center gap-3 px-4 py-3 text-gray-500 rounded-xl">
                <Settings className="w-5 h-5" />
                <span>Settings</span>
              </div>
              <div className="flex items-center gap-3 px-4 py-3 text-gray-500 rounded-xl">
                <LogOut className="w-5 h-5" />
                <span>Log out</span>
              </div>
            </nav>
          </div>

          {/* Challenge Card */}
          <div className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl p-6 text-center">
            <div className="w-16 h-16 bg-white rounded-full mx-auto mb-4 flex items-center justify-center">
              <Users className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="font-bold text-gray-800 mb-1">Popcorn Addict</h3>
            <p className="text-xs text-gray-500 mb-4">4.4m viewing time</p>
            <div className="w-full bg-gray-400 text-white py-3 rounded-xl font-medium">
              View challenges
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-4 lg:p-8">
          {/* Header */}
          <header className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow">
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              </div>
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow hidden lg:flex">
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </div>
            </div>
            {/* Search (estático) */}
            <div className="flex-1 max-w-md mx-4 hidden md:block">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <div className="w-full pl-12 pr-12 py-3 bg-white rounded-full shadow-sm text-gray-400">
                  Search...
                </div>
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                  <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d="M12 14a2 2 0 100-4 2 2 0 000 4z" fill="currentColor"/>
                    <path d="M12 8a2 2 0 100-4 2 2 0 000 4z" fill="currentColor"/>
                    <path d="M12 20a2 2 0 100-4 2 2 0 000 4z" fill="currentColor"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-4">
              <div className="relative">
                <Bell className="w-6 h-6 text-gray-600" />
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </div>
              <div className="relative">
                <svg className="w-6 h-6 text-gray-600" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" stroke="currentColor" strokeWidth="2"/>
                </svg>
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </div>
              <div className="flex items-center gap-3">
                <img src="https://i.pravatar.cc/150?img=47" alt="Profile" className="w-10 h-10 rounded-full" />
                <div className="hidden lg:block">
                  <p className="font-semibold text-gray-800">Ramona F.</p>
                  <p className="text-xs text-gray-500">Level 12</p>
                </div>
              </div>
            </div>
          </header>

          {/* Hero Section - The Witcher */}
          <div className="relative mb-8 rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="/banner.webp" 
              alt="The Witcher" 
              className="w-full h-64 md:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent">
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm font-medium">10XP / episode</span>
                <div className="flex items-center gap-1">
                  <div className="flex -space-x-2">
                    <img src="https://i.pravatar.cc/40?img=1" alt="" className="w-6 h-6 rounded-full border-2 border-white" />
                    <img src="https://i.pravatar.cc/40?img=2" alt="" className="w-6 h-6 rounded-full border-2 border-white" />
                    <img src="https://i.pravatar.cc/40?img=3" alt="" className="w-6 h-6 rounded-full border-2 border-white" />
                  </div>
                  <span className="text-white text-sm ml-2">+5 friends are watching</span>
                </div>
              </div>
              <div className="absolute bottom-8 left-8">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">The Witcher</h2>
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-white font-semibold">95% Match</span>
                  <span className="text-white">2 seasons</span>
                </div>
                <div className="flex gap-3">
                  <div className="bg-gradient-to-r from-red-600 to-red-500 text-white px-8 py-3 rounded-xl font-semibold shadow-lg flex items-center gap-2">
                    Watch
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm text-white w-12 h-12 rounded-xl flex items-center justify-center">
                    <Plus className="w-6 h-6" />
                  </div>
                </div>
              </div>
              <div className="absolute bottom-8 right-8 flex gap-2">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl"></div>
                <div className="w-16 h-12 bg-gradient-to-r from-orange-500 to-orange-400 rounded-xl"></div>
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl"></div>
              </div>
            </div>
          </div>

          {/* Parties Section */}
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-6">
              <h3 className="text-2xl font-bold text-gray-800">Parties</h3>
              <div className="flex items-center gap-2">
                <div className="w-32 h-1 bg-gray-300 rounded-full overflow-hidden">
                  <div className="w-12 h-full bg-gradient-to-r from-blue-400 to-blue-500 rounded-full"></div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {/* Party Card 1 */}
              <div className="bg-white rounded-2xl p-4 shadow-sm">
                <div className="flex justify-center mb-3">
                  <div className="relative">
                    <img src="https://i.pravatar.cc/80?img=10" alt="" className="w-16 h-16 rounded-full" />
                  </div>
                </div>
                <h4 className="font-semibold text-gray-800 text-sm mb-1 text-center">Cadaver</h4>
                <p className="text-xs text-gray-500 text-center">Horror marathon</p>
              </div>

              {/* Party Card 2 */}
              <div className="bg-white rounded-2xl p-4 shadow-sm">
                <div className="flex justify-center mb-3">
                  <div className="flex -space-x-3">
                    <img src="https://i.pravatar.cc/40?img=11" alt="" className="w-10 h-10 rounded-full border-2 border-white" />
                    <img src="https://i.pravatar.cc/40?img=12" alt="" className="w-10 h-10 rounded-full border-2 border-white" />
                    <img src="https://i.pravatar.cc/40?img=13" alt="" className="w-10 h-10 rounded-full border-2 border-white" />
                  </div>
                </div>
                <h4 className="font-semibold text-gray-800 text-sm mb-1 text-center invisible">Placeholder</h4>
                <p className="text-xs text-gray-500 text-center invisible">Placeholder</p>
              </div>

              {/* Party Card 3 */}
              <div className="bg-gradient-to-br from-orange-400 to-orange-500 rounded-2xl p-4 shadow-sm">
                <div className="flex justify-center mb-3">
                  <div className="w-16 h-16 bg-orange-600 rounded-full"></div>
                </div>
                <h4 className="font-semibold text-white text-sm mb-1 text-center">Bladerunner 2049</h4>
                <p className="text-xs text-orange-100 text-center">Sci fi binge</p>
              </div>

              {/* Party Card 4 */}
              <div className="bg-white rounded-2xl p-4 shadow-sm">
                <div className="flex justify-center mb-3">
                  <div className="flex -space-x-3">
                    <img src="https://i.pravatar.cc/40?img=20" alt="" className="w-10 h-10 rounded-full border-2 border-white" />
                    <img src="https://i.pravatar.cc/40?img=21" alt="" className="w-10 h-10 rounded-full border-2 border-white" />
                    <img src="https://i.pravatar.cc/40?img=22" alt="" className="w-10 h-10 rounded-full border-2 border-white" />
                  </div>
                </div>
                <h4 className="font-semibold text-gray-800 text-sm mb-1 text-center">Monsters Inc.</h4>
                <p className="text-xs text-gray-500 text-center">Don't make me grieve up</p>
              </div>
            </div>
          </div>

          {/* Continue Watching Section */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Continue watching</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Movie Card 1 */}
              <div>
                <div className="relative rounded-2xl overflow-hidden shadow-lg mb-3">
                  <img 
                    src="https://images.unsplash.com/photo-1510227272981-87123e259b17?w=400&h=300&fit=crop" 
                    alt="Haunting of Hill House" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm px-2 py-1 rounded text-white text-xs font-semibold">
                    10XP
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-100">
                    <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                      <Play className="w-12 h-12 text-white" />
                    </div>
                  </div>
                </div>
                <h4 className="font-semibold text-gray-800">Haunting of Hill House</h4>
              </div>

              {/* Movie Card 2 */}
              <div>
                <div className="relative rounded-2xl overflow-hidden shadow-lg mb-3">
                  <img 
                    src="https://images.unsplash.com/photo-1534447677768-be436bb09401?w=400&h=300&fit=crop" 
                    alt="Ratched" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm px-2 py-1 rounded text-white text-xs font-semibold">
                    10XP
                  </div>
                </div>
                <h4 className="font-semibold text-gray-800">Ratched</h4>
              </div>

              {/* Movie Card 3 */}
              <div>
                <div className="relative rounded-2xl overflow-hidden shadow-lg mb-3">
                  <img 
                    src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&h=300&fit=crop" 
                    alt="El Camino" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm px-2 py-1 rounded text-white text-xs font-semibold">
                    10XP
                  </div>
                </div>
                <h4 className="font-semibold text-gray-800">El Camino</h4>
              </div>

              {/* Movie Card 4 */}
              <div>
                <div className="relative rounded-2xl overflow-hidden shadow-lg mb-3">
                  <img 
                    src="https://images.unsplash.com/photo-1594908900066-3f47337549d8?w=400&h=300&fit=crop" 
                    alt="Stranger Things" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm px-2 py-1 rounded text-white text-xs font-semibold">
                    10XP
                  </div>
                </div>
                <h4 className="font-semibold text-gray-800">Stranger Things</h4>
              </div>
            </div>
          </div>
        </main>

        {/* Right Sidebar - Friends */}
        <aside className="w-20 bg-white rounded-3xl m-4 p-4 shadow-lg hidden xl:flex flex-col items-center gap-4">
          <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center text-white shadow-lg">
            <Plus className="w-6 h-6" />
          </div>
          <div className="w-full h-px bg-gray-200 my-2"></div>
          {[50, 51, 52, 53, 54, 55, 56, 57].map((num) => (
            <div key={num} className="relative">
              <img 
                src={`https://i.pravatar.cc/50?img=${num}`} 
                alt="" 
                className="w-12 h-12 rounded-full"
              />
              <span className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
            </div>
          ))}
        </aside>
      </div>
    </div>
  );
}