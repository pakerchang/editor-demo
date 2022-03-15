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
	setup(props) {
		const content = ref(props.content);
		const visible = ref(props.visible);
		const handleShowModal = () => {
			visible.value = true;
		};
		const handleOk = (e) => {
			visible.value = false;
		};
		console.log(content);
		return {
			visible,
			content,
			handleShowModal,
			handleOk,
		};
	},
});
</script>
<template lang="">
	<div>
		<a-button type="primary" @click="handleShowModal">modal</a-button>
		<a-modal title="preview" v-model:visible="visible" @ok="handleOk">
			<QuillEditor v-model:content="content" theme="" toolbar="" />
		</a-modal>
	</div>
</template>
<style lang=""></style>
