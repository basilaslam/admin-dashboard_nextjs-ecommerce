"use client"
import { Button } from '@/components/ui/button'
import { Modal } from '@/components/ui/modal'
import { useStoreModel } from '@/hooks/use-store-modal'
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import { useEffect } from 'react'


export default function SetupPage() {
      const onOpen = useStoreModel((state) => state.onOpen)
      const isOpen = useStoreModel((state) => state.isOpen)
    useEffect(()=>{
      if(!isOpen){
        onOpen()
      }
    },[])
  
  
      return (
   <div>
  Root page
   </div>
  )
}
