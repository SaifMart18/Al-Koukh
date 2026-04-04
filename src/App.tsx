import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  MessageCircle, 
  MapPin, 
  Clock, 
  Stethoscope, 
  ShieldCheck, 
  Syringe, 
  Scissors, 
  Heart, 
  Menu, 
  X, 
  ChevronLeft,
  Star,
  Activity,
  Instagram,
  Facebook,
  Loader2,
  AlertCircle,
  Sparkles,
  Pill,
  Home,
  PawPrint
} from 'lucide-react';

// --- Types ---
type Page = 'home' | 'services' | 'contact';

// --- Components ---

const Navbar = ({ currentPage, setPage }: { currentPage: Page, setPage: (p: Page) => void }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'الرئيسية' },
    { id: 'services', label: 'خدماتنا' },
    { id: 'contact', label: 'اتصل بنا' },
  ];

  return (
    <nav className="glass-nav">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 cursor-pointer flex items-center gap-3 group" onClick={() => setPage('home')}>
            <div className="w-12 h-12 bg-primary text-white rounded-2xl flex items-center justify-center shadow-lg shadow-primary/30 group-hover:scale-110 transition-transform">
              <PawPrint size={28} />
            </div>
            <span className="text-2xl font-black text-primary tracking-tight">الكوخ</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => setPage(link.id as Page)}
                className={`text-lg font-bold transition-colors hover:text-primary ${
                  currentPage === link.id ? 'text-primary' : 'text-gray-600'
                }`}
              >
                {link.label}
              </button>
            ))}
            <button onClick={() => setPage('contact')} className="btn-primary py-2 px-6 text-sm">
              احجز موعد
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-primary focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => {
                    setPage(link.id as Page);
                    setIsOpen(false);
                  }}
                  className={`block w-full text-right px-3 py-4 text-base font-bold rounded-xl ${
                    currentPage === link.id ? 'bg-primary/10 text-primary' : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <button 
                onClick={() => {
                  setPage('contact');
                  setIsOpen(false);
                }}
                className="w-full btn-primary mt-4"
              >
                احجز موعد
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = ({ setPage }: { setPage: (p: Page) => void }) => (
  <section className="relative min-h-screen flex items-center overflow-hidden bg-gray-50 pt-16 lg:pt-20">
    {/* Background Pattern */}
    <div className="absolute inset-0 opacity-5 pointer-events-none">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2"></div>
    </div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12 lg:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="order-1 lg:order-1 text-center lg:text-right flex flex-col items-center lg:items-start"
        >
          <div className="inline-flex items-center gap-2 px-6 py-2.5 bg-primary/10 text-primary rounded-full text-sm font-black mb-10 tracking-wide mx-auto lg:mx-0">
            <Star size={18} fill="currentColor" />
            <span>العيادة البيطرية الأكثر ثقة في بغداد - المنصور</span>
          </div>
          
          <h1 className="text-4xl md:text-7xl font-black text-gray-900 leading-tight mb-10">
            رعاية متكاملة <br />
            <span className="text-primary">لحيواناتك الأليفة</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-14 leading-relaxed max-w-xl">
            نقدم أفضل الخدمات البيطرية بأيدي خبراء متخصصين، لضمان صحة وسعادة أصدقائك الأليفين في بيئة آمنة ومريحة.
          </p>
          
          <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-12 w-full lg:w-auto">
            <button onClick={() => setPage('contact')} className="btn-primary text-lg md:text-xl px-8 md:px-10 py-4 w-full sm:w-auto">
              احجز موعد الآن
            </button>
            <button onClick={() => setPage('services')} className="btn-secondary text-lg md:text-xl px-8 md:px-10 py-4 w-full sm:w-auto">
              استعرض خدماتنا
            </button>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="flex -space-x-4 rtl:space-x-reverse">
              {[1, 2, 3, 4].map((i) => (
                <img 
                  key={i}
                  src={`https://picsum.photos/seed/pet${i}/100/100`} 
                  alt="Pet" 
                  className="w-12 h-12 rounded-full border-4 border-white object-cover"
                  referrerPolicy="no-referrer"
                />
              ))}
            </div>
            <div className="text-sm">
              <div className="flex text-yellow-500 mb-1">
                {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <p className="text-gray-500 font-bold">+500 عميل سعيد في بغداد</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="order-2 lg:order-2 relative"
        >
          <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-[8px] lg:border-[12px] border-white rotate-2 hover:rotate-0 transition-transform duration-500">
            <img 
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1200&auto=format&fit=crop" 
              alt="Veterinary Care" 
              className="w-full h-[600px] object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-primary/20 rounded-full blur-3xl -z-10"></div>
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10"></div>
          
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 -right-6 bg-white p-6 rounded-3xl shadow-2xl z-20 flex items-center gap-4 border border-gray-100"
          >
            <div className="w-14 h-14 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center">
              <ShieldCheck size={32} />
            </div>
            <div>
              <h4 className="font-black text-gray-900">رعاية آمنة</h4>
              <p className="text-xs text-gray-500">تعقيم مستمر 100%</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  </section>
);

