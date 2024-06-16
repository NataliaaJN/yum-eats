import './App.css';
import Header from './components/Header';
import Hero from './components/Hero/Hero';

function App() {
  return (
    <section className="w-full">
      <Header />
      <div className="bg-pale-orange flex min-h-screen w-full flex-col">
        <Hero />
      </div>
      <section className="container"></section>
      <footer className="container bg-black">footer</footer>
    </section>
  );
}

export default App;
