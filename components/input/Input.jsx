
// import styles
import s from './input.module.css'


const Input = (props) => {
    return (
        <div>

            <input

                className={s.input}
                onChange={(e) => props.setValue(e.target.value)}
                type={props.type}
                placeholder={props.placeholder}
                value={props.value} />

        </div>
    );
};

export default Input;

