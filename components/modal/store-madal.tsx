"use client"

import { useStoreModel } from "@/hooks/use-store-modal"
import {Modal} from "@/components/ui/modal"

export const StoreModal = () =>{

const storeModel = useStoreModel()
	
return(
	<Modal title="Create Store"
	 description="Add a new store to manage products and catogeries"
	isOpen={storeModel.isOpen}
	 onClose={() => {storeModel.onClose}}
	 >
	Future Create Store Form	
</Modal>
)
}