export default {
	async addNewRole (){
		storeValue('role',{
			roleName:roleName.text,
			roleKey:roleKey.text,
			roleSort:roleSort.text,
			ststus:roleStatus.selectedOptionValue
		})
		const a =await addroleByAPI3.run;
		console.log(a)
		closeModal()
		showAlert('add success !','success')
		
	}
}