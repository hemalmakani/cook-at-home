import SearchBar from "~/components/ui/SearchBar";
import TrendingRecipes from "~/components/ui/TrendingRecipes";

export default function Home() {
  return (
    <div className="p-6">
      <SearchBar />
      <TrendingRecipes />
    </div>
  );
}
