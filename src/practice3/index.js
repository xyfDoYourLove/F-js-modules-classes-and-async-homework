export const getPoetry = async () => {
  // TODO feedback：url可以抽成变量
  const response = await fetch("https://v1.jinrishici.com/all.json");
  const data = await response.json();
  return [data.origin, data.author, data.content];
};
