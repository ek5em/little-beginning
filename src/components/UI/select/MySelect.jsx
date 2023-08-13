const MySelect = ({ options, value, onChange, defaultValue }) => {
   return (
      <select value={value} onChange={(event) => onChange(event.target.value)}>
         <option disabled value={""}>
            {defaultValue}
         </option>
         {options.map((option) => {
            return (
               <option key={option.value} value={option.value}>
                  {option.title}
               </option>
            );
         })}
      </select>
   );
};
export default MySelect;
