import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

// TypeScript interfaces
interface LogoFormat {
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

interface Logo {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: {
    thumbnail?: LogoFormat;
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

interface BottomBarData {
  id: number;
  documentId: string;
  Adresse: string;
  telefone: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  logo: Logo;
}

interface ApiResponse {
  data: BottomBarData;
  meta: Record<string, any>;
}

const Bottombar = () => {
  const [bottomBarData, setBottomBarData] = useState<BottomBarData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBottomBarData = async () => {
      try {
        const response = await fetch("http://localhost:1337/api/bottom-bar?populate=*");
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data: ApiResponse = await response.json();
        setBottomBarData(data.data);
        setLoading(false);
      } catch (error:any) {
        console.error("Error fetching bottom bar data:", error.message);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchBottomBarData();
  }, []);

  // Loading state
  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="text-gray-600">جاري التحميل...</div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="text-red-600">حدث خطأ في تحميل البيانات: {error}</div>
      </div>
    );
  }

  // Extract data from API response
  const logo = bottomBarData?.logo?.url;
  const addressText = bottomBarData?.Adresse || "";
  
  // Parse address text - split by common patterns or use as single text
  const addressParts = addressText.includes('\n') 
    ? addressText.split('\n').map(line => line.trim())
    : addressText.split(/(?=\d{5}\s)/).map(part => part.trim()); // Split before postal code
  
  let companyName, addressStreet, addressCity;
  
  if (addressParts.length >= 3) {
    companyName = addressParts[0];
    addressStreet = addressParts[1];
    addressCity = addressParts[2];
  } else {
    // Fallback parsing for single line address
    companyName = "Enohm GmbH";
    addressStreet = "Wallstr. 17";
    addressCity = "01067 Dresden";
    
    // Try to extract postal code and city
    const postalMatch = addressText.match(/(\d{5})\s+(\w+)/);
    if (postalMatch) {
      addressCity = `${postalMatch[1]} ${postalMatch[2]}`;
    }
    
    // Try to extract street
    const streetMatch = addressText.match(/([A-Za-z]+\.\s*\d+)/);
    if (streetMatch) {
      addressStreet = streetMatch[1];
    }
  }
  
  const contact = {
    phone: bottomBarData?.telefone?.trim() || "0152 266 777 00",
    email: bottomBarData?.email || "info@enohm.de"
  };
  
  const links = {
    impressum: "/impressum",
    datenschutz: "/datenschutz"
  };

  return (
    <>
          <hr className="border-t border-black mb-8 w-full" />
      {/* Logo Section */}
      <div className="w-full max-w-md mx-auto  px-4">
        <img
          src={ `http://localhost:1337${logo}` }
          alt={`${companyName} Logo`}
          className="w-1/2 h-auto object-contain mx-auto"
        />
      </div>

      <section className="pt-12 md:pt-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Address */}
            <div className="text-center space-y-4 animate-fade-in-up">
              <h3 className="text-xl md:text-[24px] font-bold text-[#1D4B73]">Adresse</h3>
              <div className="space-y-2">
                <p className="text-sm md:text-base text-gray-600">{companyName}</p>
                <p className="text-sm md:text-base text-gray-600">{addressStreet}</p>
                <p className="text-sm md:text-base text-gray-600">{addressCity}</p>
              </div>
            </div>

            {/* Contact */}
            <div className="text-center space-y-4 animate-fade-in-up animation-delay-200">
              <h3 className="text-xl md:text-[24px] font-bold text-[#1D4B73]">Kontakt</h3>
              <div className="space-y-2">
                <p className="text-sm md:text-base text-gray-600">
                  Tel.:{" "}
                  <a
                    href={`tel:+49${contact.phone.replace(/\s/g, '')}`}
                    className="underline text-gray-600 hover:text-[#F2A057] transition-colors duration-200"
                  >
                    {contact.phone}
                  </a>
                  <br />
                  E-mail:{" "}
                  <a
                    href={`mailto:${contact.email}`}
                    className="underline text-gray-600 hover:text-[#F2A057] transition-colors duration-200"
                  >
                    {contact.email}
                  </a>
                </p>
              </div>
            </div>

            {/* Links */}
            <div className="text-center space-y-4 animate-fade-in-up animation-delay-400">
              <h3 className="text-xl md:text-[24px] font-bold text-[#1D4B73]">Weitere Links</h3>
              <div className="space-y-2">
                <Link
                  to={links.impressum}
                  className="underline text-gray-600 hover:text-[#F2A057] transition-colors duration-200 block"
                >
                  Impressum
                </Link>
                <Link
                  to={links.datenschutz}
                  className="underline text-gray-600 hover:text-[#F2A057] transition-colors duration-200 block"
                >
                  Datenschutz
                </Link>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-t border-black my-6 w-full" />
        
        <p className="text-sm md:text-base text-gray-600 text-center">
          © 2025 {companyName}
        </p>
      </section>
    </>
  );
};

export default Bottombar;