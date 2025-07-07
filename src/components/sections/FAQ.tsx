import { Container } from '../shared/Container';
import { Paragraph } from '../shared/Paragraph';
import { Title } from '../shared/Title';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';

const faqData = [
  {
    id: 'item-1',
    question: 'What is our AI-powered service?',
    answer:
      'Our AI service leverages cutting-edge machine learning algorithms to streamline tasks and deliver predictive analytics tailored to your business needs.'
  },
  {
    id: 'item-2',
    question: 'How do I get started?',
    answer:
      'Simply sign up on our platform, choose a subscription plan, and begin integrating with our API right away—no lengthy onboarding required.'
  },
  {
    id: 'item-3',
    question: 'What kind of customer support is available?',
    answer:
      "We offer 24/7 email and chat support for all users, plus priority assistance for Pro and Enterprise customers to ensure you're never left waiting."
  },
  {
    id: 'item-4',
    question: 'Is my data secure with your service?',
    answer:
      'Absolutely—your data is encrypted in transit and at rest. We comply with industry-standard security protocols and undergo regular audits to protect your information.'
  }
];

export const FAQ = () => {
  return (
    <section id="faq" className="py-5">
      <Container>
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <Title>Frequently Asked Questions</Title>
          <Paragraph>
            Find answers to the most common questions about our services.
          </Paragraph>
        </div>

        <div className="max-w-3xl mx-auto mt-8">
          <Accordion type="single" collapsible className="w-full">
            {faqData.map(item => (
              <AccordionItem key={item.id} value={item.id}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Container>
    </section>
  );
};
