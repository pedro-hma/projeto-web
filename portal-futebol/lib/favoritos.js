"use client";

import Parse from "parse/dist/parse.min.js";
const ParseFixed = Parse.default || Parse;

export const addFavorite = async (team) => {
  const Favorite = Parse.Object.extend("Favorites");
  const fav = new Favorite();

  fav.set("name", team.name);
  fav.set("image", team.logo);
  fav.set("type", "team");

  await fav.save();
};

export const getFavorites = async () => {
  const query = new Parse.Query("Favorites");
  const results = await query.find();

  return results.map(item => ({
    id: item.id,
    name: item.get("name"),
    image: item.get("image"),
  }));
};

export const deleteFavorite = async (id) => {
  const query = new Parse.Query("Favorites");
  const obj = await query.get(id);
  await obj.destroy();
};