
import css from './Contact.module.css'
export const Contact = ({name, number, onContactDelete,  idContact}) => {


    return (
        <div className={css.contact}>
            <li className={css.liContact}>{name}: {number}</li>
            <button className ={css.delContact} onClick={() => onContactDelete( idContact)}>Delete</button>
        </div>
    )
  
}
