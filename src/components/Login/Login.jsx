import FormLogin from 'components/FormLogin/FormLogin';
import { ModalBackdrop, ModalContent } from './Login.styled';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

export default function Login() {
  return createPortal(
    <ModalBackdrop>
      <ModalContent>
        <FormLogin />
      </ModalContent>
    </ModalBackdrop>,
    modalRoot
  );
}
