// ============================================================
// NEEV — Market Intelligence & Crop Planning
// Complete Multilingual Translation Schema
// ============================================================

const translations = {
  en: {
    page_title: "Neev — AI Market Intelligence & Crop Planning for Indian Farmers",
    nav_features: "Features",
    nav_how: "How It Works",
    nav_impact: "Impact",
    nav_demo: "Demo",
    nav_cta: "Try Demo →",
    hero_eyebrow: "AI · Market Intelligence · Bharat",
    hero_title: "Know the market.<br/>Read the soil.<br/><span class=\"gold-italic\">Grow what pays.</span>",
    hero_lede: "AI-powered crop planning based on historical mandi prices and soil type — so Indian farmers grow what the market actually needs, in Hindi and 21 other languages.",
    hero_cta_live: "See Live Demo →",
    hero_cta_watch: "How It Works",
    stat_underserved: "<span class=\"dot\"></span>7,000+ mandis tracked",
    stat_yield: "<span class=\"dot\"></span>20–30% income gain possible",
    stat_langs: "<span class=\"dot\"></span>22 Indian languages supported",
    scroll_hint: "scroll ↓",
    prob_title: "Why Farmers <span class=\"gold-italic\">Lose Money</span> Every Season",
    prob_sub: "The problem isn't just the crop — it's growing the wrong crop at the wrong time without knowing what the market wants.",
    prob_oversupply_stat: "Oversupply",
    prob_oversupply_title: "Market Blindness",
    prob_oversupply_desc: "When everyone grows wheat after a good year, prices crash. Farmers have no way to see what last year's production data means for this season's prices.",
    prob_soilmatch_stat: "Mismatch",
    prob_soilmatch_title: "Wrong Crop, Wrong Soil",
    prob_soilmatch_desc: "Farmers often grow what their neighbors grow, not what their soil type can optimally produce. A poor soil-crop match means lower yields even with perfect farming.",
    prob_data_stat: "No Data",
    prob_data_title: "Inaccessible Intelligence",
    prob_data_desc: "Mandi price history, production trends, and crop alternatives exist in government portals — but are locked behind English interfaces and require internet and data literacy.",
    how_title: "From Soil Type to <span class=\"gold-italic\">Smart Crop Plan</span>",
    how_sub: "Neev reads historical market data and matches it with your land's soil profile to recommend the most profitable crops for this season.",
    how_step1_title: "Enter Your Land Details",
    how_step1_desc: "Select your state, district, and soil type. No internet or English needed.",
    how_step2_title: "AI Reads Market History",
    how_step2_desc: "Neev pulls 3–5 years of mandi price data and production volumes from Agmarknet & eNAM.",
    how_step3_title: "Oversupply Detection",
    how_step3_desc: "Identifies which crops had high production last year and are likely to fetch lower prices.",
    how_step4_title: "Crop Alternatives Matched",
    how_step4_desc: "Recommends alternative crops that suit your soil type and face less market competition.",
    how_step5_title: "Voice Advisory Delivered",
    how_step5_desc: "Full plan delivered in your language — via voice, WhatsApp, or on-screen text.",
    demo_title: "Try Neev <span class=\"gold-italic\">Right Now</span>",
    demo_sub: "Select your state, soil type, and the crop you planned to grow — Neev will show you what the market data says and what to grow instead.",
    demo_state_label: "State",
    demo_soil_label: "Soil Type",
    demo_planned_crop_label: "Crop You Planned to Grow",
    demo_season_label: "Season",
    state_up: "Uttar Pradesh", state_pb: "Punjab", state_mh: "Maharashtra",
    state_mp: "Madhya Pradesh", state_rj: "Rajasthan", state_hr: "Haryana",
    state_ap: "Andhra Pradesh", state_tn: "Tamil Nadu", state_wb: "West Bengal", state_br: "Bihar",
    soil_alluvial: "Alluvial (Domat)", soil_black: "Black (Regur)", soil_red: "Red & Laterite",
    soil_sandy: "Sandy / Loamy", soil_clay: "Clay / Waterlogged",
    crop_wheat: "Wheat", crop_rice: "Rice / Paddy", crop_sugarcane: "Sugarcane",
    crop_cotton: "Cotton", crop_maize: "Maize", crop_soybean: "Soybean",
    crop_onion: "Onion", crop_tomato: "Tomato",
    season_kharif: "Kharif (Jun–Oct)", season_rabi: "Rabi (Nov–Mar)", season_zaid: "Zaid (Apr–Jun)",
    demo_lang_label: "Language",
    demo_cta: "Get Market Intelligence →",
    adv_empty_title: "Your crop & market intelligence report will appear here.",
    adv_empty_sub: "Pick your inputs and tap <strong>Get Market Intelligence</strong>.",
    feat_title: "Built for <span class=\"gold-italic\">Bharat's Reality</span>",
    feat_sub: "Every feature designed around what Indian smallholder farmers actually have — a cheap smartphone, patchy internet, and years of farming instinct.",
    feat1_title: "Mandi Price History", feat1_desc: "5-year price trends from 7,000+ mandis via Agmarknet & eNAM — shown as simple signals, not spreadsheets.",
    feat2_title: "22 Languages", feat2_desc: "Powered by the Bhashini API — reads and speaks in Hindi, Tamil, Telugu, Bengali, Marathi and more.",
    feat3_title: "Soil-Matched Alternatives", feat3_desc: "Recommends 2–3 alternative crops that fit your exact soil type and have stronger market prospects.",
    feat4_title: "Offline Capable", feat4_desc: "Core recommendations work without internet using cached market data updated weekly via cloud sync.",
    feat5_title: "WhatsApp Delivery", feat5_desc: "Full crop plan sent directly to WhatsApp — the app farmers already use every day.",
    feat6_title: "Government Data Integration", feat6_desc: "Live sync with Agmarknet, eNAM, and ICAR soil databases. Trusted data, simplified delivery.",
    portals_title: "Powered by <span class=\"gold-italic\">Real Government Data</span>",
    portals_sub: "Neev connects to official Indian government data portals so every recommendation is backed by verified, real-world market information.",
    portal1_title: "Agmarknet", portal1_desc: "Daily mandi arrival and price data from 7,000+ agricultural markets across India. Covers 300+ commodities.",
    portal2_title: "eNAM", portal2_desc: "National Agriculture Market — live trading data from 1,000+ mandis. Real-time price discovery across states.",
    portal3_title: "data.gov.in", portal3_desc: "India's open government data platform — crop production statistics, soil health card data, and district-level agricultural reports.",
    portal4_title: "ICAR Knowledge Base", portal4_desc: "Indian Council of Agricultural Research — soil classification maps, crop suitability guides, and agronomic best practices by region.",
    portal5_title: "IMD Weather API", portal5_desc: "India Meteorological Department forecasts — rainfall and temperature predictions by district to factor into seasonal planning.",
    portal6_title: "PM-Kisan / PMFBY", portal6_desc: "Integration with PM-Kisan farmer database and Pradhan Mantri Fasal Bima Yojana for crop insurance eligibility checks.",
    portal_visit: "Visit Portal ↗",
    impact_title: "Impact at <span class=\"gold-italic\">National Scale</span>",
    impact_lbl1: "Target Farmers",
    impact_lbl2: "Mandis Tracked",
    impact_lbl3: "Income Gain Possible",
    impact_lbl4: "Indian Languages",
    tech_title: "Powered By <span class=\"gold-italic\">Cutting-Edge Technology</span>",
    tech_sub: "A production-grade stack built for speed, scale, and rural India's connectivity reality.",
    vision_text: "<span class=\"muted\">Today:</span> Indian smallholders.<br/><span class=\"muted\">Tomorrow:</span> Southeast Asia.<br/><span class=\"gold-italic\">2030:</span> The Global South's largest AI-powered crop market intelligence platform.",
    footer_tagline: "Build. Break. Brighten.",
    footer_meta1: "<strong>The Tech Trinity</strong> — Dhruv · Anshika · Tanish",
    footer_meta2: "MSIT · Hack: The Mind, NSUT · Track ID 6",
    footer_bottom: "© 2026 Neev Prototype"
  },

  hi: {
    page_title: "नींव — भारतीय किसानों के लिए एआई बाज़ार जानकारी और फसल योजना",
    nav_features: "सुविधाएं",
    nav_how: "यह कैसे काम करता है",
    nav_impact: "प्रभाव",
    nav_demo: "डेमो",
    nav_cta: "डेमो देखें →",
    hero_eyebrow: "एआई · बाज़ार जानकारी · भारत",
    hero_title: "बाज़ार को समझें।<br/>मिट्टी को पहचानें।<br/><span class=\"gold-italic\">वही उगाएं जो कमाए।</span>",
    hero_lede: "पिछले सालों के मंडी भावों और मिट्टी के प्रकार के आधार पर एआई फसल सलाह — ताकि किसान वही उगाएं जो बाज़ार को चाहिए, हिंदी और 21 अन्य भाषाओं में।",
    hero_cta_live: "लाइव डेमो देखें →",
    hero_cta_watch: "यह कैसे काम करता है",
    stat_underserved: "<span class=\"dot\"></span>7,000+ मंडियों की जानकारी",
    stat_yield: "<span class=\"dot\"></span>20–30% आमदनी बढ़ाना संभव",
    stat_langs: "<span class=\"dot\"></span>22 भारतीय भाषाओं में उपलब्ध",
    scroll_hint: "नीचे देखें ↓",
    prob_title: "किसान हर सीज़न <span class=\"gold-italic\">पैसा क्यों गंवाते हैं</span>",
    prob_sub: "समस्या सिर्फ फसल की नहीं है — बिना बाज़ार की जानकारी के गलत समय पर गलत फसल उगाना असली समस्या है।",
    prob_oversupply_stat: "अत्यधिक उत्पादन",
    prob_oversupply_title: "बाज़ार की अनजानी",
    prob_oversupply_desc: "जब सब गेहूं उगाते हैं तो दाम गिर जाते हैं। किसानों के पास यह जानने का तरीका नहीं है कि पिछले साल का उत्पादन इस साल के भाव पर क्या असर डालेगा।",
    prob_soilmatch_stat: "बेमेल",
    prob_soilmatch_title: "गलत फसल, गलत मिट्टी",
    prob_soilmatch_desc: "किसान अक्सर वही उगाते हैं जो पड़ोसी उगाता है, न कि जो उनकी मिट्टी के लिए सबसे अच्छा हो। मिट्टी और फसल का मेल न होना पैदावार घटाता है।",
    prob_data_stat: "कोई डेटा नहीं",
    prob_data_title: "जानकारी तक पहुंच नहीं",
    prob_data_desc: "मंडी भाव इतिहास, उत्पादन रुझान और फसल विकल्प सरकारी पोर्टल पर हैं — पर अंग्रेजी, इंटरनेट और डेटा ज्ञान की दीवार के पीछे।",
    how_title: "मिट्टी की पहचान से <span class=\"gold-italic\">सही फसल योजना</span>",
    how_sub: "नींव ऐतिहासिक बाज़ार डेटा पढ़ता है और आपकी मिट्टी के प्रकार से मिलाकर इस सीज़न की सबसे फायदेमंद फसल सुझाता है।",
    how_step1_title: "अपनी ज़मीन की जानकारी दें",
    how_step1_desc: "राज्य, जिला और मिट्टी का प्रकार चुनें। इंटरनेट या अंग्रेजी की ज़रूरत नहीं।",
    how_step2_title: "एआई बाज़ार इतिहास पढ़ता है",
    how_step2_desc: "नींव Agmarknet और eNAM से 3–5 साल के मंडी भाव और उत्पादन आंकड़े लेता है।",
    how_step3_title: "अत्यधिक उत्पादन की पहचान",
    how_step3_desc: "पता लगाता है कि पिछले साल कौन सी फसल ज़्यादा हुई थी जो इस साल सस्ती बिकेगी।",
    how_step4_title: "वैकल्पिक फसलें सुझाई जाती हैं",
    how_step4_desc: "आपकी मिट्टी के अनुकूल और कम बाज़ार प्रतिस्पर्धा वाली 2–3 फसलें सुझाता है।",
    how_step5_title: "आवाज़ में सलाह मिलती है",
    how_step5_desc: "पूरी योजना आपकी भाषा में — आवाज़, WhatsApp या स्क्रीन पर।",
    demo_title: "अभी नींव <span class=\"gold-italic\">आज़माएं</span>",
    demo_sub: "अपना राज्य, मिट्टी और योजनाबद्ध फसल चुनें — नींव बताएगा कि बाज़ार डेटा क्या कहता है और आपको क्या उगाना चाहिए।",
    demo_state_label: "राज्य",
    demo_soil_label: "मिट्टी का प्रकार",
    demo_planned_crop_label: "आपकी योजनाबद्ध फसल",
    demo_season_label: "मौसम",
    state_up: "उत्तर प्रदेश", state_pb: "पंजाब", state_mh: "महाराष्ट्र",
    state_mp: "मध्य प्रदेश", state_rj: "राजस्थान", state_hr: "हरियाणा",
    state_ap: "आंध्र प्रदेश", state_tn: "तमिलनाडु", state_wb: "पश्चिम बंगाल", state_br: "बिहार",
    soil_alluvial: "जलोढ़ मिट्टी (दोमट)", soil_black: "काली मिट्टी (रेगुर)", soil_red: "लाल व लैटेराइट",
    soil_sandy: "रेतीली / दोमट", soil_clay: "चिकनी / जलभराव वाली",
    crop_wheat: "गेहूं", crop_rice: "धान / चावल", crop_sugarcane: "गन्ना",
    crop_cotton: "कपास", crop_maize: "मक्का", crop_soybean: "सोयाबीन",
    crop_onion: "प्याज", crop_tomato: "टमाटर",
    season_kharif: "खरीफ (जून–अक्टूबर)", season_rabi: "रबी (नवंबर–मार्च)", season_zaid: "ज़ायद (अप्रैल–जून)",
    demo_lang_label: "भाषा",
    demo_cta: "बाज़ार जानकारी पाएं →",
    adv_empty_title: "आपकी फसल व बाज़ार जानकारी रिपोर्ट यहाँ दिखाई देगी।",
    adv_empty_sub: "ऊपर जानकारी चुनें और <strong>बाज़ार जानकारी पाएं</strong> दबाएं।",
    feat_title: "भारत की <span class=\"gold-italic\">असली ज़रूरत</span> के लिए",
    feat_sub: "हर सुविधा उन किसानों को ध्यान में रखकर बनाई गई जिनके पास सस्ता फोन, कमज़ोर इंटरनेट और सालों का खेती का अनुभव है।",
    feat1_title: "मंडी भाव इतिहास", feat1_desc: "Agmarknet और eNAM से 7,000+ मंडियों के 5 साल के भाव — सरल संकेतों में, स्प्रेडशीट में नहीं।",
    feat2_title: "22 भाषाएं", feat2_desc: "भाषिणी API से हिंदी, तमिल, तेलुगु, बंगाली, मराठी सहित 22 भाषाओं में।",
    feat3_title: "मिट्टी के अनुसार विकल्प", feat3_desc: "आपकी मिट्टी और बाज़ार के अनुसार 2–3 बेहतर फसलों के सुझाव।",
    feat4_title: "ऑफ़लाइन काम करता है", feat4_desc: "साप्ताहिक अपडेट कैश डेटा से बिना इंटरनेट के काम करता है।",
    feat5_title: "WhatsApp डिलीवरी", feat5_desc: "पूरी फसल योजना सीधे WhatsApp पर — जो किसान रोज़ इस्तेमाल करते हैं।",
    feat6_title: "सरकारी डेटा एकीकरण", feat6_desc: "Agmarknet, eNAM और ICAR मिट्टी डेटाबेस से सीधा जुड़ाव।",
    portals_title: "असली <span class=\"gold-italic\">सरकारी डेटा</span> से संचालित",
    portals_sub: "नींव आधिकारिक भारतीय सरकारी पोर्टल से जुड़ता है ताकि हर सिफारिश सत्यापित डेटा पर आधारित हो।",
    portal1_title: "Agmarknet", portal1_desc: "7,000+ कृषि मंडियों से दैनिक आवक और भाव डेटा। 300+ जिंसों की जानकारी।",
    portal2_title: "eNAM", portal2_desc: "राष्ट्रीय कृषि बाज़ार — 1,000+ मंडियों से लाइव ट्रेडिंग डेटा।",
    portal3_title: "data.gov.in", portal3_desc: "भारत का खुला सरकारी डेटा प्लेटफ़ॉर्म — फसल उत्पादन आंकड़े, मिट्टी स्वास्थ्य कार्ड डेटा।",
    portal4_title: "ICAR ज्ञान आधार", portal4_desc: "भारतीय कृषि अनुसंधान परिषद — मिट्टी वर्गीकरण मानचित्र और क्षेत्रीय फसल उपयुक्तता मार्गदर्शिका।",
    portal5_title: "IMD मौसम API", portal5_desc: "भारत मौसम विज्ञान विभाग — ज़िलेवार वर्षा और तापमान पूर्वानुमान।",
    portal6_title: "PM-Kisan / PMFBY", portal6_desc: "PM-Kisan किसान डेटाबेस और फसल बीमा योजना के साथ एकीकरण।",
    portal_visit: "पोर्टल देखें ↗",
    impact_title: "राष्ट्रीय स्तर पर <span class=\"gold-italic\">प्रभाव</span>",
    impact_lbl1: "लक्षित किसान", impact_lbl2: "मंडियां ट्रैक",
    impact_lbl3: "आमदनी बढ़ाना संभव", impact_lbl4: "भारतीय भाषाएं",
    tech_title: "अत्याधुनिक तकनीक से <span class=\"gold-italic\">सशक्त</span>",
    tech_sub: "गति, व्यापकता और ग्रामीण भारत की कनेक्टिविटी वास्तविकता के लिए बना एक मज़बूत सिस्टम।",
    vision_text: "<span class=\"muted\">आज:</span> भारतीय किसान।<br/><span class=\"muted\">कल:</span> दक्षिण-पूर्व एशिया।<br/><span class=\"gold-italic\">2030:</span> विकासशील देशों का सबसे बड़ा एआई कृषि बाज़ार जानकारी प्लेटफॉर्म।",
    footer_tagline: "मजबूत नींव। समृद्ध किसान।",
    footer_meta1: "<strong>द टेक ट्रिनिटी</strong> — ध्रुव · अंशिका · तनिष",
    footer_meta2: "MSIT · Hack: The Mind, NSUT · Track ID 6",
    footer_bottom: "© 2026 नींव प्रोटोटाइप"
  },

  ta: {
    page_title: "Neev — இந்திய விவசாயிகளுக்கான AI சந்தை நுண்ணறிவு மற்றும் பயிர் திட்டமிடல்",
    nav_features: "அம்சங்கள்",
    nav_how: "செயல்படும் விதம்",
    nav_impact: "தாக்கம்",
    nav_demo: "மாதிரி",
    nav_cta: "மாதிரிப் பார்க்க →",
    hero_eyebrow: "AI · சந்தை நுண்ணறிவு · பாரதம்",
    hero_title: "சந்தையை புரிந்துகொள்ளுங்கள்.<br/>மண்ணை அறிந்துகொள்ளுங்கள்.<br/><span class=\"gold-italic\">லாபம் தரும் பயிரை வளருங்கள்.</span>",
    hero_lede: "கடந்த ஆண்டு சந்தை விலைகள் மற்றும் மண் வகையின் அடிப்படையில் AI பயிர் திட்டமிடல் — தமிழ் மற்றும் 21 மொழிகளில்.",
    hero_cta_live: "நேரடி மாதிரிப் பார்க்க →",
    hero_cta_watch: "எப்படி செயல்படுகிறது",
    stat_underserved: "<span class=\"dot\"></span>7,000+ சந்தைகள் கண்காணிக்கப்படுகின்றன",
    stat_yield: "<span class=\"dot\"></span>20–30% வருமான உயர்வு சாத்தியம்",
    stat_langs: "<span class=\"dot\"></span>22 இந்திய மொழிகளில் ஆதரவு",
    scroll_hint: "கீழே செல்லவும் ↓",
    prob_title: "விவசாயிகள் ஒவ்வொரு பருவமும் <span class=\"gold-italic\">பணம் இழப்பது ஏன்</span>",
    prob_sub: "சிக்கல் பயிரில் மட்டுமல்ல — சந்தை தேவை தெரியாமல் தவறான நேரத்தில் தவறான பயிரை வளர்ப்பதே உண்மையான சிக்கல்.",
    prob_oversupply_stat: "அதிக உற்பத்தி",
    prob_oversupply_title: "சந்தை குருட்டுத்தன்மை",
    prob_oversupply_desc: "எல்லோரும் கோதுமை பயிரிட்டால் விலை வீழ்ச்சியடையும். கடந்த ஆண்டு உற்பத்தி இந்த ஆண்டு விலையை எப்படி பாதிக்கும் என்று தெரியாது.",
    prob_soilmatch_stat: "பொருத்தமின்மை",
    prob_soilmatch_title: "தவறான பயிர், தவறான மண்",
    prob_soilmatch_desc: "விவசாயிகள் பெரும்பாலும் அண்டை வீட்டினர் பயிரிடுவதை செய்கின்றனர். மண்ணுக்கு ஏற்ற பயிரை தேர்ந்தெடுக்காவிட்டால் மகசூல் குறையும்.",
    prob_data_stat: "தரவு இல்லை",
    prob_data_title: "அணுகல் இல்லாத தகவல்",
    prob_data_desc: "சந்தை விலை வரலாறு, உற்பத்தி போக்குகள் அரசு தளங்களில் உள்ளன — ஆனால் ஆங்கிலம் மற்றும் இணையம் தேவை.",
    how_title: "மண் வகையிலிருந்து <span class=\"gold-italic\">சிறந்த பயிர் திட்டம்</span>",
    how_sub: "Neev வரலாற்று சந்தை தரவை படித்து உங்கள் மண் வகையுடன் பொருத்தி இந்த பருவத்தில் லாபகரமான பயிர்களை பரிந்துரைக்கிறது.",
    how_step1_title: "நிலத்தின் விவரங்களை உள்ளிடவும்",
    how_step1_desc: "மாநிலம், மாவட்டம் மற்றும் மண் வகையை தேர்ந்தெடுக்கவும்.",
    how_step2_title: "AI சந்தை வரலாற்றை படிக்கிறது",
    how_step2_desc: "Agmarknet மற்றும் eNAM-இலிருந்து 3–5 ஆண்டுகளின் விலை தரவை பெறுகிறது.",
    how_step3_title: "அதிக உற்பத்தி கண்டறிதல்",
    how_step3_desc: "கடந்த ஆண்டு அதிக உற்பத்தி ஆன பயிர்களை கண்டறிந்து குறைந்த விலை எச்சரிக்கை அளிக்கிறது.",
    how_step4_title: "மாற்று பயிர்கள் பரிந்துரை",
    how_step4_desc: "உங்கள் மண் வகைக்கு ஏற்ற மற்றும் சந்தையில் நல்ல வாய்ப்பு உள்ள பயிர்களை பரிந்துரைக்கிறது.",
    how_step5_title: "குரல் ஆலோசனை வழங்கப்படுகிறது",
    how_step5_desc: "முழு திட்டமும் உங்கள் மொழியில் — குரல், WhatsApp அல்லது திரையில்.",
    demo_title: "இப்போதே Neev <span class=\"gold-italic\">முயல்க</span>",
    demo_sub: "மாநிலம், மண் வகை மற்றும் திட்டமிட்ட பயிரை தேர்ந்தெடுக்கவும் — Neev சந்தை தரவும் மாற்று பரிந்துரையும் காட்டும்.",
    demo_state_label: "மாநிலம்",
    demo_soil_label: "மண் வகை",
    demo_planned_crop_label: "நீங்கள் திட்டமிட்ட பயிர்",
    demo_season_label: "பருவம்",
    state_up: "உத்தரப் பிரதேசம்", state_pb: "பஞ்சாப்", state_mh: "மகாராஷ்டிரா",
    state_mp: "மத்தியப் பிரதேசம்", state_rj: "ராஜஸ்தான்", state_hr: "ஹரியானா",
    state_ap: "ஆந்திரப் பிரதேசம்", state_tn: "தமிழ்நாடு", state_wb: "மேற்கு வங்காளம்", state_br: "பீகார்",
    soil_alluvial: "வண்டல் மண் (தோமட்)", soil_black: "கரிசல் மண்", soil_red: "செம்மண் & லேட்டரைட்",
    soil_sandy: "மணல் / இலகு மண்", soil_clay: "களிமண் / தண்ணீர் தேங்கும் நிலம்",
    crop_wheat: "கோதுமை", crop_rice: "நெல்", crop_sugarcane: "கரும்பு",
    crop_cotton: "பருத்தி", crop_maize: "மக்காச்சோளம்", crop_soybean: "சோயாபீன்",
    crop_onion: "வெங்காயம்", crop_tomato: "தக்காளி",
    season_kharif: "காரிஃப் (ஜூன்–அக்டோபர்)", season_rabi: "ரபி (நவம்பர்–மார்ச்)", season_zaid: "ஜாயித் (ஏப்ரல்–ஜூன்)",
    demo_lang_label: "மொழி",
    demo_cta: "சந்தை நுண்ணறிவு பெறுக →",
    adv_empty_title: "உங்கள் பயிர் மற்றும் சந்தை நுண்ணறிவு அறிக்கை இங்கே தோன்றும்.",
    adv_empty_sub: "விவரங்களை தேர்ந்தெடுத்து <strong>சந்தை நுண்ணறிவு பெறுக</strong> அழுத்தவும்.",
    feat_title: "நமது விவசாயிகளுக்காக <span class=\"gold-italic\">உருவாக்கப்பட்டது</span>",
    feat_sub: "மலிவான ஸ்மார்ட்போன், பலவீனமான இணையம் மற்றும் ஆண்டுகள் நீடித்த விவசாய அனுபவம் கொண்ட விவசாயிகளுக்காக.",
    feat1_title: "சந்தை விலை வரலாறு", feat1_desc: "Agmarknet மற்றும் eNAM-இலிருந்து 7,000+ சந்தைகளின் 5 ஆண்டு விலை போக்குகள்.",
    feat2_title: "22 மொழிகள்", feat2_desc: "Bhashini API மூலம் தமிழ், இந்தி, தெலுங்கு உட்பட 22 மொழிகளில்.",
    feat3_title: "மண்ணுக்கு ஏற்ற மாற்று பயிர்கள்", feat3_desc: "உங்கள் மண் வகை மற்றும் சந்தை வாய்ப்புகளுக்கு ஏற்ப 2–3 பயிர்கள் பரிந்துரை.",
    feat4_title: "ஆஃப்லைன் திறன்", feat4_desc: "வாராந்திர புதுப்பிக்கப்பட்ட தரவுடன் இணையம் இல்லாமலும் செயல்படும்.",
    feat5_title: "WhatsApp டெலிவரி", feat5_desc: "முழு பயிர் திட்டமும் நேரடியாக WhatsApp-ல்.",
    feat6_title: "அரசு தரவு ஒருங்கிணைப்பு", feat6_desc: "Agmarknet, eNAM மற்றும் ICAR தரவுகளுடன் நேரடி இணைப்பு.",
    portals_title: "உண்மையான <span class=\"gold-italic\">அரசு தரவால்</span> இயங்குகிறது",
    portals_sub: "Neev அதிகாரப்பூர்வ இந்திய அரசு தளங்களுடன் இணைக்கப்பட்டுள்ளது.",
    portal1_title: "Agmarknet", portal1_desc: "இந்தியா முழுவதும் 7,000+ சந்தைகளிலிருந்து தினசரி விலை தரவு. 300+ பொருட்கள் உள்ளடக்கியது.",
    portal2_title: "eNAM", portal2_desc: "தேசிய வேளாண் சந்தை — 1,000+ சந்தைகளிலிருந்து நேரடி வர்த்தக தரவு.",
    portal3_title: "data.gov.in", portal3_desc: "இந்தியாவின் திறந்த அரசு தரவு தளம் — பயிர் உற்பத்தி புள்ளிவிவரங்கள் மற்றும் மண் ஆரோக்கிய அட்டை தரவு.",
    portal4_title: "ICAR அறிவுத் தளம்", portal4_desc: "இந்திய விவசாய ஆராய்ச்சி கவுன்சில் — மண் வகைப்படுத்தல் மற்றும் பயிர் பொருத்தம் வழிகாட்டி.",
    portal5_title: "IMD வானிலை API", portal5_desc: "இந்திய வானியல் துறை — மாவட்டம் வாரியான மழை மற்றும் வெப்பநிலை முன்னறிவிப்பு.",
    portal6_title: "PM-Kisan / PMFBY", portal6_desc: "PM-Kisan விவசாயி தரவுத்தளம் மற்றும் பயிர் காப்பீடு தகுதி சரிபார்ப்பு.",
    portal_visit: "தளம் பார்க்க ↗",
    impact_title: "தேசிய அளவிலான <span class=\"gold-italic\">தாக்கம்</span>",
    impact_lbl1: "இலக்கு விவசாயிகள்", impact_lbl2: "சந்தைகள் கண்காணிப்பு",
    impact_lbl3: "வருமான உயர்வு சாத்தியம்", impact_lbl4: "இந்திய மொழிகள்",
    tech_title: "நவீன தொழில்நுட்பத்தால் <span class=\"gold-italic\">வலுவூட்டப்பட்டது</span>",
    tech_sub: "வேகம், நம்பகத்தன்மை மற்றும் கிராமப்புற இணைய நிலைமைகளுக்கு ஏற்ற தரமான அமைப்பு.",
    vision_text: "<span class=\"muted\">இன்று:</span> இந்திய விவசாயிகள்.<br/><span class=\"muted\">நாளை:</span> தென்கிழக்கு ஆசியா.<br/><span class=\"gold-italic\">2030:</span> வளரும் நாடுகளின் மிகப்பெரிய AI வேளாண் சந்தை நுண்ணறிவு தளம்.",
    footer_tagline: "வலுவான அடித்தளம். செழிப்பான விவசாயி.",
    footer_meta1: "<strong>The Tech Trinity</strong> — துருவ் · அன்ஷிகா · தனிஷ்",
    footer_meta2: "MSIT · Hack: The Mind, NSUT · Track ID 6",
    footer_bottom: "© 2026 Neev மாதிரிப் பதிப்பு"
  },

  te: {
    page_title: "Neev — భారతీయ రైతుల కోసం AI మార్కెట్ ఇంటెలిజెన్స్ మరియు పంట ప్రణాళిక",
    nav_features: "లక్షణాలు",
    nav_how: "ఇది ఎలా పనిచేస్తుంది",
    nav_impact: "ప్రభావం",
    nav_demo: "డెమో",
    nav_cta: "డెమో చూడండి →",
    hero_eyebrow: "AI · మార్కెట్ ఇంటెలిజెన్స్ · భారత్",
    hero_title: "మార్కెట్‌ను అర్థం చేసుకోండి.<br/>నేలను చదవండి.<br/><span class=\"gold-italic\">లాభం ఇచ్చే పంట పండించండి.</span>",
    hero_lede: "చారిత్రక మండి ధరలు మరియు నేల రకాన్ని బట్టి AI పంట ప్రణాళిక — తెలుగు మరియు 21 ఇతర భాషలలో.",
    hero_cta_live: "లైవ్ డెమో చూడండి →",
    hero_cta_watch: "ఇది ఎలా పనిచేస్తుంది",
    stat_underserved: "<span class=\"dot\"></span>7,000+ మండీలు ట్రాక్ చేయబడ్డాయి",
    stat_yield: "<span class=\"dot\"></span>20–30% ఆదాయ పెరుగుదల సాధ్యం",
    stat_langs: "<span class=\"dot\"></span>22 భారతీయ భాషలలో అందుబాటు",
    scroll_hint: "క్రిందికి స్క్రోల్ చేయండి ↓",
    prob_title: "రైతులు ప్రతి సీజన్‌లో <span class=\"gold-italic\">డబ్బు ఎందుకు కోల్పోతారు</span>",
    prob_sub: "సమస్య పంటతో మాత్రమే కాదు — మార్కెట్ అవసరం తెలియకుండా తప్పు సమయంలో తప్పు పంట వేయడమే అసలు సమస్య.",
    prob_oversupply_stat: "అధిక ఉత్పత్తి",
    prob_oversupply_title: "మార్కెట్ గురించి అవగాహన లేకపోవడం",
    prob_oversupply_desc: "అందరూ గోధుమ వేస్తే ధర పడిపోతుంది. గత సంవత్సరం ఉత్పత్తి ఈ సీజన్ ధరపై ఏ ప్రభావం చూపుతుందో తెలుసుకోవడం రైతులకు కష్టం.",
    prob_soilmatch_stat: "అసమతుల్యత",
    prob_soilmatch_title: "తప్పు పంట, తప్పు నేల",
    prob_soilmatch_desc: "రైతులు తరచూ పొరుగువారు పండించేది పండిస్తారు, తమ నేల రకానికి అనుకూలమైనది కాదు. నేల-పంట అసమతుల్యత దిగుబడిని తగ్గిస్తుంది.",
    prob_data_stat: "డేటా లేదు",
    prob_data_title: "అందుబాటులో లేని సమాచారం",
    prob_data_desc: "మండి ధర చరిత్ర, ఉత్పత్తి ధోరణులు ప్రభుత్వ పోర్టల్‌లలో ఉన్నాయి — కానీ ఇంగ్లీష్, ఇంటర్నెట్ అవసరం.",
    how_title: "నేల రకం నుండి <span class=\"gold-italic\">స్మార్ట్ పంట ప్రణాళిక</span>",
    how_sub: "Neev చారిత్రక మార్కెట్ డేటాను చదివి మీ నేల ప్రొఫైల్‌తో సరిపోల్చి లాభదాయకమైన పంటలను సూచిస్తుంది.",
    how_step1_title: "మీ భూమి వివరాలు నమోదు చేయండి",
    how_step1_desc: "రాష్ట్రం, జిల్లా మరియు నేల రకాన్ని ఎంచుకోండి.",
    how_step2_title: "AI మార్కెట్ చరిత్రను చదువుతుంది",
    how_step2_desc: "Agmarknet & eNAM నుండి 3–5 సంవత్సరాల మండి ధర డేటాను తీసుకుంటుంది.",
    how_step3_title: "అధిక ఉత్పత్తి గుర్తింపు",
    how_step3_desc: "గత సంవత్సరం ఏ పంటలు అధికంగా పండాయో గుర్తించి తక్కువ ధర హెచ్చరిక ఇస్తుంది.",
    how_step4_title: "ప్రత్యామ్నాయ పంటలు సూచించబడతాయి",
    how_step4_desc: "మీ నేల రకానికి అనుకూలమైన మరియు మంచి మార్కెట్ అవకాశాలున్న పంటలు సూచిస్తుంది.",
    how_step5_title: "వాయిస్ సలహా అందించబడుతుంది",
    how_step5_desc: "పూర్తి ప్రణాళిక మీ భాషలో — వాయిస్, WhatsApp లేదా స్క్రీన్‌పై.",
    demo_title: "ఇప్పుడే Neev <span class=\"gold-italic\">ప్రయత్నించండి</span>",
    demo_sub: "రాష్ట్రం, నేల రకం మరియు మీరు వేయాలనుకున్న పంట ఎంచుకోండి — Neev మార్కెట్ డేటా మరియు ప్రత్యామ్నాయాలు చూపిస్తుంది.",
    demo_state_label: "రాష్ట్రం",
    demo_soil_label: "నేల రకం",
    demo_planned_crop_label: "మీరు ప్లాన్ చేసిన పంట",
    demo_season_label: "సీజన్",
    state_up: "ఉత్తర ప్రదేశ్", state_pb: "పంజాబ్", state_mh: "మహారాష్ట్ర",
    state_mp: "మధ్యప్రదేశ్", state_rj: "రాజస్థాన్", state_hr: "హర్యానా",
    state_ap: "ఆంధ్రప్రదేశ్", state_tn: "తమిళనాడు", state_wb: "పశ్చిమ బెంగాల్", state_br: "బీహార్",
    soil_alluvial: "ఒండ్రు నేల (దోమట్)", soil_black: "నల్లరేగడి నేల", soil_red: "ఎర్ర & లాటరైట్",
    soil_sandy: "ఇసుక / లోమీ", soil_clay: "జిగట / నీరు నిలిచే నేల",
    crop_wheat: "గోధుమ", crop_rice: "వరి / ధాన్యం", crop_sugarcane: "చెరకు",
    crop_cotton: "పత్తి", crop_maize: "మొక్కజొన్న", crop_soybean: "సోయాబీన్",
    crop_onion: "ఉల్లిపాయ", crop_tomato: "టమాటో",
    season_kharif: "ఖరీఫ్ (జూన్–అక్టోబర్)", season_rabi: "రబీ (నవంబర్–మార్చి)", season_zaid: "జైద్ (ఏప్రిల్–జూన్)",
    demo_lang_label: "భాష",
    demo_cta: "మార్కెట్ ఇంటెలిజెన్స్ పొందండి →",
    adv_empty_title: "మీ పంట మరియు మార్కెట్ ఇంటెలిజెన్స్ నివేదిక ఇక్కడ కనిపిస్తుంది.",
    adv_empty_sub: "వివరాలు ఎంచుకుని <strong>మార్కెట్ ఇంటెలిజెన్స్ పొందండి</strong> నొక్కండి.",
    feat_title: "మన రైతుల <span class=\"gold-italic\">అవసరాల కోసం</span>",
    feat_sub: "చౌక స్మార్ట్‌ఫోన్, అస్థిర ఇంటర్నెట్ మరియు సంవత్సరాల వ్యవసాయ అనుభవం ఉన్న రైతుల కోసం రూపొందించబడింది.",
    feat1_title: "మండి ధర చరిత్ర", feat1_desc: "Agmarknet మరియు eNAM నుండి 7,000+ మండీల 5 సంవత్సరాల ధర ధోరణులు.",
    feat2_title: "22 భాషలు", feat2_desc: "Bhashini API ద్వారా తెలుగు, హిందీ, తమిళం సహా 22 భాషలలో.",
    feat3_title: "నేలకు తగిన పంట ప్రత్యామ్నాయాలు", feat3_desc: "మీ నేల రకానికి అనుకూలమైన మరియు మంచి మార్కెట్ అవకాశాలున్న 2–3 పంటలు సూచిస్తుంది.",
    feat4_title: "ఆఫ్‌లైన్ సామర్థ్యం", feat4_desc: "వారంవారీ అప్‌డేట్ చేయబడిన కాష్ డేటాతో ఇంటర్నెట్ లేకుండా పనిచేస్తుంది.",
    feat5_title: "WhatsApp డెలివరీ", feat5_desc: "పూర్తి పంట ప్రణాళిక నేరుగా WhatsApp కు పంపబడుతుంది.",
    feat6_title: "ప్రభుత్వ డేటా ఇంటిగ్రేషన్", feat6_desc: "Agmarknet, eNAM మరియు ICAR డేటాబేస్‌లతో నేరడు అనుసంధానం.",
    portals_title: "నిజమైన <span class=\"gold-italic\">ప్రభుత్వ డేటాతో</span> నడపబడుతోంది",
    portals_sub: "Neev అధికారిక భారత ప్రభుత్వ పోర్టల్‌లతో అనుసంధానించబడి ఉంది.",
    portal1_title: "Agmarknet", portal1_desc: "భారతదేశంలో 7,000+ వ్యవసాయ మార్కెట్‌ల నుండి రోజువారీ ధర డేటా.",
    portal2_title: "eNAM", portal2_desc: "జాతీయ వ్యవసాయ మార్కెట్ — 1,000+ మండీల నుండి లైవ్ ట్రేడింగ్ డేటా.",
    portal3_title: "data.gov.in", portal3_desc: "భారత ప్రభుత్వ ఓపెన్ డేటా ప్లాట్‌ఫారమ్ — పంట ఉత్పత్తి గణాంకాలు మరియు నేల ఆరోగ్య కార్డు డేటా.",
    portal4_title: "ICAR నాలెడ్జ్ బేస్", portal4_desc: "భారతీయ వ్యవసాయ పరిశోధన మండలి — నేల వర్గీకరణ మరియు పంట అనుకూలత గైడ్.",
    portal5_title: "IMD వెదర్ API", portal5_desc: "భారత వాతావరణ శాఖ — జిల్లా వారీ వర్షపాతం మరియు ఉష్ణోగ్రత అంచనాలు.",
    portal6_title: "PM-Kisan / PMFBY", portal6_desc: "PM-Kisan రైతు డేటాబేస్ మరియు పంట బీమా అర్హత తనిఖీ.",
    portal_visit: "పోర్టల్ చూడండి ↗",
    impact_title: "జాతీయ స్థాయిలో <span class=\"gold-italic\">ప్రభావం</span>",
    impact_lbl1: "లక్ష్య రైతులు", impact_lbl2: "ట్రాక్ చేసిన మండీలు",
    impact_lbl3: "ఆదాయ పెరుగుదల సాధ్యం", impact_lbl4: "భారతీయ భాషలు",
    tech_title: "అత్యాధునిక సాంకేతికతలో <span class=\"gold-italic\">శక్తివంతం</span>",
    tech_sub: "వేగం, విశ్వసనీయత మరియు గ్రామీణ భారత కనెక్టివిటీ వాస్తవికతకు అనుకూలంగా నిర్మించబడింది.",
    vision_text: "<span class=\"muted\">నేడు:</span> భారతీయ రైతులు.<br/><span class=\"muted\">రేపు:</span> ఆగ్నేయాసియా.<br/><span class=\"gold-italic\">2030:</span> వర్ధమాన దేశాల అతిపెద్ద AI వ్యవసాయ మార్కెట్ ఇంటెలిజెన్స్ ప్లాట్‌ఫారమ్.",
    footer_tagline: "బలమైన పునాది. సంపన్న రైతు.",
    footer_meta1: "<strong>The Tech Trinity</strong> — ధ్రువ్ · అన్షికా · తనిష్",
    footer_meta2: "MSIT · Hack: The Mind, NSUT · Track ID 6",
    footer_bottom: "© 2026 Neev నమూనా వెర్షన్"
  },

  bn: {
    page_title: "Neev — ভারতীয় কৃষকদের জন্য AI বাজার তথ্য ও ফসল পরিকল্পনা",
    nav_features: "বৈশিষ্ট্য",
    nav_how: "কার্যপ্রণালী",
    nav_impact: "প্রভাব",
    nav_demo: "ডেমো",
    nav_cta: "ডেমো দেখুন →",
    hero_eyebrow: "এআই · বাজার তথ্য · ভারত",
    hero_title: "বাজার বুঝুন।<br/>মাটি চিনুন।<br/><span class=\"gold-italic\">লাভজনক ফসল ফলান।</span>",
    hero_lede: "গত বছরের মান্ডি দাম ও মাটির ধরনের ভিত্তিতে AI ফসল পরিকল্পনা — বাংলা ও আরও ২১টি ভাষায়।",
    hero_cta_live: "লাইভ ডেমো দেখুন →",
    hero_cta_watch: "কীভাবে কাজ করে",
    stat_underserved: "<span class=\"dot\"></span>৭,০০০+ মান্ডি ট্র্যাক করা হচ্ছে",
    stat_yield: "<span class=\"dot\"></span>২০–৩০% আয় বৃদ্ধি সম্ভব",
    stat_langs: "<span class=\"dot\"></span>২২টি ভারতীয় ভাষায় উপলব্ধ",
    scroll_hint: "নিচে স্ক্রোল করুন ↓",
    prob_title: "কৃষকরা প্রতি মৌসুমে <span class=\"gold-italic\">কেন ক্ষতিগ্রস্ত হন</span>",
    prob_sub: "সমস্যাটি শুধু ফসলে নয় — বাজারের চাহিদা না জেনে ভুল সময়ে ভুল ফসল চাষ করাই আসল সমস্যা।",
    prob_oversupply_stat: "অতিরিক্ত উৎপাদন",
    prob_oversupply_title: "বাজার সম্পর্কে অজ্ঞতা",
    prob_oversupply_desc: "সবাই গম চাষ করলে দাম পড়ে যায়। গত বছরের উৎপাদন এই মৌসুমের দামে কী প্রভাব ফেলবে তা কৃষকরা জানতে পারেন না।",
    prob_soilmatch_stat: "অমিল",
    prob_soilmatch_title: "ভুল ফসল, ভুল মাটি",
    prob_soilmatch_desc: "কৃষকরা প্রায়ই প্রতিবেশীরা যা চাষ করেন তা-ই করেন, মাটির জন্য উপযুক্ত ফসল নয়। মাটি-ফসলের অমিলে ফলন কমে।",
    prob_data_stat: "তথ্য নেই",
    prob_data_title: "অপ্রাপ্য তথ্য",
    prob_data_desc: "মান্ডি দামের ইতিহাস সরকারি পোর্টালে আছে — কিন্তু ইংরেজি ও ইন্টারনেটের প্রাচীরের আড়ালে।",
    how_title: "মাটির ধরন থেকে <span class=\"gold-italic\">স্মার্ট ফসল পরিকল্পনা</span>",
    how_sub: "Neev ঐতিহাসিক বাজার তথ্য পড়ে আপনার মাটির সাথে মিলিয়ে এই মৌসুমের সবচেয়ে লাভজনক ফসল সুপারিশ করে।",
    how_step1_title: "জমির তথ্য দিন",
    how_step1_desc: "রাজ্য, জেলা ও মাটির ধরন নির্বাচন করুন।",
    how_step2_title: "AI বাজারের ইতিহাস পড়ে",
    how_step2_desc: "Agmarknet ও eNAM থেকে ৩–৫ বছরের মান্ডি দাম তথ্য সংগ্রহ করে।",
    how_step3_title: "অতিরিক্ত উৎপাদন শনাক্তকরণ",
    how_step3_desc: "গত বছর কোন ফসল বেশি হয়েছিল এবং এবার কম দাম পেতে পারে তা খুঁজে বের করে।",
    how_step4_title: "বিকল্প ফসল সুপারিশ",
    how_step4_desc: "আপনার মাটির উপযুক্ত ও ভালো বাজার সম্ভাবনার ২–৩টি ফসল সুপারিশ করে।",
    how_step5_title: "ভয়েস পরামর্শ পৌঁছে দেওয়া হয়",
    how_step5_desc: "সম্পূর্ণ পরিকল্পনা আপনার ভাষায় — ভয়েস, WhatsApp বা স্ক্রিনে।",
    demo_title: "এখনই Neev <span class=\"gold-italic\">পরীক্ষা করুন</span>",
    demo_sub: "রাজ্য, মাটির ধরন ও পরিকল্পিত ফসল বেছে নিন — Neev বাজার তথ্য ও বিকল্প দেখাবে।",
    demo_state_label: "রাজ্য",
    demo_soil_label: "মাটির ধরন",
    demo_planned_crop_label: "আপনার পরিকল্পিত ফসল",
    demo_season_label: "মৌসুম",
    state_up: "উত্তরপ্রদেশ", state_pb: "পাঞ্জাব", state_mh: "মহারাষ্ট্র",
    state_mp: "মধ্যপ্রদেশ", state_rj: "রাজস্থান", state_hr: "হরিয়ানা",
    state_ap: "অন্ধ্রপ্রদেশ", state_tn: "তামিলনাড়ু", state_wb: "পশ্চিমবঙ্গ", state_br: "বিহার",
    soil_alluvial: "পলিমাটি (দোআঁশ)", soil_black: "কালো মাটি (রেগুর)", soil_red: "লাল ও ল্যাটেরাইট",
    soil_sandy: "বালুমাটি / দোআঁশ", soil_clay: "এঁটেল / জলাবদ্ধ জমি",
    crop_wheat: "গম", crop_rice: "ধান / চাল", crop_sugarcane: "আখ",
    crop_cotton: "তুলা", crop_maize: "ভুট্টা", crop_soybean: "সয়াবিন",
    crop_onion: "পেঁয়াজ", crop_tomato: "টমেটো",
    season_kharif: "খরিফ (জুন–অক্টোবর)", season_rabi: "রবি (নভেম্বর–মার্চ)", season_zaid: "জায়েদ (এপ্রিল–জুন)",
    demo_lang_label: "ভাষা",
    demo_cta: "বাজার তথ্য পান →",
    adv_empty_title: "আপনার ফসল ও বাজার তথ্য প্রতিবেদন এখানে দেখাবে।",
    adv_empty_sub: "তথ্য নির্বাচন করে <strong>বাজার তথ্য পান</strong> বাটনে চাপুন।",
    feat_title: "আমাদের কৃষকদের <span class=\"gold-italic\">জন্য তৈরি</span>",
    feat_sub: "সস্তা স্মার্টফোন, দুর্বল ইন্টারনেট এবং বছরের পর বছরের কৃষি অভিজ্ঞতা সম্পন্ন কৃষকদের জন্য।",
    feat1_title: "মান্ডি দামের ইতিহাস", feat1_desc: "Agmarknet ও eNAM থেকে ৭,০০০+ মান্ডির ৫ বছরের দামের ধারা।",
    feat2_title: "২২টি ভাষা", feat2_desc: "Bhashini API দ্বারা বাংলা, হিন্দি, তামিল সহ ২২টি ভাষায়।",
    feat3_title: "মাটি-অনুযায়ী বিকল্প ফসল", feat3_desc: "মাটির ধরন ও বাজার সম্ভাবনা বিবেচনায় ২–৩টি ফসল সুপারিশ।",
    feat4_title: "অফলাইন কার্যকর", feat4_desc: "সাপ্তাহিক আপডেট ক্যাশ তথ্য দিয়ে ইন্টারনেট ছাড়াও কাজ করে।",
    feat5_title: "WhatsApp ডেলিভারি", feat5_desc: "সম্পূর্ণ পরিকল্পনা সরাসরি WhatsApp-এ।",
    feat6_title: "সরকারি তথ্য সংযুক্তি", feat6_desc: "Agmarknet, eNAM ও ICAR ডেটাবেসের সাথে সরাসরি সংযোগ।",
    portals_title: "বাস্তব <span class=\"gold-italic\">সরকারি তথ্যে</span> চালিত",
    portals_sub: "Neev সরকারি পোর্টালের সাথে সংযুক্ত যাতে প্রতিটি সুপারিশ যাচাইকৃত তথ্যভিত্তিক হয়।",
    portal1_title: "Agmarknet", portal1_desc: "ভারতজুড়ে ৭,০০০+ কৃষি বাজার থেকে দৈনিক দাম তথ্য। ৩০০+ পণ্য অন্তর্ভুক্ত।",
    portal2_title: "eNAM", portal2_desc: "জাতীয় কৃষি বাজার — ১,০০০+ মান্ডি থেকে লাইভ ট্রেডিং তথ্য।",
    portal3_title: "data.gov.in", portal3_desc: "ভারতের উন্মুক্ত সরকারি তথ্য প্ল্যাটফর্ম — ফসল উৎপাদন পরিসংখ্যান ও মাটি স্বাস্থ্য কার্ড তথ্য।",
    portal4_title: "ICAR নলেজ বেস", portal4_desc: "ভারতীয় কৃষি গবেষণা পরিষদ — মাটি শ্রেণিবিভাগ ও ফসল উপযুক্ততা নির্দেশিকা।",
    portal5_title: "IMD আবহাওয়া API", portal5_desc: "ভারত আবহাওয়া বিভাগ — জেলা অনুযায়ী বৃষ্টিপাত ও তাপমাত্রার পূর্বাভাস।",
    portal6_title: "PM-Kisan / PMFBY", portal6_desc: "PM-Kisan কৃষক ডেটাবেস ও ফসল বিমা যোগ্যতা যাচাই।",
    portal_visit: "পোর্টাল দেখুন ↗",
    impact_title: "জাতীয় স্তরে <span class=\"gold-italic\">প্রভাব</span>",
    impact_lbl1: "লক্ষ্য কৃষক", impact_lbl2: "ট্র্যাক করা মান্ডি",
    impact_lbl3: "আয় বৃদ্ধি সম্ভব", impact_lbl4: "ভারতীয় ভাষা",
    tech_title: "অত্যাধুনিক প্রযুক্তিতে <span class=\"gold-italic\">সমৃদ্ধ</span>",
    tech_sub: "গতি, নির্ভরযোগ্যতা এবং গ্রামীণ ভারতের সংযোগ বাস্তবতার জন্য নির্মিত।",
    vision_text: "<span class=\"muted\">আজ:</span> ভারতীয় কৃষক।<br/><span class=\"muted\">আগামীকাল:</span> দক্ষিণ-পূর্ব এশিয়া।<br/><span class=\"gold-italic\">২০৩০:</span> বিশ্বের বৃহত্তম AI কৃষি বাজার তথ্য প্ল্যাটফর্ম।",
    footer_tagline: "মজবুত ভিত্তি। সমৃদ্ধ কৃষক।",
    footer_meta1: "<strong>The Tech Trinity</strong> — ধ্রুব · অংশিকা · তনিশ",
    footer_meta2: "MSIT · Hack: The Mind, NSUT · Track ID 6",
    footer_bottom: "© ২০২6 Neev প্রোটোটাইপ"
  },

  mr: {
    page_title: "नींव — भारतीय शेतकऱ्यांसाठी एआय बाजार माहिती व पीक नियोजन",
    nav_features: "वैशिष्ट्ये",
    nav_how: "हे कसे काम करते",
    nav_impact: "प्रभाव",
    nav_demo: "डेमो",
    nav_cta: "डेमो पहा →",
    hero_eyebrow: "एआय · बाजार माहिती · भारत",
    hero_title: "बाजार समजून घ्या.<br/>माती ओळखा.<br/><span class=\"gold-italic\">फायदेशीर पीक घ्या.</span>",
    hero_lede: "मागील वर्षाच्या मंडई भावांवर आणि मातीच्या प्रकारावर आधारित एआय पीक नियोजन — मराठी आणि इतर २१ भाषांमध्ये।",
    hero_cta_live: "थेट डेमो पहा →",
    hero_cta_watch: "हे कसे काम करते",
    stat_underserved: "<span class=\"dot\"></span>७,०००+ मंडया ट्रॅक केल्या",
    stat_yield: "<span class=\"dot\"></span>२०–३०% उत्पन्नवाढ शक्य",
    stat_langs: "<span class=\"dot\"></span>22 भारतीय भाषांमध्ये उपलब्ध",
    scroll_hint: "खाली स्क्रोल करा ↓",
    prob_title: "शेतकरी प्रत्येक हंगामात <span class=\"gold-italic\">पैसे का गमावतात</span>",
    prob_sub: "समस्या फक्त पिकात नाही — बाजाराची गरज न समजता चुकीच्या वेळी चुकीचे पीक घेणे हीच खरी अडचण आहे.",
    prob_oversupply_stat: "अतिउत्पादन",
    prob_oversupply_title: "बाजाराची अनोळखी",
    prob_oversupply_desc: "सगळे गहू लावतात तेव्हा भाव पडतात. मागील वर्षाचे उत्पादन यंदाच्या भावावर काय परिणाम करेल हे शेतकऱ्यांना कळत नाही.",
    prob_soilmatch_stat: "जुळणी नाही",
    prob_soilmatch_title: "चुकीचे पीक, चुकीची माती",
    prob_soilmatch_desc: "शेतकरी बहुतेक वेळा शेजारी जे करतो तेच करतो. मातीला योग्य पीक न घेतल्यास उत्पन्न घटते.",
    prob_data_stat: "माहिती नाही",
    prob_data_title: "दुर्गम माहिती",
    prob_data_desc: "मंडई भाव इतिहास, उत्पादन कल सरकारी पोर्टलवर आहेत — पण इंग्रजी आणि इंटरनेटच्या भिंतीमागे.",
    how_title: "मातीच्या प्रकारापासून <span class=\"gold-italic\">स्मार्ट पीक योजना</span>",
    how_sub: "नींव ऐतिहासिक बाजार डेटा वाचतो आणि तुमच्या मातीशी जुळवून या हंगामातील सर्वात फायदेशीर पिके सुचवतो.",
    how_step1_title: "तुमच्या जमिनीची माहिती द्या",
    how_step1_desc: "राज्य, जिल्हा आणि मातीचा प्रकार निवडा.",
    how_step2_title: "एआय बाजार इतिहास वाचतो",
    how_step2_desc: "Agmarknet आणि eNAM मधून ३–५ वर्षांचा मंडई भाव डेटा घेतो.",
    how_step3_title: "अतिउत्पादन ओळखणे",
    how_step3_desc: "मागील वर्षी कोणते पीक जास्त झाले होते आणि यंदा कमी दर मिळण्याची शक्यता काय हे सांगतो.",
    how_step4_title: "पर्यायी पिके सुचवली जातात",
    how_step4_desc: "तुमच्या मातीस अनुकूल आणि बाजारात कमी स्पर्धा असलेली २–३ पिके सुचवतो.",
    how_step5_title: "आवाजात सल्ला दिला जातो",
    how_step5_desc: "संपूर्ण योजना तुमच्या भाषेत — आवाज, WhatsApp किंवा स्क्रीनवर.",
    demo_title: "आत्ताच नींव <span class=\"gold-italic\">वापरून पहा</span>",
    demo_sub: "राज्य, माती आणि नियोजित पीक निवडा — नींव बाजार डेटा आणि पर्याय दाखवेल.",
    demo_state_label: "राज्य",
    demo_soil_label: "मातीचा प्रकार",
    demo_planned_crop_label: "तुमचे नियोजित पीक",
    demo_season_label: "हंगाम",
    state_up: "उत्तर प्रदेश", state_pb: "पंजाब", state_mh: "महाराष्ट्र",
    state_mp: "मध्य प्रदेश", state_rj: "राजस्थान", state_hr: "हरियाणा",
    state_ap: "आंध्र प्रदेश", state_tn: "तामिळनाडू", state_wb: "पश्चिम बंगाल", state_br: "बिहार",
    soil_alluvial: "गाळाची माती (दोमट)", soil_black: "काळी माती (रेगुर)", soil_red: "लाल व लॅटेराइट",
    soil_sandy: "वाळूमिश्रित / दोमट", soil_clay: "चिकणमाती / पाणी साचणारी",
    crop_wheat: "गहू", crop_rice: "भात / धान", crop_sugarcane: "उस",
    crop_cotton: "कापूस", crop_maize: "मका", crop_soybean: "सोयाबीन",
    crop_onion: "कांदा", crop_tomato: "टोमॅटो",
    season_kharif: "खरीप (जून–ऑक्टोबर)", season_rabi: "रब्बी (नोव्हेंबर–मार्च)", season_zaid: "उन्हाळी (एप्रिल–जून)",
    demo_lang_label: "भाषा",
    demo_cta: "बाजार माहिती मिळवा →",
    adv_empty_title: "तुमची पीक व बाजार माहिती अहवाल येथे दिसेल.",
    adv_empty_sub: "माहिती निवडा आणि <strong>बाजार माहिती मिळवा</strong> दाबा.",
    feat_title: "आपल्या बळीराजासाठी <span class=\"gold-italic\">बनवलेले</span>",
    feat_sub: "स्वस्त स्मार्टफोन, कमकुवत इंटरनेट आणि वर्षानुवर्षांचा शेतीचा अनुभव असलेल्या शेतकऱ्यांसाठी.",
    feat1_title: "मंडई भाव इतिहास", feat1_desc: "Agmarknet आणि eNAM मधून ७,०००+ मंडयांचे ५ वर्षांचे भाव कल.",
    feat2_title: "22 भाषा", feat2_desc: "भाषिणी API द्वारे मराठी, हिंदी, तमिळ सह २२ भाषांमध्ये.",
    feat3_title: "मातीनुसार पर्यायी पिके", feat3_desc: "तुमच्या मातीस योग्य आणि चांगल्या बाजारभावाची शक्यता असलेली २–३ पिके.",
    feat4_title: "ऑफलाइन क्षमता", feat4_desc: "साप्ताहिक अपडेट केलेल्या कॅश डेटासह इंटरनेटशिवाय काम करते.",
    feat5_title: "WhatsApp वर डिलिव्हरी", feat5_desc: "संपूर्ण पीक योजना थेट WhatsApp वर.",
    feat6_title: "सरकारी डेटा एकत्रीकरण", feat6_desc: "Agmarknet, eNAM आणि ICAR डेटाबेसशी थेट जोडणी.",
    portals_title: "खऱ्या <span class=\"gold-italic\">सरकारी डेटाने</span> चालवलेले",
    portals_sub: "नींव अधिकृत भारतीय सरकारी पोर्टलशी जोडलेले आहे.",
    portal1_title: "Agmarknet", portal1_desc: "भारतभर ७,०००+ कृषी बाजारांमधून दैनिक भाव डेटा. ३०० पेक्षा जास्त वस्तू.",
    portal2_title: "eNAM", portal2_desc: "राष्ट्रीय कृषी बाजार — १,०००+ मंडयांमधून थेट व्यापार डेटा.",
    portal3_title: "data.gov.in", portal3_desc: "भारताचे मुक्त सरकारी डेटा प्लॅटफॉर्म — पीक उत्पादन आकडेवारी आणि माती आरोग्य कार्ड डेटा.",
    portal4_title: "ICAR ज्ञानकोश", portal4_desc: "भारतीय कृषी संशोधन परिषद — माती वर्गीकरण नकाशे आणि क्षेत्रीय पीक योग्यता मार्गदर्शिका.",
    portal5_title: "IMD हवामान API", portal5_desc: "भारतीय हवामान खाते — जिल्हानिहाय पाऊस आणि तापमान अंदाज.",
    portal6_title: "PM-Kisan / PMFBY", portal6_desc: "PM-Kisan शेतकरी डेटाबेस आणि पीक विमा पात्रता तपासणी.",
    portal_visit: "पोर्टल पहा ↗",
    impact_title: "राष्ट्रीय स्तरावर <span class=\"gold-italic\">प्रभाव</span>",
    impact_lbl1: "लक्षित शेतकरी", impact_lbl2: "ट्रॅक केलेल्या मंडया",
    impact_lbl3: "उत्पन्नवाढ शक्य", impact_lbl4: "भारतीय भाषा",
    tech_title: "अत्याधुनिक तंत्रज्ञानाने <span class=\"gold-italic\">सक्षम</span>",
    tech_sub: "गती, विश्वासार्हता आणि ग्रामीण भारताच्या कनेक्टिव्हिटी वास्तवासाठी बांधलेले.",
    vision_text: "<span class=\"muted\">आज:</span> भारतीय शेतकरी.<br/><span class=\"muted\">उद्या:</span> दक्षिण-पूर्व आशिया.<br/><span class=\"gold-italic\">2030:</span> विकसनशील देशांचा सर्वात मोठा एआय कृषी बाजार माहिती प्लॅटफॉर्म.",
    footer_tagline: "भक्कम पाया. समृद्ध बळीराजा.",
    footer_meta1: "<strong>The Tech Trinity</strong> — ध्रुव · अंशिका · तनिष",
    footer_meta2: "MSIT · Hack: The Mind, NSUT · Track ID 6",
    footer_bottom: "© 2026 नींव प्रोटोटाइप"
  }
};

