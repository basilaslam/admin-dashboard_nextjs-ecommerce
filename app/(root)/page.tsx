import { Button } from '@/components/ui/button'
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'


export default function SetupPage() {
  return (
   <div>
    <UserButton afterSignOutUrl='/'/>
   </div>
  )
}
