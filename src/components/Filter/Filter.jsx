import css from './Filter.module.css'


export const Filter = ({filter, onChange}) => {

  
  
    const handleChange = (e) => { 
    
        
  
      onChange(e.target.value);
        
    }


    return (
      <div>
        <p className={css.filterTittle}>Find contacts by name</p>
        <input
          className={css.input}
                type="text"
                name="filter"
                value={filter}
                onChange={handleChange}
            />
      </div>
    )
  
}
