import {useModal} from '../hooks/useModal';
import styles from './styles.module.scss'
import {Button} from "../components/common/Buttons";
import {AutorisationModal} from "../components/Modals/AutorisationModal/AutorisationModal";
import {RegisterationModal} from "../components/Modals/RegisterationModal/RegisterationModal"

export default function Home() {

    const autorisationModal = useModal()
    const registerationModal = useModal()
    return (
        <>
            <div className={styles.buttons}>
                <Button onClick={autorisationModal.open}>Autorisation</Button>
                <Button onClick={registerationModal.open}>Registration</Button>
            </div>
            <AutorisationModal isOpen={autorisationModal.isOpen} onClose={autorisationModal.close}/>
            <RegisterationModal isOpen={registerationModal.isOpen} onClose={registerationModal.close}/>
        </>
    )
}
