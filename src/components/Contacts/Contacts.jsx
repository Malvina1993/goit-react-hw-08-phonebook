import {Contact} from 'components/Contact/Contact';
import {Loader} from 'components/Loader/Loader'

export const Contacts = ({contacts, filterName, onContactDelete, loading}) => {  


   const  onFilterChange = () => { 
       if (filterName !== '') {
           return (contacts.filter((contact) => contact.name.toLowerCase().includes(filterName.toLowerCase())));
       }
        
       return contacts;
    }


  
    return (
        <div>
            
            <ul>
                {(loading && <Loader/>) ||((contacts)&&(onFilterChange().map((contact) => {
                    return (
                        <Contact
                            key={contact.id}
                            idContact={contact.id}
                            name={contact.name}
                            number={contact.number}
                            onContactDelete={onContactDelete}
                        />
                    )
                 })))
                        
                }
            </ul>
        </div>
    )

}
