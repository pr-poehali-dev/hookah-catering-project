import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Services = () => {
  const services = [
    {
      icon: "Sparkles",
      title: "Классический кейтеринг",
      description: "Профессиональные кальяны для любых мероприятий",
      price: "1500₽/час",
      features: [
        "Премиум табак",
        "Профессиональный кальянщик",
        "Полная сервировка",
      ],
    },
    {
      icon: "Crown",
      title: "VIP обслуживание",
      description: "Эксклюзивные кальяны и персональный сервис",
      price: "от 2500₽/час",
      features: [
        "Эксклюзивные вкусы",
        "Персональный кальянщик",
        "Премиум сервировка",
      ],
    },
    {
      icon: "Users",
      title: "Корпоративные события",
      description: "Организация кальянного досуга для компаний",
      price: "от 5000₽",
      features: [
        "Множество кальянов",
        "Команда кальянщиков",
        "Полная организация",
      ],
    },
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl mb-6">
            <span className="gold-gradient">Наши услуги</span>
          </h2>
          <p className="font-open-sans text-xl text-gray-300 max-w-2xl mx-auto">
            Выберите подходящий формат обслуживания для вашего мероприятия
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-card/50 backdrop-blur-sm border-hookah-purple/20 hover:border-hookah-gold/40 transition-all duration-300 animate-scale-in group hover:scale-105"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-hookah-purple/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-hookah-gold/20 transition-colors">
                  <Icon
                    name={service.icon as any}
                    size={32}
                    className="text-hookah-gold"
                  />
                </div>
                <CardTitle className="font-montserrat text-xl text-white">
                  {service.title}
                </CardTitle>
                <CardDescription className="font-open-sans text-gray-400">
                  {service.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="text-center">
                  <span className="font-montserrat font-bold text-2xl gold-gradient">
                    {service.price}
                  </span>
                </div>

                <ul className="space-y-2">
                  {service.features.map((feature, fIndex) => (
                    <li
                      key={fIndex}
                      className="flex items-center font-open-sans text-gray-300"
                    >
                      <Icon
                        name="Check"
                        size={16}
                        className="text-hookah-gold mr-2 flex-shrink-0"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button className="w-full bg-hookah-purple hover:bg-hookah-gold hover:text-black transition-all duration-300 font-montserrat font-semibold">
                  Выбрать тариф
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
