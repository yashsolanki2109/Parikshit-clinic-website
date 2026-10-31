// --- SCRIPT 1 ---


// --- SCRIPT 2 ---
// Browser-safe publishable key. Row Level Security must protect table access.
    window.supabaseClient = window.supabase.createClient(
      "https://csygqddvuaivkraxorth.supabase.co",
      "sb_publishable_jVz32GHQxRc5Wi70VlicFg_FRNTIQdO"
    );

// --- SCRIPT 3 ---
// 1. MOBILE MENU: show or hide navigation on smaller screens.
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    menuToggle.addEventListener("click", function () {
      const isOpen = navLinks.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", isOpen);
      menuToggle.textContent = isOpen ? "✕ Close" : "☰ Menu";
    });

    // Close the mobile menu after the visitor selects a link.
    document.querySelectorAll("#navLinks a").forEach(function (link) {
      link.addEventListener("click", function () {
        navLinks.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰ Menu";
      });
    });

    // 2. COPYRIGHT YEAR: update it automatically every year.
    document.getElementById("year").textContent = new Date().getFullYear();

    // 3. APPOINTMENT REQUESTS: save a pending request in Supabase.
    const dateInput = document.getElementById("preferredDate");
    const timeInput = document.getElementById("preferredTime");
    const formStatus = document.getElementById("formStatus");
    const bookButton = document.getElementById("bookButton");
    dateInput.min = new Date().toLocaleDateString("en-CA");

    document.getElementById("appointmentForm").addEventListener("submit", async function (event) {
      event.preventDefault();
      const payload = {
        patient_name: document.getElementById("patientName").value.trim(),
        phone: document.getElementById("patientPhone").value.trim(),
        age: Number(document.getElementById("patientAge").value),
        city: document.getElementById("patientCity").value.trim(),
        department: document.getElementById("department").value,
        treatment: document.getElementById("treatment").value.trim() || null,
        appointment_date: dateInput.value,
        appointment_time: timeInput.value,
        status: "pending"
      };
      if (!payload.patient_name || !payload.phone || !payload.age || !payload.city || !payload.department || !payload.appointment_date || !payload.appointment_time) {
        formStatus.textContent = "Please complete all required fields.";
        return;
      }
      bookButton.disabled = true;
      bookButton.textContent = "Sending request…";
      try {
        const { error } = await window.supabaseClient.from("appointments").insert(payload);
        if (error) throw error;
        formStatus.textContent = "Appointment request sent. The clinic will contact you to confirm the time.";
        document.getElementById("appointmentForm").reset();
        dateInput.min = new Date().toLocaleDateString("en-CA");
      } catch (error) {
        console.error("Appointment request failed:", error);
        formStatus.textContent = error && error.code === "23505"
          ? "That time was just requested by someone else. Please choose another time or call the clinic."
          : "We couldn't send your request. Please call +91 70162 92613.";
      } finally {
        bookButton.disabled = false;
        bookButton.textContent = "Book Appointment";
      }
    });
    // Progressive reveal and expandable service panels (no libraries required).
    const revealTargets = document.querySelectorAll(".section-heading, .department-banner, .trust-card, .service-card, .about-grid, .faq-list, .contact-panel, .form-panel");
    if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      revealTargets.forEach(function (item) { item.classList.add("reveal"); });
      const revealObserver = new IntersectionObserver(function (entries, observer) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target); }
        });
      }, { threshold: 0.12 });
      revealTargets.forEach(function (item) { revealObserver.observe(item); });
    }
    document.querySelectorAll(".service-card").forEach(function (card) {
      card.setAttribute("tabindex", "0");
      card.setAttribute("role", "button");
      card.setAttribute("aria-expanded", "false");
      function toggleCard() {
        const expanded = card.classList.toggle("is-expanded");
        card.setAttribute("aria-expanded", String(expanded));
      }
      card.addEventListener("click", toggleCard);
      card.addEventListener("keydown", function (event) {
        if (event.key === "Enter" || event.key === " ") { event.preventDefault(); toggleCard(); }
      });
    });

    // Subtle 3D pointer tilt on the hero card; disabled for touch and reduced motion.
    const heroDepthCard = document.querySelector(".hero-photo-wrap");
    if (heroDepthCard && window.matchMedia("(hover: hover) and (pointer: fine)").matches && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      heroDepthCard.addEventListener("pointermove", function (event) {
        const bounds = heroDepthCard.getBoundingClientRect();
        const x = (event.clientX - bounds.left) / bounds.width - 0.5;
        const y = (event.clientY - bounds.top) / bounds.height - 0.5;
        heroDepthCard.style.setProperty("--tilt-x", (x * 9) + "deg");
        heroDepthCard.style.setProperty("--tilt-y", (y * -7) + "deg");
      });
      heroDepthCard.addEventListener("pointerleave", function () {
        heroDepthCard.style.setProperty("--tilt-x", "-5deg");
        heroDepthCard.style.setProperty("--tilt-y", "0deg");
      });
    }

