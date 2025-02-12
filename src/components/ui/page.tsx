import Header from "./Header";
import SearchBar from "./SearchBar";
import Sidebar from "./Sidebar";
import TrendingRecipes from "./TrendingRecipes";

export default function Home() {
  return (
    <div className="bg-background text-foreground flex h-screen">
      <Sidebar />
      <div className="flex flex-1 flex-col">
        <Header />
        <main className="flex-1 overflow-auto p-6">
          <SearchBar />
          <TrendingRecipes />
        </main>
      </div>
    </div>
  );
}