// ============================================================
// LANGUAGE META (for advisory card labels)
// ============================================================
const langMeta = {
  en: { name: "English", advTag: "Market Intelligence", marketLabel: "Market Signal", altLabel: "Recommended Alternatives", reasonLabel: "Why This Season", listenBtn: "🔊 Listen in English", playingBtn: "▶ Playing audio…" },
  hi: { name: "हिंदी", advTag: "बाज़ार जानकारी", marketLabel: "बाज़ार संकेत", altLabel: "सुझाई गई फसलें", reasonLabel: "इस सीज़न क्यों", listenBtn: "🔊 हिंदी में सुनें", playingBtn: "▶ ऑडियो चल रहा है…" },
  ta: { name: "தமிழ்", advTag: "சந்தை நுண்ணறிவு", marketLabel: "சந்தை சமிக்ஞை", altLabel: "பரிந்துரைக்கப்பட்ட பயிர்கள்", reasonLabel: "இந்த பருவம் ஏன்", listenBtn: "🔊 தமிழில் கேட்க", playingBtn: "▶ ஆடியோ ஒலிக்கிறது…" },
  te: { name: "తెలుగు", advTag: "మార్కెట్ ఇంటెలిజెన్స్", marketLabel: "మార్కెట్ సిగ్నల్", altLabel: "సూచించిన పంటలు", reasonLabel: "ఈ సీజన్ ఎందుకు", listenBtn: "🔊 తెలుగులో వినండి", playingBtn: "▶ ఆడియో ప్లే అవుతోంది…" },
  bn: { name: "বাংলা", advTag: "বাজার তথ্য", marketLabel: "বাজার সংকেত", altLabel: "প্রস্তাবিত ফসল", reasonLabel: "এই মৌসুমে কেন", listenBtn: "🔊 বাংলায় শুনুন", playingBtn: "▶ অডিও চলছে…" },
  mr: { name: "मराठी", advTag: "बाजार माहिती", marketLabel: "बाजार संकेत", altLabel: "सुचवलेली पिके", reasonLabel: "या हंगामात का", listenBtn: "🔊 मराठीत ऐका", playingBtn: "▶ ऑडिओ सुरू आहे…" }
};

