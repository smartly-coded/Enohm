import { Button } from "../components/ui/button";
import Bottombar from "../components/Bottombar";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

// TypeScript interfaces
interface ImageFormat {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: string | null;
  width: number;
  height: number;
  size: number;
  sizeInBytes: number;
  url: string;
}

interface Image {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: {
    thumbnail?: ImageFormat;
    small?: ImageFormat;
    medium?: ImageFormat;
    large?: ImageFormat;
  };
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: any;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface HeroSection {
  id: number;
  title: string;
  subTitle: string;
  buttonText: string;
  backgroundImage: Image;
}

interface Service {
  id: number;
  serviceTitle: string | null;
  serviceSubTitle: string | null;
  serviceImage: Image | null;
}

interface KontaktSection {
  id: number;
  title: string;
  buttonText: string;
  icon: any;
  backgroundImage: Image;
}

interface LeistungenPageData {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  heroSection: HeroSection;
  services: Service[];
  kontaktSection: KontaktSection;
}

interface ApiResponse {
  data: LeistungenPageData;
  meta: Record<string, any>;
}
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
const Leistungen = () => {
  const navigate = useNavigate();
  const [pageData, setPageData] = useState<LeistungenPageData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLeistungenData = async () => {
      try {
        const response = await fetch(
          "http://localhost:1337/api/leistungen-page?populate[heroSection][populate]=*&populate[services][populate]=*&populate[kontaktSection][populate]=*"
        );
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data: ApiResponse = await response.json();
        setPageData(data.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching leistungen data:", err);
        setError(err instanceof Error ? err.message : "An error occurred");
        setLoading(false);
      }
    };

    fetchLeistungenData();
  }, []);

  // Loading state
  if (loading) {
    return (<LoadingState/>);
  }

  // Error state
  if (error) {
    return (<ErrorState    message={`Fehler beim Laden der Startseite: ${error}`}
        onRetry={() => window.location.reload()
    } />);
  }

  if (!pageData) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-gray-600 text-xl">لا توجد بيانات متاحة</div>
      </div>
    );
  }

  // Extract data from API response
  const { heroSection, services, kontaktSection } = pageData;
 const getImageUrl = (imageData: Image | null | undefined, ) => {
    if (imageData?.url) {
      return imageData.url.startsWith('http') 
        ? imageData.url 
        : `http://localhost:1337${imageData.url}`;
    }

  };
  // Filter services that have both title and content
  const validServices = services.filter(service => 
    service.serviceTitle && service.serviceSubTitle && service.serviceImage
  );

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

      {/* Hero Section */}
       <section className="relative min-h-[60vh] sm:min-h-[70vh] md:min-h-screen bg-gradient-to-r from-blue-50 to-green-50 overflow-hidden">
        {/* Background Image */}
        <div className="absolute top-0 left-0 w-full h-[50vh] sm:h-full">
          <img 
            src={getImageUrl(heroSection.backgroundImage)}
            alt={heroSection.backgroundImage.alternativeText || "Hero Background"}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center min-h-[60vh] sm:min-h-[70vh] md:min-h-screen py-8 sm:py-12 lg:py-20">
        <div className="max-w-xl space-y-6  lg:space-y-8 ">              
<h1 className="text-2xl sm:text-2xl md:text-[45px] lg:text-4xl font-bold text-white drop-shadow-lg animate-fade-in-up leading-snug md:leading-[55px]">
                {heroSection.title}
              </h1>
              
              <p className="text-base sm:text-lg md:text-[16px] lg:text-[18px] text-white/90 leading-relaxed drop-shadow-md max-w-2xl animate-fade-in-up animation-delay-200"> 
                {heroSection.subTitle}
              </p>
              
              <div className=" lg:pt-4 animate-fade-in-up animation-delay-400">
                <Button
                  onClick={() => navigate("/kontakt")}
                  variant="hero"
                  className="group relative overflow-hidden text-lg px-7 py-6 bg-[#F2A057] text-white"
                >
                  <span className="relative z-10">{heroSection.buttonText}</span>
                  <span className="absolute inset-0 bg-[#1d4b73] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Sections */}
      {validServices.map((service, index) => {
        const isEven = index % 2 === 0;
        const bgColor = isEven ? "bg-gray-100" : "bg-white";
        const animationClass = isEven ? "animate-fade-in-right" : "animate-fade-in-left";
        
        return (
          <section key={service.id} className={`py-12 md:py-16 lg:py-24 ${bgColor}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                
                {/* Image - Left for even, Right for odd */}
                <div className={`w-full h-64 sm:h-80 lg:h-[400px] ${!isEven ? 'order-1 lg:order-2' : ''}`}>
                  <img 
                    src={`http://localhost:1337${service.serviceImage!.url}`}
                    alt={service.serviceImage!.alternativeText || service.serviceTitle || "Service Image"} 
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Text - Right for even, Left for odd */}
                <div className={`space-y-6 text-center lg:text-left ${animationClass} ${!isEven ? 'order-2 lg:order-1' : ''}`}>
                  <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#1d4b73]">
                    {service.serviceTitle}
                  </h3>
                  <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                    {service.serviceSubTitle}
                  </p>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Contact CTA Section */}
      <section className="relative h-[500px] md:h-[600px] lg:h-[650px] bg-gradient-to-r from-blue-50 to-green-50 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={`http://localhost:1337${kontaktSection.backgroundImage.url}`}
            alt={kontaktSection.backgroundImage.alternativeText || "Contact Background"}
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
<h2 className="text-2xl sm:text-2xl md:text-[45px] lg:text-4xl font-bold text-white drop-shadow-lg animate-fade-in-up leading-snug md:leading-[55px]">
                {kontaktSection.title}
              </h2>

              <div className="pt-4 animate-fade-in-up animation-delay-400">
                <Button
                  onClick={() => navigate("/kontakt")}
                  variant="hero"
                  className="group relative overflow-hidden text-lg px-7 py-6 bg-[#F2A057] text-white"
                >
                  <span className="relative z-10">{kontaktSection.buttonText}</span>
                  <span className="absolute inset-0 bg-[#1d4b73] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Info Section */}
      <Bottombar />
    </div>
  );
};

export default Leistungen;