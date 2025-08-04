// There is currently no JavaScript code here.
document.addEventListener('DOMContentLoaded', function() {
  const cards = document.querySelectorAll('.testimonial-card');
  const upBtn = document.querySelector('.arrow-up');
  const downBtn = document.querySelector('.arrow-down');

  function swapCards() {
    cards.forEach(card => {
      card.classList.toggle('card-front');
      card.classList.toggle('card-back');
    });
  }

  upBtn.addEventListener('click', swapCards);
  downBtn.addEventListener('click', swapCards);

  // Translation system
  const translations = {
    pl: {
      // Navigation
      'nav-how-it-works': 'Jak działa',
      'nav-for-clients': 'Dla klientów',
      'nav-contact': 'Kontakt',
      'btn-join-free': 'Dołącz za darmo',
      
      // Hero section
      'hero-tagline': 'NIEZAWODNE USŁUGI LOKALNE. ',
      'hero-title': 'Zweryfikowani fachowcy. Bezpieczne płatności.',
      'hero-description': 'Znajdź sprawdzonego specjalistę w 10 minut. Przeglądaj profile, porównuj ceny i zamawiaj bezpośrednio przez aplikację. FixApp to najprostszy sposób na szybką i bezpieczną naprawę – kiedy tylko jej potrzebujesz.',
      'btn-find-specialist': 'Znajdź Fachowca',
      'btn-become-specialist': 'Zostań Fachowcem',
      
      // Partners section
      'partners-title': 'Zaufali nam',
      
      // Features section
      'features-title': 'Szybko, bezpiecznie, bez stresu.',
      'features-subtitle': 'FixApp to wygoda, której do tej pory brakowało na rynku usług domowych.',
      'feature-1-title': 'ZLECENIA W MNIEJ NIŻ 5 MINUT',
      'feature-1-desc': 'W aplikacji, bez potrzeby rozmów telefonicznych czy spisywania danych',
      'feature-2-title': 'SPRAWDZENI FACHOWCY W TWOJEJ OKOLICY',
      'feature-2-desc': 'Nasz system geo lokalizacji pokaże Ci dostępnych specjalistów w promieniu kilku kilometrów, gotowych do działania',
      'feature-3-title': 'PRZEJRZYSTE CENY BEZ UKRYTYCH KOSZTÓW',
      'feature-3-desc': 'Każda usługa ma jasno określony zakres i widełki cenowe, zanim jeszcze klikniesz "Zamawiam".',
      'feature-4-title': 'REZERWUJESZ KIEDY CHCESZ',
      'feature-4-desc': 'Integracja z kalendarzem pozwala wybrać termin, który naprawdę Ci pasuje',
      'feature-5-title': 'USŁUGI, KTÓRYM MOŻESZ ZAUFAĆ',
      'feature-5-desc': 'Oceniani fachowcy i pełna historia zleceń to koniec nieprzyjemnych niespodzianek.',
      
      // Trust section
      'trust-title': 'Rozwiązanie, które działa.',
      'trust-subtitle': 'FixApp stawia na rzetelność i bezpieczeństwo',
      'trust-item-1-title': 'Zweryfikowani fachowcy',
      'trust-item-1-desc': 'Każdy wykonawca przechodzi proces weryfikacji tożsamości, dokumentów oraz doświadczenia zawodowego.',
      'trust-item-2-title': 'System ocen po każdym zleceniu',
      'trust-item-2-desc': 'Tylko fachowcy z wysokimi notami są wysoko w wynikach. Słabe usługi? Nie mają tu racji bytu.',
      'trust-item-3-title': 'Transparentność to nasz standard',
      'trust-item-3-desc': 'Żadnych ukrytych kosztów ani prowizji po cichu. Wszystko jest jasne, zanim potwierdzisz usługę.',
      'trust-item-4-title': 'Pomoc techniczna 24/7',
      'trust-item-4-desc': 'Czat, infolinia i e-mail – jesteśmy dostępni, gdy tylko czegoś potrzebujesz.',
      
      // Testimonials section
      'testimonials-title': 'Ankietowani mówią sami za siebie.',
      'testimonial-1-text': '"Brak prowizji na start mnie przekonał, u konkurencji płatna subskrypcja to standard."',
      'testimonial-1-author': 'Adam Kowalski',
      'testimonial-1-role': 'Fachowiec',
      'testimonial-2-text': '"Super pomysł, w zasadzie nie kojarzę żadnego miejsca gdzie mogę zamowic rzetelnego fachowca."',
      'testimonial-2-author': 'Karol Wierzbicki',
      'testimonial-2-role': 'Użytkownik',
      
      // Control section
      'control-title': 'To Ty masz kontrolę',
      'control-subtitle': 'Zbudowaliśmy FixApp tak, byś miał kontrolę i bezpieczeństwo na każdym kroku.',
      'control-item-1': 'Pracujemy jedynie z najlepszymi profesjonalistami.',
      'control-item-2': 'Masz możliwość zgłoszenia reklamacji w aplikacji.',
      'control-item-3': 'Masz wpływ na jakość usług – Twoja opinia nie trafia w próżnię.',
      
      // Availability section
      'availability-title': 'Potrzebujesz kogoś na dziś? Nie ma problemu.',
      'availability-subtitle': 'Z FixApp nie musisz planować napraw z wyprzedzeniemXD – nasi fachowcy mają elastyczne grafiki i są gotowi działać, gdy tylko tego potrzebujesz.',
      'availability-item-1-title': 'Termin nawet tego samego dnia',
      'availability-item-1-desc': 'Dostępność w czasie rzeczywistym, również wieczorami i w weekendy.',
      'availability-item-2-title': 'Dopasuj wizytę do swojego planu',
      'availability-item-2-desc': 'Ty wybierasz dzień i godzinę, a my znajdziemy wolnego fachowca.',
      'availability-item-3-title': 'Najlepsi fachowcy znikają jako pierwsi',
      'availability-item-3-desc': 'Zrób to, zanim będzie za późno.',
      'availability-item-4-title': 'Zniżka powitalna',
      'availability-item-4-desc': 'Zostaw coś po sobie i skorzystaj z rabatu na pierwszą usługę. Formularz gwarantujący zniżkę znajdziesz poniżej.',
      
      // Subscribe section
      'subscribe-title': 'Samo się nie naprawi! Zainstaluj FixApp i zrób to po swojemu.',
      'subscribe-subtitle': 'Kliknij. Wybierz termin. Gotowe.',
      'subscribe-desc': 'Zapisz sie do newslettera i OTRZYMAJ 5% ZNIŻKI na pierwszą usługę!',
      'subscribe-email-placeholder': 'Twój email',
      'subscribe-btn': 'Subskrybuj',
      
      // Footer
      'footer-contact': 'Kontakt:',
      'footer-email': 'fixapp.contact@gmail.com'
    },
    en: {
      // Navigation
      'nav-how-it-works': 'How it works',
      'nav-for-clients': 'For clients',
      'nav-contact': 'Contact',
      'btn-join-free': 'Join for free',
      
      // Hero section
      'hero-tagline': 'RELIABLE LOCAL SERVICES.',
      'hero-title': 'Verified specialists. Secure payments.',
      'hero-description': 'Find a verified specialist in 10 minutes. Browse profiles, compare prices and order directly through the app. FixApp is the simplest way to get fast and safe repairs – whenever you need them.',
      'btn-find-specialist': 'Find Specialist',
      'btn-become-specialist': 'Become Specialist',
      
      // Partners section
      'partners-title': 'They trusted us',
      
      // Features section
      'features-title': 'Fast, safe, stress-free.',
      'features-subtitle': 'FixApp is the convenience that was missing from the home services market.',
      'feature-1-title': 'ORDERS IN LESS THAN 5 MINUTES',
      'feature-1-desc': 'In the app, without phone calls or data entry',
      'feature-2-title': 'VERIFIED SPECIALISTS IN YOUR AREA',
      'feature-2-desc': 'Our geolocation system will show you available specialists within a few kilometers, ready to work',
      'feature-3-title': 'TRANSPARENT PRICES WITHOUT HIDDEN COSTS',
      'feature-3-desc': 'Each service has a clearly defined scope and price range before you even click "Order".',
      'feature-4-title': 'BOOK WHENEVER YOU WANT',
      'feature-4-desc': 'Calendar integration allows you to choose a time that really suits you',
      'feature-5-title': 'SERVICES YOU CAN TRUST',
      'feature-5-desc': 'Rated specialists and full order history mean no more unpleasant surprises.',
      
      // Trust section
      'trust-title': 'Solution that works.',
      'trust-subtitle': 'FixApp focuses on reliability and security',
      'trust-item-1-title': 'Verified specialists',
      'trust-item-1-desc': 'Every contractor goes through identity verification, document verification and professional experience verification.',
      'trust-item-2-title': 'Rating system after each order',
      'trust-item-2-desc': 'Only specialists with high ratings are high in results. Poor services? They have no place here.',
      'trust-item-3-title': 'Transparency is our standard',
      'trust-item-3-desc': 'No hidden costs or hidden commissions. Everything is clear before you confirm the service.',
      'trust-item-4-title': '24/7 technical support',
      'trust-item-4-desc': 'Chat, hotline and email – we are available whenever you need something.',
      
      // Testimonials section
      'testimonials-title': 'Survey respondents speak for themselves.',
      'testimonial-1-text': '"No commission at the start convinced me, paid subscription is standard at the competition."',
      'testimonial-1-author': 'Adam Kowalski',
      'testimonial-1-role': 'Specialist',
      'testimonial-2-text': '"Great idea, I basically don\'t know any place where I can order a reliable specialist."',
      'testimonial-2-author': 'Karol Wierzbicki',
      'testimonial-2-role': 'User',
      
      // Control section
      'control-title': 'You have control',
      'control-subtitle': 'We built FixApp so you have control and security at every step.',
      'control-item-1': 'We work only with the best professionals.',
      'control-item-2': 'You can report complaints in the app.',
      'control-item-3': 'You have influence on service quality – your opinion doesn\'t fall on deaf ears.',
      
      // Availability section
      'availability-title': 'Need someone today? No problem.',
      'availability-subtitle': 'With FixApp you don\'t have to plan repairs in advanceXD – our specialists have flexible schedules and are ready to work whenever you need them.',
      'availability-item-1-title': 'Same day appointment',
      'availability-item-1-desc': 'Real-time availability, including evenings and weekends.',
      'availability-item-2-title': 'Match the visit to your schedule',
      'availability-item-2-desc': 'You choose the day and time, and we find an available specialist.',
      'availability-item-3-title': 'The best specialists disappear first',
      'availability-item-3-desc': 'Do it before it\'s too late.',
      'availability-item-4-title': 'Welcome discount',
      'availability-item-4-desc': 'Leave something behind and get a discount on your first service. You\'ll find the discount form below.',
      
      // Subscribe section
      'subscribe-title': 'It won\'t fix itself! Install FixApp and do it your way.',
      'subscribe-subtitle': 'Click. Choose time. Done.',
      'subscribe-desc': 'Sign up for the newsletter and GET 5% DISCOUNT on your first service!',
      'subscribe-email-placeholder': 'Your email',
      'subscribe-btn': 'Subscribe',
      
      // Footer
      'footer-contact': 'Contact:',
      'footer-email': 'fixapp.contact@gmail.com'
    }
  };

  // Function to change language
  function changeLanguage(lang) {
    console.log('Changing language to:', lang);
    const elements = document.querySelectorAll('[data-translate]');
    console.log('Found elements to translate:', elements.length);
    elements.forEach(element => {
      const key = element.getAttribute('data-translate');
      if (translations[lang] && translations[lang][key]) {
        console.log('Translating:', key, 'to:', translations[lang][key]);
        element.textContent = translations[lang][key];
      } else {
        console.log('No translation found for key:', key, 'in language:', lang);
      }
    });
    
    // Handle placeholders
    const placeholderElements = document.querySelectorAll('[data-translate-placeholder]');
    placeholderElements.forEach(element => {
      const key = element.getAttribute('data-translate-placeholder');
      if (translations[lang] && translations[lang][key]) {
        element.placeholder = translations[lang][key];
      }
    });
  }

  // Language selector functionality
  const langSelector = document.querySelector('.lang-selector');
  const langSelectorBtn = document.getElementById('langSelectorBtn');
  const langDropdown = document.getElementById('langDropdown');
  const langOptions = document.querySelectorAll('.lang-option');

  // Function to sync dropdown options with main button
  function syncDropdownWithMainButton() {
    const mainFlag = langSelectorBtn.querySelector('.lang-flag');
    const mainText = langSelectorBtn.querySelector('.lang-text');
    
    // Remove active class from all options
    langOptions.forEach(opt => opt.classList.remove('active'));
    
    // Check which language is currently selected in main button
    if (mainText.textContent === 'EN') {
      langOptions[1].classList.add('active'); // English option
    } else {
      langOptions[0].classList.add('active'); // Polish option
    }
  }

  // Handle language selection
  langOptions.forEach(option => {
    option.addEventListener('click', function(e) {
      e.stopPropagation();
      const selectedLang = this.getAttribute('data-lang');
      
      // Update the main button
      const mainFlag = langSelectorBtn.querySelector('.lang-flag');
      const mainText = langSelectorBtn.querySelector('.lang-text');
      
      if (selectedLang === 'en') {
        mainFlag.src = 'images/uk.svg';
        mainFlag.alt = 'UK flag';
        mainText.textContent = 'EN';
        changeLanguage('en');
      } else {
        mainFlag.src = 'images/1adf2e6dc9d4f089ffa812bc6fe121f072a348b0.png';
        mainFlag.alt = 'Poland flag';
        mainText.textContent = 'PL';
        changeLanguage('pl');
      }
      
      // Update active state
      langOptions.forEach(opt => opt.classList.remove('active'));
      this.classList.add('active');
      
      // Close dropdowns
      langSelector.classList.remove('active');
    });
  });

  // Sync dropdown when opening
  langSelectorBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    syncDropdownWithMainButton();
    langSelector.classList.toggle('active');
  });

  // Close dropdown when clicking outside
  document.addEventListener('click', function(e) {
    if (!langSelector.contains(e.target)) {
      langSelector.classList.remove('active');
    }
  });

  // Set initial active state - English is default
  langOptions[1].classList.add('active');
  changeLanguage('en'); // Set initial language to English
});