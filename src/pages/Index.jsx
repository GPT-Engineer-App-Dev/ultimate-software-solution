import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CheckCircle, Star } from "lucide-react";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection />
      <PricingSection />
    </div>
  );
};

const HeroSection = () => (
  <section className="bg-gradient-to-r from-purple-700 to-indigo-800 text-white py-20">
    <div className="container mx-auto text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        The Last Piece of Software You'll Ever Need
      </h1>
      <p className="text-xl mb-8">
        Streamline your workflow, boost productivity, and simplify your life with our all-in-one solution.
      </p>
      <div className="space-x-4">
        <Button size="lg" className="bg-white text-purple-700 hover:bg-gray-100">
          Get Started
        </Button>
        <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-purple-700">
          Learn More
        </Button>
      </div>
    </div>
  </section>
);

const FeaturesSection = () => (
  <section className="py-20 bg-gray-100">
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { title: "Seamless Integration", description: "Connect with all your favorite tools effortlessly." },
          { title: "Advanced Analytics", description: "Gain insights with powerful data visualization." },
          { title: "24/7 Support", description: "Our team is always here to help you succeed." },
        ].map((feature, index) => (
          <Card key={index} className="transition-transform hover:scale-105">
            <CardContent className="p-6">
              <CheckCircle className="h-12 w-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

const TestimonialsSection = () => (
  <section className="py-20 bg-white">
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
      <Carousel className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto">
        <CarouselContent>
          {[
            { name: "John Doe", role: "CEO", comment: "This software has revolutionized our business processes." },
            { name: "Jane Smith", role: "Marketing Manager", comment: "I can't imagine working without this tool now." },
            { name: "Alex Johnson", role: "Freelancer", comment: "The best investment I've made for my productivity." },
          ].map((testimonial, index) => (
            <CarouselItem key={index}>
              <Card>
                <CardContent className="p-6 text-center">
                  <Star className="h-8 w-8 text-yellow-400 mx-auto mb-4" />
                  <p className="italic mb-4">"{testimonial.comment}"</p>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  </section>
);

const PricingSection = () => (
  <section className="py-20 bg-gray-100">
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">Pricing</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { title: "Basic", price: "$9.99", features: ["Feature 1", "Feature 2", "Feature 3"] },
          { title: "Pro", price: "$19.99", features: ["Everything in Basic", "Pro Feature 1", "Pro Feature 2"], popular: true },
          { title: "Enterprise", price: "Custom", features: ["Everything in Pro", "Enterprise Feature 1", "Enterprise Feature 2"] },
        ].map((plan, index) => (
          <Card key={index} className={`transition-transform hover:scale-105 ${plan.popular ? 'border-purple-500 border-2' : ''}`}>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">{plan.title}</h3>
              <p className="text-3xl font-bold mb-4">{plan.price}</p>
              <ul className="mb-6">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center mb-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
                Choose Plan
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default Index;