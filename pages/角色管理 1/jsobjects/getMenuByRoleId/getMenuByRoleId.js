export default {
	async getSysMenuByRole(){
		console.log(appsmith.store)
		const a = await getSysRoleMenu.run((
			()=>{},()=>{},{
			pageSize:100,
			pageNum:1,
			params:{
				roleId:appsmith.store.roleId
			}
		}
																			))
		console.log('1',a)
	}
}