// ============================================================
// MARKET INTELLIGENCE ADVISORY DATA
// Key: crop-state (e.g. wheat-up, rice-mh)
// Each entry has: marketSignal, alternatives[], reason, soilNote
// ============================================================
const advisories = {
  "wheat-up": {
    en: {
      marketSignal: "⚠️ HIGH RISK — Wheat production in UP was 35% above average last year. Mandi prices expected to drop 18–22% this Rabi season.",
      alternatives: ["Mustard (Sarson)", "Gram (Chana)", "Lentil (Masoor)"],
      reason: "Mustard prices rose 28% last year due to low production. Gram and Masoor have stable MSP support with less competition in your district.",
      soilNote: "Your alluvial soil is excellent for all three alternatives. Mustard requires less water than wheat — ideal for areas with low canal access."
    },
    hi: {
      marketSignal: "⚠️ उच्च जोखिम — पिछले साल UP में गेहूं का उत्पादन औसत से 35% ज़्यादा था। इस रबी सीज़न में मंडी भाव 18–22% तक गिर सकते हैं।",
      alternatives: ["सरसों", "चना", "मसूर"],
      reason: "पिछले साल कम उत्पादन के कारण सरसों के दाम 28% बढ़े। चना और मसूर को MSP सहायता मिलती है और आपके जिले में कम प्रतिस्पर्धा है।",
      soilNote: "आपकी जलोढ़ मिट्टी तीनों विकल्पों के लिए उत्तम है। सरसों गेहूं से कम पानी लेती है — नहर की कम पहुंच वाले क्षेत्रों के लिए आदर्श।"
    },
    ta: {
      marketSignal: "⚠️ அதிக ஆபத்து — கடந்த ஆண்டு UP-ல் கோதுமை உற்பத்தி சராசரியை விட 35% அதிகமாக இருந்தது. இந்த ரபி பருவத்தில் விலை 18–22% குறையலாம்.",
      alternatives: ["கடுகு (சரசோன்)", "கொண்டைக்கடலை (சனா)", "மசூர் பருப்பு"],
      reason: "கடந்த ஆண்டு கடுகு உற்பத்தி குறைவால் விலை 28% உயர்ந்தது. கொண்டைக்கடலை மற்றும் மசூருக்கு MSP ஆதரவு உள்ளது.",
      soilNote: "உங்கள் வண்டல் மண் மூன்று மாற்று பயிர்களுக்கும் ஏற்றது. கடுகுக்கு கோதுமையை விட குறைவான நீர் தேவை."
    },
    te: {
      marketSignal: "⚠️ అధిక రిస్క్ — గత సంవత్సరం UP లో గోధుమ ఉత్పత్తి సగటు కంటే 35% ఎక్కువగా ఉంది. ఈ రబీ సీజన్‌లో మండి ధరలు 18–22% తగ్గవచ్చు.",
      alternatives: ["ఆవాలు (సర్సోన్)", "శనగలు (చనా)", "మసూర్ పప్పు"],
      reason: "గత సంవత్సరం ఆవాల ఉత్పత్తి తక్కువగా ఉండటంతో ధర 28% పెరిగింది. శనగలు మరియు మసూర్‌కు MSP మద్దతు ఉంది.",
      soilNote: "మీ ఒండ్రు నేల మూడు ప్రత్యామ్నాయాలకూ అనుకూలంగా ఉంది. ఆవాలకు గోధుమ కంటే తక్కువ నీరు అవసరం."
    },
    bn: {
      marketSignal: "⚠️ উচ্চ ঝুঁকি — গত বছর UP-এ গমের উৎপাদন গড়ের চেয়ে ৩৫% বেশি ছিল। এই রবি মৌসুমে দাম ১৮–২২% কমতে পারে।",
      alternatives: ["সরিষা", "ছোলা (চনা)", "মসুর ডাল"],
      reason: "গত বছর কম উৎপাদনে সরিষার দাম ২৮% বেড়েছিল। ছোলা ও মসুরে MSP সহায়তা আছে এবং আপনার জেলায় কম প্রতিযোগিতা।",
      soilNote: "আপনার পলিমাটি তিনটি বিকল্পের জন্যই উপযুক্ত। সরিষায় গমের চেয়ে কম জল লাগে।"
    },
    mr: {
      marketSignal: "⚠️ उच्च धोका — मागील वर्षी UP मध्ये गव्हाचे उत्पादन सरासरीपेक्षा ३५% जास्त होते. या रब्बी हंगामात मंडई भाव १८–२२% घसरण्याची शक्यता.",
      alternatives: ["मोहरी (सरसों)", "हरभरा (चना)", "मसूर"],
      reason: "मागील वर्षी कमी उत्पादनामुळे मोहरीचे भाव २८% वाढले. हरभरा आणि मसूरला MSP आधार आहे आणि तुमच्या जिल्ह्यात कमी स्पर्धा.",
      soilNote: "तुमची गाळाची माती तिन्ही पर्यायांसाठी उत्तम आहे. मोहरीला गव्हापेक्षा कमी पाणी लागते."
    }
  },
  "rice-mh": {
    en: {
      marketSignal: "✅ MODERATE OPPORTUNITY — Rice production in Maharashtra was 12% below the 5-year average. Prices are stable with potential 10–15% upside this Kharif.",
      alternatives: ["Soybean", "Tur Dal (Pigeon Pea)", "Cotton"],
      reason: "However, if your soil is black cotton type, Soybean offers 22% better returns than rice this season with high demand from processors in Nagpur and Latur.",
      soilNote: "Black (regur) soil in Maharashtra is ideal for Soybean and Tur Dal. Rice in black soil risks waterlogging — consider raised bed planting if you continue with rice."
    },
    hi: {
      marketSignal: "✅ मध्यम अवसर — महाराष्ट्र में चावल उत्पादन 5 साल के औसत से 12% कम था। इस खरीफ में 10–15% भाव वृद्धि संभव है।",
      alternatives: ["सोयाबीन", "तूर दाल (अरहर)", "कपास"],
      reason: "यदि आपकी मिट्टी काली कपास मिट्टी है, तो सोयाबीन इस सीज़न में चावल से 22% बेहतर रिटर्न देता है। नागपुर और लातूर में प्रोसेसर की मांग अधिक है।",
      soilNote: "महाराष्ट्र में काली मिट्टी सोयाबीन और तूर के लिए आदर्श है। काली मिट्टी में चावल उगाने से जलभराव का जोखिम है।"
    },
    ta: {
      marketSignal: "✅ மிதமான வாய்ப்பு — மகாராஷ்டிராவில் அரிசி உற்பத்தி 5 ஆண்டு சராசரியை விட 12% குறைவாக இருந்தது. இந்த காரிஃபில் 10–15% விலை உயர்வு சாத்தியம்.",
      alternatives: ["சோயாபீன்", "துவரம் பருப்பு", "பருத்தி"],
      reason: "கரிசல் மண் இருந்தால், சோயாபீன் இந்த பருவத்தில் நெல்லை விட 22% அதிக வருவாய் தரும். நாக்பூர் மற்றும் லட்டூரில் தொழிலகங்களுக்கு தேவை அதிகம்.",
      soilNote: "கரிசல் மண்ணில் சோயாபீன் மற்றும் துவரம் பருப்பு சிறந்தது. கரிசல் மண்ணில் நெல் பயிரிட தண்ணீர் தேக்கம் ஆபத்து உள்ளது."
    },
    te: {
      marketSignal: "✅ మితమైన అవకాశం — మహారాష్ట్రలో వరి ఉత్పత్తి 5 సంవత్సరాల సగటు కంటే 12% తక్కువగా ఉంది. ఈ ఖరీఫ్‌లో 10–15% ధర పెరుగుదల సాధ్యం.",
      alternatives: ["సోయాబీన్", "కంది పప్పు (తూర్)", "పత్తి"],
      reason: "మీ నేల నల్లరేగడి అయితే, సోయాబీన్ ఈ సీజన్‌లో వరి కంటే 22% మెరుగైన రాబడి ఇస్తుంది. నాగ్‌పూర్ మరియు లాతూర్‌లో ప్రాసెసర్ల నుండి అధిక డిమాండ్ ఉంది.",
      soilNote: "మహారాష్ట్రలో నల్లరేగడి నేల సోయాబీన్ మరియు కంది పప్పుకు అనుకూలం. నల్ల నేలలో వరి వేస్తే నీరు నిలబడే ప్రమాదం ఉంది."
    },
    bn: {
      marketSignal: "✅ মাঝারি সুযোগ — মহারাষ্ট্রে চালের উৎপাদন ৫ বছরের গড়ের চেয়ে ১২% কম ছিল। এই খরিফে ১০–১৫% দাম বৃদ্ধির সম্ভাবনা।",
      alternatives: ["সয়াবিন", "তুর ডাল (অড়হর)", "তুলা"],
      reason: "কালো মাটি হলে, সয়াবিন এই মৌসুমে ধানের চেয়ে ২২% বেশি আয় দিতে পারে। নাগপুর ও লাতুরে প্রসেসরদের চাহিদা বেশি।",
      soilNote: "মহারাষ্ট্রে কালো মাটিতে সয়াবিন ও তুর ডাল সবচেয়ে ভালো। কালো মাটিতে ধান লাগালে জলাবদ্ধতার ঝুঁকি আছে।"
    },
    mr: {
      marketSignal: "✅ मध्यम संधी — महाराष्ट्रात भाताचे उत्पादन ५ वर्षांच्या सरासरीपेक्षा १२% कमी होते. या खरिपात १०–१५% भाव वाढ शक्य आहे.",
      alternatives: ["सोयाबीन", "तूर डाळ (अरहर)", "कापूस"],
      reason: "काळी माती असल्यास सोयाबीन या हंगामात भातापेक्षा २२% जास्त उत्पन्न देऊ शकतो. नागपूर आणि लातूरमध्ये प्रक्रिया उद्योगांची मागणी जास्त आहे.",
      soilNote: "महाराष्ट्रातील काळ्या मातीत सोयाबीन आणि तूर सर्वोत्तम. काळ्या मातीत भात लावल्यास पाणी साचण्याचा धोका असतो."
    }
  },
  "wheat-pb": {
    en: {
      marketSignal: "⚠️ OVERSUPPLY RISK — Punjab wheat acreage hit a 10-year high last season. Projected 15–20% price decline below MSP at arrival mandis.",
      alternatives: ["Basmati Rice (Kharif)", "Maize", "Sunflower"],
      reason: "Basmati exports from Punjab rose 31% last year — high international demand. Maize prices are up 19% due to poultry feed shortages. Good opportunity.",
      soilNote: "Punjab's alluvial soil supports all alternatives well. Basmati requires slightly more water management but commands 40–60% price premium over common rice."
    },
    hi: {
      marketSignal: "⚠️ अत्यधिक उत्पादन जोखिम — पंजाब में गेहूं की बुवाई 10 साल के उच्चतम स्तर पर थी। MSP से नीचे 15–20% भाव गिरावट संभव।",
      alternatives: ["बासमती चावल (खरीफ)", "मक्का", "सूरजमुखी"],
      reason: "पंजाब से बासमती निर्यात पिछले साल 31% बढ़ा — अंतरराष्ट्रीय मांग मजबूत है। मुर्गी पालन उद्योग की मांग से मक्का 19% महंगा हुआ।",
      soilNote: "पंजाब की जलोढ़ मिट्टी सभी विकल्पों के लिए उपयुक्त है। बासमती का भाव सामान्य चावल से 40–60% ज़्यादा मिलता है।"
    },
    ta: {
      marketSignal: "⚠️ அதிக உற்பத்தி ஆபத்து — பஞ்சாபில் கோதுமை பரப்பளவு 10 ஆண்டுகளில் மிக அதிகமாக இருந்தது. MSP-ஐ விட 15–20% விலை வீழ்ச்சி எதிர்பார்க்கப்படுகிறது.",
      alternatives: ["பாஸ்மதி அரிசி (காரிஃப்)", "மக்காச்சோளம்", "சூரியகாந்தி"],
      reason: "பஞ்சாபிலிருந்து பாஸ்மதி ஏற்றுமதி கடந்த ஆண்டு 31% உயர்ந்தது. கோழி தீவன பற்றாக்குறையால் மக்காச்சோளம் 19% விலை ஏறியது.",
      soilNote: "பஞ்சாபின் வண்டல் மண் அனைத்து மாற்றுகளுக்கும் ஏற்றது. பாஸ்மதி சாதாரண அரிசியை விட 40–60% அதிக விலை பெறுகிறது."
    },
    te: {
      marketSignal: "⚠️ అధిక ఉత్పత్తి రిస్క్ — పంజాబ్‌లో గోధుమ విస్తీర్ణం 10 సంవత్సరాల గరిష్ట స్థాయికి చేరింది. MSP కంటే తక్కువ 15–20% ధర తగ్గుదల అంచనా.",
      alternatives: ["బాస్మతి వరి (ఖరీఫ్)", "మొక్కజొన్న", "సూర్యకాంతి"],
      reason: "పంజాబ్ నుండి బాస్మతి ఎగుమతులు గత సంవత్సరం 31% పెరిగాయి. పోల్ట్రీ ఫీడ్ కొరత వల్ల మొక్కజొన్న 19% ఖరీదైంది.",
      soilNote: "పంజాబ్ ఒండ్రు నేల అన్ని ప్రత్యామ్నాయాలకూ అనుకూలం. బాస్మతి సాధారణ వరి కంటే 40–60% అధిక ధర పొందుతుంది."
    },
    bn: {
      marketSignal: "⚠️ অতিরিক্ত উৎপাদন ঝুঁকি — পাঞ্জাবে গমের আবাদ ১০ বছরের সর্বোচ্চে পৌঁছেছিল। MSP-র নিচে ১৫–২০% দাম কমার সম্ভাবনা।",
      alternatives: ["বাসমতি চাল (খরিফ)", "ভুট্টা", "সূর্যমুখী"],
      reason: "পাঞ্জাব থেকে বাসমতি রপ্তানি গত বছর ৩১% বেড়েছে। পোল্ট্রি খাদ্যের চাহিদায় ভুট্টার দাম ১৯% বেড়েছে।",
      soilNote: "পাঞ্জাবের পলিমাটি সব বিকল্পের জন্য উপযুক্ত। বাসমতি সাধারণ চালের চেয়ে ৪০–৬০% বেশি দাম পায়।"
    },
    mr: {
      marketSignal: "⚠️ अतिउत्पादन धोका — पंजाबमध्ये गव्हाची पेरणी १० वर्षांच्या उच्चांकावर होती. MSP पेक्षा कमी १५–२०% भाव घसरणीची शक्यता.",
      alternatives: ["बासमती भात (खरीप)", "मका", "सूर्यफूल"],
      reason: "पंजाबमधून बासमती निर्यात मागील वर्षी ३१% वाढली. कुक्कुटपालन उद्योगाच्या मागणीमुळे मका १९% महागला.",
      soilNote: "पंजाबची गाळाची माती सर्व पर्यायांसाठी योग्य. बासमतीला सामान्य भातापेक्षा ४०–६०% जास्त भाव मिळतो."
    }
  },
  "onion-mh": {
    en: {
      marketSignal: "🔴 EXTREME RISK — Onion production in Nashik belt is 41% higher than last year. Expect ₹3–6/kg farm gate prices — well below production cost of ₹9/kg.",
      alternatives: ["Garlic", "Turmeric", "Pomegranate (3-year ROI)"],
      reason: "Garlic prices are at 5-year high due to import restrictions. Turmeric demand up 18% due to pharmaceutical exports. Better revenue per acre than onion this season.",
      soilNote: "Black and alluvial soils in Maharashtra support garlic and turmeric well. If switching, prepare beds 3 weeks before planting and ensure drainage."
    },
    hi: {
      marketSignal: "🔴 अत्यधिक जोखिम — नासिक बेल्ट में प्याज उत्पादन पिछले साल से 41% ज़्यादा है। खेत पर ₹3–6/किलो दाम मिलने की आशंका — उत्पादन लागत ₹9/किलो से काफी नीचे।",
      alternatives: ["लहसुन", "हल्दी", "अनार (3 साल का निवेश)"],
      reason: "आयात प्रतिबंध से लहसुन 5 साल के उच्चतम भाव पर है। दवाई निर्यात से हल्दी की मांग 18% बढ़ी। प्याज से बेहतर प्रति एकड़ कमाई।",
      soilNote: "महाराष्ट्र की काली और जलोढ़ मिट्टी लहसुन और हल्दी के लिए उपयुक्त है।"
    },
    ta: {
      marketSignal: "🔴 மிக அதிக ஆபத்து — நாசிக் பகுதியில் வெங்காய உற்பத்தி கடந்த ஆண்டை விட 41% அதிகம். வயல் நுழைவு விலை ₹3–6/கிலோ எதிர்பார்க்கப்படுகிறது — ₹9/கிலோ உற்பத்தி செலவை விட மிகக் குறைவு.",
      alternatives: ["பூண்டு", "மஞ்சள்", "மாதுளை (3 ஆண்டு ROI)"],
      reason: "இறக்குமதி கட்டுப்பாடால் பூண்டு விலை 5 ஆண்டுகளில் அதிகமாக உள்ளது. மருந்து ஏற்றுமதியால் மஞ்சள் தேவை 18% உயர்ந்துள்ளது.",
      soilNote: "மகாராஷ்டிரா கரிசல் மற்றும் வண்டல் மண்ணில் பூண்டு மற்றும் மஞ்சள் நன்கு வளரும்."
    },
    te: {
      marketSignal: "🔴 అత్యంత అధిక రిస్క్ — నాసిక్ బెల్ట్‌లో ఉల్లి ఉత్పత్తి గత సంవత్సరం కంటే 41% ఎక్కువగా ఉంది. ₹3–6/కిలో ఫార్మ్ గేట్ ధర వస్తుందని అంచనా — ₹9/కిలో ఉత్పత్తి వ్యయానికి చాలా తక్కువ.",
      alternatives: ["వెల్లుల్లి", "పసుపు", "దానిమ్మ (3 సంవత్సరాల ROI)"],
      reason: "దిగుమతి ఆంక్షల వల్ల వెల్లుల్లి ధర 5 సంవత్సరాల గరిష్టంలో ఉంది. ఫార్మా ఎగుమతుల వల్ల పసుపు డిమాండ్ 18% పెరిగింది.",
      soilNote: "మహారాష్ట్రలో నల్ల మరియు ఒండ్రు నేల వెల్లుల్లి మరియు పసుపుకు అనుకూలంగా ఉంది."
    },
    bn: {
      marketSignal: "🔴 অত্যন্ত উচ্চ ঝুঁকি — নাসিক বেল্টে পেঁয়াজের উৎপাদন গত বছরের চেয়ে ৪১% বেশি। খামার গেটে ₹৩–৬/কেজি দাম পাওয়ার আশঙ্কা — ₹৯/কেজি উৎপাদন খরচের অনেক নিচে।",
      alternatives: ["রসুন", "হলুদ", "ডালিম (৩ বছরের বিনিয়োগ)"],
      reason: "আমদানি নিষেধাজ্ঞায় রসুন ৫ বছরের সর্বোচ্চ দামে। ওষুধ রপ্তানিতে হলুদের চাহিদা ১৮% বেড়েছে।",
      soilNote: "মহারাষ্ট্রের কালো ও পলিমাটিতে রসুন ও হলুদ ভালো হয়।"
    },
    mr: {
      marketSignal: "🔴 अत्यंत उच्च धोका — नाशिक पट्ट्यात कांद्याचे उत्पादन मागील वर्षापेक्षा ४१% जास्त आहे. शेतावर ₹३–६/किलो भाव मिळण्याची भीती — ₹९/किलो उत्पादन खर्चापेक्षा खूपच कमी.",
      alternatives: ["लसूण", "हळद", "डाळिंब (३ वर्षांची गुंतवणूक)"],
      reason: "आयात निर्बंधांमुळे लसूण ५ वर्षांच्या उच्चांकी भावावर. औषधी निर्यातीने हळदीची मागणी १८% वाढली.",
      soilNote: "महाराष्ट्रातील काळी आणि गाळाची माती लसूण आणि हळदीसाठी योग्य."
    }
  },
  default: {
    en: {
      marketSignal: "📊 MARKET ANALYSIS COMPLETE — Based on national production data for your selected crop, we recommend reviewing the alternatives below before finalising your planting decision.",
      alternatives: ["Pulses (Tur/Moong/Chana)", "Oilseeds (Mustard/Groundnut)", "Vegetables (Seasonal)"],
      reason: "Pulses and oilseeds have stable government MSP support and lower competition than staple grains this season. Seasonal vegetables offer higher per-acre revenue with lower acreage risk.",
      soilNote: "Check your soil type in the Soil Health Card portal (soilhealth.dac.gov.in) for the most precise crop-soil match. Visit your nearest KVK (Krishi Vigyan Kendra) for local expert advice."
    },
    hi: {
      marketSignal: "📊 बाज़ार विश्लेषण पूर्ण — आपकी चुनी गई फसल के राष्ट्रीय उत्पादन डेटा के आधार पर, हम अनुशंसा करते हैं कि बुवाई से पहले नीचे दिए गए विकल्पों पर विचार करें।",
      alternatives: ["दलहन (तूर/मूंग/चना)", "तिलहन (सरसों/मूंगफली)", "सब्जियां (मौसमी)"],
      reason: "दलहन और तिलहन को सरकारी MSP सहायता मिलती है और इस सीज़न मुख्य अनाजों की तुलना में कम प्रतिस्पर्धा है। मौसमी सब्जियां प्रति एकड़ अधिक आमदनी दे सकती हैं।",
      soilNote: "सबसे सटीक फसल-मिट्टी मिलान के लिए Soil Health Card पोर्टल देखें। स्थानीय विशेषज्ञ सलाह के लिए अपने नजदीकी KVK जाएं।"
    },
    ta: {
      marketSignal: "📊 சந்தை பகுப்பாய்வு முடிந்தது — தேர்ந்தெடுக்கப்பட்ட பயிருக்கான தேசிய உற்பத்தி தரவின் அடிப்படையில், பயிரிடுவதற்கு முன் கீழே உள்ள மாற்றுகளை பரிசீலிக்கவும்.",
      alternatives: ["பருப்பு வகைகள் (துவரம்/பாசிப்பயறு/கொண்டைக்கடலை)", "எண்ணெய் வித்துக்கள் (கடுகு/நிலக்கடலை)", "காய்கறிகள் (பருவகால)"],
      reason: "பருப்பு மற்றும் எண்ணெய் வித்துக்களுக்கு MSP ஆதரவு உள்ளது. பருவகால காய்கறிகள் ஏக்கருக்கு அதிக வருவாய் தருகின்றன.",
      soilNote: "மண் ஆரோக்கியம் அட்டை போர்ட்டலில் மண் வகையை சரிபார்க்கவும். உள்ளூர் KVK ஆலோசனை பெறவும்."
    },
    te: {
      marketSignal: "📊 మార్కెట్ విశ్లేషణ పూర్తయింది — ఎంచుకున్న పంటకు జాతీయ ఉత్పత్తి డేటా ఆధారంగా, విత్తనం వేయడానికి ముందు దిగువ ప్రత్యామ్నాయాలను పరిశీలించండి.",
      alternatives: ["పప్పులు (కంది/పెసలు/శనగలు)", "నూనె గింజలు (ఆవాలు/వేరుశనగ)", "కూరగాయలు (సీజనల్)"],
      reason: "పప్పులు మరియు నూనె గింజలకు MSP మద్దతు ఉంది. సీజనల్ కూరగాయలు ఎకరాకు అధిక ఆదాయం ఇస్తాయి.",
      soilNote: "ఖచ్చితమైన పంట-నేల సరిపోలిక కోసం Soil Health Card పోర్టల్ చూడండి. స్థానిక KVK సలహా తీసుకోండి."
    },
    bn: {
      marketSignal: "📊 বাজার বিশ্লেষণ সম্পন্ন — আপনার নির্বাচিত ফসলের জাতীয় উৎপাদন তথ্যের ভিত্তিতে, আবাদ চূড়ান্ত করার আগে নিচের বিকল্পগুলো বিবেচনা করুন।",
      alternatives: ["ডাল জাতীয় (তুর/মুগ/ছোলা)", "তেলবীজ (সরিষা/চিনাবাদাম)", "সবজি (মৌসুমী)"],
      reason: "ডাল ও তেলবীজে সরকারি MSP সহায়তা আছে এবং এই মৌসুমে কম প্রতিযোগিতা। মৌসুমী সবজি প্রতি একরে বেশি আয় দেয়।",
      soilNote: "নির্ভুল ফসল-মাটি মিলের জন্য Soil Health Card পোর্টাল দেখুন। স্থানীয় KVK থেকে পরামর্শ নিন।"
    },
    mr: {
      marketSignal: "📊 बाजार विश्लेषण पूर्ण — तुमच्या निवडलेल्या पिकाच्या राष्ट्रीय उत्पादन डेटाच्या आधारे, पेरणी अंतिम करण्यापूर्वी खालील पर्यायांचा विचार करा.",
      alternatives: ["कडधान्ये (तूर/मूग/हरभरा)", "तेलबिया (मोहरी/भुईमूग)", "भाजीपाला (हंगामी)"],
      reason: "कडधान्ये आणि तेलबियांना सरकारी MSP आधार आहे. हंगामी भाजीपाला प्रति एकर जास्त उत्पन्न देतो.",
      soilNote: "अचूक पीक-माती जुळणीसाठी Soil Health Card पोर्टल पहा. स्थानिक KVK चा सल्ला घ्या."
    }
  }
};