const About = () => (
  <section className="py-24 bg-white overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="grid grid-cols-2 gap-4">
            <img 
              src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=1964&auto=format&fit=crop" 
              alt="Cat" 
              className="rounded-3xl h-64 w-full object-cover mt-12"
              referrerPolicy="no-referrer"
            />
            <img 
              src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?q=80&w=2071&auto=format&fit=crop" 
              alt="Dog" 
              className="rounded-3xl h-64 w-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary rounded-full flex items-center justify-center border-8 border-white shadow-xl">
            <Heart size={48} className="text-white fill-current" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-primary font-black text-xl mb-4">من نحن</h2>
          <h3 className="text-4xl font-black text-gray-900 mb-6 leading-tight">
            نحن نهتم بحيواناتك <br /> كما لو كانت عائلتنا
          </h3>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            في عيادة الكوخ، نؤمن بأن كل حيوان أليف يستحق أفضل رعاية طبية ممكنة. فريقنا من الأطباء البيطريين المحترفين يجمع بين الخبرة الطبية والرحمة الإنسانية لتقديم خدمات شاملة.
          </p>
          <div className="space-y-4">
            {[
              "أطباء بيطريون ذوو خبرة عالية",
              "أحدث التقنيات الطبية والتشخيصية",
              "بيئة هادئة ومريحة للحيوانات",
              "رعاية طارئة على مدار الساعة"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-6 h-6 bg-primary/10 text-primary rounded-full flex items-center justify-center">
                  <ShieldCheck size={14} />
                </div>
                <span className="font-bold text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const ServiceCard = ({ icon: Icon, title, description, delay = 0 }: { icon: any, title: string, description: string, delay?: number, key?: any }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    whileHover={{ 
      y: -12, 
      scale: 1.02,
      boxShadow: "0 25px 50px -12px rgba(181, 0, 209, 0.15)"
    }}
    viewport={{ once: true }}
    transition={{ 
      delay,
      type: "spring",
      stiffness: 300,
      damping: 20
    }}
    className="bg-white p-8 rounded-[2rem] border border-gray-100 text-center cursor-pointer relative z-10"
  >
    <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
      <Icon size={32} />
    </div>
    <h4 className="text-2xl font-black text-gray-900 mb-4">{title}</h4>
    <p className="text-gray-500 leading-relaxed">{description}</p>
  </motion.div>
);

const HomeServices = ({ setPage }: { setPage: (p: Page) => void }) => (
  <section className="py-24 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-primary font-black text-xl mb-4">خدماتنا</h2>
        <h3 className="text-4xl font-black text-gray-900">ماذا نقدم لأصدقائك الصغار؟</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <ServiceCard 
          icon={Stethoscope} 
          title="فحص عام" 
          description="فحوصات دورية شاملة للتأكد من سلامة حيوانك ونموه السليم."
          delay={0.1}
        />
        <ServiceCard 
          icon={Syringe} 
          title="تطعيمات" 
          description="برامج تحصين متكاملة ضد الأمراض المعدية والشائعة."
          delay={0.2}
        />
        <ServiceCard 
          icon={Scissors} 
          title="رعاية وتجميل" 
          description="خدمات قص الشعر، الاستحمام، وتقليم الأظافر باحترافية."
          delay={0.3}
        />
        <ServiceCard 
          icon={Activity} 
          title="جراحة" 
          description="عمليات جراحية دقيقة باستخدام أحدث الأجهزة والتعقيم."
          delay={0.4}
        />
      </div>

      <div className="mt-16 text-center">
        <button onClick={() => setPage('services')} className="btn-secondary">
          عرض جميع الخدمات
        </button>
      </div>
    </div>
  </section>
);

