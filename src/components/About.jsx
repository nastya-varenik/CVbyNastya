import personalInfo from '../data/personalInfo';

const About = () => {
  return (
    <section id="about" className="py-16 bg-pink-100">
      <div className="container mx-auto px-6 flex flex-col items-center">
        <div className="flex flex-col md:flex-row items-start justify-center gap-6 w-full">
          {/* Image */}
          <div className="md:w-1/4 flex justify-center">
            <img
              src={personalInfo.photo}
              alt={personalInfo.name}
              className="w-60 h-60 object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Text Information */}
          <div className="md:w-3/4 prose prose-pink text-left">
            <h1 className="text-4xl font-bold mb-4">{personalInfo.name}</h1>
            <p className="text-lg mb-4">{personalInfo.description}</p>
            <p className="mb-2">
              <span className="font-semibold">Education:</span> {personalInfo.education}
            </p>
            <p>
              <span className="font-semibold">English level:</span> {personalInfo.englishLevel}
            </p>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-8 w-full flex justify-center">
          <div className="max-w-4xl w-full prose prose-pink text-left px-4 sm:px-6 lg:px-8">
            <p className="text-base leading-relaxed">
              Hello! My name is Nastya, and I am interested in the frontend developer position. Although I do not have formal work experience, I have developed several projects that are showcased in my portfolio. In these projects, I applied technologies to create responsive interfaces, manage routing, and integrate with libraries to enhance functionality and user experience.
            </p>
            <p className="text-base leading-relaxed mt-4">
              I actively use modern approaches such as components and state management, and I am constantly expanding my knowledge in frontend development. I would be happy to discuss how I can contribute to your team and bring interesting ideas to life.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;