export const fetchFakeUsers = async (count = 10) => {
  try {
    const response = await fetch(
      `https://fakerapi.it/api/v2/users?_quantity=${count}`,
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

let imagesAreFetching = false;

export const fetchFakeImages = async (
  quantity = 10,
  { type = "animals", width = 640, height = 480 } = {},
) => {
  try {
    imagesAreFetching = true;
    const url = new URL("https://fakerapi.it/api/v2/images");
    url.searchParams.set("_quantity", String(quantity));
    url.searchParams.set("_type", type);
    url.searchParams.set("_width", String(width));
    url.searchParams.set("_height", String(height));

    const res = await fetch(url.toString());
    if (!res.ok) {
      throw new Error(`Image fetch failed (${res.status})`);
    }

    const { data } = await res.json();
    return data;
  } catch (err) {
    console.error("Error fetching images:", err);
    throw err;
  } finally {
    imagesAreFetching = false;
    console.log("Fetch attempt completed.");
  }
};
