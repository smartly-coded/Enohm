import Bottombar from "../components/Bottombar";
import Contactform from "../components/Contactform";

const Kontakt = () => {
return(
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

        /* حل للـ full width map */
        .full-width-section {
          width: 100vw;
          position: relative;
          left: 50%;
          right: 50%;
          margin-left: -50vw;
          margin-right: -50vw;
        }
      `}</style>

      {/* Hero Section */}
     <section className="relative min-h-screen w-full bg-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <img 
            src="/images/Enohm-GmbH-Kontakt.jpg" 
            alt="Solar Panels Contact"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        
       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center min-h-[60vh] py-12 lg:py-20">
            <div className="max-w-3xl space-y-6 lg:space-y-10">
          
     
              <h1 className="text-2xl sm:text-3xl md:text-[45px] lg:text-5xl font-bold font-custom text-white drop-shadow-lg animate-fade-in-up">
      Energiesparende und  <br/>   verlässliche <br/> Photovoltaikprojekte in <br/> Dresden – kontaktieren Sie uns!
  </h1> 
            </div>
          </div>
        </div>
   

      </section>
          
         <section className="py-12 md:py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center space-y-6 animate-fade-in">
         
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-[40px] xl:text-4xl font-custom font-semibold text-[#1d4b73]">
        Nehmen Sie Kontakt mit Ihrem Experten 
            </h1>
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-[40px] xl:text-4xl font-custom font-semibold text-[#1d4b73]">
            fürSolaranlagen auf
            </h1>
         <p className="text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed text-center mx-auto max-w-2xl">
  Unsere kompetenten Experten von der Enohm GmbH sind auf Solaranlagen, die in ganz Deutschland implementiert werden, fokussiert. Profitieren Sie von unserer langjährigen Expertise, um hochwertige PV-Anlagen und individuelle Lösungen für Ihr Solarprojekt zu erhalten. Nutzen Sie das Kontaktformular, rufen Sie uns an oder schreiben Sie uns eine E-Mail, um mehr über unsere Solarenergie zu erfahren. Wir stehen Ihnen gerne zur Verfügung, um Ihnen bei Ihrem Energieprojekt zu helfen.
</p>

          </div>
        </div>
      </section>
    <Contactform/>
 {/* Map Section - Full Width */}
<section className="full-width-section py-12 md:py-16 lg:py-24 bg-[#f2f2f2]">
  <div className="px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12 animate-fade-in">
      <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#1d4b73] mb-6">
        Auf der interaktiven Karte finden Sie unser

      </h2>
      <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#1d4b73] mb-6">
    
Büro und die dazugehörige Anfahrt nach Dresden.
      </h2>
    </div>
    
    <div className="w-full h-96 lg:h-[500px] rounded-xl overflow-hidden shadow-xl animate-fade-in">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2499.8234567891234!2d13.7372621!3d51.0504088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4709cf29101ad6a7%3A0x1234567890abcdef!2sWallstra%C3%9Fe%2017%2C%2001067%20Dresden%2C%20Germany!5e0!3m2!1sen!2sde!4v1234567890123!5m2!1sen!2sde"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Enohm GmbH Location"
      />
    </div></div>
</section>

      {/* Footer Info Section */}
     <Bottombar/>
    </div>
)
};

export default Kontakt;