// ============================================================
// GLOBAL STATE
// ============================================================
let currentLangCode = "en";
let activeAdvisoryState = null;

// Load persisted language immediately
function loadPersistedLanguage() {
  try {
    const saved = localStorage.getItem("neev_lang_preference");
    if (saved && translations[saved]) {
      currentLangCode = saved;
      document.documentElement.setAttribute("lang", saved);
    }
  } catch (e) {
    console.warn("localStorage unreadable:", e);
  }
}
loadPersistedLanguage();

// ============================================================
// CORE TRANSLATION ENGINE
// ============================================================
function setLanguage(langCode) {
  if (!translations[langCode]) return;
  currentLangCode = langCode;
  document.documentElement.setAttribute("lang", langCode);

  try { localStorage.setItem("neev_lang_preference", langCode); } catch (e) {}

  const selectEl = document.getElementById("globalLangSelect");
  if (selectEl && selectEl.value !== langCode) selectEl.value = langCode;

  const reverseLangMap = { hi: "Hindi", ta: "Tamil", te: "Telugu", bn: "Bengali", mr: "Marathi", en: "English" };
  const currentLangName = reverseLangMap[langCode] || "English";
  const chips = document.querySelectorAll("#langChips .chip");
  chips.forEach((c) => c.classList.toggle("active", c.dataset.lang === currentLangName));

  const dict = translations[langCode];
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.getAttribute("data-i18n");
    if (dict[key] !== undefined) node.innerHTML = dict[key];
  });

  if (activeAdvisoryState) {
    renderAdvisoryCard(activeAdvisoryState.key);
  }
}

