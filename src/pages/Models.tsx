
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import Icon from "@/components/ui/icon";

const models = [
  {
    id: 1,
    name: "Алина",
    age: 22,
    height: 178,
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    description: "Профессиональная модель с опытом работы более 3 лет. Участвовала в показах модной одежды и фотосессиях для известных брендов."
  },
  {
    id: 2,
    name: "Екатерина",
    age: 24,
    height: 175,
    image: "https://images.unsplash.com/photo-1564485377539-4af72d1f6a2f",
    description: "Модель с привлекательной внешностью и длинными ногами. Имеет опыт участия в фотосессиях для каталогов одежды."
  },
  {
    id: 3,
    name: "Мария",
    age: 20,
    height: 180,
    image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b",
    description: "Начинающая модель с естественной красотой. Интересуется фэшн-фотографией и желает развиваться в модельном бизнесе."
  },
  {
    id: 4,
    name: "София",
    age: 23,
    height: 176,
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
    description: "Модель с опытом работы в рекламных кампаниях. Имеет пластичную фигуру и профессиональные навыки позирования."
  },
  {
    id: 5,
    name: "Ольга",
    age: 21,
    height: 174,
    image: "https://images.unsplash.com/photo-1509967419530-da38b4704bc6",
    description: "Модель с выразительными чертами лица. Принимала участие в фотосессиях для журналов и рекламных кампаний."
  },
  {
    id: 6,
    name: "Кристина",
    age: 25,
    height: 177,
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f",
    description: "Опытная модель, специализирующаяся на портретной и fashion-фотографии. Имеет богатое портфолио и профессиональные навыки."
  }
];

const Models = () => {
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
            <Link to="/models" className="text-purple-400 transition-colors">Модели</Link>
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
                Модели для ТФП съемок
              </span>
            </h1>
            <p className="text-gray-300 text-lg mb-8">
              Ознакомьтесь с портфолио наших моделей, которые участвуют в ТФП фотосессиях в Санкт-Петербурге. 
              Если вы хотите присоединиться к нашей команде, свяжитесь с нами через Telegram.
            </p>
            <div className="flex justify-center">
              <Button asChild className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                <a href="https://t.me/Vocoders" target="_blank" rel="noopener noreferrer">
                  <Icon name="Send" className="mr-2 h-4 w-4" />
                  Стать моделью
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Модели */}
      <section className="py-12 bg-black/80">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {models.map((model, index) => (
              <motion.div
                key={model.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-slate-900/60 border-purple-900/40 h-full overflow-hidden">
                  <div className="relative overflow-hidden h-96">
                    <img 
                      src={model.image} 
                      alt={model.name} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-6">
                      <h3 className="text-2xl font-bold">{model.name}</h3>
                      <div className="flex space-x-4 text-sm text-gray-300 mt-1">
                        <span>{model.age} лет</span>
                        <span>{model.height} см</span>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-gray-300 mb-4">{model.description}</p>
                    <Button asChild variant="outline" size="sm" className="w-full border-purple-500 text-purple-400 hover:bg-purple-950/30">
                      <a href="https://t.me/Vocoders" target="_blank" rel="noopener noreferrer">
                        <Icon name="Send" className="mr-2 h-4 w-4" />
                        Связаться для съемки
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                Хотите стать моделью?
              </span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              Если вы красивая девушка от 18 лет с длинными ногами и мечтаете о карьере модели, 
              я приглашаю вас принять участие в профессиональных ТФП фотосессиях в Санкт-Петербурге.
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

export default Models;
