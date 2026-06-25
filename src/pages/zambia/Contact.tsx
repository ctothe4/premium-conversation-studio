import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import ContactForm from "@/components/ContactForm";

const ZambiaContact = () => {
  return (
    <Layout>
      <section className="section-padding">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
              className="lg:col-span-5"
            >
              <span className="subheadline block mb-8">Contact</span>
              <h1 className="headline-hero mb-10">Let's talk.</h1>
              <div className="divider-refined mb-10" />
              <p className="body-large text-muted-foreground max-w-md">
                Tell us about your project. We'll get back to you within one business day.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              className="lg:col-span-7"
            >
              <ContactForm subject="New inquiry from socialcurrency.agency (Zambia)" />
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ZambiaContact;
