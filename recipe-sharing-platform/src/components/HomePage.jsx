
import { Link } from "react-router-dom"; 
const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center px-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        Welcome to Simmer 🍳
      </h1>
      <p className="text-lg text-gray-600 mb-6 max-w-xl">
        Discover, share, and explore amazing recipes from around the world.  
        Join our community of food lovers and start cooking something new today!
      </p>

      <div className="flex gap-4">
        
        <Link
          to="/recipes"
          className="px-6 py-3 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition"
        >
          Explore Recipes
        </Link>

        <Link
          to="/submit"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          Share a Recipe
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
