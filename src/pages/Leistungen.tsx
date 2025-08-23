import { Button } from "../components/ui/button";
import Bottombar from "../components/Bottombar";
import { useNavigate } from "react-router-dom";

const Leistungen = () => {
const  navigate = useNavigate();
  return (
    <div className="min-h-screen bg-white">
      <style >{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInFromBottom {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }
        
        .animate-fade-in-left {
          animation: fadeInLeft 0.8s ease-out forwards;
        }
        
        .animate-fade-in-right {
          animation: fadeInRight 0.8s ease-out forwards;
        }
        
        .animate-slide-in {
          animation: slideInFromBottom 1s ease-out forwards;
        }
        
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
        
        .animation-delay-600 {
          animation-delay: 0.6s;
        }
        
        .hover-scale {
          transition: transform 0.3s ease;
        }
        
        .hover-scale:hover {
          transform: scale(1.05);
        }
        
        .hover-shadow {
          transition: box-shadow 0.3s ease;
        }
        
        .hover-shadow:hover {
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-r from-blue-50 to-green-50 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/images/Enohm-GmbH-Leistungen.jpg" 
            alt="Solar Panels"
            className="w-full h-full object-cover"
          />
        <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center min-h-screen py-12 lg:py-20">
            <div className="max-w-3xl space-y-6 lg:space-y-8">
              <h1 className="text-2xl sm:text-3xl md:text-[45px] lg:text-5xl font-bold leading-tight text-white drop-shadow-lg animate-fade-in-up">
               Unsere Vielfalt an Solaranlagen in Dresden und deutschlandweit
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 leading-relaxed drop-shadow-md max-w-2xl animate-fade-in-up animation-delay-200">
               Enohm GmbH ist Ihr Experte für individuell angepasste Solaranlagen für Firmen und Privatkunden in ganz Deutschland. Treten Sie heute mit unserem kompetenten Team in Kontakt, um mehr Informationen zu bekommen und Ihr eigenes Angebot anzufordern.
              </p>
              
            <div className="pt-4 animate-fade-in-up animation-delay-400">
          <Button
  onClick={() => navigate("/kontakt")}
  variant="hero"
  className="group relative overflow-hidden text-lg px-7 py-6 bg-[#F2A057] text-white"
>
  <span className="relative z-10">RUFEN SIE AN</span>
  <span className="absolute inset-0 bg-[#1d4b73] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}


      {/* First Image-Text Section */}
      <section className="py-12 md:py-16 lg:py-24 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* Left Side - Image */}
            <div className="w-full h-64 sm:h-80 lg:h-[400px] ">
              <img 
                src="/images/Enohm-GmbH-7.jpg" 
                alt="Photovoltaik Systeme" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right Side - Text */}
            <div className="space-y-6 text-center lg:text-left animate-fade-in-right">
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#1d4b73]">
                Ihr Spezialist für Solaranlagen und Photovoltaik
              </h3>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
Als führendes Unternehmen im Bereich erneuerbare Energien bietet Enohm GmbH individuell konzipierte Solaranlagen und Photovoltaiksysteme für private Haushalte und Unternehmen in ganz Deutschland an. Unsere nachhaltigen und energieeffizienten Lösungen bieten eine erhebliche Kosteneinsparung. Durch unsere langjährige Erfahrung und Expertise sind wir Ihr zuverlässiger Partner für umweltbewusste und zukunftssichere Energie.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Second Image-Text Section */}
      <section className="py-12 md:py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* Right Side - Text */}
            <div className="space-y-6 text-center lg:text-left order-2 lg:order-1 animate-fade-in-left">
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#1d4b73]">
               Effiziente PV-Lösungen & Trockenbau
              </h3>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Steigern Sie Ihre Energieeffizienz mit unseren PV-Lösungen und Trockenbau – Enohm GmbH ist Ihr kompetenter Partner für individuell konzipierte Solaranlagen und qualitativ hochwertige Trockenbau-Lösungen. Unsere Expertise gewährleistet nachhaltige Energiegewinnung und effiziente Innenausbauarbeiten für Privat- und Geschäftskunden in Deutschland. Nutzen Sie unsere langjährige Erfahrung und Präzision für zuverlässige und umweltfreundliche Lösungen, die Ihre Anforderungen perfekt erfüllt.

</p>
            </div>

            {/* Left Side - Image */}
            <div className="w-full h-64 sm:h-80 lg:h-[400px] ">
              <img 
                src="/images/Enohm-GmbH-6.jpg" 
                alt="Photovoltaik Systeme" 
                className="w-full h-full object-cover "
              />
            </div>
          </div>
        </div>
      </section>
   <section className="py-12 md:py-16 lg:py-24 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* Left Side - Image */}
            <div className="w-full h-64 sm:h-80 lg:h-[400px] ">
              <img 
                src="/images/Enohm-GmbH-9.jpg" 
                alt="Photovoltaik Systeme" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right Side - Text */}
            <div className="space-y-6 text-center lg:text-left animate-fade-in-right">
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#1d4b73]">
                
Nachhaltige Solar- und Bau-Lösungen
              </h3>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
Von Solaranlagen bis Elektrosanierung mit Enohm GmbH erhalten Sie auf Ihre Bedürfnisse abgestimmte Solaranlagen, hochwertige Trockenbau-Lösungen und professionelle Elektrosanierungen – alles aus einer Hand. Unsere Expertise in nachhaltiger Energiegewinnung, modernem Elektro- und Trockenbau macht uns zum idealen Partner für Privat- und Geschäftskunden. Vertrauen Sie auf unsere langjährige Erfahrung und Professionalität, um Ihre individuellen Anforderungen an Energieeffizienz, Bauqualität und Elektrosicherheit zu erfüllen. </p>
            </div>
          </div>
        </div>
      </section>
        <section className="py-12 md:py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* Right Side - Text */}
            <div className="space-y-6 text-center lg:text-left order-2 lg:order-1 ">
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#1d4b73]">
           Energieeffiziente Lösungen für Ihr Zuhause
              </h3>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
 Innovative Energie- und Einrichtungslösungen erwarten Sie bei Enohm GmbH. Als Spezialist für Solaranlagen, Trockenbau, Elektrosanierung und Ladeneinrichtung bieten wir individuell auf Sie abgestimmte Lösungen. Unsere nachhaltigen Solaranlagen sorgen für effiziente Energieerzeugung, während unsere hochwertigen Trockenbau- und Elektrosanierungsarbeiten Qualität und Präzision garantieren. Mit modernem Design und Funktionalität schaffen wir einzigartige Ladeneinrichtungen. Vertrauen Sie auf unsere Erfahrung und Kompetenz für umweltbewusste und erstklassige Lösungen in den Bereichen Energie, Bau und Innenausstattung.</p>
            </div>

            {/* Left Side - Image */}
            <div className="w-full h-64 sm:h-80 lg:h-[400px] order-1 lg:order-2 animate-fade-in-right">
              <img 
                src="/images/Enohm-GmbH-8.jpg" 
                alt="Photovoltaik Systeme" 
                className="w-full h-full object-cover "
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="relative h-[500px] md:h-[600px] lg:h-[650px] bg-gradient-to-r from-blue-50 to-green-50 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/images/enohm-gmbh6.jpg" 
            alt="Solar Panels Contact"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-full py-12">
            <div className="max-w-2xl space-y-6 lg:space-y-8 text-white">
              
              {/* Phone Icon */}
              <div className="w-16 h-16 flex items-center justify-center animate-fade-in-up">
                <svg xmlns="http://www.w3.org/2000/svg" 
                     className="w-8 h-8 text-white" 
                     viewBox="0 0 24 24" 
                     fill="currentColor">
                  <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                </svg>
              </div>

              <h2 className="text-2xl sm:text-2xl md:text-[40px] lg:text-4xl font-bold leading-tight drop-shadow-lg animate-fade-in-up animation-delay-200">
                Kontaktieren Sie uns für eine kostenlose Beratung für Ihre individuelle Solaranlage!
              </h2>

              <div className="pt-4 animate-fade-in-up animation-delay-400">
<Button
  onClick={() => navigate("/kontakt")}
  variant="hero"
  className="group relative overflow-hidden text-lg px-7 py-6 bg-[#F2A057] text-white"
>
  <span className="relative z-10">RUFEN SIE AN</span>
  <span className="absolute inset-0 bg-[#1d4b73] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
</Button>


              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Footer Info Section */}
     <Bottombar/>
    </div>
  );
};

export default Leistungen;