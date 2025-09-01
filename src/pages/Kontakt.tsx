import Bottombar from "../components/Bottombar";
import Contactform from "../components/Contactform";
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

interface KontaktHeroSection {
  id: number;
  title: string;
  subTitle: string | null;
  buttonText: string | null;
  backgroundImage: Image;
}

interface Description {
  id: number;
  title: string;
  subTitle: string;
}



interface KontaktPageData {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  mapUrl: string;
  kontaktHeroSection: KontaktHeroSection;
  description: Description[];

}

interface ApiResponse {
  data: KontaktPageData;
  meta: Record<string, any>;
}

const Kontakt = () => {
  const [pageData, setPageData] = useState<KontaktPageData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchKontaktData = async () => {
      try {
        const response = await fetch(
          "http://localhost:1337/api/kontakt-page?populate[kontaktHeroSection][populate]=*&populate[description][populate]=*&populate[KontaktDaten][populate]=*"
        );
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data: ApiResponse = await response.json();
        setPageData(data.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching kontakt data:", err);
        setError(err instanceof Error ? err.message : "An error occurred");
        setLoading(false);
      }
    };

    fetchKontaktData();
  }, []);

  // Loading state
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-gray-600 text-xl">Loading...</div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-red-600 text-xl">{error}</div>
      </div>
    );
  }

  if (!pageData) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-gray-600 text-xl">لا توجد بيانات متاحة</div>
      </div>
    );
  }

  // Extract data from API response
  const { kontaktHeroSection, description, mapUrl } = pageData;
  const mainDescription = description[0]; // Get first description item

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
     <section className="relative h-[60vh] md:min-h-screen w-full bg-white overflow-hidden">          
  {/* Background Image */}           
  <div className="absolute top-0 left-0 w-full h-[50vh] sm:h-full">           
    <img              
      src={`http://localhost:1337${kontaktHeroSection.backgroundImage.url}`}             
      alt={kontaktHeroSection.backgroundImage.alternativeText || "Contact Hero Background"}             
      className="w-full h-full object-cover"           
    />           
    <div className="absolute inset-0 bg-black/40"></div>         
  </div>          

  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">           
    <div className="flex items-start sm:items-center min-h-[60vh] pt-8 sm:py-12 lg:py-20">             
      <div className="max-w-3xl space-y-6 lg:space-y-10">               
        <h1 className="text-2xl sm:text-3xl md:text-[45px] lg:text-5xl font-bold font-custom text-white drop-shadow-lg animate-fade-in-up leading-normal md:leading-tight">                 
          {kontaktHeroSection.title.split(' ').map((word, index, array) => {                   
            // Add line breaks at logical points for better formatting                   
            if (word === 'verlässliche' || word === 'in' || word === 'Sie') {                     
              return (                       
                <span key={index}>                         
                  {word}                         
                  {index < array.length - 1 && <br />}                       
                </span>                     
              );                   
            }                   
            return word + (index < array.length - 1 ? ' ' : '');                 
          })}               
        </h1>              
      </div>           
    </div>         
  </div>       
</section>
          
      <section className="py-12 md:py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center space-y-6 animate-fade-in">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-[40px] xl:text-4xl font-custom font-semibold text-[#1d4b73]">
              {mainDescription.title.split(' ').map((word, index, array) => {
                  // Add line breaks at logical points for better formatting
                  if (word === 'Experten' ) {
                    return (
                      <span key={index}>
                        {word}
                        {index < array.length - 1 && <br />}
                      </span>
                    );
                  }
                  return word + (index < array.length - 1 ? ' ' : '');
                })}
            </h1>
            
            <p className="text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed text-center mx-auto max-w-2xl">
              {mainDescription?.subTitle || ""}
            </p>
          </div>
        </div>
      </section>

      <Contactform />

      {/* Map Section - Full Width */}
      <section className="full-width-section pt-12 md:pt-16 lg:pt-24 bg-[#f2f2f2]">
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
              src={mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Enohm GmbH Location"
            />
          </div>
        </div>
      </section>

      {/* Footer Info Section */}
      <Bottombar />
    </div>
  );
};

export default Kontakt;