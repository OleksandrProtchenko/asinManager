'use client';

import Modal from '@/components/ui/Modal/Modal';
import { useRouter } from 'next/navigation';

export default function ModalLoginPage() {
  const router = useRouter();
  const handleClose = () => {
    router.back();
  };

  return <Modal onClose={handleClose}>login</Modal>;
}
