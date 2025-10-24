import { RiDeleteBinLine } from 'react-icons/ri';
import { VscGitPullRequestGoToChanges } from 'react-icons/vsc';
import { useDispatch } from 'react-redux';
import * as ContactsService from '../../redux/contacts/contactsOperations';
import { ChangeBtn, ContainerBtns, DeleteBtn } from './ContactCard.styled';

const ContactCard = ({ contact, onClickToggle }) => {
  const dispatch = useDispatch();
  const { name, phone, _id } = contact;

  return (
    <>
      <div>
        <p>{name}</p>
        <p>{phone}</p>
      </div>
      <ContainerBtns>
        <DeleteBtn
          type="button"
          onClick={() => dispatch(ContactsService.deleteContact(_id))}
        >
          <RiDeleteBinLine size={24} />
        </DeleteBtn>

        <ChangeBtn type="button" onClick={() => onClickToggle(_id)}>
          <VscGitPullRequestGoToChanges size={24} />
        </ChangeBtn>
      </ContainerBtns>
    </>
  );
};

export default ContactCard;
