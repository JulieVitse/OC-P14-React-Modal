import { TestComponent } from '../../TestComponent/TestComponent'
import Modal from '../../lib/components/Modal/Modal'
import { useModal } from '../../lib/components/Modal/useModal'

export function MultipleModals() {
  // if you need more than one modal, you need to use different names for the hooks
  const {
    isOpen: isOpenConfirm,
    openModal: openModalConfirm,
    closeModal: closeModalConfirm,
    handleEscClose: handleEscCloseConfirm,
  } = useModal()
  const {
    isOpen: isOpenForm,
    openModal: openModalForm,
    closeModal: closeModalForm,
    handleEscClose: handleEscCloseForm,
  } = useModal()

  return (
    <>
        <div className="btn__container">
          <button className="btn" onClick={() => openModalConfirm()}>
            Open Confirm
          </button>
          <button className="btn" onClick={() => openModalForm()}>
            Open Form
          </button>
        </div>
      <Modal
        isOpen={isOpenConfirm}
        closeModal={closeModalConfirm}
        handleEscClose={handleEscCloseConfirm}
        textContent='I am a confirm modal'
      />

      <Modal
        isOpen={isOpenForm}
        closeModal={closeModalForm}
        handleEscClose={handleEscCloseForm}
        ChildComponent={<TestComponent name={'Form component'} />}
      />
    </>
  )
}
