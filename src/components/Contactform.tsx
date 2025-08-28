import { useState, useEffect } from "react";

// TypeScript interfaces
interface KontaktDaten {
  id: number;
  Adresse: string;
  telefone: string;
  Email: string;
  Offnungszeiten: string;
}

interface KontaktPageData {
  KontaktDaten: KontaktDaten;
}

interface ApiResponse {
  data: KontaktPageData;
  meta: Record<string, any>;
}

const Contactform = () => {
  const [kontaktDaten, setKontaktDaten] = useState<KontaktDaten | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchKontaktDaten = async () => {
      try {
        const response = await fetch(
          "http://localhost:1337/api/kontakt-page?populate[KontaktDaten][populate]=*"
        );
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data: ApiResponse = await response.json();
        setKontaktDaten(data.data.KontaktDaten);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching kontakt daten:", err);
        // Use fallback data if API fails
        setKontaktDaten({
          id: 0,
          Adresse: "Enohm GmbH\nWallstr. 17\n01067 Dresden",
          telefone: "0152 266 777 00",
          Email: "info@enohm.de",
          Offnungszeiten: "08:30 – 17:00 Uhr"
        });
        setLoading(false);
      }
    };

    fetchKontaktDaten();
  }, []);

  return (
    <section className="bg-[#f2f2f2] w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="animate-fade-in-right">
              <div className="bg-[#f2f2f2] p-8 ">
                <h3 className="text-2xl font-bold text-[#1d4b73] mb-6">Nachricht senden</h3>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Anrede<span className="text-red-500">*</span>
                    </label>
                    <select className="w-full px-4 py-3 bg-[#F7F7F7] border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F2A057] focus:border-[#F2A057] transition-colors">
                      <option>Herr</option>
                      <option>Frau</option>
                      <option>Keine Angabe</option>
                    </select>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Vorname<span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-[#F7F7F7] border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F2A057] focus:border-[#F2A057] transition-colors"
                      
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nachname<span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-[#F7F7F7] border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F2A057] focus:border-[#F2A057] transition-colors"
                      
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        E-Mail Adresse <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        className="w-full px-4 py-3  bg-[#F7F7F7] border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F2A057] focus:border-[#F2A057] transition-colors"
                      
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Telefon 
                      </label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 bg-[#F7F7F7] border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F2A057] focus:border-[#F2A057] transition-colors"
                       
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nachricht<span className="text-red-500">*</span>
                    </label>
                    <textarea
                      rows={5}
                      className="w-full px-4 py-3 bg-[#F7F7F7] border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F2A057] focus:border-[#F2A057] transition-colors resize-vertical"
                  
                    ></textarea>
                  </div>

                  {/* Privacy Consent Checkbox */}
                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      id="privacy-consent"
                      className="mt-1 h-4 w-4 text-[#F2A057] focus:ring-[#F2A057] border-gray-300 rounded"
                      required
                    />
                    <label htmlFor="privacy-consent" className="text-sm text-gray-600 leading-relaxed">
                      Ich erkläre mich mit der Verarbeitung der eingegebenen Daten sowie der{' '}
                      <a 
                        href="/datenschutz" 
                        className="text-[#1d4b73] hover:text-orange-600 underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Datenschutzerklärung
                      </a>{' '}
                      einverstanden. <span className="text-red-500">*</span>
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#F2A057] hover:bg-orange-600 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    NACHRICHT SENDEN
                  </button>
                </div>
              </div>
            </div>
         
            {/* Contact Details */}
            <div className="space-y-8 animate-fade-in-left">
              <div className="bg-[#F2F2F2] p-8 rounded-lg ">
                <h3 className="text-2xl font-bold text-[#1d4b73] mb-2 mt-4">Kontaktinformation</h3>
                
               <div className="space-y-6 ">
      {/* Adresse */}
      <div className="flex flex-col  space-y-2">
        <div className="w-6 h-6 text-black">
          <svg fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
          </svg>
        </div>
        <div className="flex-start">
          <h4 className="font-semibold text-gray-900">Adresse</h4>
          {loading ? (
            <p className="text-gray-600">Loading...</p>
          ) : (
            <div className="text-gray-600 whitespace-pre-line">
              {kontaktDaten?.Adresse || "Enohm GmbH\nWallstr. 17\n01067 Dresden"}
            </div>
          )}
        </div>
      </div>

      {/* Telefon */}
      <div className="flex flex-col  space-y-2">
        <div className="w-6 h-6 text-black">
          <svg fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
          </svg>
        </div>
        <div className="flex-start">
          <h4 className="font-semibold text-gray-900">Telefon</h4>
          <p className="text-gray-600">
            {loading ? "Loading..." : kontaktDaten?.telefone || "0152 266 777 00"}
          </p>
        </div>
      </div>

      {/* E-Mail */}
      <div className="flex flex-col space-y-2">
        <div className="w-6 h-6 text-black">
          <svg fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
          </svg>
        </div>
        <div className="flex-start">
          <h4 className="font-semibold text-gray-900">E-Mail</h4>
          <p className="text-gray-600">
            {loading ? "Loading..." : kontaktDaten?.Email || "info@enohm.de"}
          </p>
        </div>
      </div>
    </div>
  </div>
              <div className="bg-[#F2F2F2]/10 p-8 ">
                <h3 className="text-xl font-bold text-[#1d4b73] mb-4">Öffnungszeiten</h3>
                <div className="space-y-2 text-gray-700">
                  <p>
                    <span className="font-medium">Montag - Freitag:</span> {" "}
                    {loading ? "Loading..." : kontaktDaten?.Offnungszeiten || "08:30 – 17:00 Uhr"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contactform;