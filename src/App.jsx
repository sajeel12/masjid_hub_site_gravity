import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeatureSection from './components/FeatureSection'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import screenImg from './assets/images/screen.png'

function App() {
  return (
    <div className="font-sans antialiased text-slate-800 bg-white">
      <Navbar />

      <Hero />

      {/* Feature 1: Home/Screens */}
      <FeatureSection
        title="MasjidHub"
        highlight="Screens"
        description="What if you could expand the walls of your mosque all the way to your visitors' homes? Some are just unable to come or might be stuck at home with the little ones. With Home, you cannot only livestream but also interact and share your knowledge through pre-recorded videos, bringing your mosque experience closer than ever before."
        imagePosition="right"
        image={screenImg}
      />

      {/* Feature 2: Widgets (Alternating) */}
      <FeatureSection
        title="MasjidHub"
        highlight="Widgets"
        description="Already have a website? You don't need to build it from scratch just to add some of our features. You can easily integrate our automatic prayer times and donation widgets by simply copying and pasting our code."
        imagePosition="left"
        bg="light"
      />

      {/* Feature 3: Pages */}
      <FeatureSection
        title="MasjidHub"
        highlight="Pages"
        description="Broaden your reach by bringing your mosque to the web and showing everything you offer. An online hub to inform, access a wider audience, develop your online identity and showcase your work."
        imagePosition="right"
      />

      {/* Feature 4: Donations (Alternating) */}
      <FeatureSection
        title="MasjidHub"
        highlight="Donations"
        description="Generosity is at the heart of mosque operations. It allows you to construct buildings and assist the community's most vulnerable members."
        imagePosition="left"
        bg="light"
      />

      {/* Feature 5: Social */}
      <FeatureSection
        title="MasjidHub"
        highlight="Social"
        description="Meet your audience right where they are. Thanks to polished, custom visuals, you can engage your followers on social media and produce pertinent and engaging content. Provide quick access to prayer and Jumu'ah times, as well as Imsak, Iftar and Taraweeh times during Ramadan."
        imagePosition="right"
      />

      <Testimonials />

      <Footer />
    </div>
  )
}

export default App
