import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Home, 
  Search, 
  Flame, 
  User, 
  Library, 
  Bell, 
  Play, 
  Heart, 
  X, 
  Share2, 
  ChevronLeft, 
  MessageCircle, 
  Menu,
  Settings,
  Star,
  Info,
  ExternalLink,
  ChevronRight,
  TrendingUp,
  Award
} from 'lucide-react';
import { MOVIES, CAST, ROOMS, MESSAGES } from './data';
import { Movie, Room } from './types';

// Tab Definitions
type Tab = 'home' | 'match' | 'search' | 'lists' | 'profile';

export default function CinephileApp() {
  const [activeTab, setActiveTab] = useState<Tab>('home');
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [activeRoom, setActiveRoom] = useState<Room | null>(null);

  const renderTab = () => {
    switch (activeTab) {
      case 'home': return <HomeScreen onSelectMovie={setSelectedMovie} />;
      case 'match': return <MatchScreen />;
      case 'search': return <SearchScreen onSelectMovie={setSelectedMovie} />;
      case 'lists': return <ListsScreen onSelectMovie={setSelectedMovie} />;
      case 'profile': return <ProfileScreen />;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-surface flex flex-col font-sans overflow-x-hidden">
      {/* Top Header */}
      {!selectedMovie && !activeRoom && (
        <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-xl border-b border-white/10 h-16 flex items-center justify-between px-6 shadow-2xl">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full overflow-hidden border border-white/20">
              <img src={CAST[0].image} alt="User Avatar" className="w-full h-full object-cover" />
            </div>
            <span className="font-display font-black text-xl text-primary-container tracking-tighter uppercase">CINEPHILE</span>
          </div>
          <div className="flex items-center gap-5">
            <button className="text-white/70 hover:text-primary-container transition-colors"><Search size={22} /></button>
            <button className="text-white/70 hover:text-primary-container transition-colors"><Bell size={22} /></button>
          </div>
        </header>
      )}

      {/* Main Content */}
      <main className={`flex-1 ${!selectedMovie && !activeRoom ? 'pt-16 pb-24' : ''}`}>
        <AnimatePresence mode="wait">
          {!selectedMovie && !activeRoom ? (
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="w-full"
            >
              {renderTab()}
            </motion.div>
          ) : null}
        </AnimatePresence>

        {selectedMovie && (
          <MovieDetailScreen movie={selectedMovie} onBack={() => setSelectedMovie(null)} />
        )}

        {activeRoom && (
          <LiveRoomScreen room={activeRoom} onBack={() => setActiveRoom(null)} />
        )}
      </main>

      {/* Bottom Nav */}
      {!selectedMovie && !activeRoom && (
        <nav className="fixed bottom-0 w-full z-50 bg-black/80 backdrop-blur-xl border-t border-white/10 h-20 flex justify-around items-center px-4 pb-safe shadow-[0_-10px_40px_rgba(0,0,0,0.8)]">
          <NavButton active={activeTab === 'home'} icon={<Home />} label="Inicio" onClick={() => setActiveTab('home')} />
          <NavButton active={activeTab === 'match'} icon={<Flame />} label="Match" onClick={() => setActiveTab('match')} />
          <NavButton active={activeTab === 'search'} icon={<Search />} label="Buscar" onClick={() => setActiveTab('search')} />
          <NavButton active={activeTab === 'lists'} icon={<Library />} label="Listas" onClick={() => setActiveTab('lists')} />
          <NavButton active={activeTab === 'profile'} icon={<User />} label="Perfil" onClick={() => setActiveTab('profile')} />
        </nav>
      )}
    </div>
  );
}

function NavButton({ active, icon, label, onClick }: { active: boolean, icon: React.ReactNode, label: string, onClick: () => void }) {
  return (
    <button onClick={onClick} className={`flex flex-col items-center gap-1.5 transition-all ${active ? 'text-primary-container' : 'text-white/40'}`}>
      <span className={`${active ? 'drop-shadow-[0_0_8px_rgba(229,9,20,0.6)]' : ''}`}>{icon}</span>
      <span className="text-[10px] uppercase font-bold tracking-widest">{label}</span>
    </button>
  );
}

// --- SCREENS ---

function HomeScreen({ onSelectMovie }: { onSelectMovie: (m: Movie) => void }) {
  return (
    <div className="space-y-10 py-6">
      {/* Mood Picker */}
      <section className="px-6">
        <h2 className="font-display font-semibold text-2xl mb-6">¿Cómo estás hoy?</h2>
        <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-2">
          {['🍿 Casual', '😭 Triste', '😱 Manija', '🧠 Smart', '🔥 Acción'].map((mood, i) => (
            <button key={i} className={`flex-shrink-0 w-24 h-28 glass-card rounded-2xl flex flex-col items-center justify-center gap-3 hover:border-primary-container transition-all group ${i === 2 ? 'border-2 border-primary-container/50 bg-primary-container/10' : ''}`}>
              <span className="text-3xl group-hover:scale-110 transition-transform">{mood.split(' ')[0]}</span>
              <span className={`text-[11px] font-bold uppercase tracking-wider ${i === 2 ? 'text-primary-container' : 'text-white/40'}`}>{mood.split(' ')[1]}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Roulette */}
      <section className="px-6">
        <div className="relative w-full h-56 rounded-3xl overflow-hidden roulette-gradient shadow-2xl flex items-center justify-between px-8 border border-white/10 group cursor-pointer active:scale-[0.98] transition-transform">
          <div className="z-10 max-w-[65%]">
            <h3 className="font-display font-black text-3xl text-white mb-2 leading-tight">Ruleta Cinéfila</h3>
            <p className="text-white/70 text-sm mb-6">¿No sabés qué mirar? Dejá que el destino elija por vos.</p>
            <button className="bg-white text-black px-6 py-2.5 rounded-full font-black text-sm uppercase tracking-tighter flex items-center gap-2">
              <TrendingUp size={18} /> GIRAR AHORA
            </button>
          </div>
          <div className="opacity-20 translate-x-4">
             <Library size={120} className="text-white" />
          </div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_black_100%)] opacity-30"></div>
        </div>
      </section>

      {/* Trending Feed */}
      <section className="px-6">
        <div className="flex justify-between items-end mb-6">
          <div>
            <span className="text-primary-container text-[10px] font-bold uppercase tracking-[0.2em]">Watchlist Global</span>
            <h2 className="font-display font-bold text-3xl">Tendencias</h2>
          </div>
          <button className="text-white/40 text-xs font-bold uppercase tracking-widest hover:text-white transition-colors">Ver Todo</button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10">
          {MOVIES.map(movie => (
            <div key={movie.id} onClick={() => onSelectMovie(movie)} className="group cursor-pointer">
              <div className="relative aspect-[2/3] rounded-2xl overflow-hidden shadow-2xl border border-white/5 mb-3">
                <img src={movie.image} alt={movie.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-3 right-3 bg-secondary px-2 py-1 rounded-lg text-black font-black text-[10px]">
                  {movie.rating}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4 gap-2">
                  <button className="w-full bg-primary-container text-white py-2 rounded-xl font-bold text-xs">REGISTRO RÁPIDO</button>
                  <button className="w-full bg-white/10 backdrop-blur-md border border-white/10 text-white py-2 rounded-xl font-bold text-xs">LISTA</button>
                </div>
              </div>
              <h4 className="font-bold text-sm truncate">{movie.title}</h4>
              <p className="text-[10px] text-white/40 uppercase tracking-widest mt-1">{movie.genre[0]} • {movie.year}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function MatchScreen() {
  return (
    <div className="relative h-[calc(100vh-144px)] flex flex-col items-center justify-center px-6">
      <div className="absolute top-6 w-full px-10 z-10">
        <div className="flex justify-between items-center mb-3">
          <span className="text-white/40 text-[10px] font-bold uppercase tracking-widest">Entrenando Algoritmo</span>
          <span className="text-primary-container text-[11px] font-black">72%</span>
        </div>
        <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
          <motion.div initial={{ width: 0 }} animate={{ width: '72%' }} className="h-full bg-primary-container shadow-[0_0_12px_rgba(229,9,20,0.6)]" />
        </div>
      </div>

      <div className="relative w-full max-w-sm aspect-[3/4.5] perspective-1000">
        <motion.div 
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          className="w-full h-full rounded-3xl overflow-hidden border border-white/20 shadow-2xl relative group bg-surface-container"
        >
          <img src={MOVIES[2].image} alt="Match" className="w-full h-full object-cover grayscale-[0.2]" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent p-8 flex flex-col justify-end">
            <div className="flex gap-2 mb-4">
              {MOVIES[2].vibes.map(v => (
                <span key={v} className="px-3 py-1 bg-black/60 backdrop-blur-md rounded-full text-[10px] font-bold border border-white/10 text-secondary">{v}</span>
              ))}
            </div>
            <h2 className="font-display font-black text-4xl text-white mb-2">NEON DRIFTER</h2>
            <div className="flex items-center gap-3">
              <span className="text-white/60 font-bold">2024</span>
              <span className="w-1.5 h-1.5 rounded-full bg-primary-container" />
              <span className="text-secondary font-black">8.8 Rating</span>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="mt-10 flex items-center gap-8">
        <button className="w-16 h-16 rounded-full bg-surface-container-high border border-white/10 flex items-center justify-center text-white/40 hover:text-white transition-all active:scale-90"><X size={32} /></button>
        <button className="w-20 h-20 rounded-full bg-primary-container flex items-center justify-center text-white shadow-[0_0_30px_rgba(229,9,20,0.4)] active:scale-90 transition-all"><Heart size={38} fill="white" /></button>
        <button className="w-16 h-16 rounded-full bg-surface-container-high border border-white/10 flex items-center justify-center text-white/40 hover:text-white transition-all active:scale-90"><Share2 size={24} /></button>
      </div>
    </div>
  );
}

function SearchScreen({ onSelectMovie }: { onSelectMovie: (m: Movie) => void }) {
  return (
    <div className="p-6 space-y-10">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={20} />
        <input 
          type="text" 
          placeholder="Buscar pelis, directores..." 
          className="w-full bg-surface-container-low h-14 rounded-2xl pl-12 pr-4 border border-white/10 focus:outline-none focus:border-primary-container/50 transition-colors"
        />
      </div>

      <section className="space-y-4">
        <h3 className="font-display font-bold text-xl">Streaming</h3>
        <div className="grid grid-cols-4 gap-4">
          {['Netflix', 'HBO', 'Disney+', 'Prime'].map((s, i) => (
            <div key={i} className="aspect-square bg-surface-container-high rounded-2xl flex items-center justify-center border border-white/5 hover:border-primary-container transition-all cursor-pointer">
              <Play size={24} className="text-primary-container" />
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-display font-bold text-xl">Populares</h3>
        <div className="space-y-4">
          {MOVIES.map(movie => (
            <div key={movie.id} onClick={() => onSelectMovie(movie)} className="flex items-center gap-4 group cursor-pointer">
              <div className="w-16 h-24 rounded-lg overflow-hidden border border-white/10">
                <img src={movie.image} alt={movie.title} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-base group-hover:text-primary-container transition-colors">{movie.title}</h4>
                <p className="text-xs text-white/40 mt-1">{movie.year} • {movie.genre.join(', ')}</p>
                <div className="flex items-center gap-1 mt-2">
                  <Star size={12} className="text-secondary" fill="currentColor" />
                  <span className="text-xs font-black text-secondary">{movie.rating}</span>
                </div>
              </div>
              <ChevronRight className="text-white/20" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function ListsScreen({ onSelectMovie }: { onSelectMovie: (m: Movie) => void }) {
  return (
    <div className="p-6 space-y-10">
      <div className="flex justify-between items-end">
        <h2 className="font-display font-black text-3xl">Mis Listas</h2>
        <button className="w-10 h-10 rounded-xl bg-primary-container flex items-center justify-center text-white"><Settings size={20} /></button>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {['Para ver después', 'Favoritas', 'Joyas ocultas'].map((list, i) => (
          <div key={i} className="relative aspect-[16/7] rounded-3xl overflow-hidden group cursor-pointer shadow-2xl">
            <img src={MOVIES[i % MOVIES.length].backdrop} alt={list} className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent p-6 flex flex-col justify-end">
              <h3 className="font-display font-bold text-2xl">{list}</h3>
              <p className="text-xs text-white/60 mt-1">{12 + i * 4} películas</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProfileScreen() {
  return (
    <div className="flex flex-col items-center py-10 px-6">
      <div className="relative mb-6">
        <div className="w-32 h-32 rounded-full border-2 border-primary-container/30 p-1">
          <img src={CAST[0].image} alt="Profile" className="w-full h-full rounded-full object-cover" />
        </div>
        <div className="absolute -bottom-1 -right-1 bg-primary-container p-2 rounded-full border-4 border-surface">
           <Award size={16} className="text-white" />
        </div>
      </div>
      
      <h2 className="font-display font-black text-3xl mb-1">Santiago Castro</h2>
      <p className="text-white/40 text-sm mb-8">Amante del cine y los thrillers. BA, ARG.</p>

      <div className="w-full grid grid-cols-3 gap-4 mb-10">
        <div className="text-center">
          <span className="block font-display font-black text-xl text-primary-container">428</span>
          <span className="text-[10px] text-white/30 uppercase font-black tracking-widest">Vistas</span>
        </div>
        <div className="text-center border-x border-white/10">
          <span className="block font-display font-black text-xl text-primary-container">84</span>
          <span className="text-[10px] text-white/30 uppercase font-black tracking-widest">Reseñas</span>
        </div>
        <div className="text-center">
          <span className="block font-display font-black text-xl text-primary-container">1.2k</span>
          <span className="text-[10px] text-white/30 uppercase font-black tracking-widest">Seguidores</span>
        </div>
      </div>

      <div className="w-full space-y-4">
        <button className="w-full bg-primary-container text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-3 active:scale-95 transition-transform">
          <Settings size={20} /> EDITAR PERFIL
        </button>
        <button className="w-full bg-surface-container border border-white/10 text-white/70 py-4 rounded-2xl font-bold active:scale-95 transition-transform">
          CONFIGURACIÓN
        </button>
      </div>

      <div className="w-full mt-12 bg-primary-container/10 border border-primary-container/20 rounded-3xl p-6 relative overflow-hidden">
        <div className="relative z-10">
          <h3 className="font-bold text-lg mb-2">Miembro Pro</h3>
          <p className="text-sm text-white/60 mb-6">Desbloqueá estadísticas avanzadas y posters personalizados.</p>
          <button className="text-primary-container font-black text-sm uppercase tracking-widest border-b border-primary-container/50 pb-1">Upgrade</button>
        </div>
        <Award className="absolute -bottom-4 -right-4 text-primary-container/10 -rotate-12" size={140} />
      </div>
    </div>
  );
}

function MovieDetailScreen({ movie, onBack }: { movie: Movie, onBack: () => void }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      className="fixed inset-0 z-50 bg-surface overflow-y-auto"
    >
      <div className="relative h-[50vh] overflow-hidden">
        <motion.img 
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          src={movie.backdrop} 
          className="w-full h-full object-cover opacity-50" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent" />
        
        <div className="absolute top-0 w-full h-16 flex items-center justify-between px-6">
          <button onClick={onBack} className="w-10 h-10 bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/10"><ChevronLeft size={24} /></button>
          <div className="flex gap-4">
             <button className="w-10 h-10 bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/10"><Share2 size={20} /></button>
             <button className="w-10 h-10 bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/10"><Heart size={20} /></button>
          </div>
        </div>

        <div className="absolute bottom-6 w-full px-6 flex items-end gap-6">
          <div className="w-28 md:w-40 aspect-[2/3] rounded-xl overflow-hidden border border-white/20 shadow-2xl flex-shrink-0">
             <img src={movie.image} className="w-full h-full object-cover" />
          </div>
          <div className="flex-1 pb-2">
            <h1 className="font-display font-black text-3xl md:text-5xl leading-none text-white mb-3">{movie.title.toUpperCase()}</h1>
            <div className="flex flex-wrap gap-2">
              {movie.genre.map(g => (
                <span key={g} className="px-3 py-1 bg-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest text-white/70">{g}</span>
              ))}
              <span className="px-3 py-1 bg-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest text-white/70">{movie.duration}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-12 pb-32 max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 items-center bg-surface-container/50 backdrop-blur-md p-8 rounded-3xl border border-white/10">
          <div className="relative w-32 h-32 flex items-center justify-center">
             <svg className="w-full h-full -rotate-90">
                <circle cx="64" cy="64" r="58" className="fill-transparent stroke-white/10 stroke-[8px]" />
                <circle cx="64" cy="64" r="58" className="fill-transparent stroke-secondary stroke-[8px] drop-shadow-[0_0_8px_rgba(74,225,118,0.5)]" strokeDasharray="364.4" strokeDashoffset={364.4 - (364.4 * (movie.score / 10))} />
             </svg>
             <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="font-display font-bold text-3xl text-white">{movie.score}</span>
                <span className="text-[8px] font-bold text-white/30 uppercase tracking-[0.2em]">Cine Rating</span>
             </div>
          </div>
          <div className="flex-1 space-y-4 text-center md:text-left">
            <h3 className="font-display font-bold text-xl">La onda</h3>
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              {movie.vibes.map(v => (
                <span key={v} className="px-4 py-2 bg-surface-container-highest/50 rounded-xl text-secondary text-xs font-bold border border-secondary/20">{v}</span>
              ))}
            </div>
          </div>
        </div>

        <section className="space-y-4">
          <h2 className="font-display font-bold text-2xl">Synopsis</h2>
          <p className="text-white/60 leading-relaxed text-lg">{movie.synopsis}</p>
        </section>

        <section className="space-y-6">
          <h2 className="font-display font-bold text-2xl">Elenco y equipo</h2>
          <div className="flex gap-6 overflow-x-auto hide-scrollbar">
            {CAST.map(person => (
              <div key={person.id} className="flex-shrink-0 flex flex-col items-center gap-3 w-20">
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-white/10 active:border-primary-container transition-colors">
                  <img src={person.image} alt={person.name} className="w-full h-full object-cover" />
                </div>
                <div className="text-center">
                  <p className="text-xs font-bold text-white truncate w-20">{person.name}</p>
                  <p className="text-[9px] text-white/40 uppercase font-black truncate w-20">{person.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-surface-container-high p-8 rounded-3xl border border-white/10 space-y-6">
          <h3 className="font-display font-bold text-xl">¿Dónde verla?</h3>
          <div className="space-y-3">
             {['Netflix', 'HBO Max', 'Apple TV+'].map((p, i) => (
                <div key={p} className="flex items-center justify-between p-4 bg-black/30 rounded-2xl border border-white/5 group hover:bg-black/50 transition-colors cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-black text-[8px] ${i === 0 ? 'bg-red-600' : i === 1 ? 'bg-blue-600' : 'bg-white text-black'}`}>{p.toUpperCase()}</div>
                    <span className="font-bold text-white/90">{i === 2 ? 'Alquilar $4.99' : 'Streaming'}</span>
                  </div>
                  <ExternalLink size={20} className="text-white/20 group-hover:text-primary-container" />
                </div>
             ))}
          </div>
        </section>
      </div>

      <div className="fixed bottom-8 right-6 z-[60]">
        <button className="bg-primary-container text-white px-6 py-4 rounded-full shadow-[0_10px_30px_rgba(229,9,20,0.5)] flex items-center gap-3 active:scale-95 transition-transform">
          <Play size={20} fill="white" />
          <span className="font-bold tracking-widest text-sm uppercase">Mirar Tráiler</span>
        </button>
      </div>
    </motion.div>
  );
}

function LiveRoomScreen({ room, onBack }: { room: Room, onBack: () => void }) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-surface flex flex-col"
    >
      <header className="h-16 flex items-center border-b border-white/10 px-6 justify-between bg-black/60 backdrop-blur-xl">
        <div className="flex items-center gap-4">
          <button onClick={onBack} className="text-primary-container"><ChevronLeft size={24} /></button>
          <div className="flex flex-col">
            <span className="text-[10px] font-black uppercase text-secondary tracking-widest flex items-center gap-1.5">
               <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" /> SALA EN VIVO
            </span>
            <h2 className="font-display font-bold text-sm text-white truncate max-w-[150px]">{room.title}</h2>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-black text-white/40 uppercase">2.4k CINEPHILES</span>
          <Info size={18} className="text-white/40" />
        </div>
      </header>

      <div className="aspect-video bg-black relative flex items-center justify-center">
        <img src={room.image} className="w-full h-full object-cover opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-black/30" />
        <button className="w-16 h-16 rounded-full bg-primary-container flex items-center justify-center text-white shadow-2xl active:scale-90 transition-transform">
          <Play size={32} fill="white" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-6 flex flex-col justify-end">
        {MESSAGES.map(msg => (
          <div key={msg.id} className={`flex gap-3 ${msg.user.isMod ? 'flex-row-reverse' : ''}`}>
            <div className={`w-9 h-9 rounded-full overflow-hidden border-2 ${msg.user.isMod ? 'border-primary-container/40' : 'border-white/10'}`}>
              <img src={msg.user.image} alt={msg.user.name} className="w-full h-full object-cover" />
            </div>
            <div className={`flex flex-col gap-1.5 max-w-[80%] ${msg.user.isMod ? 'items-end' : ''}`}>
              <span className="text-[10px] font-black text-white/40 uppercase tracking-widest">{msg.user.name} {msg.user.isMod && <span className="bg-primary-container/20 text-primary-container px-1 rounded ml-1">MOD</span>}</span>
              <div className={`px-4 py-3 rounded-2xl ${msg.user.isMod ? 'bg-primary-container/10 border border-primary-container/20 rounded-tr-none text-white' : 'bg-surface-container-high border border-white/5 rounded-tl-none text-white/80'}`}>
                <p className="text-sm leading-relaxed">{msg.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <footer className="p-6 bg-black/60 backdrop-blur-2xl border-t border-white/10">
        <div className="flex justify-between mb-6 px-2">
           {['🔥', '🍿', '👏', '😂'].map(e => <button key={e} className="w-11 h-11 rounded-full bg-white/5 hover:bg-white/10 transition-colors text-xl flex items-center justify-center active:scale-90">{e}</button>)}
           <button className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40"><Settings size={20} /></button>
        </div>
        <div className="relative">
          <input 
            type="text" 
            placeholder="Escribí un mensaje..." 
            className="w-full bg-surface-container-low h-14 rounded-full px-6 pr-14 border border-white/5 focus:outline-none focus:border-primary-container/50 transition-colors"
          />
          <button className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-primary-container rounded-full flex items-center justify-center text-white active:scale-90 transition-transform">
            <MessageCircle size={20} />
          </button>
        </div>
      </footer>
    </motion.div>
  );
}
