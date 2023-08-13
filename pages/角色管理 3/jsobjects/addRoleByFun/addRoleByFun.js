export default {

	addRole: async () => {
		const newRole = await addRole.run();
		console.log('P:', newRole);
	}
}