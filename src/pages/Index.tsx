import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import Icon from '@/components/ui/icon';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';

export default function Index() {
  const [date, setDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [activeSection, setActiveSection] = useState('hero');

  const portfolioWorks = [
    {
      id: 1,
      image: 'https://cdn.poehali.dev/projects/b19456d1-97aa-45cf-a0a6-505b0d0b47ab/files/fd2e9fd2-8a6c-4a56-b63b-55b765b2c39e.jpg',
      title: 'Реализм',
      style: 'Портрет'
    },
    {
      id: 2,
      image: 'https://cdn.poehali.dev/projects/b19456d1-97aa-45cf-a0a6-505b0d0b47ab/files/fd2e9fd2-8a6c-4a56-b63b-55b765b2c39e.jpg',
      title: 'Графика',
      style: 'Минимализм'
    },
    {
      id: 3,
      image: 'https://cdn.poehali.dev/projects/b19456d1-97aa-45cf-a0a6-505b0d0b47ab/files/fd2e9fd2-8a6c-4a56-b63b-55b765b2c39e.jpg',
      title: 'Дотворк',
      style: 'Геометрия'
    },
    {
      id: 4,
      image: 'https://cdn.poehali.dev/projects/b19456d1-97aa-45cf-a0a6-505b0d0b47ab/files/fd2e9fd2-8a6c-4a56-b63b-55b765b2c39e.jpg',
      title: 'Блэкворк',
      style: 'Орнамент'
    },
    {
      id: 5,
      image: 'https://cdn.poehali.dev/projects/b19456d1-97aa-45cf-a0a6-505b0d0b47ab/files/fd2e9fd2-8a6c-4a56-b63b-55b765b2c39e.jpg',
      title: 'Лайнворк',
      style: 'Абстракция'
    },
    {
      id: 6,
      image: 'https://cdn.poehali.dev/projects/b19456d1-97aa-45cf-a0a6-505b0d0b47ab/files/fd2e9fd2-8a6c-4a56-b63b-55b765b2c39e.jpg',
      title: 'Олдскул',
      style: 'Традиция'
    }
  ];

  const services = [
    {
      title: 'Маленькая работа',
      size: 'до 5см',
      time: '1-2 часа',
      price: 'от 3000₽'
    },
    {
      title: 'Средняя работа',
      size: '5-15см',
      time: '2-4 часа',
      price: 'от 8000₽'
    },
    {
      title: 'Крупная работа',
      size: 'от 15см',
      time: '4-8 часов',
      price: 'от 15000₽'
    },
    {
      title: 'Рукав / Спина',
      size: 'полное покрытие',
      time: 'несколько сеансов',
      price: 'от 50000₽'
    }
  ];

  const reviews = [
    {
      name: 'Анна Петрова',
      text: 'Невероятная работа! Данка профессионал своего дела. Сделала мне портрет в стиле реализм - все в восторге!',
      rating: 5,
      date: '15.11.2024'
    },
    {
      name: 'Максим Волков',
      text: 'Сделал у Даны геометрию на предплечье. Четкие линии, идеальная симметрия. Рекомендую на 100%!',
      rating: 5,
      date: '02.11.2024'
    },
    {
      name: 'Екатерина Соколова',
      text: 'Обратилась к Дане по рекомендации. Не пожалела ни секунды! Тату получилось даже лучше, чем я представляла.',
      rating: 5,
      date: '28.10.2024'
    }
  ];

  const timeSlots = ['10:00', '12:00', '14:00', '16:00', '18:00', '20:00'];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border grunge-texture">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-oswald text-primary">TATTOO BY DANOCHKA</h1>
            <div className="hidden md:flex gap-6">
              <button onClick={() => scrollToSection('hero')} className="hover:text-primary transition-colors">ГЛАВНАЯ</button>
              <button onClick={() => scrollToSection('portfolio')} className="hover:text-primary transition-colors">РАБОТЫ</button>
              <button onClick={() => scrollToSection('services')} className="hover:text-primary transition-colors">УСЛУГИ</button>
              <button onClick={() => scrollToSection('about')} className="hover:text-primary transition-colors">О МАСТЕРЕ</button>
              <button onClick={() => scrollToSection('booking')} className="hover:text-primary transition-colors">ЗАПИСЬ</button>
              <button onClick={() => scrollToSection('reviews')} className="hover:text-primary transition-colors">ОТЗЫВЫ</button>
            </div>
            <Button onClick={() => scrollToSection('booking')} className="bg-primary text-primary-foreground">
              ЗАПИСАТЬСЯ
            </Button>
          </div>
        </div>
      </nav>

      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden grunge-texture">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: `url('https://cdn.poehali.dev/projects/b19456d1-97aa-45cf-a0a6-505b0d0b47ab/files/3da29703-1e1a-4062-996a-af450f4f5b10.jpg')`,
            filter: 'brightness(0.3)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background z-10" />
        
        <div className="container mx-auto px-4 z-20 text-center">
          <h1 className="font-oswald text-6xl md:text-8xl lg:text-9xl mb-6 animate-fade-in text-primary drop-shadow-[0_0_30px_rgba(220,38,38,0.5)]">
            TATTOO BY<br />DANOCHKA
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Превращаю идеи в искусство на коже.<br />Авторский стиль. Профессиональное оборудование.
          </p>
          <div className="flex gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button onClick={() => scrollToSection('booking')} size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
              ЗАПИСАТЬСЯ НА СЕАНС
            </Button>
            <Button onClick={() => scrollToSection('portfolio')} size="lg" variant="outline" className="text-lg px-8 border-primary text-primary hover:bg-primary/10">
              СМОТРЕТЬ РАБОТЫ
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
          <Icon name="ChevronDown" size={40} className="text-primary" />
        </div>
      </section>

      <section id="portfolio" className="py-24 grunge-texture">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-oswald text-5xl md:text-6xl mb-4 text-primary torn-edge inline-block px-8 py-2 bg-secondary/50">
              ПОРТФОЛИО
            </h2>
            <p className="text-muted-foreground text-lg">Мои последние работы</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioWorks.map((work, index) => (
              <div
                key={work.id}
                className="group relative overflow-hidden bg-card rounded-none animate-slide-up hover:scale-105 transition-transform duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={work.image} 
                    alt={work.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="font-oswald text-2xl text-primary mb-1">{work.title}</h3>
                  <p className="text-muted-foreground">{work.style}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-24 bg-muted/30 grunge-texture">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-oswald text-5xl md:text-6xl mb-4 text-primary torn-edge inline-block px-8 py-2 bg-background/50">
              УСЛУГИ И ЦЕНЫ
            </h2>
            <p className="text-muted-foreground text-lg">Прозрачное ценообразование</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="bg-card border-border hover:border-primary transition-all duration-300 animate-slide-up group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="border-l-4 border-primary pl-4 mb-6">
                    <h3 className="font-oswald text-2xl mb-2 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground">{service.size}</p>
                  </div>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Icon name="Clock" size={16} />
                      <span>{service.time}</span>
                    </div>
                  </div>
                  <p className="font-oswald text-3xl text-primary">{service.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground">
              <Icon name="Info" size={20} className="inline mr-2" />
              Точная стоимость определяется после консультации и зависит от сложности работы
            </p>
          </div>
        </div>
      </section>

      <section id="about" className="py-24 grunge-texture">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="order-2 lg:order-1 animate-fade-in">
              <h2 className="font-oswald text-5xl md:text-6xl mb-6 text-primary torn-edge inline-block px-4 py-2 bg-secondary/50">
                О МАСТЕРЕ
              </h2>
              <div className="space-y-4 text-lg">
                <p className="text-foreground/90">
                  Привет! Меня зовут Дана, и я профессиональный тату-мастер с 7-летним опытом работы.
                </p>
                <p className="text-muted-foreground">
                  Моя специализация — черно-белая графика, реализм и геометрия. Работаю исключительно на профессиональном оборудовании с соблюдением всех норм стерильности.
                </p>
                <p className="text-muted-foreground">
                  Каждая работа для меня — это не просто рисунок на коже, это история, которую вы будете носить с собой всю жизнь. Я подхожу к каждому проекту индивидуально, учитывая все пожелания клиента.
                </p>
                <div className="flex gap-4 pt-6">
                  <div className="flex items-center gap-2">
                    <Icon name="Award" size={24} className="text-primary" />
                    <span className="font-oswald text-xl">7+ ЛЕТ ОПЫТА</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Users" size={24} className="text-primary" />
                    <span className="font-oswald text-xl">500+ РАБОТ</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="relative">
                <img 
                  src="https://cdn.poehali.dev/projects/b19456d1-97aa-45cf-a0a6-505b0d0b47ab/files/ebcb1c52-9867-48da-863e-7670622018b5.jpg" 
                  alt="Tattoo by Danochka"
                  className="w-full rounded-none shadow-2xl"
                />
                <div className="absolute inset-0 border-4 border-primary/30 -rotate-2 -z-10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="booking" className="py-24 bg-muted/30 grunge-texture">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-oswald text-5xl md:text-6xl mb-4 text-primary torn-edge inline-block px-8 py-2 bg-background/50">
                ОНЛАЙН ЗАПИСЬ
              </h2>
              <p className="text-muted-foreground text-lg">Забронируй свой сеанс прямо сейчас</p>
            </div>

            <Card className="bg-card border-border animate-fade-in">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name" className="text-foreground mb-2 block">Имя *</Label>
                      <Input 
                        id="name" 
                        placeholder="Введите ваше имя"
                        className="bg-background border-border focus:border-primary"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-foreground mb-2 block">Телефон *</Label>
                      <Input 
                        id="phone" 
                        type="tel"
                        placeholder="+7 (___) ___-__-__"
                        className="bg-background border-border focus:border-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-foreground mb-2 block">Email</Label>
                    <Input 
                      id="email" 
                      type="email"
                      placeholder="your@email.com"
                      className="bg-background border-border focus:border-primary"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label className="text-foreground mb-2 block">Дата сеанса *</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className="w-full justify-start text-left font-normal bg-background border-border hover:border-primary"
                          >
                            <Icon name="Calendar" size={16} className="mr-2" />
                            {date ? format(date, 'PPP', { locale: ru }) : 'Выберите дату'}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0 bg-popover border-border">
                          <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            locale={ru}
                            disabled={(date) => date < new Date()}
                            className="rounded-none"
                          />
                        </PopoverContent>
                      </Popover>
                    </div>

                    <div>
                      <Label className="text-foreground mb-2 block">Время *</Label>
                      <div className="grid grid-cols-3 gap-2">
                        {timeSlots.map((time) => (
                          <Button
                            key={time}
                            type="button"
                            variant={selectedTime === time ? 'default' : 'outline'}
                            className={`${
                              selectedTime === time 
                                ? 'bg-primary text-primary-foreground' 
                                : 'bg-background border-border hover:border-primary'
                            }`}
                            onClick={() => setSelectedTime(time)}
                          >
                            {time}
                          </Button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="description" className="text-foreground mb-2 block">Описание татуировки *</Label>
                    <Textarea 
                      id="description"
                      placeholder="Опишите, что вы хотите: стиль, размер, место на теле, референсы..."
                      className="bg-background border-border focus:border-primary min-h-32"
                    />
                  </div>

                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-lg py-6">
                    <Icon name="Send" size={20} className="mr-2" />
                    ОТПРАВИТЬ ЗАЯВКУ
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    После отправки заявки я свяжусь с вами в течение 24 часов для подтверждения записи
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-24 grunge-texture">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-oswald text-5xl md:text-6xl mb-4 text-primary torn-edge inline-block px-8 py-2 bg-secondary/50">
              ОТЗЫВЫ
            </h2>
            <p className="text-muted-foreground text-lg">Что говорят мои клиенты</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {reviews.map((review, index) => (
              <Card 
                key={index} 
                className="bg-card border-border hover:border-primary transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-foreground/90 mb-4 italic">"{review.text}"</p>
                  <div className="border-t border-border pt-4">
                    <p className="font-oswald text-lg">{review.name}</p>
                    <p className="text-sm text-muted-foreground">{review.date}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-12 bg-muted/30 border-t border-border grunge-texture">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-oswald text-2xl text-primary mb-4">TATTOO BY DANOCHKA</h3>
              <p className="text-muted-foreground">
                Профессиональная тату-студия в центре города. Создаём искусство на коже с 2017 года.
              </p>
            </div>
            <div>
              <h4 className="font-oswald text-xl mb-4">КОНТАКТЫ</h4>
              <div className="space-y-2 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Icon name="Phone" size={18} />
                  <span>+7 (999) 123-45-67</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Mail" size={18} />
                  <span>tattoo@danochka.ru</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="MapPin" size={18} />
                  <span>г. Москва, ул. Примерная, 123</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-oswald text-xl mb-4">СОЦИАЛЬНЫЕ СЕТИ</h4>
              <div className="flex gap-4">
                <Button variant="outline" size="icon" className="border-border hover:border-primary hover:text-primary">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button variant="outline" size="icon" className="border-border hover:border-primary hover:text-primary">
                  <Icon name="Send" size={20} />
                </Button>
                <Button variant="outline" size="icon" className="border-border hover:border-primary hover:text-primary">
                  <Icon name="MessageCircle" size={20} />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 Tattoo by Danochka. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
