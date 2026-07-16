import React, { useState } from "react";
import { SpeedInsights } from "@vercel/speed-insights/react"
import { Analytics } from "@vercel/analytics/react"
import Navbar from "./components/Navbar";
import LanguageSelector from "./components/LanguageSelect";
import TextArea from "./components/TextArea";
import ResultBox from "./components/ResultBox";
import CharacterCounter from "./components/CharacterCounter";
import TranslateButton from "./components/TranslateButton";
import About from "./components/About";
import { fetchText } from "./services/translateApi";

const languages = [
  // Auto Detect
  { id: "auto", speechLang: "", name: "Select language", flag: "🌐" },

  // International Languages
  { id: "en", speechLang: "en-US", name: "English", flag: "🇺🇸" },
  { id: "es", speechLang: "es-ES", name: "Español (Spanish)", flag: "🇪🇸" },
  { id: "fr", speechLang: "fr-FR", name: "Français (French)", flag: "🇫🇷" },
  { id: "de", speechLang: "de-DE", name: "Deutsch (German)", flag: "🇩🇪" },
  { id: "it", speechLang: "it-IT", name: "Italiano (Italian)", flag: "🇮🇹" },
  { id: "pt", speechLang: "pt-PT", name: "Português (Portuguese)", flag: "🇵🇹" },
  { id: "ru", speechLang: "ru-RU", name: "Русский (Russian)", flag: "🇷🇺" },
  { id: "ja", speechLang: "ja-JP", name: "日本語 (Japanese)", flag: "🇯🇵" },
  { id: "ko", speechLang: "ko-KR", name: "한국어 (Korean)", flag: "🇰🇷" },
  { id: "zh-CN", speechLang: "zh-CN", name: "中文 (简体) (Chinese - Simplified)", flag: "🇨🇳" },
  { id: "zh-TW", speechLang: "zh-TW", name: "中文 (繁體) (Chinese - Traditional)", flag: "🇹🇼" },
  { id: "ar", speechLang: "ar-SA", name: "العربية (Arabic)", flag: "🇸🇦" },
  { id: "tr", speechLang: "tr-TR", name: "Türkçe (Turkish)", flag: "🇹🇷" },
  { id: "nl", speechLang: "nl-NL", name: "Nederlands (Dutch)", flag: "🇳🇱" },
  { id: "pl", speechLang: "pl-PL", name: "Polski (Polish)", flag: "🇵🇱" },
  { id: "uk", speechLang: "uk-UA", name: "Українська (Ukrainian)", flag: "🇺🇦" },
  { id: "th", speechLang: "th-TH", name: "ไทย (Thai)", flag: "🇹🇭" },
  { id: "vi", speechLang: "vi-VN", name: "Tiếng Việt (Vietnamese)", flag: "🇻🇳" },
  { id: "id", speechLang: "id-ID", name: "Bahasa Indonesia (Indonesian)", flag: "🇮🇩" },
  { id: "ms", speechLang: "ms-MY", name: "Bahasa Melayu (Malay)", flag: "🇲🇾" },
  { id: "fa", speechLang: "fa-IR", name: "فارسی (Persian)", flag: "🇮🇷" },
  { id: "he", speechLang: "he-IL", name: "עברית (Hebrew)", flag: "🇮🇱" },
  { id: "el", speechLang: "el-GR", name: "Ελληνικά (Greek)", flag: "🇬🇷" },

  // Indian Languages
  { id: "hi", speechLang: "hi-IN", name: "हिन्दी (Hindi)", flag: "🇮🇳" },
  { id: "bn", speechLang: "bn-IN", name: "বাংলা (Bengali)", flag: "🇮🇳" },
  { id: "te", speechLang: "te-IN", name: "తెలుగు (Telugu)", flag: "🇮🇳" },
  { id: "mr", speechLang: "mr-IN", name: "मराठी (Marathi)", flag: "🇮🇳" },
  { id: "ta", speechLang: "ta-IN", name: "தமிழ் (Tamil)", flag: "🇮🇳" },
  { id: "ur", speechLang: "ur-IN", name: "اردو (Urdu)", flag: "🇮🇳" },
  { id: "gu", speechLang: "gu-IN", name: "ગુજરાતી (Gujarati)", flag: "🇮🇳" },
  { id: "kn", speechLang: "kn-IN", name: "ಕನ್ನಡ (Kannada)", flag: "🇮🇳" },
  { id: "ml", speechLang: "ml-IN", name: "മലയാളം (Malayalam)", flag: "🇮🇳" },
  { id: "or", speechLang: "or-IN", name: "ଓଡ଼ିଆ (Odia)", flag: "🇮🇳" },
  { id: "pa", speechLang: "pa-IN", name: "ਪੰਜਾਬੀ (Punjabi)", flag: "🇮🇳" },
  { id: "as", speechLang: "as-IN", name: "অসমীয়া (Assamese)", flag: "🇮🇳" },
  { id: "ne", speechLang: "ne-NP", name: "नेपाली (Nepali)", flag: "🇳🇵" },
  { id: "sd", speechLang: "sd-IN", name: "سنڌي (Sindhi)", flag: "🇮🇳" },
];

const speakText = (text) => {
  if (!text) return;

  const speech = new SpeechSynthesisUtterance(text);

  speech.lang = languages.speechLang;
  speech.rate = 1;
  speech.pitch = 1;
  speech.volume = 1;

  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(speech);
};





const App = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

  const [text, settext] = useState("");
  const [translatedText, setTranslatedText] = useState("");

  const handleText = async () => {
    const result = await fetchText(text, selectedLanguage.id);
    setTranslatedText(result.trans);
  };

  return (
    <form action="">
      <div className="mainapp relative ">
      <Navbar />
      <div className="mainArea p-5">
        <div className="flex-1">
          <TextArea receiveText={settext} sendText={text} />

          <div className="relative">
            <LanguageSelector
              selectedLanguage={selectedLanguage}
              setSelectedLanguage={setSelectedLanguage}
              languages={languages}
            />
            <CharacterCounter sendText={text} />
          </div>
        </div>
        <div className="flex-1">
          <ResultBox
            Text={translatedText}
            speak={() => speakText(translatedText)}
          />
        </div>
      </div>
      <div>
        <TranslateButton onClick={handleText} />
      </div>
      <About />
      <SpeedInsights />
      <Analytics />
    </div>
    </form>
  );
};

export default App;
