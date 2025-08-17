
import { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";
import recipesData from "../data.json"; 

export default function HomePage() {
  const [recipes, setRecipes] = useState([]);

  
  useEffect(() => {
    
    const timer = setTimeout(() => setRecipes(recipesData), 0);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen bg-gray-50">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <header className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
            Discover Recipes
          </h1>
          <p className="mt-2 text-gray-600">
            Browse community favourites and get inspired in the kitchen.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {recipes.map((r) => (
            <RecipeCard key={r.id} recipe={r} />
          ))}
        </div>

       
        {recipes.length === 0 && (
          <p className="text-gray-500">Loading recipes…</p>
        )}
      </section>
    </main>
  );
}
