import { useState } from "react";

export default function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [errors, setErrors] = useState({});

  // Form submit handler
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = {};
    if (!title.trim()) validationErrors.title = "Title is required";
    if (!ingredients.trim()) validationErrors.ingredients = "Ingredients are required";
    if (!instructions.trim()) validationErrors.instructions = "Instructions are required";
    if (ingredients.split(",").length < 2) validationErrors.ingredients = "Please provide at least two ingredients separated by commas";

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    
    console.log({
      title,
      ingredients: ingredients.split(",").map((i) => i.trim()),
      instructions: instructions.split("\n").map((i) => i.trim()),
    });

    // Reset form
    setTitle("");
    setIngredients("");
    setInstructions("");
    setErrors({});
    alert("Recipe submitted successfully!");
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Add a New Recipe</h1>

      <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-md p-6 sm:p-8 space-y-6">
        {/* Recipe Title */}
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
            Recipe Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={`block w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
              errors.title ? "border-red-500" : ""
            }`}
          />
          {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
        </div>

        {/* Ingredients */}
        <div>
          <label htmlFor="ingredients" className="block text-sm font-medium text-gray-700 mb-1">
            Ingredients (comma separated)
          </label>
          <textarea
            id="ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            rows={3}
            className={`block w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
              errors.ingredients ? "border-red-500" : ""
            }`}
          ></textarea>
          {errors.ingredients && <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>}
        </div>

        {/* Instructions */}
        <div>
          <label htmlFor="instructions" className="block text-sm font-medium text-gray-700 mb-1">
            Preparation Steps (one per line)
          </label>
          <textarea
            id="instructions"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            rows={5}
            className={`block w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
              errors.instructions ? "border-red-500" : ""
            }`}
          ></textarea>
          {errors.instructions && <p className="text-red-500 text-sm mt-1">{errors.instructions}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 transition font-medium"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
}
