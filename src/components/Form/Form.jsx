import { useState } from 'react';
import css from './Form.module.css';


import { nanoid } from 'nanoid';



export const Form = ({contacts, onSubmit}) => {
   

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    
    const handleChange = (e) => {
        
        // this.setState({
        //     [e.currentTarget.name]: e.currentTarget.value,
        // });

        switch (e.currentTarget.name) {
            case 'name':
                setName(e.currentTarget.value);
                break;
            case 'number':
                setNumber(e.currentTarget.value);
                break;
            default:
                break;
        }
    }

        

    const handleFormSubmit = (e) => { 
        e.preventDefault();

        setName('');
        setNumber('');

        if (contacts.some((contact) => contact.name === name)) { 
            alert('This contact already exists');
            return;
        }


        onSubmit({name, number}, nanoid())
       
    }

  
    return (
        <div>
            
            <form className={css.form} onSubmit={handleFormSubmit}>
                <label className={css.label}>Name</label>
                    <input
                        className={css.input}
                        name="name"
                        value={name}
                        onChange={handleChange}
                        required
                    />
                <label className={css.label}>Number</label>
                  <input
                      className={css.input}
                      type="tel"
                      name="number"
                      value={number}
                      onChange={handleChange}
                      required
                  />
               
                <button className={css.button} type='submit'>Add contact</button>
            </form>   
       </div>
    )
  
}
