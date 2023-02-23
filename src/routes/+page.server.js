import { api } from '$lib/ghost';

export async function load() {
	return {
		posts: await api.posts.browse()
	};
}
