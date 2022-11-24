import { getField } from "vuex-map-fields";
export default {
  getCourse: (state) => state.course,
  getPurchase: (state) => state.purchase,
  getChapter: (state) => (chapterNumber) => {
    return state.course.chapters.find(
      (chapter) => parseInt(chapter.chapterNumber) === parseInt(chapterNumber)
    );
  },
  getChapterByNumber: (state) => (chapterNumber) => {
    return state.course.chapters.find(
      (chapter) => chapter.chapterNumber === chapterNumber
    );
  },
  getField,
};
