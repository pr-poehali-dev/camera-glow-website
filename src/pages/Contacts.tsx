
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Icon from "@/components/ui/icon";
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle, 
  CardDescription 
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Contacts = () => {
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
            <Link to="/portfolio" className="hover:text-purple-400 transition-colors">Портфолио</Link>
            <Link to="/contacts" className="text-purple-400 transition-colors">Контакты</Link>
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
                Свяжитесь со мной
              </span>
            </h1>
            <p className="text-gray-300 text-lg mb-8">
              Я ищу красивых моделей от 18 лет для проведения ТФП фотосессий в Санкт-Петербурге. 
              Если вы хотите принять участие в съемке, заполните форму или напишите мне в Telegram.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Контакты */}
      <section className="py-12 bg-black/80">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            
            {/* Контактная форма */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="bg-slate-900/60 border-purple-900/40">
                <CardHeader>
                  <CardTitle>Написать сообщение</CardTitle>
                  <CardDescription className="text-gray-400">
                    Заполните форму, и я свяжусь с вами для обсуждения деталей съемки
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                    <div className="space-y-2">
                      <Label htmlFor="name">Ваше имя</Label>
                      <Input 
                        id="name" 
                        placeholder="Введите ваше имя" 
                        className="bg-slate-800/50 border-purple-900/40 focus-visible:ring-purple-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="age">Ваш возраст</Label>
                      <Input 
                        id="age" 
                        type="number" 
                        placeholder="Введите ваш возраст" 
                        className="bg-slate-800/50 border-purple-900/40 focus-visible:ring-purple-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contact">Контактные данные</Label>
                      <Input 
                        id="contact" 
                        placeholder="Телефон или Telegram" 
                        className="bg-slate-800/50 border-purple-900/40 focus-visible:ring-purple-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Сообщение</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Расскажите о себе и своем опыте моделью" 
                        className="min-h-[120px] bg-slate-800/50 border-purple-900/40 focus-visible:ring-purple-500"
                      />
                    </div>
                    <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                      Отправить сообщение
                    </Button>
                    <p className="text-center text-xs text-gray-400 mt-2">
                      Или свяжитесь со мной напрямую в Telegram
                    </p>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
            
            {/* Информация */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col space-y-6"
            >
              <Card className="bg-slate-900/60 border-purple-900/40">
                <CardHeader>
                  <CardTitle>Контактная информация</CardTitle>
                  <CardDescription className="text-gray-400">
                    Самый быстрый способ связи — написать в Telegram
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-purple-900/30 flex items-center justify-center mr-4">
                      <Icon name="Send" className="h-6 w-6 text-purple-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Telegram</p>
                      <a 
                        href="https://t.me/Vocoders" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-purple-400 hover:text-purple-300 transition-colors"
                      >
                        t.me/Vocoders
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-purple-900/30 flex items-center justify-center mr-4">
                      <Icon name="Map" className="h-6 w-6 text-purple-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Локация</p>
                      <p>Санкт-Петербург</p>
                    </div>
                  </div>
                  
                  <Button asChild className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 mt-6">
                    <a href="https://t.me/Vocoders" target="_blank" rel="noopener noreferrer">
                      <Icon name="Send" className="mr-2 h-4 w-4" />
                      Написать в Telegram
                    </a>
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="bg-slate-900/60 border-purple-900/40">
                <CardHeader>
                  <CardTitle>О ТФП съемках</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">
                    ТФП (Time for Print) — это формат сотрудничества между фотографом и моделью, при котором 
                    фотограф проводит бесплатную фотосессию в обмен на право использовать полученные снимки 
                    в своем портфолио.
                  </p>
                  <p className="text-gray-300">
                    Я предлагаю профессиональные ТФП съемки для красивых девушек от 18 лет с длинными ногами 
                    в Санкт-Петербурге. После фотосессии вы получите обработанные снимки для своего портфолио.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Дополнительная информация */}
      <section className="py-16 bg-gradient-to-b from-black to-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                  Часто задаваемые вопросы
                </span>
              </h2>
              <div className="space-y-6 text-left">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Что такое ТФП?</h3>
                  <p className="text-gray-300">
                    ТФП (Time for Print) — формат сотрудничества, при котором фотограф и модель работают бесплатно, 
                    получая взамен фотографии для своих портфолио.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Кого я ищу для съемок?</h3>
                  <p className="text-gray-300">
                    Я ищу красивых девушек от 18 лет с длинными ногами и привлекательной внешностью для проведения 
                    профессиональных фотосессий в Санкт-Петербурге.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Что получит модель?</h3>
                  <p className="text-gray-300">
                    Модель получит профессиональные обработанные фотографии для своего портфолио, опыт работы 
                    с фотографом и возможность реализовать творческие идеи.
                  </p>
                </div>
              </div>
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

export default Contacts;
