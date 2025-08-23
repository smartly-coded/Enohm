import { Link } from "react-router-dom";

const  Bottombar =()=>{
    return(
        <>
              {/* Logo Section */}
          <div className="w-full max-w-md mx-auto mt-8 px-4">
  <img 
    src="/images/cropped-gif.webp" 
    alt="Enohm GmbH Logo" 
    className="w-1/2 h-auto object-contain mx-auto"
  />
</div>

         <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Address */}
            <div className="text-center space-y-4 animate-fade-in-up">
              <h3 className="text-xl md:text-[24px] font-bold text-[#1D4B73]">Adresse</h3>
              <div className="space-y-2">
                <p className="text-sm md:text-base text-gray-600">Enohm GmbH</p>
                <p className="text-sm md:text-base text-gray-600">Wallstr. 17</p>
                <p className="text-sm md:text-base text-gray-600">01067 Dresden</p>
              </div>
            </div>

            {/* Contact */}
            <div className="text-center space-y-4 animate-fade-in-up animation-delay-200">
              <h3 className="text-xl md:text-[24px] font-bold text-[#1D4B73]">Kontakt</h3>
     <div className="space-y-2">
  <p className="text-sm md:text-base text-gray-600">
    Tel.:{" "}
    <a
      href="tel:+4915226677700"
      className="underline text-gray-600 hover:text-[#F2A057] transition-colors duration-200"
    >
      0152 266 777 00
    </a>
    <br />
    E-mail:{" "}
    <a
      href="mailto:info@enohm.de"
      className="underline text-gray-600 hover:text-[#F2A057] transition-colors duration-200"
    >
      info@enohm.de
    </a>
  </p>
</div>

            </div>

            {/* Links */}
            <div className="text-center space-y-4 animate-fade-in-up animation-delay-400">
              <h3 className="text-xl md:text-[24px] font-bold text-[#1D4B73]">Weitere Links</h3>
              <div className="space-y-2">
    <Link 
      to="/impressum" 
        className="underline text-gray-600 hover:text-[#F2A057] transition-colors duration-200"
    >
     <p> Impressum</p>
    </Link>
    <Link 
      to="/datenschutz" 
       className="underline text-gray-600 hover:text-[#F2A057] transition-colors duration-200"
    >
      Datenschutz
    </Link>
  </div>
 
            </div>
     
          </div>
   
        </div>
                 <hr className="border-t border-black my-6 w-full" />
                 <p className="text-sm md:text-base text-gray-600 text-center">© 2025 Enohm GmbH</p>
      </section></>
    )
};
export default Bottombar;