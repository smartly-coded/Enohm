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

interface DatenschutzData {
  id: number;
  title: string;
  telefone: string;
  email: string;
  Adresse: string;
  heroImage: ImageData;
}

interface DatenschutzPageData {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  Datenschutez: DatenschutzData;
}

interface ApiResponse {
  data: DatenschutzPageData;
  meta: Record<string, any>;
}

const Datenschutz = () => {
  const [pageData, setPageData] = useState<DatenschutzPageData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDatenschutzData = async () => {
      try {
        const response = await fetch(
          "http://localhost:1337/api/datenschutz?&populate[Datenschutez][populate]=*"
        );
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data: ApiResponse = await response.json();
        setPageData(data.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching datenschutz data:", err);
        setError(err instanceof Error ? err.message : "An error occurred");
        setLoading(false);
      }
    };

    fetchDatenschutzData();
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
  const { Datenschutez } = pageData;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
        <section className="relative min-h-[50vh] sm:min-h-[70vh] md:min-h-screen bg-white overflow-hidden">
   <div className="absolute top-0 left-0 w-full h-[50vh] sm:h-full">   
    <img 
      src={`http://localhost:1337${Datenschutez.heroImage?.url || '/images/Enohm-GmbH-1.jpg'}`}
      alt={Datenschutez.heroImage?.alternativeText || "Solar Panels"}
      className="w-full h-full object-cover object-top"
      style={{ objectPosition: "50% 30%" }} 
    />
     
  </div>
        
       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center min-h-[60vh] sm:min-h-[70vh] md:min-h-screen py-8 sm:py-12 lg:py-20">
        <div className="max-w-3xl space-y-6  lg:space-y-8 ">              
<h1 className="text-2xl sm:text-2xl md:text-[45px] lg:text-4xl font-bold text-white drop-shadow-lg animate-fade-in-up leading-snug md:leading-[55px]">
  {Datenschutez?.title }
</h1></div></div></div>
      </section>

      {/* Content Section */}
      <section className="py-12 bg-white">
        <div className="max-w-none mx-auto px-0">
          <div className="space-y-12">
            
            {/* 1. Datenschutz auf einen Blick */}
            <div>
              <h2 className="text-2xl font-bold text-[#1d4b73] mb-6">1. Datenschutz auf einen Blick</h2>
              
              {/* a. Allgemeine Hinweise */}
              <div className="mb-8">
                <h3 className="text-[16px] text-[#585858] mb-4"><strong>a. Allgemeine Hinweise</strong></h3>
                <p className="text-[#585858] leading-relaxed">
                  Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
                </p>
              </div>

              {/* b. Datenerfassung auf dieser Website */}
              <div className="mb-8">
                <h3 className="text-[16px] text-[#585858] mb-4"><strong>b. Datenerfassung auf dieser Website</strong></h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-[#585858] mb-2">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h4>
                    <p className="text-[#585858] leading-relaxed">
                      Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-[#585858] mb-2">Wie erfassen wir Ihre Daten?</h4>
                    <p className="text-[#585858] leading-relaxed mb-3">
                      Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
                    </p>
                    <p className="text-[#585858] leading-relaxed">
                      Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-[#585858] mb-2">Wofür nutzen wir Ihre Daten?</h4>
                    <p className="text-[#585858] leading-relaxed">
                      Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-[#585858] mb-2">Welche Rechte haben Sie bezüglich Ihrer Daten?</h4>
                    <p className="text-[#585858] leading-relaxed">
                      Sie haben jederzeit das Recht unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Details hierzu entnehmen Sie der Datenschutzerklärung unter „Recht auf Einschränkung der Verarbeitung".
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Hosting */}
            <div>
              <h2 className="text-2xl font-bold text-[#1d4b73] mb-6">2. Hosting</h2>
              
              <div>
                <h3 className="text-xl font-bold text-[#585858] mb-4">Externes Hosting</h3>
                <p className="text-[#585858] leading-relaxed mb-4">
                  Diese Website wird bei einem externen Dienstleister gehostet (Hoster). Personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert. Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Webseitenzugriffe und sonstige Daten, die über eine Website generiert werden, handeln.
                </p>
                <p className="text-[#585858] leading-relaxed mb-4">
                  Der Einsatz des Hosters erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO). Unser Hoster wird Ihre Daten nur insoweit verarbeiten, wie dies zur Erfüllung seiner Leistungspflichten erforderlich ist und unsere Weisungen in Bezug auf diese Daten befolgen.
                </p>
                  <p className="font-semibold text-[#585858] mb-2">Als Hoster ist eingesetzt:</p>
                  <p className="text-[#585858]">
                    IONOS SE<br/>
                    Elgendorfer Str. 57<br/>
                    56410 Montabaur
                  </p>
              </div>
            </div>

            {/* 3. Allgemeine Hinweise und Pflichtinformationen */}
            <div>
              <h2 className="text-2xl font-bold text-[#1d4b73] mb-6">3. Allgemeine Hinweise und Pflichtinformationen</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-[#585858] mb-4">Datenschutz</h3>
                  <p className="text-[#585858] leading-relaxed mb-4">
                    Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
                  </p>
                  <p className="text-[#585858] leading-relaxed mb-4">
                    Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.
                  </p>
                  <p className="text-[#585858] leading-relaxed">
                    Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#585858] mb-4">Hinweis zur verantwortlichen Stelle</h3>
                  <p className="text-[#585858] leading-relaxed mb-4">Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
                        <div className="text-[#585858]">
                    {Datenschutez.Adresse.split(' ').map((part, index, array) => {
                      if (part === 'Enohm') {
                        return <span key={index}>{part} {array[index + 1]}<br/></span>;
                      }
                      if (part === 'GmbH') {
                        return null;
                      }
                      if (part === 'Wallstr.') {
                        return <span key={index}>{part} {array[index + 1]} {array[index + 2]} {array[index + 3]} {array[index + 4]}<br/></span>;
                      }
                      if (['17', '01067', 'Dresden,', 'Germany'].includes(part)) {
                        return null;
                      }
                      return null;
                    })}
                    Tel.: <a href={`tel:+49${Datenschutez.telefone}`} className="text-blue-600 hover:underline">{Datenschutez.telefone}</a><br/>
                    E-Mail: <a href={`mailto:${Datenschutez.email}`} className="text-blue-600 hover:underline">{Datenschutez.email}</a>
                  </div>
              
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#585858] mb-4">Gesetzlich vorgeschriebener Datenschutzbeauftragter</h3>
                  <p className="text-[#585858] leading-relaxed mb-4">Wir haben für unser Unternehmen einen Datenschutzbeauftragten bestellt.</p>
                         <div className="text-[#585858]">
                    {Datenschutez.Adresse.split(' ').map((part, index, array) => {
                      if (part === 'Enohm') {
                        return <span key={index}>{part} {array[index + 1]}<br/></span>;
                      }
                      if (part === 'GmbH') {
                        return null;
                      }
                      if (part === 'Wallstr.') {
                        return <span key={index}>{part} {array[index + 1]}, {array[index + 2]} {array[index + 3]}, {array[index + 4]}<br/></span>;
                      }
                      if (['17', '01067', 'Dresden,', 'Germany'].includes(part)) {
                        return null;
                      }
                      return null;
                    })}
                    Tel.: <a href={`tel:+49${Datenschutez.telefone}`} className="text-blue-600 hover:underline">{Datenschutez.telefone}</a><br/>
                    E-Mail: <a href={`mailto:${Datenschutez.email}`} className="text-blue-600 hover:underline">{Datenschutez.email}</a>
                  </div>
              
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#585858] mb-4">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
                  <p className="text-[#585858] leading-relaxed">
                    Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Dazu reicht eine formlose Mitteilung per E-Mail an uns. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#585858] mb-4">Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie gegen Direktwerbung (Art. 21 DSGVO)</h3>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#585858] mb-4">Recht auf Datenübertragbarkeit</h3>
                  <p className="text-[#585858] leading-relaxed">
                    Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich in einem gängigen, maschinenlesbaren Format aushändigen zu lassen.
                  </p>
                </div>
              </div>
            </div>

            {/* 4. Datenerfassung auf dieser Website */}
            <div>
              <h2 className="text-2xl font-bold text-[#1d4b73] mb-6">4. Datenerfassung auf dieser Website</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-[#585858] mb-4">Cookies</h3>
                  <p className="text-[#585858] leading-relaxed mb-4">
                    Die Internetseiten verwenden technische notwendige Cookies. Diese dienen dazu, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen. Cookies sind kleine Textdateien, die auf Ihrem Rechner abgelegt werden und die Ihr Browser speichert.
                  </p>
                  <p className="text-[#585858] leading-relaxed">
                    Soweit andere Cookies gespeichert werden, werden diese in dieser Datenschutzerklärung gesondert behandelt.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#585858] mb-4">Server-Log-Dateien</h3>
                  <p className="text-[#585858] leading-relaxed mb-4">
                    Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
                  </p>
                  <ul className="list-disc list-inside text-[#585858] space-y-1 mb-4 ml-4">
                    <li>Browsertyp und Browserversion</li>
                    <li>verwendetes Betriebssystem</li>
                    <li>Referrer URL</li>
                    <li>Hostname des zugreifenden Rechners</li>
                    <li>Uhrzeit der Serveranfrage</li>
                    <li>IP-Adresse</li>
                  </ul>
                  <p className="text-[#585858] leading-relaxed mb-4">
                    Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.
                  </p>
                  <p className="text-[#585858] leading-relaxed">
                    Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der technisch fehlerfreien Darstellung und der Optimierung seiner Website – hierzu müssen die Server-Log-Files erfasst werden.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#585858] mb-4">Kontaktformular</h3>
                  <p className="text-[#585858] leading-relaxed mb-4">
                    Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                  </p>
                  <p className="text-[#585858] leading-relaxed">
                    Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde. Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben unberührt.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#585858] mb-4">Anfrage per E-Mail, Telefon oder Telefax</h3>
                  <p className="text-[#585858] leading-relaxed mb-4">
                    Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet.
                  </p>
                  <p className="text-[#585858] leading-relaxed">
                    Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) und/oder auf unseren berechtigten Interessen (Art. 6 Abs. 1 lit. f DSGVO), da wir ein berechtigtes Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen haben.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#585858] mb-4">Verarbeiten von Daten (Kunden- und Vertragsdaten)</h3>
                  <p className="text-[#585858] leading-relaxed mb-4">
                    Wir erheben, verarbeiten und nutzen personenbezogene Daten nur, soweit sie für die Begründung, inhaltliche Ausgestaltung oder Änderung des Rechtsverhältnisses erforderlich sind (Bestandsdaten). Dies erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, der die Verarbeitung von Daten zur Erfüllung eines Vertrags oder vorvertraglicher Maßnahmen gestattet. Personenbezogene Daten über die Inanspruchnahme dieser Website (Nutzungsdaten) erheben, verarbeiten und nutzen wir nur, soweit dies erforderlich ist, um dem Nutzer die Inanspruchnahme des Dienstes zu ermöglichen oder abzurechnen.
                  </p>
                  <p className="text-[#585858] leading-relaxed">
                    Die erhobenen Kundendaten werden nach Abschluss des Auftrags oder Beendigung der Geschäftsbeziehung gelöscht. Gesetzliche Aufbewahrungsfristen bleiben unberührt.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#585858] mb-4">Datenübermittlung bei Vertragsschluss für Dienstleistungen und digitale Inhalte</h3>
                  <p className="text-[#585858] leading-relaxed mb-4">
                    Wir übermitteln personenbezogene Daten an Dritte nur dann, wenn dies im Rahmen der Vertragsabwicklung notwendig ist, etwa an das mit der Zahlungsabwicklung beauftragte Kreditinstitut.
                  </p>
                  <p className="text-[#585858] leading-relaxed mb-4">
                    Eine weitergehende Übermittlung der Daten erfolgt nicht bzw. nur dann, wenn Sie der Übermittlung ausdrücklich zugestimmt haben. Eine Weitergabe Ihrer Daten an Dritte ohne ausdrückliche Einwilligung, etwa zu Zwecken der Werbung, erfolgt nicht.
                  </p>
                  <p className="text-[#585858] leading-relaxed">
                    Grundlage für die Datenverarbeitung ist Art. 6 Abs. 1 lit. b DSGVO, der die Verarbeitung von Daten zur Erfüllung eines Vertrags oder vorvertraglicher Maßnahmen gestattet.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#585858] mb-4">Tracking</h3>
                  <p className="text-[#585858] leading-relaxed mb-4">
                    Tracking und Logging (im Folgenden: „WebAnalytics") sind auf dieser Webseite standardmäßig aktiviert.
                  </p>
                  <h4 className="font-semibold text-[#585858] mb-3">Mit welchen Technologien ermittelt die Webseitenbetreiberin die Daten?</h4>
                  <p className="text-[#585858] leading-relaxed mb-4">
                    Die Daten werden entweder durch einen Pixel oder durch ein Logfile ermittelt. Zum Schutz von personenbezogenen Daten verwendet WebAnalytics keine Cookies. Die IP der Besucher:in wird bei der Übermittlung eines Seitenabrufes übertragen, nach der Übermittlung direkt anonymisiert und ohne Personenbezug verarbeitet.
                  </p>
                  <h4 className="font-semibold text-[#585858] mb-3">Welche Daten speichert die Webseitenbetreiberin von mir?</h4>
                  <p className="text-[#585858] leading-relaxed mb-3">
                    Die Webseitenbetreiberin speichert keine personenbezogenen Daten von Websitenbesucher:innen, damit keine Rückschlüsse auf die einzelnen Besucher:innen gezogen werden können. Es werden folgende Daten erhoben:
                  </p>
                  <ul className="list-disc list-inside text-[#585858] space-y-1 mb-4 ml-4">
                    <li>Referrer (zuvor besuchte Webseite)</li>
                    <li>Angeforderte Webseite oder Datei</li>
                    <li>Browsertyp und Browserversion</li>
                    <li>Verwendetes Betriebssystem</li>
                    <li>Verwendeter Gerätetyp</li>
                    <li>Uhrzeit des Zugriffs</li>
                    <li>IP-Adresse in anonymisierter Form (wird nur zur Feststellung des Orts des Zugriffs verwendet)</li>
                  </ul>
                  <h4 className="font-semibold text-[#585858] mb-3">Zu welchem Zweck werden die Daten erhoben?</h4>
                  <p className="text-[#585858] leading-relaxed">
                    In WebAnalytics werden Daten ausschließlich zur statistischen Auswertung und zur technischen Optimierung des Webangebots erhoben.
                  </p>
                </div>
              </div>
            </div>

            {/* 5. Inhalte Dritter auf der Webseite */}
            <div>
              <h2 className="text-2xl font-bold text-[#1d4b73] mb-6">5. Inhalte Dritter auf der Webseite</h2>
              
              <div className="space-y-8">
                <div>
                  <p className="text-[#585858] leading-relaxed mb-6">
                    Unser Internetauftritt integriert Inhalte anderer Anbieter. Dies können reine Content-Elemente (z.B. Nachrichten, Neuigkeiten), aber auch Widgets (Funktionen, wie z.B. Buchungssysteme) oder z.B. Schriften und technische Bibliotheken sein. Dazu gehören auch Google Fonts. Aus technischen Gründen erfolgt dies, indem diese Inhalte vom Browser von anderen Servern geladen werden. In diesem Zusammenhang werden die aktuell von Ihrem Browser verwendete IP und der verwendete Browser des anfragenden Systems übermittelt. Bitte beachten Sie diesbezüglich die jeweiligen Datenschutzerklärungen der Drittanbieter.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#585858] mb-4">OpenStreetMaps</h3>
                  <p className="text-[#585858] leading-relaxed mb-4">
                    Wir nutzen zur Darstellung von Geo-Daten den Open-Source-Karten-Dienst „OpenStreetMaps" (auch „OSM" genannt) der Firma OpenStreetMap Foundation, 132 Maney Hill Road, Sutton Coldfield, West Midlands, B72 1JU, United Kingdom. OSM dient dazu, eine interaktive Karte auf unserer Webseite anzubieten, die Ihnen zeigt, wie Sie uns finden und erreichen können. Dieser Dienst ermöglicht es uns, unsere Webseite ansprechend darzustellen, indem Kartenmaterial von einem externen Server geladen wird.
                  </p>
                  <p className="text-[#585858] leading-relaxed mb-4">
                    Folgende Daten werden bei der Darstellung an die Server von OSM übertragen: Diejenige unserer Internetseiten, die Sie besucht haben, die IP-Adresse Ihres Endgerätes sowie von Ihnen zur Routenplanung eingegebene Daten. Die Rechtsgrundlage für die Verarbeitung Ihrer Daten in Bezug auf den Dienst „OSM" ist Art. 6 Abs. 1 S. 1 Buchstabe f) DSGVO (Berechtigtes Interesse an der Datenverarbeitung). Das berechtigte Interesse ergibt sich aus unserem Bedarf an einer ansprechenden Darstellung unseres Online-Angebots und der leichten Auffindbarkeit der auf unserer Homepage angegebenen Orte.
                  </p>
                  <p className="text-[#585858] leading-relaxed">
                    Mehr Informationen zum Umgang mit Nutzerdaten finden Sie in der Datenschutzerklärung von OSM:{' '}
                    <a 
                      href="https://osmfoundation.org/wiki/Privacy_Policy" 
                      className="text-blue-600 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://osmfoundation.org/wiki/Privacy_Policy
                    </a>
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Bottombar/>
    </div>
  );
};

export default Datenschutz;