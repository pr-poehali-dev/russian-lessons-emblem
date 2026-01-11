import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img 
                src="https://cdn.poehali.dev/projects/93aaa84f-fc49-4f7e-a927-564a3061d04e/files/10ec0fed-3d3a-4f85-a445-47dca3bc027c.jpg" 
                alt="Логотип" 
                className="h-10 w-10 rounded-lg"
              />
              <span className="font-bold text-xl">РусЯзык</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#home" className="text-foreground/80 hover:text-primary transition-colors">Главная</a>
              <a href="#courses" className="text-foreground/80 hover:text-primary transition-colors">Курсы</a>
              <a href="#about" className="text-foreground/80 hover:text-primary transition-colors">О платформе</a>
              <a href="#contacts" className="text-foreground/80 hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button className="hidden md:flex">Начать обучение</Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Icon name="Menu" size={24} />
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Освойте русский язык с уверенностью
              </h1>
              <p className="text-lg text-muted-foreground">
                Современная образовательная платформа для эффективного изучения русского языка. Индивидуальный подход, проверенные методики.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-base">
                  <Icon name="Play" className="mr-2" size={20} />
                  Попробовать бесплатно
                </Button>
                <Button size="lg" variant="outline" className="text-base">
                  <Icon name="Info" className="mr-2" size={20} />
                  Узнать больше
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-full"></div>
              <img 
                src="https://cdn.poehali.dev/projects/93aaa84f-fc49-4f7e-a927-564a3061d04e/files/10ec0fed-3d3a-4f85-a445-47dca3bc027c.jpg"
                alt="Обучение"
                className="relative rounded-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-primary transition-all hover:scale-105">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="BookOpen" className="text-primary" size={24} />
                </div>
                <CardTitle>Структурированная программа</CardTitle>
                <CardDescription>
                  От базового до продвинутого уровня с пошаговой системой обучения
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-primary transition-all hover:scale-105">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Users" className="text-primary" size={24} />
                </div>
                <CardTitle>Поддержка экспертов</CardTitle>
                <CardDescription>
                  Профессиональные преподаватели готовы помочь на каждом этапе
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-primary transition-all hover:scale-105">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Trophy" className="text-primary" size={24} />
                </div>
                <CardTitle>Сертификация</CardTitle>
                <CardDescription>
                  Получите официальный сертификат о прохождении курса
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section id="courses" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Наши курсы</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Выберите программу обучения, которая подходит именно вам
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg mb-4 flex items-center justify-center">
                  <Icon name="Sparkles" className="text-primary" size={48} />
                </div>
                <CardTitle>Базовый курс</CardTitle>
                <CardDescription>
                  Основы русского языка для начинающих
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="Clock" size={16} className="text-muted-foreground" />
                    <span>24 урока</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="BarChart" size={16} className="text-muted-foreground" />
                    <span>Уровень: Начальный</span>
                  </div>
                </div>
                <Button className="w-full">Подробнее</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow border-2 border-primary">
              <CardHeader>
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg mb-4 flex items-center justify-center">
                  <Icon name="Zap" className="text-primary" size={48} />
                </div>
                <div className="flex items-center justify-between">
                  <CardTitle>Интенсив</CardTitle>
                  <span className="text-xs bg-primary text-white px-2 py-1 rounded-full">Популярный</span>
                </div>
                <CardDescription>
                  Ускоренная программа для активных студентов
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="Clock" size={16} className="text-muted-foreground" />
                    <span>36 уроков</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="BarChart" size={16} className="text-muted-foreground" />
                    <span>Уровень: Средний</span>
                  </div>
                </div>
                <Button className="w-full">Подробнее</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg mb-4 flex items-center justify-center">
                  <Icon name="GraduationCap" className="text-primary" size={48} />
                </div>
                <CardTitle>Профессиональный</CardTitle>
                <CardDescription>
                  Глубокое изучение для продвинутых
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="Clock" size={16} className="text-muted-foreground" />
                    <span>48 уроков</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="BarChart" size={16} className="text-muted-foreground" />
                    <span>Уровень: Продвинутый</span>
                  </div>
                </div>
                <Button className="w-full">Подробнее</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center space-y-6">
            <h2 className="text-4xl font-bold">О платформе</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              РусЯзык — современная образовательная платформа, созданная командой опытных преподавателей и методистов. 
              Мы используем передовые технологии и проверенные методики для эффективного обучения русскому языку.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Наша миссия — сделать изучение русского языка доступным, увлекательным и результативным для каждого студента, 
              независимо от начального уровня подготовки.
            </p>
            <div className="grid md:grid-cols-3 gap-8 pt-8">
              <div className="space-y-2">
                <div className="text-4xl font-bold text-primary">5000+</div>
                <div className="text-sm text-muted-foreground">Довольных студентов</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-primary">98%</div>
                <div className="text-sm text-muted-foreground">Успешных выпускников</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">Курсов и программ</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Свяжитесь с нами</h2>
            <p className="text-lg text-muted-foreground">
              Готовы начать обучение? Мы всегда на связи
            </p>
          </div>

          <Card className="max-w-2xl mx-auto">
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-muted-foreground">info@rusyazyk.ru</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Телефон</h3>
                    <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Адрес</h3>
                    <p className="text-muted-foreground">г. Москва, ул. Образцова, д. 15</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t">
                <h3 className="font-semibold mb-4">Напишите нам</h3>
                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <input 
                        type="text" 
                        placeholder="Имя" 
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <input 
                        type="email" 
                        placeholder="Email" 
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>
                  <div>
                    <textarea 
                      placeholder="Ваше сообщение" 
                      rows={4}
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    ></textarea>
                  </div>
                  <Button className="w-full">
                    <Icon name="Send" className="mr-2" size={20} />
                    Отправить сообщение
                  </Button>
                </form>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img 
                  src="https://cdn.poehali.dev/projects/93aaa84f-fc49-4f7e-a927-564a3061d04e/files/10ec0fed-3d3a-4f85-a445-47dca3bc027c.jpg" 
                  alt="Логотип" 
                  className="h-8 w-8 rounded"
                />
                <span className="font-bold">РусЯзык</span>
              </div>
              <p className="text-sm text-background/70">
                Образовательная платформа для изучения русского языка
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Навигация</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#home" className="text-background/70 hover:text-background transition-colors">Главная</a></li>
                <li><a href="#courses" className="text-background/70 hover:text-background transition-colors">Курсы</a></li>
                <li><a href="#about" className="text-background/70 hover:text-background transition-colors">О платформе</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm">
                <li className="text-background/70">info@rusyazyk.ru</li>
                <li className="text-background/70">+7 (495) 123-45-67</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Следите за нами</h4>
              <div className="flex gap-4">
                <a href="#" className="text-background/70 hover:text-background transition-colors">
                  <Icon name="Facebook" size={20} />
                </a>
                <a href="#" className="text-background/70 hover:text-background transition-colors">
                  <Icon name="Twitter" size={20} />
                </a>
                <a href="#" className="text-background/70 hover:text-background transition-colors">
                  <Icon name="Instagram" size={20} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-background/20 mt-8 pt-8 text-center text-sm text-background/70">
            <p>© 2024 РусЯзык. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
