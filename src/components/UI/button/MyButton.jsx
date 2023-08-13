import classes from "./MyButton.module.css";
import classNames from "classnames";

const MyButton = ({ children, selected = false, ...props }) => {
   return (
      <button
         {...props}
         className={classNames({
            [classes.myBtn]: true,
            [classes.myBtn__selected]: selected,
         })}
      >
         {children}
      </button>
   );
};
export default MyButton;
