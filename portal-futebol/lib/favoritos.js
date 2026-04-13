export const updateFavorite = async (id, newName) => {
  const query = new Parse.Query("Favorites");
  const obj = await query.get(id);

  obj.set("name", newName);
  await obj.save();
};
