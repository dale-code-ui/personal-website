const Page = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header Section */}
      <header className="text-center py-12 bg-indigo-600 text-white">
        <h1 className="text-4xl font-bold">Hello, I'm David Le</h1>
        <p className="text-xl mt-4">A passionate web developer & designer from San Francisco</p>
      </header>

      {/* Bio Section */}
      <section className="px-4 py-16 text-center">
        <h2 className="text-3xl font-semibold mb-6">About Me</h2>
        <p className="text-lg max-w-3xl mx-auto">
          I'm David Le, a 28-year-old native of San Francisco. I’ve lived in this amazing city my whole life,
          surrounded by creativity, culture, and technology. I’m passionate about front-end development and love
          creating clean, user-friendly designs that bring ideas to life. When I’m not coding, I enjoy exploring
          new restaurants, hanging out with friends, and soaking up everything San Francisco has to offer.
        </p>
      </section>

      {/* Skills Section */}
      <section className="bg-gray-100 py-16">
        <div className="text-center">
          <h2 className="text-3xl font-semibold mb-6">Skills</h2>
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-lg">
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>React</li>
            <li>Next.js</li>
            <li>HTML & CSS</li>
            <li>Node.js</li>
            <li>Git & GitHub</li>
            <li>UI/UX Design</li>
          </ul>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-4 py-16 text-center">
        <h2 className="text-3xl font-semibold mb-6">Get in Touch</h2>
        <p className="text-lg mb-4">
          Feel free to reach out for collaborations, questions, or just to say hi!
        </p>
        <a
          href="mailto:davidle@example.com"
          className="text-xl text-indigo-600 hover:underline"
        >
          davidle@example.com
        </a>
      </section>

      {/* Footer Section */}
      <footer className="py-4 bg-gray-800 text-white text-center">
        <p>Built with love by David Le using Next.js & Tailwind CSS</p>
        <p>&copy; 2025 David Le</p>
      </footer>
    </div>
  );
};

export default Page;