// ============================================================
// ADVISORY CARD RENDERER — Market Intelligence Format
// ============================================================
function renderAdvisoryCard(key) {
  const card = document.getElementById("advisoryCard");
  if (!card) return;

  const modelEntry = advisories[key] || advisories.default;
  const data = modelEntry[currentLangCode] || modelEntry.en;
  const meta = langMeta[currentLangCode] || langMeta.en;

  const altItems = data.alternatives
    .map(a => `<li style="padding:4px 0; color:var(--gold); font-weight:600;">✦ ${a}</li>`)
    .join("");

  card.innerHTML = `
    <div class="advisory show">
      <span class="adv-tag">${meta.advTag} · ${meta.name}</span>

      <div class="adv-row" style="margin-top:12px">
        <span class="ico">📊</span>
        <div>
          <strong>${meta.marketLabel}</strong>
          <span style="display:block; margin-top:4px; line-height:1.55;">${data.marketSignal}</span>
        </div>
      </div>

      <div class="adv-row">
        <span class="ico">🌾</span>
        <div>
          <strong>${meta.altLabel}</strong>
          <ul style="margin:6px 0 0 0; padding-left:4px; list-style:none;">${altItems}</ul>
        </div>
      </div>

      <div class="adv-row">
        <span class="ico">💡</span>
        <div>
          <strong>${meta.reasonLabel}</strong>
          <span style="display:block; margin-top:4px; line-height:1.55;">${data.reason}</span>
        </div>
      </div>

      <div class="adv-row">
        <span class="ico">🌱</span>
        <div>
          <span style="line-height:1.55; color:var(--muted); font-size:13px;">${data.soilNote}</span>
        </div>
      </div>

      <button class="adv-listen" id="listenBtn">${meta.listenBtn}</button>
    </div>`;

  const listenBtn = card.querySelector("#listenBtn");
  if (listenBtn) {
    listenBtn.addEventListener("click", () => {
      listenBtn.textContent = meta.playingBtn;
      setTimeout(() => { listenBtn.textContent = meta.listenBtn; }, 2400);
    });
  }
}

