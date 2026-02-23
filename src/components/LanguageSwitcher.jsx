import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, ChevronDown, Check, Search } from 'lucide-react';
import useTranslation from '../hooks/useTranslation';

const LanguageSwitcher = () => {
  const { language, changeLanguage } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const languages = useMemo(() => [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'it', name: 'Italiano', flag: '🇮🇹' },
    { code: 'pt', name: 'Português', flag: '🇵🇹' },
    { code: 'ru', name: 'Русский', flag: '🇷🇺' },
    { code: 'ja', name: '日本語', flag: '🇯🇵' },
    { code: 'ko', name: '한국어', flag: '🇰🇷' },
    { code: 'zh', name: '中文', flag: '🇨🇳' },
    { code: 'ar', name: 'العربية', flag: '🇸🇦' },
    { code: 'hi', name: 'हिन्दी', flag: '🇮🇳' },
    { code: 'th', name: 'ไทย', flag: '🇹🇭' },
    { code: 'vi', name: 'Tiếng Việt', flag: '🇻🇳' },
    { code: 'id', name: 'Bahasa Indonesia', flag: '🇮🇩' },
    { code: 'ms', name: 'Bahasa Melayu', flag: '🇲🇾' },
    { code: 'tl', name: 'Filipino', flag: '🇵🇭' },
    { code: 'nl', name: 'Nederlands', flag: '🇳🇱' },
    { code: 'sv', name: 'Svenska', flag: '🇸🇪' },
    { code: 'no', name: 'Norsk', flag: '🇳🇴' },
    { code: 'da', name: 'Dansk', flag: '🇩🇰' },
    { code: 'fi', name: 'Suomi', flag: '🇫🇮' },
    { code: 'pl', name: 'Polski', flag: '🇵🇱' },
    { code: 'cs', name: 'Čeština', flag: '🇨🇿' },
    { code: 'sk', name: 'Slovenčina', flag: '🇸🇰' },
    { code: 'hu', name: 'Magyar', flag: '🇭🇺' },
    { code: 'ro', name: 'Română', flag: '🇷🇴' },
    { code: 'bg', name: 'Български', flag: '🇧🇬' },
    { code: 'hr', name: 'Hrvatski', flag: '🇭🇷' },
    { code: 'sr', name: 'Српски', flag: '🇷🇸' },
    { code: 'sl', name: 'Slovenščina', flag: '🇸🇮' },
    { code: 'et', name: 'Eesti', flag: '🇪🇪' },
    { code: 'lv', name: 'Latviešu', flag: '🇱🇻' },
    { code: 'lt', name: 'Lietuvių', flag: '🇱🇹' },
    { code: 'uk', name: 'Українська', flag: '🇺🇦' },
    { code: 'be', name: 'Беларуская', flag: '🇧🇾' },
    { code: 'ka', name: 'ქართული', flag: '🇬🇪' },
    { code: 'hy', name: 'Հայերեն', flag: '🇦🇲' },
    { code: 'az', name: 'Azərbaycan', flag: '🇦🇿' },
    { code: 'kk', name: 'Қазақша', flag: '🇰🇿' },
    { code: 'ky', name: 'Кыргызча', flag: '🇰🇬' },
    { code: 'uz', name: 'O\'zbek', flag: '🇺🇿' },
    { code: 'tg', name: 'Тоҷикӣ', flag: '🇹🇯' },
    { code: 'mn', name: 'Монгол', flag: '🇲🇳' },
    { code: 'tr', name: 'Türkçe', flag: '🇹🇷' },
    { code: 'fa', name: 'فارسی', flag: '🇮🇷' },
    { code: 'ur', name: 'اردو', flag: '🇵🇰' },
    { code: 'bn', name: 'বাংলা', flag: '🇧🇩' },
    { code: 'ta', name: 'தமிழ்', flag: '🇮🇳' },
    { code: 'te', name: 'తెలుగు', flag: '🇮🇳' },
    { code: 'ml', name: 'മലയാളം', flag: '🇮🇳' },
    { code: 'kn', name: 'ಕನ್ನಡ', flag: '🇮🇳' },
    { code: 'gu', name: 'ગુજરાતી', flag: '🇮🇳' },
    { code: 'pa', name: 'ਪੰਜਾਬੀ', flag: '🇮🇳' },
    { code: 'or', name: 'ଓଡ଼ିଆ', flag: '🇮🇳' },
    { code: 'as', name: 'অসমীয়া', flag: '🇮🇳' },
    { code: 'ne', name: 'नेपाली', flag: '🇳🇵' },
    { code: 'si', name: 'සිංහල', flag: '🇱🇰' },
    { code: 'my', name: 'မြန်မာ', flag: '🇲🇲' },
    { code: 'km', name: 'ខ្មែរ', flag: '🇰🇭' },
    { code: 'lo', name: 'ລາວ', flag: '🇱🇦' },
    { code: 'sw', name: 'Kiswahili', flag: '🇹🇿' },
    { code: 'am', name: 'አማርኛ', flag: '🇪🇹' },
    { code: 'ha', name: 'Hausa', flag: '🇳🇬' },
    { code: 'yo', name: 'Yorùbá', flag: '🇳🇬' },
    { code: 'ig', name: 'Igbo', flag: '🇳🇬' },
    { code: 'zu', name: 'IsiZulu', flag: '🇿🇦' },
    { code: 'af', name: 'Afrikaans', flag: '🇿🇦' },
    { code: 'xh', name: 'IsiXhosa', flag: '🇿🇦' },
    { code: 'st', name: 'Sesotho', flag: '🇿🇦' },
    { code: 'tn', name: 'Setswana', flag: '🇿🇦' },
    { code: 'ss', name: 'SiSwati', flag: '🇸🇿' },
    { code: 've', name: 'Tshivenḓa', flag: '🇿🇦' },
    { code: 'ts', name: 'Xitsonga', flag: '🇿🇦' },
    { code: 'nr', name: 'IsiNdebele', flag: '🇿🇦' },
    { code: 'nso', name: 'Sesotho sa Leboa', flag: '🇿🇦' },
    { code: 'he', name: 'עברית', flag: '🇮🇱' },
    { code: 'yi', name: 'ייִדיש', flag: '🇮🇱' },
    { code: 'cy', name: 'Cymraeg', flag: '🇬🇧' },
    { code: 'ga', name: 'Gaeilge', flag: '🇮🇪' },
    { code: 'is', name: 'Íslenska', flag: '🇮🇸' },
    { code: 'mt', name: 'Malti', flag: '🇲🇹' },
    { code: 'eu', name: 'Euskera', flag: '🇪🇸' },
    { code: 'ca', name: 'Català', flag: '🇪🇸' },
    { code: 'gl', name: 'Galego', flag: '🇪🇸' },
    { code: 'sq', name: 'Shqip', flag: '🇦🇱' },
    { code: 'mk', name: 'Македонски', flag: '🇲🇰' },
    { code: 'bs', name: 'Bosanski', flag: '🇧🇦' },
    { code: 'me', name: 'Crnogorski', flag: '🇲🇪' },
    { code: 'lb', name: 'Lëtzebuergesch', flag: '🇱🇺' },
    { code: 'rm', name: 'Rumantsch', flag: '🇨🇭' },
    { code: 'gd', name: 'Gàidhlig', flag: '🇬🇧' },
    { code: 'gv', name: 'Gaelg', flag: '🇮🇲' },
    { code: 'fo', name: 'Føroyskt', flag: '🇫🇴' },
    { code: 'kl', name: 'Kalaallisut', flag: '🇬🇱' },
    { code: 'se', name: 'Davvisámegiella', flag: '🇳🇴' },
    { code: 'sm', name: 'Gagana Samoa', flag: '🇼🇸' },
    { code: 'to', name: 'Lea fakatonga', flag: '🇹🇴' },
    { code: 'ty', name: 'Reo Tahiti', flag: '🇵🇫' },
    { code: 'haw', name: 'ʻŌlelo Hawaiʻi', flag: '🇺🇸' },
    { code: 'mi', name: 'Te Reo Māori', flag: '🇳🇿' },
    { code: 'fj', name: 'Vosa Vakaviti', flag: '🇫🇯' },
    { code: 'bi', name: 'Bislama', flag: '🇻🇺' },
    { code: 'tpi', name: 'Tok Pisin', flag: '🇵🇬' },
    { code: 'ch', name: 'Chamoru', flag: '🇬🇺' },
    { code: 'mh', name: 'Kajin M̧ajeļ', flag: '🇲🇭' },
    { code: 'na', name: 'Dorerin Naoero', flag: '🇳🇷' },
    { code: 'gil', name: 'Taetae ni Kiribati', flag: '🇰🇮' },
    { code: 'tvl', name: 'Te \'gana Tuvalu', flag: '🇹🇻' },
    { code: 'wls', name: 'Faka\'uvea', flag: '🇼🇫' },
    { code: 'niu', name: 'Lea faka-Niue', flag: '🇳🇺' },
    { code: 'crs', name: 'Seselwa', flag: '🇸🇨' },
    { code: 'mfe', name: 'Kreol morisien', flag: '🇲🇺' },
    { code: 'rcf', name: 'Kréol rénioné', flag: '🇷🇪' },
    { code: 'gcf', name: 'Kréyòl gwadloupéyen', flag: '🇬🇵' },
    { code: 'acf', name: 'Kréyòl matinik', flag: '🇲🇶' },
    { code: 'ht', name: 'Kreyòl ayisyen', flag: '🇭🇹' }
  ], []);

  const currentLanguage = languages.find(lang => lang.code === language);

  // Filter languages based on search term
  const filteredLanguages = useMemo(() => {
    if (!searchTerm) return languages;
    return languages.filter(lang => 
      lang.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lang.code.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, languages]);

  const handleLanguageChange = (newLanguage) => {
    changeLanguage(newLanguage);
    setIsOpen(false);
    setSearchTerm('');
  };

  return (
    <div className="relative">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[var(--color-secondary-lighter)]/70 
                   hover:bg-[var(--color-secondary-lighter)] text-[var(--color-text-secondary)] 
                   hover:text-[var(--color-primary)] transition-colors duration-300
                   border border-[var(--color-border)] hover:border-[var(--color-primary)]"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Globe size={16} />
        <span className="text-sm font-medium">{currentLanguage?.flag}</span>
        <span className="text-sm font-medium hidden sm:inline">{currentLanguage?.name}</span>
        <ChevronDown 
          size={14} 
          className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute top-full right-0 mt-2 w-80 max-h-96 bg-[var(--color-secondary-lighter)] 
                     border border-[var(--color-border)] rounded-lg shadow-xl backdrop-blur-md z-50"
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <div className="p-3">
              {/* Search input */}
              <div className="relative mb-3">
                <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[var(--color-text-secondary)]" />
                <input
                  type="text"
                  placeholder="Search languages..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-3 py-2 text-sm bg-[var(--color-secondary-darker)]/50 
                           border border-[var(--color-border)] rounded-lg text-[var(--color-text)] 
                           placeholder-[var(--color-text-secondary)] focus:outline-none focus:ring-2 
                           focus:ring-[var(--color-primary)] focus:border-transparent"
                />
              </div>
              
              {/* Language list */}
              <div className="max-h-64 overflow-y-auto">
                {filteredLanguages.map((lang) => (
                  <motion.button
                    key={lang.code}
                    onClick={() => handleLanguageChange(lang.code)}
                    className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium
                               transition-colors duration-200 ${
                                 language === lang.code
                                   ? 'bg-[var(--color-primary)]/20 text-[var(--color-primary)]'
                                   : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text)] hover:bg-[var(--color-secondary-darker)]/50'
                               }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="text-lg">{lang.flag}</span>
                    <span className="flex-1 text-left">{lang.name}</span>
                    <span className="text-xs text-[var(--color-text-secondary)]">{lang.code}</span>
                    {language === lang.code && (
                      <Check size={16} className="text-[var(--color-primary)]" />
                    )}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSwitcher;
