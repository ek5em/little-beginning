import MyInput from "../UI/input/MyInput";
import MySelect from "../UI/select/MySelect";

const PostFilter = ({ filter, setFilter }) => {
   return (
      <div>
         <MyInput
            placeholder="Поиск"
            value={filter.query}
            onChange={(e) => setFilter({ ...filter, query: e.target.value })}
         />
         <MySelect
            options={[
               { value: "body", title: "Содержимому" },
               { value: "title", title: "Заголовку" },
            ]}
            value={filter.sort}
            onChange={(sort) => setFilter({ ...filter, sort: sort })}
            defaultValue={"Сортировка по"}
         />
      </div>
   );
};
export default PostFilter;
