"use client";

import Layout from "../components/Layout";

export default function About() {
  return (
    <Layout>
    <section id="about" className="py-16 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-6">About Me</h2>
      <p className="max-w-2xl mx-auto text-gray-600">
        I am a front-end developer with 6+ years of experience creating scalable, 
        user-centric, and visually appealing web applications.
      </p>
    </section>
    </Layout>
  );
}
