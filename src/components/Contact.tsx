import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Contact = () => {
  const contactInfo = [
    {
      icon: "Phone",
      title: "Телефон",
      value: "+7 (999) 123-45-67",
      description: "Звоните круглосуточно",
    },
    {
      icon: "MessageCircle",
      title: "WhatsApp",
      value: "+7 (999) 123-45-67",
      description: "Быстрые ответы в мессенджере",
    },
    {
      icon: "Mail",
      title: "Email",
      value: "info@hookah-catering.ru",
      description: "Подробные заявки на почту",
    },
    {
      icon: "MapPin",
      title: "География",
      value: "Москва и область",
      description: "Выезжаем в любую точку",
    },
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl mb-6">
            <span className="gold-gradient">Связаться с нами</span>
          </h2>
          <p className="font-open-sans text-xl text-gray-300 max-w-2xl mx-auto">
            Готовы обсудить ваше мероприятие? Свяжитесь с нами любым удобным
            способом
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
          {contactInfo.map((contact, index) => (
            <Card
              key={index}
              className="bg-card/30 backdrop-blur-sm border-hookah-purple/20 hover:border-hookah-gold/40 transition-all duration-300 animate-scale-in text-center group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="w-12 h-12 bg-hookah-purple/20 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-hookah-gold/20 transition-colors">
                  <Icon
                    name={contact.icon as any}
                    size={24}
                    className="text-hookah-gold"
                  />
                </div>
                <CardTitle className="font-montserrat text-lg text-white">
                  {contact.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-open-sans font-semibold text-hookah-gold mb-2">
                  {contact.value}
                </p>
                <p className="font-open-sans text-sm text-gray-400">
                  {contact.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Card className="bg-card/20 backdrop-blur-sm border-hookah-gold/30 max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="font-montserrat text-2xl gold-gradient">
                Готовы сделать заказ?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="font-open-sans text-gray-300">
                Оставьте заявку сейчас и получите скидку 10% на первый заказ
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-hookah-gold text-black hover:bg-yellow-500 font-montserrat font-semibold px-8"
                >
                  <Icon name="Phone" className="mr-2" size={20} />
                  Позвонить сейчас
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-hookah-purple text-hookah-purple hover:bg-hookah-purple hover:text-white font-montserrat font-semibold px-8"
                >
                  <Icon name="MessageCircle" className="mr-2" size={20} />
                  Написать в WhatsApp
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
