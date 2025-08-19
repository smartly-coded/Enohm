import React from "react";
import { Button } from "../components/ui/button";
import Bottombar from "../components/Bottombar";

const Home = () => {
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
            src="/images/Enohm-GmbH-1.jpg" 
            alt="Solar Panels"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center min-h-screen py-12 lg:py-20">
            <div className="max-w-3xl space-y-6 lg:space-y-8">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-white drop-shadow-lg animate-fade-in-up">
                Solarlösungen für Ihre effiziente Energieversorgung- Enohm GmbH
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 leading-relaxed drop-shadow-md max-w-2xl animate-fade-in-up animation-delay-200">
                Unser Team ist auf Solaranlagen und Photovoltaik-Systeme in ganz Deutschland 
                spezialisiert, um Ihre Bedürfnisse nach nachhaltiger Energie zuverlässig zu erfüllen. 
                Fordern Sie heute noch ein unverbindliches Angebot an.
              </p>
              
            <div className="pt-4 animate-fade-in-up animation-delay-400">
                <Button 
                  variant="hero" 
                  className="text-lg px-8 py-4 bg-[#F2A057]  text-white hover:bg-[#1d4b73]  border-2"
                >
                  RUFEN SIE AN
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 md:py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-blue-900">
              Photovoltaik-Systeme in Dresden und ganz Deutschland
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed">
              Entdecken Sie bei Enohm GmbH eine Vielfalt an Lösungen für Ihre Solaranlage, 
              egal ob für Zuhause oder Ihr Gewerbe. Nutzen Sie die Kraft der Sonne und decken 
              Sie Ihren Energiebedarf nachhaltig und kostengünstig. Beginnen Sie Ihre grüne 
              Zukunft mit einer persönlichen Beratung durch unser Expertenteam.
            </p>
          </div>
        </div>
      </section>

      {/* First Image-Text Section */}
      <section className="py-12 md:py-16 lg:py-24 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* Left Side - Image */}
            <div className="w-full h-64 sm:h-80 lg:h-[400px] animate-fade-in-left">
              <img 
                src="/images/Enohm-GmbH.jpg" 
                alt="Photovoltaik Systeme" 
                className="w-full h-full object-cover rounded-lg shadow-lg hover-shadow hover-scale"
              />
            </div>

            {/* Right Side - Text */}
            <div className="space-y-6 text-center lg:text-left animate-fade-in-right">
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-blue-900">
                Energielösungen für eine grüne und effiziente Zukunft
              </h3>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                Unsere hochwertigen Photovoltaikanlagen, innovativen Solarlösungen und umfassenden Beratungsdienstleistungen sind Bestandteil unseres Serviceangebots. Wir begleiten Sie bei der Planung und Installation Ihrer PV-Anlagen zur Optimierung Ihrer Energieeffizienz und zum Maximieren von Energieeinsparungen.
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
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-blue-900">
                Zukunftsorientierte Solaranlagen für Nachhaltigkeit
              </h3>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                Seit 2020 sind wir ein etabliertes Unternehmen auf dem Markt der Solaranlagen und PV-Anlagen. Unsere Mission, Ihnen innovative und nachhaltige Energielösungen bereitzustellen, geht Hand in Hand mit einem tiefen Verständnis für neueste Technologien und einem starken Fokus auf Qualität. Wir liefern Lösungen, die Ihren individuellen Anforderungen gerecht werden.
              </p>
            </div>

            {/* Left Side - Image */}
            <div className="w-full h-64 sm:h-80 lg:h-[400px] order-1 lg:order-2 animate-fade-in-right">
              <img 
                src="/images/Enohm-GmbH-5.jpg" 
                alt="Photovoltaik Systeme" 
                className="w-full h-full object-cover rounded-lg shadow-lg hover-shadow hover-scale"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Feature 1 */}
            <div className="text-center space-y-4 hover-scale animate-fade-in-up">
              <div className="w-16 h-16 flex items-center justify-center mx-auto overflow-hidden">
                <img 
                  src="/images/power.png" 
                  alt="PV-Anlagen" 
                  className="w-10 h-10 object-cover"
                />
              </div>
              <h3 className="text-xl md:text-[24px] font-bold text-[#1D4B73]"><strong>PV-Anlagen</strong></h3>
              <p className="text-sm md:text-base text-gray-600">
                Entdecken Sie unser Angebot an PV-Anlagen – Ihre Lösung für nachhaltige und effiziente Energiegewinnung.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center space-y-4 hover-scale animate-fade-in-up animation-delay-200">
              <div className="w-16 h-16 flex items-center justify-center mx-auto overflow-hidden">
                <img 
                  src="/images/energy.png"  
                  alt="Energieunabhängigkeit" 
                  className="w-10 h-10 object-cover"
                />
              </div>
              <h3 className="text-xl md:text-[24px] font-bold text-[#1D4B73]"><strong>Energieunabhängigkeit</strong></h3>
              <p className="text-sm md:text-base text-gray-600">
                Mit unseren Solaranlagen können Sie Ihre eigene Energie erzeugen und sich von externen Stromanbietern unabhängig machen.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center space-y-4 hover-scale animate-fade-in-up animation-delay-400">
              <div className="w-16 h-16 flex items-center justify-center mx-auto overflow-hidden">
                <img 
                  src="/images/profile.png" 
                  alt="Über uns" 
                  className="w-10 h-10 object-cover"
                />
              </div>
              <h3 className="text-xl md:text-[24px] font-bold text-[#1D4B73]"><strong>Über uns</strong></h3>
              <p className="text-sm md:text-base text-gray-600">
                Erfahren Sie mehr über unsere Hingabe für Solaranlagen und nachhaltige Energie.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Cards Section */}
      <section className="py-12 md:py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Left Side */}
            <div className="space-y-4 animate-slide-in">
              <div className="overflow-hidden rounded-lg shadow-lg">
                <img 
                  src="/images/Enohm-GmbH-Leistungen.jpg" 
                  alt="Solarlösungen Leistungen" 
                  className="w-full h-64 sm:h-72 lg:h-80 object-cover hover-scale"
                />
              </div>
              <h3 className="text-xl md:text-[24px] font-bold text-[#1D4B73] text-left">
                Leistungen
              </h3>
              <Button 
                variant="default" 
                 className="px-6 py-3 bg-[#F2A057] hover:bg-[#1d4b73] text-white rounded-lg shadow"
              >
                MEHR
              </Button>
            </div>

            {/* Right Side */}
            <div className="space-y-4 animate-slide-in animation-delay-200">
              <div className="overflow-hidden rounded-lg shadow-lg">
                <img 
                  src="/images/Enohm-GmbH-Kontakt.jpg" 
                  alt="Solarlösungen Kontakt" 
                  className="w-full h-64 sm:h-72 lg:h-80 object-cover hover-scale"
                />
              </div>
               <h3 className="text-lg md:text-[24px] font-bold text-[#1D4B73] text-left">
                Kontakt
              </h3>
              <Button 
                variant="default" 
                className="px-6 py-3 bg-[#F2A057] hover:bg-[#1d4b73] text-white rounded-lg shadow"
              >
                MEHR
              </Button>
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
                  variant="hero" 
                  className="text-lg px-8 py-4 bg-[#F2A057]  text-white hover:bg-[#1d4b73]  border-2"
                >
                  RUFEN SIE AN
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

export default Home;