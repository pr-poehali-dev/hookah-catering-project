import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center animated-background floating-particles overflow-hidden">
      <div className="container mx-auto px-4 text-center z-10">
        <div className="fade-in-up">
          <h1 className="font-montserrat font-bold text-5xl md:text-7xl mb-6">
            <span className="gold-gradient">Кальянный</span>
            <br />
            <span className="text-white">Кейтеринг</span>
          </h1>

          <p className="font-open-sans text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Премиальные кальяны для ваших мероприятий. Создаем атмосферу роскоши
            и комфорта
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-hookah-gold text-black hover:bg-yellow-500 font-montserrat font-semibold px-8 py-4 text-lg animate-scale-in"
            >
              <Icon name="Phone" className="mr-2" size={20} />
              Заказать сейчас
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-hookah-purple text-hookah-purple hover:bg-hookah-purple hover:text-white font-montserrat font-semibold px-8 py-4 text-lg"
            >
              <Icon name="Info" className="mr-2" size={20} />
              Подробнее
            </Button>
          </div>

          <div className="flex items-center justify-center space-x-8 text-hookah-gold">
            <div className="flex items-center space-x-2 animate-float">
              <Icon name="Star" size={24} fill="currentColor" />
              <span className="font-open-sans">Премиум качество</span>
            </div>
            <div
              className="flex items-center space-x-2 animate-float"
              style={{ animationDelay: "1s" }}
            >
              <Icon name="Clock" size={24} />
              <span className="font-open-sans">24/7 сервис</span>
            </div>
            <div
              className="flex items-center space-x-2 animate-float"
              style={{ animationDelay: "2s" }}
            >
              <Icon name="Users" size={24} />
              <span className="font-open-sans">Любые события</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-hookah-gold/10 rounded-full blur-xl animate-float"></div>
      <div
        className="absolute bottom-20 right-10 w-32 h-32 bg-hookah-purple/10 rounded-full blur-xl animate-float"
        style={{ animationDelay: "1.5s" }}
      ></div>
    </section>
  );
};

export default Hero;
