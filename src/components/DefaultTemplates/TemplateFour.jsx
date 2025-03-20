const TemplateFour = () => {
  return (
    <div className="my-16  container mx-auto bg-white">
      <div className="p-16">
        <h1 className="text-center text-4xl font-bold my-2">Emma Achern 4</h1>
        <h4 className="text-center text-2xl font-semibold">Chemist</h4>

        <div className="divider "></div>
        <h3 className="text-2xl font-medium text-center">
          Professional Summary
        </h3>
        <p className="text-lg text-center mt-2">
          Dedicated and detail-oriented chemist with extensive experience in
          analytical research, laboratory testing, and chemical synthesis.
          Skilled in utilizing advanced instrumentation and methodologies to
          conduct qualitative and quantitative analyses.
        </p>

        {/* Contact Info */}
        <div className="flex justify-center gap-10 mt-6 text-lg">
          <div className="flex flex-col items-center">
            <h4 className="text-green-800 font-semibold">Phone</h4>
            <span> +1 (123) 456-7890</span>
          </div>
          <div className="flex flex-col items-center">
            <h4 className="text-green-800 font-semibold">Email</h4>
            <span>emma.achern@example.com</span>
          </div>
          <div className="flex flex-col items-center">
            <h4 className="text-green-800 font-semibold">Address</h4>
            <span>123 Main St, New York, NY</span>
          </div>
        </div>

        {/* Education */}
        <div className="my-8">
          <h1 className="text-green-800 text-2xl font-bold mb-2">Education</h1>
          <h2 className="text-lg font-semibold">
            Bechelor Of Science In Chemist | 2026-2030
          </h2>
          <p className="text-green-700 font-semibold">
            East State University,valey city
          </p>
          <li>
            <strong>Relevant Coursework:</strong> Organic Chemistry, Analytical
            Chemistry, Physical Chemistry, Biochemistry, Environmental Chemistry
          </li>
          <li>
            <strong>CGPA:</strong> 3.8/4.0
          </li>
        </div>
        {/* Research Experience */}
        <div className="my-8">
          <h1 className="text-green-800 text-2xl font-bold mb-2">
            Research Experience
          </h1>
          <h2 className="text-lg font-semibold">
            Research Assistant | 2028-2029
          </h2>
          <p className="text-green-700 font-semibold">
            Department of Chemistry, East State University
          </p>

          <li>
            <strong>Research Focus:</strong> Investigating the effects of
            environmental pollutants on soil composition
          </li>
          <li>
            <strong>Key Responsibilities:</strong> Conducting experiments,
            analyzing data, and presenting findings
          </li>
          <li>
            <strong>Publications:</strong> Co-author of a paper on "Chemical
            Impact of Heavy Metals on Soil Microorganisms"
          </li>
        </div>

        {/* Project Experience */}
        <div className="my-8">
          <h1 className="text-green-800 text-2xl font-bold mb-2">
            Project Experience
          </h1>

          {/* Project 1 */}
          <h2 className="text-lg font-semibold">
            Fabrication of Miniature Chemical Reactor | 2028
          </h2>
          <p className="text-green-700 font-semibold">
            Department of Chemistry, East State University
          </p>
          <ul className="list-none mt-2 text-gray-700">
            <li>
              <strong>Project Focus:</strong> Design and fabrication of a
              miniature chemical reactor for lab-scale reactions
            </li>
            <li>
              <strong>Key Responsibilities:</strong> Developing the prototype,
              conducting experiments to test efficiency, and optimizing reactor
              performance
            </li>
            <li>
              <strong>Technologies/Methods Used:</strong> CAD modeling,
              thermodynamic analysis, and material selection for reactor
              components
            </li>
          </ul>

          {/* Project 2 */}
          <h2 className="text-lg font-semibold mt-6">
            The Green Thumb Chemist | 2029
          </h2>
          <p className="text-green-700 font-semibold">
            Department of Chemistry, East State University
          </p>
          <ul className="list-none mt-2 text-gray-700">
            <li>
              <strong>Project Focus:</strong> Development of an eco-friendly
              chemical solution for plant growth and soil health improvement
            </li>
            <li>
              <strong>Key Responsibilities:</strong> Synthesizing the chemical
              solution, testing its effects on different plant species, and
              analyzing soil samples
            </li>
            <li>
              <strong>Technologies/Methods Used:</strong> Green chemistry
              techniques, soil pH analysis, plant growth tracking
            </li>
          </ul>
        </div>

        {/* Awards */}
        <div className="my-8">
          <h1 className="text-green-800 text-2xl font-bold mb-2">
            Notable Awards
          </h1>
          <li>Dean's List,East State University,2026-2030</li>
          <li>Gold Award,Chemistry Olympiad,2027</li>
        </div>

        <div className="divider "></div>
      </div>
    </div>
  );
};

export default TemplateFour;
