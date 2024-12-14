import Layout from "../components/Layout";

export default function Contact() {
  return (
    <Layout>
      <section id="contact" className="py-16 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
        <p>
          Email:{" "}
          <a href="mailto:helinabmeaza@gmail.com" className="text-blue-600">
            helinabmeaza@gmail.com
          </a>
        </p>
        <p>Phone: +971 58 133 8536</p>
        <p>
          LinkedIn:{" "}
          <a href="https://linkedin.com/in/helina" className="text-blue-600" target="_blank">
            linkedin.com/in/helina
          </a>
        </p>
      </section>
    </Layout>
  );
}
