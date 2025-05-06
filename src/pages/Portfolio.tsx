
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Icon from "@/components/ui/icon";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const portfolioImages = {
  portrait: [
    "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43",
    "https://images.unsplash.com/photo-1504703395950-b89145a5425b",
    "https://images.unsplash.com/photo-1469334031218-e382a71b716b",
    "https://images.unsplash.com/photo-1531123897727-8f129e1688ce",
    "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df",
    "https://images.unsplash.com/photo-1604004555489-723a93d6ce74"
  ],
  fashion: [
    "https://images.unsplash.com/photo-1539109136881-3be0616acf4b",
    "https://images.unsplash.com/photo-1496440737103-cd596325d314",
    "https://images.unsplash.com/photo-1490481651871-ab68de25d43d",
    "https://images.unsplash.com/photo-1603217040930-34b483dd8f5f",
    "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2",
    "https://images.unsplash.com/photo-1581338834647-b0fb40704e21"
  ],
  studio: [
    "https://images.unsplash.com/photo-1513379733131-47fc74b45fc7",
    "https://images.unsplash.com/photo-1566695444192-57a054df5a5b",
    "https://images.unsplash.com/photo-1519091915001-8e1b5fdb7d8f",
    "https://images.unsplash.com/photo-1541101666642-e83f1877fc f",
    "https://images.unsplash.com/photo-1536924430914-91f9e2041b83",
    "https://images.unsplash.com/photo-1465145177013-d6570f707ffm"
  ]
};

const Portfolio = () => {
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
            <Link to="/" className="hover:text-purple-400 transition-colors">Главная</Link>
            <Link to="/models" className="hover:text-purple-400 transition-colors">Модели</Link>
            <Link to="/portfolio" className="text-purple-400 transition-colors">Портфолио</Link>
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

      {/* Заголовок */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                Портфолио фотографа
              </span>
            </h1>
            <p className="text-gray-300 text-lg mb-8">
              Ознакомьтесь с моими работами в различных жанрах фотографии. Я специализируюсь 
              на портретных, фэшн и студийных съемках с красивыми моделями в Санкт-Петербурге.
            </p>
            <div className="flex justify-center">
              <Button asChild className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                <a href="https://t.me/Vocoders" target="_blank" rel="noopener noreferrer">
                  <Icon name="Send" className="mr-2 h-4 w-4" />
                  Записаться на съемку
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Портфолио */}
      <section className="py-12 bg-black/80">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="portrait" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="bg-slate-800/50">
                <TabsTrigger value="portrait" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white">Портреты</TabsTrigger>
                <TabsTrigger value="fashion" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white">Фэшн</TabsTrigger>
                <TabsTrigger value="studio" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white">Студия</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="portrait" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {portfolioImages.portrait.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="aspect-[3/4] overflow-hidden rounded-lg relative group"
                  >
                    <img 
                      src={image} 
                      alt={`Портрет ${index + 1}`} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <div>
                        <h3 className="text-lg font-bold">Портретная съемка</h3>
                        <p className="text-sm text-gray-300">ТФП съемка в Санкт-Петербурге</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="fashion" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {portfolioImages.fashion.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="aspect-[3/4] overflow-hidden rounded-lg relative group"
                  >
                    <img 
                      src={image} 
                      alt={`Фэшн ${index + 1}`} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <div>
                        <h3 className="text-lg font-bold">Фэшн фотография</h3>
                        <p className="text-sm text-gray-300">Модная съемка в СПб</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="studio" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {portfolioImages.studio.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="aspect-[3/4] overflow-hidden rounded-lg relative group"
                  >
                    <img 
                      src={image} 
                      alt={`Студия ${index + 1}`} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <div>
                        <h3 className="text-lg font-bold">Студийная съемка</h3>
                        <p className="text-sm text-gray-300">Профессиональная студия в СПб</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                Хотите принять участие в фотосессии?
              </span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              Я предлагаю профессиональные ТФП фотосессии для красивых девушек от 18 лет в Санкт-Петербурге. 
              Вы получите качественные снимки для вашего портфолио, а я реализую свои творческие идеи.
            </p>
            <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
              <a href="https://t.me/Vocoders" target="_blank" rel="noopener noreferrer">
                <Icon name="Send" className="mr-2 h-4 w-4" />
                Связаться в Telegram
              </a>
            </Button>
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

export default Portfolio;
