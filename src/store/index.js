import Vue from 'vue';
import Vuex from 'vuex';
import firebase from "firebase/app";
import "firebase/auth";
import database from "../firebase/firebaseInit";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sampleBlogCards: [
      { blogTitle: "Blog Card 1", blogCoverPhoto: "stock-1", blogDate: "July 16, 2021" },
      { blogTitle: "Blog Card 2", blogCoverPhoto: "stock-2", blogDate: "July 19, 2021" },
      { blogTitle: "Blog Card 3", blogCoverPhoto: "stock-3", blogDate: "July 22, 2021" },
      { blogTitle: "Blog Card 4", blogCoverPhoto: "stock-4", blogDate: "July 23, 2021" },
    ],

    editPost: null,
    user: null,
    profileEmail: null,
    profileFirstName: null,
    profileLastName: null,
    profileUsername: null,
    profileId: null,
    profileInitials: null,
  },
  mutations: {
    toggleEditPost(state, payload) {
      state.editPost = payload;
      console.log(state.editPost);
    },
    updateUser(state, doc) {
      state.user = doc;
    },
    setProfileInfo(state, doc) {
      state.profileId = doc.id;
      state.profileEmail = doc.data().email;
      state.profileFirstName = doc.data().firstName;
      state.profileLastName = doc.data().lastName;
      state.profileUsername = doc.data().username;
    },
    setProfileInitials(state) {
      state.profileInitials = 
        state.profileFirstName.match(/(\b\S)?/g).join("") +
        state.profileLastName.match(/(\b\S)?/g).join("");
    },
  },
  actions: {
    async getCurrentUser({ commit }) {
      const dataBase = await database.collection("users").doc(firebase.auth().currentUser.uid);
      const databaseResults = await dataBase.get();
      commit("setProfileInfo", databaseResults);
      commit("setProfileInitials");
      console.log(databaseResults);
    }
  },
  modules: {
  }
})
