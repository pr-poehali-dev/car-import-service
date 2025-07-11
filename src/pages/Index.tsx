import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Car" size={28} className="text-[#3B82F6]" />
              <span className="text-2xl font-bold text-[#1F2937]">
                АвтоПОТОК
              </span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#home"
                className="text-gray-600 hover:text-[#3B82F6] transition-colors"
              >
                Главная
              </a>
              <a
                href="#services"
                className="text-gray-600 hover:text-[#3B82F6] transition-colors"
              >
                Пригон авто
              </a>
              <a
                href="#catalog"
                className="text-gray-600 hover:text-[#3B82F6] transition-colors"
              >
                Каталог
              </a>
              <a
                href="#contacts"
                className="text-gray-600 hover:text-[#3B82F6] transition-colors"
              >
                Контакты
              </a>
            </nav>
            <Button className="bg-[#3B82F6] hover:bg-[#2563EB] text-white">
              <Icon name="Phone" size={16} className="mr-2" />
              Связаться
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative bg-gradient-to-r from-[#1F2937] to-[#374151] text-white py-20 overflow-hidden"
      >
        <div className="absolute inset-0 opacity-20">
          <img
            src="/img/2bf1c332-dbb3-4378-8f71-c12970751183.jpg"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#1F2937]/90 to-[#374151]/90"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl font-bold leading-tight">
                Пригон автомобилей из{" "}
                <span className="text-[#3B82F6]">США</span> и{" "}
                <span className="text-[#3B82F6]">Китая</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Профессиональная доставка и растаможка автомобилей под заказ.
                Полный спектр услуг с гарантией качества.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-[#3B82F6] hover:bg-[#2563EB] text-white px-8"
                >
                  <Icon name="Calculator" size={20} className="mr-2" />
                  Рассчитать стоимость
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-[#1F2937]"
                >
                  <Icon name="PlayCircle" size={20} className="mr-2" />
                  Как это работает
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#3B82F6]">500+</div>
                  <div className="text-sm text-gray-300">Доставленных авто</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#3B82F6]">30</div>
                  <div className="text-sm text-gray-300">Дней в среднем</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#3B82F6]">99%</div>
                  <div className="text-sm text-gray-300">
                    Довольных клиентов
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-6">Быстрая заявка</h3>
                <div className="space-y-4">
                  <Input
                    placeholder="Ваше имя"
                    className="bg-white/20 border-white/30 text-white placeholder:text-gray-300"
                  />
                  <Input
                    placeholder="Телефон"
                    className="bg-white/20 border-white/30 text-white placeholder:text-gray-300"
                  />
                  <Input
                    placeholder="Марка и модель авто"
                    className="bg-white/20 border-white/30 text-white placeholder:text-gray-300"
                  />
                  <Button className="w-full bg-[#3B82F6] hover:bg-[#2563EB] text-white">
                    Получить расчет
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="relative py-20 bg-gray-50 overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10">
          <img
            src="/img/d3020dca-596a-44d5-9420-e1cc3f1bc87f.jpg"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gray-50/95"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1F2937] mb-4">
              Услуги пригона автомобилей
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Полный цикл услуг по доставке автомобилей из-за рубежа с гарантией
              качества
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* USA Section */}
            <Card className="border-2 border-[#3B82F6]/20 hover:border-[#3B82F6] transition-colors">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-[#3B82F6]/10 rounded-full flex items-center justify-center">
                    <Icon name="Flag" size={28} className="text-[#3B82F6]" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Пригон из США</CardTitle>
                    <CardDescription className="text-lg">
                      Американский автопарк
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <Icon name="Clock" size={16} className="text-[#3B82F6]" />
                    <span className="text-sm">20-30 дней</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Shield" size={16} className="text-[#3B82F6]" />
                    <span className="text-sm">Полная гарантия</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon
                      name="DollarSign"
                      size={16}
                      className="text-[#3B82F6]"
                    />
                    <span className="text-sm">От $2000</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Truck" size={16} className="text-[#3B82F6]" />
                    <span className="text-sm">Доставка до двери</span>
                  </div>
                </div>
                <Separator />
                <div className="space-y-2">
                  <h4 className="font-semibold">Популярные марки:</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Ford</Badge>
                    <Badge variant="secondary">Chevrolet</Badge>
                    <Badge variant="secondary">Dodge</Badge>
                    <Badge variant="secondary">Cadillac</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* China Section */}
            <Card className="border-2 border-[#3B82F6]/20 hover:border-[#3B82F6] transition-colors">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-[#3B82F6]/10 rounded-full flex items-center justify-center">
                    <Icon name="Zap" size={28} className="text-[#3B82F6]" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Пригон из Китая</CardTitle>
                    <CardDescription className="text-lg">
                      Электромобили и гибриды
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <Icon name="Clock" size={16} className="text-[#3B82F6]" />
                    <span className="text-sm">15-25 дней</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Shield" size={16} className="text-[#3B82F6]" />
                    <span className="text-sm">Полная гарантия</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon
                      name="DollarSign"
                      size={16}
                      className="text-[#3B82F6]"
                    />
                    <span className="text-sm">От $1500</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Truck" size={16} className="text-[#3B82F6]" />
                    <span className="text-sm">Доставка до двери</span>
                  </div>
                </div>
                <Separator />
                <div className="space-y-2">
                  <h4 className="font-semibold">Популярные марки:</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">BYD</Badge>
                    <Badge variant="secondary">NIO</Badge>
                    <Badge variant="secondary">Xpeng</Badge>
                    <Badge variant="secondary">Li Auto</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Process Steps */}
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#3B82F6] rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Search" size={24} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Поиск авто</h3>
              <p className="text-gray-600">
                Подбираем автомобиль по вашим критериям
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#3B82F6] rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="FileText" size={24} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Оформление</h3>
              <p className="text-gray-600">
                Подготавливаем все документы для покупки
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#3B82F6] rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Ship" size={24} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Доставка</h3>
              <p className="text-gray-600">Транспортируем авто до России</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#3B82F6] rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="CheckCircle" size={24} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Растаможка</h3>
              <p className="text-gray-600">Оформляем все документы в России</p>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <img
            src="/img/2dbda502-41a3-4746-8330-b9ffe2a0e054.jpg"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-white/98"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1F2937] mb-4">
              Популярные модели
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Самые востребованные автомобили с актуальными ценами
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Car 1 */}
            <Card className="group hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gray-100 rounded-t-lg overflow-hidden">
                <img
                  src="/placeholder.svg"
                  alt="Ford Mustang"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">Ford Mustang GT</CardTitle>
                    <CardDescription>2023 • 5.0L V8 • США</CardDescription>
                  </div>
                  <Badge className="bg-[#3B82F6] text-white">Топ</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-[#1F2937]">
                    от $45,000
                  </span>
                  <span className="text-sm text-gray-500">+ доставка</span>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <Icon name="Gauge" size={14} className="text-[#3B82F6]" />
                    <span>450 л.с.</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Fuel" size={14} className="text-[#3B82F6]" />
                    <span>Бензин</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Users" size={14} className="text-[#3B82F6]" />
                    <span>4 места</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon
                      name="Settings"
                      size={14}
                      className="text-[#3B82F6]"
                    />
                    <span>Автомат</span>
                  </div>
                </div>
                <Button className="w-full bg-[#3B82F6] hover:bg-[#2563EB] text-white">
                  Узнать подробнее
                </Button>
              </CardContent>
            </Card>

            {/* Car 2 */}
            <Card className="group hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gray-100 rounded-t-lg overflow-hidden">
                <img
                  src="/placeholder.svg"
                  alt="BYD Tang"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">BYD Tang EV</CardTitle>
                    <CardDescription>2023 • Электро • Китай</CardDescription>
                  </div>
                  <Badge variant="secondary">Эко</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-[#1F2937]">
                    от $32,000
                  </span>
                  <span className="text-sm text-gray-500">+ доставка</span>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <Icon name="Zap" size={14} className="text-[#3B82F6]" />
                    <span>505 км</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Battery" size={14} className="text-[#3B82F6]" />
                    <span>Электро</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Users" size={14} className="text-[#3B82F6]" />
                    <span>7 мест</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon
                      name="Settings"
                      size={14}
                      className="text-[#3B82F6]"
                    />
                    <span>Автомат</span>
                  </div>
                </div>
                <Button className="w-full bg-[#3B82F6] hover:bg-[#2563EB] text-white">
                  Узнать подробнее
                </Button>
              </CardContent>
            </Card>

            {/* Car 3 */}
            <Card className="group hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gray-100 rounded-t-lg overflow-hidden">
                <img
                  src="/placeholder.svg"
                  alt="Chevrolet Camaro"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">Chevrolet Camaro</CardTitle>
                    <CardDescription>2023 • 6.2L V8 • США</CardDescription>
                  </div>
                  <Badge variant="outline">Спорт</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-[#1F2937]">
                    от $42,000
                  </span>
                  <span className="text-sm text-gray-500">+ доставка</span>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <Icon name="Gauge" size={14} className="text-[#3B82F6]" />
                    <span>650 л.с.</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Fuel" size={14} className="text-[#3B82F6]" />
                    <span>Бензин</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Users" size={14} className="text-[#3B82F6]" />
                    <span>4 места</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon
                      name="Settings"
                      size={14}
                      className="text-[#3B82F6]"
                    />
                    <span>Механика</span>
                  </div>
                </div>
                <Button className="w-full bg-[#3B82F6] hover:bg-[#2563EB] text-white">
                  Узнать подробнее
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contacts"
        className="relative py-20 bg-[#1F2937] text-white overflow-hidden"
      >
        <div className="absolute inset-0 opacity-15">
          <img
            src="/img/2bf1c332-dbb3-4378-8f71-c12970751183.jpg"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-[#1F2937]/90"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Свяжитесь с нами</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Готовы ответить на все ваши вопросы и помочь с выбором автомобиля
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">
                  Контактная информация
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-[#3B82F6] rounded-full flex items-center justify-center">
                      <Icon name="Phone" size={20} className="text-white" />
                    </div>
                    <div>
                      <div className="font-semibold">Телефон</div>
                      <div className="text-gray-300">+7 (999) 123-45-67</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-[#3B82F6] rounded-full flex items-center justify-center">
                      <Icon name="Mail" size={20} className="text-white" />
                    </div>
                    <div>
                      <div className="font-semibold">Email</div>
                      <div className="text-gray-300">info@autoimport.ru</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-[#3B82F6] rounded-full flex items-center justify-center">
                      <Icon name="MapPin" size={20} className="text-white" />
                    </div>
                    <div>
                      <div className="font-semibold">Адрес</div>
                      <div className="text-gray-300">
                        г. Москва, ул. Тверская, д. 1
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-[#3B82F6] rounded-full flex items-center justify-center">
                      <Icon name="Clock" size={20} className="text-white" />
                    </div>
                    <div>
                      <div className="font-semibold">Время работы</div>
                      <div className="text-gray-300">Пн-Пт: 9:00-18:00</div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6">Мы в соцсетях</h3>
                <div className="flex space-x-4">
                  <Button
                    variant="outline"
                    size="icon"
                    className="border-gray-600 text-gray-300 hover:bg-[#3B82F6] hover:border-[#3B82F6]"
                  >
                    <Icon name="MessageCircle" size={20} />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="border-gray-600 text-gray-300 hover:bg-[#3B82F6] hover:border-[#3B82F6]"
                  >
                    <Icon name="Send" size={20} />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="border-gray-600 text-gray-300 hover:bg-[#3B82F6] hover:border-[#3B82F6]"
                  >
                    <Icon name="Instagram" size={20} />
                  </Button>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-6">Отправить заявку</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Имя
                    </label>
                    <Input
                      placeholder="Ваше имя"
                      className="bg-white/20 border-white/30 text-white placeholder:text-gray-300"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Телефон
                    </label>
                    <Input
                      placeholder="+7 (999) 123-45-67"
                      className="bg-white/20 border-white/30 text-white placeholder:text-gray-300"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    className="bg-white/20 border-white/30 text-white placeholder:text-gray-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Интересующий автомобиль
                  </label>
                  <Input
                    placeholder="Марка, модель, год"
                    className="bg-white/20 border-white/30 text-white placeholder:text-gray-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Сообщение
                  </label>
                  <Textarea
                    placeholder="Расскажите подробнее о ваших требованиях..."
                    className="bg-white/20 border-white/30 text-white placeholder:text-gray-300"
                    rows={4}
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-[#3B82F6] hover:bg-[#2563EB] text-white py-3"
                >
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#111827] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Car" size={24} className="text-[#3B82F6]" />
                <span className="text-xl font-bold">AutoImport</span>
              </div>
              <p className="text-gray-400">
                Профессиональный пригон автомобилей из США и Китая с полным
                пакетом услуг.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Пригон из США
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Пригон из Китая
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Растаможка
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Доставка
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    О компании
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Отзывы
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Документы
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Контакты
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-400">
                <div>+7 (999) 123-45-67</div>
                <div>info@autoimport.ru</div>
                <div>г. Москва, ул. Тверская, д. 1</div>
              </div>
            </div>
          </div>
          <Separator className="my-8 bg-gray-700" />
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400">
              © 2024 AutoImport. Все права защищены.
            </div>
            <div className="flex space-x-6 text-gray-400">
              <a href="#" className="hover:text-white transition-colors">
                Политика конфиденциальности
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Условия использования
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
