
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-black text-white">
      {/* Навигация */}
      <header className="p-5 sticky top-0 bg-black/80 backdrop-blur-md z-10">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold flex items-center">
            <span className="relative">
              <span className="absolute -inset-2 rounded-full bg-purple-500/30 blur-xl animate-pulse"></span>
              <Icon name="Camera" className="text-purple-400 h-8 w-8 mr-2" />
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              SPB Models
            </span>
          </Link>
          <nav className="hidden md:flex space-x-6 items-center">
            <Link to="/" className="text-purple-400 transition-colors">Главная</Link>
            <Link to="/models" className="hover:text-purple-400 transition-colors">Модели</Link>
            <Link to="/portfolio" className="hover:text-purple-400 transition-colors">Портфолио</Link>
            <Link to="/contacts" className="hover:text-purple-400 transition-colors">Контакты</Link>
          </nav>
          <Button asChild className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
            <a href="https://t.me/Vocoders" target="_blank" rel="noopener noreferrer">
              <Icon name="Send" className="mr-2 h-4 w-4" />
              Telegram
            </a>
          </Button>
        </div>
      </header>

      {/* Главный баннер */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1545239351-ef35f43d514b')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent"></div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 relative z-1"
        >
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                Ищу модель в СПб для ТФП съёмок
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              Приглашаю красивых длинноногих моделей от 18 лет для творческих фотосессий в Санкт-Петербурге
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                <Link to="/models">Посмотреть модели</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-950/30">
                <a href="https://t.me/Vocoders" target="_blank" rel="noopener noreferrer">
                  <Icon name="Send" className="mr-2 h-4 w-4" />
                  Связаться в Telegram
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Преимущества */}
      <section className="py-16 bg-black/80">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Преимущества сотрудничества
            </span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "Camera",
                title: "Профессиональное оборудование",
                desc: "Съемки проводятся на высококлассную технику для получения идеальных снимков"
              },
              {
                icon: "Image",
                title: "Портфолио моделям",
                desc: "Каждая модель получает обработанные фотографии для своего портфолио"
              },
              {
                icon: "Star",
                title: "Опыт работы",
                desc: "Многолетний опыт работы с моделями разного уровня подготовки"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-slate-900/60 border-purple-900/40 h-full">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center mb-4">
                      <Icon name={item.icon} className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-400">{item.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* О ТФП */}
      <section className="py-16 bg-gradient-to-b from-slate-900 to-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute -inset-4 rounded-xl bg-purple-500/20 blur-xl animate-pulse"></div>
                <img 
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb" 
                  alt="Модель на ТФП съемке" 
                  className="rounded-xl relative z-10 w-full object-cover" 
                />
              </motion.div>
            </div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="md:w-1/2"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                  Что такое ТФП съемка?
                </span>
              </h2>
              <p className="text-gray-300 mb-4">
                ТФП (Time for Print) — формат сотрудничества между фотографом и моделью, 
                при котором модель получает обработанные снимки для своего портфолио, а фотограф — 
                возможность реализовать свои творческие идеи и пополнить портфолио.
              </p>
              <p className="text-gray-300 mb-6">
                Я ищу красивых моделей от 18 лет с длинными ногами и приятной внешностью для проведения 
                творческих фотосессий в Санкт-Петербурге. Это отличная возможность получить качественные 
                снимки для своего портфолио и поработать с профессиональным фотографом.
              </p>
              <Button asChild className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                <a href="https://t.me/Vocoders" target="_blank" rel="noopener noreferrer">
                  <Icon name="Send" className="mr-2 h-4 w-4" />
                  Написать в Telegram
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-10 border-t border-purple-900/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <Link to="/" className="text-2xl font-bold flex items-center">
                <Icon name="Camera" className="text-purple-400 h-6 w-6 mr-2" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                  SPB Models
                </span>
              </Link>
              <p className="text-gray-500 mt-2">Поиск моделей для ТФП съемок в Санкт-Петербурге</p>
            </div>
            <div className="flex flex-col items-end">
              <p className="text-gray-400 mb-2">Связаться со мной:</p>
              <a 
                href="https://t.me/Vocoders" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-purple-400 hover:text-purple-300 transition-colors"
              >
                <Icon name="Send" className="mr-2 h-4 w-4" />
                t.me/Vocoders
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} SPB Models. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
