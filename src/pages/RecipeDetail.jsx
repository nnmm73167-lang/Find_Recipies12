import React from "react";
import { useState, useEffect } from "react";
import Loading from "./components/Loading";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
function RecipeDetail() {
  const [recipe, setRecipe] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errMeaasge, setErrMeaasge] = useState("");
  const { id } = useParams();
  const {
    prepTimeMinutes,
    cookTimeMinutes,
    image,
    name,
    cuisine,
    difficulty,
    rating,
    reviewCount,
    caloriesPerServing,
    servings,
    tags,
    mealType,
    instructions,
  } = recipe;
  async function featchRecipe(params) {
    try {
      const { data } = await axios.get(`https://dummyjson.com/recipes/${id}`);
      console.log(data);
      setRecipe(data);
      setLoading(false);
    } catch (err) {
      setErrMeaasge(
        err.response?.status === 404
          ? "Recipe not found."
          : "Unable to load recipe. Please try again.",
      );
      console.log(" featch Recipe Eror", err);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    setLoading(true)
    setErrMeaasge("")
    featchRecipe();
  }, [id]);
  if (errMeaasge) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
        <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-red-50 text-red-500">
          <svg
            className="h-10 w-10"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v4m0 4h.01M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z"
            />
          </svg>
        </div>

        <h1 className="mb-2 text-2xl font-bold text-gray-900">
          {errMeaasge === "Recipe not found."
            ? "Recipe Not Found"
            : "Something Went Wrong"}
        </h1>

        <p className="mb-6 max-w-md text-sm leading-6 text-gray-500">
          {errMeaasge}
        </p>

        <Link
          to="/"
          className="rounded-lg bg-blue-600 px-5 py-2.5 font-medium text-white transition hover:bg-blue-700"
        >
          Back to Home
        </Link>
      </div>
    );
  }
  return loading ? (
    <Loading />
  ) : (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <Link
        to={"/"}
        className="text-accent hover:underline inline-flex items-center gap-1 mb-6"
      >
        <svg
          className="w-4 h-4 stroke-current fill-none"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <line x1="19" y1="12" x2="5" y2="12" />
          <polyline points="12 19 5 12 12 5" />
        </svg>
        Back to Home
      </Link>

      <div className="flex flex-col md:flex-row gap-8 mb-8">
        <img
          src={image}
          alt={name}
          className="w-full md:w-1/2 h-80 object-cover rounded-md border border-border"
        />
        <div className="md:w-1/2 flex flex-col justify-center">
          <h1 className="font-serif text-3xl font-bold text-text mb-2">
            {name}
          </h1>
          <p className="text-muted mb-4">
            {cuisine} - {difficulty}
          </p>
          <div className="flex items-center gap-1 mb-4 font-medium">
            <svg className="w-4 h-4 fill-accent" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <span>
              {rating} ({reviewCount} reviews)
            </span>
          </div>
          <div className="grid grid-cols-2 gap-2 text-sm border-t border-border pt-4 mb-4">
            <p>
              <strong>Prep time:</strong> {prepTimeMinutes} mins
            </p>
            <p>
              <strong>Cook time:</strong> {cookTimeMinutes} mins
            </p>
            <p>
              <strong>Servings:</strong> {servings}
            </p>
            <p>
              <strong>Calories:</strong> {caloriesPerServing} kcal
            </p>
          </div>
          <p className="text-sm text-muted mb-1">
            <strong>Meal Type:</strong> {mealType?.join(", ")}
          </p>
          <p className="text-sm text-muted">
            <strong>Tags:</strong> {tags?.join(", ")}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-border pt-8">
        <div>
          <h2 className="font-serif text-xl font-bold mb-4">Ingredients</h2>
          <ul className="list-disc pl-5 space-y-1">
            {recipe.ingredients?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-serif text-xl font-bold mb-4">Instructions</h2>
          <ol className="list-decimal pl-5 space-y-2">
            {recipe.instructions?.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
      </div>
    </main>
  );
}

export default RecipeDetail;
