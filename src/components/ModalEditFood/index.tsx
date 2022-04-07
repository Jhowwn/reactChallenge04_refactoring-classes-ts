import { createRef } from 'react';
import { FiCheckSquare } from 'react-icons/fi';

import { Form } from './styles';
import Modal from '../Modal';
import Input from '../Input';
import { FormHandles } from '@unform/core';

interface EditingFood {
  id: number;
  image: string;
  name: string;
  description: string;
  available: boolean;
  price: string;
}

interface AddFood {
  image:string;
  name:string;
  price:string;
  description:string;
}

interface Props {
  isOpen: boolean;
  editingFood: EditingFood
  setIsOpen: () => void;
  handleUpdateFood: (data: AddFood) => void;
}

function ModalEditFood(props: Props) {

  const { isOpen, setIsOpen, editingFood, handleUpdateFood } = props;
  const formRef = createRef<FormHandles>()

  const handleSubmit = async (data: EditingFood ) => {
    handleUpdateFood(data);
    setIsOpen();
  };


  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit} initialData={editingFood}>
        <h1>Editar Prato</h1>
        <Input name="image" placeholder="Cole o link aqui" />

        <Input name="name" placeholder="Ex: Moda Italiana" />
        <Input name="price" placeholder="Ex: 19.90" />

        <Input name="description" placeholder="Descrição" />

        <button type="submit" data-testid="edit-food-button">
          <div className="text">Editar Prato</div>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
};

export default ModalEditFood;