// --- SCRIPT 4 ---
// Simple page language selector. Clinical service descriptions stay in English for now.
    (function () {
      const translations = {
        hi: {
          "Home":"होम", "Dental Treatments":"दंत उपचार", "Facial Aesthetics":"फेशियल एस्थेटिक्स", "About Doctor":"डॉक्टर के बारे में", "Contact":"संपर्क",
          "Welcome to PARIKSHIT CLINIC":"PARIKSHIT CLINIC में आपका स्वागत है", "Healthy Smiles.":"स्वस्थ मुस्कान।", "Confident You.":"आत्मविश्वास से भरपूर आप।",
          "Dental, periodontal and facial aesthetic care with a focus on individual needs, thoughtful assessment and patient comfort.":"व्यक्तिगत ज़रूरतों, सावधानीपूर्वक जाँच और आराम को ध्यान में रखकर दंत, मसूड़ों और फेशियल एस्थेटिक्स की देखभाल।",
          "Request an Appointment":"अपॉइंटमेंट का अनुरोध करें", "Explore Treatments":"उपचार देखें", "Your Care, Our Priority":"आपकी देखभाल, हमारी प्राथमिकता", "Dental health & facial aesthetics":"दंत स्वास्थ्य और फेशियल एस्थेटिक्स", "Modern dentistry, delivered with calm and care.":"आधुनिक दंत चिकित्सा, सहजता और देखभाल के साथ।",
          "Our Clinical Services":"हमारी क्लिनिकल सेवाएँ", "Care Designed for Your Needs":"आपकी ज़रूरतों के अनुसार देखभाल", "Explore our two departments and contact us about the services you are interested in.":"हमारे दोनों विभाग देखें और अपनी रुचि की सेवाओं के बारे में संपर्क करें।",
          "Get in Touch":"संपर्क करें", "Contact PARIKSHIT CLINIC":"PARIKSHIT CLINIC से संपर्क करें", "Contact us to ask about our services or request an appointment.":"हमारी सेवाओं के बारे में पूछने या अपॉइंटमेंट का अनुरोध करने के लिए संपर्क करें।",
          "Clinic Information":"क्लिनिक की जानकारी", "Address":"पता", "Phone / WhatsApp":"फोन / WhatsApp", "Email":"ईमेल", "Clinic Hours":"क्लिनिक का समय", "WhatsApp Us":"WhatsApp करें", "Call Clinic":"क्लिनिक को कॉल करें",
          "Please confirm availability before visiting. Do not send sensitive medical information through an unsecured message.":"आने से पहले उपलब्धता की पुष्टि करें। असुरक्षित संदेश में संवेदनशील चिकित्सा जानकारी न भेजें।",
          "Book an Appointment":"अपॉइंटमेंट बुक करें", "Request a preferred date and time. The clinic will contact you to confirm availability.":"अपनी पसंद की तारीख और समय का अनुरोध करें। उपलब्धता की पुष्टि के लिए क्लिनिक आपसे संपर्क करेगा।",
          "Your Name *":"आपका नाम *", "Mobile Number *":"मोबाइल नंबर *", "Age *":"उम्र *", "City *":"शहर *", "Choose a department":"विभाग चुनें", "Dental Treatments":"दंत उपचार", "Facial Aesthetics & Cosmetic Treatments":"फेशियल एस्थेटिक्स और कॉस्मेटिक उपचार",
          "Treatment / reason for visit":"उपचार / आने का कारण", "Appointment date *":"अपॉइंटमेंट की तारीख *", "Choose a 30-minute time slot *":"30 मिनट का समय चुनें *", "Choose a time":"समय चुनें", "Morning":"सुबह", "Evening":"शाम",
          "Each slot is 30 minutes. The clinic will contact you to confirm availability.":"हर स्लॉट 30 मिनट का है। उपलब्धता की पुष्टि के लिए क्लिनिक आपसे संपर्क करेगा।", "Book Appointment":"अपॉइंटमेंट बुक करें", "Your request remains pending until the clinic confirms it.":"क्लिनिक की पुष्टि होने तक आपका अनुरोध लंबित रहेगा।",
          "Please complete all required fields.":"कृपया सभी ज़रूरी फ़ील्ड भरें।", "Sending request…":"अनुरोध भेजा जा रहा है…", "Appointment request sent. The clinic will contact you to confirm the time.":"अपॉइंटमेंट अनुरोध भेज दिया गया है। समय की पुष्टि के लिए क्लिनिक आपसे संपर्क करेगा।", "That time was just requested by someone else. Please choose another time or call the clinic.":"यह समय अभी किसी और ने अनुरोध किया है। कृपया दूसरा समय चुनें या क्लिनिक को कॉल करें।", "We couldn't send your request. Please call +91 70162 92613.":"आपका अनुरोध नहीं भेजा जा सका। कृपया +91 70162 92613 पर कॉल करें।",
          "Dental Care · Periodontics · Facial Aesthetics":"दंत देखभाल · मसूड़ों का उपचार · फेशियल एस्थेटिक्स", "Dr. Jinal Parmar | Vadodara, Gujarat":"डॉ. जिनल परमार | वडोदरा, गुजरात"
        },
        gu: {
          "Home":"હોમ", "Dental Treatments":"દાંતની સારવાર", "Facial Aesthetics":"ફેશિયલ એસ્થેટિક્સ", "About Doctor":"ડૉક્ટર વિશે", "Contact":"સંપર્ક",
          "Welcome to PARIKSHIT CLINIC":"PARIKSHIT CLINIC માં આપનું સ્વાગત છે", "Healthy Smiles.":"સ્વસ્થ સ્મિત.", "Confident You.":"આત્મવિશ્વાસથી ભરપૂર તમે.",
          "Dental, periodontal and facial aesthetic care with a focus on individual needs, thoughtful assessment and patient comfort.":"વ્યક્તિગત જરૂરિયાતો, યોગ્ય તપાસ અને દર્દીના આરામને ધ્યાનમાં રાખીને દાંત, પેઢાં અને ફેશિયલ એસ્થેટિક્સની સંભાળ.",
          "Request an Appointment":"અપોઇન્ટમેન્ટ માટે વિનંતી કરો", "Explore Treatments":"સારવારો જુઓ", "Your Care, Our Priority":"તમારી સંભાળ, અમારી પ્રાથમિકતા", "Dental health & facial aesthetics":"દાંતનું સ્વાસ્થ્ય અને ફેશિયલ એસ્થેટિક્સ", "Modern dentistry, delivered with calm and care.":"શાંતિ અને કાળજી સાથે આધુનિક દંતચિકિત્સા.",
          "Our Clinical Services":"અમારી ક્લિનિકલ સેવાઓ", "Care Designed for Your Needs":"તમારી જરૂરિયાત મુજબની સંભાળ", "Explore our two departments and contact us about the services you are interested in.":"અમારા બંને વિભાગો જુઓ અને તમને રસ હોય તેવી સેવાઓ માટે સંપર્ક કરો.",
          "Get in Touch":"સંપર્ક કરો", "Contact PARIKSHIT CLINIC":"PARIKSHIT CLINIC નો સંપર્ક કરો", "Contact us to ask about our services or request an appointment.":"અમારી સેવાઓ વિશે પૂછવા અથવા અપોઇન્ટમેન્ટ માટે વિનંતી કરવા સંપર્ક કરો.",
          "Clinic Information":"ક્લિનિકની માહિતી", "Address":"સરનામું", "Phone / WhatsApp":"ફોન / WhatsApp", "Email":"ઈમેલ", "Clinic Hours":"ક્લિનિકનો સમય", "WhatsApp Us":"WhatsApp કરો", "Call Clinic":"ક્લિનિકમાં ફોન કરો",
          "Please confirm availability before visiting. Do not send sensitive medical information through an unsecured message.":"આવતા પહેલાં ઉપલબ્ધતાની ખાતરી કરો. અસુરક્ષિત સંદેશામાં સંવેદનશીલ તબીબી માહિતી મોકલશો નહીં.",
          "Book an Appointment":"અપોઇન્ટમેન્ટ બુક કરો", "Request a preferred date and time. The clinic will contact you to confirm availability.":"તમારી પસંદગીની તારીખ અને સમય માટે વિનંતી કરો. ઉપલબ્ધતાની ખાતરી કરવા ક્લિનિક તમારો સંપર્ક કરશે.",
          "Your Name *":"તમારું નામ *", "Mobile Number *":"મોબાઇલ નંબર *", "Age *":"ઉંમર *", "City *":"શહેર *", "Choose a department":"વિભાગ પસંદ કરો", "Dental Treatments":"દાંતની સારવાર", "Facial Aesthetics & Cosmetic Treatments":"ફેશિયલ એસ્થેટિક્સ અને કોસ્મેટિક સારવાર",
          "Treatment / reason for visit":"સારવાર / મુલાકાતનું કારણ", "Appointment date *":"અપોઇન્ટમેન્ટની તારીખ *", "Choose a 30-minute time slot *":"30 મિનિટનો સમય પસંદ કરો *", "Choose a time":"સમય પસંદ કરો", "Morning":"સવાર", "Evening":"સાંજ",
          "Each slot is 30 minutes. The clinic will contact you to confirm availability.":"દરેક સ્લોટ 30 મિનિટનો છે. ઉપલબ્ધતાની ખાતરી કરવા ક્લિનિક તમારો સંપર્ક કરશે.", "Book Appointment":"અપોઇન્ટમેન્ટ બુક કરો", "Your request remains pending until the clinic confirms it.":"ક્લિનિક ખાતરી ન કરે ત્યાં સુધી તમારી વિનંતી પેન્ડિંગ રહેશે.",
          "Please complete all required fields.":"કૃપા કરીને બધા જરૂરી ખાના भरो.", "Sending request…":"વિનંતી મોકલાઈ રહી છે…", "Appointment request sent. The clinic will contact you to confirm the time.":"અપોઇન્ટમેન્ટની વિનંતી મોકલાઈ છે. સમયની ખાતરી કરવા ક્લિનિક તમારો સંપર્ક કરશે.", "That time was just requested by someone else. Please choose another time or call the clinic.":"આ સમય માટે હમણાં જ બીજા કોઈએ વિનંતી કરી છે. કૃપા કરીને બીજો સમય પસંદ કરો અથવા ક્લિનિકમાં ફોન કરો.", "We couldn't send your request. Please call +91 70162 92613.":"તમારી વિનંતી મોકલી શકાઈ નથી. કૃપા કરીને +91 70162 92613 પર ફોન કરો.",
          "Dental Care · Periodontics · Facial Aesthetics":"દાંતની સંભાળ · પેઢાંની સારવાર · ફેશિયલ એસ્થેટિક્સ", "Dr. Jinal Parmar | Vadodara, Gujarat":"ડૉ. જિનલ પરમાર | વડોદરા, ગુજરાત"
        }
      };
      const picker = document.getElementById("languagePicker");
      const original = new WeakMap();
      function applyLanguage(language) {
        document.documentElement.lang = language === "hi" ? "hi" : language === "gu" ? "gu" : "en";
        const dictionary = translations[language] || {};
        const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
        let node;
        while ((node = walker.nextNode())) {
          if (!original.has(node)) original.set(node, node.nodeValue);
          const current = node.nodeValue.trim().replace(/\s+/g, " ");
          let source = original.get(node) || "";
          if (!source.trim()) {
            source = current;
            for (const [english, translated] of Object.entries(dictionary)) {
              if (translated === current) { source = english; break; }
            }
            if (source) original.set(node, source);
          }
          source = source.trim().replace(/\s+/g, " ");
          const replacement = language === "en" ? source : (dictionary[source] || source);
          if (current && replacement !== current) node.nodeValue = node.nodeValue.replace(node.nodeValue.trim(), replacement);
        }
        document.querySelectorAll("input[placeholder]").forEach(function (input) {
          if (!input.dataset.placeholderEn) input.dataset.placeholderEn = input.placeholder;
          const translated = dictionary[input.dataset.placeholderEn];
          input.placeholder = language === "en" ? input.dataset.placeholderEn : (translated || input.dataset.placeholderEn);
        });
        localStorage.setItem("clinicLanguage", language);
      }
      const observer = new MutationObserver(function (changes) {
        const language = picker.value;
        const dictionary = translations[language] || {};
        changes.forEach(function (change) {
          const nodes = [];
          if (change.type === "characterData") nodes.push(change.target);
          change.addedNodes.forEach(function (added) {
            if (added.nodeType === Node.TEXT_NODE) nodes.push(added);
            else if (added.nodeType === Node.ELEMENT_NODE) {
              const walker = document.createTreeWalker(added, NodeFilter.SHOW_TEXT);
              let item;
              while ((item = walker.nextNode())) nodes.push(item);
            }
          });
          nodes.forEach(function (node) {
            const current = node.nodeValue.trim().replace(/\s+/g, " ");
            if (dictionary[current]) node.nodeValue = node.nodeValue.replace(node.nodeValue.trim(), dictionary[current]);
          });
        });
      });
      observer.observe(document.body, { subtree: true, childList: true, characterData: true });
      picker.addEventListener("change", function () { applyLanguage(picker.value); });
      picker.value = localStorage.getItem("clinicLanguage") || "en";
      applyLanguage(picker.value);
    })();

