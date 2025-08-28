import { useEffect, useState } from "react";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import Bottombar from "../components/Bottombar";


// Step 1: تحديث الـ TypeScript Interfaces لتشمل الصور والـ CTA
interface StrapiImageData {
  id: number;
  url: string;
  alternativeText?: string;
  name: string;
}

interface HeroSectionData {
  id: number;
  title: string;
  subTitle: string;
  buttonText: string;
  backgroundImage?: StrapiImageData | null;
}

interface ServiceSectionData {
  id: number;
  serviceTitle: string;
  serviceSubTitle: string;
  serviceImage?: StrapiImageData | null;
}

interface AnotherPagesSectionData {
  id: number;
  buttonText: string;
  title: string;
  Image?: StrapiImageData | null;
}

interface AboutData {
  id: number;
  title: string;
  subTitle: string;
  icon?: StrapiImageData | null;
}

interface KontaktData {
  id: number;
  title: string;
  buttonText: string;
  icon?:StrapiImageData | null;
  backgroundImage?: StrapiImageData | null;
}

interface ServicesData {
  id: number;
  title: string;
  subTitle: string;
}

interface CtaSectionData {
  id: number;
  title: string;

  backgroundImage?: StrapiImageData | null;
}

interface StartseiteData {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  heroSection: HeroSectionData;
  serviceSection: ServiceSectionData[];
  anotherPagesSection: AnotherPagesSectionData[];
  About: AboutData[];
  Kontakt: KontaktData;
  services?: ServicesData; // إضافة Services section
  ctaSection?: CtaSectionData; // إضافة CTA section
}

interface StrapiResponse {
  data: StartseiteData | null;
  meta?: any;
}

// Step 2: Loading Component
const LoadingState = () => (
  <div style={{
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f8f9fa'
  }}>
    <div style={{
      textAlign: 'center',
      color: '#1d4b73'
    }}>
      <div style={{
        width: '40px',
        height: '40px',
        border: '4px solid #e3e3e3',
        borderTop: '4px solid #1d4b73',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite',
        margin: '0 auto 20px'
      }}></div>
      <p>Laden...</p>
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  </div>
);

// Step 3: Error Component
const ErrorState = ({ message, onRetry }: { message: string; onRetry: () => void }) => (
  <div style={{
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f8f9fa',
    padding: '20px'
  }}>
    <div style={{
      textAlign: 'center',
      color: '#dc3545',
      maxWidth: '500px'
    }}>
      <h2 style={{ marginBottom: '20px', color: '#1d4b73' }}>Fehler beim Laden</h2>
      <p style={{ marginBottom: '30px', color: '#666' }}>{message}</p>
      <button 
        onClick={onRetry}
        style={{
          backgroundColor: '#F2A057',
          color: 'white',
          border: 'none',
          padding: '12px 24px',
          borderRadius: '8px',
          cursor: 'pointer',
          fontSize: '14px',
          fontWeight: 'bold'
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.backgroundColor = '#1d4b73';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.backgroundColor = '#F2A057';
        }}
      >
        Erneut versuchen
      </button>
    </div>
  </div>
);

