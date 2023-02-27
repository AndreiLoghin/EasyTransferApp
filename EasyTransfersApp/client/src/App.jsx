import { Navbar, WelcomePage, Footer, ServicesSection, Transactions } from './components';


const App = () => (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <WelcomePage />
      </div>
      <ServicesSection />
      <Transactions />
      <Footer />
    </div>
  );


export default App;
