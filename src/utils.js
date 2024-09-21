export const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const updateNameInDb = async (newName) => {
  await sleep(1500);
  if (newName.toLowerCase().includes("error"))
    throw new Error("Failed to update name");
  localStorage.setItem("name", JSON.stringify(newName));
  return newName;
};
