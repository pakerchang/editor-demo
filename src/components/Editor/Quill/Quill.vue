<script>
import { ref } from "vue";
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";
import Modal from "./Modal.vue";

export default {
	components: {
		QuillEditor,
		Modal,
	},
	data() {
		return {
			preview: "",
			visible: false,
			editorOption: {
				placeholder: "Please enter here",
				theme: "snow",
				contentType: "html",
				modules: {
					toolbar: {
						container: [
							["bold", "italic", "underline", "strike"], 
							["blockquote", "code-block"],
							[{ header: 1 }, { header: 2 }],
							[{ list: "ordered" }, { list: "bullet" }],
							[{ script: "sub" }, { script: "super" }],
							[{ indent: "-1" }, { indent: "+1" }], 
							[{ direction: "rtl" }], 
							[{ size: ["small", false, "large", "huge"] }],
							[{ header: [1, 2, 3, 4, 5, 6, false] }],
							[{ color: [] }, { background: [] }], 
							[{ font: [] }],
							[{ align: [] }],
							["link", "video"],
							["clean"], 
							["showPreview"],
						],
						handlers: {
							showPreview: this.showPreview,
						},
						initShowPreview() {
							const showPreview = document.querySelector(".ql-showPreview");
							showPreview.title = "預覽";
						},
					},
				},
			},
		};
	},
	mounted() {
		this.editorOption.modules.toolbar.initShowPreview();
	},
	methods: {
		onEditorChange(e) {
			this.preview = e;
			return this.preview;
		},
		showPreview() {
			console.log("click from custom");
		},
		showModal() {
			this.visible = !false;
		},
	},
	// imo
};
</script>
<template lang="">
	<div className="postField">
		<h1>Quill</h1>
		<div class="editor">
			<QuillEditor v-model="preview" :options="editorOption" @update:content="onEditorChange($event)"> </QuillEditor>
			<!-- <a-button type="primary" @click="showModal">showModal</a-button> -->
			<!-- <a-modal v-model="visible" title="Title" onOk="showM"></a-modal> -->
			<Modal :content="preview" :visible="false" />
		</div>
		<!-- <div class="preview">{{ preview }}</div> -->
	</div>
</template>
<style lang="scss">
.ql-editor {
	height: 30vh;
}
.ql-showPreview {
	content: "Preview";
}
</style>
