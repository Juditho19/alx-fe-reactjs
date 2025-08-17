
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import data from "../data.json";

export default function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const found = data.find((item) => String(item.id) === id);
    setRecipe(found || null);
  }, [id]);

  if (!recipe) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Recipe not found.</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-10">
        <Link
          to="/"
          className="inline-block mb-6 text-blue-600 hover:underline"
        >
          ← Back to recipes
        </Link>

        <article className="bg-white rounded-2xl shadow p-6 sm:p-8">
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full rounded-lg mb-6 object-cover"
          />

          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {recipe.title}
          </h1>
          <p className="text-gray-700 mb-6">{recipe.summary}</p>

          {/* Ingredients */}
          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              {(recipe.ingredients || [
                "2 cups placeholder ingredient",
                "1 tbsp another placeholder",
                "Optional: add real ingredients later",
              ]).map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </section>

          {/* Instructions */}
          <section>
            <h2 className="text-xl font-semibold mb-2">Instructions</h2>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              {(recipe.instructions || [
                "Step 1: Prepare your ingredients.",
                "Step 2: Cook according to recipe method.",
                "Step 3: Serve and enjoy!",
              ]).map((step, idx) => (
                <li key={idx}>{step}</li>
              ))}
            </ol>
          </section>
        </article>
      </div>
    </main>
  );
}
