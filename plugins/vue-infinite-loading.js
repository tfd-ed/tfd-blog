import Vue from "vue";
import InfiniteLoading from "vue-infinite-loading";

Vue.use(InfiniteLoading, {
  slots: {
    noMore: "No more confessions :-(", // you can pass a string value
  },
});
