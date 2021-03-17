import Button from 'react-bootstrap/Button';

const MyBtn = ({ variant, name, clickFunction}) => {

    return(
        <>
            <Button variant={variant} onClick={clickFunction}>{name}</Button>
        </>
    )
}
export default MyBtn;