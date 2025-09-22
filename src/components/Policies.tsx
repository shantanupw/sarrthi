import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const Policies = () => {
  return (
    <section id="policies" className="w-full py-20 px-6 md:px-12 bg-background">
      <div className="max-w-5xl mx-auto space-y-10">
        <div className="text-center space-y-3">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-foreground">Policies</h2>
          <p className="text-muted-foreground">Key legal information for Sarrthi IAS learners</p>
        </div>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="privacy">
            <AccordionTrigger>Privacy Policy</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-3 text-sm text-muted-foreground">
                <p><strong>Platform Ownership:</strong> Guiding Light Education Technologies Pvt Ltd, operating under the name of SaarthiIAS.</p>
                <p><strong>Platform Coverage:</strong> Website `http://www.sarrthiias.com` and the SarrthiIAS Mobile App on Google Play.</p>
                <p>We collect information you share, cookies & tracking data, logs, user communications, link tracking, and alerts to improve services, provide feedback, and personalize experience. By submitting webforms/logging in/signing-up, you agree to receive promotional Calls/SMS/WhatsApp/Email, possibly via third-party platforms.</p>
                <p>Security practices include administrative, physical and technical safeguards; no method is 100% secure. Data may be retained for the life of the account and at least three years thereafter.</p>
                <p>For preferences, contact ask@studysaarthi.com. Check the platform for updates to this policy.</p>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="terms">
            <AccordionTrigger>Terms of Use</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-3 text-sm text-muted-foreground">
                <p>By using the website, you agree to the terms without limitation. Materials are provided “as is” without warranties; we are not liable for damages arising from use or inability to use materials. Content, trademarks, and software are proprietary to Guiding Light Education Technologies Pvt. Ltd.</p>
                <p>Users are responsible for compliance with local laws. Submission of webforms/login/signup implies consent to receive promotional communications, potentially via third parties.</p>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="refund">
            <AccordionTrigger>Refund & Cancellation Policy</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-3 text-sm text-muted-foreground">
                <p><strong>Main:</strong> Payments are final; no refunds.</p>
                <p><strong>Cancellation:</strong> No refunds or transfers. In special cases, course change may be allowed with minimum 25% administrative deduction; balance kept as retained money for new courses only and subject to approval.</p>
                <p><strong>Extra Payments:</strong> Verified extra payments may be refunded within 15 days via NEFT, cheque collection, or other agreed means. Bank-related issues lie with the bank; StudySaarthi may assist within constraints.</p>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default Policies;


