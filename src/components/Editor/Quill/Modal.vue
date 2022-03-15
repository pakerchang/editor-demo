<script>
import { defineComponent, ref, reactive } from "@vue/runtime-core";
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";

export default defineComponent({
	components: {
		QuillEditor,
	},
	props: {
		visible: Boolean,
		content: Object,
	},
	emits: ["update:visible"],
	setup(props, { emit }) {
		const changePreview = true;
		const previewWidth = ref("");
		// const contentRef = ref(props.content);
		// const visibleRef = ref(props.visible);
		const handleShowModal = () => {
			emit("update:visible", true);
		};
		const handleOk = (e) => {
			emit("update:visible", false);
		};
		const handleChange = () => {
			return changePreview === true ? "1280px" : "480px";
		};
		// watch(()=>{
		//    console.log(content.value);
		// })
		return {
			changePreview,
			previewWidth,
			// visibleRef,
			// contentRef,
			handleShowModal,
			handleOk,
			handleChange,
		};
	},
});
</script>
<template lang="">
	<div>
		<a-button type="primary" @click="showModal">Open Modal</a-button>
		<a-modal v-model:visible="visible" title="Preview" @ok="handleOk" width="1400px">
			<div class="preview">
				<QuillEditor class="laptop" v-if="visible" :content="content" theme="" toolbar="" readOnly />
				<QuillEditor class="mobile" v-if="visible" :content="content" theme="" toolbar="" readOnly />
			</div>
		</a-modal>
	</div>
</template>
<style lang="scss">
.preview {
	display: flex;
	flex-direction: column;
}
.laptop {
	width: 1280px;
	background-color: beige;
}
.mobile {
	width: 414px;
	height: 844px;
	background-color: burlywood;
}
</style>
