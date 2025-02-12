import Image from "next/image";
import Link from "next/link";
import { recipes } from "~/data/recipes";

// Add this when you have the API ready
// async function getTrendingRecipes() {
//   const response = await fetch('/api/recipes/trending');
//   if (!response.ok) throw new Error('Failed to fetch trending recipes');
//   return response.json();
// }

export default async function TrendingRecipes() {
  // Replace this with API call when ready
  // const recipes = await getTrendingRecipes();

  return (
    <div>
      <h2 className="mb-4 text-2xl font-semibold">Trending Recipes</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {recipes.map((recipe) => (
          <Link
            href={`/recipe/${recipe.slug}`}
            key={recipe.id}
            className="group"
          >
            <div className="overflow-hidden rounded-lg bg-card shadow-md transition-transform duration-200 ease-in-out group-hover:scale-105">
              <Image
                src={`/placeholder.svg?height=200&width=200&text=${recipe.name}`}
                alt={recipe.name}
                width={200}
                height={200}
                className="h-40 w-full object-cover"
              />
              <div className="p-2">
                <h3 className="truncate text-sm font-medium group-hover:text-primary">
                  {recipe.name}
                </h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
