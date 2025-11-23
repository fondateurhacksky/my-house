import LoginForm from '../components/Log/log';
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Connexion',
}

export default function Login() {
    return <LoginForm />;
}
