import Bottombar from "../components/Bottombar";

const Impressum = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[100vh] bg-gradient-to-r from-blue-50 to-green-50 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/images/Enohm-GmbH-1.jpg" 
            alt="Solar Panels"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center min-h-[60vh] py-12 lg:py-10">
        <div className="max-w-3xl h-[80vh] flex items-center">
  <h1 className="text-2xl sm:text-3xl md:text-[45px] lg:text-5xl font-bold leading-tight text-white">
    Impressum
  </h1>
</div>

          </div>
        </div>
      </section>
     
      {/* Content Section */}
     <section className="lg:py-5 bg-white">
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    
    <h1 className="text-2xl sm:text-3xl md:text-[35px] lg:text-[35px] py-5 font-bold text-[#303133]">
      Impressum
    </h1>
       
          <div className="prose prose-lg max-w-none">
               
            {/* Angaben gemäß § 5 TMG */}
            <div className="mb-12">
              <h1 className="text-[40px] font-custom font-bold text-[#1d4b73] mb-6">Angaben gemäß § 5 TMG</h1>
              <div className="p-6 rounded-lg">
                <p className="text-[#585858] leading-relaxed">
                Enohm GmbH<br/>
                Wallstr. 17<br/>
                  01067 Dresden, Germany
                </p>
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
                  <strong>Telefon:</strong> 015226677700<br/>
                  <strong>E-mail:</strong> info@enohm.de
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