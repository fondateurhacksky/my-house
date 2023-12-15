import RegistrationForm from "../../../../../components/blog/register/person/sign"
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Mobilier',
}

export default function RegisterPage() {
    return (
        <div>
            <RegistrationForm/>
        </div>
    )
}