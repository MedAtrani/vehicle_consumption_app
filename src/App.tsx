import React, { useState, useEffect } from 'react';
import { 
  Heart, 
  Stethoscope, 
  GraduationCap, 
  Mail, 
  Phone, 
  MapPin, 
  Globe,
  Camera,
  Book,
  Plane,
  Languages,
  Star,
  Sparkles
} from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-400 via-fuchsia-400 to-indigo-400">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_200px,#FF69B4,transparent)]" 
             style={{ transform: `translateY(${scrollY * 0.2}px)` }} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_600px_at_80%_400px,#DA70D6,transparent)]" 
             style={{ transform: `translateY(${scrollY * 0.3}px)` }} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_700px_at_20%_600px,#9370DB,transparent)]" 
             style={{ transform: `translateY(${scrollY * 0.1}px)` }} />
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-xl bg-white/10`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <span className="text-xl font-bold bg-gradient-to-r from-pink-300 to-purple-300 text-transparent bg-clip-text">
              SM
            </span>
            <div className="hidden md:flex space-x-8">
              {['À propos', 'Expérience', 'Formation', 'Contact'].map((item) => (
                <button
                  key={item}
                  className="text-sm font-medium text-white hover:text-pink-300 transition-colors relative group"
                  onClick={() => setActiveSection(item.toLowerCase())}
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-300 transition-all group-hover:w-full" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex-1">
              <div className="relative">
                <Sparkles className="absolute -left-8 -top-8 w-6 h-6 text-pink-300 animate-pulse" />
                <h1 className="text-6xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-white to-pink-200 text-transparent bg-clip-text">
                    SALMA MOUSSAID
                  </span>
                </h1>
              </div>
              <p className="text-2xl text-white/90 mb-8 leading-relaxed">
                Infirmière Polyvalente Passionnée
              </p>
              <div className="flex space-x-4">
                <a
                  href="mailto:salma.moussaid1999@gmail.com"
                  className="group relative px-8 py-4 bg-white/20 backdrop-blur-sm rounded-xl overflow-hidden transition-all hover:bg-white/30"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity" />
                  <div className="relative flex items-center space-x-2">
                    <Mail className="w-5 h-5 text-white" />
                    <span className="text-white">Me contacter</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              <div className="relative w-64 h-64 rounded-full overflow-hidden ring-2 ring-white/50">
                <img
                  src="https://i.imgur.com/YourImageID.jpg" // Replace with your actual image URL
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white/20 backdrop-blur-xl rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform">
                <Heart className="w-12 h-12 text-pink-300" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-white">
            <span className="bg-gradient-to-r from-white to-pink-200 text-transparent bg-clip-text">
              Expériences Professionnelles
            </span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                year: "2023",
                title: "Service d'Urologie",
                location: "Hôpital Provincial Mohammed VI, Tanger",
                description: "Suivi et prise en charge des patients en pré et postopératoire.",
                icon: <Stethoscope className="w-6 h-6 text-pink-300" />
              },
              {
                year: "2022",
                title: "Service de Chirurgie",
                location: "Hôpital Provincial Mohammed VI, Tanger",
                description: "Assistance aux chirurgiens pendant les interventions chirurgicales.",
                icon: <Stethoscope className="w-6 h-6 text-purple-300" />
              },
              {
                year: "2021",
                title: "Réanimation COVID-19",
                location: "Hôpital Provincial Mohammed VI, Tanger",
                description: "Participation active à la prise en charge des patients atteints de la COVID-19.",
                icon: <Stethoscope className="w-6 h-6 text-indigo-300" />
              }
            ].map((experience, index) => (
              <div
                key={index}
                className="group relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/20 transition-all duration-300"
              >
                <div className="absolute -inset-px bg-gradient-to-r from-pink-500/50 to-purple-500/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="flex items-center space-x-4 mb-4">
                    {experience.icon}
                    <span className="text-lg font-semibold text-white">{experience.year}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{experience.title}</h3>
                  <p className="text-white/80 mb-2">{experience.location}</p>
                  <p className="text-white/70">{experience.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills & Languages Section */}
      <section className="py-20 px-6 bg-white/5 backdrop-blur-lg">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Skills */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-white">Compétences</h2>
              <div className="space-y-4">
                {[
                  { skill: "Soins infirmiers", level: 95 },
                  { skill: "Gestion du Stress", level: 90 },
                  { skill: "Collaboration", level: 85 },
                  { skill: "Adaptabilité", level: 88 }
                ].map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between text-white">
                      <span>{item.skill}</span>
                      <span>{item.level}%</span>
                    </div>
                    <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-pink-500 to-purple-500 transition-all duration-500"
                        style={{ width: `${item.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-white">Langues</h2>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { language: "Français", level: "Courant" },
                  { language: "Anglais", level: "Intermédiaire" },
                  { language: "Arabe", level: "Natif" }
                ].map((lang, index) => (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/20 transition-all"
                  >
                    <Languages className="w-6 h-6 text-pink-300 mb-4" />
                    <h3 className="text-lg font-semibold text-white mb-2">{lang.language}</h3>
                    <p className="text-white/70">{lang.level}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interests Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-white">Loisirs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Book className="w-8 h-8" />, title: "La lecture" },
              { icon: <Camera className="w-8 h-8" />, title: "Photographie" },
              { icon: <Plane className="w-8 h-8" />, title: "Voyage" }
            ].map((hobby, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center hover:bg-white/20 transition-all"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full flex items-center justify-center text-pink-300">
                  {hobby.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">{hobby.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-white/5 backdrop-blur-lg">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold mb-12 text-center text-white">Contact</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <a
              href="tel:+212650072723"
              className="group bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/20 transition-all flex items-center space-x-4"
            >
              <Phone className="w-6 h-6 text-pink-300" />
              <div>
                <h3 className="text-lg font-semibold text-white">Téléphone</h3>
                <p className="text-white/70">+212 650-072723</p>
              </div>
            </a>
            <a
              href="mailto:salma.moussaid1999@gmail.com"
              className="group bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/20 transition-all flex items-center space-x-4"
            >
              <Mail className="w-6 h-6 text-pink-300" />
              <div>
                <h3 className="text-lg font-semibold text-white">Email</h3>
                <p className="text-white/70">salma.moussaid1999@gmail.com</p>
              </div>
            </a>
            <div className="md:col-span-2">
              <div className="group bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/20 transition-all flex items-center space-x-4">
                <MapPin className="w-6 h-6 text-pink-300" />
                <div>
                  <h3 className="text-lg font-semibold text-white">Adresse</h3>
                  <p className="text-white/70">Bloc 22 A4 Erac Sidi Brahim., Fes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-black/20 backdrop-blur-lg">
        <div className="container mx-auto text-center text-white/60">
          <p>© {new Date().getFullYear()} Salma Moussaid. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;