const WhyUs = () => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-primary rounded-[3rem] p-12 lg:p-20 relative overflow-hidden">
        {/* Background Shapes */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <h2 className="text-white/80 font-black text-xl mb-4">لماذا نحن؟</h2>
            <h3 className="text-4xl lg:text-5xl font-black text-white mb-8 leading-tight">
              نحن الخيار الأول <br /> لأصحاب الحيوانات الأليفة
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { title: "أطباء محترفون", desc: "فريق طبي متخصص ذو خبرة عالمية" },
                { title: "رعاية عالية", desc: "اهتمام شخصي بكل حيوان أليف" },
                { title: "أجهزة حديثة", desc: "أحدث التقنيات للتشخيص والعلاج" },
                { title: "أسعار مناسبة", desc: "أفضل جودة مقابل سعر عادل" }
              ].map((item, i) => (
                <div key={i} className="text-white">
                  <div className="text-2xl font-black mb-2">{item.title}</div>
                  <div className="text-white/70">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="hidden lg:block">
            <img 
              src="https://images.unsplash.com/photo-1576201836106-db1758fd1c97?q=80&w=2070&auto=format&fit=crop" 
              alt="Happy pet" 
              className="rounded-3xl shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

const CTA = () => (
  <section className="relative py-24 overflow-hidden bg-primary">
    <div className="absolute inset-0 z-0 opacity-20">
      <img 
        src="https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?q=80&w=2060&auto=format&fit=crop" 
        alt="Veterinary background" 
        className="w-full h-full object-cover"
        referrerPolicy="no-referrer"
      />
    </div>
    <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="bg-white p-12 rounded-[3rem] shadow-2xl border border-gray-100"
      >
        <h2 className="text-4xl font-black text-gray-900 mb-6">هل يحتاج أليفك إلى رعاية؟</h2>
        <p className="text-xl text-gray-600 mb-10">
          نحن هنا للمساعدة! تواصل معنا الآن لحجز موعد أو للاستفسار عن خدماتنا.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <a href="https://wa.me/9647704144757" target="_blank" rel="noreferrer" className="btn-primary flex items-center gap-2 bg-green-500 hover:bg-green-600 shadow-green-500/20">
            <MessageCircle size={20} />
            <span>تواصل عبر واتساب</span>
          </a>
          <a href="tel:07704144757" className="btn-secondary flex items-center gap-2">
            <Phone size={20} />
            <span>اتصل بنا الآن</span>
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

const ClinicShowcase = () => (
  <section className="py-24 bg-white overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative rounded-[3rem] overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1599443015574-be5fe8a05783?q=80&w=1200&auto=format&fit=crop" 
              alt="Veterinary Clinic Work" 
              className="w-full h-[500px] object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
          </div>
          <motion.div 
            whileHover={{ y: -10, scale: 1.05 }}
            className="absolute -bottom-8 -left-8 bg-white p-8 rounded-3xl shadow-xl border border-gray-100 max-w-xs z-20 cursor-default"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center">
                <Stethoscope size={24} />
              </div>
              <h4 className="font-black text-lg">أحدث الأجهزة</h4>
            </div>
            <p className="text-gray-600 text-sm">نستخدم تقنيات حديثة لضمان دقة التشخيص وسرعة العلاج.</p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-primary font-black text-xl mb-4">لماذا تختار عيادتنا؟</h2>
          <h3 className="text-4xl font-black text-gray-900 mb-8 leading-tight">
            بيئة طبية متطورة <br /> لرعاية أليفك
          </h3>
          <p className="text-gray-600 text-lg mb-10 leading-relaxed">
            في عيادة الكوخ، نحرص على توفير بيئة طبية معقمة ومجهزة بأحدث الوسائل التشخيصية. عملنا لا يقتصر على العلاج فقط، بل نهتم براحة الحيوان النفسية أثناء تواجده معنا.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { title: "تشخيص دقيق", desc: "أجهزة سونار وتحاليل متطورة" },
              { title: "تعقيم يومي", desc: "نظافة فائقة لغرف العمليات" },
              { title: "طاقم خبير", desc: "أطباء متخصصون في الجراحة" },
              { title: "متابعة مستمرة", desc: "تواصل دائم بعد العلاج" }
            ].map((item, i) => (
              <div key={i} className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-primary">
                  <ShieldCheck size={18} />
                  <span className="font-black">{item.title}</span>
                </div>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const Footer = ({ setPage }: { setPage: (p: Page) => void }) => (
  <footer className="bg-gray-900 text-white pt-20 pb-10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-primary text-white rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
              <PawPrint size={24} />
            </div>
            <h3 className="text-2xl font-black text-primary">الكوخ</h3>
          </div>
          <p className="text-gray-400 leading-relaxed">
            عيادة الكوخ البيطرية هي وجهتك الأولى لرعاية حيواناتك الأليفة. نقدم خدمات طبية وتجميلية متكاملة بأعلى المعايير.
          </p>
        </div>
        <div>
          <h4 className="text-xl font-bold mb-6">روابط سريعة</h4>
          <ul className="space-y-4 text-gray-400">
            <li><button onClick={() => setPage('home')} className="hover:text-primary transition-colors">الرئيسية</button></li>
            <li><button onClick={() => setPage('services')} className="hover:text-primary transition-colors">خدماتنا</button></li>
            <li><button onClick={() => setPage('contact')} className="hover:text-primary transition-colors">اتصل بنا</button></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-bold mb-6">تواصل معنا</h4>
          <ul className="space-y-4 text-gray-400">
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-primary" />
              <span>07704144757</span>
            </li>
            <li className="flex items-center gap-3">
              <MapPin size={18} className="text-primary" />
              <span>المنصور، ساحة اللقاء، شارع الوشاش</span>
            </li>
            <li className="flex items-center gap-3">
              <Clock size={18} className="text-primary" />
              <span>يومياً: 9 صباحاً - 12 مساءً</span>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-bold mb-6">تابعنا</h4>
          <div className="flex gap-4">
            <a href="https://www.instagram.com/kokh_vet?igsh=MTE3OGc2OHUwMWZxZA%3D%3D&utm_source=qr" target="_blank" rel="noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
              <Instagram size={18} />
            </a>
            <a href="https://www.facebook.com/share/18995mZBgE/?mibextid=wwXIfr" target="_blank" rel="noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
              <Facebook size={18} />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 pt-10 text-center text-gray-500 text-sm">
        جميع الحقوق محفوظة © {new Date().getFullYear()} عيادة الكوخ البيطرية
      </div>
    </div>
  </footer>
);

// --- Pages ---

const HomePage = ({ setPage }: { setPage: (p: Page) => void, key?: any }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <Hero setPage={setPage} />
    <About />
    <ClinicShowcase />
    <HomeServices setPage={setPage} />
    <WhyUs />
    <CTA />
  </motion.div>
);

const ServiceDetailCard = ({ icon: Icon, title, description, image, delay = 0 }: { icon: any, title: string, description: string, image: string, delay?: number, key?: any }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    whileHover={{ y: -10 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    className="bg-white rounded-[2.5rem] overflow-hidden shadow-lg border border-gray-100 flex flex-col h-full group hover:shadow-2xl transition-all duration-500"
  >
    <div className="relative h-64 overflow-hidden">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
        <span className="text-white font-bold text-sm">تعرف على المزيد</span>
      </div>
      <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm text-primary rounded-2xl flex items-center justify-center shadow-lg">
        <Icon size={24} />
      </div>
    </div>
    <div className="p-8 flex-grow flex flex-col">
      <h4 className="text-2xl font-black text-gray-900 mb-4 group-hover:text-primary transition-colors">{title}</h4>
      <p className="text-gray-600 leading-relaxed mb-6 flex-grow">{description}</p>
      <div className="pt-6 border-t border-gray-50">
        <div className="flex items-center gap-2 text-primary font-bold text-sm">
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
          <span>خدمة متوفرة الآن</span>
        </div>
      </div>
    </div>
  </motion.div>
);

const ServicesPage = (_props: { key?: any }) => {
  const allServices = [
    { 
      icon: Stethoscope, 
      title: "الفحص الطبي الشامل", 
      image: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?q=80&w=800&auto=format&fit=crop",
      desc: "نقدم فحوصات دورية دقيقة تشمل فحص القلب، الرئتين، العيون، والأذنين. نستخدم أحدث أجهزة السونار والتحاليل لضمان الكشف المبكر عن أي مشاكل صحية قد تواجه أليفك." 
    },
    { 
      icon: Syringe, 
      title: "برامج التطعيمات", 
      image: "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?q=80&w=800&auto=format&fit=crop",
      desc: "حماية حيوانك تبدأ من التحصين. نوفر جميع اللقاحات الأساسية والسنوية للقطط والكلاب ضد الأمراض الفيروسية والبكتيرية الخطيرة، مع جدول متابعة دقيق لكل حالة." 
    },
    { 
      icon: Activity, 
      title: "الجراحة العامة والمتخصصة", 
      image: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?q=80&w=800&auto=format&fit=crop",
      desc: "تضم عيادتنا غرفة عمليات مجهزة بالكامل لإجراء العمليات الصغرى والكبرى، من عمليات التعقيم إلى جراحة العظام والأنسجة الرخوة، تحت إشراف طاقم جراحي خبير." 
    },
    { 
      icon: AlertCircle, 
      title: "قسم الطوارئ والإنعاش", 
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop",
      desc: "نحن مستعدون دائماً للحالات الحرجة. سواء كانت حوادث أو تسمم أو نوبات مفاجئة، نوفر رعاية طبية فورية وأجهزة تنفس اصطناعي لإنقاذ حياة أليفك في أسرع وقت." 
    },
    { 
      icon: Sparkles, 
      title: "العناية التجميلية (Grooming)", 
      image: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?q=80&w=800&auto=format&fit=crop",
      desc: "دلل أليفك بخدماتنا التجميلية التي تشمل الاستحمام الطبي، قص الشعر الاحترافي، تقليم الأظافر، وتنظيف الأذنين، باستخدام منتجات آمنة تماماً ومخصصة للحيوانات." 
    },
    { 
      icon: Pill, 
      title: "الصيدلية والمكملات", 
      image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=800&auto=format&fit=crop",
      desc: "صيدليتنا توفر تشكيلة واسعة من الأدوية البيطرية الأصلية، الفيتامينات، والمكملات الغذائية، بالإضافة إلى الأغذية العلاجية المخصصة لحالات الحساسية ومشاكل الهضم." 
    },
    { 
      icon: Heart, 
      title: "طب وجراحة الأسنان", 
      image: "https://images.unsplash.com/photo-1599443015574-be5fe8a05783?q=80&w=800&auto=format&fit=crop",
      desc: "صحة الفم تؤثر على صحة الجسم بالكامل. نقدم خدمات تنظيف الجير بالموجات فوق الصوتية، علاج التهابات اللثة، وخلع الأسنان التالفة لضمان راحة أليفك أثناء الأكل." 
    },
    { 
      icon: Home, 
      title: "الفندق والرعاية النهارية", 
      image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?q=80&w=800&auto=format&fit=crop",
      desc: "سافر وأنت مطمئن! نوفر غرفاً فندقية مكيفة ونظيفة، مع وجبات غذائية متوازنة ووقت للعب، تحت إشراف طبي مستمر لضمان سلامة حيوانك طوال فترة إقامته." 
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="py-24 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-5xl font-black text-gray-900 mb-6">خدماتنا الشاملة</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            نحن نقدم مجموعة واسعة من الخدمات البيطرية المصممة خصيصاً لتلبية احتياجات حيوانك الأليف في كل مرحلة من مراحل حياته.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {allServices.map((service, i) => (
            <ServiceDetailCard 
              key={i}
              icon={service.icon}
              title={service.title}
              description={service.desc}
              image={service.image}
              delay={i * 0.1}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const ContactPage = (_props: { key?: any }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="py-24 bg-white"
  >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-20">
        <h1 className="text-5xl font-black text-gray-900 mb-6">تواصل معنا</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          فريقنا جاهز للرد على جميع استفساراتكم وحجز المواعيد.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="space-y-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6">
                <Phone size={24} />
              </div>
              <h4 className="text-xl font-bold mb-2">رقم الهاتف</h4>
              <p className="text-gray-600">07704144757</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mb-6">
                <MessageCircle size={24} />
              </div>
              <h4 className="text-xl font-bold mb-2">واتساب</h4>
              <p className="text-gray-600">07704144757</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6">
                <MapPin size={24} />
              </div>
              <h4 className="text-xl font-bold mb-2">العنوان</h4>
              <p className="text-gray-600">المنصور، ساحة اللقاء، شارع الوشاش قرب كاتب عدل</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6">
                <Clock size={24} />
              </div>
              <h4 className="text-xl font-bold mb-2">أوقات العمل</h4>
              <p className="text-gray-600">يومياً: 9 صباحاً - 12 مساءً</p>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <a href="https://wa.me/9647704144757" target="_blank" rel="noreferrer" className="btn-primary flex items-center gap-2 bg-green-500 hover:bg-green-600">
              <MessageCircle size={20} />
              <span>تواصل عبر واتساب</span>
            </a>
            <a href="tel:07704144757" className="btn-secondary flex items-center gap-2">
              <Phone size={20} />
              <span>اتصل بنا الآن</span>
            </a>
            <a href="https://maps.app.goo.gl/mughuGEqwwryoGjv8?g_st=ac" target="_blank" rel="noreferrer" className="btn-secondary flex items-center gap-2 border-primary/20">
              <MapPin size={20} />
              <span>موقعنا على الخريطة</span>
            </a>
          </div>
        </div>

        <div className="h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white bg-gray-100">
          <iframe 
            src="https://maps.google.com/maps?q=المنصور%20ساحة%20اللقاء%20شارع%20الوشاش%20قرب%20كاتب%20عدل&t=&z=15&ie=UTF8&iwloc=&output=embed" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  </motion.div>
);

// --- Main App ---

export default function App() {
  const [page, setPage] = useState<Page>('home');
  const [isLoading, setIsLoading] = useState(false);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  const handleSetPage = (newPage: Page) => {
    if (newPage === page) return;
    setIsLoading(true);
    setTimeout(() => {
      setPage(newPage);
      setIsLoading(false);
    }, 600);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar currentPage={page} setPage={handleSetPage} />
      
      <main className="flex-grow relative">
        <AnimatePresence mode="wait">
          {isLoading ? (
            <motion.div
              key="loader"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 z-40 flex items-center justify-center bg-white/50 backdrop-blur-sm min-h-[60vh]"
            >
              <div className="flex flex-col items-center gap-4">
                <Loader2 className="w-12 h-12 text-primary animate-spin" />
                <span className="text-primary font-bold animate-pulse">جاري التحميل...</span>
              </div>
            </motion.div>
          ) : (
            <>
              {page === 'home' && <HomePage key="home" setPage={handleSetPage} />}
              {page === 'services' && <ServicesPage key="services" />}
              {page === 'contact' && <ContactPage key="contact" />}
            </>
          )}
        </AnimatePresence>
      </main>

      <Footer setPage={handleSetPage} />

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/9647704144757" 
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-8 left-8 z-50 w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all"
      >
        <MessageCircle size={32} />
      </a>
    </div>
  );
}
