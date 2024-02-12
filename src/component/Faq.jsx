import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

const Faq = () => {
  return (
    <div className="mt-5 mb-5">
      <div className="Frequently">
        <span>Frequently asked questions</span>
      </div>
      <div className="Everything">
        <span>Everything you need to know about the product and billing.</span>
      </div>
      <div className="vibesss">
        <div className="other">
          <div className="mb-5">
            <Accordion>
              <AccordionSummary
                expandIcon={
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 8.125V16.125M8 12.125H16M22 12.125C22 17.6478 17.5228 22.125 12 22.125C6.47715 22.125 2 17.6478 2 12.125C2 6.60215 6.47715 2.125 12 2.125C17.5228 2.125 22 6.60215 22 12.125Z"
                      stroke="#0A0A0A"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                }
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <div className="ispossible">
                  Is there a free trial available?
                </div>
              </AccordionSummary>
              <AccordionDetails>
                <div className="yess">
                  Yes, you can try us for free for 30 days. If you want, we’ll
                  provide you with a free, personalized 30-minute onboarding
                  call to get you up and running as soon as possible.
                </div>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="mb-5">
            <Accordion>
              <AccordionSummary
                expandIcon={
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 8.125V16.125M8 12.125H16M22 12.125C22 17.6478 17.5228 22.125 12 22.125C6.47715 22.125 2 17.6478 2 12.125C2 6.60215 6.47715 2.125 12 2.125C17.5228 2.125 22 6.60215 22 12.125Z"
                      stroke="#0A0A0A"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                }
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <div className="ispossible">Can I change my plan later?</div>
              </AccordionSummary>
              <AccordionDetails>
                <div className="yess">
                  Yes, you can try us for free for 30 days. If you want, we’ll
                  provide you with a free, personalized 30-minute onboarding
                  call to get you up and running as soon as possible.
                </div>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="mb-5">
            <Accordion>
              <AccordionSummary
                expandIcon={
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 8.125V16.125M8 12.125H16M22 12.125C22 17.6478 17.5228 22.125 12 22.125C6.47715 22.125 2 17.6478 2 12.125C2 6.60215 6.47715 2.125 12 2.125C17.5228 2.125 22 6.60215 22 12.125Z"
                      stroke="#0A0A0A"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                }
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <div className="ispossible">
                  What is your cancellation policy?
                </div>
              </AccordionSummary>
              <AccordionDetails>
                <div className="yess">
                  Yes, you can try us for free for 30 days. If you want, we’ll
                  provide you with a free, personalized 30-minute onboarding
                  call to get you up and running as soon as possible.
                </div>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="mb-5">
            <Accordion>
              <AccordionSummary
                expandIcon={
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 8.125V16.125M8 12.125H16M22 12.125C22 17.6478 17.5228 22.125 12 22.125C6.47715 22.125 2 17.6478 2 12.125C2 6.60215 6.47715 2.125 12 2.125C17.5228 2.125 22 6.60215 22 12.125Z"
                      stroke="#0A0A0A"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                }
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <div className="ispossible">
                  Can other info be added to an invoice?
                </div>
              </AccordionSummary>
              <AccordionDetails>
                <div className="yess">
                  Yes, you can try us for free for 30 days. If you want, we’ll
                  provide you with a free, personalized 30-minute onboarding
                  call to get you up and running as soon as possible.
                </div>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="mb-5">
            <Accordion>
              <AccordionSummary
                expandIcon={
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 8.125V16.125M8 12.125H16M22 12.125C22 17.6478 17.5228 22.125 12 22.125C6.47715 22.125 2 17.6478 2 12.125C2 6.60215 6.47715 2.125 12 2.125C17.5228 2.125 22 6.60215 22 12.125Z"
                      stroke="#0A0A0A"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                }
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <div className="ispossible">How does billing work?</div>
              </AccordionSummary>
              <AccordionDetails>
                <div className="yess">
                  Yes, you can try us for free for 30 days. If you want, we’ll
                  provide you with a free, personalized 30-minute onboarding
                  call to get you up and running as soon as possible.
                </div>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
