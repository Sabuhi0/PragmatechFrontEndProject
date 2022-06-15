interface Person {
    name: string;
    age: number;
    country:string;
}

const Header = (props: Person) => {
    return <h1>Salam, menim adim {props.name}-dir, {props.age} yashim var.</h1>;
}


export default Header;
