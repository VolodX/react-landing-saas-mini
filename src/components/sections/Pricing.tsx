import { pricingPlans } from '../../utils/pricing-plan';
import { Button } from '../shared/Button';
import { Container } from '../shared/Container';
import { Paragraph } from '../shared/Paragraph';
import { Title } from '../shared/Title';

export const Pricing = () => {
  const numberOfPlans = pricingPlans.length;

  return (
    <section id="pricing" className="py-5">
      <Container className="text-center">
        <Title>Pricing </Title>
        <Paragraph className="mt-4">
          Choose the plan that's right for your business.
        </Paragraph>
      </Container>
      <Container className="mt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 min-[58.125rem]:grid-cols-3 gap-8				  sm:justify-items-center min-[58.125rem]:justify-items-normal">
          {pricingPlans.map((plan, key) => {
            const isLastItem = key === numberOfPlans - 1;
            const isOddNumberOfItemsOnTwoColumns = numberOfPlans % 2 === 1;

            // Класи для центрування останнього елемента
            const conditionalClasses =
              isLastItem && isOddNumberOfItemsOnTwoColumns
                ? `sm:col-span-2 sm:max-w-sm 
                   min-[58.125rem]:col-span-1 min-[58.125rem]:max-w-none min-[58.125rem]:mx-0`
                : '';

            return (
              <div
                key={key}
                className={`relative group h-full ${conditionalClasses}`} // Додаємо умовні класи
              >
                <div className="bg-gradient-to-r from-blue-600 to-violet-600 p-1 rounded-3xl h-full">
                  <div
                    className="bg-box-bg rounded-3xl shadow-lg shadow-box-shadow
                                     p-8 flex flex-col h-full relative"
                  >
                    {plan.bestValue && (
                      <div
                        className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary
                                         text-white text-xs font-bold uppercase tracking-wider
                                         px-3 py-1 rounded-full bg-gradient-to-r from-blue-600 to-violet-600"
                      >
                        Best Value
                      </div>
                    )}
                    <h3 className="text-2xl font-semibold text-heading-1">
                      {plan.title}
                    </h3>
                    <p className="mt-4 text-4xl font-bold text-heading-1">
                      {plan.price}
                    </p>
                    <ul className="mt-6 flex-1 space-y-3 text-left text-heading-3">
                      {plan.features.map((feature, keyFeatures) => (
                        <li
                          key={keyFeatures}
                          className="flex items-center gap-2"
                        >
                          <span className="text-primary">✅ </span>
                          <span>{feature} </span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8">
                      <Button className="w-full transform transition-transform duration-300 hover:scale-105 text-white">
                        Choose Plan
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
