import { createRouter, createWebHistory } from "vue-router";
import App from "../App.vue";
import Quill from "../components/Editor/Quill/Quill.vue";
import Tiptap from "../components/Editor/Tiptap/Tiptap.vue";

const routes = [
	{ path: "/", component: App },
	{ path: "/Quill", component: Quill },
	{ path: "/Tiptap", component: Tiptap },
];

const router = createRouter({ history: createWebHistory(), routes });

export default router;