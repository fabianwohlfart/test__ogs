import ogs from "open-graph-scraper";

export default defineEventHandler(async (event) => {
  try {
    const ogDataRes = await ogs({ url: "https://nytimes.com" });
    const { error, result } = ogDataRes;

    console.log("Error", error);
    console.log("Result", result);
    return {
      result
    }
  } catch (e) {
    console.log("Catch", e)
    return {
      e
    }
  }
});
