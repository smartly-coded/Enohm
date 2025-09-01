import Bottombar from "../components/Bottombar";
import { useState, useEffect } from "react";

// TypeScript interfaces
interface ImageData {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
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

interface ImpressumHeroSection {
  id: number;
  title: string;
  telefone: string;
  email: string;
  Adresse: string;
  heroImage: ImageData;
}

interface ImpressumPageData {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  impressumHeroSection: ImpressumHeroSection;
}

interface ApiResponse {
  data: ImpressumPageData;
  meta: Record<string, any>;
}

const Impressum = () => {
  const [pageData, setPageData] = useState<ImpressumPageData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchImpressumData = async () => {
      try {
        const response = await fetch(
          "http://localhost:1337/api/impressum?&populate[impressumHeroSection][populate]=*"
        );
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data: ApiResponse = await response.json();
        setPageData(data.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching impressum data:", err);
        setError(err instanceof Error ? err.message : "An error occurred");
        setLoading(false);
      }
    };

    fetchImpressumData();
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
        <div className="text-gray-600 text-xl">No data available</div>
      </div>
    );
  }

  // Extract data from API response
  const { impressumHeroSection } = pageData;

  return (
    <div className="min-h-[100vh] bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] sm:min-h-[70vh] md:min-h-screen bg-white overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[50vh] sm:h-full">   
          <img 
            src={`http://localhost:1337${impressumHeroSection.heroImage?.url || '/images/Enohm-GmbH-1.jpg'}`}
            alt={impressumHeroSection.heroImage?.alternativeText || "Solar Panels"}
            className="w-full h-full object-cover object-top"
            style={{ objectPosition: "50% 30%" }} 
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center min-h-[60vh] sm:min-h-[70vh] md:min-h-screen py-8 sm:py-12 lg:py-20">
            <div className="max-w-3xl space-y-6 lg:space-y-8">              
              <h1 className="text-2xl sm:text-2xl md:text-[45px] lg:text-4xl font-bold text-white drop-shadow-lg animate-fade-in-up leading-snug md:leading-[55px]">
                {impressumHeroSection?.title}
              </h1>
            </div>
          </div>
        </div>
      </section>
     
      {/* Content Section */}
      <section className="lg:py-5 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <h1 className="text-2xl sm:text-3xl md:text-[35px] lg:text-[35px] py-5 font-bold text-[#303133]">
            {impressumHeroSection?.title}
          </h1>
             
          <div className="prose prose-lg max-w-none">
                 
            {/* Angaben gemäß § 5 TMG */}
            <div className="mb-12">
              <h1 className="text-[40px] font-custom font-bold text-[#1d4b73] mb-6">Angaben gemäß § 5 TMG</h1>
              <div className="p-6 rounded-lg">
                <div className="text-[#585858] leading-relaxed">
                  {impressumHeroSection.Adresse.split(' ').map((part, index, array) => {
                    if (part === 'Enohm') {
                      return <span key={index}>{part} {array[index + 1]}<br/></span>;
                    }
                    if (part === 'GmbH') {
                      return null;
                    }
                    if (part === 'Wallstr.') {
                      return <span key={index}>{part} {array[index + 1]}<br/></span>;
                    }
                    if (part === '17') {
                      return null;
                    }
                    if (part === '01067') {
                      return <span key={index}>{part} {array[index + 1]}, {array[index + 2]}</span>;
                    }
                    if (['Dresden,', 'Germany'].includes(part)) {
                      return null;
                    }
                    return null;
                  })}
                </div>
                <p className="text-[#585858] leading-relaxed mt-4">
                  Handelsregister:
                </p>
              </div>
            </div>

            {/* Kontakt */}
            <div className="mb-12">
              <h1 className="text-[40px] font-custom font-bold text-[#1d4b73] mb-6">Kontakt</h1>
              <div className="p-6 rounded-lg">
                <p className="text-[#585858] leading-relaxed">
                  <strong>Telefon:</strong> {impressumHeroSection.telefone}<br/>
                  <strong>E-mail:</strong> <a href={`mailto:${impressumHeroSection.email}`} className="text-blue-600 hover:underline">{impressumHeroSection.email}</a>
                </p>
              </div>
            </div>

            {/* Verantwortlich für den Inhalt */}
            <div className="mb-12">
              <h1 className="text-[40px] font-custom font-bold text-[#1d4b73] mb-6">Verantwortlich für den Inhalt</h1>
              <div className="p-6 rounded-lg">
                <p className="text-gray-800 leading-relaxed">
                  Amin Alabbas<br/>
                  Wallstr. 17<br/>
                  01067 Dresden, Germany
                </p>
              </div>
            </div>

            {/* Haftung für Inhalte */}
            <div className="mb-12">
              <h1 className="text-[40px] font-custom font-bold text-[#1d4b73] mb-6">Haftung für Inhalte</h1>
              
                <p className="text-gray-700 leading-relaxed">
                  Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
                </p>
              </div>
         

            {/* Haftung für Links */}
            <div className="mb-12">
            <h1 className="text-[40px] font-custom font-bold text-[#1d4b73] mb-6">Haftung für Links</h1>
         
                <p className="text-gray-700 leading-relaxed">
                  Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
                </p>
          
            </div>

            {/* Urheberrecht */}
            <div className="mb-12">
              <h1 className="text-[40px] font-custom font-bold text-[#1d4b73] mb-6">Urheberrecht</h1>
           
                <p className="text-gray-700 leading-relaxed">
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
                </p>
        
            </div>

          </div>
        </div>
      </section>

      <Bottombar/>
    </div>
  );
};

export default Impressum;