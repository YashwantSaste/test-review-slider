import reviews from './data';
import './App.css';
import { Testimonial } from './components/Testimonial';

function App() {
  return (
    <div className="flex flex-col w-[100vw] h-[100vh] justify-center items-center bg-gray-200">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Our Testimonial</h1>
        </div>
        <div className="bg-violet-400 h-[4px] w-1/6 mt-1 mx-auto">
          {/* For Colored Underline */}
        </div>
        <Testimonial reviews={reviews}></Testimonial>
    </div>
  );
}

export default App;
