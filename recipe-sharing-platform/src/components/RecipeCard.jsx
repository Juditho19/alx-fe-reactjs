
export default function RecipeCard({ recipe }) {
  return (
    <article
      className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
    >
      <div className="aspect-[3/2] overflow-hidden bg-gray-100">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      <div className="p-4 sm:p-5">
        <h3 className="text-lg font-semibold text-gray-900">{recipe.title}</h3>
        <p className="mt-2 text-sm text-gray-600">
          {recipe.summary}
        </p>

        {/* Placeholder link – will be wired up when routing is added */}
        <a
          href="#"
          aria-disabled="true"
          className="mt-4 inline-flex items-center gap-2 rounded-full border border-gray-300 px-3 py-1.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50 focus:outline-none"
          onClick={(e) => e.preventDefault()}
        >
          View details
          <span aria-hidden>→</span>
        </a>
      </div>
    </article>
  );
}