// ============================================================
// ADVISORY KEY RESOLVER
// Maps crop + state → advisory key
// ============================================================
function resolveAdvisoryKey(crop, state) {
  const key = `${crop}-${state}`;
  if (advisories[key]) return key;
  // fallback combos
  const cropFallbacks = {
    wheat: ["wheat-up", "wheat-pb"],
    rice: ["rice-mh"],
    onion: ["onion-mh"],
    tomato: ["onion-mh"],
    sugarcane: ["wheat-up"],
    cotton: ["rice-mh"],
    maize: ["wheat-pb"],
    soybean: ["rice-mh"]
  };
  const stateFallbacks = {
    up: "wheat-up", pb: "wheat-pb", mh: "rice-mh",
    mp: "wheat-up", rj: "wheat-pb", hr: "wheat-pb",
    ap: "rice-mh", tn: "rice-mh", wb: "rice-mh", br: "wheat-up"
  };
  if (advisories[`${crop}-${state}`]) return `${crop}-${state}`;
  if (cropFallbacks[crop]) {
    for (const fb of cropFallbacks[crop]) {
      if (advisories[fb]) return fb;
    }
  }
  if (stateFallbacks[state]) return stateFallbacks[state];
  return "default";
}

// ============================================================
// MAIN INIT
// ============================================================
function initKisanAI() {
  const root = document.getElementById("kisanai-root");
  if (!root) return;

  setLanguage(currentLangCode);

  // Global language selector
  const globalSelect = document.getElementById("globalLangSelect");
  if (globalSelect) {
    globalSelect.addEventListener("change", (e) => setLanguage(e.target.value));
  }

  // Particles
  const particles = root.querySelector("#particles");
  if (particles) {
    particles.innerHTML = "";
    for (let i = 0; i < 28; i++) {
      const p = document.createElement("span");
      p.className = "particle";
      p.style.left = Math.random() * 100 + "%";
      p.style.animationDuration = 12 + Math.random() * 18 + "s";
      p.style.animationDelay = -Math.random() * 20 + "s";
      p.style.opacity = String(0.15 + Math.random() * 0.4);
      particles.appendChild(p);
    }
  }

  // Navbar scroll
  const nav = root.querySelector("#navbar");
  const onScroll = () => {
    if (!nav) return;
    nav.classList.toggle("scrolled", window.scrollY > 30);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  // Active section highlighting
  const navAnchors = root.querySelectorAll("[data-section]");
  const sectionIds = ["features", "how", "impact", "demo"];
  const sections = sectionIds.map((id) => root.querySelector(`#${id}`)).filter(Boolean);
  const setActive = (id) => navAnchors.forEach((a) => a.classList.toggle("active", a.dataset.section === id));
  const sio = new IntersectionObserver(
    (entries) => {
      const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActive(visible.target.id);
    },
    { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
  );
  sections.forEach((s) => sio.observe(s));

  // Hamburger
  const hamburger = root.querySelector("#hamburger");
  const mobileMenu = root.querySelector("#mobileMenu");
  const closeMobile = () => {
    hamburger?.classList.remove("open");
    mobileMenu?.classList.remove("open");
    hamburger?.setAttribute("aria-expanded", "false");
    mobileMenu?.setAttribute("aria-hidden", "true");
  };
  if (hamburger && mobileMenu) {
    hamburger.addEventListener("click", () => {
      const open = !mobileMenu.classList.contains("open");
      mobileMenu.classList.toggle("open", open);
      hamburger.classList.toggle("open", open);
      hamburger.setAttribute("aria-expanded", String(open));
      mobileMenu.setAttribute("aria-hidden", String(!open));
    });
    mobileMenu.querySelectorAll("a").forEach((a) => a.addEventListener("click", closeMobile));
  }

  // Entrance animations
  const revealEls = root.querySelectorAll(".section, .glass-card, .flow-step, .impact-stat, .pill, .stat-badge");
  revealEls.forEach((el) => el.classList.add("reveal"));
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    },
    { threshold: 0.12 }
  );
  revealEls.forEach((el) => io.observe(el));

  // Impact counters
  const counters = root.querySelectorAll(".counter");
  const cio = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      const el = e.target;
      const target = parseInt(el.dataset.target || "0", 10);
      const suffix = el.dataset.suffix || "";
      const prefix = el.dataset.prefix || "";
      const start = performance.now();
      const dur = 1600;
      const tick = (now) => {
        const t = Math.min(1, (now - start) / dur);
        const eased = 1 - Math.pow(1 - t, 3);
        const val = Math.round(eased * target);
        el.textContent = `${prefix}${val}${suffix}`;
        if (t < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      cio.unobserve(el);
    });
  });
  counters.forEach((c) => cio.observe(c));

  // Demo language chips
  const chips = root.querySelectorAll("#langChips .chip");
  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      const targetLangMap = { Hindi: "hi", Tamil: "ta", Telugu: "te", Bengali: "bn", Marathi: "mr" };
      const requestedCode = targetLangMap[chip.dataset.lang] || "hi";
      setLanguage(requestedCode);
      chips.forEach((c) => c.classList.remove("active"));
      chip.classList.add("active");
    });
  });

  const reverseLangMap = { hi: "Hindi", ta: "Tamil", te: "Telugu", bn: "Bengali", mr: "Marathi" };
  const currentChipName = reverseLangMap[currentLangCode] || "Hindi";
  chips.forEach((c) => c.classList.toggle("active", c.dataset.lang === currentChipName));

  // Demo CTA button
  const btn = root.querySelector("#advisoryBtn");
  if (btn) {
    btn.addEventListener("click", () => {
      const crop = root.querySelector("#crop")?.value || "wheat";
      const state = root.querySelector("#state")?.value || "up";
      const key = resolveAdvisoryKey(crop, state);
      activeAdvisoryState = { key };
      renderAdvisoryCard(key);
      const cardContainer = document.getElementById("advisoryCard");
      if (cardContainer) cardContainer.scrollIntoView({ behavior: "smooth", block: "nearest" });
    });
  }
}

// Boot
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initKisanAI);
} else {
  initKisanAI();
}
