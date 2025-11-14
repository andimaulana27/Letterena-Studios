// src/app/(auth)/login/page.tsx
import { Metadata } from 'next';
import LoginClientPage from './LoginClientPage'; // Impor komponen client yang baru

// Di sini kita bisa mengekspor metadata dengan aman
export const metadata: Metadata = {
  // --- PERUBAHAN DI SINI ---
  title: 'Login or Create Account | Letterena Studios',
  description: 'Sign in to your Letterena Studios account to access your purchased fonts and manage your subscription, or create a new account to start your creative journey.',
  // --- AKHIR PERUBAHAN ---
};

// Halaman ini sekarang adalah Server Component
export default function LoginPage() {
  // Ia hanya me-render komponen client
  return <LoginClientPage />;
}