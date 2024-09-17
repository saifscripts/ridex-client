import { ContactUs } from '@/features/contact-us';

const AboutUs = () => {
  return (
    <div className="bg-white text-gray-700">
      {/* Mission Statement Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg max-w-2xl mx-auto">
            At BikeRentals, we aim to make transportation easier, eco-friendly,
            and affordable. Our mission is to provide easy access to quality
            bikes, empowering individuals to explore and commute while promoting
            a greener planet.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Meet the Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="text-center">
              <img
                className="w-32 h-32 rounded-full mx-auto mb-4"
                src="https://via.placeholder.com/150"
                alt="John Doe"
              />
              <h3 className="text-xl font-semibold">John Doe</h3>
              <p className="text-sm text-gray-500">CEO & Founder</p>
              <p className="mt-4">
                John is the visionary behind BikeRentals, with a passion for
                sustainable transport and over a decade of experience in the
                tech industry.
              </p>
            </div>
            {/* Team Member 2 */}
            <div className="text-center">
              <img
                className="w-32 h-32 rounded-full mx-auto mb-4"
                src="https://via.placeholder.com/150"
                alt="Jane Smith"
              />
              <h3 className="text-xl font-semibold">Jane Smith</h3>
              <p className="text-sm text-gray-500">CTO</p>
              <p className="mt-4">
                Jane leads our tech team, ensuring a seamless and efficient
                rental experience for all users.
              </p>
            </div>
            {/* Add more team members as needed */}
          </div>
        </div>
      </section>

      {/* History & Milestones Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            From humble beginnings to becoming a leading platform for bike
            rentals, we are proud of the milestones we’ve achieved along the
            way.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Milestone 1 */}
            <div className="bg-white p-6 shadow rounded-lg">
              <h3 className="text-xl font-semibold">2019</h3>
              <p className="mt-4">
                Platform launched with the goal of revolutionizing the way
                people rent bikes.
              </p>
            </div>
            {/* Milestone 2 */}
            <div className="bg-white p-6 shadow rounded-lg">
              <h3 className="text-xl font-semibold">2020</h3>
              <p className="mt-4">
                Reached 10,000+ users, expanding our reach to more cities.
              </p>
            </div>
            {/* Milestone 3 */}
            <div className="bg-white p-6 shadow rounded-lg">
              <h3 className="text-xl font-semibold">2022</h3>
              <p className="mt-4">
                Introduced premium features, partnered with leading brands, and
                enhanced the user experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ContactUs />
    </div>
  );
};

export default AboutUs;
