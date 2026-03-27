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
  Home
} from 'lucide-react';

// --- Types ---
type Page = 'home' | 'services' | 'contact';

// --- Components ---

const Logo = ({ className = "h-10 w-10" }: { className?: string }) => (
  <div className={`flex items-center gap-2 ${className}`}>
    <div className="relative h-10 w-10 bg-primary rounded-xl flex items-center justify-center overflow-hidden">
      {/* Simple House Shape */}
      <div className="absolute inset-0 flex items-center justify-center">
        <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
          <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <circle cx="12" cy="13" r="3" fill="white" />
          <path d="M12 11.5c.5-.5 1-.5 1.5 0s.5 1 0 1.5l-1.5 1.5-1.5-1.5c-.5-.5-.5-1 0-1.5s1-.5 1.5 0z" fill="primary" />
        </svg>
      </div>
    </div>
    <div className="flex flex-col">
      <span className="text-xl font-extrabold text-primary leading-none">الكوخ</span>
      <span className="text-[10px] tracking-[0.2em] text-primary-dark font-bold uppercase">AL KOUKH</span>
    </div>
  </div>
);

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
          <div className="flex-shrink-0 cursor-pointer" onClick={() => setPage('home')}>
            <Logo />
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
  <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-gray-50">
    {/* Background Pattern */}
    <div className="absolute inset-0 opacity-5 pointer-events-none">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
    </div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-bold mb-6">
            <Star size={16} fill="currentColor" />
            <span>العيادة البيطرية الأكثر ثقة</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-tight mb-6">
            رعاية متكاملة <br />
            <span className="text-primary">لحيواناتك الأليفة</span>
          </h1>
          <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-lg">
            نقدم أفضل الخدمات البيطرية بأيدي خبراء متخصصين، لضمان صحة وسعادة أصدقائك الأليفين في بيئة آمنة ومريحة.
          </p>
          <div className="flex flex-wrap gap-4">
            <button onClick={() => setPage('contact')} className="btn-primary">
              احجز موعد
            </button>
            <button onClick={() => setPage('services')} className="btn-secondary">
              خدماتنا
            </button>
          </div>
          
          <div className="mt-12 flex items-center gap-6">
            <div className="flex -space-x-3 rtl:space-x-reverse">
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
            <div className="text-sm font-bold text-gray-500">
              <span className="text-primary">+500</span> حيوان أليف سعيد
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
            <img 
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2070&auto=format&fit=crop" 
              alt="Veterinary Clinic Team" 
              className="w-full h-[500px] object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Floating Card */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 -right-6 z-20 bg-white p-6 rounded-3xl shadow-xl flex items-center gap-4 border border-gray-100"
          >
            <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
              <Activity size={24} />
            </div>
            <div>
              <div className="text-xs text-gray-500 font-bold">صحة ممتازة</div>
              <div className="text-lg font-black text-gray-900">رعاية 24/7</div>
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
    viewport={{ once: true }}
    transition={{ delay }}
    className="bg-white p-8 rounded-[2rem] border border-gray-100 card-hover text-center"
  >
    <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
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
  <section className="py-24 bg-gray-50">
    <div className="max-w-4xl mx-auto px-4 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="bg-white p-12 rounded-[3rem] shadow-xl border border-gray-100"
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

const Footer = ({ setPage }: { setPage: (p: Page) => void }) => (
  <footer className="bg-gray-900 text-white pt-20 pb-10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div>
          <Logo className="mb-6 invert brightness-0" />
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
              <span>النجف الأشرف، حي العدالة</span>
            </li>
            <li className="flex items-center gap-3">
              <Clock size={18} className="text-primary" />
              <span>يومياً: 4م - 10م</span>
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
    <HomeServices setPage={setPage} />
    <WhyUs />
    <CTA />
  </motion.div>
);

const ServicesPage = (_props: { key?: any }) => {
  const allServices = [
    { icon: Stethoscope, title: "الفحص الطبي", desc: "فحوصات دورية شاملة للتأكد من سلامة حيوانك ونموه السليم." },
    { icon: Syringe, title: "التطعيمات", desc: "برامج تحصين متكاملة ضد الأمراض المعدية والشائعة." },
    { icon: Activity, title: "العمليات الجراحية", desc: "عمليات جراحية دقيقة باستخدام أحدث الأجهزة والتعقيم." },
    { icon: AlertCircle, title: "علاج الحالات الطارئة", desc: "دعم طبي سريع في حالات الطوارئ والحوادث على مدار الساعة." },
    { icon: Sparkles, title: "العناية والنظافة", desc: "خدمات قص الشعر، الاستحمام، وتقليم الأظافر باحترافية." },
    { icon: Pill, title: "الصيدلية البيطرية", desc: "توفير جميع الأدوية والمكملات الغذائية اللازمة." },
    { icon: Heart, title: "رعاية الأسنان", desc: "تنظيف وعلاج مشاكل الأسنان واللثة للحيوانات." },
    { icon: Home, title: "فندق الحيوانات", desc: "إقامة مريحة وآمنة لحيوانك أثناء غيابك." },
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {allServices.map((service, i) => (
            <ServiceCard 
              key={i}
              icon={service.icon}
              title={service.title}
              description={service.desc}
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
              <p className="text-gray-600">النجف الأشرف، حي العدالة</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6">
                <Clock size={24} />
              </div>
              <h4 className="text-xl font-bold mb-2">أوقات العمل</h4>
              <p className="text-gray-600">يومياً: 4م - 10م</p>
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
            <a href="https://maps.app.goo.gl/Q8nQpMCTWE8vr49D9?g_st=ac" target="_blank" rel="noreferrer" className="btn-secondary flex items-center gap-2 border-primary/20">
              <MapPin size={20} />
              <span>موقعنا على الخريطة</span>
            </a>
          </div>
        </div>

        <div className="h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white bg-gray-100">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.7654321!2d44.3456789!3d32.0123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzLCsDAwJzQ0LjQiTiA0NMKwMjAnMDQuNCJF!5e0!3m2!1sar!2siq!4v1711534567890!5m2!1sar!2siq" 
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