const Home = () => {
  // Mock navigation function for demo
  const navigate = (path: string) => {
    console.log('Navigate to:', path);
    // In real app: navigate(path);
  };
  
  // Step 4: State Management
  const [startseiteData, setStartseiteData] = useState<StartseiteData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  
  // Step 5: Fetch Function
  useEffect(() => {
    const fetchStartseiteData = async () => {
      try {
        setLoading(true);
        const response = await fetch('http://localhost:1337/api/startseite?populate[heroSection][populate]=*&populate[serviceSection][populate]=*&populate[About][populate]=*&populate[anotherPagesSection][populate]=*&populate[Kontakt][populate]=*');

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data: StrapiResponse = await response.json();
        console.log('Fetched data:', data); // للتأكد من البيانات
        setStartseiteData(data.data);
        setError(null);
      } catch (err) {
        console.error('Error fetching startseite data:', err);
        setError(err instanceof Error ? err.message : 'Unbekannter Fehler aufgetreten');
      } finally {
        setLoading(false);
      }
    };

    fetchStartseiteData();
  }, []);

  // Step 6: Handle Loading States
  if (loading) {
    return <LoadingState />;
  }

  if (error) {
    return (
      <ErrorState
        message={`Fehler beim Laden der Startseite: ${error}`}
        onRetry={() => window.location.reload()}
      />
    );
  }

  if (!startseiteData) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <p style={{
          color: '#6c757d',
          fontSize: '16px',
          letterSpacing: '0.5px'
        }}>
          Keine Startseite-Daten verfügbar
        </p>
      </div>
    );
  }

  // Step 7: Extract Data من الـ API Response + Helper Functions
  const { heroSection, serviceSection, anotherPagesSection, About, Kontakt, services } = startseiteData;

  // Helper function لبناء URL الصورة
  const getImageUrl = (imageData: StrapiImageData | null | undefined, ) => {
    if (imageData?.url) {
      return imageData.url.startsWith('http') 
        ? imageData.url 
        : `http://localhost:1337${imageData.url}`;
    }

  };



  return (
    <div className="min-h-screen bg-white">
      <style>{`
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

      {/* Hero Section - Step 8: استخدام البيانات من الـ API مع الصور */}
   <section className="relative min-h-[60vh] sm:min-h-[70vh] md:min-h-screen bg-gradient-to-r from-blue-50 to-green-50 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={getImageUrl(heroSection?.backgroundImage)}
            alt={heroSection?.backgroundImage?.alternativeText || "Solar Panels"}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center min-h-[60vh] sm:min-h-[70vh] md:min-h-screen py-8 sm:py-12 lg:py-20">
        <div className="max-w-3xl space-y-6  lg:space-y-8 ">              
<h1 className="text-2xl sm:text-2xl md:text-[45px] lg:text-4xl font-bold text-white drop-shadow-lg animate-fade-in-up leading-snug md:leading-[55px]">
  {heroSection?.title || "Solarlösungen für Ihre effiziente Energieversorgung - Enohm GmbH"}
</h1>


              
              {/* Subtitle - Mobile optimized, Desktop EXACTLY original, Large screens enhanced */}
              <p className="text-base sm:text-lg md:text-[16px] lg:text-[18px] text-white/90 leading-relaxed drop-shadow-md max-w-2xl animate-fade-in-up animation-delay-200">     
                {heroSection?.subTitle || "Unser Team ist auf Solaranlagen und Photovoltaik-Systeme in ganz Deutschland spezialisiert, um Ihre Bedürfnisse nach nachhaltiger Energie zuverlässig zu erfüllen. Fordern Sie heute noch ein unverbindliches Angebot an."}               </p>  
              
                   <div className=" lg:pt-4 animate-fade-in-up animation-delay-400">              
                       <Button onClick={() => navigate("/kontakt")}  variant="hero" className="group relative overflow-hidden text-lg px-7 py-6 bg-[#F2A057] text-white">  
        <span className="relative z-10">           
            {heroSection?.buttonText || "RUFEN SIE AN"} </span>           
            <span className="absolute inset-0 bg-[#1d4b73] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
              </Button>      
             </div> 
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - استخدام services من الـ API */}
      <section className="py-12 md:py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#1d4b73]">
              {services?.title || "Photovoltaik-Systeme in Dresden und ganz Deutschland"}
            </h3>
            <p className="text-base max-w-2xl mx-auto text-center md:text-lg lg:text-xl text-gray-600 leading-relaxed">
              {services?.subTitle || "Entdecken Sie bei Enohm GmbH eine Vielfalt an Lösungen für Ihre Solaranlage, egal ob für Zuhause oder Ihr Gewerbe. Nutzen Sie die Kraft der Sonne und decken Sie Ihren Energiebedarf nachhaltig und kostengünstig. Beginnen Sie Ihre grüne Zukunft mit einer persönlichen Beratung durch unser Expertenteam."}
            </p>
          </div>
        </div>
      </section>

      {serviceSection && serviceSection.length > 0 && (
        serviceSection.map((service, index) => (
          <section 
            key={service.id} 
            className={`py-12 md:py-16 lg:py-24 ${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                
                {/* Image Side - يتبدل المكان حسب الـ index */}
                <div className={`w-full h-64 sm:h-80 lg:h-80 mb-12 lg:mb-0 ${index % 2 === 0 ? 'order-1' : 'order-1 lg:order-2'}`}>
                  <img 
                    src={getImageUrl(service?.serviceImage)}
                    alt={service?.serviceImage?.alternativeText || service.serviceTitle} 
                    className="w-full h-80 object-cover"
                  
                  />
                </div>

                {/* Text Side - يتبدل المكان حسب الـ index */}
                <div className={`space-y-6 text-center lg:text-left ${
                  index % 2 === 0 
                    ? 'order-2 animate-fade-in-right' 
                    : 'order-2 lg:order-1 animate-fade-in-left'
                }`}>
                  <h3 className="text-xl sm:text-2xl  md:text-3xl lg:text-4xl font-bold text-[#1d4b73]">
                    {service.serviceTitle}
                  </h3>
                  <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                    {service.serviceSubTitle}
                  </p>
           
                </div>
              </div>
            </div>
          </section>
        ))
      )}
      
    

         

      {/* Features Section - Step 11: استخدام About array بشكل fully dynamic */}
       <section className="py-12 md:py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
       
            {About && About.length > 0 ? (
              About.map((aboutItem, index) => (
                <div key={aboutItem.id} className={`text-center space-y-4 hover-scale animate-fade-in-up ${index % 3 === 1 ? 'animation-delay-200' : index % 3 === 2 ? 'animation-delay-400' : ''}`}>
                  <div className="w-16 h-16 flex items-center justify-center mx-auto overflow-hidden">
                    <img 
                      src={getImageUrl(aboutItem?.icon,)}
                      alt={aboutItem?.icon?.alternativeText || aboutItem.title} 
                      className="w-10 h-10 object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "/images/power.png"; // Default fallback
                      }}
                    />
                  </div>
                  <h3 className="text-xl md:text-[24px] font-bold text-[#1D4B73]">
                    <strong>{aboutItem.title}</strong>
                  </h3>
                  <p className="text-sm md:text-base text-gray-600">
                    {aboutItem.subTitle}
                  </p>
                </div>
              ))
            ) : (
              // Fallback في حالة عدم وجود بيانات
              <div className="text-center space-y-4 hover-scale animate-fade-in-up">
                <div className="w-16 h-16 flex items-center justify-center mx-auto overflow-hidden">
                  <img src="/images/power.png" alt="PV-Anlagen" className="w-10 h-10 object-cover" />
                </div>
                <h3 className="text-xl md:text-[24px] font-bold text-[#1D4B73]"><strong>PV-Anlagen</strong></h3>
                <p className="text-sm md:text-base text-gray-600">
                  Entdecken Sie unser Angebot an PV-Anlagen – Ihre Lösung für nachhaltige und effiziente Energiegewinnung.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Service Cards Section - Step 12: استخدام anotherPagesSection */}
      <section className="py-12 md:py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Left Side - anotherPagesSection[0] */}
            <div className="space-y-4 animate-slide-in">
              <div className="overflow-hidden">
                <img 
                  src={getImageUrl(anotherPagesSection?.[0].Image)}
                  alt="Solarlösungen Leistungen" 
                  className="w-full h-64 sm:h-72 lg:h-80"
                />
              </div>
              <h3 className="text-xl md:text-[24px] font-bold text-[#1D4B73] text-left">
                {anotherPagesSection?.[0]?.title || "Leistungen"}
              </h3>
              <Link to="/leistungen">
                <Button 
                  variant="hero" 
                  className="group relative overflow-hidden px-6 py-3 mt-5 bg-[#F2A057] hover:bg-[#1d4b73] text-white"
                >
                  <span className="relative z-10">
                    {anotherPagesSection?.[0]?.buttonText || "MEHR"}
                  </span>
                  <span className="absolute inset-0 bg-[#1d4b73] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
                </Button>
              </Link>
            </div>

            {/* Right Side - anotherPagesSection[1] */}
            <div className="space-y-4 animate-slide-in animation-delay-200">
              <div className="overflow-hidden">
                <img 
                  src={getImageUrl(anotherPagesSection?.[1].Image)}
                  alt="Solarlösungen Kontakt" 
                  className="w-full h-64 sm:h-72 lg:h-80"
                />
              </div>
              <h3 className="text-lg md:text-[24px] font-bold text-[#1D4B73] text-left">
                {anotherPagesSection?.[1]?.title || "Kontakt"}
              </h3>
              <Link to='/kontakt'>
                <Button 
                  variant="hero" 
                  className="group relative overflow-hidden px-6 py-3 mt-5 bg-[#F2A057] hover:bg-[#1d4b73] text-white"
                >
                  <span className="relative z-10">
                    {anotherPagesSection?.[1]?.buttonText || "MEHR"}
                  </span>
                  <span className="absolute inset-0 bg-[#1d4b73] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section - Step 13: استخدام Kontakt object */}
      <section className="relative h-[500px] md:h-[600px] lg:h-[650px] bg-gradient-to-r from-blue-50 to-green-50 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={getImageUrl(Kontakt?.backgroundImage)}
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
  {Kontakt?.icon ? (
    <img src={getImageUrl(Kontakt.icon)} alt="icon" className="w-8 h-8 object-contain" />
  ) : (
    <svg 
      xmlns="http://www.w3.org/2000/svg"
      className="w-8 h-8 text-white"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
    </svg>
  )}
</div>


           <h2 className="text-2xl sm:text-2xl md:text-[45px] lg:text-4xl font-bold text-white drop-shadow-lg animate-fade-in-up leading-snug md:leading-[55px]">
                {Kontakt?.title || "Kontaktieren Sie uns für eine kostenlose Beratung für Ihre individuelle Solaranlage!"}
              </h2>

              <div className="pt-4 animate-fade-in-up animation-delay-400">
                <Button
                  onClick={() => navigate("/kontakt")}
                  variant="hero"
                  className="group relative overflow-hidden text-lg px-7 py-6 bg-[#F2A057] text-white"
                >
                  <span className="relative z-10">
                    {Kontakt?.buttonText || "RUFEN SIE AN"}
                  </span>
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

export default Home;