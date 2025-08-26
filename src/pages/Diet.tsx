import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  Download, 
  TrendingDown, 
  TrendingUp, 
  Heart, 
  Leaf, 
  MessageCircle,
  ChevronDown,
  Clock,
  Users,
  Award,
  Utensils
} from 'lucide-react';
import HeroSection from '@/components/HeroSection';
import CTAButton from '@/components/CTAButton';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const Diet = () => {
  const [selectedDiet, setSelectedDiet] = useState<string | null>(null);

  const dietPlans = [
    {
      id: 'weight-loss',
      title: 'Weight Loss Diet',
      subtitle: 'Lose weight with healthy meal plans',
      icon: TrendingDown,
      color: 'from-red-600 to-red-400',
      features: [
        'Calorie deficit with local foods',
        'High protein, low oil focus',
        'Indori snacks made healthy',
        '6 small meals per day',
        'Regional vegetarian/non-veg choices',
        'Weekly progress tracking'
      ],
      vegSample: {
        breakfast: 'Poha with sprouts + Green tea',
        midMorning: 'Roasted chana + 1 guava',
        lunch: '2 multigrain rotis + Palak dal + Seasonal sabzi',
        evening: 'Buttermilk + 1 Khakra',
        dinner: 'Grilled paneer tikka + Salad',
        bedtime: 'Haldi doodh (turmeric milk)'
      },
      nonVegSample: {
        breakfast: 'Poha with boiled egg whites + Green tea',
        midMorning: 'Roasted chana + 1 guava',
        lunch: '2 multigrain rotis + Dal + Chicken curry (less oil)',
        evening: 'Buttermilk + 1 Khakra',
        dinner: 'Grilled chicken breast + Salad',
        bedtime: 'Haldi doodh (turmeric milk)'
      },
      duration: '3-6 months',
      results: 'Lose 8-12 kg safely'
    },
    {
      id: 'muscle-gain',
      title: 'Muscle Gain Diet',
      subtitle: 'Build muscle with protein-rich meals',
      icon: TrendingUp,
      color: 'from-green-600 to-green-400',
      features: [
        'High protein from local foods',
        'Timing carbs with workouts',
        'Pre & post gym Indori meals',
        'Simple supplement guidance',
        'Veg & non-veg options',
        'Structured around strength training'
      ],
      vegSample: {
        breakfast: 'Moong chilla + Banana + Protein shake',
        midMorning: 'Soya chunks salad + Almonds',
        lunch: 'Chole + Brown rice + Salad + Curd',
        evening: 'Sprouts bhel + Dates + Buttermilk',
        dinner: 'Paneer bhurji + Jowar roti + Salad',
        bedtime: 'Milk + Protein shake'
      },
      nonVegSample: {
        breakfast: 'Egg bhurji with multigrain toast + Banana',
        midMorning: 'Chicken sandwich (brown bread)',
        lunch: 'Grilled chicken/fish + Rice + Dal + Salad',
        evening: 'Sprouts bhel + Buttermilk',
        dinner: 'Egg curry/Chicken curry + Roti + Salad',
        bedtime: 'Milk + Casein protein'
      },
      duration: '6-12 months',
      results: 'Gain 5-8 kg lean muscle'
    },
    {
      id: 'maintenance',
      title: 'Healthy Maintenance',
      subtitle: 'Stay fit with balanced food',
      icon: Heart,
      color: 'from-blue-600 to-blue-400',
      features: [
        'Balanced macros, no crash diets',
        'Traditional recipes adapted',
        'Seasonal fruits & veggies',
        'Digestive health support',
        'Energy & immunity focus',
        'Sustainable daily routine'
      ],
      vegSample: {
        breakfast: 'Poha with peanuts + Fresh juice',
        midMorning: 'Seasonal fruit (Sitaphal/Mango in season) + Handful nuts',
        lunch: '2 rotis + Dal + Aloo sabzi + Curd',
        evening: 'Masala chai + Roasted makhana',
        dinner: 'Mix veg curry + Rice + Salad',
        bedtime: 'Tulsi tea'
      },
      nonVegSample: {
        breakfast: 'Poha + Boiled eggs + Fresh juice',
        midMorning: 'Seasonal fruit (Papaya/Apple)',
        lunch: 'Roti + Dal + Chicken curry + Curd',
        evening: 'Masala chai + Roasted peanuts',
        dinner: 'Fish curry/Chicken curry + Rice + Salad',
        bedtime: 'Chamomile/Tulsi tea'
      },
      duration: 'Ongoing',
      results: 'Sustained energy & long-term health'
    }
  ];
  

  const indianMealCategories = [
    {
      type: 'Vegetarian Options',
      icon: Leaf,
      meals: [
        'Dal varieties (Moong, Toor, Masoor)',
        'Paneer bhurji / Paneer tikka',
        'Jowar/Bajra roti + Sabzi',
        'Seasonal vegetables (Bhindi, Lauki, Tinda)',
        'Sprouts chaat / Sprouts bhel',
        'Curd, Buttermilk & Raita varieties'
      ]
    },
    {
      type: 'Non-Vegetarian Options',
      icon: Users,
      meals: [
        'Grilled chicken breast (Tandoori style)',
        'Egg curry / Egg bhurji',
        'Chicken curry (less oil)',
        'Fish fry (Tilapia/Rohu) or Fish curry',
        'Lean mutton curry (occasionally)',
        'Omelette with roti / egg toast'
      ]
    }
  ];
  

  const whatsappNumber = "919876543210";
  
  const handleWhatsAppDietCoach = () => {
    const message = "Hi! I'm interested in consulting with a diet coach for personalized nutrition plans. Can you help me?";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title="PERSONALIZED DIET PLANS"
        subtitle="Transform your health with scientifically designed Indian nutrition plans tailored to your fitness goals and lifestyle."
        showCTA={false}
        height="h-96"
      />

      {/* Diet Plans Overview */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-heading">Choose Your Nutrition Journey</h2>
            <p className="text-xl text-gray-text max-w-3xl mx-auto">
              Our expert nutritionists have crafted these plans specifically for Indian dietary preferences and lifestyle
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {dietPlans.map((plan, index) => {
              const IconComponent = plan.icon;
              
              return (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card-gym group hover:scale-105 transition-all duration-300 cursor-pointer"
                  onClick={() => setSelectedDiet(selectedDiet === plan.id ? null : plan.id)}
                >
                  <div className={`w-full h-2 bg-gradient-to-r ${plan.color} rounded-t-lg -mx-6 -mt-6 mb-6`}></div>
                  
                  <div className="text-center mb-6">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 bg-gradient-to-r ${plan.color}`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2 font-heading">
                      {plan.title}
                    </h3>
                    <p className="text-gray-text">{plan.subtitle}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6 text-center">
                    <div>
                      <div className="text-saffron font-bold">{plan.duration}</div>
                      <div className="text-xs text-gray-text">Duration</div>
                    </div>
                    <div>
                      <div className="text-saffron font-bold text-sm">{plan.results}</div>
                      <div className="text-xs text-gray-text">Expected Results</div>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {plan.features.slice(0, 4).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-saffron rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-text">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-center">
                    <ChevronDown className={`h-5 w-5 text-gray-text transition-transform ${
                      selectedDiet === plan.id ? 'rotate-180' : ''
                    }`} />
                    <span className="text-gray-text text-sm ml-2">View meal plans</span>
                  </div>

                  {/* Expanded Content */}
                  {selectedDiet === plan.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-6 pt-6 border-t border-border"
                    >
                      {/* Vegetarian Plan */}
                      <div className="mb-6">
                        <div className="flex items-center mb-4">
                          <Leaf className="h-5 w-5 text-green-500 mr-2" />
                          <h4 className="font-semibold text-white font-heading">Vegetarian Meal Plan:</h4>
                        </div>
                        <div className="grid grid-cols-1 gap-2 text-sm mb-4">
                          {Object.entries(plan.vegSample).map(([meal, food]) => (
                            <div key={meal} className="flex justify-between bg-dark-bg p-2 rounded">
                              <span className="text-gray-text capitalize font-medium">{meal.replace(/([A-Z])/g, ' $1')}:</span>
                              <span className="text-white text-right flex-1 ml-2">{food}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Non-Vegetarian Plan */}
                      <div className="mb-6">
                        <div className="flex items-center mb-4">
                          <Utensils className="h-5 w-5 text-red-500 mr-2" />
                          <h4 className="font-semibold text-white font-heading">Non-Vegetarian Meal Plan:</h4>
                        </div>
                        <div className="grid grid-cols-1 gap-2 text-sm mb-4">
                          {Object.entries(plan.nonVegSample).map(([meal, food]) => (
                            <div key={meal} className="flex justify-between bg-dark-bg p-2 rounded">
                              <span className="text-gray-text capitalize font-medium">{meal.replace(/([A-Z])/g, ' $1')}:</span>
                              <span className="text-white text-right flex-1 ml-2">{food}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                     
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Indian Meal Categories */}
      <section className="py-20 bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-heading">Indian Cuisine Options</h2>
            <p className="text-xl text-gray-text max-w-3xl mx-auto">
              All our diet plans include authentic Indian foods that you love, adapted for your fitness goals
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {indianMealCategories.map((category, index) => {
              const IconComponent = category.icon;
              
              return (
                <motion.div
                  key={category.type}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="card-gym"
                >
                  <div className="flex items-center mb-6">
                    <div className="flex items-center justify-center w-12 h-12 bg-saffron rounded-lg mr-4">
                      <IconComponent className="h-6 w-6 text-black" />
                    </div>
                    <h3 className="text-xl font-semibold text-white font-heading">
                      {category.type}
                    </h3>
                  </div>
                  
                  <ul className="space-y-3">
                    {category.meals.map((meal, mealIndex) => (
                      <li key={mealIndex} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-saffron rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-text">{meal}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-heading">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-text">
              Common questions about our nutrition programs
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border border-border rounded-lg px-6 bg-dark-bg">
                <AccordionTrigger className="text-white hover:text-saffron">
                  Are the diet plans suitable for Indian vegetarians?
                </AccordionTrigger>
                <AccordionContent className="text-gray-text">
                  Absolutely! All our plans include comprehensive vegetarian options using traditional Indian ingredients like dal, paneer, quinoa, and seasonal vegetables. Our nutritionists ensure vegetarian plans meet all protein and nutrient requirements.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border border-border rounded-lg px-6 bg-dark-bg">
                <AccordionTrigger className="text-white hover:text-saffron">
                  Can I customize the meal plans for my regional preferences?
                </AccordionTrigger>
                <AccordionContent className="text-gray-text">
                  Yes! We adapt our plans for different Indian regions - South Indian, North Indian, Bengali, Gujarati, and other regional cuisines. Our nutritionists work with you to include your favorite regional dishes while meeting your fitness goals.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border border-border rounded-lg px-6 bg-dark-bg">
                <AccordionTrigger className="text-white hover:text-saffron">
                  How quickly will I see results?
                </AccordionTrigger>
                <AccordionContent className="text-gray-text">
                  Most members see initial changes in 2-3 weeks, with significant results in 6-8 weeks. Weight loss plans typically show 1-2 kg loss per week, while muscle gain plans show improvements in strength and size within 4-6 weeks when combined with proper training.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border border-border rounded-lg px-6 bg-dark-bg">
                <AccordionTrigger className="text-white hover:text-saffron">
                  Do you provide grocery lists and meal prep guidance?
                </AccordionTrigger>
                <AccordionContent className="text-gray-text">
                  Yes! Each plan includes detailed grocery lists with Indian ingredients, meal prep instructions, and cooking tips. We also provide portion size guides and suggest local markets where you can find specific ingredients.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border border-border rounded-lg px-6 bg-dark-bg">
                <AccordionTrigger className="text-white hover:text-saffron">
                  Can I get ongoing support from nutritionists?
                </AccordionTrigger>
                <AccordionContent className="text-gray-text">
                  Absolutely! All plans include weekly check-ins with our certified nutritionists, WhatsApp support for daily queries, and monthly plan adjustments based on your progress and feedback.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>
        </div>
      </section>

     
    </div>
  );
};

export default Diet;