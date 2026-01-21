import { fetchFakeImages, fetchFakeUsers } from "../api/api.js";

export const state = {
  users: [],
  images: [],

  fetchUsers: async () => {
    const fetchedUsers = await fetchFakeUsers(5);
    state.users = fetchedUsers; //case is not camelCase by faker api standard
  },
  fetchImages: async () => {
    //to be implemented
    const fetchedImages = await fetchFakeImages();
    state.images = fetchedImages;
  },

  init: async () => {
    // await state.fetchUsers();
    // await state.fetchImages();

    await Promise.all([state.fetchUsers(), state.fetchImages()]);
  },
};
