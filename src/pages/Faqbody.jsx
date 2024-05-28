import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { Link } from 'react-router-dom';
const Faqbody = () => {
  return (
    <div className="paddington2">
      <div>
        <div className="freq">Frequently asked questions</div>
        <div className="billing">
          Everything you need to know about the product and billing.
        </div>
      </div>
      <div className="mt-5">
        <input
          type="text"
          placeholder="Search for a question"
          className="quessde"
        />
        <div className="mt-5">
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
                <div className="ispossible">
                  Quotation request to clear a 40ft container locally and <br />
                  deliver within Douala
                </div>
              </AccordionSummary>
              <AccordionDetails>
                <div className="yess">
                  We need your packing list + commercial invoice to give you the
                  requested offer
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
                  Transit Time for international freight ex France to Douala
                </div>
              </AccordionSummary>
              <AccordionDetails>
                <div className="yess">average 25 days</div>
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
                  Delivery time for local Air service
                </div>
              </AccordionSummary>
              <AccordionDetails>
                <div className="yess">
                  3 days if all documents OK and transmitted to us at least 3
                  days before flight arrived
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
                  Delivery time for local Sea service
                </div>
              </AccordionSummary>
              <AccordionDetails>
                <div className="yess">
                  8 to 11 days after vessel arrival , if all document OK and
                  transmitted at least 14 days prior vessel arrival
                </div>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
        <div className="doubts">Have more doubts?</div>
        <div className="cus">
          <Link
            to="/contact"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Faqbody;
