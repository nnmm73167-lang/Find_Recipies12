import axios from "axios";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import RecipeCard from "./components/RecipiCard";
import Loading from "./components/Loading";
function Home() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [total, setTotal] = useState(0);
  async function featchRecipe(skipCount = 0) {
    try {
      const { data } = await axios.get(
        `https://dummyjson.com/recipes?limit=6&skip=${skipCount}`,
      );
      console.log(data);
      setRecipes((prev) => [...prev, ...data.recipes]);
      setTotal(data.total);
      setLoading(false);
    } catch (err) {
      console.log("Error : Can not featch recipes", err);
    }
  }
  useEffect(() => {
    featchRecipe();
  }, []);
  return loading ? (
    <Loading />
  ) : (
    <>
      <Navbar />
      <div className="min-h-screen max-w-6xl mx-auto bg-background text-text font-sans px-4 py-6">
        <form className="flex gap-2 max-w-md mx-auto mb-8 mt-2">
          <input
            type="text"
            placeholder="Search recips..."
            className="flex-1 border border-border rounded px-3 py-2 bg-card text-text outline-none focus:border-accent"
          />
          <button
            type="button"
            className="bg-accent hover:bg-accent-hover text-white rounded px-4 py-2 font-medium"
          >
            Search
          </button>
        </form>
        <div className=" grid grid-cols-2 lg:grid-cols-3 gap-6">
          {recipes.map((p) => (
            <RecipeCard key={p.id} recipe={p} />
          ))}
        </div>
        {recipes.length < total && (
          <div className="text-center mt-8">
            <button
              type="button"
              className="  text-white rounded px-6 py-2 font-medium bg-accent hover:bg-accent-hover"
              onClick={() => featchRecipe(recipes.length)}
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default Home;
